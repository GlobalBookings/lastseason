import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "2001-02",
  seasonDisplay: "2001-02",
  champion: "Arsenal",
  championSlug: "arsenal",
  topScorer: "Thierry Henry",
  topScorerGoals: 24,
  totalGoals: 1001,
  standings: [
    { pos: 1, club: "Arsenal", clubSlug: "arsenal", p: 38, w: 26, d: 9, l: 3, gf: 79, ga: 36, gd: 43, pts: 87, zone: "cl" },
    { pos: 2, club: "Liverpool", clubSlug: "liverpool", p: 38, w: 24, d: 8, l: 6, gf: 67, ga: 30, gd: 37, pts: 80, zone: "cl" },
    { pos: 3, club: "Manchester United", clubSlug: "manchester-united", p: 38, w: 24, d: 5, l: 9, gf: 87, ga: 45, gd: 42, pts: 77, zone: "cl" },
    { pos: 4, club: "Newcastle United", clubSlug: "newcastle-united", p: 38, w: 21, d: 8, l: 9, gf: 74, ga: 52, gd: 22, pts: 71, zone: "cl" },
    { pos: 5, club: "Leeds United", clubSlug: "leeds-united", p: 38, w: 18, d: 12, l: 8, gf: 53, ga: 37, gd: 16, pts: 66, zone: "el" },
    { pos: 6, club: "Chelsea", clubSlug: "chelsea", p: 38, w: 17, d: 13, l: 8, gf: 66, ga: 38, gd: 28, pts: 64, zone: "el" },
    { pos: 7, club: "West Ham United", clubSlug: "west-ham-united", p: 38, w: 15, d: 8, l: 15, gf: 48, ga: 57, gd: -9, pts: 53 },
    { pos: 8, club: "Aston Villa", clubSlug: "aston-villa", p: 38, w: 12, d: 14, l: 12, gf: 46, ga: 47, gd: -1, pts: 50 },
    { pos: 9, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 38, w: 14, d: 8, l: 16, gf: 49, ga: 53, gd: -4, pts: 50 },
    { pos: 10, club: "Blackburn Rovers", clubSlug: "blackburn-rovers", p: 38, w: 12, d: 10, l: 16, gf: 55, ga: 51, gd: 4, pts: 46 },
    { pos: 11, club: "Southampton", clubSlug: "southampton", p: 38, w: 12, d: 9, l: 17, gf: 46, ga: 54, gd: -8, pts: 45 },
    { pos: 12, club: "Middlesbrough", clubSlug: "middlesbrough", p: 38, w: 12, d: 9, l: 17, gf: 35, ga: 47, gd: -12, pts: 45 },
    { pos: 13, club: "Fulham", clubSlug: "fulham", p: 38, w: 10, d: 14, l: 14, gf: 36, ga: 44, gd: -8, pts: 44 },
    { pos: 14, club: "Charlton Athletic", clubSlug: "charlton-athletic", p: 38, w: 10, d: 14, l: 14, gf: 38, ga: 49, gd: -11, pts: 44 },
    { pos: 15, club: "Everton", clubSlug: "everton", p: 38, w: 11, d: 10, l: 17, gf: 45, ga: 57, gd: -12, pts: 43 },
    { pos: 16, club: "Bolton Wanderers", clubSlug: "bolton-wanderers", p: 38, w: 9, d: 13, l: 16, gf: 44, ga: 62, gd: -18, pts: 40 },
    { pos: 17, club: "Sunderland", clubSlug: "sunderland", p: 38, w: 10, d: 10, l: 18, gf: 29, ga: 51, gd: -22, pts: 40 },
    { pos: 18, club: "Ipswich Town", clubSlug: "ipswich-town", p: 38, w: 9, d: 9, l: 20, gf: 41, ga: 64, gd: -23, pts: 36, zone: "relegation" },
    { pos: 19, club: "Derby County", clubSlug: "derby-county", p: 38, w: 8, d: 6, l: 24, gf: 33, ga: 63, gd: -30, pts: 30, zone: "relegation" },
    { pos: 20, club: "Leicester City", clubSlug: "leicester-city", p: 38, w: 5, d: 13, l: 20, gf: 30, ga: 64, gd: -34, pts: 28, zone: "relegation" },
  ],
  scorers: [
    { name: "Thierry Henry", playerSlug: "thierry-henry", club: "Arsenal", clubSlug: "arsenal", goals: 24, assists: 5 },
    { name: "Jimmy Floyd Hasselbaink", playerSlug: "jimmy-floyd-hasselbaink", club: "Chelsea", clubSlug: "chelsea", goals: 23, assists: 3 },
    { name: "Ruud van Nistelrooy", playerSlug: "ruud-van-nistelrooy", club: "Manchester United", clubSlug: "manchester-united", goals: 23, assists: 3 },
    { name: "Alan Shearer", playerSlug: "alan-shearer", club: "Newcastle United", clubSlug: "newcastle-united", goals: 23, assists: 6 },
    { name: "Michael Owen", playerSlug: "michael-owen", club: "Liverpool", clubSlug: "liverpool", goals: 19, assists: 4 },
    { name: "Ole Gunnar Solskjaer", playerSlug: "ole-gunnar-solskjaer", club: "Manchester United", clubSlug: "manchester-united", goals: 17, assists: 4 },
    { name: "Robbie Fowler", playerSlug: "robbie-fowler", club: "Liverpool / Leeds United", clubSlug: "liverpool", goals: 15, assists: 3 },
    { name: "Eidur Gudjohnsen", playerSlug: "eidur-gudjohnsen", club: "Chelsea", clubSlug: "chelsea", goals: 14, assists: 5 },
    { name: "Marians Pahars", playerSlug: "marians-pahars", club: "Southampton", clubSlug: "southampton", goals: 14, assists: 2 },
    { name: "Andy Cole", playerSlug: "andy-cole", club: "Manchester United / Blackburn Rovers", clubSlug: "manchester-united", goals: 13, assists: 3 },
  ],
  assisters: [
    { name: "Robert Pires", playerSlug: "robert-pires", club: "Arsenal", clubSlug: "arsenal", assists: 11 },
    { name: "David Beckham", playerSlug: "david-beckham", club: "Manchester United", clubSlug: "manchester-united", assists: 10 },
    { name: "Alan Shearer", playerSlug: "alan-shearer", club: "Newcastle United", clubSlug: "newcastle-united", assists: 6 },
    { name: "Thierry Henry", playerSlug: "thierry-henry", club: "Arsenal", clubSlug: "arsenal", assists: 5 },
    { name: "Eidur Gudjohnsen", playerSlug: "eidur-gudjohnsen", club: "Chelsea", clubSlug: "chelsea", assists: 5 },
  ],
  cleanSheets: [
    { name: "Nigel Martyn", playerSlug: "nigel-martyn", club: "Leeds United", clubSlug: "leeds-united", cleanSheets: 18 },
    { name: "Jerzy Dudek", playerSlug: "jerzy-dudek", club: "Liverpool", clubSlug: "liverpool", cleanSheets: 15 },
    { name: "David Seaman", playerSlug: "david-seaman", club: "Arsenal", clubSlug: "arsenal", cleanSheets: 14 },
    { name: "Carlo Cudicini", playerSlug: "carlo-cudicini", club: "Chelsea", clubSlug: "chelsea", cleanSheets: 13 },
    { name: "Fabien Barthez", playerSlug: "fabien-barthez", club: "Manchester United", clubSlug: "manchester-united", cleanSheets: 11 },
  ],
  awards: [
    { title: "PFA Player of the Year", winner: "Ruud van Nistelrooy", playerSlug: "ruud-van-nistelrooy" },
    { title: "PFA Young Player of the Year", winner: "Craig Bellamy", playerSlug: "craig-bellamy" },
    { title: "FWA Footballer of the Year", winner: "Robert Pires", playerSlug: "robert-pires" },
    { title: "Manager of the Season", winner: "Arsène Wenger" },
  ],
  relegated: ["Ipswich Town", "Derby County", "Leicester City"],
  promoted: ["Manchester City", "West Bromwich Albion", "Birmingham City"],
  narrative: `Arsenal's 2001-02 campaign was a masterclass in attacking football as Arsène Wenger's side completed a third League and FA Cup Double -- their second under the Frenchman. The Gunners finished on 87 points, seven clear of Liverpool, and lost just three league matches in a season of breathtaking quality.

The title was clinched in the most dramatic fashion possible. Arsenal travelled to Old Trafford in the penultimate match needing just a point to secure the championship. Sylvain Wiltord scored the only goal of the game to hand Arsenal the title on their great rivals' home turf -- a moment of pure jubilation for the travelling fans and bitter disappointment for the dethroned champions.

Thierry Henry was the driving force, claiming the Golden Boot with 24 goals and producing performances of astonishing pace, power and technique. Robert Pires was equally brilliant before a cruciate ligament injury cut short his season in March, while Dennis Bergkamp continued to produce moments of genius in the number ten role. Patrick Vieira and Gilberto Silva provided the platform from midfield.

The title race was wide open at the turn of the year. Newcastle United, inspired by Bobby Robson's management and Alan Shearer's goals, led the table at one point after back-to-back away wins at Arsenal and Leeds during the Christmas period. Liverpool, who had been top in early December, underwent a slump but recovered strongly to finish second.

Manchester United endured an unusually disappointing campaign, finishing third on 77 points despite Ruud van Nistelrooy's outstanding debut season of 23 league goals. The Dutchman won the PFA Player of the Year award, while Ole Gunnar Solskjaer contributed 17 goals. However, United's inconsistency in key matches proved costly as they finished outside the top two for the first time in the Premier League era.

Newcastle's fourth-place finish confirmed Bobby Robson's excellent rebuilding job. Shearer's 23 goals and Craig Bellamy's dynamic performances -- the Welshman won the PFA Young Player of the Year award -- fuelled a genuine title challenge before the Magpies faded in the spring.

All three promoted clubs avoided relegation for the first time in Premier League history. Blackburn Rovers had the most successful return, finishing tenth and winning the League Cup under Graeme Souness. Bolton Wanderers briefly went top after winning their first three matches, and Fulham acquitted themselves well in their maiden Premier League campaign.

Instead, it was three established clubs that went down. Leicester City finished bottom with just 28 points in their final season at Filbert Street. Derby County, after six seasons in the top flight, managed only 30 points. Ipswich Town's dramatic decline from fifth the previous season to 18th was the most striking fall from grace, confirmed by a 5-0 defeat at Liverpool on the final day.`,
  notableMoments: [
    "Arsenal won the Double with the title clinched at Old Trafford via Wiltord's goal",
    "Thierry Henry claimed the Golden Boot with 24 goals in a brilliant campaign",
    "All three promoted clubs survived relegation for the first time in Premier League history",
    "Manchester United finished outside the top two for the first time in the Premier League era",
    "Ipswich Town fell from fifth to 18th in the most dramatic single-season decline",
  ],
  metaTitle: "Premier League 2001-02 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2001-02 Premier League season. Arsenal's Double, Thierry Henry's Golden Boot, final standings, top scorers, assists and a complete season recap.",
};

export default data;
