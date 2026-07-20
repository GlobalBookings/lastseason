import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Bundesliga",
  leagueSlug: "bundesliga",
  season: "2024-25",
  seasonDisplay: "2024-25",
  champion: "Bayern Munich",
  championSlug: "bayern-munich",
  topScorer: "Harry Kane",
  topScorerGoals: 26,
  totalGoals: 959,
  standings: [
    { pos: 1, club: "Bayern Munich", clubSlug: "bayern-munich", p: 34, w: 25, d: 7, l: 2, gf: 99, ga: 32, gd: 67, pts: 82, zone: "cl" },
    { pos: 2, club: "Bayer Leverkusen", clubSlug: "bayer-leverkusen", p: 34, w: 19, d: 12, l: 3, gf: 72, ga: 43, gd: 29, pts: 69, zone: "cl" },
    { pos: 3, club: "Eintracht Frankfurt", clubSlug: "eintracht-frankfurt", p: 34, w: 17, d: 9, l: 8, gf: 68, ga: 46, gd: 22, pts: 60, zone: "cl" },
    { pos: 4, club: "Borussia Dortmund", clubSlug: "borussia-dortmund", p: 34, w: 17, d: 6, l: 11, gf: 71, ga: 51, gd: 20, pts: 57, zone: "cl" },
    { pos: 5, club: "Freiburg", clubSlug: "freiburg", p: 34, w: 16, d: 7, l: 11, gf: 49, ga: 53, gd: -4, pts: 55, zone: "el" },
    { pos: 6, club: "Mainz 05", clubSlug: "mainz-05", p: 34, w: 14, d: 10, l: 10, gf: 55, ga: 43, gd: 12, pts: 52, zone: "ecl" },
    { pos: 7, club: "RB Leipzig", clubSlug: "rb-leipzig", p: 34, w: 13, d: 12, l: 9, gf: 53, ga: 48, gd: 5, pts: 51 },
    { pos: 8, club: "Werder Bremen", clubSlug: "werder-bremen", p: 34, w: 14, d: 9, l: 11, gf: 54, ga: 57, gd: -3, pts: 51 },
    { pos: 9, club: "VfB Stuttgart", clubSlug: "vfb-stuttgart", p: 34, w: 14, d: 8, l: 12, gf: 64, ga: 53, gd: 11, pts: 50, zone: "el" },
    { pos: 10, club: "Borussia Monchengladbach", clubSlug: "borussia-monchengladbach", p: 34, w: 13, d: 6, l: 15, gf: 55, ga: 57, gd: -2, pts: 45 },
    { pos: 11, club: "Wolfsburg", clubSlug: "wolfsburg", p: 34, w: 11, d: 10, l: 13, gf: 56, ga: 54, gd: 2, pts: 43 },
    { pos: 12, club: "Augsburg", clubSlug: "augsburg", p: 34, w: 11, d: 10, l: 13, gf: 35, ga: 51, gd: -16, pts: 43 },
    { pos: 13, club: "Union Berlin", clubSlug: "union-berlin", p: 34, w: 10, d: 10, l: 14, gf: 35, ga: 51, gd: -16, pts: 40 },
    { pos: 14, club: "St. Pauli", clubSlug: "st-pauli", p: 34, w: 8, d: 8, l: 18, gf: 28, ga: 41, gd: -13, pts: 32 },
    { pos: 15, club: "Hoffenheim", clubSlug: "hoffenheim", p: 34, w: 7, d: 11, l: 16, gf: 46, ga: 68, gd: -22, pts: 32 },
    { pos: 16, club: "Heidenheim", clubSlug: "heidenheim", p: 34, w: 8, d: 5, l: 21, gf: 37, ga: 64, gd: -27, pts: 29 },
    { pos: 17, club: "Holstein Kiel", clubSlug: "holstein-kiel", p: 34, w: 6, d: 7, l: 21, gf: 49, ga: 80, gd: -31, pts: 25, zone: "relegation" },
    { pos: 18, club: "Bochum", clubSlug: "bochum", p: 34, w: 6, d: 7, l: 21, gf: 33, ga: 67, gd: -34, pts: 25, zone: "relegation" },
  ],
  scorers: [
    { name: "Harry Kane", playerSlug: "harry-kane", club: "Bayern Munich", clubSlug: "bayern-munich", goals: 26 },
    { name: "Serhou Guirassy", playerSlug: "serhou-guirassy", club: "Borussia Dortmund", clubSlug: "borussia-dortmund", goals: 21 },
    { name: "Patrik Schick", playerSlug: "patrik-schick", club: "Bayer Leverkusen", clubSlug: "bayer-leverkusen", goals: 21 },
    { name: "Jonathan Burkardt", playerSlug: "jonathan-burkardt", club: "Mainz 05", clubSlug: "mainz-05", goals: 18 },
    { name: "Tim Kleindienst", playerSlug: "tim-kleindienst", club: "Borussia Monchengladbach", clubSlug: "borussia-monchengladbach", goals: 16 },
    { name: "Ermedin Demirovic", playerSlug: "ermedin-demirovic", club: "VfB Stuttgart", clubSlug: "vfb-stuttgart", goals: 15 },
    { name: "Hugo Ekitike", playerSlug: "hugo-ekitike", club: "Eintracht Frankfurt", clubSlug: "eintracht-frankfurt", goals: 15 },
    { name: "Omar Marmoush", playerSlug: "omar-marmoush", club: "Eintracht Frankfurt", clubSlug: "eintracht-frankfurt", goals: 15 },
    { name: "Benjamin Sesko", playerSlug: "benjamin-sesko", club: "RB Leipzig", clubSlug: "rb-leipzig", goals: 13 },
    { name: "Jamal Musiala", playerSlug: "jamal-musiala", club: "Bayern Munich", clubSlug: "bayern-munich", goals: 12 },
  ],
  assisters: [
    { name: "Michael Olise", playerSlug: "michael-olise", club: "Bayern Munich", clubSlug: "bayern-munich", assists: 15 },
  ],
  cleanSheets: [],
  awards: [
    { title: "Player of the Season", winner: "Harry Kane", playerSlug: "harry-kane" },
    { title: "Top Scorer (Torjagerkanone)", winner: "Harry Kane", playerSlug: "harry-kane" },
  ],
  relegated: ["Holstein Kiel", "Bochum"],
  promoted: ["Cologne", "Hamburg"],
  narrative: `Bayern Munich reclaimed the Bundesliga title in Vincent Kompany's first season in charge. They finished on 82 points, 13 clear of defending champions Bayer Leverkusen, after scoring 99 goals and losing only twice.

Harry Kane won the Torjagerkanone with 26 goals and was named Bundesliga Player of the Season. Michael Olise supplied a league-leading 15 assists in his first campaign with Bayern.

Eintracht Frankfurt finished third and Borussia Dortmund completed the Champions League places. At the other end, Holstein Kiel and Bochum were relegated automatically. Heidenheim finished 16th and retained their Bundesliga place through the relegation play-off.

Cologne and Hamburg earned automatic promotion from the 2. Bundesliga for the following season.`,
  notableMoments: [
    "Bayern Munich reclaimed the title under Vincent Kompany after finishing third the previous season",
    "Harry Kane won the Torjagerkanone with 26 goals in his second Bayern campaign",
    "Michael Olise led the league with 15 assists in his first Bayern season",
    "Holstein Kiel were relegated in their debut Bundesliga season",
    "Omar Marmoush scored 15 goals for Frankfurt before his January move to Manchester City",
  ],
  metaTitle: "Bundesliga 2024-25 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2024-25 Bundesliga season. Final standings, top goalscorers, assists, player awards and a complete season recap of Bayern's title return.",
};

export default data;
