import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "2018-19",
  seasonDisplay: "2018-19",
  champion: "Manchester City",
  championSlug: "manchester-city",
  topScorer: "Pierre-Emerick Aubameyang / Sadio Mane / Mohamed Salah",
  topScorerGoals: 22,
  totalGoals: 1072,
  standings: [
    { pos: 1, club: "Manchester City", clubSlug: "manchester-city", p: 38, w: 32, d: 2, l: 4, gf: 95, ga: 23, gd: 72, pts: 98, zone: "cl" },
    { pos: 2, club: "Liverpool", clubSlug: "liverpool", p: 38, w: 30, d: 7, l: 1, gf: 89, ga: 22, gd: 67, pts: 97, zone: "cl" },
    { pos: 3, club: "Chelsea", clubSlug: "chelsea", p: 38, w: 21, d: 9, l: 8, gf: 63, ga: 39, gd: 24, pts: 72, zone: "cl" },
    { pos: 4, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 38, w: 23, d: 2, l: 13, gf: 67, ga: 39, gd: 28, pts: 71, zone: "cl" },
    { pos: 5, club: "Arsenal", clubSlug: "arsenal", p: 38, w: 21, d: 7, l: 10, gf: 73, ga: 51, gd: 22, pts: 70, zone: "el" },
    { pos: 6, club: "Manchester United", clubSlug: "manchester-united", p: 38, w: 19, d: 9, l: 10, gf: 65, ga: 54, gd: 11, pts: 66, zone: "el" },
    { pos: 7, club: "Wolverhampton Wanderers", clubSlug: "wolves", p: 38, w: 16, d: 9, l: 13, gf: 47, ga: 46, gd: 1, pts: 57, zone: "el" },
    { pos: 8, club: "Everton", clubSlug: "everton", p: 38, w: 15, d: 9, l: 14, gf: 54, ga: 46, gd: 8, pts: 54 },
    { pos: 9, club: "Leicester City", clubSlug: "leicester-city", p: 38, w: 15, d: 7, l: 16, gf: 51, ga: 48, gd: 3, pts: 52 },
    { pos: 10, club: "West Ham United", clubSlug: "west-ham-united", p: 38, w: 15, d: 7, l: 16, gf: 52, ga: 55, gd: -3, pts: 52 },
    { pos: 11, club: "Watford", clubSlug: "watford", p: 38, w: 14, d: 8, l: 16, gf: 52, ga: 59, gd: -7, pts: 50 },
    { pos: 12, club: "Crystal Palace", clubSlug: "crystal-palace", p: 38, w: 14, d: 7, l: 17, gf: 51, ga: 53, gd: -2, pts: 49 },
    { pos: 13, club: "Newcastle United", clubSlug: "newcastle-united", p: 38, w: 12, d: 9, l: 17, gf: 42, ga: 48, gd: -6, pts: 45 },
    { pos: 14, club: "AFC Bournemouth", clubSlug: "bournemouth", p: 38, w: 13, d: 6, l: 19, gf: 56, ga: 70, gd: -14, pts: 45 },
    { pos: 15, club: "Burnley", clubSlug: "burnley", p: 38, w: 11, d: 7, l: 20, gf: 45, ga: 68, gd: -23, pts: 40 },
    { pos: 16, club: "Southampton", clubSlug: "southampton", p: 38, w: 9, d: 12, l: 17, gf: 45, ga: 65, gd: -20, pts: 39 },
    { pos: 17, club: "Brighton & Hove Albion", clubSlug: "brighton", p: 38, w: 9, d: 9, l: 20, gf: 35, ga: 60, gd: -25, pts: 36 },
    { pos: 18, club: "Cardiff City", clubSlug: "cardiff-city", p: 38, w: 10, d: 4, l: 24, gf: 34, ga: 69, gd: -35, pts: 34, zone: "relegation" },
    { pos: 19, club: "Fulham", clubSlug: "fulham", p: 38, w: 7, d: 5, l: 26, gf: 34, ga: 81, gd: -47, pts: 26, zone: "relegation" },
    { pos: 20, club: "Huddersfield Town", clubSlug: "huddersfield-town", p: 38, w: 3, d: 7, l: 28, gf: 22, ga: 76, gd: -54, pts: 16, zone: "relegation" },
  ],
  scorers: [
    { name: "Pierre-Emerick Aubameyang", playerSlug: "pierre-emerick-aubameyang", club: "Arsenal", clubSlug: "arsenal", goals: 22, assists: 5 },
    { name: "Sadio Mane", playerSlug: "sadio-mane", club: "Liverpool", clubSlug: "liverpool", goals: 22, assists: 1 },
    { name: "Mohamed Salah", playerSlug: "mohamed-salah", club: "Liverpool", clubSlug: "liverpool", goals: 22, assists: 8 },
    { name: "Sergio Aguero", playerSlug: "sergio-aguero", club: "Manchester City", clubSlug: "manchester-city", goals: 21, assists: 8 },
    { name: "Jamie Vardy", playerSlug: "jamie-vardy", club: "Leicester City", clubSlug: "leicester-city", goals: 18, assists: 4 },
    { name: "Harry Kane", playerSlug: "harry-kane", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 17, assists: 4 },
    { name: "Raheem Sterling", playerSlug: "raheem-sterling", club: "Manchester City", clubSlug: "manchester-city", goals: 17, assists: 10 },
    { name: "Eden Hazard", playerSlug: "eden-hazard", club: "Chelsea", clubSlug: "chelsea", goals: 16, assists: 15 },
    { name: "Callum Wilson", playerSlug: "callum-wilson", club: "AFC Bournemouth", clubSlug: "bournemouth", goals: 14, assists: 9 },
    { name: "Raul Jimenez", playerSlug: "raul-jimenez", club: "Wolverhampton Wanderers", clubSlug: "wolves", goals: 13, assists: 7 },
  ],
  assisters: [
    { name: "Eden Hazard", playerSlug: "eden-hazard", club: "Chelsea", clubSlug: "chelsea", assists: 15 },
    { name: "Ryan Fraser", playerSlug: "ryan-fraser", club: "AFC Bournemouth", clubSlug: "bournemouth", assists: 14 },
    { name: "Trent Alexander-Arnold", playerSlug: "trent-alexander-arnold", club: "Liverpool", clubSlug: "liverpool", assists: 12 },
    { name: "Christian Eriksen", playerSlug: "christian-eriksen", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", assists: 12 },
    { name: "Andrew Robertson", playerSlug: "andrew-robertson", club: "Liverpool", clubSlug: "liverpool", assists: 11 },
  ],
  cleanSheets: [
    { name: "Alisson", playerSlug: "alisson", club: "Liverpool", clubSlug: "liverpool", cleanSheets: 21 },
    { name: "Ederson", playerSlug: "ederson", club: "Manchester City", clubSlug: "manchester-city", cleanSheets: 20 },
    { name: "Kepa Arrizabalaga", playerSlug: "kepa-arrizabalaga", club: "Chelsea", clubSlug: "chelsea", cleanSheets: 14 },
    { name: "Jordan Pickford", playerSlug: "jordan-pickford", club: "Everton", clubSlug: "everton", cleanSheets: 14 },
    { name: "Hugo Lloris", playerSlug: "hugo-lloris", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", cleanSheets: 12 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Virgil van Dijk", playerSlug: "virgil-van-dijk" },
    { title: "Young Player of the Season", winner: "Raheem Sterling", playerSlug: "raheem-sterling" },
    { title: "Golden Glove", winner: "Alisson", playerSlug: "alisson" },
    { title: "Manager of the Season", winner: "Pep Guardiola" },
  ],
  relegated: ["Cardiff City", "Fulham", "Huddersfield Town"],
  promoted: ["Norwich City", "Sheffield United", "Aston Villa"],
  narrative: `The 2018-19 Premier League season produced one of the greatest title races in the history of English football. Manchester City retained their crown with 98 points, but were pushed to the very last day by a Liverpool side who amassed 97 points -- the highest total ever recorded by a team finishing second in the English top flight.

Liverpool led Manchester City by seven points at the turn of the year and lost just a single league game all season -- a 2-1 defeat at the Etihad on 3 January that proved to be the pivotal moment. Jurgen Klopp's side were relentless, winning 30 of their 38 matches, but City's extraordinary consistency in the run-in, winning their final 14 league games in succession, proved decisive.

The Golden Boot was shared three ways for the first time in Premier League history, with Pierre-Emerick Aubameyang of Arsenal and Liverpool duo Mohamed Salah and Sadio Mane all finishing on 22 goals. Virgil van Dijk's commanding performances at the heart of Liverpool's defence earned him the Player of the Season award, as the Reds conceded just 22 goals -- the best defensive record in the league.

Chelsea finished third under Maurizio Sarri, while Tottenham claimed fourth despite a challenging campaign that included the protracted move to their new stadium. Both clubs would go on to contest the Champions League final. Arsenal finished fifth after a late-season collapse, blowing a top-four position with just six games remaining.

Jose Mourinho's troubled spell at Manchester United ended in December after a dismal start to the season. Ole Gunnar Solskjaer's appointment as caretaker brought an initial bounce, including a famous Champions League comeback against Paris Saint-Germain, but results tailed off and United eventually finished sixth.

Newly promoted Wolverhampton Wanderers were the story of the mid-table, finishing seventh in their highest league position since 1980. Under Nuno Espirito Santo, Wolves took points off every team in the division except Liverpool and Huddersfield, qualifying for the Europa League in the process.

At the bottom, Huddersfield Town were relegated before the end of March with just 16 points -- one of the poorest seasons in Premier League history. Fulham and Cardiff City joined them, with all three promoted clubs going back down after a single season.

A campaign defined by the breathtaking title duel between City and Liverpool, 2018-19 set an almost impossibly high standard for competitiveness at the top of English football.`,
  notableMoments: [
    "Manchester City won the title with 98 points, pipping Liverpool on 97 in the closest ever title race",
    "The Golden Boot was shared three ways between Aubameyang, Mane and Salah with 22 goals each",
    "Liverpool lost just one league game all season but still finished second",
    "Virgil van Dijk won Player of the Season, anchoring the league's best defence",
    "Huddersfield Town were relegated with six games remaining, finishing on just 16 points",
  ],
  metaTitle: "Premier League 2018-19 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2018-19 Premier League season. The closest ever title race between Man City and Liverpool, final standings, top goalscorers and complete season recap.",
};

export default data;
