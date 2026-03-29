import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Bundesliga",
  leagueSlug: "bundesliga",
  season: "2022-23",
  seasonDisplay: "2022-23",
  champion: "Bayern Munich",
  championSlug: "bayern-munich",
  topScorer: "Niclas Füllkrug",
  topScorerGoals: 16,
  totalGoals: 930,
  standings: [
    { pos: 1, club: "Bayern Munich", clubSlug: "bayern-munich", p: 34, w: 21, d: 8, l: 5, gf: 90, ga: 38, gd: 52, pts: 71, zone: "cl" },
    { pos: 2, club: "Borussia Dortmund", clubSlug: "borussia-dortmund", p: 34, w: 22, d: 5, l: 7, gf: 82, ga: 44, gd: 38, pts: 71, zone: "cl" },
    { pos: 3, club: "RB Leipzig", clubSlug: "rb-leipzig", p: 34, w: 20, d: 6, l: 8, gf: 64, ga: 37, gd: 27, pts: 66, zone: "cl" },
    { pos: 4, club: "Union Berlin", clubSlug: "union-berlin", p: 34, w: 18, d: 8, l: 8, gf: 51, ga: 38, gd: 13, pts: 62, zone: "cl" },
    { pos: 5, club: "Freiburg", clubSlug: "freiburg", p: 34, w: 17, d: 8, l: 9, gf: 51, ga: 44, gd: 7, pts: 59, zone: "el" },
    { pos: 6, club: "Bayer Leverkusen", clubSlug: "bayer-leverkusen", p: 34, w: 14, d: 8, l: 12, gf: 55, ga: 49, gd: 6, pts: 50, zone: "ecl" },
    { pos: 7, club: "Eintracht Frankfurt", clubSlug: "eintracht-frankfurt", p: 34, w: 14, d: 8, l: 12, gf: 55, ga: 51, gd: 4, pts: 50 },
    { pos: 8, club: "Wolfsburg", clubSlug: "wolfsburg", p: 34, w: 12, d: 8, l: 14, gf: 51, ga: 48, gd: 3, pts: 44 },
    { pos: 9, club: "Mainz 05", clubSlug: "mainz-05", p: 34, w: 11, d: 10, l: 13, gf: 50, ga: 53, gd: -3, pts: 43 },
    { pos: 10, club: "Borussia Monchengladbach", clubSlug: "borussia-monchengladbach", p: 34, w: 11, d: 10, l: 13, gf: 50, ga: 57, gd: -7, pts: 43 },
    { pos: 11, club: "Cologne", clubSlug: "cologne", p: 34, w: 10, d: 11, l: 13, gf: 44, ga: 53, gd: -9, pts: 41 },
    { pos: 12, club: "Hoffenheim", clubSlug: "hoffenheim", p: 34, w: 10, d: 10, l: 14, gf: 48, ga: 57, gd: -9, pts: 40 },
    { pos: 13, club: "Werder Bremen", clubSlug: "werder-bremen", p: 34, w: 10, d: 10, l: 14, gf: 47, ga: 56, gd: -9, pts: 40 },
    { pos: 14, club: "Bochum", clubSlug: "bochum", p: 34, w: 10, d: 8, l: 16, gf: 40, ga: 59, gd: -19, pts: 38 },
    { pos: 15, club: "Augsburg", clubSlug: "augsburg", p: 34, w: 8, d: 10, l: 16, gf: 41, ga: 59, gd: -18, pts: 34 },
    { pos: 16, club: "Stuttgart", clubSlug: "stuttgart", p: 34, w: 8, d: 9, l: 17, gf: 42, ga: 54, gd: -12, pts: 33, zone: "relegation" },
    { pos: 17, club: "Schalke 04", clubSlug: "schalke-04", p: 34, w: 6, d: 8, l: 20, gf: 31, ga: 64, gd: -33, pts: 26, zone: "relegation" },
    { pos: 18, club: "Hertha Berlin", clubSlug: "hertha-berlin", p: 34, w: 5, d: 7, l: 22, gf: 38, ga: 69, gd: -31, pts: 22, zone: "relegation" },
  ],
  scorers: [
    { name: "Niclas Füllkrug", playerSlug: "niclas-fullkrug", club: "Werder Bremen", clubSlug: "werder-bremen", goals: 16, assists: 5 },
    { name: "Randal Kolo Muani", playerSlug: "randal-kolo-muani", club: "Eintracht Frankfurt", clubSlug: "eintracht-frankfurt", goals: 15, assists: 8 },
    { name: "Moussa Diaby", playerSlug: "moussa-diaby", club: "Bayer Leverkusen", clubSlug: "bayer-leverkusen", goals: 13, assists: 7 },
    { name: "Marcus Thuram", playerSlug: "marcus-thuram", club: "Borussia Monchengladbach", clubSlug: "borussia-monchengladbach", goals: 13, assists: 5 },
    { name: "Jamal Musiala", playerSlug: "jamal-musiala", club: "Bayern Munich", clubSlug: "bayern-munich", goals: 12, assists: 6 },
    { name: "Sheraldo Becker", playerSlug: "sheraldo-becker", club: "Union Berlin", clubSlug: "union-berlin", goals: 11, assists: 4 },
    { name: "Leroy Sané", playerSlug: "leroy-sane", club: "Bayern Munich", clubSlug: "bayern-munich", goals: 10, assists: 8 },
    { name: "Christopher Nkunku", playerSlug: "christopher-nkunku", club: "RB Leipzig", clubSlug: "rb-leipzig", goals: 10, assists: 3 },
    { name: "Eric Maxim Choupo-Moting", playerSlug: "eric-maxim-choupo-moting", club: "Bayern Munich", clubSlug: "bayern-munich", goals: 10, assists: 3 },
    { name: "Donyell Malen", playerSlug: "donyell-malen", club: "Borussia Dortmund", clubSlug: "borussia-dortmund", goals: 9, assists: 5 },
  ],
  assisters: [
    { name: "Thomas Müller", playerSlug: "thomas-muller", club: "Bayern Munich", clubSlug: "bayern-munich", assists: 11 },
    { name: "Randal Kolo Muani", playerSlug: "randal-kolo-muani", club: "Eintracht Frankfurt", clubSlug: "eintracht-frankfurt", assists: 8 },
    { name: "Leroy Sané", playerSlug: "leroy-sane", club: "Bayern Munich", clubSlug: "bayern-munich", assists: 8 },
    { name: "Moussa Diaby", playerSlug: "moussa-diaby", club: "Bayer Leverkusen", clubSlug: "bayer-leverkusen", assists: 7 },
    { name: "Christopher Nkunku", playerSlug: "christopher-nkunku", club: "RB Leipzig", clubSlug: "rb-leipzig", assists: 7 },
  ],
  cleanSheets: [
    { name: "Mark Flekken", playerSlug: "mark-flekken", club: "Freiburg", clubSlug: "freiburg", cleanSheets: 11 },
    { name: "Yann Sommer", playerSlug: "yann-sommer", club: "Bayern Munich", clubSlug: "bayern-munich", cleanSheets: 10 },
    { name: "Kevin Trapp", playerSlug: "kevin-trapp", club: "Eintracht Frankfurt", clubSlug: "eintracht-frankfurt", cleanSheets: 9 },
    { name: "Frederik Rønnow", playerSlug: "frederik-ronnow", club: "Union Berlin", clubSlug: "union-berlin", cleanSheets: 9 },
    { name: "Jiří Pavlenka", playerSlug: "jiri-pavlenka", club: "Werder Bremen", clubSlug: "werder-bremen", cleanSheets: 7 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Jamal Musiala", playerSlug: "jamal-musiala" },
    { title: "Top Scorer (Torjägerkanone)", winner: "Niclas Füllkrug", playerSlug: "niclas-fullkrug" },
    { title: "Best Goalkeeper", winner: "Yann Sommer", playerSlug: "yann-sommer" },
    { title: "Manager of the Season", winner: "Thomas Tuchel" },
  ],
  relegated: ["Schalke 04", "Hertha Berlin"],
  promoted: ["Heidenheim", "Darmstadt 98"],
  narrative: `The 2022-23 Bundesliga season delivered perhaps the most dramatic final day in the competition's history, as Bayern Munich claimed their eleventh consecutive title by the narrowest of margins — goal difference — after finishing level on 71 points with Borussia Dortmund.

Going into the final matchday, the title race was on a knife-edge. Dortmund, who had led the table for much of the season, needed to match or better Bayern's result to be crowned champions. At Signal Iduna Park, Dortmund fell behind to Mainz 05 early on, sending shockwaves through the ground. Although they rallied to win, Bayern's comfortable victory over Cologne meant the title stayed in Munich, decided by a superior goal difference of 52 compared to Dortmund's 38.

The heartbreak for Dortmund was palpable. They had mounted a genuine title challenge built on consistency and team spirit, but a wobble in the closing weeks — combined with Bayern's relentless finishing power — proved decisive. It was a painful echo of past near-misses for the Yellow Wall faithful.

Bayern's season was not without turbulence. Thomas Tuchel replaced Julian Nagelsmann as manager mid-season in a controversial move, yet steadied the ship to deliver the title. Jamal Musiala emerged as the breakout star with 12 goals and dazzling performances that earned him Player of the Season, while Leroy Sané contributed 10 goals and 8 assists in a dynamic attacking display.

Union Berlin's remarkable rise continued as they finished fourth to qualify for the Champions League for the first time in their history. Freiburg, under Christian Streich, took fifth for a Europa League spot, while Niclas Füllkrug's 16 goals for newly promoted Werder Bremen earned him the Torjägerkanone and a place in the Germany squad.

At the bottom, Schalke 04 went straight back down after just one season following their 2022 promotion, while Hertha Berlin's long-feared relegation finally became reality on just 22 points. Stuttgart narrowly survived via the relegation playoff — a far cry from the heights they would reach just twelve months later.

A season defined by its extraordinary climax, 2022-23 proved once again that the Bundesliga title race could produce drama to rival any league in Europe.`,
  notableMoments: [
    "Bayern Munich won the title on goal difference over Dortmund on the final day — both teams on 71 points",
    "Borussia Dortmund's title dream shattered despite winning their final match",
    "Union Berlin qualified for the Champions League for the first time in their history",
    "Niclas Füllkrug won the Torjägerkanone with 16 goals in his first Bundesliga season with Bremen",
    "Schalke 04 relegated again after just one season back in the top flight",
  ],
  metaTitle: "Bundesliga 2022-23 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2022-23 Bundesliga season. Final standings, top goalscorers, assists, player awards and a complete recap of the dramatic final-day title race.",
};

export default data;
