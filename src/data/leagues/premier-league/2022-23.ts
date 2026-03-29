import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "2022-23",
  seasonDisplay: "2022-23",
  champion: "Manchester City",
  championSlug: "manchester-city",
  topScorer: "Erling Haaland",
  topScorerGoals: 36,
  totalGoals: 1084,
  standings: [
    { pos: 1, club: "Manchester City", clubSlug: "manchester-city", p: 38, w: 28, d: 5, l: 5, gf: 94, ga: 33, gd: 61, pts: 89, zone: "cl" },
    { pos: 2, club: "Arsenal", clubSlug: "arsenal", p: 38, w: 26, d: 6, l: 6, gf: 88, ga: 43, gd: 45, pts: 84, zone: "cl" },
    { pos: 3, club: "Manchester United", clubSlug: "manchester-united", p: 38, w: 23, d: 6, l: 9, gf: 58, ga: 43, gd: 15, pts: 75, zone: "cl" },
    { pos: 4, club: "Newcastle United", clubSlug: "newcastle-united", p: 38, w: 19, d: 14, l: 5, gf: 68, ga: 33, gd: 35, pts: 71, zone: "cl" },
    { pos: 5, club: "Liverpool", clubSlug: "liverpool", p: 38, w: 19, d: 10, l: 9, gf: 75, ga: 47, gd: 28, pts: 67, zone: "el" },
    { pos: 6, club: "Brighton & Hove Albion", clubSlug: "brighton", p: 38, w: 18, d: 8, l: 12, gf: 72, ga: 53, gd: 19, pts: 62, zone: "ecl" },
    { pos: 7, club: "Aston Villa", clubSlug: "aston-villa", p: 38, w: 18, d: 7, l: 13, gf: 51, ga: 46, gd: 5, pts: 61 },
    { pos: 8, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 38, w: 18, d: 6, l: 14, gf: 70, ga: 63, gd: 7, pts: 60 },
    { pos: 9, club: "Brentford", clubSlug: "brentford", p: 38, w: 15, d: 14, l: 9, gf: 58, ga: 46, gd: 12, pts: 59 },
    { pos: 10, club: "Fulham", clubSlug: "fulham", p: 38, w: 15, d: 7, l: 16, gf: 55, ga: 53, gd: 2, pts: 52 },
    { pos: 11, club: "Crystal Palace", clubSlug: "crystal-palace", p: 38, w: 11, d: 12, l: 15, gf: 40, ga: 49, gd: -9, pts: 45 },
    { pos: 12, club: "Chelsea", clubSlug: "chelsea", p: 38, w: 11, d: 11, l: 16, gf: 38, ga: 47, gd: -9, pts: 44 },
    { pos: 13, club: "Wolverhampton Wanderers", clubSlug: "wolves", p: 38, w: 11, d: 8, l: 19, gf: 31, ga: 58, gd: -27, pts: 41 },
    { pos: 14, club: "West Ham United", clubSlug: "west-ham-united", p: 38, w: 11, d: 7, l: 20, gf: 42, ga: 55, gd: -13, pts: 40 },
    { pos: 15, club: "AFC Bournemouth", clubSlug: "bournemouth", p: 38, w: 11, d: 6, l: 21, gf: 37, ga: 71, gd: -34, pts: 39 },
    { pos: 16, club: "Nottingham Forest", clubSlug: "nottingham-forest", p: 38, w: 9, d: 11, l: 18, gf: 38, ga: 68, gd: -30, pts: 38 },
    { pos: 17, club: "Everton", clubSlug: "everton", p: 38, w: 8, d: 12, l: 18, gf: 34, ga: 57, gd: -23, pts: 36 },
    { pos: 18, club: "Leicester City", clubSlug: "leicester-city", p: 38, w: 9, d: 7, l: 22, gf: 51, ga: 68, gd: -17, pts: 34, zone: "relegation" },
    { pos: 19, club: "Leeds United", clubSlug: "leeds-united", p: 38, w: 7, d: 10, l: 21, gf: 48, ga: 78, gd: -30, pts: 31, zone: "relegation" },
    { pos: 20, club: "Southampton", clubSlug: "southampton", p: 38, w: 6, d: 7, l: 25, gf: 36, ga: 73, gd: -37, pts: 25, zone: "relegation" },
  ],
  scorers: [
    { name: "Erling Haaland", playerSlug: "erling-haaland", club: "Manchester City", clubSlug: "manchester-city", goals: 36, assists: 8 },
    { name: "Harry Kane", playerSlug: "harry-kane", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 30, assists: 3 },
    { name: "Ivan Toney", playerSlug: "ivan-toney", club: "Brentford", clubSlug: "brentford", goals: 20, assists: 4 },
    { name: "Mohamed Salah", playerSlug: "mohamed-salah", club: "Liverpool", clubSlug: "liverpool", goals: 19, assists: 12 },
    { name: "Marcus Rashford", playerSlug: "marcus-rashford", club: "Manchester United", clubSlug: "manchester-united", goals: 17, assists: 5 },
    { name: "Gabriel Martinelli", playerSlug: "gabriel-martinelli", club: "Arsenal", clubSlug: "arsenal", goals: 15, assists: 6 },
    { name: "Ollie Watkins", playerSlug: "ollie-watkins", club: "Aston Villa", clubSlug: "aston-villa", goals: 15, assists: 5 },
    { name: "Darwin Nunez", playerSlug: "darwin-nunez", club: "Liverpool", clubSlug: "liverpool", goals: 15, assists: 3 },
    { name: "Bukayo Saka", playerSlug: "bukayo-saka", club: "Arsenal", clubSlug: "arsenal", goals: 14, assists: 11 },
    { name: "Aleksandar Mitrovic", playerSlug: "aleksandar-mitrovic", club: "Fulham", clubSlug: "fulham", goals: 14, assists: 3 },
  ],
  assisters: [
    { name: "Mohamed Salah", playerSlug: "mohamed-salah", club: "Liverpool", clubSlug: "liverpool", assists: 12 },
    { name: "Bukayo Saka", playerSlug: "bukayo-saka", club: "Arsenal", clubSlug: "arsenal", assists: 11 },
    { name: "Kevin De Bruyne", playerSlug: "kevin-de-bruyne", club: "Manchester City", clubSlug: "manchester-city", assists: 10 },
    { name: "Erling Haaland", playerSlug: "erling-haaland", club: "Manchester City", clubSlug: "manchester-city", assists: 8 },
    { name: "Pascal Gross", playerSlug: "pascal-gross", club: "Brighton & Hove Albion", clubSlug: "brighton", assists: 8 },
  ],
  cleanSheets: [
    { name: "David Raya", playerSlug: "david-raya", club: "Brentford", clubSlug: "brentford", cleanSheets: 14 },
    { name: "Nick Pope", playerSlug: "nick-pope", club: "Newcastle United", clubSlug: "newcastle-united", cleanSheets: 13 },
    { name: "Ederson", playerSlug: "ederson", club: "Manchester City", clubSlug: "manchester-city", cleanSheets: 12 },
    { name: "Aaron Ramsdale", playerSlug: "aaron-ramsdale", club: "Arsenal", clubSlug: "arsenal", cleanSheets: 11 },
    { name: "Alisson", playerSlug: "alisson", club: "Liverpool", clubSlug: "liverpool", cleanSheets: 10 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Erling Haaland", playerSlug: "erling-haaland" },
    { title: "Young Player of the Season", winner: "Bukayo Saka", playerSlug: "bukayo-saka" },
    { title: "Golden Glove", winner: "David Raya", playerSlug: "david-raya" },
    { title: "Manager of the Season", winner: "Mikel Arteta" },
  ],
  relegated: ["Leicester City", "Leeds United", "Southampton"],
  promoted: ["Burnley", "Sheffield United", "Luton Town"],
  narrative: `Manchester City made history in 2022-23 by completing an extraordinary treble, winning the Premier League, FA Cup and UEFA Champions League in the same season — a feat never before achieved by an English club. Pep Guardiola's side clinched the league title with 89 points, holding off a determined Arsenal challenge that had briefly looked like it might end City's dominance.

The story of the season was undoubtedly Erling Haaland. The Norwegian striker, signed from Borussia Dortmund the previous summer, shattered the Premier League single-season scoring record with an astonishing 36 goals in just 35 appearances. He surpassed the long-standing record of 34 goals shared by Alan Shearer and Andy Cole, and his relentless finishing made him virtually unplayable throughout the campaign. Haaland also contributed eight assists, rightfully earning the Player of the Season award.

Arsenal, under the continued guidance of Mikel Arteta, mounted their most serious title challenge in years. The Gunners led the table for large stretches of the campaign, playing attractive, high-energy football that had their fans dreaming of a first title since 2004. With 84 points and a potent attack led by Bukayo Saka and Gabriel Martinelli, Arsenal proved they had genuinely re-established themselves among the elite. A difficult run of results in April, however, allowed City to overtake them. Arteta was nonetheless named Manager of the Season for his transformative work at the club.

Manchester United enjoyed a much-improved campaign under Erik ten Hag in his first full season, finishing third with 75 points and winning the League Cup. Marcus Rashford rediscovered his best form with 17 league goals, while Bruno Fernandes continued to be their creative heartbeat. Newcastle United's resurgence was one of the feel-good stories of the season. Eddie Howe guided the Magpies to fourth place and Champions League qualification for the first time in 20 years, built on the meanest defence in the league alongside Manchester City with just 33 goals conceded.

Liverpool endured an inconsistent season, finishing fifth with 67 points as Jurgen Klopp's squad showed signs of needing significant investment. Brighton continued their remarkable rise under Roberto De Zerbi, finishing sixth and qualifying for European competition with an exciting brand of possession-based football.

Harry Kane scored 30 league goals in what proved to be his final season at Tottenham Hotspur before moving to Bayern Munich, while Chelsea suffered a turbulent campaign despite enormous spending, finishing a disappointing twelfth under a succession of managerial changes.

At the bottom end, the relegation of Leicester City was a shocking fall from grace for the 2016 champions, who dropped just seven years after their fairytale title. Leeds United and Southampton also went down, with Southampton finishing bottom on just 25 points. The three promoted sides for the following season — Burnley, Sheffield United and Luton Town — each brought contrasting stories to the top flight.

The 2022-23 season will be remembered above all for City's treble and Haaland's breathtaking debut campaign — a season that redefined what was possible in English football.`,
  notableMoments: [
    "Manchester City completed an historic treble, winning the Premier League, FA Cup and Champions League",
    "Erling Haaland broke the Premier League single-season scoring record with 36 goals",
    "Arsenal led the title race for much of the season before City overtook them in April",
    "Newcastle United qualified for the Champions League for the first time in 20 years",
    "Leicester City, the 2016 champions, were relegated to the Championship",
  ],
  metaTitle: "Premier League 2022-23 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2022-23 Premier League season. Final standings, top goalscorers, assists, player awards and a complete season recap of City's historic treble.",
};

export default data;
