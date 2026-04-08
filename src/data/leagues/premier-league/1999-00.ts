import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "1999-00",
  seasonDisplay: "1999-00",
  champion: "Manchester United",
  championSlug: "manchester-united",
  topScorer: "Kevin Phillips",
  topScorerGoals: 30,
  totalGoals: 1060,
  standings: [
    { pos: 1, club: "Manchester United", clubSlug: "manchester-united", p: 38, w: 28, d: 7, l: 3, gf: 97, ga: 45, gd: 52, pts: 91, zone: "cl" },
    { pos: 2, club: "Arsenal", clubSlug: "arsenal", p: 38, w: 22, d: 7, l: 9, gf: 73, ga: 43, gd: 30, pts: 73, zone: "cl" },
    { pos: 3, club: "Leeds United", clubSlug: "leeds-united", p: 38, w: 21, d: 6, l: 11, gf: 58, ga: 43, gd: 15, pts: 69, zone: "cl" },
    { pos: 4, club: "Liverpool", clubSlug: "liverpool", p: 38, w: 19, d: 10, l: 9, gf: 51, ga: 30, gd: 21, pts: 67, zone: "el" },
    { pos: 5, club: "Chelsea", clubSlug: "chelsea", p: 38, w: 18, d: 11, l: 9, gf: 53, ga: 34, gd: 19, pts: 65, zone: "el" },
    { pos: 6, club: "Aston Villa", clubSlug: "aston-villa", p: 38, w: 15, d: 13, l: 10, gf: 46, ga: 35, gd: 11, pts: 58 },
    { pos: 7, club: "Sunderland", clubSlug: "sunderland", p: 38, w: 16, d: 10, l: 12, gf: 57, ga: 56, gd: 1, pts: 58 },
    { pos: 8, club: "Leicester City", clubSlug: "leicester-city", p: 38, w: 16, d: 7, l: 15, gf: 55, ga: 55, gd: 0, pts: 55 },
    { pos: 9, club: "West Ham United", clubSlug: "west-ham-united", p: 38, w: 15, d: 10, l: 13, gf: 52, ga: 53, gd: -1, pts: 55 },
    { pos: 10, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 38, w: 15, d: 8, l: 15, gf: 57, ga: 49, gd: 8, pts: 53 },
    { pos: 11, club: "Newcastle United", clubSlug: "newcastle-united", p: 38, w: 14, d: 10, l: 14, gf: 63, ga: 54, gd: 9, pts: 52 },
    { pos: 12, club: "Middlesbrough", clubSlug: "middlesbrough", p: 38, w: 14, d: 10, l: 14, gf: 46, ga: 52, gd: -6, pts: 52 },
    { pos: 13, club: "Everton", clubSlug: "everton", p: 38, w: 12, d: 14, l: 12, gf: 59, ga: 49, gd: 10, pts: 50 },
    { pos: 14, club: "Coventry City", clubSlug: "coventry-city", p: 38, w: 12, d: 8, l: 18, gf: 47, ga: 54, gd: -7, pts: 44 },
    { pos: 15, club: "Southampton", clubSlug: "southampton", p: 38, w: 12, d: 8, l: 18, gf: 45, ga: 62, gd: -17, pts: 44 },
    { pos: 16, club: "Derby County", clubSlug: "derby-county", p: 38, w: 9, d: 11, l: 18, gf: 44, ga: 57, gd: -13, pts: 38 },
    { pos: 17, club: "Bradford City", clubSlug: "bradford-city", p: 38, w: 9, d: 9, l: 20, gf: 38, ga: 68, gd: -30, pts: 36 },
    { pos: 18, club: "Wimbledon", clubSlug: "wimbledon", p: 38, w: 7, d: 12, l: 19, gf: 46, ga: 74, gd: -28, pts: 33, zone: "relegation" },
    { pos: 19, club: "Sheffield Wednesday", clubSlug: "sheffield-wednesday", p: 38, w: 8, d: 7, l: 23, gf: 38, ga: 70, gd: -32, pts: 31, zone: "relegation" },
    { pos: 20, club: "Watford", clubSlug: "watford", p: 38, w: 6, d: 6, l: 26, gf: 35, ga: 77, gd: -42, pts: 24, zone: "relegation" },
  ],
  scorers: [
    { name: "Kevin Phillips", playerSlug: "kevin-phillips", club: "Sunderland", clubSlug: "sunderland", goals: 30, assists: 4 },
    { name: "Alan Shearer", playerSlug: "alan-shearer", club: "Newcastle United", clubSlug: "newcastle-united", goals: 23, assists: 3 },
    { name: "Dwight Yorke", playerSlug: "dwight-yorke", club: "Manchester United", clubSlug: "manchester-united", goals: 20, assists: 6 },
    { name: "Michael Bridges", playerSlug: "michael-bridges", club: "Leeds United", clubSlug: "leeds-united", goals: 19, assists: 5 },
    { name: "Andy Cole", playerSlug: "andy-cole", club: "Manchester United", clubSlug: "manchester-united", goals: 19, assists: 7 },
    { name: "Thierry Henry", playerSlug: "thierry-henry", club: "Arsenal", clubSlug: "arsenal", goals: 17, assists: 7 },
    { name: "Paolo Di Canio", playerSlug: "paolo-di-canio", club: "West Ham United", clubSlug: "west-ham-united", goals: 16, assists: 5 },
    { name: "Chris Armstrong", playerSlug: "chris-armstrong", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 14, assists: 3 },
    { name: "Steffen Iversen", playerSlug: "steffen-iversen", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 14, assists: 3 },
    { name: "Niall Quinn", playerSlug: "niall-quinn", club: "Sunderland", clubSlug: "sunderland", goals: 14, assists: 6 },
  ],
  assisters: [
    { name: "David Beckham", playerSlug: "david-beckham", club: "Manchester United", clubSlug: "manchester-united", assists: 11 },
    { name: "Andy Cole", playerSlug: "andy-cole", club: "Manchester United", clubSlug: "manchester-united", assists: 7 },
    { name: "Thierry Henry", playerSlug: "thierry-henry", club: "Arsenal", clubSlug: "arsenal", assists: 7 },
    { name: "Niall Quinn", playerSlug: "niall-quinn", club: "Sunderland", clubSlug: "sunderland", assists: 6 },
    { name: "Dwight Yorke", playerSlug: "dwight-yorke", club: "Manchester United", clubSlug: "manchester-united", assists: 6 },
  ],
  cleanSheets: [
    { name: "Ed de Goey", playerSlug: "ed-de-goey", club: "Chelsea", clubSlug: "chelsea", cleanSheets: 16 },
    { name: "David Seaman", playerSlug: "david-seaman", club: "Arsenal", clubSlug: "arsenal", cleanSheets: 14 },
    { name: "Nigel Martyn", playerSlug: "nigel-martyn", club: "Leeds United", clubSlug: "leeds-united", cleanSheets: 13 },
    { name: "Mark Bosnich", playerSlug: "mark-bosnich", club: "Manchester United", clubSlug: "manchester-united", cleanSheets: 11 },
    { name: "Sander Westerveld", playerSlug: "sander-westerveld", club: "Liverpool", clubSlug: "liverpool", cleanSheets: 11 },
  ],
  awards: [
    { title: "PFA Player of the Year", winner: "Roy Keane", playerSlug: "roy-keane" },
    { title: "PFA Young Player of the Year", winner: "Harry Kewell", playerSlug: "harry-kewell" },
    { title: "FWA Footballer of the Year", winner: "Roy Keane", playerSlug: "roy-keane" },
    { title: "Manager of the Season", winner: "Alex Ferguson" },
  ],
  relegated: ["Wimbledon", "Sheffield Wednesday", "Watford"],
  promoted: ["Charlton Athletic", "Manchester City", "Ipswich Town"],
  narrative: `Manchester United romped to their second consecutive Premier League title in 1999-2000, this time by a dominant 18-point margin. Where the previous season's title had been won on the final day by a single point, there was no such drama this time as Sir Alex Ferguson's side proved far too strong for the rest.

United lost only three league games all season, the same number as their Treble campaign, and amassed an impressive 91 points with 97 goals scored. The attacking firepower of Dwight Yorke, Andy Cole, Ole Gunnar Solskjaer and Teddy Sheringham ensured goals were never in short supply, while Roy Keane was the driving force in midfield, earning both the PFA and FWA Player of the Year awards for his commanding displays.

The season's standout individual performance came from Kevin Phillips of Sunderland, who scored a remarkable 30 Premier League goals -- a tally unmatched by an Englishman in the modern era at that point. Phillips formed a lethal partnership with Niall Quinn as newly promoted Sunderland exceeded all expectations, finishing seventh in their first season back. Phillips later became the only Englishman to win the European Golden Shoe.

Arsenal finished second, 18 points adrift, as Arsène Wenger's side adjusted to life after the departures of Nicolas Anelka and key members of the famous back four. Thierry Henry, signed from Juventus, showed flashes of the brilliance that would define his Arsenal career, scoring 17 goals in his debut Premier League season.

Leeds United continued their remarkable rise under David O'Leary, finishing third and qualifying for the Champions League. The youthful squad featuring Harry Kewell, Jonathan Woodgate, Lee Bowyer and Michael Bridges looked set for sustained success. Liverpool finished fourth despite an inconsistent campaign, missing out on the Champions League after a shock final-day defeat at Bradford City.

Bradford City's survival on the last day was one of the season's great stories. The newly promoted club, in the top flight for the first time since 1922, secured their Premier League status with a 1-0 win over Liverpool, condemning Wimbledon to relegation after 14 years in the top division. Sheffield Wednesday also went down after a dismal campaign that included an 8-0 thrashing at Newcastle. Watford finished bottom with just 24 points.

Chelsea won the FA Cup under Gianluca Vialli, the last final at the old Wembley, and also finished fifth in the league. Paolo Di Canio lit up the season with sublime skill at West Ham, including a stunning scissor-kick volley against Wimbledon that became one of the Premier League's most iconic goals.

The season saw a significant increase in goals, with 1,060 scored across the campaign, and marked the beginning of a period of overwhelming Manchester United dominance.`,
  notableMoments: [
    "Kevin Phillips scored 30 goals for promoted Sunderland, winning the European Golden Shoe",
    "Manchester United won the title by a dominant 18-point margin with 91 points",
    "Bradford City survived on the last day with a win over Liverpool",
    "Wimbledon were relegated after 14 years of top-flight football",
    "Paolo Di Canio's scissor-kick volley against Wimbledon became an iconic Premier League moment",
  ],
  metaTitle: "Premier League 1999-00 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 1999-00 Premier League season. Man Utd champions, Kevin Phillips' 30 goals, final standings, top scorers, assists and a complete season recap.",
};

export default data;
