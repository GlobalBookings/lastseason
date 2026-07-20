import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "La Liga",
  leagueSlug: "la-liga",
  season: "2025-26",
  seasonDisplay: "2025-26",
  champion: "Barcelona",
  championSlug: "barcelona",
  topScorer: "Kylian Mbappe",
  topScorerGoals: 25,
  totalGoals: 1024,
  standings: [
    { pos: 1, club: "Barcelona", clubSlug: "barcelona", p: 38, w: 31, d: 1, l: 6, gf: 95, ga: 36, gd: 59, pts: 94, zone: "cl" },
    { pos: 2, club: "Real Madrid", clubSlug: "real-madrid", p: 38, w: 27, d: 5, l: 6, gf: 77, ga: 35, gd: 42, pts: 86, zone: "cl" },
    { pos: 3, club: "Villarreal", clubSlug: "villarreal", p: 38, w: 22, d: 6, l: 10, gf: 72, ga: 46, gd: 26, pts: 72, zone: "cl" },
    { pos: 4, club: "Atletico Madrid", clubSlug: "atletico-madrid", p: 38, w: 21, d: 6, l: 11, gf: 62, ga: 44, gd: 18, pts: 69, zone: "cl" },
    { pos: 5, club: "Real Betis", clubSlug: "real-betis", p: 38, w: 15, d: 15, l: 8, gf: 59, ga: 48, gd: 11, pts: 60, zone: "el" },
    { pos: 6, club: "Celta Vigo", clubSlug: "celta-vigo", p: 38, w: 14, d: 12, l: 12, gf: 53, ga: 48, gd: 5, pts: 54, zone: "ecl" },
    { pos: 7, club: "Getafe", clubSlug: "getafe", p: 38, w: 15, d: 6, l: 17, gf: 32, ga: 38, gd: -6, pts: 51 },
    { pos: 8, club: "Rayo Vallecano", clubSlug: "rayo-vallecano", p: 38, w: 12, d: 14, l: 12, gf: 41, ga: 44, gd: -3, pts: 50 },
    { pos: 9, club: "Valencia", clubSlug: "valencia", p: 38, w: 13, d: 10, l: 15, gf: 46, ga: 55, gd: -9, pts: 49 },
    { pos: 10, club: "Real Sociedad", clubSlug: "real-sociedad", p: 38, w: 11, d: 13, l: 14, gf: 59, ga: 61, gd: -2, pts: 46 },
    { pos: 11, club: "Espanyol", clubSlug: "espanyol", p: 38, w: 12, d: 10, l: 16, gf: 43, ga: 55, gd: -12, pts: 46 },
    { pos: 12, club: "Athletic Bilbao", clubSlug: "athletic-bilbao", p: 38, w: 13, d: 6, l: 19, gf: 43, ga: 58, gd: -15, pts: 45 },
    { pos: 13, club: "Sevilla", clubSlug: "sevilla", p: 38, w: 12, d: 7, l: 19, gf: 46, ga: 60, gd: -14, pts: 43 },
    { pos: 14, club: "Alaves", clubSlug: "alaves", p: 38, w: 11, d: 10, l: 17, gf: 44, ga: 56, gd: -12, pts: 43 },
    { pos: 15, club: "Elche", clubSlug: "elche", p: 38, w: 10, d: 13, l: 15, gf: 49, ga: 57, gd: -8, pts: 43 },
    { pos: 16, club: "Levante", clubSlug: "levante", p: 38, w: 11, d: 9, l: 18, gf: 47, ga: 61, gd: -14, pts: 42 },
    { pos: 17, club: "Osasuna", clubSlug: "osasuna", p: 38, w: 11, d: 9, l: 18, gf: 44, ga: 50, gd: -6, pts: 42 },
    { pos: 18, club: "Mallorca", clubSlug: "mallorca", p: 38, w: 11, d: 9, l: 18, gf: 47, ga: 57, gd: -10, pts: 42, zone: "relegation" },
    { pos: 19, club: "Girona", clubSlug: "girona", p: 38, w: 9, d: 14, l: 15, gf: 39, ga: 55, gd: -16, pts: 41, zone: "relegation" },
    { pos: 20, club: "Real Oviedo", clubSlug: "real-oviedo", p: 38, w: 6, d: 11, l: 21, gf: 26, ga: 60, gd: -34, pts: 29, zone: "relegation" },
  ],
  scorers: [{ name: "Kylian Mbappe", playerSlug: "kylian-mbappe", club: "Real Madrid", clubSlug: "real-madrid", goals: 25 }],
  assisters: [],
  cleanSheets: [],
  awards: [{ title: "Top scorer", winner: "Kylian Mbappe", playerSlug: "kylian-mbappe" }],
  relegated: ["Mallorca", "Girona", "Real Oviedo"],
  promoted: [],
  narrative: `Barcelona retained the Spanish title with a 94-point campaign, winning 31 of 38 matches and scoring 95 goals. Real Madrid finished eight points behind, with Villarreal and Atletico Madrid completing the top four.

Kylian Mbappe was the division's leading scorer with 25 goals for Real Madrid. At the foot of the table, Mallorca went down on the head-to-head tiebreak after finishing level on points with Osasuna and Levante; Girona and Real Oviedo were also relegated.`,
  notableMoments: [
    "Barcelona won 31 matches and finished on 94 points",
    "The champions scored a league-high 95 goals",
    "Villarreal finished third with 72 points",
    "Kylian Mbappe led the scoring chart with 25 goals",
    "Mallorca were relegated despite collecting 42 points",
  ],
  sources: [
    { name: "LALIGA — final 2025-26 standings", url: "https://www.laliga.com/en-US/laliga-easports/standing" },
    { name: "LALIGA — Kylian Mbappe's 25 goals", url: "https://www.laliga.com/es-US" },
  ],
  metaTitle: "La Liga 2025-26 | Final Table, Champions & Top Scorer",
  metaDescription: "La Liga 2025-26 final table and review: Barcelona champions, all 20 clubs, European and relegation places, and Kylian Mbappe's 25 goals.",
};

export default data;
