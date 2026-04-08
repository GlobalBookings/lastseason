import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "1993-94",
  seasonDisplay: "1993-94",
  champion: "Manchester United",
  championSlug: "manchester-united",
  topScorer: "Andy Cole",
  topScorerGoals: 34,
  totalGoals: 1195,
  standings: [
    { pos: 1, club: "Manchester United", clubSlug: "manchester-united", p: 42, w: 27, d: 11, l: 4, gf: 80, ga: 38, gd: 42, pts: 92, zone: "cl" },
    { pos: 2, club: "Blackburn Rovers", clubSlug: "blackburn-rovers", p: 42, w: 25, d: 9, l: 8, gf: 63, ga: 36, gd: 27, pts: 84, zone: "cl" },
    { pos: 3, club: "Newcastle United", clubSlug: "newcastle-united", p: 42, w: 23, d: 8, l: 11, gf: 82, ga: 41, gd: 41, pts: 77, zone: "el" },
    { pos: 4, club: "Arsenal", clubSlug: "arsenal", p: 42, w: 18, d: 17, l: 7, gf: 53, ga: 28, gd: 25, pts: 71, zone: "el" },
    { pos: 5, club: "Leeds United", clubSlug: "leeds-united", p: 42, w: 18, d: 16, l: 8, gf: 65, ga: 39, gd: 26, pts: 70 },
    { pos: 6, club: "Wimbledon", clubSlug: "wimbledon", p: 42, w: 18, d: 11, l: 13, gf: 56, ga: 53, gd: 3, pts: 65 },
    { pos: 7, club: "Sheffield Wednesday", clubSlug: "sheffield-wednesday", p: 42, w: 16, d: 16, l: 10, gf: 76, ga: 54, gd: 22, pts: 64 },
    { pos: 8, club: "Liverpool", clubSlug: "liverpool", p: 42, w: 17, d: 9, l: 16, gf: 59, ga: 55, gd: 4, pts: 60 },
    { pos: 9, club: "Queens Park Rangers", clubSlug: "queens-park-rangers", p: 42, w: 16, d: 12, l: 14, gf: 62, ga: 61, gd: 1, pts: 60 },
    { pos: 10, club: "Aston Villa", clubSlug: "aston-villa", p: 42, w: 15, d: 12, l: 15, gf: 46, ga: 50, gd: -4, pts: 57 },
    { pos: 11, club: "Coventry City", clubSlug: "coventry-city", p: 42, w: 14, d: 14, l: 14, gf: 43, ga: 45, gd: -2, pts: 56 },
    { pos: 12, club: "Norwich City", clubSlug: "norwich-city", p: 42, w: 12, d: 17, l: 13, gf: 65, ga: 61, gd: 4, pts: 53 },
    { pos: 13, club: "West Ham United", clubSlug: "west-ham-united", p: 42, w: 13, d: 13, l: 16, gf: 47, ga: 58, gd: -11, pts: 52 },
    { pos: 14, club: "Chelsea", clubSlug: "chelsea", p: 42, w: 13, d: 12, l: 17, gf: 49, ga: 53, gd: -4, pts: 51 },
    { pos: 15, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 42, w: 11, d: 12, l: 19, gf: 54, ga: 59, gd: -5, pts: 45 },
    { pos: 16, club: "Manchester City", clubSlug: "manchester-city", p: 42, w: 9, d: 18, l: 15, gf: 38, ga: 49, gd: -11, pts: 45 },
    { pos: 17, club: "Everton", clubSlug: "everton", p: 42, w: 12, d: 8, l: 22, gf: 42, ga: 63, gd: -21, pts: 44 },
    { pos: 18, club: "Southampton", clubSlug: "southampton", p: 42, w: 12, d: 7, l: 23, gf: 49, ga: 66, gd: -17, pts: 43 },
    { pos: 19, club: "Ipswich Town", clubSlug: "ipswich-town", p: 42, w: 9, d: 16, l: 17, gf: 35, ga: 58, gd: -23, pts: 43 },
    { pos: 20, club: "Sheffield United", clubSlug: "sheffield-united", p: 42, w: 8, d: 18, l: 16, gf: 42, ga: 60, gd: -18, pts: 42, zone: "relegation" },
    { pos: 21, club: "Oldham Athletic", clubSlug: "oldham-athletic", p: 42, w: 9, d: 13, l: 20, gf: 42, ga: 68, gd: -26, pts: 40, zone: "relegation" },
    { pos: 22, club: "Swindon Town", clubSlug: "swindon-town", p: 42, w: 5, d: 15, l: 22, gf: 47, ga: 100, gd: -53, pts: 30, zone: "relegation" },
  ],
  scorers: [
    { name: "Andy Cole", playerSlug: "andy-cole", club: "Newcastle United", clubSlug: "newcastle-united", goals: 34, assists: 0 },
    { name: "Alan Shearer", playerSlug: "alan-shearer", club: "Blackburn Rovers", clubSlug: "blackburn-rovers", goals: 31, assists: 0 },
    { name: "Matt Le Tissier", playerSlug: "matt-le-tissier", club: "Southampton", clubSlug: "southampton", goals: 25, assists: 0 },
    { name: "Chris Sutton", playerSlug: "chris-sutton", club: "Norwich City", clubSlug: "norwich-city", goals: 25, assists: 0 },
    { name: "Ian Wright", playerSlug: "ian-wright", club: "Arsenal", clubSlug: "arsenal", goals: 23, assists: 0 },
    { name: "Peter Beardsley", playerSlug: "peter-beardsley", club: "Newcastle United", clubSlug: "newcastle-united", goals: 21, assists: 0 },
    { name: "Mark Bright", playerSlug: "mark-bright", club: "Sheffield Wednesday", clubSlug: "sheffield-wednesday", goals: 19, assists: 0 },
    { name: "Eric Cantona", playerSlug: "eric-cantona", club: "Manchester United", clubSlug: "manchester-united", goals: 18, assists: 0 },
    { name: "Dean Holdsworth", playerSlug: "dean-holdsworth", club: "Wimbledon", clubSlug: "wimbledon", goals: 17, assists: 0 },
    { name: "Tony Cottee", playerSlug: "tony-cottee", club: "Everton", clubSlug: "everton", goals: 16, assists: 0 },
  ],
  assisters: [
    { name: "Peter Beardsley", playerSlug: "peter-beardsley", club: "Newcastle United", clubSlug: "newcastle-united", assists: 12 },
    { name: "Eric Cantona", playerSlug: "eric-cantona", club: "Manchester United", clubSlug: "manchester-united", assists: 11 },
    { name: "Matt Le Tissier", playerSlug: "matt-le-tissier", club: "Southampton", clubSlug: "southampton", assists: 10 },
    { name: "Ryan Giggs", playerSlug: "ryan-giggs", club: "Manchester United", clubSlug: "manchester-united", assists: 9 },
    { name: "Robert Lee", playerSlug: "robert-lee", club: "Newcastle United", clubSlug: "newcastle-united", assists: 8 },
  ],
  cleanSheets: [
    { name: "David Seaman", playerSlug: "david-seaman", club: "Arsenal", clubSlug: "arsenal", cleanSheets: 19 },
    { name: "Peter Schmeichel", playerSlug: "peter-schmeichel", club: "Manchester United", clubSlug: "manchester-united", cleanSheets: 15 },
    { name: "Ludek Miklosko", playerSlug: "ludek-miklosko", club: "West Ham United", clubSlug: "west-ham-united", cleanSheets: 14 },
    { name: "Tim Flowers", playerSlug: "tim-flowers", club: "Blackburn Rovers", clubSlug: "blackburn-rovers", cleanSheets: 13 },
    { name: "Dmitri Kharine", playerSlug: "dmitri-kharine", club: "Chelsea", clubSlug: "chelsea", cleanSheets: 11 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Eric Cantona", playerSlug: "eric-cantona" },
    { title: "Young Player of the Season", winner: "Andy Cole", playerSlug: "andy-cole" },
    { title: "Golden Boot", winner: "Andy Cole", playerSlug: "andy-cole" },
  ],
  relegated: ["Sheffield United", "Oldham Athletic", "Swindon Town"],
  promoted: ["Crystal Palace", "Nottingham Forest", "Leicester City"],
  narrative: `Manchester United confirmed their status as the dominant force in English football by winning the Premier League for a second consecutive season, finishing on 92 points  -  eight clear of Blackburn Rovers. Alex Ferguson's side also won the FA Cup, beating Chelsea 4-0 in the final to complete a league and cup double, only the fourth team to achieve the feat in the 20th century.

United led the table for almost the entire campaign, building an 11-point lead by the end of October that eventually peaked at 16 points. A wobble in March briefly saw Blackburn close the gap, but Ferguson's men reasserted their authority and sealed the title with two games to spare. Eric Cantona was sublime, earning the PFA Player of the Year award with a combination of goals, assists and sheer creative brilliance.

Blackburn Rovers continued their rise under Kenny Dalglish, finishing as runners-up with 84 points. Alan Shearer scored 31 league goals to establish himself as one of the most feared strikers in the country. Newcastle United, newly promoted, made an immediate impact under Kevin Keegan, finishing third as Andy Cole set the league alight with 34 goals in 40 games to claim the Golden Boot and the PFA Young Player of the Year award. Arsenal secured fourth place and reached the European Cup Winners' Cup final, beating Parma 1-0.

The bottom of the table told a grim story. Swindon Town, in their first-ever top-flight campaign, managed just five wins and conceded a staggering 100 goals  -  a Premier League record that stood for three decades until Sheffield United conceded 104 in 2023-24. Oldham Athletic, who had narrowly survived the previous season, were relegated on the final day after failing to win at Norwich. Sheffield United's relegation was sealed by a dramatic late defeat at Chelsea, with the winning goal coming in injury time.

Sheffield Wednesday were the league's most entertaining side, scoring 76 goals from seventh place, while Norwich City continued to punch above their weight, though their league form dipped after manager Mike Walker departed for Everton in January. Everton themselves endured a torrid season, narrowly avoiding relegation on the final day.

The 1993-94 season established the Premier League as a thrilling, unpredictable competition and cemented Manchester United's position at its summit.`,
  notableMoments: [
    "Manchester United won the league and FA Cup double  -  only the fourth club to achieve this in the 20th century",
    "Andy Cole scored 34 Premier League goals for Newcastle, the highest tally in the first three PL seasons",
    "Swindon Town conceded 100 goals in their only Premier League season",
    "Eric Cantona won the PFA Player of the Year award after an outstanding campaign",
    "Arsenal won the European Cup Winners' Cup, beating Parma 1-0 in the final",
  ],
  metaTitle: "Premier League 1993-94 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 1993-94 Premier League season. Final standings, top goalscorers, assists, player awards and a complete season recap.",
};

export default data;
