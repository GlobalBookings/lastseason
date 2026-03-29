import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Scottish Premiership",
  leagueSlug: "scottish-premiership",
  season: "2023-24",
  seasonDisplay: "2023-24",
  champion: "Celtic",
  championSlug: "celtic",
  topScorer: "Kyogo Furuhashi",
  topScorerGoals: 14,
  totalGoals: 680,
  standings: [
    { pos: 1, club: "Celtic", clubSlug: "celtic", p: 38, w: 26, d: 8, l: 4, gf: 98, ga: 30, gd: 68, pts: 86, zone: "cl" },
    { pos: 2, club: "Rangers", clubSlug: "rangers", p: 38, w: 22, d: 7, l: 9, gf: 82, ga: 40, gd: 42, pts: 73, zone: "cl" },
    { pos: 3, club: "Hearts", clubSlug: "hearts", p: 38, w: 17, d: 7, l: 14, gf: 63, ga: 47, gd: 16, pts: 58 },
    { pos: 4, club: "Kilmarnock", clubSlug: "kilmarnock", p: 38, w: 14, d: 10, l: 14, gf: 56, ga: 52, gd: 4, pts: 52 },
    { pos: 5, club: "Aberdeen", clubSlug: "aberdeen", p: 38, w: 12, d: 10, l: 16, gf: 56, ga: 57, gd: -1, pts: 46 },
    { pos: 6, club: "Hibernian", clubSlug: "hibernian", p: 38, w: 12, d: 8, l: 18, gf: 54, ga: 58, gd: -4, pts: 44 },
    { pos: 7, club: "St Mirren", clubSlug: "st-mirren", p: 38, w: 12, d: 7, l: 19, gf: 52, ga: 58, gd: -6, pts: 43 },
    { pos: 8, club: "Dundee", clubSlug: "dundee", p: 38, w: 11, d: 9, l: 18, gf: 50, ga: 60, gd: -10, pts: 42 },
    { pos: 9, club: "St Johnstone", clubSlug: "st-johnstone", p: 38, w: 9, d: 8, l: 21, gf: 46, ga: 64, gd: -18, pts: 35 },
    { pos: 10, club: "Ross County", clubSlug: "ross-county", p: 38, w: 8, d: 9, l: 21, gf: 44, ga: 67, gd: -23, pts: 33 },
    { pos: 11, club: "Motherwell", clubSlug: "motherwell", p: 38, w: 7, d: 10, l: 21, gf: 43, ga: 69, gd: -26, pts: 31 },
    { pos: 12, club: "Livingston", clubSlug: "livingston", p: 38, w: 6, d: 8, l: 24, gf: 36, ga: 78, gd: -42, pts: 26, zone: "relegation" },
  ],
  scorers: [
    { name: "Kyogo Furuhashi", playerSlug: "kyogo-furuhashi", club: "Celtic", clubSlug: "celtic", goals: 14, assists: 3 },
    { name: "Lawrence Shankland", playerSlug: "lawrence-shankland", club: "Hearts", clubSlug: "hearts", goals: 13, assists: 2 },
    { name: "Bojan Miovski", playerSlug: "bojan-miovski", club: "Aberdeen", clubSlug: "aberdeen", goals: 12, assists: 2 },
    { name: "Cyriel Dessers", playerSlug: "cyriel-dessers", club: "Rangers", clubSlug: "rangers", goals: 10, assists: 3 },
    { name: "Adam Idah", playerSlug: "adam-idah", club: "Celtic", clubSlug: "celtic", goals: 9, assists: 4 },
    { name: "Daizen Maeda", playerSlug: "daizen-maeda", club: "Celtic", clubSlug: "celtic", goals: 9, assists: 3 },
    { name: "Matt O'Riley", playerSlug: "matt-oriley", club: "Celtic", clubSlug: "celtic", goals: 8, assists: 12 },
    { name: "Kemar Roofe", playerSlug: "kemar-roofe", club: "Rangers", clubSlug: "rangers", goals: 7, assists: 2 },
    { name: "Luis Palma", playerSlug: "luis-palma", club: "Celtic", clubSlug: "celtic", goals: 7, assists: 5 },
    { name: "Tom Lawrence", playerSlug: "tom-lawrence", club: "Rangers", clubSlug: "rangers", goals: 6, assists: 3 },
  ],
  assisters: [
    { name: "Matt O'Riley", playerSlug: "matt-oriley", club: "Celtic", clubSlug: "celtic", assists: 12 },
    { name: "Luis Palma", playerSlug: "luis-palma", club: "Celtic", clubSlug: "celtic", assists: 5 },
    { name: "Adam Idah", playerSlug: "adam-idah", club: "Celtic", clubSlug: "celtic", assists: 4 },
    { name: "Tom Lawrence", playerSlug: "tom-lawrence", club: "Rangers", clubSlug: "rangers", assists: 3 },
    { name: "Kyogo Furuhashi", playerSlug: "kyogo-furuhashi", club: "Celtic", clubSlug: "celtic", assists: 3 },
  ],
  cleanSheets: [
    { name: "Joe Hart", playerSlug: "joe-hart", club: "Celtic", clubSlug: "celtic", cleanSheets: 16 },
    { name: "Jack Butland", playerSlug: "jack-butland", club: "Rangers", clubSlug: "rangers", cleanSheets: 12 },
    { name: "Craig Gordon", playerSlug: "craig-gordon", club: "Hearts", clubSlug: "hearts", cleanSheets: 10 },
    { name: "Robby McCrorie", playerSlug: "robby-mccrorie", club: "Kilmarnock", clubSlug: "kilmarnock", cleanSheets: 8 },
    { name: "Dimitar Mitov", playerSlug: "dimitar-mitov", club: "St Johnstone", clubSlug: "st-johnstone", cleanSheets: 7 },
  ],
  awards: [
    { title: "Player of the Year", winner: "Matt O'Riley", playerSlug: "matt-oriley" },
    { title: "Top Scorer", winner: "Kyogo Furuhashi", playerSlug: "kyogo-furuhashi" },
    { title: "Manager of the Year", winner: "Brendan Rodgers" },
    { title: "Best Goalkeeper", winner: "Joe Hart", playerSlug: "joe-hart" },
  ],
  relegated: ["Livingston"],
  promoted: ["Dundee United"],
  narrative: `Celtic cruised to a third consecutive Scottish Premiership title under the returning Brendan Rodgers, finishing on a commanding 86 points. The Hoops' dominance was emphatic, with a 13-point gap over Rangers underlining the growing chasm between the Glasgow rivals at the top of Scottish football.

The creative brilliance of Matt O'Riley was the standout story of the domestic season. The Danish midfielder contributed 8 goals and a remarkable 12 assists, pulling the strings from midfield and earning the Player of the Year award. His performances attracted interest from across Europe, establishing him as one of the most coveted midfielders outside the top five leagues.

Kyogo Furuhashi claimed the golden boot with 14 goals, leading Celtic's attack with his intelligent movement and clinical finishing. Adam Idah arrived on loan from Norwich and made an immediate impact with 9 goals and 4 assists, while Daizen Maeda provided tireless energy and 9 goals from the wing. Joe Hart's consistency in goal, keeping 16 clean sheets, anchored the league's best defence.

Rangers endured a transitional season under Philippe Clement, finishing second on 73 points. While Cyriel Dessers and the returning Tom Lawrence provided attacking threat, the Ibrox side lacked the consistency to mount a serious title challenge. Hearts consolidated their position as Scotland's third force with 58 points under Robbie Neilson and then Steven Naismith.

Kilmarnock's fourth-place finish was an impressive achievement for Derek McInnes's side, while Aberdeen and Hibernian completed the top six before the league split. At the bottom, Livingston's relegation ended their five-year stay in the top flight, finishing on just 26 points.`,
  notableMoments: [
    "Celtic won a third consecutive Scottish Premiership title under Brendan Rodgers",
    "Matt O'Riley provided 12 assists to win the Player of the Year award",
    "Joe Hart kept 16 clean sheets in his final professional season",
    "Livingston were relegated after five seasons in the Scottish Premiership",
    "Kilmarnock secured an impressive fourth-place finish under Derek McInnes",
  ],
  metaTitle: "Scottish Premiership 2023-24 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2023-24 Scottish Premiership season. Final standings, top scorers and a complete season recap.",
};

export default data;
