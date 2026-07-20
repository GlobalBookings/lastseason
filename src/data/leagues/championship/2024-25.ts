import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Championship",
  leagueSlug: "championship",
  season: "2024-25",
  seasonDisplay: "2024-25",
  champion: "Leeds United",
  championSlug: "leeds-united",
  topScorer: "Joel Piroe",
  topScorerGoals: 19,
  totalGoals: 1353,
  standings: [
    { pos: 1, club: "Leeds United", clubSlug: "leeds-united", p: 46, w: 29, d: 13, l: 4, gf: 95, ga: 30, gd: 65, pts: 100, zone: "promotion" },
    { pos: 2, club: "Burnley", clubSlug: "burnley", p: 46, w: 28, d: 16, l: 2, gf: 69, ga: 16, gd: 53, pts: 100, zone: "promotion" },
    { pos: 3, club: "Sheffield United", clubSlug: "sheffield-united", p: 46, w: 28, d: 8, l: 10, gf: 63, ga: 36, gd: 27, pts: 90, zone: "el" },
    { pos: 4, club: "Sunderland", clubSlug: "sunderland", p: 46, w: 21, d: 13, l: 12, gf: 58, ga: 44, gd: 14, pts: 76, zone: "el" },
    { pos: 5, club: "Coventry City", clubSlug: "coventry-city", p: 46, w: 20, d: 9, l: 17, gf: 64, ga: 58, gd: 6, pts: 69, zone: "el" },
    { pos: 6, club: "Bristol City", clubSlug: "bristol-city", p: 46, w: 17, d: 17, l: 12, gf: 59, ga: 55, gd: 4, pts: 68, zone: "el" },
    { pos: 7, club: "Blackburn Rovers", clubSlug: "blackburn-rovers", p: 46, w: 19, d: 9, l: 18, gf: 53, ga: 48, gd: 5, pts: 66 },
    { pos: 8, club: "Millwall", clubSlug: "millwall", p: 46, w: 18, d: 12, l: 16, gf: 47, ga: 49, gd: -2, pts: 66 },
    { pos: 9, club: "West Bromwich Albion", clubSlug: "west-bromwich-albion", p: 46, w: 15, d: 19, l: 12, gf: 57, ga: 47, gd: 10, pts: 64 },
    { pos: 10, club: "Middlesbrough", clubSlug: "middlesbrough", p: 46, w: 18, d: 10, l: 18, gf: 64, ga: 56, gd: 8, pts: 64 },
    { pos: 11, club: "Swansea City", clubSlug: "swansea-city", p: 46, w: 17, d: 10, l: 19, gf: 51, ga: 56, gd: -5, pts: 61 },
    { pos: 12, club: "Sheffield Wednesday", clubSlug: "sheffield-wednesday", p: 46, w: 15, d: 13, l: 18, gf: 60, ga: 69, gd: -9, pts: 58 },
    { pos: 13, club: "Norwich City", clubSlug: "norwich-city", p: 46, w: 14, d: 15, l: 17, gf: 71, ga: 68, gd: 3, pts: 57 },
    { pos: 14, club: "Watford", clubSlug: "watford", p: 46, w: 16, d: 9, l: 21, gf: 53, ga: 61, gd: -8, pts: 57 },
    { pos: 15, club: "Queens Park Rangers", clubSlug: "queens-park-rangers", p: 46, w: 14, d: 14, l: 18, gf: 53, ga: 63, gd: -10, pts: 56 },
    { pos: 16, club: "Portsmouth", clubSlug: "portsmouth", p: 46, w: 14, d: 12, l: 20, gf: 58, ga: 71, gd: -13, pts: 54 },
    { pos: 17, club: "Oxford United", clubSlug: "oxford-united", p: 46, w: 13, d: 14, l: 19, gf: 49, ga: 65, gd: -16, pts: 53 },
    { pos: 18, club: "Stoke City", clubSlug: "stoke-city", p: 46, w: 12, d: 15, l: 19, gf: 45, ga: 62, gd: -17, pts: 51 },
    { pos: 19, club: "Derby County", clubSlug: "derby-county", p: 46, w: 13, d: 11, l: 22, gf: 48, ga: 56, gd: -8, pts: 50 },
    { pos: 20, club: "Preston North End", clubSlug: "preston-north-end", p: 46, w: 10, d: 20, l: 16, gf: 48, ga: 59, gd: -11, pts: 50 },
    { pos: 21, club: "Hull City", clubSlug: "hull-city", p: 46, w: 12, d: 13, l: 21, gf: 44, ga: 54, gd: -10, pts: 49 },
    { pos: 22, club: "Luton Town", clubSlug: "luton-town", p: 46, w: 13, d: 10, l: 23, gf: 45, ga: 69, gd: -24, pts: 49, zone: "relegation" },
    { pos: 23, club: "Plymouth Argyle", clubSlug: "plymouth-argyle", p: 46, w: 11, d: 13, l: 22, gf: 51, ga: 88, gd: -37, pts: 46, zone: "relegation" },
    { pos: 24, club: "Cardiff City", clubSlug: "cardiff-city", p: 46, w: 9, d: 17, l: 20, gf: 48, ga: 73, gd: -25, pts: 44, zone: "relegation" },
  ],
  scorers: [
    { name: "Joel Piroe", playerSlug: "joel-piroe", club: "Leeds United", clubSlug: "leeds-united", goals: 19 },
    { name: "Josh Brownhill", playerSlug: "josh-brownhill", club: "Burnley", clubSlug: "burnley", goals: 18 },
  ],
  assisters: [],
  cleanSheets: [],
  awards: [],
  relegated: ["Luton Town", "Plymouth Argyle", "Cardiff City"],
  promoted: ["Leeds United", "Burnley", "Sunderland"],
  narrative: `Leeds United and Burnley both finished the Championship season on 100 points. Leeds won the title on goal difference after scoring 95 goals, while Burnley's defence conceded only 16 across 46 matches.

The two clubs secured automatic promotion. Sunderland joined them by beating Sheffield United in the play-off final at Wembley, returning to the Premier League after an eight-year absence.

Sheffield United, Sunderland, Coventry City and Bristol City made up the play-off places. Luton Town, Plymouth Argyle and Cardiff City were relegated to League One.`,
  notableMoments: [
    "Leeds United and Burnley both finished on 100 points, with Leeds winning on goal difference",
    "Burnley conceded just 16 goals all season - a Championship record",
    "Sunderland won promotion through the playoffs, returning to the Premier League",
    "Leeds United beat Cardiff City 7-0 in the biggest home win of the season",
  ],
  metaTitle: "Championship 2024-25 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2024-25 EFL Championship season. Final standings, top goalscorers, assists, player awards and a complete season recap.",
};

export default data;
