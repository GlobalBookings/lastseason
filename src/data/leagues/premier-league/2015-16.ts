import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "2015-16",
  seasonDisplay: "2015-16",
  champion: "Leicester City",
  championSlug: "leicester-city",
  topScorer: "Harry Kane",
  topScorerGoals: 25,
  totalGoals: 1026,
  standings: [
    { pos: 1, club: "Leicester City", clubSlug: "leicester-city", p: 38, w: 23, d: 12, l: 3, gf: 68, ga: 36, gd: 32, pts: 81, zone: "cl" },
    { pos: 2, club: "Arsenal", clubSlug: "arsenal", p: 38, w: 20, d: 11, l: 7, gf: 65, ga: 36, gd: 29, pts: 71, zone: "cl" },
    { pos: 3, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 38, w: 19, d: 13, l: 6, gf: 69, ga: 35, gd: 34, pts: 70, zone: "cl" },
    { pos: 4, club: "Manchester City", clubSlug: "manchester-city", p: 38, w: 19, d: 9, l: 10, gf: 71, ga: 41, gd: 30, pts: 66, zone: "cl" },
    { pos: 5, club: "Manchester United", clubSlug: "manchester-united", p: 38, w: 19, d: 9, l: 10, gf: 49, ga: 35, gd: 14, pts: 66, zone: "el" },
    { pos: 6, club: "Southampton", clubSlug: "southampton", p: 38, w: 18, d: 9, l: 11, gf: 59, ga: 41, gd: 18, pts: 63, zone: "el" },
    { pos: 7, club: "West Ham United", clubSlug: "west-ham-united", p: 38, w: 16, d: 14, l: 8, gf: 65, ga: 51, gd: 14, pts: 62, zone: "el" },
    { pos: 8, club: "Liverpool", clubSlug: "liverpool", p: 38, w: 16, d: 12, l: 10, gf: 63, ga: 50, gd: 13, pts: 60 },
    { pos: 9, club: "Stoke City", clubSlug: "stoke-city", p: 38, w: 14, d: 9, l: 15, gf: 41, ga: 55, gd: -14, pts: 51 },
    { pos: 10, club: "Chelsea", clubSlug: "chelsea", p: 38, w: 12, d: 14, l: 12, gf: 59, ga: 53, gd: 6, pts: 50 },
    { pos: 11, club: "Everton", clubSlug: "everton", p: 38, w: 11, d: 14, l: 13, gf: 59, ga: 55, gd: 4, pts: 47 },
    { pos: 12, club: "Swansea City", clubSlug: "swansea-city", p: 38, w: 12, d: 11, l: 15, gf: 42, ga: 52, gd: -10, pts: 47 },
    { pos: 13, club: "Watford", clubSlug: "watford", p: 38, w: 12, d: 9, l: 17, gf: 40, ga: 50, gd: -10, pts: 45 },
    { pos: 14, club: "West Bromwich Albion", clubSlug: "west-bromwich-albion", p: 38, w: 10, d: 13, l: 15, gf: 34, ga: 48, gd: -14, pts: 43 },
    { pos: 15, club: "Crystal Palace", clubSlug: "crystal-palace", p: 38, w: 11, d: 9, l: 18, gf: 39, ga: 51, gd: -12, pts: 42 },
    { pos: 16, club: "AFC Bournemouth", clubSlug: "bournemouth", p: 38, w: 11, d: 9, l: 18, gf: 45, ga: 67, gd: -22, pts: 42 },
    { pos: 17, club: "Sunderland", clubSlug: "sunderland", p: 38, w: 9, d: 12, l: 17, gf: 48, ga: 62, gd: -14, pts: 39 },
    { pos: 18, club: "Newcastle United", clubSlug: "newcastle-united", p: 38, w: 9, d: 10, l: 19, gf: 44, ga: 65, gd: -21, pts: 37, zone: "relegation" },
    { pos: 19, club: "Norwich City", clubSlug: "norwich-city", p: 38, w: 9, d: 7, l: 22, gf: 39, ga: 67, gd: -28, pts: 34, zone: "relegation" },
    { pos: 20, club: "Aston Villa", clubSlug: "aston-villa", p: 38, w: 3, d: 8, l: 27, gf: 27, ga: 76, gd: -49, pts: 17, zone: "relegation" },
  ],
  scorers: [
    { name: "Harry Kane", playerSlug: "harry-kane", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 25, assists: 1 },
    { name: "Jamie Vardy", playerSlug: "jamie-vardy", club: "Leicester City", clubSlug: "leicester-city", goals: 24, assists: 6 },
    { name: "Sergio Aguero", playerSlug: "sergio-aguero", club: "Manchester City", clubSlug: "manchester-city", goals: 24, assists: 6 },
    { name: "Romelu Lukaku", playerSlug: "romelu-lukaku", club: "Everton", clubSlug: "everton", goals: 18, assists: 6 },
    { name: "Riyad Mahrez", playerSlug: "riyad-mahrez", club: "Leicester City", clubSlug: "leicester-city", goals: 17, assists: 11 },
    { name: "Odion Ighalo", playerSlug: "odion-ighalo", club: "Watford", clubSlug: "watford", goals: 15, assists: 3 },
    { name: "Olivier Giroud", playerSlug: "olivier-giroud", club: "Arsenal", clubSlug: "arsenal", goals: 16, assists: 4 },
    { name: "Alexis Sanchez", playerSlug: "alexis-sanchez", club: "Arsenal", clubSlug: "arsenal", goals: 13, assists: 5 },
    { name: "Ross Barkley", playerSlug: "ross-barkley", club: "Everton", clubSlug: "everton", goals: 8, assists: 8 },
    { name: "Dele Alli", playerSlug: "dele-alli", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 10, assists: 9 },
  ],
  assisters: [
    { name: "Mesut Ozil", playerSlug: "mesut-ozil", club: "Arsenal", clubSlug: "arsenal", assists: 19 },
    { name: "Riyad Mahrez", playerSlug: "riyad-mahrez", club: "Leicester City", clubSlug: "leicester-city", assists: 11 },
    { name: "Dele Alli", playerSlug: "dele-alli", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", assists: 9 },
    { name: "Christian Eriksen", playerSlug: "christian-eriksen", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", assists: 8 },
    { name: "Dimitri Payet", playerSlug: "dimitri-payet", club: "West Ham United", clubSlug: "west-ham-united", assists: 8 },
  ],
  cleanSheets: [
    { name: "Petr Cech", playerSlug: "petr-cech", club: "Arsenal", clubSlug: "arsenal", cleanSheets: 16 },
    { name: "David de Gea", playerSlug: "david-de-gea", club: "Manchester United", clubSlug: "manchester-united", cleanSheets: 15 },
    { name: "Kasper Schmeichel", playerSlug: "kasper-schmeichel", club: "Leicester City", clubSlug: "leicester-city", cleanSheets: 15 },
    { name: "Hugo Lloris", playerSlug: "hugo-lloris", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", cleanSheets: 13 },
    { name: "Joe Hart", playerSlug: "joe-hart", club: "Manchester City", clubSlug: "manchester-city", cleanSheets: 11 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Jamie Vardy", playerSlug: "jamie-vardy" },
    { title: "Young Player of the Season", winner: "Dele Alli", playerSlug: "dele-alli" },
    { title: "Golden Glove", winner: "Petr Cech", playerSlug: "petr-cech" },
    { title: "Manager of the Season", winner: "Claudio Ranieri" },
  ],
  relegated: ["Newcastle United", "Norwich City", "Aston Villa"],
  promoted: ["Burnley", "Middlesbrough", "Hull City"],
  narrative: `The 2015-16 Premier League season produced arguably the greatest sporting fairy tale of all time. Leicester City, 5000-1 outsiders who had narrowly avoided relegation the previous year, won the league title under Claudio Ranieri, finishing on 81 points with two games to spare. The achievement is widely regarded as one of the most remarkable upsets in the history of sport.

The Foxes' success was built on team spirit, tactical discipline and the electrifying form of Jamie Vardy, who scored in a record 11 consecutive Premier League matches and finished with 24 goals. Riyad Mahrez was equally influential, contributing 17 goals and 11 assists to win the PFA Player of the Year award, while N'Golo Kante's tireless midfield running broke up opposition attacks with remarkable consistency.

Harry Kane won the Golden Boot with 25 goals as Tottenham Hotspur mounted the closest challenge to Leicester, ultimately finishing third on 70 points. Spurs' title hopes effectively ended with a fiery 2-2 draw at Chelsea on 2 May -- the so-called 'Battle of the Bridge' -- which confirmed Leicester as champions. Arsenal finished second on 71 points, their best finish since 2005, but were never truly in the title race.

Defending champions Chelsea endured a disastrous season. Jose Mourinho was sacked in December with the club in 16th place, and interim manager Guus Hiddink could only steer them to a 10th-place finish. It was a historically poor title defence. Manchester United finished fifth under Louis van Gaal, while Liverpool ended the campaign eighth.

Mesut Ozil enjoyed a superb campaign for Arsenal, providing 19 assists to smash the previous Premier League record. West Ham United had a memorable final season at the Boleyn Ground, finishing seventh with a club-record 62 points.

Aston Villa's 24-year stay in the top flight came to a devastating end as they finished bottom with just 17 points and three wins all season. Newcastle United and Norwich City were also relegated, with Sunderland surviving on the final day thanks to a 3-0 win over Everton that sent both their rivals down.`,
  notableMoments: [
    "Leicester City won the Premier League at 5000-1 odds, one of sport's greatest ever shocks",
    "Jamie Vardy set a record by scoring in 11 consecutive Premier League matches",
    "The 'Battle of the Bridge' between Chelsea and Tottenham confirmed Leicester as champions",
    "Jose Mourinho was sacked by Chelsea in December with the club in 16th place",
    "Aston Villa were relegated from the Premier League after 24 consecutive seasons in the top flight",
  ],
  metaTitle: "Premier League 2015-16 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2015-16 Premier League season. Final standings, top goalscorers, assists, player awards and a complete season recap.",
};

export default data;
