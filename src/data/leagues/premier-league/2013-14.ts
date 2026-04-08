import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "2013-14",
  seasonDisplay: "2013-14",
  champion: "Manchester City",
  championSlug: "manchester-city",
  topScorer: "Luis Suarez",
  topScorerGoals: 31,
  totalGoals: 1052,
  standings: [
    { pos: 1, club: "Manchester City", clubSlug: "manchester-city", p: 38, w: 27, d: 5, l: 6, gf: 102, ga: 37, gd: 65, pts: 86, zone: "cl" },
    { pos: 2, club: "Liverpool", clubSlug: "liverpool", p: 38, w: 26, d: 6, l: 6, gf: 101, ga: 50, gd: 51, pts: 84, zone: "cl" },
    { pos: 3, club: "Chelsea", clubSlug: "chelsea", p: 38, w: 25, d: 7, l: 6, gf: 71, ga: 27, gd: 44, pts: 82, zone: "cl" },
    { pos: 4, club: "Arsenal", clubSlug: "arsenal", p: 38, w: 24, d: 7, l: 7, gf: 68, ga: 41, gd: 27, pts: 79, zone: "cl" },
    { pos: 5, club: "Everton", clubSlug: "everton", p: 38, w: 21, d: 9, l: 8, gf: 61, ga: 39, gd: 22, pts: 72, zone: "el" },
    { pos: 6, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 38, w: 21, d: 6, l: 11, gf: 55, ga: 51, gd: 4, pts: 69, zone: "el" },
    { pos: 7, club: "Manchester United", clubSlug: "manchester-united", p: 38, w: 19, d: 7, l: 12, gf: 64, ga: 43, gd: 21, pts: 64 },
    { pos: 8, club: "Southampton", clubSlug: "southampton", p: 38, w: 15, d: 11, l: 12, gf: 54, ga: 46, gd: 8, pts: 56 },
    { pos: 9, club: "Stoke City", clubSlug: "stoke-city", p: 38, w: 13, d: 11, l: 14, gf: 45, ga: 52, gd: -7, pts: 50 },
    { pos: 10, club: "Newcastle United", clubSlug: "newcastle-united", p: 38, w: 15, d: 4, l: 19, gf: 43, ga: 59, gd: -16, pts: 49 },
    { pos: 11, club: "Crystal Palace", clubSlug: "crystal-palace", p: 38, w: 13, d: 6, l: 19, gf: 33, ga: 48, gd: -15, pts: 45 },
    { pos: 12, club: "Swansea City", clubSlug: "swansea-city", p: 38, w: 11, d: 9, l: 18, gf: 54, ga: 54, gd: 0, pts: 42 },
    { pos: 13, club: "West Ham United", clubSlug: "west-ham-united", p: 38, w: 11, d: 7, l: 20, gf: 40, ga: 51, gd: -11, pts: 40 },
    { pos: 14, club: "Sunderland", clubSlug: "sunderland", p: 38, w: 10, d: 8, l: 20, gf: 41, ga: 60, gd: -19, pts: 38 },
    { pos: 15, club: "Aston Villa", clubSlug: "aston-villa", p: 38, w: 10, d: 8, l: 20, gf: 39, ga: 61, gd: -22, pts: 38 },
    { pos: 16, club: "Hull City", clubSlug: "hull-city", p: 38, w: 10, d: 7, l: 21, gf: 38, ga: 53, gd: -15, pts: 37 },
    { pos: 17, club: "West Bromwich Albion", clubSlug: "west-bromwich-albion", p: 38, w: 7, d: 15, l: 16, gf: 43, ga: 59, gd: -16, pts: 36 },
    { pos: 18, club: "Norwich City", clubSlug: "norwich-city", p: 38, w: 8, d: 9, l: 21, gf: 28, ga: 62, gd: -34, pts: 33, zone: "relegation" },
    { pos: 19, club: "Fulham", clubSlug: "fulham", p: 38, w: 9, d: 5, l: 24, gf: 40, ga: 85, gd: -45, pts: 32, zone: "relegation" },
    { pos: 20, club: "Cardiff City", clubSlug: "cardiff-city", p: 38, w: 7, d: 9, l: 22, gf: 32, ga: 74, gd: -42, pts: 30, zone: "relegation" },
  ],
  scorers: [
    { name: "Luis Suarez", playerSlug: "luis-suarez", club: "Liverpool", clubSlug: "liverpool", goals: 31, assists: 12 },
    { name: "Daniel Sturridge", playerSlug: "daniel-sturridge", club: "Liverpool", clubSlug: "liverpool", goals: 21, assists: 7 },
    { name: "Yaya Toure", playerSlug: "yaya-toure", club: "Manchester City", clubSlug: "manchester-city", goals: 20, assists: 9 },
    { name: "Wayne Rooney", playerSlug: "wayne-rooney", club: "Manchester United", clubSlug: "manchester-united", goals: 17, assists: 10 },
    { name: "Sergio Aguero", playerSlug: "sergio-aguero", club: "Manchester City", clubSlug: "manchester-city", goals: 17, assists: 8 },
    { name: "Eden Hazard", playerSlug: "eden-hazard", club: "Chelsea", clubSlug: "chelsea", goals: 14, assists: 7 },
    { name: "Jay Rodriguez", playerSlug: "jay-rodriguez", club: "Southampton", clubSlug: "southampton", goals: 15, assists: 5 },
    { name: "Edin Dzeko", playerSlug: "edin-dzeko", club: "Manchester City", clubSlug: "manchester-city", goals: 16, assists: 4 },
    { name: "Olivier Giroud", playerSlug: "olivier-giroud", club: "Arsenal", clubSlug: "arsenal", goals: 16, assists: 8 },
    { name: "Romelu Lukaku", playerSlug: "romelu-lukaku", club: "Everton", clubSlug: "everton", goals: 15, assists: 5 },
  ],
  assisters: [
    { name: "Steven Gerrard", playerSlug: "steven-gerrard", club: "Liverpool", clubSlug: "liverpool", assists: 13 },
    { name: "Luis Suarez", playerSlug: "luis-suarez", club: "Liverpool", clubSlug: "liverpool", assists: 12 },
    { name: "Eden Hazard", playerSlug: "eden-hazard", club: "Chelsea", clubSlug: "chelsea", assists: 7 },
    { name: "Wayne Rooney", playerSlug: "wayne-rooney", club: "Manchester United", clubSlug: "manchester-united", assists: 10 },
    { name: "David Silva", playerSlug: "david-silva", club: "Manchester City", clubSlug: "manchester-city", assists: 9 },
  ],
  cleanSheets: [
    { name: "Petr Cech", playerSlug: "petr-cech", club: "Chelsea", clubSlug: "chelsea", cleanSheets: 16 },
    { name: "Wojciech Szczesny", playerSlug: "wojciech-szczesny", club: "Arsenal", clubSlug: "arsenal", cleanSheets: 16 },
    { name: "Joe Hart", playerSlug: "joe-hart", club: "Manchester City", clubSlug: "manchester-city", cleanSheets: 12 },
    { name: "David Marshall", playerSlug: "david-marshall", club: "Cardiff City", clubSlug: "cardiff-city", cleanSheets: 10 },
    { name: "Simon Mignolet", playerSlug: "simon-mignolet", club: "Liverpool", clubSlug: "liverpool", cleanSheets: 10 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Luis Suarez", playerSlug: "luis-suarez" },
    { title: "Young Player of the Season", winner: "Eden Hazard", playerSlug: "eden-hazard" },
    { title: "Golden Glove", winner: "Petr Cech", playerSlug: "petr-cech" },
    { title: "Manager of the Season", winner: "Tony Pulis" },
  ],
  relegated: ["Norwich City", "Fulham", "Cardiff City"],
  promoted: ["Leicester City", "Burnley", "Queens Park Rangers"],
  narrative: `Manchester City won the Premier League for the second time in three seasons in 2013-14, finishing on 86 points to pip Liverpool in one of the most dramatic title races in the competition's history. Manuel Pellegrini's side sealed the championship with a 2-0 victory over West Ham United on the final day, having scored 102 goals across the campaign.

The season will forever be remembered for Liverpool's near-miss. Under Brendan Rodgers, the Reds mounted an extraordinary challenge powered by the devastating partnership of Luis Suarez and Daniel Sturridge, who combined for 52 league goals. Suarez was sensational, scoring 31 goals to claim the Golden Boot and the Player of the Season award, producing one of the finest individual campaigns in Premier League history.

Liverpool's title challenge unravelled in the final weeks. Steven Gerrard's infamous slip against Chelsea at Anfield in late April allowed Demba Ba to score and Chelsea won 2-0, handing the initiative to Manchester City. A subsequent 3-3 draw with Crystal Palace from 3-0 up compounded the agony and effectively ended their hopes.

Chelsea under Jose Mourinho finished third with 82 points and the league's best defence, conceding just 27 goals. Arsenal led the table for the longest period of any team but eventually finished fourth. Manchester United, in their first season under David Moyes after Sir Alex Ferguson's retirement, endured a dismal campaign and finished seventh -- their worst Premier League finish at the time. Moyes was sacked in April after just 10 months in charge.

Tony Pulis earned the Manager of the Season award for his remarkable work at Crystal Palace, steering them from bottom of the table at Christmas to an 11th-place finish. Sunderland also pulled off a great escape, having been bottom in April before winning four of their final five matches.

At the bottom, Norwich City, Fulham and Cardiff City were all relegated. Fulham conceded 85 goals, the most in the division, while Cardiff's single season in the top flight ended in disappointment.`,
  notableMoments: [
    "Manchester City scored 102 goals to win the title on the final day with 86 points",
    "Luis Suarez scored 31 goals for Liverpool in one of the greatest individual seasons",
    "Steven Gerrard's slip against Chelsea effectively ended Liverpool's title challenge",
    "David Moyes was sacked as Manchester United manager after a dismal title defence",
    "Tony Pulis saved Crystal Palace from certain relegation, winning Manager of the Season",
  ],
  metaTitle: "Premier League 2013-14 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2013-14 Premier League season. Final standings, top goalscorers, assists, player awards and a complete season recap.",
};

export default data;
