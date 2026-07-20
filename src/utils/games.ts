import { getAllLoadedSeasons } from "./data";
import { leagues } from "../data/leagues/index";

export interface GamePuzzle {
  id: string;
  date?: string;
  mode: "season" | "player" | "missing-club" | "club-season";
  answer: string;
  answerKey: string;
  category: string;
  eyebrow: string;
  clues: string[];
  resultTitle: string;
  resultSummary: string;
  resultUrl: string;
  accent: string;
}

export interface AnswerOption {
  key: string;
  label: string;
}

const seasons = getAllLoadedSeasons();

export function isoDate(date = new Date()): string {
  return date.toISOString().slice(0, 10);
}

export function addDays(dateKey: string, amount: number): string {
  const date = new Date(`${dateKey}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() + amount);
  return isoDate(date);
}

function dayNumber(dateKey: string): number {
  return Math.floor(Date.parse(`${dateKey}T00:00:00Z`) / 86_400_000);
}

function selectForDate<T>(items: T[], dateKey: string, salt = 0): T {
  const index = Math.abs((dayNumber(dateKey) * 17) + 11 + salt) % items.length;
  return items[index];
}

function leagueAccent(slug: string): string {
  return leagues.find((league) => league.slug === slug)?.accentColor ?? "#0b1620";
}

export const seasonAnswers: AnswerOption[] = seasons
  .map((season) => ({
    key: `${season.leagueSlug}/${season.season}`,
    label: `${season.league} ${season.season}`,
  }))
  .sort((a, b) => a.label.localeCompare(b.label));

export function getSeasonPuzzle(dateKey: string): GamePuzzle {
  const season = selectForDate(seasons, dateKey);
  const sorted = [...season.standings].sort((a, b) => a.pos - b.pos);
  const champion = sorted[0];
  const runnerUp = sorted[1];
  const last = sorted.at(-1);
  const key = `${season.leagueSlug}/${season.season}`;

  return {
    id: `season:${dateKey}:${key}`,
    date: dateKey,
    mode: "season",
    answer: `${season.league} ${season.season}`,
    answerKey: key,
    category: season.league,
    eyebrow: "Guess the mystery season",
    clues: [
      `This was a ${season.league} season with ${season.standings.length} clubs.`,
      `${season.champion} were champions with ${champion?.pts ?? "—"} points.`,
      `${season.topScorer} led the scoring chart with ${season.topScorerGoals} goals.`,
      `The runners-up were ${runnerUp?.club ?? "not recorded"}, finishing on ${runnerUp?.pts ?? "—"} points.`,
      `${season.relegated.length ? season.relegated.join(", ") : last?.club ?? "The bottom club"} ${season.relegated.length === 1 ? "were" : "were"} relegated.`,
      `There were ${season.totalGoals.toLocaleString("en-GB")} league goals in total.`,
    ],
    resultTitle: `${season.league} ${season.season}`,
    resultSummary: `${season.champion} champions · ${season.topScorer} ${season.topScorerGoals} goals`,
    resultUrl: `/${season.leagueSlug}/${season.season}/`,
    accent: leagueAccent(season.leagueSlug),
  };
}

type PlayerCandidate = {
  key: string;
  name: string;
  appearances: Array<{ season: string; league: string; leagueSlug: string; club: string; clubSlug: string; goals: number }>;
};

const playerMap = new Map<string, PlayerCandidate>();
for (const season of seasons) {
  for (const scorer of season.scorers) {
    const existing = playerMap.get(scorer.playerSlug) ?? { key: scorer.playerSlug, name: scorer.name, appearances: [] };
    existing.appearances.push({
      season: season.season,
      league: season.league,
      leagueSlug: season.leagueSlug,
      club: scorer.club,
      clubSlug: scorer.clubSlug,
      goals: scorer.goals,
    });
    playerMap.set(scorer.playerSlug, existing);
  }
}

const playerCandidates = [...playerMap.values()].filter((player) => player.appearances.length >= 2);

export const playerAnswers: AnswerOption[] = [...playerMap.values()]
  .map((player) => ({ key: player.key, label: player.name }))
  .sort((a, b) => a.label.localeCompare(b.label));

export function getPlayerPuzzle(dateKey: string): GamePuzzle {
  const player = selectForDate(playerCandidates, dateKey, 7);
  const appearances = [...player.appearances].sort((a, b) => a.season.localeCompare(b.season));
  const best = [...appearances].sort((a, b) => b.goals - a.goals)[0];
  const clubs = [...new Set(appearances.map((item) => item.club))];
  const leaguesPlayed = [...new Set(appearances.map((item) => item.league))];
  const first = appearances[0];
  const latest = appearances.at(-1)!;

  return {
    id: `player:${dateKey}:${player.key}`,
    date: dateKey,
    mode: "player",
    answer: player.name,
    answerKey: player.key,
    category: "Player path",
    eyebrow: "Name the archive player",
    clues: [
      `This player appears in ${appearances.length} published scoring charts in our archive.`,
      `Their first tracked entry is ${first.goals} goals for ${first.club} in ${first.season}.`,
      `Their best tracked return is ${best.goals} goals in the ${best.league}.`,
      `They have represented ${clubs.join(" and ")} in these published charts.`,
      `Their latest tracked entry is ${latest.goals} goals for ${latest.club} in ${latest.season}.`,
      `The archive records them across ${leaguesPlayed.join(", ")}.`,
    ],
    resultTitle: player.name,
    resultSummary: `${appearances.reduce((sum, item) => sum + item.goals, 0)} goals across ${appearances.length} published scoring charts`,
    resultUrl: `/players/${player.key}/`,
    accent: "#2563eb",
  };
}

type ClubStandingCandidate = {
  key: string;
  name: string;
  league: string;
  leagueSlug: string;
  season: string;
  pos: number;
  pts: number;
  w: number;
  d: number;
  l: number;
  gf: number;
  ga: number;
};

const clubStandingCandidates: ClubStandingCandidate[] = seasons.flatMap((season) =>
  season.standings.map((row) => ({
    key: row.clubSlug,
    name: row.club,
    league: season.league,
    leagueSlug: season.leagueSlug,
    season: season.season,
    pos: row.pos,
    pts: row.pts,
    w: row.w,
    d: row.d,
    l: row.l,
    gf: row.gf,
    ga: row.ga,
  }))
);

export const clubAnswers: AnswerOption[] = [...new Map(
  clubStandingCandidates.map((club) => [club.key, { key: club.key, label: club.name }])
).values()].sort((a, b) => a.label.localeCompare(b.label));

export function getMissingClubPuzzle(dateKey: string): GamePuzzle {
  const club = selectForDate(clubStandingCandidates, dateKey, 19);
  return {
    id: `missing-club:${dateKey}:${club.leagueSlug}/${club.season}/${club.key}`,
    date: dateKey,
    mode: "missing-club",
    answer: club.name,
    answerKey: club.key,
    category: "Missing club",
    eyebrow: "Name the club from its finish",
    clues: [
      `This club finished ${club.pos}${club.pos === 1 ? "st" : club.pos === 2 ? "nd" : club.pos === 3 ? "rd" : "th"} in the ${club.league} ${club.season}.`,
      `They collected ${club.pts} points.`,
      `Their record was ${club.w} wins, ${club.d} draws and ${club.l} defeats.`,
      `They scored ${club.gf} league goals.`,
      `They conceded ${club.ga} league goals.`,
      `Their goal difference was ${club.gf - club.ga > 0 ? "+" : ""}${club.gf - club.ga}.`,
    ],
    resultTitle: club.name,
    resultSummary: `${club.pos}${club.pos === 1 ? "st" : club.pos === 2 ? "nd" : club.pos === 3 ? "rd" : "th"} in ${club.league} ${club.season} · ${club.pts} points`,
    resultUrl: `/clubs/${club.key}/`,
    accent: leagueAccent(club.leagueSlug),
  };
}

export type ClubChallenge = {
  slug: string;
  name: string;
  puzzles: GamePuzzle[];
  answers: AnswerOption[];
};

export function getClubChallenges(): ClubChallenge[] {
  const grouped = new Map<string, ClubStandingCandidate[]>();
  for (const item of clubStandingCandidates) {
    const list = grouped.get(item.key) ?? [];
    list.push(item);
    grouped.set(item.key, list);
  }

  return [...grouped.entries()].flatMap(([slug, entries]) => {
    if (entries.length < 3) return [];
    const sorted = [...entries].sort((a, b) => a.season.localeCompare(b.season));
    const answers = sorted.map((entry) => ({ key: `${entry.leagueSlug}/${entry.season}`, label: `${entry.league} ${entry.season}` }));
    const puzzles = sorted.map((entry) => ({
      id: `club-season:${slug}:${entry.leagueSlug}/${entry.season}`,
      mode: "club-season" as const,
      answer: `${entry.league} ${entry.season}`,
      answerKey: `${entry.leagueSlug}/${entry.season}`,
      category: `${entry.name} challenge`,
      eyebrow: `Which ${entry.name} season?`,
      clues: [
        `${entry.name} finished ${entry.pos}${entry.pos === 1 ? "st" : entry.pos === 2 ? "nd" : entry.pos === 3 ? "rd" : "th"}.`,
        `They earned ${entry.pts} points.`,
        `Their record was ${entry.w} wins, ${entry.d} draws and ${entry.l} defeats.`,
        `They scored ${entry.gf} goals.`,
        `They conceded ${entry.ga} goals.`,
        `The competition was the ${entry.league}.`,
      ],
      resultTitle: `${entry.name} · ${entry.league} ${entry.season}`,
      resultSummary: `${entry.pos}${entry.pos === 1 ? "st" : entry.pos === 2 ? "nd" : entry.pos === 3 ? "rd" : "th"} · ${entry.pts} points`,
      resultUrl: `/${entry.leagueSlug}/${entry.season}/`,
      accent: leagueAccent(entry.leagueSlug),
    }));
    return [{ slug, name: sorted[0].name, puzzles, answers }];
  }).sort((a, b) => a.name.localeCompare(b.name));
}

export function getClubPuzzle(challenge: ClubChallenge, dateKey: string): GamePuzzle {
  return selectForDate(challenge.puzzles, dateKey, 29);
}
