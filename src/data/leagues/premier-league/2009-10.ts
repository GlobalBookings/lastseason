import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "2009-10",
  seasonDisplay: "2009-10",
  champion: "Chelsea",
  championSlug: "chelsea",
  topScorer: "Didier Drogba",
  topScorerGoals: 29,
  totalGoals: 1053,
  standings: [
    { pos: 1, club: "Chelsea", clubSlug: "chelsea", p: 38, w: 27, d: 5, l: 6, gf: 103, ga: 32, gd: 71, pts: 86, zone: "cl" },
    { pos: 2, club: "Manchester United", clubSlug: "manchester-united", p: 38, w: 27, d: 4, l: 7, gf: 86, ga: 28, gd: 58, pts: 85, zone: "cl" },
    { pos: 3, club: "Arsenal", clubSlug: "arsenal", p: 38, w: 23, d: 6, l: 9, gf: 83, ga: 41, gd: 42, pts: 75, zone: "cl" },
    { pos: 4, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 38, w: 21, d: 7, l: 10, gf: 67, ga: 41, gd: 26, pts: 70, zone: "cl" },
    { pos: 5, club: "Manchester City", clubSlug: "manchester-city", p: 38, w: 18, d: 13, l: 7, gf: 73, ga: 45, gd: 28, pts: 67, zone: "el" },
    { pos: 6, club: "Aston Villa", clubSlug: "aston-villa", p: 38, w: 17, d: 13, l: 8, gf: 52, ga: 39, gd: 13, pts: 64 },
    { pos: 7, club: "Liverpool", clubSlug: "liverpool", p: 38, w: 18, d: 9, l: 11, gf: 61, ga: 35, gd: 26, pts: 63, zone: "el" },
    { pos: 8, club: "Everton", clubSlug: "everton", p: 38, w: 16, d: 13, l: 9, gf: 60, ga: 49, gd: 11, pts: 61 },
    { pos: 9, club: "Birmingham City", clubSlug: "birmingham-city", p: 38, w: 13, d: 11, l: 14, gf: 38, ga: 47, gd: -9, pts: 50 },
    { pos: 10, club: "Blackburn Rovers", clubSlug: "blackburn-rovers", p: 38, w: 13, d: 11, l: 14, gf: 41, ga: 55, gd: -14, pts: 50 },
    { pos: 11, club: "Stoke City", clubSlug: "stoke-city", p: 38, w: 11, d: 14, l: 13, gf: 34, ga: 48, gd: -14, pts: 47 },
    { pos: 12, club: "Fulham", clubSlug: "fulham", p: 38, w: 12, d: 10, l: 16, gf: 39, ga: 46, gd: -7, pts: 46 },
    { pos: 13, club: "Sunderland", clubSlug: "sunderland", p: 38, w: 11, d: 11, l: 16, gf: 48, ga: 56, gd: -8, pts: 44 },
    { pos: 14, club: "Bolton Wanderers", clubSlug: "bolton-wanderers", p: 38, w: 10, d: 9, l: 19, gf: 42, ga: 67, gd: -25, pts: 39 },
    { pos: 15, club: "Wolverhampton Wanderers", clubSlug: "wolves", p: 38, w: 9, d: 11, l: 18, gf: 32, ga: 56, gd: -24, pts: 38 },
    { pos: 16, club: "Wigan Athletic", clubSlug: "wigan-athletic", p: 38, w: 9, d: 9, l: 20, gf: 37, ga: 79, gd: -42, pts: 36 },
    { pos: 17, club: "West Ham United", clubSlug: "west-ham-united", p: 38, w: 8, d: 11, l: 19, gf: 47, ga: 66, gd: -19, pts: 35 },
    { pos: 18, club: "Burnley", clubSlug: "burnley", p: 38, w: 8, d: 6, l: 24, gf: 42, ga: 82, gd: -40, pts: 30, zone: "relegation" },
    { pos: 19, club: "Hull City", clubSlug: "hull-city", p: 38, w: 6, d: 12, l: 20, gf: 34, ga: 75, gd: -41, pts: 30, zone: "relegation" },
    { pos: 20, club: "Portsmouth", clubSlug: "portsmouth", p: 38, w: 7, d: 7, l: 24, gf: 34, ga: 66, gd: -32, pts: 19, zone: "relegation" },
  ],
  scorers: [
    { name: "Didier Drogba", playerSlug: "didier-drogba", club: "Chelsea", clubSlug: "chelsea", goals: 29, assists: 4 },
    { name: "Wayne Rooney", playerSlug: "wayne-rooney", club: "Manchester United", clubSlug: "manchester-united", goals: 26, assists: 9 },
    { name: "Darren Bent", playerSlug: "darren-bent", club: "Sunderland", clubSlug: "sunderland", goals: 24, assists: 1 },
    { name: "Carlos Tevez", playerSlug: "carlos-tevez", club: "Manchester City", clubSlug: "manchester-city", goals: 23, assists: 5 },
    { name: "Frank Lampard", playerSlug: "frank-lampard", club: "Chelsea", clubSlug: "chelsea", goals: 22, assists: 14 },
    { name: "Fernando Torres", playerSlug: "fernando-torres", club: "Liverpool", clubSlug: "liverpool", goals: 18, assists: 5 },
    { name: "Jermain Defoe", playerSlug: "jermain-defoe", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 18, assists: 1 },
    { name: "Cesc Fabregas", playerSlug: "cesc-fabregas", club: "Arsenal", clubSlug: "arsenal", goals: 15, assists: 13 },
    { name: "Emmanuel Adebayor", playerSlug: "emmanuel-adebayor", club: "Manchester City", clubSlug: "manchester-city", goals: 14, assists: 4 },
    { name: "Gabriel Agbonlahor", playerSlug: "gabriel-agbonlahor", club: "Aston Villa", clubSlug: "aston-villa", goals: 13, assists: 3 },
  ],
  assisters: [
    { name: "Frank Lampard", playerSlug: "frank-lampard", club: "Chelsea", clubSlug: "chelsea", assists: 14 },
    { name: "Cesc Fabregas", playerSlug: "cesc-fabregas", club: "Arsenal", clubSlug: "arsenal", assists: 13 },
    { name: "Wayne Rooney", playerSlug: "wayne-rooney", club: "Manchester United", clubSlug: "manchester-united", assists: 9 },
    { name: "Ashley Young", playerSlug: "ashley-young", club: "Aston Villa", clubSlug: "aston-villa", assists: 8 },
    { name: "Antonio Valencia", playerSlug: "antonio-valencia", club: "Manchester United", clubSlug: "manchester-united", assists: 7 },
  ],
  cleanSheets: [
    { name: "Petr Cech", playerSlug: "petr-cech", club: "Chelsea", clubSlug: "chelsea", cleanSheets: 17 },
    { name: "Edwin van der Sar", playerSlug: "edwin-van-der-sar", club: "Manchester United", clubSlug: "manchester-united", cleanSheets: 14 },
    { name: "Brad Friedel", playerSlug: "brad-friedel", club: "Aston Villa", clubSlug: "aston-villa", cleanSheets: 12 },
    { name: "Heurelho Gomes", playerSlug: "heurelho-gomes", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", cleanSheets: 9 },
    { name: "Pepe Reina", playerSlug: "pepe-reina", club: "Liverpool", clubSlug: "liverpool", cleanSheets: 9 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Wayne Rooney", playerSlug: "wayne-rooney" },
    { title: "Young Player of the Season", winner: "James Milner", playerSlug: "james-milner" },
    { title: "Golden Glove", winner: "Petr Cech", playerSlug: "petr-cech" },
    { title: "Manager of the Season", winner: "Harry Redknapp" },
  ],
  relegated: ["Burnley", "Hull City", "Portsmouth"],
  promoted: ["Newcastle United", "West Bromwich Albion", "Blackpool"],
  narrative: `Chelsea stormed to the Premier League title in 2009-10 under Carlo Ancelotti in his debut season as manager, scoring a record 103 league goals in one of the most devastating attacking campaigns the English top flight has ever witnessed. The Blues finished on 86 points, a single point ahead of Manchester United, clinching the title with a stunning 8-0 demolition of Wigan Athletic on the final day.

The Italian manager transformed Chelsea into an attacking powerhouse. Where previous Chelsea title wins under Jose Mourinho had been built on defensive solidity, Ancelotti unleashed the full firepower of Didier Drogba, Frank Lampard, Nicolas Anelka and Florent Malouda. Drogba was the spearhead, scoring 29 league goals to win the Golden Boot, while Lampard contributed an outstanding 22 goals and 14 assists from midfield.

Manchester United pushed them all the way, finishing on 85 points having won 27 of their 38 matches. Wayne Rooney was in sensational form, scoring 26 goals and winning the PFA Player of the Year award. Despite their efforts, a single point proved the difference as Chelsea's superior goal difference meant they entered the final day knowing a win would be enough.

Arsenal finished third on 75 points, with Cesc Fabregas orchestrating much of their play, contributing 15 goals and 13 assists. The biggest story of the season for the top four was Tottenham Hotspur's fourth-place finish under Harry Redknapp, earning their first ever Champions League qualification. The achievement cemented Redknapp's reputation and gave Spurs fans a historic moment.

Manchester City continued their ascent under Mark Hughes and then Roberto Mancini, finishing fifth on 67 points. Carlos Tevez, who had controversially crossed from United to City, scored 23 goals. Liverpool endured a difficult campaign, finishing seventh with just 63 points -- a dramatic fall from their runners-up position the previous season.

The season was marred by the financial collapse of Portsmouth, who became the first Premier League club to enter administration in February 2010. They were docked nine points and ultimately relegated with just 19 points. Burnley and Hull City also went down, with Burnley returning to the Championship after just one season back in the top flight.

Tottenham's 9-1 thrashing of Wigan in November was the joint-highest scoring match in Premier League history. The season also saw Liverpool manager Rafael Benitez depart after six years, while Fulham's remarkable run to the Europa League final under Roy Hodgson captured hearts across the country. Ancelotti became only the second non-British manager to win the Premier League, following Arsene Wenger, and he secured the double by also winning the FA Cup.`,
  notableMoments: [
    "Chelsea scored a Premier League record 103 goals under Carlo Ancelotti",
    "Tottenham Hotspur qualified for the Champions League for the first time ever",
    "Portsmouth became the first Premier League club to enter administration",
    "Tottenham 9-1 Wigan equalled the record for the biggest Premier League victory",
    "Chelsea beat Wigan 8-0 on the final day to clinch the title by a single point",
  ],
  metaTitle: "Premier League 2009-10 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2009-10 Premier League season. Final standings, top goalscorers, assists, player awards and a complete season recap.",
};

export default data;
