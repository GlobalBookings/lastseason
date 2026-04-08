import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "2016-17",
  seasonDisplay: "2016-17",
  champion: "Chelsea",
  championSlug: "chelsea",
  topScorer: "Harry Kane",
  topScorerGoals: 29,
  totalGoals: 1064,
  standings: [
    { pos: 1, club: "Chelsea", clubSlug: "chelsea", p: 38, w: 30, d: 3, l: 5, gf: 85, ga: 33, gd: 52, pts: 93, zone: "cl" },
    { pos: 2, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 38, w: 26, d: 8, l: 4, gf: 86, ga: 26, gd: 60, pts: 86, zone: "cl" },
    { pos: 3, club: "Manchester City", clubSlug: "manchester-city", p: 38, w: 23, d: 9, l: 6, gf: 80, ga: 39, gd: 41, pts: 78, zone: "cl" },
    { pos: 4, club: "Liverpool", clubSlug: "liverpool", p: 38, w: 22, d: 10, l: 6, gf: 78, ga: 42, gd: 36, pts: 76, zone: "cl" },
    { pos: 5, club: "Arsenal", clubSlug: "arsenal", p: 38, w: 23, d: 6, l: 9, gf: 77, ga: 44, gd: 33, pts: 75, zone: "el" },
    { pos: 6, club: "Manchester United", clubSlug: "manchester-united", p: 38, w: 18, d: 15, l: 5, gf: 54, ga: 29, gd: 25, pts: 69, zone: "el" },
    { pos: 7, club: "Everton", clubSlug: "everton", p: 38, w: 17, d: 10, l: 11, gf: 62, ga: 44, gd: 18, pts: 61, zone: "el" },
    { pos: 8, club: "Southampton", clubSlug: "southampton", p: 38, w: 12, d: 10, l: 16, gf: 41, ga: 48, gd: -7, pts: 46 },
    { pos: 9, club: "AFC Bournemouth", clubSlug: "bournemouth", p: 38, w: 12, d: 10, l: 16, gf: 55, ga: 67, gd: -12, pts: 46 },
    { pos: 10, club: "West Bromwich Albion", clubSlug: "west-bromwich-albion", p: 38, w: 12, d: 9, l: 17, gf: 43, ga: 51, gd: -8, pts: 45 },
    { pos: 11, club: "West Ham United", clubSlug: "west-ham-united", p: 38, w: 12, d: 9, l: 17, gf: 47, ga: 64, gd: -17, pts: 45 },
    { pos: 12, club: "Leicester City", clubSlug: "leicester-city", p: 38, w: 12, d: 8, l: 18, gf: 48, ga: 63, gd: -15, pts: 44 },
    { pos: 13, club: "Stoke City", clubSlug: "stoke-city", p: 38, w: 11, d: 11, l: 16, gf: 41, ga: 56, gd: -15, pts: 44 },
    { pos: 14, club: "Crystal Palace", clubSlug: "crystal-palace", p: 38, w: 12, d: 5, l: 21, gf: 50, ga: 63, gd: -13, pts: 41 },
    { pos: 15, club: "Swansea City", clubSlug: "swansea-city", p: 38, w: 12, d: 5, l: 21, gf: 45, ga: 70, gd: -25, pts: 41 },
    { pos: 16, club: "Burnley", clubSlug: "burnley", p: 38, w: 11, d: 7, l: 20, gf: 39, ga: 55, gd: -16, pts: 40 },
    { pos: 17, club: "Watford", clubSlug: "watford", p: 38, w: 11, d: 7, l: 20, gf: 40, ga: 68, gd: -28, pts: 40 },
    { pos: 18, club: "Hull City", clubSlug: "hull-city", p: 38, w: 9, d: 7, l: 22, gf: 37, ga: 80, gd: -43, pts: 34, zone: "relegation" },
    { pos: 19, club: "Middlesbrough", clubSlug: "middlesbrough", p: 38, w: 5, d: 13, l: 20, gf: 27, ga: 53, gd: -26, pts: 28, zone: "relegation" },
    { pos: 20, club: "Sunderland", clubSlug: "sunderland", p: 38, w: 6, d: 6, l: 26, gf: 29, ga: 69, gd: -40, pts: 24, zone: "relegation" },
  ],
  scorers: [
    { name: "Harry Kane", playerSlug: "harry-kane", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 29, assists: 7 },
    { name: "Romelu Lukaku", playerSlug: "romelu-lukaku", club: "Everton", clubSlug: "everton", goals: 25, assists: 6 },
    { name: "Alexis Sanchez", playerSlug: "alexis-sanchez", club: "Arsenal", clubSlug: "arsenal", goals: 24, assists: 10 },
    { name: "Diego Costa", playerSlug: "diego-costa", club: "Chelsea", clubSlug: "chelsea", goals: 20, assists: 6 },
    { name: "Dele Alli", playerSlug: "dele-alli", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 18, assists: 7 },
    { name: "Zlatan Ibrahimovic", playerSlug: "zlatan-ibrahimovic", club: "Manchester United", clubSlug: "manchester-united", goals: 17, assists: 5 },
    { name: "Eden Hazard", playerSlug: "eden-hazard", club: "Chelsea", clubSlug: "chelsea", goals: 16, assists: 5 },
    { name: "Joshua King", playerSlug: "joshua-king", club: "AFC Bournemouth", clubSlug: "bournemouth", goals: 16, assists: 3 },
    { name: "Sergio Aguero", playerSlug: "sergio-aguero", club: "Manchester City", clubSlug: "manchester-city", goals: 20, assists: 2 },
    { name: "Roberto Firmino", playerSlug: "roberto-firmino", club: "Liverpool", clubSlug: "liverpool", goals: 11, assists: 7 },
  ],
  assisters: [
    { name: "Kevin De Bruyne", playerSlug: "kevin-de-bruyne", club: "Manchester City", clubSlug: "manchester-city", assists: 18 },
    { name: "Alexis Sanchez", playerSlug: "alexis-sanchez", club: "Arsenal", clubSlug: "arsenal", assists: 10 },
    { name: "Christian Eriksen", playerSlug: "christian-eriksen", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", assists: 15 },
    { name: "David Silva", playerSlug: "david-silva", club: "Manchester City", clubSlug: "manchester-city", assists: 11 },
    { name: "Harry Kane", playerSlug: "harry-kane", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", assists: 7 },
  ],
  cleanSheets: [
    { name: "Thibaut Courtois", playerSlug: "thibaut-courtois", club: "Chelsea", clubSlug: "chelsea", cleanSheets: 16 },
    { name: "Hugo Lloris", playerSlug: "hugo-lloris", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", cleanSheets: 15 },
    { name: "David de Gea", playerSlug: "david-de-gea", club: "Manchester United", clubSlug: "manchester-united", cleanSheets: 14 },
    { name: "Petr Cech", playerSlug: "petr-cech", club: "Arsenal", clubSlug: "arsenal", cleanSheets: 13 },
    { name: "Tom Heaton", playerSlug: "tom-heaton", club: "Burnley", clubSlug: "burnley", cleanSheets: 10 },
  ],
  awards: [
    { title: "Player of the Season", winner: "N'Golo Kante", playerSlug: "ngolo-kante" },
    { title: "Young Player of the Season", winner: "Dele Alli", playerSlug: "dele-alli" },
    { title: "Golden Glove", winner: "Thibaut Courtois", playerSlug: "thibaut-courtois" },
    { title: "Manager of the Season", winner: "Antonio Conte" },
  ],
  relegated: ["Hull City", "Middlesbrough", "Sunderland"],
  promoted: ["Newcastle United", "Brighton & Hove Albion", "Huddersfield Town"],
  narrative: `Chelsea roared to the 2016-17 Premier League title under Antonio Conte, amassing 93 points -- the fifth-highest total in Premier League history. The Italian manager, in his first season in English football, revolutionised the league with his 3-4-3 formation and galvanised a squad that had finished 10th the previous season into worthy champions.

Chelsea's title charge was built on a remarkable 13-match winning run from early October to late December, a Premier League record at the time. After opening defeats to Liverpool and Arsenal, Conte switched to a three-at-the-back system that transformed the team's fortunes overnight. N'Golo Kante, signed from champions Leicester City, was the engine room of the side and was named Player of the Season for his incredible consistency and tireless work rate.

Tottenham Hotspur finished a strong second on 86 points, their highest Premier League total, with Harry Kane winning a second consecutive Golden Boot with 29 goals. Spurs boasted both the best attack (86 goals) and the best defence (26 conceded) in the league, but Chelsea's early-season winning run proved too great a gap to close. Tottenham's final home match at White Hart Lane, a 2-1 win over Manchester United, was a poignant farewell to their historic ground.

Manchester City finished third under Pep Guardiola in his first season in England, while Liverpool secured fourth place and a return to the Champions League under Jurgen Klopp. Arsenal's fifth-place finish meant they missed out on Champions League football for the first time in 20 years under Arsene Wenger, a watershed moment that intensified fan protests.

Manchester United, managed by Jose Mourinho, finished sixth but won both the EFL Cup and the Europa League, the latter securing an additional Champions League spot. Zlatan Ibrahimovic scored 17 league goals in an impressive debut season.

Defending champions Leicester City endured a miserable title defence, with Claudio Ranieri sacked in February after a run of poor results. They finished 12th, setting a new record for the worst Premier League title defence. Sunderland's decade-long stay in the top flight ended as they finished bottom, while Middlesbrough and Hull City were also relegated.`,
  notableMoments: [
    "Chelsea won the title with 93 points under Antonio Conte's revolutionary 3-4-3 formation",
    "Harry Kane won a second consecutive Golden Boot with 29 goals for Tottenham",
    "N'Golo Kante won Player of the Season after moving from Leicester to Chelsea",
    "Arsenal missed Champions League qualification for the first time in 20 years",
    "Tottenham played their final match at White Hart Lane before moving to Wembley",
  ],
  metaTitle: "Premier League 2016-17 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2016-17 Premier League season. Final standings, top goalscorers, assists, player awards and a complete season recap.",
};

export default data;
