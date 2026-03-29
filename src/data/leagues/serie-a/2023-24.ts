import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Serie A",
  leagueSlug: "serie-a",
  season: "2023-24",
  seasonDisplay: "2023-24",
  champion: "Inter Milan",
  championSlug: "inter-milan",
  topScorer: "Lautaro Martinez",
  topScorerGoals: 24,
  totalGoals: 1050,
  standings: [
    { pos: 1, club: "Inter Milan", clubSlug: "inter-milan", p: 38, w: 29, d: 7, l: 2, gf: 93, ga: 24, gd: 69, pts: 94, zone: "cl" },
    { pos: 2, club: "AC Milan", clubSlug: "ac-milan", p: 38, w: 22, d: 9, l: 7, gf: 72, ga: 41, gd: 31, pts: 75, zone: "cl" },
    { pos: 3, club: "Juventus", clubSlug: "juventus", p: 38, w: 21, d: 8, l: 9, gf: 58, ga: 33, gd: 25, pts: 71, zone: "cl" },
    { pos: 4, club: "Atalanta", clubSlug: "atalanta", p: 38, w: 20, d: 9, l: 9, gf: 72, ga: 42, gd: 30, pts: 69, zone: "cl" },
    { pos: 5, club: "Bologna", clubSlug: "bologna", p: 38, w: 20, d: 8, l: 10, gf: 59, ga: 36, gd: 23, pts: 68, zone: "el" },
    { pos: 6, club: "Roma", clubSlug: "roma", p: 38, w: 18, d: 9, l: 11, gf: 62, ga: 46, gd: 16, pts: 63, zone: "ecl" },
    { pos: 7, club: "Lazio", clubSlug: "lazio", p: 38, w: 18, d: 7, l: 13, gf: 60, ga: 50, gd: 10, pts: 61 },
    { pos: 8, club: "Fiorentina", clubSlug: "fiorentina", p: 38, w: 17, d: 9, l: 12, gf: 58, ga: 49, gd: 9, pts: 60 },
    { pos: 9, club: "Torino", clubSlug: "torino", p: 38, w: 14, d: 11, l: 13, gf: 48, ga: 51, gd: -3, pts: 53 },
    { pos: 10, club: "Napoli", clubSlug: "napoli", p: 38, w: 14, d: 11, l: 13, gf: 59, ga: 54, gd: 5, pts: 53 },
    { pos: 11, club: "Genoa", clubSlug: "genoa", p: 38, w: 13, d: 10, l: 15, gf: 48, ga: 54, gd: -6, pts: 49 },
    { pos: 12, club: "Monza", clubSlug: "monza", p: 38, w: 13, d: 10, l: 15, gf: 45, ga: 55, gd: -10, pts: 49 },
    { pos: 13, club: "Lecce", clubSlug: "lecce", p: 38, w: 10, d: 12, l: 16, gf: 38, ga: 55, gd: -17, pts: 42 },
    { pos: 14, club: "Udinese", clubSlug: "udinese", p: 38, w: 10, d: 10, l: 18, gf: 44, ga: 60, gd: -16, pts: 40 },
    { pos: 15, club: "Cagliari", clubSlug: "cagliari", p: 38, w: 9, d: 10, l: 19, gf: 42, ga: 62, gd: -20, pts: 37 },
    { pos: 16, club: "Empoli", clubSlug: "empoli", p: 38, w: 8, d: 12, l: 18, gf: 32, ga: 54, gd: -22, pts: 36 },
    { pos: 17, club: "Hellas Verona", clubSlug: "hellas-verona", p: 38, w: 8, d: 12, l: 18, gf: 40, ga: 60, gd: -20, pts: 36 },
    { pos: 18, club: "Frosinone", clubSlug: "frosinone", p: 38, w: 9, d: 8, l: 21, gf: 46, ga: 68, gd: -22, pts: 35, zone: "relegation" },
    { pos: 19, club: "Sassuolo", clubSlug: "sassuolo", p: 38, w: 7, d: 9, l: 22, gf: 41, ga: 74, gd: -33, pts: 30, zone: "relegation" },
    { pos: 20, club: "Salernitana", clubSlug: "salernitana", p: 38, w: 3, d: 8, l: 27, gf: 33, ga: 82, gd: -49, pts: 17, zone: "relegation" },
  ],
  scorers: [
    { name: "Lautaro Martinez", playerSlug: "lautaro-martinez", club: "Inter Milan", clubSlug: "inter-milan", goals: 24, assists: 7 },
    { name: "Dusan Vlahovic", playerSlug: "dusan-vlahovic", club: "Juventus", clubSlug: "juventus", goals: 16, assists: 3 },
    { name: "Victor Osimhen", playerSlug: "victor-osimhen", club: "Napoli", clubSlug: "napoli", goals: 15, assists: 3 },
    { name: "Rafael Leao", playerSlug: "rafael-leao", club: "AC Milan", clubSlug: "ac-milan", goals: 15, assists: 9 },
    { name: "Gianluca Scamacca", playerSlug: "gianluca-scamacca", club: "Atalanta", clubSlug: "atalanta", goals: 14, assists: 4 },
    { name: "Marcus Thuram", playerSlug: "marcus-thuram", club: "Inter Milan", clubSlug: "inter-milan", goals: 13, assists: 6 },
    { name: "Romelu Lukaku", playerSlug: "romelu-lukaku", club: "Roma", clubSlug: "roma", goals: 13, assists: 4 },
    { name: "Ademola Lookman", playerSlug: "ademola-lookman", club: "Atalanta", clubSlug: "atalanta", goals: 11, assists: 7 },
    { name: "Mattia Zaccagni", playerSlug: "mattia-zaccagni", club: "Lazio", clubSlug: "lazio", goals: 11, assists: 5 },
    { name: "Arkadiusz Milik", playerSlug: "arkadiusz-milik", club: "Juventus", clubSlug: "juventus", goals: 9, assists: 2 },
  ],
  assisters: [
    { name: "Rafael Leao", playerSlug: "rafael-leao", club: "AC Milan", clubSlug: "ac-milan", assists: 9 },
    { name: "Lautaro Martinez", playerSlug: "lautaro-martinez", club: "Inter Milan", clubSlug: "inter-milan", assists: 7 },
    { name: "Ademola Lookman", playerSlug: "ademola-lookman", club: "Atalanta", clubSlug: "atalanta", assists: 7 },
    { name: "Marcus Thuram", playerSlug: "marcus-thuram", club: "Inter Milan", clubSlug: "inter-milan", assists: 6 },
    { name: "Mattia Zaccagni", playerSlug: "mattia-zaccagni", club: "Lazio", clubSlug: "lazio", assists: 5 },
  ],
  cleanSheets: [
    { name: "Yann Sommer", playerSlug: "yann-sommer", club: "Inter Milan", clubSlug: "inter-milan", cleanSheets: 17 },
    { name: "Mike Maignan", playerSlug: "mike-maignan", club: "AC Milan", clubSlug: "ac-milan", cleanSheets: 13 },
    { name: "Wojciech Szczesny", playerSlug: "wojciech-szczesny", club: "Juventus", clubSlug: "juventus", cleanSheets: 12 },
    { name: "Marco Carnesecchi", playerSlug: "marco-carnesecchi", club: "Atalanta", clubSlug: "atalanta", cleanSheets: 11 },
    { name: "Ivan Provedel", playerSlug: "ivan-provedel", club: "Lazio", clubSlug: "lazio", cleanSheets: 10 },
  ],
  awards: [
    { title: "Capocannoniere", winner: "Lautaro Martinez", playerSlug: "lautaro-martinez" },
    { title: "Player of the Season", winner: "Lautaro Martinez", playerSlug: "lautaro-martinez" },
    { title: "Best Coach", winner: "Simone Inzaghi" },
    { title: "Best Goalkeeper", winner: "Yann Sommer", playerSlug: "yann-sommer" },
  ],
  relegated: ["Frosinone", "Sassuolo", "Salernitana"],
  promoted: ["Parma", "Como", "Venezia"],
  narrative: `Inter Milan stormed to their 20th Scudetto in 2023-24, securing the coveted second star on their shirt with a dominant campaign that left the rest of Serie A trailing in their wake. Finishing on 94 points, Simone Inzaghi's side won the title by a remarkable 19-point margin over second-placed AC Milan.

Lautaro Martinez was the driving force behind Inter's triumph, claiming the Capocannoniere with 24 goals and earning the league's MVP award. The Argentine striker formed a devastating partnership with Marcus Thuram, who contributed 13 goals and 6 assists in his debut Serie A season. Behind them, Yann Sommer proved an inspired signing, keeping 17 clean sheets to anchor the league's meanest defence.

The story of the season was undoubtedly Napoli's spectacular collapse. After winning their first Scudetto in 33 years the previous campaign, the Partenopei endured the worst title defence by a reigning champion in Serie A history, finishing a dismal 10th on just 53 points. Three managerial changes could not arrest the decline as the magic of the previous season evaporated entirely.

Atalanta provided one of the campaign's great storylines, finishing fourth domestically while conquering Europe. Gian Piero Gasperini's side defeated Bayer Leverkusen in the Europa League final, capping a remarkable run. Bologna wrote their own piece of history by qualifying for the Champions League for the first time ever, finishing fifth on 68 points under Thiago Motta's astute guidance.

At the bottom, Frosinone, Sassuolo and Salernitana were relegated, with Salernitana's 17-point haul representing one of the worst campaigns in modern Serie A history.`,
  notableMoments: [
    "Inter Milan won the Scudetto by 19 points, securing their 20th title and the second star on their shirt",
    "Lautaro Martinez won both the Capocannoniere and the Serie A MVP award",
    "Atalanta won the Europa League, beating Bayer Leverkusen in the final",
    "Bologna qualified for the Champions League for the first time in their history",
    "Napoli's title defence was the worst by a defending champion in Serie A history",
  ],
  metaTitle: "Serie A 2023-24 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2023-24 Serie A season. Final standings, Capocannoniere winner and a complete season recap.",
};

export default data;
