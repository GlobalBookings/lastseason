import type { SeasonData } from "../types";
import { leagues } from "../data/leagues/index";

const seasonModules = import.meta.glob<{ default: SeasonData }>(
  "../data/leagues/**/*.ts",
  { eager: true }
);

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

export function getAllLoadedSeasons(): SeasonData[] {
  return Object.values(seasonModules)
    .map((m) => m.default)
    .filter(Boolean);
}
