import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Ligue 1",
  leagueSlug: "ligue-1",
  season: "2022-23",
  seasonDisplay: "2022-23",
  champion: "PSG",
  championSlug: "psg",
  topScorer: "Kylian Mbappe",
  topScorerGoals: 29,
  totalGoals: 970,
  standings: [
    { pos: 1, club: "PSG", clubSlug: "psg", p: 38, w: 27, d: 4, l: 7, gf: 90, ga: 28, gd: 62, pts: 85, zone: "cl" },
    { pos: 2, club: "Lens", clubSlug: "lens", p: 38, w: 26, d: 6, l: 6, gf: 69, ga: 27, gd: 42, pts: 84, zone: "cl" },
    { pos: 3, club: "Marseille", clubSlug: "marseille", p: 38, w: 22, d: 7, l: 9, gf: 68, ga: 36, gd: 32, pts: 73, zone: "cl" },
    { pos: 4, club: "Monaco", clubSlug: "monaco", p: 38, w: 19, d: 8, l: 11, gf: 63, ga: 41, gd: 22, pts: 65, zone: "cl" },
    { pos: 5, club: "Lille", clubSlug: "lille", p: 38, w: 18, d: 8, l: 12, gf: 59, ga: 39, gd: 20, pts: 62, zone: "el" },
    { pos: 6, club: "Rennes", clubSlug: "rennes", p: 38, w: 16, d: 8, l: 14, gf: 56, ga: 45, gd: 11, pts: 56, zone: "ecl" },
    { pos: 7, club: "Lyon", clubSlug: "lyon", p: 38, w: 15, d: 10, l: 13, gf: 53, ga: 45, gd: 8, pts: 55 },
    { pos: 8, club: "Clermont", clubSlug: "clermont", p: 38, w: 13, d: 10, l: 15, gf: 45, ga: 51, gd: -6, pts: 49 },
    { pos: 9, club: "Nice", clubSlug: "nice", p: 38, w: 13, d: 9, l: 16, gf: 44, ga: 46, gd: -2, pts: 48 },
    { pos: 10, club: "Lorient", clubSlug: "lorient", p: 38, w: 13, d: 9, l: 16, gf: 53, ga: 50, gd: 3, pts: 48 },
    { pos: 11, club: "Reims", clubSlug: "reims", p: 38, w: 12, d: 10, l: 16, gf: 43, ga: 47, gd: -4, pts: 46 },
    { pos: 12, club: "Toulouse", clubSlug: "toulouse", p: 38, w: 12, d: 8, l: 18, gf: 43, ga: 53, gd: -10, pts: 44 },
    { pos: 13, club: "Montpellier", clubSlug: "montpellier", p: 38, w: 12, d: 8, l: 18, gf: 47, ga: 54, gd: -7, pts: 44 },
    { pos: 14, club: "Strasbourg", clubSlug: "strasbourg", p: 38, w: 11, d: 10, l: 17, gf: 41, ga: 55, gd: -14, pts: 43 },
    { pos: 15, club: "Nantes", clubSlug: "nantes", p: 38, w: 11, d: 9, l: 18, gf: 39, ga: 55, gd: -16, pts: 42 },
    { pos: 16, club: "Brest", clubSlug: "brest", p: 38, w: 11, d: 8, l: 19, gf: 38, ga: 54, gd: -16, pts: 41 },
    { pos: 17, club: "Auxerre", clubSlug: "auxerre", p: 38, w: 8, d: 10, l: 20, gf: 35, ga: 57, gd: -22, pts: 34 },
    { pos: 18, club: "Ajaccio", clubSlug: "ajaccio", p: 38, w: 6, d: 10, l: 22, gf: 29, ga: 59, gd: -30, pts: 28, zone: "relegation" },
    { pos: 19, club: "Troyes", clubSlug: "troyes", p: 38, w: 5, d: 10, l: 23, gf: 30, ga: 61, gd: -31, pts: 25, zone: "relegation" },
    { pos: 20, club: "Angers", clubSlug: "angers", p: 38, w: 4, d: 10, l: 24, gf: 25, ga: 67, gd: -42, pts: 22, zone: "relegation" },
  ],
  scorers: [
    { name: "Kylian Mbappe", playerSlug: "kylian-mbappe", club: "PSG", clubSlug: "psg", goals: 29, assists: 5 },
    { name: "Jonathan David", playerSlug: "jonathan-david", club: "Lille", clubSlug: "lille", goals: 21, assists: 4 },
    { name: "Alexandre Lacazette", playerSlug: "alexandre-lacazette", club: "Lyon", clubSlug: "lyon", goals: 16, assists: 5 },
    { name: "Lionel Messi", playerSlug: "lionel-messi", club: "PSG", clubSlug: "psg", goals: 16, assists: 10 },
    { name: "Terem Moffi", playerSlug: "terem-moffi", club: "Lorient", clubSlug: "lorient", goals: 13, assists: 2 },
    { name: "Wissam Ben Yedder", playerSlug: "wissam-ben-yedder", club: "Monaco", clubSlug: "monaco", goals: 12, assists: 4 },
    { name: "Neymar", playerSlug: "neymar", club: "PSG", clubSlug: "psg", goals: 11, assists: 9 },
    { name: "Martin Terrier", playerSlug: "martin-terrier", club: "Rennes", clubSlug: "rennes", goals: 10, assists: 3 },
    { name: "Ludovic Blas", playerSlug: "ludovic-blas", club: "Nantes", clubSlug: "nantes", goals: 8, assists: 4 },
    { name: "Amine Gouiri", playerSlug: "amine-gouiri", club: "Rennes", clubSlug: "rennes", goals: 8, assists: 5 },
  ],
  assisters: [
    { name: "Lionel Messi", playerSlug: "lionel-messi", club: "PSG", clubSlug: "psg", assists: 10 },
    { name: "Neymar", playerSlug: "neymar", club: "PSG", clubSlug: "psg", assists: 9 },
    { name: "Alexandre Lacazette", playerSlug: "alexandre-lacazette", club: "Lyon", clubSlug: "lyon", assists: 5 },
    { name: "Amine Gouiri", playerSlug: "amine-gouiri", club: "Rennes", clubSlug: "rennes", assists: 5 },
    { name: "Kylian Mbappe", playerSlug: "kylian-mbappe", club: "PSG", clubSlug: "psg", assists: 5 },
  ],
  cleanSheets: [
    { name: "Gianluigi Donnarumma", playerSlug: "gianluigi-donnarumma", club: "PSG", clubSlug: "psg", cleanSheets: 14 },
    { name: "Brice Samba", playerSlug: "brice-samba", club: "Lens", clubSlug: "lens", cleanSheets: 13 },
    { name: "Pau Lopez", playerSlug: "pau-lopez", club: "Marseille", clubSlug: "marseille", cleanSheets: 10 },
    { name: "Alexander Nubel", playerSlug: "alexander-nubel", club: "Monaco", clubSlug: "monaco", cleanSheets: 9 },
    { name: "Steve Mandanda", playerSlug: "steve-mandanda", club: "Rennes", clubSlug: "rennes", cleanSheets: 8 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Kylian Mbappe", playerSlug: "kylian-mbappe" },
    { title: "Top Scorer", winner: "Kylian Mbappe", playerSlug: "kylian-mbappe" },
    { title: "Best Coach", winner: "Franck Haise" },
    { title: "Best Goalkeeper", winner: "Brice Samba", playerSlug: "brice-samba" },
  ],
  relegated: ["Angers", "Troyes", "Ajaccio"],
  promoted: ["Le Havre", "Metz"],
  narrative: `PSG retained the Ligue 1 title in 2022-23 but were pushed all the way by an outstanding Lens side. The final margin was a single point — 85 to 84 — making it one of the closest title races in French football history. Franck Haise's Lens produced a remarkable campaign that captured the imagination of the nation, running the Parisian giants closer than anyone had managed in years.

Kylian Mbappe was once again the standout performer, scoring 29 goals to claim the golden boot in devastating fashion. The Frenchman's pace, power and finishing were simply unmatched in the division. He was joined in a formidable front line by Lionel Messi and Neymar in what proved to be the final season of PSG's superstar trio. Messi contributed 16 goals and a league-leading 10 assists, while Neymar added 11 goals and 9 assists before his departure to Saudi Arabia.

Marseille finished third with 73 points under Igor Tudor, booking their Champions League ticket. Monaco secured the fourth qualification spot on 65 points, while Lille and Rennes completed the European contingent.

The season marked the end of an era in many ways. Messi's final campaign in European club football, Neymar's last season in France, and the beginning of Ligue 1's transition to an 18-team format from the following season all gave the campaign a sense of finality. Jonathan David continued his prolific form at Lille with 21 goals, establishing himself as one of the most consistent strikers in European football.

Angers, Troyes and Ajaccio were relegated, with the league set to shrink from 20 to 18 teams for the following season.`,
  notableMoments: [
    "PSG pipped Lens to the title by just a single point in a thrilling title race",
    "Kylian Mbappe scored 29 goals to win the Ligue 1 golden boot",
    "Lionel Messi's final season in European club football ended with 16 goals and 10 assists",
    "Lens mounted their closest title challenge in decades under Franck Haise",
    "The last season of the 20-team Ligue 1 format before shrinking to 18 teams",
  ],
  metaTitle: "Ligue 1 2022-23 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2022-23 Ligue 1 season. Final standings, top scorers and a complete season recap.",
};

export default data;
