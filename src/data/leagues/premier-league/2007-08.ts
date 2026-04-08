import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "2007-08",
  seasonDisplay: "2007-08",
  champion: "Manchester United",
  championSlug: "manchester-united",
  topScorer: "Cristiano Ronaldo",
  topScorerGoals: 31,
  totalGoals: 1002,
  standings: [
    { pos: 1, club: "Manchester United", clubSlug: "manchester-united", p: 38, w: 27, d: 6, l: 5, gf: 80, ga: 22, gd: 58, pts: 87, zone: "cl" },
    { pos: 2, club: "Chelsea", clubSlug: "chelsea", p: 38, w: 25, d: 10, l: 3, gf: 65, ga: 26, gd: 39, pts: 85, zone: "cl" },
    { pos: 3, club: "Arsenal", clubSlug: "arsenal", p: 38, w: 24, d: 11, l: 3, gf: 74, ga: 31, gd: 43, pts: 83, zone: "cl" },
    { pos: 4, club: "Liverpool", clubSlug: "liverpool", p: 38, w: 21, d: 13, l: 4, gf: 67, ga: 28, gd: 39, pts: 76, zone: "cl" },
    { pos: 5, club: "Everton", clubSlug: "everton", p: 38, w: 19, d: 8, l: 11, gf: 55, ga: 33, gd: 22, pts: 65, zone: "el" },
    { pos: 6, club: "Aston Villa", clubSlug: "aston-villa", p: 38, w: 16, d: 12, l: 10, gf: 71, ga: 51, gd: 20, pts: 60 },
    { pos: 7, club: "Blackburn Rovers", clubSlug: "blackburn-rovers", p: 38, w: 15, d: 13, l: 10, gf: 50, ga: 48, gd: 2, pts: 58 },
    { pos: 8, club: "Portsmouth", clubSlug: "portsmouth", p: 38, w: 16, d: 9, l: 13, gf: 48, ga: 40, gd: 8, pts: 57, zone: "el" },
    { pos: 9, club: "Manchester City", clubSlug: "manchester-city", p: 38, w: 15, d: 10, l: 13, gf: 45, ga: 53, gd: -8, pts: 55, zone: "el" },
    { pos: 10, club: "West Ham United", clubSlug: "west-ham-united", p: 38, w: 13, d: 10, l: 15, gf: 42, ga: 50, gd: -8, pts: 49 },
    { pos: 11, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 38, w: 11, d: 13, l: 14, gf: 66, ga: 61, gd: 5, pts: 46, zone: "el" },
    { pos: 12, club: "Newcastle United", clubSlug: "newcastle-united", p: 38, w: 11, d: 10, l: 17, gf: 45, ga: 65, gd: -20, pts: 43 },
    { pos: 13, club: "Middlesbrough", clubSlug: "middlesbrough", p: 38, w: 10, d: 12, l: 16, gf: 43, ga: 53, gd: -10, pts: 42 },
    { pos: 14, club: "Wigan Athletic", clubSlug: "wigan-athletic", p: 38, w: 10, d: 10, l: 18, gf: 34, ga: 51, gd: -17, pts: 40 },
    { pos: 15, club: "Sunderland", clubSlug: "sunderland", p: 38, w: 11, d: 6, l: 21, gf: 36, ga: 59, gd: -23, pts: 39 },
    { pos: 16, club: "Bolton Wanderers", clubSlug: "bolton-wanderers", p: 38, w: 9, d: 10, l: 19, gf: 36, ga: 54, gd: -18, pts: 37 },
    { pos: 17, club: "Fulham", clubSlug: "fulham", p: 38, w: 8, d: 12, l: 18, gf: 38, ga: 60, gd: -22, pts: 36 },
    { pos: 18, club: "Reading", clubSlug: "reading", p: 38, w: 10, d: 6, l: 22, gf: 41, ga: 66, gd: -25, pts: 36, zone: "relegation" },
    { pos: 19, club: "Birmingham City", clubSlug: "birmingham-city", p: 38, w: 8, d: 11, l: 19, gf: 46, ga: 62, gd: -16, pts: 35, zone: "relegation" },
    { pos: 20, club: "Derby County", clubSlug: "derby-county", p: 38, w: 1, d: 8, l: 29, gf: 20, ga: 89, gd: -69, pts: 11, zone: "relegation" },
  ],
  scorers: [
    { name: "Cristiano Ronaldo", playerSlug: "cristiano-ronaldo", club: "Manchester United", clubSlug: "manchester-united", goals: 31, assists: 6 },
    { name: "Emmanuel Adebayor", playerSlug: "emmanuel-adebayor", club: "Arsenal", clubSlug: "arsenal", goals: 24, assists: 8 },
    { name: "Fernando Torres", playerSlug: "fernando-torres", club: "Liverpool", clubSlug: "liverpool", goals: 24, assists: 4 },
    { name: "Roque Santa Cruz", playerSlug: "roque-santa-cruz", club: "Blackburn Rovers", clubSlug: "blackburn-rovers", goals: 19, assists: 3 },
    { name: "Benjani", playerSlug: "benjani", club: "Portsmouth", clubSlug: "portsmouth", goals: 15, assists: 1 },
    { name: "Dimitar Berbatov", playerSlug: "dimitar-berbatov", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 15, assists: 6 },
    { name: "Robbie Keane", playerSlug: "robbie-keane", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 15, assists: 5 },
    { name: "Yakubu", playerSlug: "yakubu", club: "Everton", clubSlug: "everton", goals: 15, assists: 2 },
    { name: "Carlos Tevez", playerSlug: "carlos-tevez", club: "Manchester United", clubSlug: "manchester-united", goals: 14, assists: 7 },
    { name: "John Carew", playerSlug: "john-carew", club: "Aston Villa", clubSlug: "aston-villa", goals: 13, assists: 2 },
  ],
  assisters: [
    { name: "Cesc Fabregas", playerSlug: "cesc-fabregas", club: "Arsenal", clubSlug: "arsenal", assists: 17 },
    { name: "Steven Gerrard", playerSlug: "steven-gerrard", club: "Liverpool", clubSlug: "liverpool", assists: 10 },
    { name: "Ashley Young", playerSlug: "ashley-young", club: "Aston Villa", clubSlug: "aston-villa", assists: 9 },
    { name: "Ryan Giggs", playerSlug: "ryan-giggs", club: "Manchester United", clubSlug: "manchester-united", assists: 8 },
    { name: "Wayne Rooney", playerSlug: "wayne-rooney", club: "Manchester United", clubSlug: "manchester-united", assists: 8 },
  ],
  cleanSheets: [
    { name: "Pepe Reina", playerSlug: "pepe-reina", club: "Liverpool", clubSlug: "liverpool", cleanSheets: 18 },
    { name: "Edwin van der Sar", playerSlug: "edwin-van-der-sar", club: "Manchester United", clubSlug: "manchester-united", cleanSheets: 16 },
    { name: "Petr Cech", playerSlug: "petr-cech", club: "Chelsea", clubSlug: "chelsea", cleanSheets: 16 },
    { name: "David James", playerSlug: "david-james", club: "Portsmouth", clubSlug: "portsmouth", cleanSheets: 10 },
    { name: "Brad Friedel", playerSlug: "brad-friedel", club: "Blackburn Rovers", clubSlug: "blackburn-rovers", cleanSheets: 9 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Cristiano Ronaldo", playerSlug: "cristiano-ronaldo" },
    { title: "Young Player of the Season", winner: "Cesc Fabregas", playerSlug: "cesc-fabregas" },
    { title: "Golden Glove", winner: "Pepe Reina", playerSlug: "pepe-reina" },
    { title: "Manager of the Season", winner: "Sir Alex Ferguson" },
  ],
  relegated: ["Reading", "Birmingham City", "Derby County"],
  promoted: ["West Bromwich Albion", "Stoke City", "Hull City"],
  narrative: `Manchester United reclaimed the Premier League title in 2007-08, finishing on 87 points to hold off a persistent Chelsea side on 85 and a brilliant Arsenal team on 83. Sir Alex Ferguson's men won their tenth Premier League crown and seventeenth English league title overall, closing to within one of Liverpool's record tally.

The season belonged in many ways to Cristiano Ronaldo, who delivered one of the most devastating individual campaigns in Premier League history. The Portuguese winger struck 31 league goals, equalling Alan Shearer's record for a 38-game season, and dominated every individual award going. His pace, skill and unerring finishing made him virtually unplayable as he swept up the PFA Player of the Year, FWA Footballer of the Year, and the Premier League Player of the Season awards.

Chelsea, under Avram Grant following Jose Mourinho's departure in September, remained in contention throughout despite the managerial upheaval. They lost only three league matches all season, accumulating 85 points -- a record for a runner-up at that time. Arsenal, playing scintillating football under Arsene Wenger, also had a remarkable campaign but ultimately fell short after a late-season wobble that included a painful defeat at Old Trafford. The top three all surpassed 83 points, making it one of the most competitive title races the Premier League had ever witnessed.

Liverpool secured fourth place with 76 points, ensuring all four Champions League spots remained with the established Big Four. This dominance was underlined by Manchester United and Chelsea meeting in the Champions League final in Moscow, with United winning on penalties to secure a historic double.

Below the elite, Everton impressed under David Moyes to finish fifth on 65 points, while Aston Villa enjoyed a strong campaign under Martin O'Neill, with John Carew and Gabriel Agbonlahor providing the firepower. Portsmouth won the FA Cup, defeating Cardiff City in the final, adding a notable cup success to complement their eighth-place league finish.

At the bottom, Derby County endured one of the most miserable seasons in English football history. The Rams won just one match all campaign, a 1-0 victory over Newcastle United in September, and collected a mere 11 points -- the lowest total in top-flight history. They were relegated as early as March, becoming the first Premier League club to go down before April. Their 20 goals scored was fewer than Ronaldo, Adebayor or Torres managed individually. Reading and Birmingham City also went down, with Fulham dramatically surviving on the final day.

The season also saw the highest-scoring match in Premier League history when Portsmouth beat Reading 7-4 in September, and Middlesbrough thrashed Manchester City 8-1 on the final day in a remarkable farewell. A vintage Premier League campaign defined by Ronaldo's brilliance and Derby's despair.`,
  notableMoments: [
    "Cristiano Ronaldo scored 31 goals, equalling the Premier League 38-game season record",
    "Derby County set the record for fewest points in a Premier League season with just 11",
    "Manchester United and Chelsea met in the Champions League final in Moscow",
    "Portsmouth won the FA Cup, defeating Cardiff City at Wembley",
    "Portsmouth 7-4 Reading became the highest-scoring match in Premier League history",
  ],
  metaTitle: "Premier League 2007-08 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2007-08 Premier League season. Final standings, top goalscorers, assists, player awards and a complete season recap.",
};

export default data;
