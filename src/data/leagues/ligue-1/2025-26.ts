import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Ligue 1",
  leagueSlug: "ligue-1",
  season: "2025-26",
  seasonDisplay: "2025-26",
  champion: "Paris Saint-Germain",
  championSlug: "paris-saint-germain",
  topScorer: "Esteban Lepaul",
  topScorerGoals: 21,
  totalGoals: 863,
  standings: [
    { pos: 1, club: "Paris Saint-Germain", clubSlug: "paris-saint-germain", p: 34, w: 24, d: 4, l: 6, gf: 74, ga: 29, gd: 45, pts: 76, zone: "cl" },
    { pos: 2, club: "Lens", clubSlug: "lens", p: 34, w: 22, d: 4, l: 8, gf: 66, ga: 35, gd: 31, pts: 70, zone: "cl" },
    { pos: 3, club: "Lille", clubSlug: "lille", p: 34, w: 18, d: 7, l: 9, gf: 52, ga: 37, gd: 15, pts: 61, zone: "cl" },
    { pos: 4, club: "Lyon", clubSlug: "lyon", p: 34, w: 18, d: 6, l: 10, gf: 53, ga: 40, gd: 13, pts: 60, zone: "cl" },
    { pos: 5, club: "Marseille", clubSlug: "marseille", p: 34, w: 18, d: 5, l: 11, gf: 63, ga: 45, gd: 18, pts: 59, zone: "el" },
    { pos: 6, club: "Rennes", clubSlug: "rennes", p: 34, w: 17, d: 8, l: 9, gf: 59, ga: 50, gd: 9, pts: 59, zone: "ecl" },
    { pos: 7, club: "Monaco", clubSlug: "monaco", p: 34, w: 16, d: 6, l: 12, gf: 60, ga: 54, gd: 6, pts: 54 },
    { pos: 8, club: "Strasbourg", clubSlug: "strasbourg", p: 34, w: 15, d: 8, l: 11, gf: 58, ga: 47, gd: 11, pts: 53 },
    { pos: 9, club: "Toulouse", clubSlug: "toulouse", p: 34, w: 12, d: 9, l: 13, gf: 47, ga: 46, gd: 1, pts: 45 },
    { pos: 10, club: "Lorient", clubSlug: "lorient", p: 34, w: 11, d: 12, l: 11, gf: 48, ga: 51, gd: -3, pts: 45 },
    { pos: 11, club: "Paris FC", clubSlug: "paris-fc", p: 34, w: 11, d: 11, l: 12, gf: 47, ga: 50, gd: -3, pts: 44 },
    { pos: 12, club: "Brest", clubSlug: "brest", p: 34, w: 10, d: 9, l: 15, gf: 43, ga: 55, gd: -12, pts: 39 },
    { pos: 13, club: "Angers", clubSlug: "angers", p: 34, w: 9, d: 9, l: 16, gf: 29, ga: 48, gd: -19, pts: 36 },
    { pos: 14, club: "Le Havre", clubSlug: "le-havre", p: 34, w: 7, d: 14, l: 13, gf: 32, ga: 44, gd: -12, pts: 35 },
    { pos: 15, club: "Auxerre", clubSlug: "auxerre", p: 34, w: 8, d: 10, l: 16, gf: 34, ga: 44, gd: -10, pts: 34 },
    { pos: 16, club: "Nice", clubSlug: "nice", p: 34, w: 7, d: 11, l: 16, gf: 37, ga: 60, gd: -23, pts: 32 },
    { pos: 17, club: "Nantes", clubSlug: "nantes", p: 34, w: 5, d: 9, l: 20, gf: 29, ga: 52, gd: -23, pts: 24, zone: "relegation" },
    { pos: 18, club: "Metz", clubSlug: "metz", p: 34, w: 3, d: 8, l: 23, gf: 32, ga: 76, gd: -44, pts: 17, zone: "relegation" },
  ],
  scorers: [{ name: "Esteban Lepaul", playerSlug: "esteban-lepaul", club: "Rennes", clubSlug: "rennes", goals: 21 }],
  assisters: [],
  cleanSheets: [],
  awards: [
    { title: "Top scorer", winner: "Esteban Lepaul", playerSlug: "esteban-lepaul" },
    { title: "Player of the Year", winner: "Ousmane Dembele", playerSlug: "ousmane-dembele" },
    { title: "Coach of the Year", winner: "Pierre Sage" },
  ],
  relegated: ["Nantes", "Metz"],
  promoted: [],
  narrative: `Paris Saint-Germain won a fifth consecutive Ligue 1 title and a record-extending 14th overall. Lens pushed the champions deep into the run-in and finished second on 70 points, with Lille third and Lyon fourth.

Esteban Lepaul was the only player to pass 20 league goals, winning the scoring title with 21 for Rennes. Nantes and Metz were relegated directly, while Nice entered the promotion-relegation play-off after finishing 16th.`,
  notableMoments: [
    "Paris Saint-Germain won a fifth consecutive French title",
    "PSG extended their national record to 14 championships",
    "Lens finished runners-up with 70 points",
    "Esteban Lepaul won the scoring title with 21 goals",
    "Lille returned to the Ligue 1 podium",
  ],
  sources: [
    { name: "Ligue 1 — PSG's 2025-26 title", url: "https://ligue1.com/en/articles/l1_article_5109-recap-psg-are-champions-after-win-in-lens" },
    { name: "Ligue 1 — Esteban Lepaul top scorer", url: "https://ligue1.com/fr/articles/l1_article_5124-esteban-lepaul-le-top-scoreur-a-double-titre" },
    { name: "L'Equipe — final Ligue 1 table", url: "https://www.lequipe.fr/Football/ligue-1/saison-2025-2026/page-classement-equipes/general" },
  ],
  metaTitle: "Ligue 1 2025-26 | Final Table, Champions & Top Scorer",
  metaDescription: "Ligue 1 2025-26 final table and review: PSG champions, Lens runners-up, all 18 clubs and Esteban Lepaul's 21-goal season.",
};

export default data;
