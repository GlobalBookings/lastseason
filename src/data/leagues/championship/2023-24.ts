import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Championship",
  leagueSlug: "championship",
  season: "2023-24",
  seasonDisplay: "2023-24",
  champion: "Leicester City",
  championSlug: "leicester-city",
  topScorer: "Sammie Szmodics",
  topScorerGoals: 27,
  totalGoals: 1480,
  standings: [
    { pos: 1, club: "Leicester City", clubSlug: "leicester-city", p: 46, w: 31, d: 4, l: 11, gf: 89, ga: 41, gd: 48, pts: 97, zone: "promotion" },
    { pos: 2, club: "Ipswich Town", clubSlug: "ipswich-town", p: 46, w: 28, d: 12, l: 6, gf: 92, ga: 57, gd: 35, pts: 96, zone: "promotion" },
    { pos: 3, club: "Leeds United", clubSlug: "leeds-united", p: 46, w: 27, d: 9, l: 10, gf: 81, ga: 43, gd: 38, pts: 90 },
    { pos: 4, club: "Southampton", clubSlug: "southampton", p: 46, w: 26, d: 9, l: 11, gf: 87, ga: 63, gd: 24, pts: 87 },
    { pos: 5, club: "West Bromwich Albion", clubSlug: "west-bromwich-albion", p: 46, w: 21, d: 12, l: 13, gf: 70, ga: 47, gd: 23, pts: 75 },
    { pos: 6, club: "Norwich City", clubSlug: "norwich-city", p: 46, w: 21, d: 10, l: 15, gf: 79, ga: 64, gd: 15, pts: 73 },
    { pos: 7, club: "Hull City", clubSlug: "hull-city", p: 46, w: 19, d: 13, l: 14, gf: 68, ga: 60, gd: 8, pts: 70 },
    { pos: 8, club: "Middlesbrough", clubSlug: "middlesbrough", p: 46, w: 20, d: 9, l: 17, gf: 71, ga: 62, gd: 9, pts: 69 },
    { pos: 9, club: "Coventry City", clubSlug: "coventry-city", p: 46, w: 17, d: 13, l: 16, gf: 70, ga: 59, gd: 11, pts: 64 },
    { pos: 10, club: "Preston North End", clubSlug: "preston-north-end", p: 46, w: 18, d: 9, l: 19, gf: 56, ga: 67, gd: -11, pts: 63 },
    { pos: 11, club: "Bristol City", clubSlug: "bristol-city", p: 46, w: 17, d: 11, l: 18, gf: 53, ga: 51, gd: 2, pts: 62 },
    { pos: 12, club: "Cardiff City", clubSlug: "cardiff-city", p: 46, w: 19, d: 5, l: 22, gf: 53, ga: 70, gd: -17, pts: 62 },
    { pos: 13, club: "Millwall", clubSlug: "millwall", p: 46, w: 16, d: 11, l: 19, gf: 45, ga: 55, gd: -10, pts: 59 },
    { pos: 14, club: "Swansea City", clubSlug: "swansea-city", p: 46, w: 15, d: 12, l: 19, gf: 59, ga: 65, gd: -6, pts: 57 },
    { pos: 15, club: "Watford", clubSlug: "watford", p: 46, w: 13, d: 17, l: 16, gf: 61, ga: 61, gd: 0, pts: 56 },
    { pos: 16, club: "Sunderland", clubSlug: "sunderland", p: 46, w: 16, d: 8, l: 22, gf: 52, ga: 54, gd: -2, pts: 56 },
    { pos: 17, club: "Stoke City", clubSlug: "stoke-city", p: 46, w: 15, d: 11, l: 20, gf: 49, ga: 60, gd: -11, pts: 56 },
    { pos: 18, club: "Queens Park Rangers", clubSlug: "queens-park-rangers", p: 46, w: 15, d: 11, l: 20, gf: 47, ga: 58, gd: -11, pts: 56 },
    { pos: 19, club: "Blackburn Rovers", clubSlug: "blackburn-rovers", p: 46, w: 14, d: 11, l: 21, gf: 60, ga: 74, gd: -14, pts: 53 },
    { pos: 20, club: "Sheffield Wednesday", clubSlug: "sheffield-wednesday", p: 46, w: 15, d: 8, l: 23, gf: 44, ga: 68, gd: -24, pts: 53 },
    { pos: 21, club: "Plymouth Argyle", clubSlug: "plymouth-argyle", p: 46, w: 13, d: 12, l: 21, gf: 59, ga: 70, gd: -11, pts: 51 },
    { pos: 22, club: "Birmingham City", clubSlug: "birmingham-city", p: 46, w: 13, d: 11, l: 22, gf: 50, ga: 65, gd: -15, pts: 50, zone: "relegation" },
    { pos: 23, club: "Huddersfield Town", clubSlug: "huddersfield-town", p: 46, w: 9, d: 18, l: 19, gf: 48, ga: 77, gd: -29, pts: 45, zone: "relegation" },
    { pos: 24, club: "Rotherham United", clubSlug: "rotherham-united", p: 46, w: 5, d: 12, l: 29, gf: 37, ga: 89, gd: -52, pts: 27, zone: "relegation" },
  ],
  scorers: [
    { name: "Sammie Szmodics", playerSlug: "sammie-szmodics", club: "Blackburn Rovers", clubSlug: "blackburn-rovers", goals: 27, assists: 4 },
    { name: "Adam Armstrong", playerSlug: "adam-armstrong", club: "Southampton", clubSlug: "southampton", goals: 21, assists: 2 },
    { name: "Crysencio Summerville", playerSlug: "crysencio-summerville", club: "Leeds United", clubSlug: "leeds-united", goals: 19, assists: 9 },
    { name: "Morgan Whittaker", playerSlug: "morgan-whittaker", club: "Plymouth Argyle", clubSlug: "plymouth-argyle", goals: 19, assists: 8 },
    { name: "Jamie Vardy", playerSlug: "jamie-vardy", club: "Leicester City", clubSlug: "leicester-city", goals: 18, assists: 4 },
    { name: "Ché Adams", playerSlug: "che-adams", club: "Southampton", clubSlug: "southampton", goals: 16, assists: 7 },
    { name: "Emmanuel Latte Lath", playerSlug: "emmanuel-latte-lath", club: "Middlesbrough", clubSlug: "middlesbrough", goals: 16, assists: 3 },
    { name: "Josh Sargent", playerSlug: "josh-sargent", club: "Norwich City", clubSlug: "norwich-city", goals: 16, assists: 2 },
    { name: "Haji Wright", playerSlug: "haji-wright", club: "Coventry City", clubSlug: "coventry-city", goals: 16, assists: 3 },
    { name: "Jack Clarke", playerSlug: "jack-clarke", club: "Sunderland", clubSlug: "sunderland", goals: 15, assists: 4 },
  ],
  assisters: [
    { name: "Crysencio Summerville", playerSlug: "crysencio-summerville", club: "Leeds United", clubSlug: "leeds-united", assists: 9 },
    { name: "Morgan Whittaker", playerSlug: "morgan-whittaker", club: "Plymouth Argyle", clubSlug: "plymouth-argyle", assists: 8 },
    { name: "Omari Hutchinson", playerSlug: "omari-hutchinson", club: "Ipswich Town", clubSlug: "ipswich-town", assists: 8 },
    { name: "Ché Adams", playerSlug: "che-adams", club: "Southampton", clubSlug: "southampton", assists: 7 },
    { name: "Gabriel Sara", playerSlug: "gabriel-sara", club: "Norwich City", clubSlug: "norwich-city", assists: 7 },
  ],
  cleanSheets: [
    { name: "Illan Meslier", playerSlug: "illan-meslier", club: "Leeds United", clubSlug: "leeds-united", cleanSheets: 20 },
    { name: "Alex Palmer", playerSlug: "alex-palmer", club: "West Bromwich Albion", clubSlug: "west-bromwich-albion", cleanSheets: 19 },
    { name: "Václav Hladký", playerSlug: "vaclav-hladky", club: "Ipswich Town", clubSlug: "ipswich-town", cleanSheets: 15 },
    { name: "Mads Hermansen", playerSlug: "mads-hermansen", club: "Leicester City", clubSlug: "leicester-city", cleanSheets: 13 },
    { name: "Anthony Patterson", playerSlug: "anthony-patterson", club: "Sunderland", clubSlug: "sunderland", cleanSheets: 13 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Crysencio Summerville", playerSlug: "crysencio-summerville" },
    { title: "Young Player of the Season", winner: "Crysencio Summerville", playerSlug: "crysencio-summerville" },
    { title: "Golden Glove", winner: "Illan Meslier / Alex Palmer" },
    { title: "Manager of the Season", winner: "Enzo Maresca" },
  ],
  relegated: ["Birmingham City", "Huddersfield Town", "Rotherham United"],
  promoted: ["Leicester City", "Ipswich Town", "Southampton"],
  narrative: `Leicester City stormed to the Championship title in 2023-24, bouncing back to the Premier League at the first attempt after their shock relegation. Under the astute guidance of Enzo Maresca, the Foxes accumulated 97 points, playing an expansive and entertaining brand of football that proved too much for the rest of the division.

The title race was one of the closest in Championship history. Ipswich Town, in only their second season back in the second tier, were magnificent under Kieran McKenna, finishing just a single point behind Leicester on 96 points. Their fairy-tale back-to-back promotion from League One to the Premier League captivated the football world.

Leeds United finished third on 90 points under Daniel Farke but suffered heartbreak in the playoff final, losing 1-0 to Southampton at Wembley. Adam Armstrong's solitary goal sent the Saints back to the top flight, capping a remarkable campaign for Russell Martin's side who had finished fourth on 87 points.

The individual story of the season belonged to Sammie Szmodics of Blackburn Rovers, who plundered 27 league goals to claim the Golden Boot despite his side finishing 19th. His prolific campaign earned him a summer move to Ipswich Town. Crysencio Summerville dazzled at Leeds, contributing 19 goals and 9 assists to earn both the Player of the Season and Young Player of the Season awards.

At the bottom, Rotherham United's return to the Championship lasted just one season, finishing rock-bottom on 27 points with only five wins all campaign. Birmingham City's relegation was a bitter blow for a proud club, while Huddersfield Town also dropped to League One. The total of 1,480 goals across 552 matches made for a thrilling Championship season from start to finish.`,
  notableMoments: [
    "Leicester City won the Championship title with 97 points, bouncing back immediately after Premier League relegation",
    "Ipswich Town achieved back-to-back promotions from League One to the Premier League under Kieran McKenna",
    "Southampton beat Leeds United 1-0 in the playoff final at Wembley through Adam Armstrong's goal",
    "Sammie Szmodics scored 27 goals for 19th-placed Blackburn Rovers to win the Golden Boot",
    "Crysencio Summerville won both Player and Young Player of the Season for Leeds United",
  ],
  metaTitle: "Championship 2023-24 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2023-24 EFL Championship season. Final standings, top goalscorers, assists, player awards and a complete season recap.",
};

export default data;
