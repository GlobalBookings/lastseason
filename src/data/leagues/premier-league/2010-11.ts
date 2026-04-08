import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "2010-11",
  seasonDisplay: "2010-11",
  champion: "Manchester United",
  championSlug: "manchester-united",
  topScorer: "Dimitar Berbatov",
  topScorerGoals: 20,
  totalGoals: 1063,
  standings: [
    { pos: 1, club: "Manchester United", clubSlug: "manchester-united", p: 38, w: 23, d: 11, l: 4, gf: 78, ga: 37, gd: 41, pts: 80, zone: "cl" },
    { pos: 2, club: "Chelsea", clubSlug: "chelsea", p: 38, w: 21, d: 8, l: 9, gf: 69, ga: 33, gd: 36, pts: 71, zone: "cl" },
    { pos: 3, club: "Manchester City", clubSlug: "manchester-city", p: 38, w: 21, d: 8, l: 9, gf: 60, ga: 33, gd: 27, pts: 71, zone: "cl" },
    { pos: 4, club: "Arsenal", clubSlug: "arsenal", p: 38, w: 19, d: 11, l: 8, gf: 72, ga: 43, gd: 29, pts: 68, zone: "cl" },
    { pos: 5, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 38, w: 16, d: 14, l: 8, gf: 55, ga: 46, gd: 9, pts: 62, zone: "el" },
    { pos: 6, club: "Liverpool", clubSlug: "liverpool", p: 38, w: 17, d: 7, l: 14, gf: 59, ga: 44, gd: 15, pts: 58 },
    { pos: 7, club: "Everton", clubSlug: "everton", p: 38, w: 13, d: 15, l: 10, gf: 51, ga: 45, gd: 6, pts: 54 },
    { pos: 8, club: "Fulham", clubSlug: "fulham", p: 38, w: 11, d: 16, l: 11, gf: 49, ga: 43, gd: 6, pts: 49, zone: "el" },
    { pos: 9, club: "Aston Villa", clubSlug: "aston-villa", p: 38, w: 12, d: 12, l: 14, gf: 48, ga: 59, gd: -11, pts: 48 },
    { pos: 10, club: "Sunderland", clubSlug: "sunderland", p: 38, w: 12, d: 11, l: 15, gf: 45, ga: 56, gd: -11, pts: 47 },
    { pos: 11, club: "West Bromwich Albion", clubSlug: "west-bromwich-albion", p: 38, w: 12, d: 11, l: 15, gf: 56, ga: 71, gd: -15, pts: 47 },
    { pos: 12, club: "Newcastle United", clubSlug: "newcastle-united", p: 38, w: 11, d: 13, l: 14, gf: 56, ga: 57, gd: -1, pts: 46 },
    { pos: 13, club: "Stoke City", clubSlug: "stoke-city", p: 38, w: 13, d: 7, l: 18, gf: 46, ga: 48, gd: -2, pts: 46, zone: "el" },
    { pos: 14, club: "Bolton Wanderers", clubSlug: "bolton-wanderers", p: 38, w: 12, d: 10, l: 16, gf: 52, ga: 56, gd: -4, pts: 46 },
    { pos: 15, club: "Blackburn Rovers", clubSlug: "blackburn-rovers", p: 38, w: 11, d: 10, l: 17, gf: 46, ga: 59, gd: -13, pts: 43 },
    { pos: 16, club: "Wigan Athletic", clubSlug: "wigan-athletic", p: 38, w: 9, d: 15, l: 14, gf: 40, ga: 61, gd: -21, pts: 42 },
    { pos: 17, club: "Wolverhampton Wanderers", clubSlug: "wolves", p: 38, w: 11, d: 7, l: 20, gf: 46, ga: 66, gd: -20, pts: 40 },
    { pos: 18, club: "Birmingham City", clubSlug: "birmingham-city", p: 38, w: 8, d: 15, l: 15, gf: 37, ga: 58, gd: -21, pts: 39, zone: "relegation" },
    { pos: 19, club: "Blackpool", clubSlug: "blackpool", p: 38, w: 10, d: 9, l: 19, gf: 55, ga: 78, gd: -23, pts: 39, zone: "relegation" },
    { pos: 20, club: "West Ham United", clubSlug: "west-ham-united", p: 38, w: 7, d: 12, l: 19, gf: 43, ga: 70, gd: -27, pts: 33, zone: "relegation" },
  ],
  scorers: [
    { name: "Dimitar Berbatov", playerSlug: "dimitar-berbatov", club: "Manchester United", clubSlug: "manchester-united", goals: 20, assists: 3 },
    { name: "Carlos Tevez", playerSlug: "carlos-tevez", club: "Manchester City", clubSlug: "manchester-city", goals: 20, assists: 5 },
    { name: "Robin van Persie", playerSlug: "robin-van-persie", club: "Arsenal", clubSlug: "arsenal", goals: 18, assists: 6 },
    { name: "Darren Bent", playerSlug: "darren-bent", club: "Sunderland", clubSlug: "sunderland", goals: 17, assists: 1 },
    { name: "Peter Odemwingie", playerSlug: "peter-odemwingie", club: "West Bromwich Albion", clubSlug: "west-bromwich-albion", goals: 15, assists: 3 },
    { name: "DJ Campbell", playerSlug: "dj-campbell", club: "Blackpool", clubSlug: "blackpool", goals: 13, assists: 3 },
    { name: "Andy Carroll", playerSlug: "andy-carroll", club: "Newcastle United", clubSlug: "newcastle-united", goals: 13, assists: 2 },
    { name: "Javier Hernandez", playerSlug: "javier-hernandez", club: "Manchester United", clubSlug: "manchester-united", goals: 13, assists: 2 },
    { name: "Dirk Kuyt", playerSlug: "dirk-kuyt", club: "Liverpool", clubSlug: "liverpool", goals: 13, assists: 6 },
    { name: "Rafael van der Vaart", playerSlug: "rafael-van-der-vaart", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 13, assists: 5 },
  ],
  assisters: [
    { name: "Nani", playerSlug: "nani", club: "Manchester United", clubSlug: "manchester-united", assists: 14 },
    { name: "Cesc Fabregas", playerSlug: "cesc-fabregas", club: "Arsenal", clubSlug: "arsenal", assists: 11 },
    { name: "David Silva", playerSlug: "david-silva", club: "Manchester City", clubSlug: "manchester-city", assists: 10 },
    { name: "Leighton Baines", playerSlug: "leighton-baines", club: "Everton", clubSlug: "everton", assists: 8 },
    { name: "Stewart Downing", playerSlug: "stewart-downing", club: "Aston Villa", clubSlug: "aston-villa", assists: 8 },
  ],
  cleanSheets: [
    { name: "Joe Hart", playerSlug: "joe-hart", club: "Manchester City", clubSlug: "manchester-city", cleanSheets: 18 },
    { name: "Edwin van der Sar", playerSlug: "edwin-van-der-sar", club: "Manchester United", clubSlug: "manchester-united", cleanSheets: 13 },
    { name: "Petr Cech", playerSlug: "petr-cech", club: "Chelsea", clubSlug: "chelsea", cleanSheets: 12 },
    { name: "Pepe Reina", playerSlug: "pepe-reina", club: "Liverpool", clubSlug: "liverpool", cleanSheets: 11 },
    { name: "Heurelho Gomes", playerSlug: "heurelho-gomes", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", cleanSheets: 9 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Gareth Bale", playerSlug: "gareth-bale" },
    { title: "Young Player of the Season", winner: "Jack Wilshere", playerSlug: "jack-wilshere" },
    { title: "Golden Glove", winner: "Joe Hart", playerSlug: "joe-hart" },
    { title: "Manager of the Season", winner: "Sir Alex Ferguson" },
  ],
  relegated: ["Birmingham City", "Blackpool", "West Ham United"],
  promoted: ["Queens Park Rangers", "Norwich City", "Swansea City"],
  narrative: `Manchester United clinched a record nineteenth English league title in 2010-11, finishing on 80 points to pull clear of Chelsea and Manchester City, both on 71. For Sir Alex Ferguson, it was a twelfth Premier League crown and the achievement that finally broke Liverpool's longstanding record of eighteen league championships.

The title was secured with a 1-1 draw at Blackburn Rovers in May, sparking celebrations tinged with historical significance. Ferguson had built yet another title-winning squad, blending the experience of Ryan Giggs and Edwin van der Sar with the youthful energy of Javier Hernandez and Nani. Dimitar Berbatov shared the Golden Boot with Manchester City's Carlos Tevez, both finishing on 20 goals. Berbatov's five-goal haul against Blackburn in November was one of the most memorable individual displays of the season.

Chelsea, the defending champions, finished second under Carlo Ancelotti, though their 71 points marked a significant drop from the previous year's total of 86. Manchester City matched them on points but finished third on goal difference, signalling their growing ambition under Roberto Mancini. City's arrival in the Champions League places for the first time confirmed the shift in the Premier League's power dynamics, with the traditional Big Four becoming a Big Five.

Arsenal endured a frustrating campaign, finishing fourth on 68 points after a title challenge collapsed in February and March. A humiliating League Cup final defeat to Birmingham City, who scored a dramatic last-minute winner through Obafemi Martins, encapsulated their difficulties. Tottenham Hotspur had a thrilling campaign that included memorable Champions League nights, with Gareth Bale's performances against Inter Milan at the San Siro establishing him as a world-class talent.

Bale was named PFA Player of the Year following a season of breathtaking performances from left wing. His pace, power and finishing ability terrorised defences across the league. Jack Wilshere, the teenage Arsenal midfielder, won the Young Player of the Year after displaying remarkable maturity and passing ability in his breakthrough campaign.

Liverpool's season was one of upheaval. Roy Hodgson was sacked in January with the club languishing near the bottom half, and Kenny Dalglish returned to steady the ship. The January signing of Luis Suarez from Ajax and Andy Carroll from Newcastle for a combined 57 million pounds transformed their attack, and they finished sixth on 58 points.

At the bottom, Blackpool provided the season's most entertaining subplot. The Seasiders, newly promoted and playing with flair under Ian Holloway, scored 55 goals but conceded 78, ultimately going down alongside Birmingham City and West Ham United. Their open, attacking style won admirers across the country. West Ham were the first to be relegated, while Birmingham went down on a dramatic final day despite having won the League Cup.`,
  notableMoments: [
    "Manchester United won a record nineteenth English league title, surpassing Liverpool",
    "Gareth Bale announced himself as a world-class talent with stunning Champions League displays against Inter Milan",
    "Dimitar Berbatov scored five goals in one match against Blackburn Rovers",
    "Birmingham City won the League Cup but were relegated in the same season",
    "Blackpool's entertaining debut Premier League season ended in relegation despite scoring 55 goals",
  ],
  metaTitle: "Premier League 2010-11 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2010-11 Premier League season. Final standings, top goalscorers, assists, player awards and a complete season recap.",
};

export default data;
