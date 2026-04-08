import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "2014-15",
  seasonDisplay: "2014-15",
  champion: "Chelsea",
  championSlug: "chelsea",
  topScorer: "Sergio Aguero",
  topScorerGoals: 26,
  totalGoals: 975,
  standings: [
    { pos: 1, club: "Chelsea", clubSlug: "chelsea", p: 38, w: 26, d: 9, l: 3, gf: 73, ga: 32, gd: 41, pts: 87, zone: "cl" },
    { pos: 2, club: "Manchester City", clubSlug: "manchester-city", p: 38, w: 24, d: 7, l: 7, gf: 83, ga: 38, gd: 45, pts: 79, zone: "cl" },
    { pos: 3, club: "Arsenal", clubSlug: "arsenal", p: 38, w: 22, d: 9, l: 7, gf: 71, ga: 36, gd: 35, pts: 75, zone: "cl" },
    { pos: 4, club: "Manchester United", clubSlug: "manchester-united", p: 38, w: 20, d: 10, l: 8, gf: 62, ga: 37, gd: 25, pts: 70, zone: "cl" },
    { pos: 5, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 38, w: 19, d: 7, l: 12, gf: 58, ga: 53, gd: 5, pts: 64, zone: "el" },
    { pos: 6, club: "Liverpool", clubSlug: "liverpool", p: 38, w: 18, d: 8, l: 12, gf: 52, ga: 48, gd: 4, pts: 62, zone: "el" },
    { pos: 7, club: "Southampton", clubSlug: "southampton", p: 38, w: 18, d: 6, l: 14, gf: 54, ga: 33, gd: 21, pts: 60, zone: "el" },
    { pos: 8, club: "Swansea City", clubSlug: "swansea-city", p: 38, w: 16, d: 8, l: 14, gf: 46, ga: 49, gd: -3, pts: 56 },
    { pos: 9, club: "Stoke City", clubSlug: "stoke-city", p: 38, w: 15, d: 9, l: 14, gf: 48, ga: 45, gd: 3, pts: 54 },
    { pos: 10, club: "Crystal Palace", clubSlug: "crystal-palace", p: 38, w: 13, d: 9, l: 16, gf: 47, ga: 51, gd: -4, pts: 48 },
    { pos: 11, club: "Everton", clubSlug: "everton", p: 38, w: 12, d: 11, l: 15, gf: 48, ga: 50, gd: -2, pts: 47 },
    { pos: 12, club: "West Ham United", clubSlug: "west-ham-united", p: 38, w: 12, d: 11, l: 15, gf: 44, ga: 47, gd: -3, pts: 47 },
    { pos: 13, club: "West Bromwich Albion", clubSlug: "west-bromwich-albion", p: 38, w: 11, d: 11, l: 16, gf: 38, ga: 51, gd: -13, pts: 44 },
    { pos: 14, club: "Leicester City", clubSlug: "leicester-city", p: 38, w: 11, d: 8, l: 19, gf: 46, ga: 55, gd: -9, pts: 41 },
    { pos: 15, club: "Newcastle United", clubSlug: "newcastle-united", p: 38, w: 10, d: 9, l: 19, gf: 40, ga: 63, gd: -23, pts: 39 },
    { pos: 16, club: "Sunderland", clubSlug: "sunderland", p: 38, w: 7, d: 17, l: 14, gf: 31, ga: 53, gd: -22, pts: 38 },
    { pos: 17, club: "Aston Villa", clubSlug: "aston-villa", p: 38, w: 10, d: 8, l: 20, gf: 31, ga: 57, gd: -26, pts: 38 },
    { pos: 18, club: "Hull City", clubSlug: "hull-city", p: 38, w: 8, d: 11, l: 19, gf: 33, ga: 51, gd: -18, pts: 35, zone: "relegation" },
    { pos: 19, club: "Burnley", clubSlug: "burnley", p: 38, w: 7, d: 12, l: 19, gf: 28, ga: 53, gd: -25, pts: 33, zone: "relegation" },
    { pos: 20, club: "Queens Park Rangers", clubSlug: "queens-park-rangers", p: 38, w: 8, d: 6, l: 24, gf: 42, ga: 73, gd: -31, pts: 30, zone: "relegation" },
  ],
  scorers: [
    { name: "Sergio Aguero", playerSlug: "sergio-aguero", club: "Manchester City", clubSlug: "manchester-city", goals: 26, assists: 8 },
    { name: "Harry Kane", playerSlug: "harry-kane", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 21, assists: 5 },
    { name: "Diego Costa", playerSlug: "diego-costa", club: "Chelsea", clubSlug: "chelsea", goals: 20, assists: 3 },
    { name: "Charlie Austin", playerSlug: "charlie-austin", club: "Queens Park Rangers", clubSlug: "queens-park-rangers", goals: 18, assists: 1 },
    { name: "Eden Hazard", playerSlug: "eden-hazard", club: "Chelsea", clubSlug: "chelsea", goals: 14, assists: 9 },
    { name: "Alexis Sanchez", playerSlug: "alexis-sanchez", club: "Arsenal", clubSlug: "arsenal", goals: 16, assists: 8 },
    { name: "Saido Berahino", playerSlug: "saido-berahino", club: "West Bromwich Albion", clubSlug: "west-bromwich-albion", goals: 14, assists: 4 },
    { name: "Graziano Pelle", playerSlug: "graziano-pelle", club: "Southampton", clubSlug: "southampton", goals: 12, assists: 2 },
    { name: "Olivier Giroud", playerSlug: "olivier-giroud", club: "Arsenal", clubSlug: "arsenal", goals: 14, assists: 6 },
    { name: "Wayne Rooney", playerSlug: "wayne-rooney", club: "Manchester United", clubSlug: "manchester-united", goals: 12, assists: 6 },
  ],
  assisters: [
    { name: "Cesc Fabregas", playerSlug: "cesc-fabregas", club: "Chelsea", clubSlug: "chelsea", assists: 18 },
    { name: "David Silva", playerSlug: "david-silva", club: "Manchester City", clubSlug: "manchester-city", assists: 12 },
    { name: "Eden Hazard", playerSlug: "eden-hazard", club: "Chelsea", clubSlug: "chelsea", assists: 9 },
    { name: "Angel Di Maria", playerSlug: "angel-di-maria", club: "Manchester United", clubSlug: "manchester-united", assists: 10 },
    { name: "Alexis Sanchez", playerSlug: "alexis-sanchez", club: "Arsenal", clubSlug: "arsenal", assists: 8 },
  ],
  cleanSheets: [
    { name: "Joe Hart", playerSlug: "joe-hart", club: "Manchester City", clubSlug: "manchester-city", cleanSheets: 14 },
    { name: "Thibaut Courtois", playerSlug: "thibaut-courtois", club: "Chelsea", clubSlug: "chelsea", cleanSheets: 12 },
    { name: "David de Gea", playerSlug: "david-de-gea", club: "Manchester United", clubSlug: "manchester-united", cleanSheets: 12 },
    { name: "Fraser Forster", playerSlug: "fraser-forster", club: "Southampton", clubSlug: "southampton", cleanSheets: 11 },
    { name: "Wojciech Szczesny", playerSlug: "wojciech-szczesny", club: "Arsenal", clubSlug: "arsenal", cleanSheets: 10 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Eden Hazard", playerSlug: "eden-hazard" },
    { title: "Young Player of the Season", winner: "Harry Kane", playerSlug: "harry-kane" },
    { title: "Golden Glove", winner: "Joe Hart", playerSlug: "joe-hart" },
    { title: "Manager of the Season", winner: "Jose Mourinho" },
  ],
  relegated: ["Hull City", "Burnley", "Queens Park Rangers"],
  promoted: ["AFC Bournemouth", "Watford", "Norwich City"],
  narrative: `Chelsea stormed to the 2014-15 Premier League title under Jose Mourinho, finishing on 87 points and clinching the championship with three games to spare after a 1-0 home win over Crystal Palace. It was the club's fourth Premier League title and Mourinho's third in English football, achieved through a season of ruthless efficiency.

Eden Hazard was the driving force behind Chelsea's success. The Belgian winger scored 14 goals and provided 9 assists, earning the Player of the Season award for a campaign of mesmerising creativity. Diego Costa, signed from Atletico Madrid for 32 million pounds, contributed 20 goals and formed a lethal partnership with Hazard and Cesc Fabregas, who registered a remarkable 18 assists.

Sergio Aguero won the Golden Boot with 26 goals despite missing chunks of the season through injury, highlighting Manchester City's reliance on the Argentine as they finished second on 79 points. Arsenal came third under Arsene Wenger, propelled by a strong second half to the season after signing Alexis Sanchez, who made an immediate impact with 16 goals and 8 assists.

Manchester United recovered from the Moyes debacle to finish fourth under Louis van Gaal, securing Champions League football. Harry Kane announced himself on the world stage with 21 goals for Tottenham, earning the Young Player of the Season award in a breakthrough campaign that marked him as one of English football's brightest talents.

Leicester City's survival story was a prelude to the extraordinary events that would follow. After spending much of the season in the relegation zone, they won seven of their last nine matches to finish 14th -- a remarkable escape masterminded by Nigel Pearson. Jamie Vardy scored five goals in that run, giving an early glimpse of his talent.

At the bottom, Hull City, Burnley and Queens Park Rangers were all relegated. QPR suffered a humiliating 6-0 defeat to Manchester City on the final day, while Burnley's resilience was not enough to overcome their lack of squad depth. Joe Hart won a record fourth Golden Glove with 14 clean sheets.`,
  notableMoments: [
    "Chelsea won the title with three games to spare under Jose Mourinho, finishing on 87 points",
    "Eden Hazard was named Player of the Season after a dazzling campaign for Chelsea",
    "Sergio Aguero won the Golden Boot with 26 goals despite injury struggles",
    "Harry Kane burst onto the scene with 21 goals for Tottenham, winning Young Player of the Season",
    "Leicester City staged a miraculous late escape from relegation, winning seven of their last nine matches",
  ],
  metaTitle: "Premier League 2014-15 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2014-15 Premier League season. Final standings, top goalscorers, assists, player awards and a complete season recap.",
};

export default data;
