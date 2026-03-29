import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Ligue 1",
  leagueSlug: "ligue-1",
  season: "2023-24",
  seasonDisplay: "2023-24",
  champion: "PSG",
  championSlug: "psg",
  topScorer: "Kylian Mbappe",
  topScorerGoals: 27,
  totalGoals: 940,
  standings: [
    { pos: 1, club: "PSG", clubSlug: "psg", p: 34, w: 26, d: 7, l: 1, gf: 89, ga: 30, gd: 59, pts: 85, zone: "cl" },
    { pos: 2, club: "Monaco", clubSlug: "monaco", p: 34, w: 20, d: 7, l: 7, gf: 70, ga: 40, gd: 30, pts: 67, zone: "cl" },
    { pos: 3, club: "Brest", clubSlug: "brest", p: 34, w: 20, d: 6, l: 8, gf: 58, ga: 43, gd: 15, pts: 66, zone: "cl" },
    { pos: 4, club: "Lille", clubSlug: "lille", p: 34, w: 19, d: 7, l: 8, gf: 64, ga: 37, gd: 27, pts: 64, zone: "cl" },
    { pos: 5, club: "Nice", clubSlug: "nice", p: 34, w: 17, d: 7, l: 10, gf: 58, ga: 44, gd: 14, pts: 58, zone: "el" },
    { pos: 6, club: "Lyon", clubSlug: "lyon", p: 34, w: 16, d: 7, l: 11, gf: 62, ga: 47, gd: 15, pts: 55, zone: "ecl" },
    { pos: 7, club: "Lens", clubSlug: "lens", p: 34, w: 15, d: 7, l: 12, gf: 53, ga: 49, gd: 4, pts: 52 },
    { pos: 8, club: "Marseille", clubSlug: "marseille", p: 34, w: 15, d: 7, l: 12, gf: 56, ga: 53, gd: 3, pts: 52 },
    { pos: 9, club: "Rennes", clubSlug: "rennes", p: 34, w: 12, d: 9, l: 13, gf: 50, ga: 53, gd: -3, pts: 45 },
    { pos: 10, club: "Toulouse", clubSlug: "toulouse", p: 34, w: 12, d: 7, l: 15, gf: 47, ga: 55, gd: -8, pts: 43 },
    { pos: 11, club: "Montpellier", clubSlug: "montpellier", p: 34, w: 11, d: 9, l: 14, gf: 49, ga: 56, gd: -7, pts: 42 },
    { pos: 12, club: "Strasbourg", clubSlug: "strasbourg", p: 34, w: 10, d: 8, l: 16, gf: 45, ga: 57, gd: -12, pts: 38 },
    { pos: 13, club: "Nantes", clubSlug: "nantes", p: 34, w: 10, d: 7, l: 17, gf: 43, ga: 59, gd: -16, pts: 37 },
    { pos: 14, club: "Le Havre", clubSlug: "le-havre", p: 34, w: 9, d: 9, l: 16, gf: 39, ga: 59, gd: -20, pts: 36 },
    { pos: 15, club: "Reims", clubSlug: "reims", p: 34, w: 9, d: 8, l: 17, gf: 41, ga: 58, gd: -17, pts: 35 },
    { pos: 16, club: "Metz", clubSlug: "metz", p: 34, w: 7, d: 9, l: 18, gf: 42, ga: 63, gd: -21, pts: 30, zone: "relegation" },
    { pos: 17, club: "Lorient", clubSlug: "lorient", p: 34, w: 6, d: 9, l: 19, gf: 40, ga: 66, gd: -26, pts: 27, zone: "relegation" },
    { pos: 18, club: "Clermont Foot", clubSlug: "clermont-foot", p: 34, w: 5, d: 7, l: 22, gf: 34, ga: 71, gd: -37, pts: 22, zone: "relegation" },
  ],
  scorers: [
    { name: "Kylian Mbappe", playerSlug: "kylian-mbappe", club: "PSG", clubSlug: "psg", goals: 27, assists: 7 },
    { name: "Jonathan David", playerSlug: "jonathan-david", club: "Lille", clubSlug: "lille", goals: 19, assists: 4 },
    { name: "Alexandre Lacazette", playerSlug: "alexandre-lacazette", club: "Lyon", clubSlug: "lyon", goals: 15, assists: 5 },
    { name: "Pierre-Emerick Aubameyang", playerSlug: "pierre-emerick-aubameyang", club: "Marseille", clubSlug: "marseille", goals: 13, assists: 4 },
    { name: "Bradley Barcola", playerSlug: "bradley-barcola", club: "PSG", clubSlug: "psg", goals: 12, assists: 8 },
    { name: "Ousmane Dembele", playerSlug: "ousmane-dembele", club: "PSG", clubSlug: "psg", goals: 10, assists: 9 },
    { name: "Wissam Ben Yedder", playerSlug: "wissam-ben-yedder", club: "Monaco", clubSlug: "monaco", goals: 10, assists: 3 },
    { name: "Romain Del Castillo", playerSlug: "romain-del-castillo", club: "Brest", clubSlug: "brest", goals: 8, assists: 5 },
    { name: "Folarin Balogun", playerSlug: "folarin-balogun", club: "Monaco", clubSlug: "monaco", goals: 8, assists: 3 },
    { name: "Mohamed Bayo", playerSlug: "mohamed-bayo", club: "Lille", clubSlug: "lille", goals: 8, assists: 2 },
  ],
  assisters: [
    { name: "Ousmane Dembele", playerSlug: "ousmane-dembele", club: "PSG", clubSlug: "psg", assists: 9 },
    { name: "Bradley Barcola", playerSlug: "bradley-barcola", club: "PSG", clubSlug: "psg", assists: 8 },
    { name: "Kylian Mbappe", playerSlug: "kylian-mbappe", club: "PSG", clubSlug: "psg", assists: 7 },
    { name: "Romain Del Castillo", playerSlug: "romain-del-castillo", club: "Brest", clubSlug: "brest", assists: 5 },
    { name: "Alexandre Lacazette", playerSlug: "alexandre-lacazette", club: "Lyon", clubSlug: "lyon", assists: 5 },
  ],
  cleanSheets: [
    { name: "Gianluigi Donnarumma", playerSlug: "gianluigi-donnarumma", club: "PSG", clubSlug: "psg", cleanSheets: 15 },
    { name: "Lucas Chevalier", playerSlug: "lucas-chevalier", club: "Lille", clubSlug: "lille", cleanSheets: 12 },
    { name: "Philipp Kohn", playerSlug: "philipp-kohn", club: "Monaco", clubSlug: "monaco", cleanSheets: 10 },
    { name: "Marco Bizot", playerSlug: "marco-bizot", club: "Brest", clubSlug: "brest", cleanSheets: 9 },
    { name: "Marcin Bulka", playerSlug: "marcin-bulka", club: "Nice", clubSlug: "nice", cleanSheets: 8 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Kylian Mbappe", playerSlug: "kylian-mbappe" },
    { title: "Top Scorer", winner: "Kylian Mbappe", playerSlug: "kylian-mbappe" },
    { title: "Best Coach", winner: "Luis Enrique" },
    { title: "Best Goalkeeper", winner: "Gianluigi Donnarumma", playerSlug: "gianluigi-donnarumma" },
  ],
  relegated: ["Metz", "Lorient", "Clermont Foot"],
  promoted: ["Auxerre", "Angers", "Saint-Etienne"],
  narrative: `Kylian Mbappe's farewell season at PSG was a fitting send-off as he fired the Parisians to another Ligue 1 title. The French superstar scored 27 goals to claim the golden boot for the final time in French football before his long-anticipated move to Real Madrid, leading PSG to 85 points and an 18-point gap over second-placed Monaco.

The revelation of the season was undoubtedly Stade Brestois. The Breton club, who had never competed in European football, produced a sensational campaign to finish third on 66 points, qualifying for the Champions League for the first time in their history. Under Eric Roy's astute management, Brest's organised defensive structure and clinical counter-attacking football stunned French football.

Monaco enjoyed a strong return to the upper echelons under Adi Hutter, finishing second with 67 points. Lille secured the fourth Champions League spot with 64 points, with Jonathan David contributing 19 goals as one of Europe's most prolific strikers. Nice and Lyon rounded out the European places.

Bradley Barcola emerged as one of the brightest young talents in European football, contributing 12 goals and 8 assists for PSG alongside the electric Ousmane Dembele, who added 10 goals and a team-leading 9 assists. Luis Enrique's tactical evolution of the squad beyond Mbappe showed promise for the post-Mbappe era.

At the bottom, Metz, Lorient and Clermont Foot were all relegated. The 2023-24 season was the first with the reduced 18-team format, making survival even more competitive and relegation all the more punishing for the three sides who went down.`,
  notableMoments: [
    "Kylian Mbappe scored 27 goals in his farewell season before joining Real Madrid",
    "Brest qualified for the Champions League for the first time in their history by finishing third",
    "The season was the first with the reduced 18-team Ligue 1 format",
    "PSG won the title by 18 points despite the increased competition narrative",
    "Bradley Barcola emerged as one of France's most exciting young talents",
  ],
  metaTitle: "Ligue 1 2023-24 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2023-24 Ligue 1 season. Final standings, top scorers and a complete season recap.",
};

export default data;
