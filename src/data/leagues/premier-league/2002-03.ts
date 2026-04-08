import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "2002-03",
  seasonDisplay: "2002-03",
  champion: "Manchester United",
  championSlug: "manchester-united",
  topScorer: "Ruud van Nistelrooy",
  topScorerGoals: 25,
  totalGoals: 1000,
  standings: [
    { pos: 1, club: "Manchester United", clubSlug: "manchester-united", p: 38, w: 25, d: 8, l: 5, gf: 74, ga: 34, gd: 40, pts: 83, zone: "cl" },
    { pos: 2, club: "Arsenal", clubSlug: "arsenal", p: 38, w: 23, d: 9, l: 6, gf: 85, ga: 42, gd: 43, pts: 78, zone: "cl" },
    { pos: 3, club: "Newcastle United", clubSlug: "newcastle-united", p: 38, w: 21, d: 6, l: 11, gf: 63, ga: 48, gd: 15, pts: 69, zone: "cl" },
    { pos: 4, club: "Chelsea", clubSlug: "chelsea", p: 38, w: 19, d: 10, l: 9, gf: 68, ga: 38, gd: 30, pts: 67, zone: "cl" },
    { pos: 5, club: "Liverpool", clubSlug: "liverpool", p: 38, w: 18, d: 10, l: 10, gf: 61, ga: 41, gd: 20, pts: 64, zone: "el" },
    { pos: 6, club: "Blackburn Rovers", clubSlug: "blackburn-rovers", p: 38, w: 16, d: 12, l: 10, gf: 52, ga: 43, gd: 9, pts: 60, zone: "el" },
    { pos: 7, club: "Everton", clubSlug: "everton", p: 38, w: 17, d: 8, l: 13, gf: 48, ga: 49, gd: -1, pts: 59 },
    { pos: 8, club: "Southampton", clubSlug: "southampton", p: 38, w: 13, d: 13, l: 12, gf: 43, ga: 46, gd: -3, pts: 52 },
    { pos: 9, club: "Manchester City", clubSlug: "manchester-city", p: 38, w: 15, d: 6, l: 17, gf: 47, ga: 54, gd: -7, pts: 51 },
    { pos: 10, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 38, w: 14, d: 8, l: 16, gf: 51, ga: 62, gd: -11, pts: 50 },
    { pos: 11, club: "Middlesbrough", clubSlug: "middlesbrough", p: 38, w: 13, d: 10, l: 15, gf: 48, ga: 44, gd: 4, pts: 49 },
    { pos: 12, club: "Charlton Athletic", clubSlug: "charlton-athletic", p: 38, w: 14, d: 7, l: 17, gf: 45, ga: 56, gd: -11, pts: 49 },
    { pos: 13, club: "Birmingham City", clubSlug: "birmingham-city", p: 38, w: 13, d: 9, l: 16, gf: 41, ga: 49, gd: -8, pts: 48 },
    { pos: 14, club: "Fulham", clubSlug: "fulham", p: 38, w: 13, d: 9, l: 16, gf: 41, ga: 50, gd: -9, pts: 48 },
    { pos: 15, club: "Leeds United", clubSlug: "leeds-united", p: 38, w: 14, d: 5, l: 19, gf: 58, ga: 57, gd: 1, pts: 47 },
    { pos: 16, club: "Aston Villa", clubSlug: "aston-villa", p: 38, w: 12, d: 9, l: 17, gf: 42, ga: 47, gd: -5, pts: 45 },
    { pos: 17, club: "Bolton Wanderers", clubSlug: "bolton-wanderers", p: 38, w: 10, d: 14, l: 14, gf: 41, ga: 51, gd: -10, pts: 44 },
    { pos: 18, club: "West Ham United", clubSlug: "west-ham-united", p: 38, w: 10, d: 12, l: 16, gf: 42, ga: 59, gd: -17, pts: 42, zone: "relegation" },
    { pos: 19, club: "West Bromwich Albion", clubSlug: "west-bromwich-albion", p: 38, w: 6, d: 8, l: 24, gf: 29, ga: 65, gd: -36, pts: 26, zone: "relegation" },
    { pos: 20, club: "Sunderland", clubSlug: "sunderland", p: 38, w: 4, d: 7, l: 27, gf: 21, ga: 65, gd: -44, pts: 19, zone: "relegation" },
  ],
  scorers: [
    { name: "Ruud van Nistelrooy", playerSlug: "ruud-van-nistelrooy", club: "Manchester United", clubSlug: "manchester-united", goals: 25, assists: 3 },
    { name: "Thierry Henry", playerSlug: "thierry-henry", club: "Arsenal", clubSlug: "arsenal", goals: 24, assists: 20 },
    { name: "James Beattie", playerSlug: "james-beattie", club: "Southampton", clubSlug: "southampton", goals: 23, assists: 2 },
    { name: "Mark Viduka", playerSlug: "mark-viduka", club: "Leeds United", clubSlug: "leeds-united", goals: 20, assists: 3 },
    { name: "Michael Owen", playerSlug: "michael-owen", club: "Liverpool", clubSlug: "liverpool", goals: 19, assists: 3 },
    { name: "Alan Shearer", playerSlug: "alan-shearer", club: "Newcastle United", clubSlug: "newcastle-united", goals: 17, assists: 4 },
    { name: "Gianfranco Zola", playerSlug: "gianfranco-zola", club: "Chelsea", clubSlug: "chelsea", goals: 14, assists: 6 },
    { name: "Nicolas Anelka", playerSlug: "nicolas-anelka", club: "Manchester City", clubSlug: "manchester-city", goals: 14, assists: 3 },
    { name: "Harry Kewell", playerSlug: "harry-kewell", club: "Leeds United", clubSlug: "leeds-united", goals: 14, assists: 4 },
    { name: "Ole Gunnar Solskjaer", playerSlug: "ole-gunnar-solskjaer", club: "Manchester United", clubSlug: "manchester-united", goals: 12, assists: 4 },
  ],
  assisters: [
    { name: "Thierry Henry", playerSlug: "thierry-henry", club: "Arsenal", clubSlug: "arsenal", assists: 20 },
    { name: "Robert Pires", playerSlug: "robert-pires", club: "Arsenal", clubSlug: "arsenal", assists: 9 },
    { name: "Ryan Giggs", playerSlug: "ryan-giggs", club: "Manchester United", clubSlug: "manchester-united", assists: 8 },
    { name: "David Beckham", playerSlug: "david-beckham", club: "Manchester United", clubSlug: "manchester-united", assists: 6 },
    { name: "Damien Duff", playerSlug: "damien-duff", club: "Blackburn Rovers", clubSlug: "blackburn-rovers", assists: 6 },
  ],
  cleanSheets: [
    { name: "Carlo Cudicini", playerSlug: "carlo-cudicini", club: "Chelsea", clubSlug: "chelsea", cleanSheets: 14 },
    { name: "David Seaman", playerSlug: "david-seaman", club: "Arsenal", clubSlug: "arsenal", cleanSheets: 12 },
    { name: "Brad Friedel", playerSlug: "brad-friedel", club: "Blackburn Rovers", clubSlug: "blackburn-rovers", cleanSheets: 12 },
    { name: "Fabien Barthez", playerSlug: "fabien-barthez", club: "Manchester United", clubSlug: "manchester-united", cleanSheets: 11 },
    { name: "Jerzy Dudek", playerSlug: "jerzy-dudek", club: "Liverpool", clubSlug: "liverpool", cleanSheets: 10 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Thierry Henry", playerSlug: "thierry-henry" },
    { title: "Young Player of the Season", winner: "Jermaine Jenas", playerSlug: "jermaine-jenas" },
    { title: "Manager of the Season", winner: "David Moyes" },
  ],
  relegated: ["West Ham United", "West Bromwich Albion", "Sunderland"],
  promoted: ["Portsmouth", "Leicester City", "Wolverhampton Wanderers"],
  narrative: `Manchester United reclaimed the Premier League title in 2002-03, finishing on 83 points to edge out Arsenal by five points. Sir Alex Ferguson's side proved irresistible over the course of the campaign, with Ruud van Nistelrooy's 25 goals spearheading their attack and earning the Dutchman the Golden Boot.

Arsenal pushed hard under Arsene Wenger, with Thierry Henry delivering one of the great individual Premier League seasons -- 24 goals and 20 assists -- but the Gunners could not sustain a title challenge after a wobble in the spring. Robert Pires was once again a creative force, and the Highbury faithful could take heart from a team clearly building towards something special.

Newcastle United finished third under Sir Bobby Robson, enjoying a fine campaign driven by Alan Shearer's goals and the midfield promise of Jermaine Jenas, who claimed the Young Player of the Season award. Chelsea secured fourth place and Champions League qualification, with Gianfranco Zola dazzling in what proved to be his final season at Stamford Bridge.

Liverpool and Blackburn Rovers took the UEFA Cup places, while David Moyes earned Manager of the Season for guiding Everton to seventh -- a remarkable overachievement for a club operating on a shoestring budget. The Toffees' consistency throughout the season was a credit to Moyes' organisational skills and the emergence of a teenage Wayne Rooney.

At the bottom end, Sunderland endured a wretched campaign, collecting just 19 points and scoring only 21 goals -- one of the worst seasons in Premier League history. West Bromwich Albion also went down comfortably, while West Ham United's relegation on 42 points was a painful blow for a club with proud top-flight traditions. The Hammers had fought bravely but ultimately fell short of safety.

James Beattie emerged as one of the season's surprise packages, netting 23 goals for Southampton including a string of spectacular strikes. Mark Viduka was prolific for a Leeds United side already beginning their painful financial decline, while Michael Owen continued to shine for Liverpool despite the team's inconsistency.

The 2002-03 season will be remembered as the campaign where Manchester United reasserted their dominance, Henry set new standards for all-round forward play, and a young Rooney announced himself on the Premier League stage with that unforgettable goal against Arsenal at Goodison Park.`,
  notableMoments: [
    "Manchester United won their eighth Premier League title under Sir Alex Ferguson",
    "Thierry Henry recorded 24 goals and 20 assists in a stunning individual campaign",
    "16-year-old Wayne Rooney scored a wonder goal against Arsenal to announce his arrival",
    "Sunderland managed just 19 points and 21 goals in one of the worst seasons in PL history",
    "David Beckham played his final season at Manchester United before joining Real Madrid",
  ],
  metaTitle: "Premier League 2002-03 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2002-03 Premier League season. Final standings, top goalscorers, assists, player awards and a complete season recap.",
};

export default data;
