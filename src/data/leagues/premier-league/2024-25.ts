import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "2024-25",
  seasonDisplay: "2024-25",
  champion: "Liverpool",
  championSlug: "liverpool",
  topScorer: "Mohamed Salah",
  topScorerGoals: 29,
  totalGoals: 1115,
  standings: [
    { pos: 1, club: "Liverpool", clubSlug: "liverpool", p: 38, w: 25, d: 9, l: 4, gf: 86, ga: 41, gd: 45, pts: 84, zone: "cl" },
    { pos: 2, club: "Arsenal", clubSlug: "arsenal", p: 38, w: 20, d: 14, l: 4, gf: 69, ga: 34, gd: 35, pts: 74, zone: "cl" },
    { pos: 3, club: "Manchester City", clubSlug: "manchester-city", p: 38, w: 21, d: 8, l: 9, gf: 72, ga: 44, gd: 28, pts: 71, zone: "cl" },
    { pos: 4, club: "Chelsea", clubSlug: "chelsea", p: 38, w: 20, d: 9, l: 9, gf: 64, ga: 43, gd: 21, pts: 69, zone: "cl" },
    { pos: 5, club: "Newcastle United", clubSlug: "newcastle-united", p: 38, w: 20, d: 6, l: 12, gf: 68, ga: 47, gd: 21, pts: 66, zone: "cl" },
    { pos: 6, club: "Aston Villa", clubSlug: "aston-villa", p: 38, w: 19, d: 9, l: 10, gf: 58, ga: 51, gd: 7, pts: 66, zone: "el" },
    { pos: 7, club: "Nottingham Forest", clubSlug: "nottingham-forest", p: 38, w: 19, d: 8, l: 11, gf: 58, ga: 46, gd: 12, pts: 65, zone: "el" },
    { pos: 8, club: "Brighton & Hove Albion", clubSlug: "brighton", p: 38, w: 16, d: 13, l: 9, gf: 66, ga: 59, gd: 7, pts: 61 },
    { pos: 9, club: "AFC Bournemouth", clubSlug: "bournemouth", p: 38, w: 15, d: 11, l: 12, gf: 58, ga: 46, gd: 12, pts: 56 },
    { pos: 10, club: "Brentford", clubSlug: "brentford", p: 38, w: 16, d: 8, l: 14, gf: 66, ga: 57, gd: 9, pts: 56 },
    { pos: 11, club: "Fulham", clubSlug: "fulham", p: 38, w: 15, d: 9, l: 14, gf: 54, ga: 54, gd: 0, pts: 54 },
    { pos: 12, club: "Crystal Palace", clubSlug: "crystal-palace", p: 38, w: 13, d: 14, l: 11, gf: 51, ga: 51, gd: 0, pts: 53 },
    { pos: 13, club: "Everton", clubSlug: "everton", p: 38, w: 11, d: 15, l: 12, gf: 42, ga: 44, gd: -2, pts: 48 },
    { pos: 14, club: "West Ham United", clubSlug: "west-ham-united", p: 38, w: 11, d: 10, l: 17, gf: 46, ga: 62, gd: -16, pts: 43 },
    { pos: 15, club: "Manchester United", clubSlug: "manchester-united", p: 38, w: 11, d: 9, l: 18, gf: 44, ga: 54, gd: -10, pts: 42 },
    { pos: 16, club: "Wolverhampton Wanderers", clubSlug: "wolves", p: 38, w: 12, d: 6, l: 20, gf: 54, ga: 69, gd: -15, pts: 42 },
    { pos: 17, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 38, w: 11, d: 5, l: 22, gf: 64, ga: 65, gd: -1, pts: 38 },
    { pos: 18, club: "Leicester City", clubSlug: "leicester-city", p: 38, w: 6, d: 7, l: 25, gf: 33, ga: 80, gd: -47, pts: 25, zone: "relegation" },
    { pos: 19, club: "Ipswich Town", clubSlug: "ipswich-town", p: 38, w: 4, d: 10, l: 24, gf: 36, ga: 82, gd: -46, pts: 22, zone: "relegation" },
    { pos: 20, club: "Southampton", clubSlug: "southampton", p: 38, w: 2, d: 6, l: 30, gf: 26, ga: 86, gd: -60, pts: 12, zone: "relegation" },
  ],
  scorers: [
    { name: "Mohamed Salah", playerSlug: "mohamed-salah", club: "Liverpool", clubSlug: "liverpool", goals: 29, assists: 18 },
    { name: "Alexander Isak", playerSlug: "alexander-isak", club: "Newcastle United", clubSlug: "newcastle-united", goals: 23, assists: 4 },
    { name: "Erling Haaland", playerSlug: "erling-haaland", club: "Manchester City", clubSlug: "manchester-city", goals: 22, assists: 5 },
    { name: "Bryan Mbeumo", playerSlug: "bryan-mbeumo", club: "Brentford", clubSlug: "brentford", goals: 20, assists: 8 },
    { name: "Chris Wood", playerSlug: "chris-wood", club: "Nottingham Forest", clubSlug: "nottingham-forest", goals: 20, assists: 4 },
    { name: "Yoane Wissa", playerSlug: "yoane-wissa", club: "Brentford", clubSlug: "brentford", goals: 19, assists: 4 },
    { name: "Ollie Watkins", playerSlug: "ollie-watkins", club: "Aston Villa", clubSlug: "aston-villa", goals: 16, assists: 5 },
    { name: "Matheus Cunha", playerSlug: "matheus-cunha", club: "Wolverhampton Wanderers", clubSlug: "wolves", goals: 15, assists: 10 },
    { name: "Cole Palmer", playerSlug: "cole-palmer", club: "Chelsea", clubSlug: "chelsea", goals: 15, assists: 11 },
    { name: "Jean-Philippe Mateta", playerSlug: "jean-philippe-mateta", club: "Crystal Palace", clubSlug: "crystal-palace", goals: 14, assists: 3 },
  ],
  assisters: [
    { name: "Mohamed Salah", playerSlug: "mohamed-salah", club: "Liverpool", clubSlug: "liverpool", assists: 18 },
    { name: "Cole Palmer", playerSlug: "cole-palmer", club: "Chelsea", clubSlug: "chelsea", assists: 11 },
    { name: "Matheus Cunha", playerSlug: "matheus-cunha", club: "Wolverhampton Wanderers", clubSlug: "wolves", assists: 10 },
    { name: "Morgan Rogers", playerSlug: "morgan-rogers", club: "Aston Villa", clubSlug: "aston-villa", assists: 10 },
    { name: "Noni Madueke", playerSlug: "noni-madueke", club: "Chelsea", clubSlug: "chelsea", assists: 10 },
  ],
  cleanSheets: [
    { name: "David Raya", playerSlug: "david-raya", club: "Arsenal", clubSlug: "arsenal", cleanSheets: 13 },
    { name: "Matz Sels", playerSlug: "matz-sels", club: "Nottingham Forest", clubSlug: "nottingham-forest", cleanSheets: 13 },
    { name: "Jordan Pickford", playerSlug: "jordan-pickford", club: "Everton", clubSlug: "everton", cleanSheets: 12 },
    { name: "Dean Henderson", playerSlug: "dean-henderson", club: "Crystal Palace", clubSlug: "crystal-palace", cleanSheets: 11 },
    { name: "Ederson", playerSlug: "ederson", club: "Manchester City", clubSlug: "manchester-city", cleanSheets: 10 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Mohamed Salah", playerSlug: "mohamed-salah" },
    { title: "Young Player of the Season", winner: "Ryan Gravenberch", playerSlug: "ryan-gravenberch" },
    { title: "Golden Glove", winner: "David Raya / Matz Sels", playerSlug: "david-raya" },
    { title: "Manager of the Season", winner: "Arne Slot" },
  ],
  relegated: ["Leicester City", "Ipswich Town", "Southampton"],
  promoted: ["Leeds United", "Burnley", "Sheffield United"],
  narrative: `Liverpool swept to their second Premier League title under new head coach Arne Slot, clinching the crown with four games to spare after a dominant campaign that saw them lead the table for almost the entire season. Slot, who replaced the iconic Jurgen Klopp in the summer, proved a seamless successor, guiding the Reds to 84 points and equalling Manchester United's record of 20 English league titles.

Mohamed Salah was the undisputed star of the season, producing one of the finest individual campaigns in Premier League history. The Egyptian scored 29 goals to win his fourth Golden Boot and contributed 18 assists to claim the Playmaker of the Season award -- becoming the first player to win both in the same season. His partnership with Virgil van Dijk, who remained an immovable force at the back, and the emergence of Ryan Gravenberch in midfield gave Liverpool a balanced, relentless quality.

Arsenal finished as runners-up for the third consecutive season on 74 points. Mikel Arteta's side boasted the league's tightest defence, conceding just 34 goals, but drew 14 matches -- too many for a genuine title challenge. Manchester City finished third on 71 points, a significant comedown from their four consecutive titles. Pep Guardiola's squad struggled for consistency, particularly in the first half of the season, though the January signing of Omar Marmoush provided a spark.

Chelsea secured fourth place under Enzo Maresca, completing a remarkable turnaround from the turmoil of recent years. Newcastle United claimed the final automatic Champions League spot in fifth. Aston Villa and Nottingham Forest both earned Europa League qualification, with Forest enjoying their best top-flight campaign in decades, propelled by Chris Wood's 20 goals and the goalkeeping brilliance of Matz Sels.

Tottenham Hotspur endured a desperately poor league season, finishing 17th with just 38 points, though they redeemed their campaign by winning the Europa League. Manchester United, now under Ruben Amorim following Erik ten Hag's sacking in October, managed only 42 points in a dismal year at Old Trafford.

At the bottom, all three promoted clubs went straight back down for the second consecutive season -- only the third time this had happened in English top-flight history. Southampton set unwanted records, becoming the first team relegated with seven matches remaining after accumulating just 12 points. Leicester City and Ipswich Town followed them into the Championship.

A season defined by Liverpool's resurgence, Salah's brilliance and the continued evolution of the Premier League landscape, 2024-25 will be remembered as the year the Reds reclaimed their throne.`,
  notableMoments: [
    "Liverpool won the Premier League in Arne Slot's first season, clinching the title with four games to spare",
    "Mohamed Salah scored 29 goals and provided 18 assists, winning both the Golden Boot and Playmaker awards",
    "Southampton were relegated with seven games remaining, a new Premier League record",
    "All three promoted clubs went straight back down for the second consecutive season",
    "Nottingham Forest enjoyed their best top-flight campaign in decades, finishing seventh",
  ],
  metaTitle: "Premier League 2024-25 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2024-25 Premier League season. Liverpool's title triumph under Arne Slot, final standings, top goalscorers, assists and complete season recap.",
};

export default data;
