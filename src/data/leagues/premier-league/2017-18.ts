import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "2017-18",
  seasonDisplay: "2017-18",
  champion: "Manchester City",
  championSlug: "manchester-city",
  topScorer: "Mohamed Salah",
  topScorerGoals: 32,
  totalGoals: 1018,
  standings: [
    { pos: 1, club: "Manchester City", clubSlug: "manchester-city", p: 38, w: 32, d: 4, l: 2, gf: 106, ga: 27, gd: 79, pts: 100, zone: "cl" },
    { pos: 2, club: "Manchester United", clubSlug: "manchester-united", p: 38, w: 25, d: 6, l: 7, gf: 68, ga: 28, gd: 40, pts: 81, zone: "cl" },
    { pos: 3, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 38, w: 23, d: 8, l: 7, gf: 74, ga: 36, gd: 38, pts: 77, zone: "cl" },
    { pos: 4, club: "Liverpool", clubSlug: "liverpool", p: 38, w: 21, d: 12, l: 5, gf: 84, ga: 38, gd: 46, pts: 75, zone: "cl" },
    { pos: 5, club: "Chelsea", clubSlug: "chelsea", p: 38, w: 21, d: 7, l: 10, gf: 62, ga: 38, gd: 24, pts: 70, zone: "el" },
    { pos: 6, club: "Arsenal", clubSlug: "arsenal", p: 38, w: 19, d: 6, l: 13, gf: 74, ga: 51, gd: 23, pts: 63, zone: "el" },
    { pos: 7, club: "Burnley", clubSlug: "burnley", p: 38, w: 14, d: 12, l: 12, gf: 36, ga: 39, gd: -3, pts: 54 },
    { pos: 8, club: "Everton", clubSlug: "everton", p: 38, w: 13, d: 10, l: 15, gf: 44, ga: 58, gd: -14, pts: 49 },
    { pos: 9, club: "Leicester City", clubSlug: "leicester-city", p: 38, w: 12, d: 11, l: 15, gf: 56, ga: 60, gd: -4, pts: 47 },
    { pos: 10, club: "Newcastle United", clubSlug: "newcastle-united", p: 38, w: 12, d: 8, l: 18, gf: 39, ga: 47, gd: -8, pts: 44 },
    { pos: 11, club: "Crystal Palace", clubSlug: "crystal-palace", p: 38, w: 11, d: 11, l: 16, gf: 45, ga: 55, gd: -10, pts: 44 },
    { pos: 12, club: "AFC Bournemouth", clubSlug: "bournemouth", p: 38, w: 11, d: 11, l: 16, gf: 45, ga: 61, gd: -16, pts: 44 },
    { pos: 13, club: "West Ham United", clubSlug: "west-ham-united", p: 38, w: 10, d: 12, l: 16, gf: 48, ga: 68, gd: -20, pts: 42 },
    { pos: 14, club: "Watford", clubSlug: "watford", p: 38, w: 11, d: 8, l: 19, gf: 44, ga: 64, gd: -20, pts: 41 },
    { pos: 15, club: "Brighton & Hove Albion", clubSlug: "brighton", p: 38, w: 9, d: 13, l: 16, gf: 34, ga: 54, gd: -20, pts: 40 },
    { pos: 16, club: "Huddersfield Town", clubSlug: "huddersfield-town", p: 38, w: 9, d: 10, l: 19, gf: 28, ga: 58, gd: -30, pts: 37 },
    { pos: 17, club: "Southampton", clubSlug: "southampton", p: 38, w: 7, d: 15, l: 16, gf: 37, ga: 56, gd: -19, pts: 36 },
    { pos: 18, club: "Swansea City", clubSlug: "swansea-city", p: 38, w: 8, d: 9, l: 21, gf: 28, ga: 56, gd: -28, pts: 33, zone: "relegation" },
    { pos: 19, club: "Stoke City", clubSlug: "stoke-city", p: 38, w: 7, d: 12, l: 19, gf: 35, ga: 68, gd: -33, pts: 33, zone: "relegation" },
    { pos: 20, club: "West Bromwich Albion", clubSlug: "west-bromwich-albion", p: 38, w: 6, d: 13, l: 19, gf: 31, ga: 56, gd: -25, pts: 31, zone: "relegation" },
  ],
  scorers: [
    { name: "Mohamed Salah", playerSlug: "mohamed-salah", club: "Liverpool", clubSlug: "liverpool", goals: 32, assists: 10 },
    { name: "Harry Kane", playerSlug: "harry-kane", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 30, assists: 2 },
    { name: "Sergio Aguero", playerSlug: "sergio-aguero", club: "Manchester City", clubSlug: "manchester-city", goals: 21, assists: 7 },
    { name: "Jamie Vardy", playerSlug: "jamie-vardy", club: "Leicester City", clubSlug: "leicester-city", goals: 20, assists: 4 },
    { name: "Raheem Sterling", playerSlug: "raheem-sterling", club: "Manchester City", clubSlug: "manchester-city", goals: 18, assists: 11 },
    { name: "Romelu Lukaku", playerSlug: "romelu-lukaku", club: "Manchester United", clubSlug: "manchester-united", goals: 16, assists: 7 },
    { name: "Roberto Firmino", playerSlug: "roberto-firmino", club: "Liverpool", clubSlug: "liverpool", goals: 15, assists: 7 },
    { name: "Alexandre Lacazette", playerSlug: "alexandre-lacazette", club: "Arsenal", clubSlug: "arsenal", goals: 14, assists: 4 },
    { name: "Gabriel Jesus", playerSlug: "gabriel-jesus", club: "Manchester City", clubSlug: "manchester-city", goals: 13, assists: 3 },
    { name: "Eden Hazard", playerSlug: "eden-hazard", club: "Chelsea", clubSlug: "chelsea", goals: 12, assists: 4 },
  ],
  assisters: [
    { name: "Kevin De Bruyne", playerSlug: "kevin-de-bruyne", club: "Manchester City", clubSlug: "manchester-city", assists: 16 },
    { name: "Leroy Sane", playerSlug: "leroy-sane", club: "Manchester City", clubSlug: "manchester-city", assists: 15 },
    { name: "David Silva", playerSlug: "david-silva", club: "Manchester City", clubSlug: "manchester-city", assists: 11 },
    { name: "Raheem Sterling", playerSlug: "raheem-sterling", club: "Manchester City", clubSlug: "manchester-city", assists: 11 },
    { name: "Christian Eriksen", playerSlug: "christian-eriksen", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", assists: 10 },
  ],
  cleanSheets: [
    { name: "David de Gea", playerSlug: "david-de-gea", club: "Manchester United", clubSlug: "manchester-united", cleanSheets: 18 },
    { name: "Ederson", playerSlug: "ederson", club: "Manchester City", clubSlug: "manchester-city", cleanSheets: 16 },
    { name: "Thibaut Courtois", playerSlug: "thibaut-courtois", club: "Chelsea", clubSlug: "chelsea", cleanSheets: 15 },
    { name: "Hugo Lloris", playerSlug: "hugo-lloris", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", cleanSheets: 15 },
    { name: "Nick Pope", playerSlug: "nick-pope", club: "Burnley", clubSlug: "burnley", cleanSheets: 11 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Mohamed Salah", playerSlug: "mohamed-salah" },
    { title: "Young Player of the Season", winner: "Leroy Sane", playerSlug: "leroy-sane" },
    { title: "Golden Glove", winner: "David de Gea", playerSlug: "david-de-gea" },
    { title: "Manager of the Season", winner: "Pep Guardiola" },
  ],
  relegated: ["Swansea City", "Stoke City", "West Bromwich Albion"],
  promoted: ["Wolverhampton Wanderers", "Cardiff City", "Fulham"],
  narrative: `Manchester City rewrote the record books in 2017-18, becoming the first team in English top-flight history to reach 100 points in a single season. Pep Guardiola's "Centurions" claimed the Premier League title with five games to spare, eventually finishing 19 points clear of second-placed Manchester United -- the largest winning margin the division had ever seen.

The numbers were staggering across the board. City scored 106 goals, another Premier League record, and won 32 of their 38 matches. An 18-game winning run between late August and late December left the rest of the league trailing in their wake. They conceded just 27 goals all season, posting a goal difference of plus 79 that also set a new benchmark.

Mohamed Salah's debut season at Liverpool was the individual story of the campaign. The Egyptian forward netted 32 goals to claim the Golden Boot and break the record for the most goals in a 38-game Premier League season, surpassing the 31 shared by Alan Shearer, Cristiano Ronaldo and Luis Suarez. Salah was the unanimous choice for PFA Player of the Year and the Premier League's own Player of the Season award.

Manchester United secured second place on 81 points, their best finish since Sir Alex Ferguson's retirement, while Tottenham Hotspur came third under Mauricio Pochettino. Liverpool finished fourth, qualifying for the Champions League as Jurgen Klopp's side combined a thrilling attack with an inconsistent defence that would be addressed in subsequent windows.

Chelsea endured a disappointing title defence under Antonio Conte, slipping to fifth, while Arsenal finished sixth in Arsene Wenger's final season at the club. Wenger's 22-year reign ended in emotional scenes as the Gunners beat Burnley 5-0 at the Emirates in his last home match. Burnley themselves enjoyed a memorable season, finishing seventh and qualifying for European competition for the first time in 51 years.

At the other end of the table, Swansea City, Stoke City and West Bromwich Albion were all relegated. West Brom endured a miserable campaign that included a record 20-game winless run, while all three promoted clubs -- Newcastle, Brighton and Huddersfield -- survived, a feat not achieved since 2011-12.

A season utterly dominated by Manchester City, illuminated by Salah's brilliance and marked by Wenger's farewell, 2017-18 set new standards for Premier League excellence.`,
  notableMoments: [
    "Manchester City became the first team to reach 100 points in a Premier League season",
    "Mohamed Salah scored 32 goals, breaking the record for a 38-game season",
    "Arsene Wenger managed his final season at Arsenal after 22 years in charge",
    "Manchester City scored 106 league goals, a new Premier League record",
    "Burnley finished seventh and qualified for European competition for the first time in 51 years",
  ],
  metaTitle: "Premier League 2017-18 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2017-18 Premier League season. Manchester City's record-breaking Centurions campaign, final standings, top goalscorers and complete season recap.",
};

export default data;
