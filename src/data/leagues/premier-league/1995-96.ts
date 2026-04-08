import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "1995-96",
  seasonDisplay: "1995-96",
  champion: "Manchester United",
  championSlug: "manchester-united",
  topScorer: "Alan Shearer",
  topScorerGoals: 31,
  totalGoals: 988,
  standings: [
    { pos: 1, club: "Manchester United", clubSlug: "manchester-united", p: 38, w: 25, d: 7, l: 6, gf: 73, ga: 35, gd: 38, pts: 82, zone: "cl" },
    { pos: 2, club: "Newcastle United", clubSlug: "newcastle-united", p: 38, w: 24, d: 6, l: 8, gf: 66, ga: 37, gd: 29, pts: 78, zone: "cl" },
    { pos: 3, club: "Liverpool", clubSlug: "liverpool", p: 38, w: 20, d: 11, l: 7, gf: 70, ga: 34, gd: 36, pts: 71, zone: "el" },
    { pos: 4, club: "Aston Villa", clubSlug: "aston-villa", p: 38, w: 18, d: 9, l: 11, gf: 52, ga: 35, gd: 17, pts: 63, zone: "el" },
    { pos: 5, club: "Arsenal", clubSlug: "arsenal", p: 38, w: 17, d: 12, l: 9, gf: 49, ga: 32, gd: 17, pts: 63 },
    { pos: 6, club: "Everton", clubSlug: "everton", p: 38, w: 17, d: 10, l: 11, gf: 64, ga: 44, gd: 20, pts: 61 },
    { pos: 7, club: "Blackburn Rovers", clubSlug: "blackburn-rovers", p: 38, w: 18, d: 7, l: 13, gf: 61, ga: 47, gd: 14, pts: 61 },
    { pos: 8, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 38, w: 16, d: 13, l: 9, gf: 50, ga: 38, gd: 12, pts: 61 },
    { pos: 9, club: "Nottingham Forest", clubSlug: "nottingham-forest", p: 38, w: 15, d: 13, l: 10, gf: 50, ga: 54, gd: -4, pts: 58 },
    { pos: 10, club: "West Ham United", clubSlug: "west-ham-united", p: 38, w: 14, d: 9, l: 15, gf: 43, ga: 52, gd: -9, pts: 51 },
    { pos: 11, club: "Chelsea", clubSlug: "chelsea", p: 38, w: 12, d: 14, l: 12, gf: 46, ga: 44, gd: 2, pts: 50 },
    { pos: 12, club: "Middlesbrough", clubSlug: "middlesbrough", p: 38, w: 11, d: 10, l: 17, gf: 35, ga: 50, gd: -15, pts: 43 },
    { pos: 13, club: "Leeds United", clubSlug: "leeds-united", p: 38, w: 12, d: 7, l: 19, gf: 40, ga: 57, gd: -17, pts: 43 },
    { pos: 14, club: "Wimbledon", clubSlug: "wimbledon", p: 38, w: 10, d: 11, l: 17, gf: 55, ga: 70, gd: -15, pts: 41 },
    { pos: 15, club: "Sheffield Wednesday", clubSlug: "sheffield-wednesday", p: 38, w: 10, d: 10, l: 18, gf: 48, ga: 61, gd: -13, pts: 40 },
    { pos: 16, club: "Coventry City", clubSlug: "coventry-city", p: 38, w: 8, d: 14, l: 16, gf: 42, ga: 60, gd: -18, pts: 38 },
    { pos: 17, club: "Southampton", clubSlug: "southampton", p: 38, w: 9, d: 11, l: 18, gf: 34, ga: 52, gd: -18, pts: 38 },
    { pos: 18, club: "Manchester City", clubSlug: "manchester-city", p: 38, w: 9, d: 11, l: 18, gf: 33, ga: 58, gd: -25, pts: 38, zone: "relegation" },
    { pos: 19, club: "Queens Park Rangers", clubSlug: "queens-park-rangers", p: 38, w: 9, d: 6, l: 23, gf: 38, ga: 57, gd: -19, pts: 33, zone: "relegation" },
    { pos: 20, club: "Bolton Wanderers", clubSlug: "bolton-wanderers", p: 38, w: 8, d: 5, l: 25, gf: 39, ga: 71, gd: -32, pts: 29, zone: "relegation" },
  ],
  scorers: [
    { name: "Alan Shearer", playerSlug: "alan-shearer", club: "Blackburn Rovers", clubSlug: "blackburn-rovers", goals: 31, assists: 0 },
    { name: "Robbie Fowler", playerSlug: "robbie-fowler", club: "Liverpool", clubSlug: "liverpool", goals: 28, assists: 0 },
    { name: "Les Ferdinand", playerSlug: "les-ferdinand", club: "Newcastle United", clubSlug: "newcastle-united", goals: 25, assists: 0 },
    { name: "Dwight Yorke", playerSlug: "dwight-yorke", club: "Aston Villa", clubSlug: "aston-villa", goals: 17, assists: 0 },
    { name: "Teddy Sheringham", playerSlug: "teddy-sheringham", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 16, assists: 0 },
    { name: "Andrei Kanchelskis", playerSlug: "andrei-kanchelskis", club: "Everton", clubSlug: "everton", goals: 16, assists: 0 },
    { name: "Chris Armstrong", playerSlug: "chris-armstrong", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 15, assists: 0 },
    { name: "Ian Wright", playerSlug: "ian-wright", club: "Arsenal", clubSlug: "arsenal", goals: 15, assists: 0 },
    { name: "Eric Cantona", playerSlug: "eric-cantona", club: "Manchester United", clubSlug: "manchester-united", goals: 14, assists: 0 },
    { name: "Stan Collymore", playerSlug: "stan-collymore", club: "Liverpool", clubSlug: "liverpool", goals: 14, assists: 0 },
  ],
  assisters: [
    { name: "Steve McManaman", playerSlug: "steve-mcmanaman", club: "Liverpool", clubSlug: "liverpool", assists: 12 },
    { name: "Peter Beardsley", playerSlug: "peter-beardsley", club: "Newcastle United", clubSlug: "newcastle-united", assists: 10 },
    { name: "Eric Cantona", playerSlug: "eric-cantona", club: "Manchester United", clubSlug: "manchester-united", assists: 9 },
    { name: "David Ginola", playerSlug: "david-ginola", club: "Newcastle United", clubSlug: "newcastle-united", assists: 8 },
    { name: "Jason Wilcox", playerSlug: "jason-wilcox", club: "Blackburn Rovers", clubSlug: "blackburn-rovers", assists: 7 },
  ],
  cleanSheets: [
    { name: "Peter Schmeichel", playerSlug: "peter-schmeichel", club: "Manchester United", clubSlug: "manchester-united", cleanSheets: 18 },
    { name: "David James", playerSlug: "david-james", club: "Liverpool", clubSlug: "liverpool", cleanSheets: 14 },
    { name: "David Seaman", playerSlug: "david-seaman", club: "Arsenal", clubSlug: "arsenal", cleanSheets: 14 },
    { name: "Tim Flowers", playerSlug: "tim-flowers", club: "Blackburn Rovers", clubSlug: "blackburn-rovers", cleanSheets: 11 },
    { name: "Mark Bosnich", playerSlug: "mark-bosnich", club: "Aston Villa", clubSlug: "aston-villa", cleanSheets: 11 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Les Ferdinand", playerSlug: "les-ferdinand" },
    { title: "Young Player of the Season", winner: "Robbie Fowler", playerSlug: "robbie-fowler" },
    { title: "Golden Boot", winner: "Alan Shearer", playerSlug: "alan-shearer" },
  ],
  relegated: ["Manchester City", "Queens Park Rangers", "Bolton Wanderers"],
  promoted: ["Sunderland", "Derby County", "Leicester City"],
  narrative: `The 1995-96 season produced arguably the most memorable title race in Premier League history, as Manchester United overhauled a 12-point deficit to snatch the championship from Newcastle United in one of the great sporting collapses. The first season with 20 teams and 38 matches delivered drama that would define the Premier League for generations.

Newcastle United, under Kevin Keegan, played breathtaking attacking football and built a commanding lead that stood at 12 points in January. With Philippe Albert, David Ginola, Les Ferdinand and Peter Beardsley creating havoc, the Magpies seemed unstoppable. But Manchester United, inspired by the returning Eric Cantona after his eight-month ban, launched a relentless charge. Cantona's goal at Newcastle in March cut the gap to a single point, and United never looked back.

The defining moment came on 29 April when Keegan's infamous live television outburst  -  "I would love it if we beat them"  -  encapsulated the pressure that had engulfed Newcastle. United sealed the title on the final day with a 3-0 win over Middlesbrough, while Newcastle could only draw 1-1 with Tottenham. The four-point margin at the finish belied the extraordinary narrative of the season.

Alan Shearer won the Golden Boot for a third consecutive season with 31 goals for Blackburn, even as the reigning champions slumped to seventh  -  the lowest finish by a defending champion at that time. Robbie Fowler scored 28 goals for Liverpool, earning the PFA Young Player of the Year award for the second consecutive year. Les Ferdinand's 25 goals and commanding performances for Newcastle earned him the PFA Player of the Year award.

Liverpool finished a strong third under Roy Evans, with the thrilling 4-3 victory over Newcastle at Anfield in April regarded as one of the greatest Premier League matches ever played. Stan Collymore's last-minute winner sealed a pulsating encounter that many believe effectively ended Newcastle's title challenge.

Manchester United went on to complete a second league and FA Cup double, with Cantona's volley in the final sealing a 1-0 win over Liverpool. At the bottom, Manchester City were relegated on goal difference, QPR went down after 13 years in the top flight, and Bolton returned to Division One after just one Premier League season. Dennis Bergkamp arrived at Arsenal but the Gunners never mounted a serious title challenge, finishing fifth.

The 1995-96 season remains etched in Premier League folklore  -  a story of nerve, drama, and the most dramatic title race the competition had ever seen.`,
  notableMoments: [
    "Manchester United overturned a 12-point deficit to win the title ahead of Newcastle United",
    "Kevin Keegan's 'I would love it if we beat them' rant became one of football's most iconic moments",
    "Liverpool 4-3 Newcastle in April is widely regarded as one of the greatest Premier League matches ever",
    "Manchester United completed their second league and FA Cup double in three seasons",
    "Manchester City were relegated on goal difference, beginning a turbulent period for the club",
  ],
  metaTitle: "Premier League 1995-96 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 1995-96 Premier League season. Final standings, top goalscorers, assists, player awards and a complete season recap.",
};

export default data;
