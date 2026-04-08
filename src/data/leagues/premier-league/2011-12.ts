import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "2011-12",
  seasonDisplay: "2011-12",
  champion: "Manchester City",
  championSlug: "manchester-city",
  topScorer: "Robin van Persie",
  topScorerGoals: 30,
  totalGoals: 1066,
  standings: [
    { pos: 1, club: "Manchester City", clubSlug: "manchester-city", p: 38, w: 28, d: 5, l: 5, gf: 93, ga: 29, gd: 64, pts: 89, zone: "cl" },
    { pos: 2, club: "Manchester United", clubSlug: "manchester-united", p: 38, w: 28, d: 5, l: 5, gf: 89, ga: 33, gd: 56, pts: 89, zone: "cl" },
    { pos: 3, club: "Arsenal", clubSlug: "arsenal", p: 38, w: 21, d: 7, l: 10, gf: 74, ga: 49, gd: 25, pts: 70, zone: "cl" },
    { pos: 4, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 38, w: 20, d: 9, l: 9, gf: 66, ga: 41, gd: 25, pts: 69, zone: "el" },
    { pos: 5, club: "Newcastle United", clubSlug: "newcastle-united", p: 38, w: 19, d: 8, l: 11, gf: 56, ga: 51, gd: 5, pts: 65, zone: "el" },
    { pos: 6, club: "Chelsea", clubSlug: "chelsea", p: 38, w: 18, d: 10, l: 10, gf: 65, ga: 46, gd: 19, pts: 64, zone: "cl" },
    { pos: 7, club: "Everton", clubSlug: "everton", p: 38, w: 15, d: 11, l: 12, gf: 50, ga: 40, gd: 10, pts: 56 },
    { pos: 8, club: "Liverpool", clubSlug: "liverpool", p: 38, w: 14, d: 10, l: 14, gf: 47, ga: 40, gd: 7, pts: 52, zone: "el" },
    { pos: 9, club: "Fulham", clubSlug: "fulham", p: 38, w: 14, d: 10, l: 14, gf: 48, ga: 51, gd: -3, pts: 52 },
    { pos: 10, club: "West Bromwich Albion", clubSlug: "west-bromwich-albion", p: 38, w: 13, d: 8, l: 17, gf: 45, ga: 52, gd: -7, pts: 47 },
    { pos: 11, club: "Swansea City", clubSlug: "swansea-city", p: 38, w: 12, d: 11, l: 15, gf: 44, ga: 51, gd: -7, pts: 47 },
    { pos: 12, club: "Norwich City", clubSlug: "norwich-city", p: 38, w: 12, d: 11, l: 15, gf: 52, ga: 66, gd: -14, pts: 47 },
    { pos: 13, club: "Sunderland", clubSlug: "sunderland", p: 38, w: 11, d: 12, l: 15, gf: 45, ga: 46, gd: -1, pts: 45 },
    { pos: 14, club: "Stoke City", clubSlug: "stoke-city", p: 38, w: 11, d: 12, l: 15, gf: 36, ga: 53, gd: -17, pts: 45 },
    { pos: 15, club: "Wigan Athletic", clubSlug: "wigan-athletic", p: 38, w: 11, d: 10, l: 17, gf: 42, ga: 62, gd: -20, pts: 43 },
    { pos: 16, club: "Aston Villa", clubSlug: "aston-villa", p: 38, w: 7, d: 17, l: 14, gf: 37, ga: 53, gd: -16, pts: 38 },
    { pos: 17, club: "Queens Park Rangers", clubSlug: "queens-park-rangers", p: 38, w: 10, d: 7, l: 21, gf: 43, ga: 66, gd: -23, pts: 37 },
    { pos: 18, club: "Bolton Wanderers", clubSlug: "bolton-wanderers", p: 38, w: 10, d: 6, l: 22, gf: 46, ga: 77, gd: -31, pts: 36, zone: "relegation" },
    { pos: 19, club: "Blackburn Rovers", clubSlug: "blackburn-rovers", p: 38, w: 8, d: 7, l: 23, gf: 48, ga: 78, gd: -30, pts: 31, zone: "relegation" },
    { pos: 20, club: "Wolverhampton Wanderers", clubSlug: "wolves", p: 38, w: 5, d: 10, l: 23, gf: 40, ga: 82, gd: -42, pts: 25, zone: "relegation" },
  ],
  scorers: [
    { name: "Robin van Persie", playerSlug: "robin-van-persie", club: "Arsenal", clubSlug: "arsenal", goals: 30, assists: 11 },
    { name: "Wayne Rooney", playerSlug: "wayne-rooney", club: "Manchester United", clubSlug: "manchester-united", goals: 27, assists: 8 },
    { name: "Sergio Aguero", playerSlug: "sergio-aguero", club: "Manchester City", clubSlug: "manchester-city", goals: 23, assists: 7 },
    { name: "Clint Dempsey", playerSlug: "clint-dempsey", club: "Fulham", clubSlug: "fulham", goals: 17, assists: 5 },
    { name: "Emmanuel Adebayor", playerSlug: "emmanuel-adebayor", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 17, assists: 4 },
    { name: "Yakubu", playerSlug: "yakubu", club: "Blackburn Rovers", clubSlug: "blackburn-rovers", goals: 17, assists: 2 },
    { name: "Demba Ba", playerSlug: "demba-ba", club: "Newcastle United", clubSlug: "newcastle-united", goals: 16, assists: 2 },
    { name: "Grant Holt", playerSlug: "grant-holt", club: "Norwich City", clubSlug: "norwich-city", goals: 15, assists: 5 },
    { name: "Edin Dzeko", playerSlug: "edin-dzeko", club: "Manchester City", clubSlug: "manchester-city", goals: 14, assists: 3 },
    { name: "Mario Balotelli", playerSlug: "mario-balotelli", club: "Manchester City", clubSlug: "manchester-city", goals: 13, assists: 3 },
  ],
  assisters: [
    { name: "David Silva", playerSlug: "david-silva", club: "Manchester City", clubSlug: "manchester-city", assists: 15 },
    { name: "Juan Mata", playerSlug: "juan-mata", club: "Chelsea", clubSlug: "chelsea", assists: 13 },
    { name: "Robin van Persie", playerSlug: "robin-van-persie", club: "Arsenal", clubSlug: "arsenal", assists: 11 },
    { name: "Gareth Bale", playerSlug: "gareth-bale", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", assists: 9 },
    { name: "Wayne Rooney", playerSlug: "wayne-rooney", club: "Manchester United", clubSlug: "manchester-united", assists: 8 },
  ],
  cleanSheets: [
    { name: "Joe Hart", playerSlug: "joe-hart", club: "Manchester City", clubSlug: "manchester-city", cleanSheets: 17 },
    { name: "Tim Howard", playerSlug: "tim-howard", club: "Everton", clubSlug: "everton", cleanSheets: 12 },
    { name: "Petr Cech", playerSlug: "petr-cech", club: "Chelsea", clubSlug: "chelsea", cleanSheets: 11 },
    { name: "David de Gea", playerSlug: "david-de-gea", club: "Manchester United", clubSlug: "manchester-united", cleanSheets: 10 },
    { name: "Brad Friedel", playerSlug: "brad-friedel", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", cleanSheets: 9 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Robin van Persie", playerSlug: "robin-van-persie" },
    { title: "Young Player of the Season", winner: "Kyle Walker", playerSlug: "kyle-walker" },
    { title: "Golden Glove", winner: "Joe Hart", playerSlug: "joe-hart" },
    { title: "Manager of the Season", winner: "Alan Pardew" },
  ],
  relegated: ["Bolton Wanderers", "Blackburn Rovers", "Wolverhampton Wanderers"],
  promoted: ["Reading", "Southampton", "West Ham United"],
  narrative: `The 2011-12 Premier League season will forever be remembered for one moment: Sergio Aguero's stoppage-time goal against Queens Park Rangers on the final day, which clinched Manchester City's first league title in 44 years in the most dramatic fashion imaginable. City finished level on 89 points with Manchester United, but their superior goal difference of +64 compared to United's +56 made them champions.

The finale was the most extraordinary in English football history. Going into the last day, City were top by goal difference alone. At the Etihad Stadium, QPR took a 2-1 lead, and with Manchester United winning 1-0 at Sunderland, the title appeared to be heading to Old Trafford. Then, in stoppage time, Edin Dzeko headed home to make it 2-2 in the 92nd minute. Moments later, Mario Balotelli found Aguero on the edge of the area, and the Argentine drove forward before unleashing a shot past Paddy Kenny. Martin Tyler's commentary -- "AGUEROOOO!" -- became the defining call of Premier League history.

The season had been a battle between the two Manchester clubs from start to finish. City had established an eight-point lead by early April following their stunning 1-6 demolition of United at Old Trafford in October, with Balotelli and Dzeko running riot. But City's form wobbled, and United clawed back to lead the table with six games remaining. A pivotal 1-0 City victory in the Manchester derby at the Etihad in April, with a Vincent Kompany header, set up the dramatic finale.

Robin van Persie was the individual star of the campaign, scoring 30 Premier League goals for Arsenal to win the Golden Boot and PFA Player of the Year award. His goals were the primary reason Arsenal recovered from a disastrous start, which included an 8-2 humiliation at Old Trafford in August, to finish third on 70 points.

Newcastle United had a remarkable season under Alan Pardew, finishing fifth on 65 points with signings like Demba Ba and Papiss Cisse proving inspired. Pardew was named Manager of the Season for transforming the Magpies. Chelsea finished sixth but won the Champions League, beating Bayern Munich on penalties in the final in one of the great underdog stories in European football.

David Silva was the creative heartbeat of City's title win, providing 15 assists with his mesmerising passing and movement. Joe Hart won his second consecutive Golden Glove with 17 clean sheets, forming the backbone of City's defensive solidity.

At the bottom, Wolverhampton Wanderers were relegated first, followed by Blackburn Rovers. Bolton Wanderers went down on the final day after failing to beat Stoke City, while QPR survived despite their defeat at City. All three promoted clubs -- Swansea, Norwich and QPR -- stayed up for the first time since 2001-02. The season was voted the greatest in Premier League history at the 20 Seasons Awards.`,
  notableMoments: [
    "Sergio Aguero's 94th-minute goal against QPR won Manchester City their first title in 44 years",
    "Manchester City and Manchester United finished level on 89 points, with City winning on goal difference",
    "Manchester United 8-2 Arsenal in August was the most shocking result of the season",
    "Manchester City won 6-1 at Old Trafford in October in one of the greatest derby performances ever",
    "Chelsea won the Champions League despite finishing sixth in the Premier League",
  ],
  metaTitle: "Premier League 2011-12 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2011-12 Premier League season. Final standings, top goalscorers, assists, player awards and a complete season recap.",
};

export default data;
