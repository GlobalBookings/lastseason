import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "2008-09",
  seasonDisplay: "2008-09",
  champion: "Manchester United",
  championSlug: "manchester-united",
  topScorer: "Nicolas Anelka",
  topScorerGoals: 19,
  totalGoals: 942,
  standings: [
    { pos: 1, club: "Manchester United", clubSlug: "manchester-united", p: 38, w: 28, d: 6, l: 4, gf: 68, ga: 24, gd: 44, pts: 90, zone: "cl" },
    { pos: 2, club: "Liverpool", clubSlug: "liverpool", p: 38, w: 25, d: 11, l: 2, gf: 77, ga: 27, gd: 50, pts: 86, zone: "cl" },
    { pos: 3, club: "Chelsea", clubSlug: "chelsea", p: 38, w: 25, d: 8, l: 5, gf: 68, ga: 24, gd: 44, pts: 83, zone: "cl" },
    { pos: 4, club: "Arsenal", clubSlug: "arsenal", p: 38, w: 20, d: 12, l: 6, gf: 68, ga: 37, gd: 31, pts: 72, zone: "cl" },
    { pos: 5, club: "Everton", clubSlug: "everton", p: 38, w: 17, d: 12, l: 9, gf: 55, ga: 37, gd: 18, pts: 63, zone: "el" },
    { pos: 6, club: "Aston Villa", clubSlug: "aston-villa", p: 38, w: 17, d: 11, l: 10, gf: 54, ga: 48, gd: 6, pts: 62 },
    { pos: 7, club: "Fulham", clubSlug: "fulham", p: 38, w: 14, d: 11, l: 13, gf: 39, ga: 34, gd: 5, pts: 53, zone: "el" },
    { pos: 8, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 38, w: 14, d: 9, l: 15, gf: 45, ga: 45, gd: 0, pts: 51 },
    { pos: 9, club: "West Ham United", clubSlug: "west-ham-united", p: 38, w: 14, d: 9, l: 15, gf: 42, ga: 45, gd: -3, pts: 51 },
    { pos: 10, club: "Manchester City", clubSlug: "manchester-city", p: 38, w: 15, d: 5, l: 18, gf: 58, ga: 50, gd: 8, pts: 50 },
    { pos: 11, club: "Wigan Athletic", clubSlug: "wigan-athletic", p: 38, w: 12, d: 9, l: 17, gf: 34, ga: 45, gd: -11, pts: 45 },
    { pos: 12, club: "Stoke City", clubSlug: "stoke-city", p: 38, w: 12, d: 9, l: 17, gf: 38, ga: 55, gd: -17, pts: 45 },
    { pos: 13, club: "Bolton Wanderers", clubSlug: "bolton-wanderers", p: 38, w: 11, d: 8, l: 19, gf: 41, ga: 53, gd: -12, pts: 41 },
    { pos: 14, club: "Portsmouth", clubSlug: "portsmouth", p: 38, w: 10, d: 11, l: 17, gf: 38, ga: 57, gd: -19, pts: 41 },
    { pos: 15, club: "Blackburn Rovers", clubSlug: "blackburn-rovers", p: 38, w: 10, d: 11, l: 17, gf: 40, ga: 60, gd: -20, pts: 41 },
    { pos: 16, club: "Sunderland", clubSlug: "sunderland", p: 38, w: 9, d: 9, l: 20, gf: 34, ga: 54, gd: -20, pts: 36 },
    { pos: 17, club: "Hull City", clubSlug: "hull-city", p: 38, w: 8, d: 11, l: 19, gf: 39, ga: 64, gd: -25, pts: 35 },
    { pos: 18, club: "Newcastle United", clubSlug: "newcastle-united", p: 38, w: 7, d: 13, l: 18, gf: 40, ga: 59, gd: -19, pts: 34, zone: "relegation" },
    { pos: 19, club: "Middlesbrough", clubSlug: "middlesbrough", p: 38, w: 7, d: 11, l: 20, gf: 28, ga: 57, gd: -29, pts: 32, zone: "relegation" },
    { pos: 20, club: "West Bromwich Albion", clubSlug: "west-bromwich-albion", p: 38, w: 8, d: 8, l: 22, gf: 36, ga: 67, gd: -31, pts: 32, zone: "relegation" },
  ],
  scorers: [
    { name: "Nicolas Anelka", playerSlug: "nicolas-anelka", club: "Chelsea", clubSlug: "chelsea", goals: 19, assists: 5 },
    { name: "Cristiano Ronaldo", playerSlug: "cristiano-ronaldo", club: "Manchester United", clubSlug: "manchester-united", goals: 18, assists: 5 },
    { name: "Steven Gerrard", playerSlug: "steven-gerrard", club: "Liverpool", clubSlug: "liverpool", goals: 16, assists: 9 },
    { name: "Robinho", playerSlug: "robinho", club: "Manchester City", clubSlug: "manchester-city", goals: 14, assists: 3 },
    { name: "Fernando Torres", playerSlug: "fernando-torres", club: "Liverpool", clubSlug: "liverpool", goals: 14, assists: 3 },
    { name: "Gabriel Agbonlahor", playerSlug: "gabriel-agbonlahor", club: "Aston Villa", clubSlug: "aston-villa", goals: 12, assists: 4 },
    { name: "Darren Bent", playerSlug: "darren-bent", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 12, assists: 2 },
    { name: "Frank Lampard", playerSlug: "frank-lampard", club: "Chelsea", clubSlug: "chelsea", goals: 12, assists: 9 },
    { name: "Wayne Rooney", playerSlug: "wayne-rooney", club: "Manchester United", clubSlug: "manchester-united", goals: 12, assists: 4 },
    { name: "Dirk Kuyt", playerSlug: "dirk-kuyt", club: "Liverpool", clubSlug: "liverpool", goals: 12, assists: 5 },
  ],
  assisters: [
    { name: "Cesc Fabregas", playerSlug: "cesc-fabregas", club: "Arsenal", clubSlug: "arsenal", assists: 13 },
    { name: "Frank Lampard", playerSlug: "frank-lampard", club: "Chelsea", clubSlug: "chelsea", assists: 9 },
    { name: "Steven Gerrard", playerSlug: "steven-gerrard", club: "Liverpool", clubSlug: "liverpool", assists: 9 },
    { name: "Ashley Young", playerSlug: "ashley-young", club: "Aston Villa", clubSlug: "aston-villa", assists: 8 },
    { name: "Ryan Giggs", playerSlug: "ryan-giggs", club: "Manchester United", clubSlug: "manchester-united", assists: 7 },
  ],
  cleanSheets: [
    { name: "Edwin van der Sar", playerSlug: "edwin-van-der-sar", club: "Manchester United", clubSlug: "manchester-united", cleanSheets: 21 },
    { name: "Pepe Reina", playerSlug: "pepe-reina", club: "Liverpool", clubSlug: "liverpool", cleanSheets: 20 },
    { name: "Petr Cech", playerSlug: "petr-cech", club: "Chelsea", clubSlug: "chelsea", cleanSheets: 14 },
    { name: "Brad Friedel", playerSlug: "brad-friedel", club: "Aston Villa", clubSlug: "aston-villa", cleanSheets: 10 },
    { name: "Manuel Almunia", playerSlug: "manuel-almunia", club: "Arsenal", clubSlug: "arsenal", cleanSheets: 9 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Ryan Giggs", playerSlug: "ryan-giggs" },
    { title: "Young Player of the Season", winner: "Ashley Young", playerSlug: "ashley-young" },
    { title: "Golden Glove", winner: "Edwin van der Sar", playerSlug: "edwin-van-der-sar" },
    { title: "Manager of the Season", winner: "Sir Alex Ferguson" },
  ],
  relegated: ["Newcastle United", "Middlesbrough", "West Bromwich Albion"],
  promoted: ["Wolverhampton Wanderers", "Birmingham City", "Burnley"],
  narrative: `Manchester United secured a historic third consecutive Premier League title in 2008-09, finishing top on 90 points in what was one of the tightest two-horse races the league had ever seen. Liverpool pushed them relentlessly, finishing on 86 points having lost just two matches all season, but Sir Alex Ferguson's side showed the composure of champions to hold on.

The title was officially sealed with a goalless draw at Arsenal on the penultimate weekend, giving United their eleventh Premier League crown and eighteenth English league title overall -- equalling Liverpool's all-time record. It was a deeply symbolic moment for Ferguson and his players, and the celebrations were richly deserved.

Liverpool, under Rafael Benitez, played some outstanding football, most memorably demolishing Manchester United 4-1 at Old Trafford in March, with goals from Torres, Gerrard, Fabio Aurelio and Andrea Dossena. Steven Gerrard was magnificent throughout, contributing 16 goals and numerous assists from midfield. Yet a series of draws, particularly in the second half of the season, ultimately cost them their first title since 1990. Their 86-point tally remains the highest ever achieved by a team finishing second in the Premier League.

Chelsea finished third on 83 points under interim managers following the sacking of Luiz Felipe Scolari in February. Guus Hiddink steadied the ship admirably, while Nicolas Anelka won the Golden Boot with 19 goals. Arsenal continued their development under Arsene Wenger, finishing fourth on 72 points to secure Champions League football.

Edwin van der Sar was exceptional in goal for United, keeping 21 clean sheets including a Premier League record run of 1,311 consecutive minutes without conceding a goal. This remarkable streak stretched across 14 matches from November to February and was instrumental in United's defensive solidity.

September saw the game-changing takeover of Manchester City by the Abu Dhabi United Group, with Robinho arriving for a British record fee. The Brazilian scored 14 goals but City finished tenth, giving little indication of the revolution to come. Stoke City, newly promoted, adapted well to their first ever Premier League campaign under Tony Pulis.

At the bottom, the relegation battle produced surprises. Newcastle United, despite their storied history and massive support, were relegated after a turbulent season marred by managerial changes and dressing-room unrest. Middlesbrough also went down after eleven years in the top flight, managing just 28 goals all season. West Bromwich Albion completed the relegated trio, suffering an immediate return to the Championship.

Ryan Giggs, at the remarkable age of 35, was named PFA Player of the Year -- a fitting tribute to his longevity and enduring quality. A campaign defined by Liverpool's agonising near-miss and United's relentless consistency.`,
  notableMoments: [
    "Manchester United won a third consecutive Premier League title, equalling Liverpool's record of 18 English titles",
    "Edwin van der Sar set a record of 1,311 minutes without conceding a goal",
    "Liverpool lost just two league matches but still finished second on 86 points",
    "Manchester City were taken over by the Abu Dhabi United Group in September 2008",
    "Newcastle United were relegated from the Premier League for the first time since 1989",
  ],
  metaTitle: "Premier League 2008-09 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2008-09 Premier League season. Final standings, top goalscorers, assists, player awards and a complete season recap.",
};

export default data;
