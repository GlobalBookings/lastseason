import type { SeasonData } from "../../../types";

const data: SeasonData = { league: "Serie A", leagueSlug: "serie-a", season: "2024-25", seasonDisplay: "2024-25", champion: "Napoli", championSlug: "napoli", topScorer: "Mateo Retegui", topScorerGoals: 25, totalGoals: 973,
  standings: [
    { pos: 1, club: "Napoli", clubSlug: "napoli", p: 38, w: 24, d: 10, l: 4, gf: 59, ga: 27, gd: 32, pts: 82, zone: "cl" },
    { pos: 2, club: "Inter Milan", clubSlug: "inter-milan", p: 38, w: 24, d: 9, l: 5, gf: 79, ga: 35, gd: 44, pts: 81, zone: "cl" },
    { pos: 3, club: "Atalanta", clubSlug: "atalanta", p: 38, w: 22, d: 8, l: 8, gf: 78, ga: 37, gd: 41, pts: 74, zone: "cl" },
    { pos: 4, club: "Juventus", clubSlug: "juventus", p: 38, w: 18, d: 16, l: 4, gf: 58, ga: 35, gd: 23, pts: 70, zone: "cl" },
    { pos: 5, club: "Roma", clubSlug: "roma", p: 38, w: 20, d: 9, l: 9, gf: 56, ga: 35, gd: 21, pts: 69, zone: "el" },
    { pos: 6, club: "Fiorentina", clubSlug: "fiorentina", p: 38, w: 19, d: 8, l: 11, gf: 60, ga: 41, gd: 19, pts: 65, zone: "ecl" },
    { pos: 7, club: "Lazio", clubSlug: "lazio", p: 38, w: 18, d: 11, l: 9, gf: 61, ga: 49, gd: 12, pts: 65 },
    { pos: 8, club: "AC Milan", clubSlug: "ac-milan", p: 38, w: 18, d: 9, l: 11, gf: 61, ga: 43, gd: 18, pts: 63 },
    { pos: 9, club: "Bologna", clubSlug: "bologna", p: 38, w: 16, d: 14, l: 8, gf: 57, ga: 47, gd: 10, pts: 62, zone: "el" },
    { pos: 10, club: "Como", clubSlug: "como", p: 38, w: 13, d: 10, l: 15, gf: 49, ga: 52, gd: -3, pts: 49 },
    { pos: 11, club: "Torino", clubSlug: "torino", p: 38, w: 10, d: 14, l: 14, gf: 39, ga: 45, gd: -6, pts: 44 },
    { pos: 12, club: "Udinese", clubSlug: "udinese", p: 38, w: 12, d: 8, l: 18, gf: 41, ga: 56, gd: -15, pts: 44 },
    { pos: 13, club: "Genoa", clubSlug: "genoa", p: 38, w: 10, d: 13, l: 15, gf: 37, ga: 49, gd: -12, pts: 43 },
    { pos: 14, club: "Hellas Verona", clubSlug: "hellas-verona", p: 38, w: 10, d: 7, l: 21, gf: 34, ga: 66, gd: -32, pts: 37 },
    { pos: 15, club: "Cagliari", clubSlug: "cagliari", p: 38, w: 9, d: 9, l: 20, gf: 40, ga: 56, gd: -16, pts: 36 },
    { pos: 16, club: "Parma", clubSlug: "parma", p: 38, w: 7, d: 15, l: 16, gf: 44, ga: 58, gd: -14, pts: 36 },
    { pos: 17, club: "Lecce", clubSlug: "lecce", p: 38, w: 8, d: 10, l: 20, gf: 27, ga: 58, gd: -31, pts: 34 },
    { pos: 18, club: "Empoli", clubSlug: "empoli", p: 38, w: 6, d: 13, l: 19, gf: 33, ga: 59, gd: -26, pts: 31, zone: "relegation" },
    { pos: 19, club: "Venezia", clubSlug: "venezia", p: 38, w: 5, d: 14, l: 19, gf: 32, ga: 56, gd: -24, pts: 29, zone: "relegation" },
    { pos: 20, club: "Monza", clubSlug: "monza", p: 38, w: 3, d: 9, l: 26, gf: 28, ga: 69, gd: -41, pts: 18, zone: "relegation" },
  ],
  scorers: [
    { name: "Mateo Retegui", playerSlug: "mateo-retegui", club: "Atalanta", clubSlug: "atalanta", goals: 25 },
  ],
  assisters: [],
  cleanSheets: [],
  awards: [
    { title: "Capocannoniere", winner: "Mateo Retegui", playerSlug: "mateo-retegui" },
    { title: "Player of the Season", winner: "Scott McTominay", playerSlug: "scott-mctominay" },
  ],
  relegated: ["Empoli", "Venezia", "Monza"],
  promoted: ["Sassuolo", "Pisa", "Cremonese"],
  narrative: `Napoli won their fourth Serie A title in Antonio Conte's first season as head coach. The race went to the final day, when Napoli finished one point ahead of Inter Milan with an 82-point total.

Scott McTominay was named Serie A's Most Valuable Player after his first season in Italy. Atalanta striker Mateo Retegui won the Capocannoniere with 25 goals as his club finished third.

Empoli, Venezia and Monza were relegated. Sassuolo, Pisa and Cremonese earned promotion for the following season.`,
  notableMoments: [
    "Napoli won their fourth Scudetto and second in three seasons under Antonio Conte",
    "Mateo Retegui won the Capocannoniere with 25 goals for Atalanta",
    "Inter Milan fell just one point short in their title defence",
    "Scott McTominay scored 12 goals from midfield in his debut Serie A season at Napoli",
    "Como finished a comfortable tenth in their first Serie A season since 2003",
  ],
  metaTitle: "Serie A 2024-25 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2024-25 Serie A season. Napoli's Scudetto under Conte, Retegui's Capocannoniere and a complete season recap.",
};

export default data;
