import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Scottish Premiership",
  leagueSlug: "scottish-premiership",
  season: "2022-23",
  seasonDisplay: "2022-23",
  champion: "Celtic",
  championSlug: "celtic",
  topScorer: "Kyogo Furuhashi",
  topScorerGoals: 15,
  totalGoals: 670,
  standings: [
    { pos: 1, club: "Celtic", clubSlug: "celtic", p: 38, w: 29, d: 5, l: 4, gf: 102, ga: 27, gd: 75, pts: 92, zone: "cl" },
    { pos: 2, club: "Rangers", clubSlug: "rangers", p: 38, w: 22, d: 6, l: 10, gf: 82, ga: 39, gd: 43, pts: 72, zone: "cl" },
    { pos: 3, club: "Aberdeen", clubSlug: "aberdeen", p: 38, w: 13, d: 10, l: 15, gf: 57, ga: 53, gd: 4, pts: 49 },
    { pos: 4, club: "Hearts", clubSlug: "hearts", p: 38, w: 13, d: 9, l: 16, gf: 55, ga: 52, gd: 3, pts: 48 },
    { pos: 5, club: "Hibernian", clubSlug: "hibernian", p: 38, w: 12, d: 8, l: 18, gf: 54, ga: 55, gd: -1, pts: 44 },
    { pos: 6, club: "St Mirren", clubSlug: "st-mirren", p: 38, w: 12, d: 7, l: 19, gf: 53, ga: 56, gd: -3, pts: 43 },
    { pos: 7, club: "Livingston", clubSlug: "livingston", p: 38, w: 11, d: 8, l: 19, gf: 48, ga: 57, gd: -9, pts: 41 },
    { pos: 8, club: "St Johnstone", clubSlug: "st-johnstone", p: 38, w: 10, d: 9, l: 19, gf: 47, ga: 62, gd: -15, pts: 39 },
    { pos: 9, club: "Motherwell", clubSlug: "motherwell", p: 38, w: 10, d: 8, l: 20, gf: 47, ga: 63, gd: -16, pts: 38 },
    { pos: 10, club: "Kilmarnock", clubSlug: "kilmarnock", p: 38, w: 9, d: 10, l: 19, gf: 48, ga: 59, gd: -11, pts: 37 },
    { pos: 11, club: "Ross County", clubSlug: "ross-county", p: 38, w: 7, d: 8, l: 23, gf: 42, ga: 71, gd: -29, pts: 29 },
    { pos: 12, club: "Dundee United", clubSlug: "dundee-united", p: 38, w: 6, d: 10, l: 22, gf: 35, ga: 76, gd: -41, pts: 28, zone: "relegation" },
  ],
  scorers: [
    { name: "Kyogo Furuhashi", playerSlug: "kyogo-furuhashi", club: "Celtic", clubSlug: "celtic", goals: 15, assists: 4 },
    { name: "Lawrence Shankland", playerSlug: "lawrence-shankland", club: "Dundee United", clubSlug: "dundee-united", goals: 13, assists: 3 },
    { name: "Jota", playerSlug: "jota", club: "Celtic", clubSlug: "celtic", goals: 12, assists: 5 },
    { name: "Bojan Miovski", playerSlug: "bojan-miovski", club: "Aberdeen", clubSlug: "aberdeen", goals: 11, assists: 2 },
    { name: "Antonio Colak", playerSlug: "antonio-colak", club: "Rangers", clubSlug: "rangers", goals: 10, assists: 2 },
    { name: "Liel Abada", playerSlug: "liel-abada", club: "Celtic", clubSlug: "celtic", goals: 9, assists: 6 },
    { name: "Kevin van Veen", playerSlug: "kevin-van-veen", club: "Motherwell", clubSlug: "motherwell", goals: 9, assists: 2 },
    { name: "Daizen Maeda", playerSlug: "daizen-maeda", club: "Celtic", clubSlug: "celtic", goals: 8, assists: 3 },
    { name: "Alfredo Morelos", playerSlug: "alfredo-morelos", club: "Rangers", clubSlug: "rangers", goals: 7, assists: 3 },
    { name: "Jorge Grant", playerSlug: "jorge-grant", club: "Hearts", clubSlug: "hearts", goals: 7, assists: 4 },
  ],
  assisters: [
    { name: "Liel Abada", playerSlug: "liel-abada", club: "Celtic", clubSlug: "celtic", assists: 6 },
    { name: "Jota", playerSlug: "jota", club: "Celtic", clubSlug: "celtic", assists: 5 },
    { name: "Kyogo Furuhashi", playerSlug: "kyogo-furuhashi", club: "Celtic", clubSlug: "celtic", assists: 4 },
    { name: "Jorge Grant", playerSlug: "jorge-grant", club: "Hearts", clubSlug: "hearts", assists: 4 },
    { name: "Todd Cantwell", playerSlug: "todd-cantwell", club: "Rangers", clubSlug: "rangers", assists: 4 },
  ],
  cleanSheets: [
    { name: "Joe Hart", playerSlug: "joe-hart", club: "Celtic", clubSlug: "celtic", cleanSheets: 18 },
    { name: "Allan McGregor", playerSlug: "allan-mcgregor", club: "Rangers", clubSlug: "rangers", cleanSheets: 11 },
    { name: "Craig Gordon", playerSlug: "craig-gordon", club: "Hearts", clubSlug: "hearts", cleanSheets: 9 },
    { name: "Trevor Carson", playerSlug: "trevor-carson", club: "St Mirren", clubSlug: "st-mirren", cleanSheets: 7 },
    { name: "Max Stryjek", playerSlug: "max-stryjek", club: "Livingston", clubSlug: "livingston", cleanSheets: 6 },
  ],
  awards: [
    { title: "Player of the Year", winner: "Kyogo Furuhashi", playerSlug: "kyogo-furuhashi" },
    { title: "Top Scorer", winner: "Kyogo Furuhashi", playerSlug: "kyogo-furuhashi" },
    { title: "Manager of the Year", winner: "Ange Postecoglou" },
    { title: "Best Goalkeeper", winner: "Joe Hart", playerSlug: "joe-hart" },
  ],
  relegated: ["Dundee United"],
  promoted: ["Dundee"],
  narrative: `Celtic's 2022-23 campaign under Ange Postecoglou was one of the most dominant in Scottish Premiership history. The Hoops amassed a stunning 92 points, winning the title by a colossal 20-point margin over Rangers. It was Postecoglou's final gift to the Celtic faithful before departing for Tottenham Hotspur in the summer, leaving behind a legacy of thrilling, attacking football.

Kyogo Furuhashi was the focal point of Celtic's relentless attack, scoring 15 league goals to claim the golden boot and the Player of the Year award. The Japanese striker's movement and finishing were a constant threat, and he was ably supported by the brilliant Jota, who contributed 12 goals and 5 assists from the wing. Liel Abada added creativity and goals from the opposite flank, with 9 goals and 6 assists.

Postecoglou's Celtic played with an intensity and style that left opponents breathless. Joe Hart was immense in goal, keeping 18 clean sheets as the foundation of the league's most formidable defence. The Australian manager's commitment to attacking, possession-based football transformed Celtic into one of the most watchable sides in British football.

Rangers finished a distant second on 72 points, with Antonio Colak's 10 goals and the experience of Alfredo Morelos providing their main attacking outlets. The gap between the Old Firm rivals was the largest in years, highlighting Celtic's sustained excellence throughout the campaign.

Aberdeen finished third on 49 points, while Hearts were close behind in fourth. At the bottom, Dundee United's relegation was confirmed after a difficult season, finishing on just 28 points. Their departure paved the way for Dundee to return to the top flight, setting up a Dundee derby for the following season.`,
  notableMoments: [
    "Celtic won the title by 20 points in Ange Postecoglou's farewell season",
    "Ange Postecoglou departed for Tottenham Hotspur after building a dominant Celtic side",
    "Joe Hart kept 18 clean sheets in a commanding goalkeeping campaign",
    "Kyogo Furuhashi scored 15 goals to win both the golden boot and Player of the Year",
    "Dundee United were relegated, paving the way for a Dundee derby the following season",
  ],
  metaTitle: "Scottish Premiership 2022-23 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2022-23 Scottish Premiership season. Celtic's dominant title win under Ange Postecoglou and full season recap.",
};

export default data;
