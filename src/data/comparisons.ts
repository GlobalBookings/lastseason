export interface CuratedComparison {
  slug: string;
  title: string;
  description: string;
  intro: string;
  left: { leagueSlug: string; season: string; clubSlug: string; label: string };
  right: { leagueSlug: string; season: string; clubSlug: string; label: string };
}

export const curatedComparisons: CuratedComparison[] = [
  {
    slug: "arsenal-2025-26-vs-invincibles-2003-04",
    title: "Arsenal 2025-26 vs the 2003-04 Invincibles",
    description: "Compare Arsenal's 2025-26 Premier League champions with the unbeaten 2003-04 Invincibles: points, wins, goals, defence and points per game.",
    intro: "Arsenal's 2025-26 champions ended the club's 22-year title wait. This comparison puts Mikel Arteta's side directly alongside Arsene Wenger's unbeaten Invincibles using their final league records.",
    left: { leagueSlug: "premier-league", season: "2025-26", clubSlug: "arsenal", label: "Arsenal 2025-26" },
    right: { leagueSlug: "premier-league", season: "2003-04", clubSlug: "arsenal", label: "Arsenal Invincibles 2003-04" },
  },
  {
    slug: "arsenal-2025-26-vs-liverpool-2024-25",
    title: "Arsenal 2025-26 vs Liverpool 2024-25",
    description: "A statistical comparison of consecutive Premier League champions Arsenal 2025-26 and Liverpool 2024-25, including points, wins, goals and defence.",
    intro: "Two consecutive Premier League title winners, compared from their final tables. See where Arsenal's 2025-26 campaign gained ground on Arne Slot's Liverpool champions.",
    left: { leagueSlug: "premier-league", season: "2025-26", clubSlug: "arsenal", label: "Arsenal 2025-26" },
    right: { leagueSlug: "premier-league", season: "2024-25", clubSlug: "liverpool", label: "Liverpool 2024-25" },
  },
  {
    slug: "arsenal-vs-bayern-2025-26-champions",
    title: "Arsenal vs Bayern Munich: 2025-26 Champions Compared",
    description: "Compare Arsenal and Bayern Munich's 2025-26 title-winning league records across points per game, win rate, goals and defensive performance.",
    intro: "England and Germany's 2025-26 champions played different numbers of matches, so this comparison includes per-game rates alongside their raw totals.",
    left: { leagueSlug: "premier-league", season: "2025-26", clubSlug: "arsenal", label: "Arsenal" },
    right: { leagueSlug: "bundesliga", season: "2025-26", clubSlug: "bayern-munich", label: "Bayern Munich" },
  },
  {
    slug: "inter-vs-barcelona-2025-26-champions",
    title: "Inter vs Barcelona: 2025-26 Champions Compared",
    description: "Compare Inter and Barcelona's 2025-26 title-winning seasons: final points, wins, goals, defence, win rate and points per game.",
    intro: "The 2025-26 champions of Italy and Spain are compared directly, with rate statistics making the contrast clear across their 38-match campaigns.",
    left: { leagueSlug: "serie-a", season: "2025-26", clubSlug: "inter-milan", label: "Inter" },
    right: { leagueSlug: "la-liga", season: "2025-26", clubSlug: "barcelona", label: "Barcelona" },
  },
];
