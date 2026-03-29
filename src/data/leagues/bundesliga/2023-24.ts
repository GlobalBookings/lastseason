import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Bundesliga",
  leagueSlug: "bundesliga",
  season: "2023-24",
  seasonDisplay: "2023-24",
  champion: "Bayer Leverkusen",
  championSlug: "bayer-leverkusen",
  topScorer: "Harry Kane",
  topScorerGoals: 36,
  totalGoals: 952,
  standings: [
    { pos: 1, club: "Bayer Leverkusen", clubSlug: "bayer-leverkusen", p: 34, w: 28, d: 6, l: 0, gf: 86, ga: 24, gd: 62, pts: 90, zone: "cl" },
    { pos: 2, club: "VfB Stuttgart", clubSlug: "vfb-stuttgart", p: 34, w: 23, d: 4, l: 7, gf: 77, ga: 39, gd: 38, pts: 73, zone: "cl" },
    { pos: 3, club: "Bayern Munich", clubSlug: "bayern-munich", p: 34, w: 22, d: 6, l: 6, gf: 92, ga: 45, gd: 47, pts: 72, zone: "cl" },
    { pos: 4, club: "RB Leipzig", clubSlug: "rb-leipzig", p: 34, w: 19, d: 8, l: 7, gf: 77, ga: 43, gd: 34, pts: 65, zone: "cl" },
    { pos: 5, club: "Borussia Dortmund", clubSlug: "borussia-dortmund", p: 34, w: 18, d: 9, l: 7, gf: 67, ga: 44, gd: 23, pts: 63, zone: "el" },
    { pos: 6, club: "Eintracht Frankfurt", clubSlug: "eintracht-frankfurt", p: 34, w: 12, d: 11, l: 11, gf: 49, ga: 51, gd: -2, pts: 47, zone: "ecl" },
    { pos: 7, club: "Hoffenheim", clubSlug: "hoffenheim", p: 34, w: 13, d: 7, l: 14, gf: 62, ga: 54, gd: 8, pts: 46 },
    { pos: 8, club: "Heidenheim", clubSlug: "heidenheim", p: 34, w: 10, d: 12, l: 12, gf: 42, ga: 52, gd: -10, pts: 42 },
    { pos: 9, club: "Werder Bremen", clubSlug: "werder-bremen", p: 34, w: 11, d: 9, l: 14, gf: 48, ga: 55, gd: -7, pts: 42 },
    { pos: 10, club: "Freiburg", clubSlug: "freiburg", p: 34, w: 11, d: 9, l: 14, gf: 45, ga: 53, gd: -8, pts: 42 },
    { pos: 11, club: "Augsburg", clubSlug: "augsburg", p: 34, w: 10, d: 9, l: 15, gf: 47, ga: 59, gd: -12, pts: 39 },
    { pos: 12, club: "Wolfsburg", clubSlug: "wolfsburg", p: 34, w: 9, d: 10, l: 15, gf: 43, ga: 57, gd: -14, pts: 37 },
    { pos: 13, club: "Mainz 05", clubSlug: "mainz-05", p: 34, w: 8, d: 10, l: 16, gf: 39, ga: 56, gd: -17, pts: 34 },
    { pos: 14, club: "Borussia Monchengladbach", clubSlug: "borussia-monchengladbach", p: 34, w: 8, d: 10, l: 16, gf: 50, ga: 66, gd: -16, pts: 34 },
    { pos: 15, club: "Union Berlin", clubSlug: "union-berlin", p: 34, w: 8, d: 9, l: 17, gf: 33, ga: 51, gd: -18, pts: 33 },
    { pos: 16, club: "Bochum", clubSlug: "bochum", p: 34, w: 7, d: 10, l: 17, gf: 37, ga: 62, gd: -25, pts: 31, zone: "relegation" },
    { pos: 17, club: "Cologne", clubSlug: "cologne", p: 34, w: 5, d: 12, l: 17, gf: 28, ga: 55, gd: -27, pts: 27, zone: "relegation" },
    { pos: 18, club: "Darmstadt 98", clubSlug: "darmstadt-98", p: 34, w: 3, d: 8, l: 23, gf: 30, ga: 86, gd: -56, pts: 17, zone: "relegation" },
  ],
  scorers: [
    { name: "Harry Kane", playerSlug: "harry-kane", club: "Bayern Munich", clubSlug: "bayern-munich", goals: 36, assists: 8 },
    { name: "Serhou Guirassy", playerSlug: "serhou-guirassy", club: "VfB Stuttgart", clubSlug: "vfb-stuttgart", goals: 28, assists: 3 },
    { name: "Loïs Openda", playerSlug: "lois-openda", club: "RB Leipzig", clubSlug: "rb-leipzig", goals: 24, assists: 8 },
    { name: "Deniz Undav", playerSlug: "deniz-undav", club: "VfB Stuttgart", clubSlug: "vfb-stuttgart", goals: 18, assists: 10 },
    { name: "Maximilian Beier", playerSlug: "maximilian-beier", club: "Hoffenheim", clubSlug: "hoffenheim", goals: 16, assists: 3 },
    { name: "Ermedin Demirovic", playerSlug: "ermedin-demirovic", club: "Augsburg", clubSlug: "augsburg", goals: 15, assists: 7 },
    { name: "Victor Boniface", playerSlug: "victor-boniface", club: "Bayer Leverkusen", clubSlug: "bayer-leverkusen", goals: 14, assists: 5 },
    { name: "Tim Kleindienst", playerSlug: "tim-kleindienst", club: "Heidenheim", clubSlug: "heidenheim", goals: 12, assists: 3 },
    { name: "Florian Wirtz", playerSlug: "florian-wirtz", club: "Bayer Leverkusen", clubSlug: "bayer-leverkusen", goals: 11, assists: 11 },
    { name: "Leroy Sané", playerSlug: "leroy-sane", club: "Bayern Munich", clubSlug: "bayern-munich", goals: 10, assists: 10 },
  ],
  assisters: [
    { name: "Alejandro Grimaldo", playerSlug: "alejandro-grimaldo", club: "Bayer Leverkusen", clubSlug: "bayer-leverkusen", assists: 12 },
    { name: "Florian Wirtz", playerSlug: "florian-wirtz", club: "Bayer Leverkusen", clubSlug: "bayer-leverkusen", assists: 11 },
    { name: "Xavi Simons", playerSlug: "xavi-simons", club: "RB Leipzig", clubSlug: "rb-leipzig", assists: 10 },
    { name: "Deniz Undav", playerSlug: "deniz-undav", club: "VfB Stuttgart", clubSlug: "vfb-stuttgart", assists: 10 },
    { name: "Leroy Sané", playerSlug: "leroy-sane", club: "Bayern Munich", clubSlug: "bayern-munich", assists: 10 },
  ],
  cleanSheets: [
    { name: "Lukáš Hrádecký", playerSlug: "lukas-hradecky", club: "Bayer Leverkusen", clubSlug: "bayer-leverkusen", cleanSheets: 14 },
    { name: "Alexander Nübel", playerSlug: "alexander-nubel", club: "VfB Stuttgart", clubSlug: "vfb-stuttgart", cleanSheets: 11 },
    { name: "Péter Gulácsi", playerSlug: "peter-gulacsi", club: "RB Leipzig", clubSlug: "rb-leipzig", cleanSheets: 10 },
    { name: "Manuel Neuer", playerSlug: "manuel-neuer", club: "Bayern Munich", clubSlug: "bayern-munich", cleanSheets: 9 },
    { name: "Kevin Müller", playerSlug: "kevin-muller", club: "Heidenheim", clubSlug: "heidenheim", cleanSheets: 8 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Florian Wirtz", playerSlug: "florian-wirtz" },
    { title: "Top Scorer (Torjägerkanone)", winner: "Harry Kane", playerSlug: "harry-kane" },
    { title: "Best Goalkeeper", winner: "Lukáš Hrádecký", playerSlug: "lukas-hradecky" },
    { title: "Manager of the Season", winner: "Xabi Alonso" },
  ],
  relegated: ["Cologne", "Darmstadt 98"],
  promoted: ["St. Pauli", "Holstein Kiel"],
  narrative: `Bayer Leverkusen wrote one of the greatest chapters in Bundesliga history in 2023-24, completing an unprecedented unbeaten league season under Xabi Alonso to claim their first-ever Bundesliga title. Their remarkable record of 28 wins and 6 draws — zero defeats — yielded 90 points and ended Bayern Munich's eleven-year stranglehold on the championship.

Leverkusen's success was built on relentless consistency and late drama. Time and again they rescued results in stoppage time, earning the nickname "Neverkusen" being replaced by something far more glorious. Florian Wirtz, just 20 years old, was the creative heartbeat with 11 goals and 11 assists, winning Player of the Season. Victor Boniface and Alejandro Grimaldo provided crucial contributions in attack.

Harry Kane's debut season at Bayern Munich was individually spectacular — his 36 league goals shattered the record for a debut Bundesliga season and earned him the Torjägerkanone with ease. Yet even Kane's brilliance couldn't prevent Bayern from slipping to a shocking third-place finish on 72 points, their worst league position in over a decade.

VfB Stuttgart were the surprise package of the season, finishing second on 73 points in a remarkable revival under Sebastian Hoeneß. Serhou Guirassy's 28 goals and Deniz Undav's all-round excellence powered a side that had narrowly avoided relegation the previous season into the Champions League. It was one of the most dramatic turnarounds in Bundesliga history.

RB Leipzig secured fourth on 65 points, with Loïs Openda's 24 goals proving vital. Borussia Dortmund took fifth and a Europa League spot despite an inconsistent domestic campaign that sat in stark contrast to their run to the Champions League final.

At the bottom, Darmstadt 98 were cut adrift on just 17 points, while Cologne's 27 points weren't enough to avoid the drop. Heidenheim, in their debut Bundesliga season, defied expectations by finishing a comfortable eighth on 42 points.

A season that will be remembered for Leverkusen's perfection, Kane's record-breaking debut, and Stuttgart's extraordinary resurgence — 2023-24 was a campaign that reshaped the landscape of German football.`,
  notableMoments: [
    "Bayer Leverkusen completed the first-ever unbeaten Bundesliga season (28W 6D 0L)",
    "Xabi Alonso's side ended Bayern Munich's eleven-year title streak",
    "Harry Kane scored 36 league goals, breaking the all-time Bundesliga record for a debut season",
    "VfB Stuttgart rose from near-relegation to Champions League qualification in a single season",
    "Heidenheim finished eighth in their first-ever Bundesliga campaign",
  ],
  metaTitle: "Bundesliga 2023-24 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2023-24 Bundesliga season. Final standings, top goalscorers, assists, player awards and a complete season recap of Leverkusen's historic unbeaten title.",
};

export default data;
