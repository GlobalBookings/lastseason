import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "2023-24",
  seasonDisplay: "2023-24",
  champion: "Manchester City",
  championSlug: "manchester-city",
  topScorer: "Cole Palmer",
  topScorerGoals: 22,
  totalGoals: 1246,
  standings: [
    { pos: 1, club: "Manchester City", clubSlug: "manchester-city", p: 38, w: 28, d: 7, l: 3, gf: 96, ga: 34, gd: 62, pts: 91, zone: "cl" },
    { pos: 2, club: "Arsenal", clubSlug: "arsenal", p: 38, w: 28, d: 5, l: 5, gf: 91, ga: 29, gd: 62, pts: 89, zone: "cl" },
    { pos: 3, club: "Liverpool", clubSlug: "liverpool", p: 38, w: 24, d: 10, l: 4, gf: 86, ga: 41, gd: 45, pts: 82, zone: "cl" },
    { pos: 4, club: "Aston Villa", clubSlug: "aston-villa", p: 38, w: 20, d: 8, l: 10, gf: 76, ga: 61, gd: 15, pts: 68, zone: "cl" },
    { pos: 5, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 38, w: 20, d: 6, l: 12, gf: 74, ga: 61, gd: 13, pts: 66, zone: "el" },
    { pos: 6, club: "Chelsea", clubSlug: "chelsea", p: 38, w: 18, d: 9, l: 11, gf: 77, ga: 63, gd: 14, pts: 63, zone: "ecl" },
    { pos: 7, club: "Newcastle United", clubSlug: "newcastle-united", p: 38, w: 18, d: 6, l: 14, gf: 85, ga: 62, gd: 23, pts: 60 },
    { pos: 8, club: "Manchester United", clubSlug: "manchester-united", p: 38, w: 18, d: 6, l: 14, gf: 57, ga: 58, gd: -1, pts: 60 },
    { pos: 9, club: "West Ham United", clubSlug: "west-ham-united", p: 38, w: 14, d: 10, l: 14, gf: 60, ga: 74, gd: -14, pts: 52 },
    { pos: 10, club: "Crystal Palace", clubSlug: "crystal-palace", p: 38, w: 13, d: 10, l: 15, gf: 57, ga: 58, gd: -1, pts: 49 },
    { pos: 11, club: "Brighton & Hove Albion", clubSlug: "brighton", p: 38, w: 12, d: 12, l: 14, gf: 55, ga: 62, gd: -7, pts: 48 },
    { pos: 12, club: "AFC Bournemouth", clubSlug: "bournemouth", p: 38, w: 13, d: 9, l: 16, gf: 54, ga: 67, gd: -13, pts: 48 },
    { pos: 13, club: "Fulham", clubSlug: "fulham", p: 38, w: 13, d: 8, l: 17, gf: 55, ga: 61, gd: -6, pts: 47 },
    { pos: 14, club: "Wolverhampton Wanderers", clubSlug: "wolves", p: 38, w: 13, d: 7, l: 18, gf: 50, ga: 65, gd: -15, pts: 46 },
    { pos: 15, club: "Everton", clubSlug: "everton", p: 38, w: 13, d: 9, l: 16, gf: 40, ga: 51, gd: -11, pts: 40 },
    { pos: 16, club: "Brentford", clubSlug: "brentford", p: 38, w: 10, d: 9, l: 19, gf: 56, ga: 65, gd: -9, pts: 39 },
    { pos: 17, club: "Nottingham Forest", clubSlug: "nottingham-forest", p: 38, w: 9, d: 9, l: 20, gf: 49, ga: 67, gd: -18, pts: 32 },
    { pos: 18, club: "Luton Town", clubSlug: "luton-town", p: 38, w: 6, d: 8, l: 24, gf: 52, ga: 85, gd: -33, pts: 26, zone: "relegation" },
    { pos: 19, club: "Burnley", clubSlug: "burnley", p: 38, w: 5, d: 9, l: 24, gf: 41, ga: 78, gd: -37, pts: 24, zone: "relegation" },
    { pos: 20, club: "Sheffield United", clubSlug: "sheffield-united", p: 38, w: 3, d: 7, l: 28, gf: 35, ga: 104, gd: -69, pts: 16, zone: "relegation" },
  ],
  scorers: [
    { name: "Cole Palmer", playerSlug: "cole-palmer", club: "Chelsea", clubSlug: "chelsea", goals: 22, assists: 11 },
    { name: "Erling Haaland", playerSlug: "erling-haaland", club: "Manchester City", clubSlug: "manchester-city", goals: 21, assists: 5 },
    { name: "Alexander Isak", playerSlug: "alexander-isak", club: "Newcastle United", clubSlug: "newcastle-united", goals: 21, assists: 2 },
    { name: "Phil Foden", playerSlug: "phil-foden", club: "Manchester City", clubSlug: "manchester-city", goals: 19, assists: 8 },
    { name: "Dominic Solanke", playerSlug: "dominic-solanke", club: "AFC Bournemouth", clubSlug: "bournemouth", goals: 19, assists: 3 },
    { name: "Jarrod Bowen", playerSlug: "jarrod-bowen", club: "West Ham United", clubSlug: "west-ham-united", goals: 16, assists: 6 },
    { name: "Mohamed Salah", playerSlug: "mohamed-salah", club: "Liverpool", clubSlug: "liverpool", goals: 18, assists: 10 },
    { name: "Ollie Watkins", playerSlug: "ollie-watkins", club: "Aston Villa", clubSlug: "aston-villa", goals: 19, assists: 13 },
    { name: "Bukayo Saka", playerSlug: "bukayo-saka", club: "Arsenal", clubSlug: "arsenal", goals: 16, assists: 9 },
    { name: "Son Heung-min", playerSlug: "son-heung-min", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 17, assists: 10 },
  ],
  assisters: [
    { name: "Ollie Watkins", playerSlug: "ollie-watkins", club: "Aston Villa", clubSlug: "aston-villa", assists: 13 },
    { name: "Cole Palmer", playerSlug: "cole-palmer", club: "Chelsea", clubSlug: "chelsea", assists: 11 },
    { name: "Mohamed Salah", playerSlug: "mohamed-salah", club: "Liverpool", clubSlug: "liverpool", assists: 10 },
    { name: "Son Heung-min", playerSlug: "son-heung-min", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", assists: 10 },
    { name: "Pascal Gross", playerSlug: "pascal-gross", club: "Brighton & Hove Albion", clubSlug: "brighton", assists: 10 },
  ],
  cleanSheets: [
    { name: "David Raya", playerSlug: "david-raya", club: "Arsenal", clubSlug: "arsenal", cleanSheets: 16 },
    { name: "Ederson", playerSlug: "ederson", club: "Manchester City", clubSlug: "manchester-city", cleanSheets: 14 },
    { name: "Alisson", playerSlug: "alisson", club: "Liverpool", clubSlug: "liverpool", cleanSheets: 14 },
    { name: "Emiliano Martinez", playerSlug: "emiliano-martinez", club: "Aston Villa", clubSlug: "aston-villa", cleanSheets: 11 },
    { name: "Andre Onana", playerSlug: "andre-onana", club: "Manchester United", clubSlug: "manchester-united", cleanSheets: 10 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Phil Foden", playerSlug: "phil-foden" },
    { title: "Young Player of the Season", winner: "Cole Palmer", playerSlug: "cole-palmer" },
    { title: "Golden Glove", winner: "David Raya", playerSlug: "david-raya" },
    { title: "Manager of the Season", winner: "Pep Guardiola" },
  ],
  relegated: ["Luton Town", "Burnley", "Sheffield United"],
  promoted: ["Leicester City", "Ipswich Town", "Southampton"],
  narrative: `Manchester City secured an unprecedented fourth consecutive Premier League title in 2023-24, finishing on 91 points to hold off a relentless Arsenal side who pushed them all the way on 89 points. It was the tightest title race in years, with the lead changing hands multiple times in the final weeks of the campaign.

Pep Guardiola's side showed remarkable consistency, losing just three league matches all season. Erling Haaland continued to terrorise defences with 21 goals, though it was Phil Foden who truly elevated his game, scoring 19 goals and earning the Player of the Season award for his most complete campaign yet.

Arsenal, under Mikel Arteta, proved they were genuine title contenders for the second season running. With the league's best defensive record of just 29 goals conceded, the Gunners were clinical and organised. Bukayo Saka and Kai Havertz led the line effectively, but a crucial defeat at Aston Villa in April proved costly in the final reckoning.

Liverpool enjoyed a strong campaign under Jurgen Klopp in his farewell season, finishing third on 82 points. The German's final months at Anfield were emotional and productive, with Mohamed Salah contributing 18 goals and 10 assists. Aston Villa secured a remarkable fourth-place finish under Unai Emery, qualifying for the Champions League for the first time in over 40 years.

Cole Palmer was the breakout star of the season. Signed from Manchester City in the summer for around 40 million pounds, the 21-year-old lit up Stamford Bridge with 22 goals and 11 assists, claiming the Young Player of the Season award and the Golden Boot.

At the bottom, Sheffield United endured a historically poor campaign, finishing on just 16 points with only three wins all season. Burnley and Luton Town, both newly promoted, also went straight back down. Sheffield United's 104 goals conceded was the worst defensive record in Premier League history.

A season defined by City's dominance, Arsenal's near-miss, and a generational talent emerging at Chelsea -- the 2023-24 Premier League campaign will be remembered as one of the most compelling in the competition's history.`,
  notableMoments: [
    "Manchester City won a historic fourth consecutive Premier League title",
    "Cole Palmer scored 22 goals in his debut Chelsea season to claim the Golden Boot",
    "Jurgen Klopp managed his final season at Liverpool, finishing third",
    "Aston Villa qualified for the Champions League for the first time since 1982-83",
    "Sheffield United conceded 104 goals, the worst defensive record in Premier League history",
  ],
  metaTitle: "Premier League 2023-24 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2023-24 Premier League season. Final standings, top goalscorers, assists, player awards and a complete season recap.",
};

export default data;
