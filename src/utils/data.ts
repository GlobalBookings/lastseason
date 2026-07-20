import type { SeasonData } from "../types";
import { leagues } from "../data/leagues/index";

const seasonModules = import.meta.glob<{ default: SeasonData }>(
  "../data/leagues/**/*.ts",
  { eager: true }
);

const configuredSeasonKeys = new Set(
  leagues.flatMap((league) => league.seasons.map((season) => `${league.slug}/${season}`))
);

// These routes remain available for existing links, but are excluded from derived
// club/player totals and marked noindex until their source data has been rebuilt.
export const unverifiedSeasonKeys = new Set([
  "mls/2022",
  "mls/2023",
  "championship/2022-23",
  "championship/2021-22",
  "la-liga/2023-24",
  "la-liga/2022-23",
  "la-liga/2021-22",
  "scottish-premiership/2023-24",
  "scottish-premiership/2022-23",
]);

export function getSeasonData(leagueSlug: string, season: string): SeasonData | undefined {
  const key = `../data/leagues/${leagueSlug}/${season}.ts`;
  return seasonModules[key]?.default;
}

export function getAllSeasonPaths(): { leagueSlug: string; season: string }[] {
  const paths: { leagueSlug: string; season: string }[] = [];
  for (const league of leagues) {
    for (const season of league.seasons) {
      paths.push({ leagueSlug: league.slug, season });
    }
  }
  assertConfiguredSeasonData();
  return paths;
}

export function getLeague(slug: string) {
  return leagues.find((l) => l.slug === slug);
}

export function getAdjacentSeasons(leagueSlug: string, currentSeason: string) {
  const league = getLeague(leagueSlug);
  if (!league) return { prev: undefined, next: undefined };
  const idx = league.seasons.indexOf(currentSeason);
  return {
    prev: idx < league.seasons.length - 1 ? league.seasons[idx + 1] : undefined,
    next: idx > 0 ? league.seasons[idx - 1] : undefined,
  };
}

export function getAllLoadedSeasons(options: { includeUnverified?: boolean } = {}): SeasonData[] {
  const { includeUnverified = false } = options;

  return leagues.flatMap((league) => league.seasons.flatMap((season) => {
    const key = `${league.slug}/${season}`;
    if (!configuredSeasonKeys.has(key) || (!includeUnverified && unverifiedSeasonKeys.has(key))) return [];
    const data = getSeasonData(league.slug, season);
    return data ? [data] : [];
  }));
}

export function hasPublishedClubPage(slug: string): boolean {
  return getAllLoadedSeasons().some((season) =>
    season.standings.some((row) => row.clubSlug === slug)
  );
}

export function hasPublishedPlayerPage(slug: string): boolean {
  return getAllLoadedSeasons().some((season) =>
    season.scorers.some((player) => player.playerSlug === slug)
    || season.assisters.some((player) => player.playerSlug === slug)
    || season.cleanSheets.some((player) => player.playerSlug === slug)
  );
}

export interface DataValidationIssue {
  key: string;
  message: string;
  level: "error" | "warning";
}

export function validateConfiguredSeasonData(): DataValidationIssue[] {
  const issues: DataValidationIssue[] = [];

  for (const league of leagues) {
    for (const season of league.seasons) {
      const key = `${league.slug}/${season}`;
      const data = getSeasonData(league.slug, season);
      if (!data) {
        issues.push({ key, level: "error", message: "Configured season has no data module." });
        continue;
      }

      const unverified = unverifiedSeasonKeys.has(key);
      const report = (message: string, forceError = false) => issues.push({
        key,
        message,
        level: unverified && !forceError ? "warning" : "error",
      });

      if (data.leagueSlug !== league.slug || data.season !== season) {
        report("Route metadata does not match its configured league and season.", true);
      }
      if (data.standings.length === 0) report("Standings are empty.", true);

      const positions = data.standings.map((row) => row.pos);
      if (new Set(positions).size !== positions.length) report("Standings contain duplicate positions.", true);

      for (const row of data.standings) {
        if (row.p !== row.w + row.d + row.l) report(`${row.club}: played does not equal wins + draws + losses.`, true);
        if (row.gd !== row.gf - row.ga) report(`${row.club}: goal difference does not equal goals for - goals against.`, true);
      }

      if (!unverified) {
        const first = [...data.standings].sort((a, b) => a.pos - b.pos)[0];
        if (first && first.clubSlug !== data.championSlug) report("Champion does not match the first-placed club.");

        const goalsFor = data.standings.reduce((sum, row) => sum + row.gf, 0);
        if (goalsFor !== data.totalGoals) report(`Total goals is ${data.totalGoals}; standings add up to ${goalsFor}.`);

        const maxScorerGoals = Math.max(0, ...data.scorers.map((scorer) => scorer.goals));
        if (maxScorerGoals !== data.topScorerGoals) report("Top-scorer total does not match the scorer table.");
        if (!data.scorers.some((scorer) => data.topScorer.includes(scorer.name) && scorer.goals === maxScorerGoals)) {
          report("Named top scorer is not a joint-highest scorer in the scorer table.");
        }
      }
    }
  }

  return issues;
}

export function assertConfiguredSeasonData(): void {
  const errors = validateConfiguredSeasonData().filter((issue) => issue.level === "error");
  if (errors.length > 0) {
    const detail = errors.map((issue) => `- ${issue.key}: ${issue.message}`).join("\n");
    throw new Error(`Season data validation failed:\n${detail}`);
  }
}
