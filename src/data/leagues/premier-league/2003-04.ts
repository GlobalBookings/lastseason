import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "2003-04",
  seasonDisplay: "2003-04",
  champion: "Arsenal",
  championSlug: "arsenal",
  topScorer: "Thierry Henry",
  topScorerGoals: 30,
  totalGoals: 1012,
  standings: [
    { pos: 1, club: "Arsenal", clubSlug: "arsenal", p: 38, w: 26, d: 12, l: 0, gf: 73, ga: 26, gd: 47, pts: 90, zone: "cl" },
    { pos: 2, club: "Chelsea", clubSlug: "chelsea", p: 38, w: 24, d: 7, l: 7, gf: 67, ga: 30, gd: 37, pts: 79, zone: "cl" },
    { pos: 3, club: "Manchester United", clubSlug: "manchester-united", p: 38, w: 23, d: 6, l: 9, gf: 64, ga: 35, gd: 29, pts: 75, zone: "cl" },
    { pos: 4, club: "Liverpool", clubSlug: "liverpool", p: 38, w: 16, d: 12, l: 10, gf: 55, ga: 37, gd: 18, pts: 60, zone: "cl" },
    { pos: 5, club: "Newcastle United", clubSlug: "newcastle-united", p: 38, w: 13, d: 17, l: 8, gf: 52, ga: 40, gd: 12, pts: 56, zone: "el" },
    { pos: 6, club: "Aston Villa", clubSlug: "aston-villa", p: 38, w: 15, d: 11, l: 12, gf: 48, ga: 44, gd: 4, pts: 56 },
    { pos: 7, club: "Charlton Athletic", clubSlug: "charlton-athletic", p: 38, w: 14, d: 11, l: 13, gf: 51, ga: 51, gd: 0, pts: 53 },
    { pos: 8, club: "Bolton Wanderers", clubSlug: "bolton-wanderers", p: 38, w: 14, d: 11, l: 13, gf: 48, ga: 56, gd: -8, pts: 53 },
    { pos: 9, club: "Fulham", clubSlug: "fulham", p: 38, w: 14, d: 10, l: 14, gf: 52, ga: 46, gd: 6, pts: 52 },
    { pos: 10, club: "Birmingham City", clubSlug: "birmingham-city", p: 38, w: 12, d: 14, l: 12, gf: 43, ga: 48, gd: -5, pts: 50 },
    { pos: 11, club: "Middlesbrough", clubSlug: "middlesbrough", p: 38, w: 13, d: 9, l: 16, gf: 44, ga: 52, gd: -8, pts: 48, zone: "el" },
    { pos: 12, club: "Southampton", clubSlug: "southampton", p: 38, w: 12, d: 11, l: 15, gf: 44, ga: 45, gd: -1, pts: 47 },
    { pos: 13, club: "Portsmouth", clubSlug: "portsmouth", p: 38, w: 12, d: 9, l: 17, gf: 47, ga: 54, gd: -7, pts: 45 },
    { pos: 14, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 38, w: 13, d: 6, l: 19, gf: 47, ga: 57, gd: -10, pts: 45 },
    { pos: 15, club: "Blackburn Rovers", clubSlug: "blackburn-rovers", p: 38, w: 12, d: 8, l: 18, gf: 51, ga: 59, gd: -8, pts: 44 },
    { pos: 16, club: "Manchester City", clubSlug: "manchester-city", p: 38, w: 9, d: 14, l: 15, gf: 55, ga: 54, gd: 1, pts: 41 },
    { pos: 17, club: "Everton", clubSlug: "everton", p: 38, w: 9, d: 12, l: 17, gf: 45, ga: 57, gd: -12, pts: 39 },
    { pos: 18, club: "Leicester City", clubSlug: "leicester-city", p: 38, w: 6, d: 15, l: 17, gf: 48, ga: 65, gd: -17, pts: 33, zone: "relegation" },
    { pos: 19, club: "Leeds United", clubSlug: "leeds-united", p: 38, w: 8, d: 9, l: 21, gf: 40, ga: 79, gd: -39, pts: 33, zone: "relegation" },
    { pos: 20, club: "Wolverhampton Wanderers", clubSlug: "wolverhampton-wanderers", p: 38, w: 7, d: 12, l: 19, gf: 38, ga: 77, gd: -39, pts: 33, zone: "relegation" },
  ],
  scorers: [
    { name: "Thierry Henry", playerSlug: "thierry-henry", club: "Arsenal", clubSlug: "arsenal", goals: 30, assists: 6 },
    { name: "Alan Shearer", playerSlug: "alan-shearer", club: "Newcastle United", clubSlug: "newcastle-united", goals: 22, assists: 3 },
    { name: "Ruud van Nistelrooy", playerSlug: "ruud-van-nistelrooy", club: "Manchester United", clubSlug: "manchester-united", goals: 20, assists: 5 },
    { name: "Nicolas Anelka", playerSlug: "nicolas-anelka", club: "Manchester City", clubSlug: "manchester-city", goals: 17, assists: 3 },
    { name: "Mikael Forssell", playerSlug: "mikael-forssell", club: "Birmingham City", clubSlug: "birmingham-city", goals: 17, assists: 1 },
    { name: "Michael Owen", playerSlug: "michael-owen", club: "Liverpool", clubSlug: "liverpool", goals: 16, assists: 3 },
    { name: "Yakubu Aiyegbeni", playerSlug: "yakubu-aiyegbeni", club: "Portsmouth", clubSlug: "portsmouth", goals: 16, assists: 1 },
    { name: "Louis Saha", playerSlug: "louis-saha", club: "Manchester United", clubSlug: "manchester-united", goals: 14, assists: 2 },
    { name: "Jimmy Floyd Hasselbaink", playerSlug: "jimmy-floyd-hasselbaink", club: "Chelsea", clubSlug: "chelsea", goals: 13, assists: 4 },
    { name: "Robert Pires", playerSlug: "robert-pires", club: "Arsenal", clubSlug: "arsenal", goals: 14, assists: 8 },
  ],
  assisters: [
    { name: "Robert Pires", playerSlug: "robert-pires", club: "Arsenal", clubSlug: "arsenal", assists: 8 },
    { name: "Dennis Bergkamp", playerSlug: "dennis-bergkamp", club: "Arsenal", clubSlug: "arsenal", assists: 7 },
    { name: "Patrick Vieira", playerSlug: "patrick-vieira", club: "Arsenal", clubSlug: "arsenal", assists: 7 },
    { name: "Ryan Giggs", playerSlug: "ryan-giggs", club: "Manchester United", clubSlug: "manchester-united", assists: 7 },
    { name: "Thierry Henry", playerSlug: "thierry-henry", club: "Arsenal", clubSlug: "arsenal", assists: 6 },
  ],
  cleanSheets: [
    { name: "Jens Lehmann", playerSlug: "jens-lehmann", club: "Arsenal", clubSlug: "arsenal", cleanSheets: 15 },
    { name: "Edwin van der Sar", playerSlug: "edwin-van-der-sar", club: "Fulham", clubSlug: "fulham", cleanSheets: 15 },
    { name: "Carlo Cudicini", playerSlug: "carlo-cudicini", club: "Chelsea", clubSlug: "chelsea", cleanSheets: 12 },
    { name: "Tim Howard", playerSlug: "tim-howard", club: "Manchester United", clubSlug: "manchester-united", cleanSheets: 11 },
    { name: "Jerzy Dudek", playerSlug: "jerzy-dudek", club: "Liverpool", clubSlug: "liverpool", cleanSheets: 10 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Thierry Henry", playerSlug: "thierry-henry" },
    { title: "Young Player of the Season", winner: "Scott Parker", playerSlug: "scott-parker" },
    { title: "Manager of the Season", winner: "Arsene Wenger" },
  ],
  relegated: ["Leicester City", "Leeds United", "Wolverhampton Wanderers"],
  promoted: ["Norwich City", "West Bromwich Albion", "Crystal Palace"],
  narrative: `Arsenal wrote their names into football immortality in 2003-04, going the entire 38-game Premier League season unbeaten to claim the title with 90 points. Arsene Wenger's 'Invincibles' recorded 26 wins and 12 draws, becoming the first team to go a whole top-flight league season undefeated since Preston North End in 1889.

Thierry Henry was the driving force behind this historic campaign, scoring 30 league goals to win the Golden Boot by a distance. The Frenchman's combination of pace, power, technique and intelligence made him virtually unplayable, and his hat-trick in the crucial 4-2 win against Liverpool encapsulated his brilliance. Behind Henry, Robert Pires provided creativity and goals from the wing, while Patrick Vieira marshalled the midfield with authority.

Chelsea finished second on 79 points in Claudio Ranieri's final season in charge, bolstered by Roman Abramovich's summer spending spree. Despite the investment, the Blues could not keep pace with Arsenal's relentless consistency. Manchester United, weakened by the sale of David Beckham to Real Madrid and Rio Ferdinand's ban, finished third on 75 points.

Liverpool secured fourth place and Champions League qualification under Gerard Houllier, while Newcastle United and Aston Villa both finished on 56 points. Middlesbrough won the League Cup under Steve McClaren, their first major trophy, earning a UEFA Cup berth despite finishing 11th.

At the bottom, all three relegated teams finished on 33 points. Leeds United's fall from grace was the most dramatic -- just three years after reaching the Champions League semi-finals, financial mismanagement and player sales saw them plummet out of the Premier League. Leicester City and Wolverhampton Wanderers, both newly promoted, also went straight back down.

The Invincibles season was defined by more than just results. Arsenal played a brand of flowing, attacking football that captivated neutral supporters across the country. The spine of Lehmann, Campbell, Vieira and Henry provided the foundation, while Bergkamp's artistry and the fullbacks' marauding runs added flair. It was a season that set the benchmark for Premier League excellence.

The Premier League would commission a unique gold trophy to commemorate Arsenal's extraordinary achievement -- a feat that may never be repeated in the modern era.`,
  notableMoments: [
    "Arsenal went the entire 38-game season unbeaten, earning the title 'The Invincibles'",
    "Thierry Henry scored 30 league goals, the highest tally in that Premier League season",
    "Leeds United were relegated just three years after reaching the Champions League semi-finals",
    "Middlesbrough won their first ever major trophy, lifting the League Cup",
    "All three relegated clubs finished level on 33 points",
  ],
  metaTitle: "Premier League 2003-04 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2003-04 Premier League season. Arsenal's Invincibles, final standings, top goalscorers, assists, awards and a complete season recap.",
};

export default data;
