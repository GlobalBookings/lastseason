import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "2006-07",
  seasonDisplay: "2006-07",
  champion: "Manchester United",
  championSlug: "manchester-united",
  topScorer: "Didier Drogba",
  topScorerGoals: 20,
  totalGoals: 931,
  standings: [
    { pos: 1, club: "Manchester United", clubSlug: "manchester-united", p: 38, w: 28, d: 5, l: 5, gf: 83, ga: 27, gd: 56, pts: 89, zone: "cl" },
    { pos: 2, club: "Chelsea", clubSlug: "chelsea", p: 38, w: 24, d: 11, l: 3, gf: 64, ga: 24, gd: 40, pts: 83, zone: "cl" },
    { pos: 3, club: "Liverpool", clubSlug: "liverpool", p: 38, w: 20, d: 8, l: 10, gf: 57, ga: 27, gd: 30, pts: 68, zone: "cl" },
    { pos: 4, club: "Arsenal", clubSlug: "arsenal", p: 38, w: 19, d: 11, l: 8, gf: 63, ga: 35, gd: 28, pts: 68, zone: "cl" },
    { pos: 5, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 38, w: 17, d: 9, l: 12, gf: 57, ga: 54, gd: 3, pts: 60, zone: "el" },
    { pos: 6, club: "Everton", clubSlug: "everton", p: 38, w: 15, d: 13, l: 10, gf: 52, ga: 36, gd: 16, pts: 58 },
    { pos: 7, club: "Bolton Wanderers", clubSlug: "bolton-wanderers", p: 38, w: 16, d: 8, l: 14, gf: 47, ga: 52, gd: -5, pts: 56, zone: "el" },
    { pos: 8, club: "Reading", clubSlug: "reading", p: 38, w: 16, d: 7, l: 15, gf: 52, ga: 47, gd: 5, pts: 55 },
    { pos: 9, club: "Portsmouth", clubSlug: "portsmouth", p: 38, w: 14, d: 12, l: 12, gf: 45, ga: 42, gd: 3, pts: 54 },
    { pos: 10, club: "Blackburn Rovers", clubSlug: "blackburn-rovers", p: 38, w: 15, d: 7, l: 16, gf: 52, ga: 54, gd: -2, pts: 52 },
    { pos: 11, club: "Aston Villa", clubSlug: "aston-villa", p: 38, w: 11, d: 17, l: 10, gf: 43, ga: 41, gd: 2, pts: 50 },
    { pos: 12, club: "Middlesbrough", clubSlug: "middlesbrough", p: 38, w: 12, d: 10, l: 16, gf: 44, ga: 49, gd: -5, pts: 46 },
    { pos: 13, club: "Newcastle United", clubSlug: "newcastle-united", p: 38, w: 11, d: 10, l: 17, gf: 38, ga: 47, gd: -9, pts: 43 },
    { pos: 14, club: "Manchester City", clubSlug: "manchester-city", p: 38, w: 11, d: 9, l: 18, gf: 29, ga: 44, gd: -15, pts: 42 },
    { pos: 15, club: "West Ham United", clubSlug: "west-ham-united", p: 38, w: 12, d: 5, l: 21, gf: 35, ga: 59, gd: -24, pts: 41 },
    { pos: 16, club: "Fulham", clubSlug: "fulham", p: 38, w: 8, d: 15, l: 15, gf: 38, ga: 60, gd: -22, pts: 39 },
    { pos: 17, club: "Wigan Athletic", clubSlug: "wigan-athletic", p: 38, w: 10, d: 8, l: 20, gf: 37, ga: 59, gd: -22, pts: 38 },
    { pos: 18, club: "Sheffield United", clubSlug: "sheffield-united", p: 38, w: 10, d: 8, l: 20, gf: 32, ga: 55, gd: -23, pts: 38, zone: "relegation" },
    { pos: 19, club: "Charlton Athletic", clubSlug: "charlton-athletic", p: 38, w: 8, d: 10, l: 20, gf: 34, ga: 60, gd: -26, pts: 34, zone: "relegation" },
    { pos: 20, club: "Watford", clubSlug: "watford", p: 38, w: 5, d: 13, l: 20, gf: 29, ga: 59, gd: -30, pts: 28, zone: "relegation" },
  ],
  scorers: [
    { name: "Didier Drogba", playerSlug: "didier-drogba", club: "Chelsea", clubSlug: "chelsea", goals: 20, assists: 4 },
    { name: "Cristiano Ronaldo", playerSlug: "cristiano-ronaldo", club: "Manchester United", clubSlug: "manchester-united", goals: 17, assists: 11 },
    { name: "Wayne Rooney", playerSlug: "wayne-rooney", club: "Manchester United", clubSlug: "manchester-united", goals: 14, assists: 7 },
    { name: "Benni McCarthy", playerSlug: "benni-mccarthy", club: "Blackburn Rovers", clubSlug: "blackburn-rovers", goals: 18, assists: 3 },
    { name: "Mark Viduka", playerSlug: "mark-viduka", club: "Middlesbrough", clubSlug: "middlesbrough", goals: 14, assists: 3 },
    { name: "Frank Lampard", playerSlug: "frank-lampard", club: "Chelsea", clubSlug: "chelsea", goals: 11, assists: 8 },
    { name: "Dimitar Berbatov", playerSlug: "dimitar-berbatov", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 12, assists: 6 },
    { name: "Robbie Keane", playerSlug: "robbie-keane", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 11, assists: 8 },
    { name: "Kevin Doyle", playerSlug: "kevin-doyle", club: "Reading", clubSlug: "reading", goals: 13, assists: 4 },
    { name: "Darren Bent", playerSlug: "darren-bent", club: "Charlton Athletic", clubSlug: "charlton-athletic", goals: 13, assists: 2 },
  ],
  assisters: [
    { name: "Cesc Fabregas", playerSlug: "cesc-fabregas", club: "Arsenal", clubSlug: "arsenal", assists: 11 },
    { name: "Cristiano Ronaldo", playerSlug: "cristiano-ronaldo", club: "Manchester United", clubSlug: "manchester-united", assists: 11 },
    { name: "Ryan Giggs", playerSlug: "ryan-giggs", club: "Manchester United", clubSlug: "manchester-united", assists: 10 },
    { name: "Steven Gerrard", playerSlug: "steven-gerrard", club: "Liverpool", clubSlug: "liverpool", assists: 7 },
    { name: "Frank Lampard", playerSlug: "frank-lampard", club: "Chelsea", clubSlug: "chelsea", assists: 8 },
  ],
  cleanSheets: [
    { name: "Pepe Reina", playerSlug: "pepe-reina", club: "Liverpool", clubSlug: "liverpool", cleanSheets: 19 },
    { name: "Edwin van der Sar", playerSlug: "edwin-van-der-sar", club: "Manchester United", clubSlug: "manchester-united", cleanSheets: 17 },
    { name: "Petr Cech", playerSlug: "petr-cech", club: "Chelsea", clubSlug: "chelsea", cleanSheets: 16 },
    { name: "Jens Lehmann", playerSlug: "jens-lehmann", club: "Arsenal", clubSlug: "arsenal", cleanSheets: 13 },
    { name: "Tim Howard", playerSlug: "tim-howard", club: "Everton", clubSlug: "everton", cleanSheets: 12 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Cristiano Ronaldo", playerSlug: "cristiano-ronaldo" },
    { title: "Young Player of the Season", winner: "Cristiano Ronaldo", playerSlug: "cristiano-ronaldo" },
    { title: "Golden Glove", winner: "Pepe Reina", playerSlug: "pepe-reina" },
    { title: "Manager of the Season", winner: "Sir Alex Ferguson" },
  ],
  relegated: ["Sheffield United", "Charlton Athletic", "Watford"],
  promoted: ["Sunderland", "Birmingham City", "Derby County"],
  narrative: `Manchester United regained the Premier League title in 2006-07, finishing on 89 points to end Chelsea's two-year reign at the top of English football. Sir Alex Ferguson's side showed Championship pedigree throughout, with a young Cristiano Ronaldo emerging as the most exciting player in the league and Rooney providing the perfect foil.

Ronaldo's transformation from tricky winger to devastating goalscorer was the story of the season. The Portuguese star netted 17 league goals and contributed 11 assists, earning both the Player of the Season and Young Player of the Season awards. His performances signalled the arrival of a truly world-class talent who would go on to dominate the game for years to come.

Chelsea finished second on 83 points, just six behind United. Didier Drogba led the line superbly with 20 goals to claim the Golden Boot, while Jose Mourinho's side remained defensively excellent with only 24 goals conceded. However, their inability to match United's consistency in the spring months proved costly.

Liverpool and Arsenal both finished on 68 points, with Liverpool taking third on goal difference. Rafael Benitez's side boasted the league's best defensive record alongside Chelsea, conceding just 27 goals, while Arsenal's young squad continued to impress under Arsene Wenger with Cesc Fabregas pulling the strings from midfield.

Tottenham Hotspur finished fifth with Dimitar Berbatov and Robbie Keane forming an exciting partnership, while Everton under David Moyes continued to punch above their weight in sixth. Reading, in their first ever Premier League campaign, were the surprise package, finishing a creditable eighth under Steve Coppell.

The relegation battle was marked by controversy. Sheffield United finished level on 38 points with Wigan Athletic but went down on goal difference, with the Blades launching a legal challenge over West Ham United's failure to disclose the third-party ownership of Carlos Tevez. Tevez's goals had been instrumental in West Ham's survival, and the dispute rumbled on long after the season ended.

Charlton Athletic and Watford also went down, the latter having been promoted through the playoffs and finding the step up too steep. The 2006-07 season will be remembered as the year Ronaldo became a superstar and Ferguson reminded the football world that Manchester United were far from a spent force.`,
  notableMoments: [
    "Manchester United won the title with 89 points, ending Chelsea's two-year reign",
    "Cristiano Ronaldo won both Player and Young Player of the Season in a breakout campaign",
    "Didier Drogba scored 20 goals to claim the Golden Boot",
    "Sheffield United were relegated amid the Carlos Tevez third-party ownership controversy",
    "Reading finished eighth in their debut Premier League season",
  ],
  metaTitle: "Premier League 2006-07 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2006-07 Premier League season. Manchester United's title, Ronaldo's emergence, final standings, top goalscorers, assists and season recap.",
};

export default data;
