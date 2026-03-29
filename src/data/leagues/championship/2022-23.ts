import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Championship",
  leagueSlug: "championship",
  season: "2022-23",
  seasonDisplay: "2022-23",
  champion: "Burnley",
  championSlug: "burnley",
  topScorer: "Chuba Akpom",
  topScorerGoals: 28,
  totalGoals: 1360,
  standings: [
    { pos: 1, club: "Burnley", clubSlug: "burnley", p: 46, w: 29, d: 14, l: 3, gf: 87, ga: 35, gd: 52, pts: 101, zone: "promotion" },
    { pos: 2, club: "Sheffield United", clubSlug: "sheffield-united", p: 46, w: 27, d: 10, l: 9, gf: 73, ga: 39, gd: 34, pts: 91, zone: "promotion" },
    { pos: 3, club: "Luton Town", clubSlug: "luton-town", p: 46, w: 22, d: 10, l: 14, gf: 57, ga: 48, gd: 9, pts: 76 },
    { pos: 4, club: "Middlesbrough", clubSlug: "middlesbrough", p: 46, w: 22, d: 9, l: 15, gf: 64, ga: 47, gd: 17, pts: 75 },
    { pos: 5, club: "Coventry City", clubSlug: "coventry-city", p: 46, w: 21, d: 9, l: 16, gf: 62, ga: 52, gd: 10, pts: 72 },
    { pos: 6, club: "Sunderland", clubSlug: "sunderland", p: 46, w: 19, d: 13, l: 14, gf: 68, ga: 55, gd: 13, pts: 70 },
    { pos: 7, club: "Watford", clubSlug: "watford", p: 46, w: 19, d: 12, l: 15, gf: 59, ga: 48, gd: 11, pts: 69 },
    { pos: 8, club: "West Bromwich Albion", clubSlug: "west-bromwich-albion", p: 46, w: 19, d: 11, l: 16, gf: 59, ga: 51, gd: 8, pts: 68 },
    { pos: 9, club: "Norwich City", clubSlug: "norwich-city", p: 46, w: 18, d: 14, l: 14, gf: 56, ga: 52, gd: 4, pts: 68 },
    { pos: 10, club: "Swansea City", clubSlug: "swansea-city", p: 46, w: 18, d: 12, l: 16, gf: 59, ga: 58, gd: 1, pts: 66 },
    { pos: 11, club: "Millwall", clubSlug: "millwall", p: 46, w: 17, d: 14, l: 15, gf: 43, ga: 46, gd: -3, pts: 65 },
    { pos: 12, club: "Bristol City", clubSlug: "bristol-city", p: 46, w: 17, d: 11, l: 18, gf: 56, ga: 58, gd: -2, pts: 62 },
    { pos: 13, club: "Queens Park Rangers", clubSlug: "queens-park-rangers", p: 46, w: 17, d: 10, l: 19, gf: 50, ga: 52, gd: -2, pts: 61 },
    { pos: 14, club: "Hull City", clubSlug: "hull-city", p: 46, w: 16, d: 12, l: 18, gf: 54, ga: 56, gd: -2, pts: 60 },
    { pos: 15, club: "Stoke City", clubSlug: "stoke-city", p: 46, w: 16, d: 10, l: 20, gf: 53, ga: 60, gd: -7, pts: 58 },
    { pos: 16, club: "Cardiff City", clubSlug: "cardiff-city", p: 46, w: 14, d: 14, l: 18, gf: 49, ga: 57, gd: -8, pts: 56 },
    { pos: 17, club: "Birmingham City", clubSlug: "birmingham-city", p: 46, w: 15, d: 11, l: 20, gf: 47, ga: 58, gd: -11, pts: 56 },
    { pos: 18, club: "Preston North End", clubSlug: "preston-north-end", p: 46, w: 14, d: 13, l: 19, gf: 44, ga: 52, gd: -8, pts: 55 },
    { pos: 19, club: "Blackburn Rovers", clubSlug: "blackburn-rovers", p: 46, w: 15, d: 9, l: 22, gf: 50, ga: 62, gd: -12, pts: 54 },
    { pos: 20, club: "Huddersfield Town", clubSlug: "huddersfield-town", p: 46, w: 14, d: 10, l: 22, gf: 48, ga: 62, gd: -14, pts: 52 },
    { pos: 21, club: "Blackpool", clubSlug: "blackpool", p: 46, w: 12, d: 12, l: 22, gf: 43, ga: 60, gd: -17, pts: 48 },
    { pos: 22, club: "Rotherham United", clubSlug: "rotherham-united", p: 46, w: 12, d: 8, l: 26, gf: 37, ga: 68, gd: -31, pts: 44, zone: "relegation" },
    { pos: 23, club: "Reading", clubSlug: "reading", p: 46, w: 15, d: 9, l: 22, gf: 49, ga: 61, gd: -12, pts: 48, zone: "relegation" },
    { pos: 24, club: "Wigan Athletic", clubSlug: "wigan-athletic", p: 46, w: 13, d: 9, l: 24, gf: 42, ga: 66, gd: -24, pts: 40, zone: "relegation" },
  ],
  scorers: [
    { name: "Chuba Akpom", playerSlug: "chuba-akpom", club: "Middlesbrough", clubSlug: "middlesbrough", goals: 28, assists: 2 },
    { name: "Jay Rodriguez", playerSlug: "jay-rodriguez", club: "Burnley", clubSlug: "burnley", goals: 17, assists: 5 },
    { name: "Carlton Morris", playerSlug: "carlton-morris", club: "Luton Town", clubSlug: "luton-town", goals: 17, assists: 3 },
    { name: "Nathan Tella", playerSlug: "nathan-tella", club: "Burnley", clubSlug: "burnley", goals: 15, assists: 2 },
    { name: "Iliman Ndiaye", playerSlug: "iliman-ndiaye", club: "Sheffield United", clubSlug: "sheffield-united", goals: 14, assists: 6 },
    { name: "Viktor Gyökeres", playerSlug: "viktor-gyokeres", club: "Coventry City", clubSlug: "coventry-city", goals: 14, assists: 7 },
    { name: "Ross Stewart", playerSlug: "ross-stewart", club: "Sunderland", clubSlug: "sunderland", goals: 14, assists: 2 },
    { name: "Danel Sinani", playerSlug: "danel-sinani", club: "Huddersfield Town", clubSlug: "huddersfield-town", goals: 13, assists: 4 },
    { name: "Jed Wallace", playerSlug: "jed-wallace", club: "West Bromwich Albion", clubSlug: "west-bromwich-albion", goals: 13, assists: 8 },
    { name: "Connor Roberts", playerSlug: "connor-roberts", club: "Burnley", clubSlug: "burnley", goals: 12, assists: 5 },
  ],
  assisters: [
    { name: "Jed Wallace", playerSlug: "jed-wallace", club: "West Bromwich Albion", clubSlug: "west-bromwich-albion", assists: 8 },
    { name: "Viktor Gyökeres", playerSlug: "viktor-gyokeres", club: "Coventry City", clubSlug: "coventry-city", assists: 7 },
    { name: "Iliman Ndiaye", playerSlug: "iliman-ndiaye", club: "Sheffield United", clubSlug: "sheffield-united", assists: 6 },
    { name: "Josh Brownhill", playerSlug: "josh-brownhill", club: "Burnley", clubSlug: "burnley", assists: 6 },
    { name: "Jay Rodriguez", playerSlug: "jay-rodriguez", club: "Burnley", clubSlug: "burnley", assists: 5 },
  ],
  cleanSheets: [
    { name: "Wes Foderingham", playerSlug: "wes-foderingham", club: "Sheffield United", clubSlug: "sheffield-united", cleanSheets: 21 },
    { name: "James Trafford", playerSlug: "james-trafford", club: "Burnley", clubSlug: "burnley", cleanSheets: 19 },
    { name: "Thomas Kaminski", playerSlug: "thomas-kaminski", club: "Luton Town", clubSlug: "luton-town", cleanSheets: 14 },
    { name: "Anthony Patterson", playerSlug: "anthony-patterson", club: "Sunderland", clubSlug: "sunderland", cleanSheets: 13 },
    { name: "Zack Steffen", playerSlug: "zack-steffen", club: "Middlesbrough", clubSlug: "middlesbrough", cleanSheets: 12 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Chuba Akpom", playerSlug: "chuba-akpom" },
    { title: "Young Player of the Season", winner: "James Trafford", playerSlug: "james-trafford" },
    { title: "Golden Glove", winner: "Wes Foderingham", playerSlug: "wes-foderingham" },
    { title: "Manager of the Season", winner: "Vincent Kompany" },
  ],
  relegated: ["Wigan Athletic", "Reading", "Rotherham United"],
  promoted: ["Burnley", "Sheffield United", "Luton Town"],
  narrative: `Burnley produced one of the greatest Championship campaigns in history in 2022-23, storming to the title with a staggering 101 points under the managerial genius of Vincent Kompany. The former Manchester City captain transformed the Clarets into an irresistible force, losing just three league matches all season and playing a breathtaking brand of possession-based football that was revolutionary for the second tier.

Sheffield United were worthy runners-up on 91 points, with Paul Heckingbottom's pragmatic and resilient side securing automatic promotion back to the Premier League. The Blades' defensive record was outstanding, conceding only 39 goals across the 46-game campaign, with goalkeeper Wes Foderingham earning the Golden Glove with 21 clean sheets.

The story of the season was arguably Luton Town's remarkable rise. The Hatters, competing in their second consecutive Championship season after years in the lower leagues, finished third and then won promotion via the playoffs. Their penalty shootout victory over Coventry City in the final at Wembley, after the match finished 1-1, completed one of football's most extraordinary journeys from non-league to the Premier League.

Chuba Akpom was the standout individual performer, netting 28 league goals for Middlesbrough to win the Golden Boot and the Player of the Season award. His lethal finishing was a joy to watch, though it was not enough to secure a playoff place for Michael Carrick's side who finished fourth.

At the bottom, administration and financial turmoil cast a shadow. Wigan Athletic, barely a year after winning the League One title, were plunged into administration and despite the players' efforts, fell back to League One. Reading also suffered a points deduction for financial breaches. Rotherham United found the step up too demanding, completing a difficult season at the wrong end of the table.`,
  notableMoments: [
    "Burnley amassed 101 points under Vincent Kompany, losing only three league matches all season",
    "Luton Town won promotion via the playoffs, completing a fairy-tale journey from non-league to the Premier League",
    "Chuba Akpom scored 28 goals for Middlesbrough to win the Golden Boot",
    "Wigan Athletic entered administration just a year after winning the League One title",
    "Coventry City lost a dramatic playoff final to Luton Town on penalties at Wembley",
  ],
  metaTitle: "Championship 2022-23 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2022-23 EFL Championship season. Final standings, top goalscorers, assists, player awards and a complete season recap.",
};

export default data;
