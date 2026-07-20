import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Bundesliga",
  leagueSlug: "bundesliga",
  season: "2025-26",
  seasonDisplay: "2025-26",
  champion: "Bayern Munich",
  championSlug: "bayern-munich",
  topScorer: "Harry Kane",
  topScorerGoals: 36,
  totalGoals: 990,
  standings: [
    { pos: 1, club: "Bayern Munich", clubSlug: "bayern-munich", p: 34, w: 28, d: 5, l: 1, gf: 122, ga: 36, gd: 86, pts: 89, zone: "cl" },
    { pos: 2, club: "Borussia Dortmund", clubSlug: "borussia-dortmund", p: 34, w: 22, d: 7, l: 5, gf: 70, ga: 34, gd: 36, pts: 73, zone: "cl" },
    { pos: 3, club: "RB Leipzig", clubSlug: "rb-leipzig", p: 34, w: 20, d: 5, l: 9, gf: 66, ga: 47, gd: 19, pts: 65, zone: "cl" },
    { pos: 4, club: "VfB Stuttgart", clubSlug: "vfb-stuttgart", p: 34, w: 18, d: 8, l: 8, gf: 71, ga: 49, gd: 22, pts: 62, zone: "cl" },
    { pos: 5, club: "Hoffenheim", clubSlug: "hoffenheim", p: 34, w: 18, d: 7, l: 9, gf: 65, ga: 52, gd: 13, pts: 61, zone: "el" },
    { pos: 6, club: "Bayer Leverkusen", clubSlug: "bayer-leverkusen", p: 34, w: 17, d: 8, l: 9, gf: 68, ga: 47, gd: 21, pts: 59, zone: "ecl" },
    { pos: 7, club: "Freiburg", clubSlug: "freiburg", p: 34, w: 13, d: 8, l: 13, gf: 51, ga: 57, gd: -6, pts: 47 },
    { pos: 8, club: "Eintracht Frankfurt", clubSlug: "eintracht-frankfurt", p: 34, w: 11, d: 11, l: 12, gf: 61, ga: 65, gd: -4, pts: 44 },
    { pos: 9, club: "Augsburg", clubSlug: "augsburg", p: 34, w: 12, d: 7, l: 15, gf: 45, ga: 61, gd: -16, pts: 43 },
    { pos: 10, club: "Mainz 05", clubSlug: "mainz-05", p: 34, w: 10, d: 10, l: 14, gf: 44, ga: 53, gd: -9, pts: 40 },
    { pos: 11, club: "Union Berlin", clubSlug: "union-berlin", p: 34, w: 10, d: 9, l: 15, gf: 44, ga: 58, gd: -14, pts: 39 },
    { pos: 12, club: "Borussia Monchengladbach", clubSlug: "borussia-monchengladbach", p: 34, w: 9, d: 11, l: 14, gf: 42, ga: 53, gd: -11, pts: 38 },
    { pos: 13, club: "Hamburg", clubSlug: "hamburg", p: 34, w: 9, d: 11, l: 14, gf: 40, ga: 54, gd: -14, pts: 38 },
    { pos: 14, club: "Cologne", clubSlug: "cologne", p: 34, w: 7, d: 11, l: 16, gf: 49, ga: 63, gd: -14, pts: 32 },
    { pos: 15, club: "Werder Bremen", clubSlug: "werder-bremen", p: 34, w: 8, d: 8, l: 18, gf: 37, ga: 60, gd: -23, pts: 32 },
    { pos: 16, club: "Wolfsburg", clubSlug: "wolfsburg", p: 34, w: 7, d: 8, l: 19, gf: 45, ga: 69, gd: -24, pts: 29, zone: "relegation" },
    { pos: 17, club: "Heidenheim", clubSlug: "heidenheim", p: 34, w: 6, d: 8, l: 20, gf: 41, ga: 72, gd: -31, pts: 26, zone: "relegation" },
    { pos: 18, club: "St. Pauli", clubSlug: "st-pauli", p: 34, w: 6, d: 8, l: 20, gf: 29, ga: 60, gd: -31, pts: 26, zone: "relegation" },
  ],
  scorers: [{ name: "Harry Kane", playerSlug: "harry-kane", club: "Bayern Munich", clubSlug: "bayern-munich", goals: 36, assists: 5 }],
  assisters: [{ name: "Michael Olise", playerSlug: "michael-olise", club: "Bayern Munich", clubSlug: "bayern-munich", assists: 19 }],
  cleanSheets: [],
  awards: [{ title: "Torjagerkanone", winner: "Harry Kane", playerSlug: "harry-kane" }],
  relegated: ["Wolfsburg", "Heidenheim", "St. Pauli"],
  promoted: [],
  narrative: `Bayern Munich retained the Bundesliga title in record-breaking style. Vincent Kompany's side lost only once, collected 89 points and scored 122 goals, setting new single-season Bundesliga records for goals and goal difference.

Harry Kane won a third consecutive Torjagerkanone with 36 goals, while Michael Olise led the league with 19 assists. Borussia Dortmund finished second on 73 points, ahead of RB Leipzig and VfB Stuttgart.`,
  notableMoments: [
    "Bayern Munich scored a Bundesliga-record 122 goals",
    "The champions finished with a record +86 goal difference",
    "Harry Kane won a third straight top-scorer prize with 36 goals",
    "Michael Olise supplied a league-leading 19 assists",
    "Bayern lost only once in 34 league matches",
  ],
  sources: [
    { name: "Bundesliga — final 2025-26 table", url: "https://www.bundesliga.com/en/bundesliga/table/2025-2026" },
    { name: "Bundesliga — 2025-26 season in numbers", url: "https://www.bundesliga.com/en/bundesliga/news/2025-26-season-in-numbers-37374" },
    { name: "Bundesliga — Harry Kane top-scorer award", url: "https://www.bundesliga.com/en/bundesliga/news/harry-kane-top-scorer-2025-26-third-time-bayern-munich-37407" },
  ],
  metaTitle: "Bundesliga 2025-26 | Final Table, Champions & Top Scorer",
  metaDescription: "Bundesliga 2025-26 final table and review: Bayern champions with record numbers, all 18 clubs and Harry Kane's 36-goal season.",
};

export default data;
