import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "2005-06",
  seasonDisplay: "2005-06",
  champion: "Chelsea",
  championSlug: "chelsea",
  topScorer: "Thierry Henry",
  topScorerGoals: 27,
  totalGoals: 944,
  standings: [
    { pos: 1, club: "Chelsea", clubSlug: "chelsea", p: 38, w: 29, d: 4, l: 5, gf: 72, ga: 22, gd: 50, pts: 91, zone: "cl" },
    { pos: 2, club: "Manchester United", clubSlug: "manchester-united", p: 38, w: 25, d: 8, l: 5, gf: 72, ga: 34, gd: 38, pts: 83, zone: "cl" },
    { pos: 3, club: "Liverpool", clubSlug: "liverpool", p: 38, w: 25, d: 7, l: 6, gf: 57, ga: 25, gd: 32, pts: 82, zone: "cl" },
    { pos: 4, club: "Arsenal", clubSlug: "arsenal", p: 38, w: 20, d: 7, l: 11, gf: 68, ga: 31, gd: 37, pts: 67, zone: "cl" },
    { pos: 5, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 38, w: 18, d: 11, l: 9, gf: 53, ga: 38, gd: 15, pts: 65, zone: "el" },
    { pos: 6, club: "Blackburn Rovers", clubSlug: "blackburn-rovers", p: 38, w: 19, d: 6, l: 13, gf: 51, ga: 42, gd: 9, pts: 63 },
    { pos: 7, club: "Newcastle United", clubSlug: "newcastle-united", p: 38, w: 17, d: 7, l: 14, gf: 47, ga: 42, gd: 5, pts: 58 },
    { pos: 8, club: "Bolton Wanderers", clubSlug: "bolton-wanderers", p: 38, w: 15, d: 11, l: 12, gf: 49, ga: 41, gd: 8, pts: 56 },
    { pos: 9, club: "West Ham United", clubSlug: "west-ham-united", p: 38, w: 16, d: 7, l: 15, gf: 52, ga: 55, gd: -3, pts: 55 },
    { pos: 10, club: "Wigan Athletic", clubSlug: "wigan-athletic", p: 38, w: 15, d: 6, l: 17, gf: 45, ga: 52, gd: -7, pts: 51 },
    { pos: 11, club: "Everton", clubSlug: "everton", p: 38, w: 14, d: 8, l: 16, gf: 34, ga: 49, gd: -15, pts: 50 },
    { pos: 12, club: "Fulham", clubSlug: "fulham", p: 38, w: 14, d: 6, l: 18, gf: 48, ga: 58, gd: -10, pts: 48 },
    { pos: 13, club: "Charlton Athletic", clubSlug: "charlton-athletic", p: 38, w: 13, d: 8, l: 17, gf: 41, ga: 55, gd: -14, pts: 47 },
    { pos: 14, club: "Middlesbrough", clubSlug: "middlesbrough", p: 38, w: 12, d: 9, l: 17, gf: 48, ga: 58, gd: -10, pts: 45 },
    { pos: 15, club: "Manchester City", clubSlug: "manchester-city", p: 38, w: 13, d: 4, l: 21, gf: 43, ga: 48, gd: -5, pts: 43 },
    { pos: 16, club: "Aston Villa", clubSlug: "aston-villa", p: 38, w: 10, d: 12, l: 16, gf: 42, ga: 55, gd: -13, pts: 42 },
    { pos: 17, club: "Portsmouth", clubSlug: "portsmouth", p: 38, w: 10, d: 8, l: 20, gf: 37, ga: 62, gd: -25, pts: 38 },
    { pos: 18, club: "Birmingham City", clubSlug: "birmingham-city", p: 38, w: 8, d: 10, l: 20, gf: 28, ga: 50, gd: -22, pts: 34, zone: "relegation" },
    { pos: 19, club: "West Bromwich Albion", clubSlug: "west-bromwich-albion", p: 38, w: 7, d: 9, l: 22, gf: 31, ga: 58, gd: -27, pts: 30, zone: "relegation" },
    { pos: 20, club: "Sunderland", clubSlug: "sunderland", p: 38, w: 3, d: 6, l: 29, gf: 26, ga: 69, gd: -43, pts: 15, zone: "relegation" },
  ],
  scorers: [
    { name: "Thierry Henry", playerSlug: "thierry-henry", club: "Arsenal", clubSlug: "arsenal", goals: 27, assists: 8 },
    { name: "Ruud van Nistelrooy", playerSlug: "ruud-van-nistelrooy", club: "Manchester United", clubSlug: "manchester-united", goals: 21, assists: 3 },
    { name: "Darren Bent", playerSlug: "darren-bent", club: "Charlton Athletic", clubSlug: "charlton-athletic", goals: 18, assists: 3 },
    { name: "Wayne Rooney", playerSlug: "wayne-rooney", club: "Manchester United", clubSlug: "manchester-united", goals: 16, assists: 8 },
    { name: "Frank Lampard", playerSlug: "frank-lampard", club: "Chelsea", clubSlug: "chelsea", goals: 16, assists: 8 },
    { name: "Didier Drogba", playerSlug: "didier-drogba", club: "Chelsea", clubSlug: "chelsea", goals: 12, assists: 4 },
    { name: "Robbie Keane", playerSlug: "robbie-keane", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 16, assists: 6 },
    { name: "Michael Owen", playerSlug: "michael-owen", club: "Newcastle United", clubSlug: "newcastle-united", goals: 10, assists: 2 },
    { name: "Marlon Harewood", playerSlug: "marlon-harewood", club: "West Ham United", clubSlug: "west-ham-united", goals: 14, assists: 2 },
    { name: "Craig Bellamy", playerSlug: "craig-bellamy", club: "Blackburn Rovers", clubSlug: "blackburn-rovers", goals: 13, assists: 4 },
  ],
  assisters: [
    { name: "Jose Antonio Reyes", playerSlug: "jose-antonio-reyes", club: "Arsenal", clubSlug: "arsenal", assists: 9 },
    { name: "Wayne Rooney", playerSlug: "wayne-rooney", club: "Manchester United", clubSlug: "manchester-united", assists: 8 },
    { name: "Thierry Henry", playerSlug: "thierry-henry", club: "Arsenal", clubSlug: "arsenal", assists: 8 },
    { name: "Frank Lampard", playerSlug: "frank-lampard", club: "Chelsea", clubSlug: "chelsea", assists: 8 },
    { name: "Steven Gerrard", playerSlug: "steven-gerrard", club: "Liverpool", clubSlug: "liverpool", assists: 7 },
  ],
  cleanSheets: [
    { name: "Pepe Reina", playerSlug: "pepe-reina", club: "Liverpool", clubSlug: "liverpool", cleanSheets: 20 },
    { name: "Petr Cech", playerSlug: "petr-cech", club: "Chelsea", clubSlug: "chelsea", cleanSheets: 18 },
    { name: "Edwin van der Sar", playerSlug: "edwin-van-der-sar", club: "Manchester United", clubSlug: "manchester-united", cleanSheets: 15 },
    { name: "Jens Lehmann", playerSlug: "jens-lehmann", club: "Arsenal", clubSlug: "arsenal", cleanSheets: 14 },
    { name: "Brad Friedel", playerSlug: "brad-friedel", club: "Blackburn Rovers", clubSlug: "blackburn-rovers", cleanSheets: 10 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Steven Gerrard", playerSlug: "steven-gerrard" },
    { title: "Young Player of the Season", winner: "Wayne Rooney", playerSlug: "wayne-rooney" },
    { title: "Golden Glove", winner: "Pepe Reina", playerSlug: "pepe-reina" },
    { title: "Manager of the Season", winner: "Jose Mourinho" },
  ],
  relegated: ["Birmingham City", "West Bromwich Albion", "Sunderland"],
  promoted: ["Reading", "Sheffield United", "Watford"],
  narrative: `Chelsea retained the Premier League title in 2005-06, becoming the first club to win back-to-back championships since Manchester United in 2001. Jose Mourinho's side accumulated 91 points, eight fewer than their record-breaking previous campaign, but still comfortable enough to see off Manchester United by eight points.

The Blues' attack was potent, with 72 goals scored, while their defence remained formidable despite the serious head injury suffered by Petr Cech in October. John Terry again led from the back, and the midfield axis of Frank Lampard and Claude Makelele provided the perfect balance of creativity and protection.

Manchester United finished second on 83 points, signalling a return to form under Sir Alex Ferguson. Wayne Rooney and Ruud van Nistelrooy -- the latter scoring 21 league goals -- formed a potent partnership before their relationship soured late in the season. Liverpool were third on 82 points under Rafael Benitez, with Pepe Reina winning the Golden Glove with 20 clean sheets in a superb debut Premier League campaign.

Arsenal finished fourth in what proved to be their final season at Highbury. Thierry Henry was sublime once more, scoring 27 goals to claim a fourth Golden Boot -- his farewell gift to the famous old ground before the move to the Emirates Stadium. The Gunners also reached the Champions League final, losing 2-1 to Barcelona in Paris.

Tottenham Hotspur challenged for the top four under Martin Jol before dramatically losing out to Arsenal on the final day. The infamous 'lasagne-gate' incident, in which several Spurs players fell ill before their crucial penultimate game at West Ham, became one of the most talked-about stories of the season.

At the bottom, Sunderland endured another dismal campaign, picking up just 15 points -- the lowest total in Premier League history at the time. West Bromwich Albion's Great Escape from the previous season proved a temporary reprieve as they went down on 30 points, while Birmingham City also dropped into the Championship.

Steven Gerrard was named Player of the Season for his inspirational all-round performances, while Wayne Rooney claimed the Young Player of the Season award for the second consecutive year. It was a campaign that confirmed Chelsea's status as the dominant force in English football while Arsenal's Henry continued to redefine what it meant to be a Premier League striker.`,
  notableMoments: [
    "Chelsea won back-to-back titles with 91 points under Jose Mourinho",
    "Thierry Henry scored 27 goals in Arsenal's final season at Highbury",
    "Pepe Reina won the Golden Glove with 20 clean sheets in his debut PL season",
    "Sunderland set a record low of just 15 points for the season",
    "The 'lasagne-gate' scandal hit Tottenham's top-four bid on the final day",
  ],
  metaTitle: "Premier League 2005-06 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2005-06 Premier League season. Chelsea's back-to-back title, final standings, top goalscorers, assists, awards and season recap.",
};

export default data;
