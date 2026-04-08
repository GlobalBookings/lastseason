import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "2021-22",
  seasonDisplay: "2021-22",
  champion: "Manchester City",
  championSlug: "manchester-city",
  topScorer: "Mohamed Salah & Son Heung-min",
  topScorerGoals: 23,
  totalGoals: 1071,
  standings: [
    { pos: 1, club: "Manchester City", clubSlug: "manchester-city", p: 38, w: 29, d: 6, l: 3, gf: 99, ga: 26, gd: 73, pts: 93, zone: "cl" },
    { pos: 2, club: "Liverpool", clubSlug: "liverpool", p: 38, w: 28, d: 8, l: 2, gf: 94, ga: 26, gd: 68, pts: 92, zone: "cl" },
    { pos: 3, club: "Chelsea", clubSlug: "chelsea", p: 38, w: 21, d: 11, l: 6, gf: 76, ga: 33, gd: 43, pts: 74, zone: "cl" },
    { pos: 4, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 38, w: 22, d: 5, l: 11, gf: 69, ga: 40, gd: 29, pts: 71, zone: "cl" },
    { pos: 5, club: "Arsenal", clubSlug: "arsenal", p: 38, w: 22, d: 3, l: 13, gf: 61, ga: 48, gd: 13, pts: 69, zone: "el" },
    { pos: 6, club: "Manchester United", clubSlug: "manchester-united", p: 38, w: 16, d: 10, l: 12, gf: 57, ga: 57, gd: 0, pts: 58, zone: "ecl" },
    { pos: 7, club: "West Ham United", clubSlug: "west-ham-united", p: 38, w: 16, d: 8, l: 14, gf: 60, ga: 51, gd: 9, pts: 56 },
    { pos: 8, club: "Leicester City", clubSlug: "leicester-city", p: 38, w: 14, d: 10, l: 14, gf: 62, ga: 59, gd: 3, pts: 52 },
    { pos: 9, club: "Brighton & Hove Albion", clubSlug: "brighton", p: 38, w: 12, d: 15, l: 11, gf: 42, ga: 44, gd: -2, pts: 51 },
    { pos: 10, club: "Wolverhampton Wanderers", clubSlug: "wolves", p: 38, w: 15, d: 6, l: 17, gf: 38, ga: 43, gd: -5, pts: 51 },
    { pos: 11, club: "Newcastle United", clubSlug: "newcastle-united", p: 38, w: 13, d: 10, l: 15, gf: 44, ga: 62, gd: -18, pts: 49 },
    { pos: 12, club: "Crystal Palace", clubSlug: "crystal-palace", p: 38, w: 11, d: 15, l: 12, gf: 50, ga: 46, gd: 4, pts: 48 },
    { pos: 13, club: "Brentford", clubSlug: "brentford", p: 38, w: 13, d: 7, l: 18, gf: 48, ga: 56, gd: -8, pts: 46 },
    { pos: 14, club: "Aston Villa", clubSlug: "aston-villa", p: 38, w: 13, d: 6, l: 19, gf: 52, ga: 54, gd: -2, pts: 45 },
    { pos: 15, club: "Southampton", clubSlug: "southampton", p: 38, w: 9, d: 13, l: 16, gf: 43, ga: 67, gd: -24, pts: 40 },
    { pos: 16, club: "Everton", clubSlug: "everton", p: 38, w: 11, d: 6, l: 21, gf: 43, ga: 66, gd: -23, pts: 39 },
    { pos: 17, club: "Leeds United", clubSlug: "leeds-united", p: 38, w: 9, d: 11, l: 18, gf: 42, ga: 79, gd: -37, pts: 38 },
    { pos: 18, club: "Burnley", clubSlug: "burnley", p: 38, w: 7, d: 14, l: 17, gf: 34, ga: 53, gd: -19, pts: 35, zone: "relegation" },
    { pos: 19, club: "Watford", clubSlug: "watford", p: 38, w: 6, d: 5, l: 27, gf: 34, ga: 77, gd: -43, pts: 23, zone: "relegation" },
    { pos: 20, club: "Norwich City", clubSlug: "norwich-city", p: 38, w: 5, d: 7, l: 26, gf: 23, ga: 84, gd: -61, pts: 22, zone: "relegation" },
  ],
  scorers: [
    { name: "Mohamed Salah", playerSlug: "mohamed-salah", club: "Liverpool", clubSlug: "liverpool", goals: 23, assists: 13 },
    { name: "Son Heung-min", playerSlug: "son-heung-min", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 23, assists: 7 },
    { name: "Cristiano Ronaldo", playerSlug: "cristiano-ronaldo", club: "Manchester United", clubSlug: "manchester-united", goals: 18, assists: 3 },
    { name: "Harry Kane", playerSlug: "harry-kane", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 17, assists: 9 },
    { name: "Sadio Mane", playerSlug: "sadio-mane", club: "Liverpool", clubSlug: "liverpool", goals: 16, assists: 2 },
    { name: "Kevin De Bruyne", playerSlug: "kevin-de-bruyne", club: "Manchester City", clubSlug: "manchester-city", goals: 15, assists: 8 },
    { name: "Diogo Jota", playerSlug: "diogo-jota", club: "Liverpool", clubSlug: "liverpool", goals: 15, assists: 4 },
    { name: "Jamie Vardy", playerSlug: "jamie-vardy", club: "Leicester City", clubSlug: "leicester-city", goals: 15, assists: 2 },
    { name: "Raheem Sterling", playerSlug: "raheem-sterling", club: "Manchester City", clubSlug: "manchester-city", goals: 13, assists: 5 },
    { name: "Jarrod Bowen", playerSlug: "jarrod-bowen", club: "West Ham United", clubSlug: "west-ham-united", goals: 12, assists: 10 },
  ],
  assisters: [
    { name: "Mohamed Salah", playerSlug: "mohamed-salah", club: "Liverpool", clubSlug: "liverpool", assists: 13 },
    { name: "Trent Alexander-Arnold", playerSlug: "trent-alexander-arnold", club: "Liverpool", clubSlug: "liverpool", assists: 12 },
    { name: "Jarrod Bowen", playerSlug: "jarrod-bowen", club: "West Ham United", clubSlug: "west-ham-united", assists: 10 },
    { name: "Andrew Robertson", playerSlug: "andrew-robertson", club: "Liverpool", clubSlug: "liverpool", assists: 10 },
    { name: "Harry Kane", playerSlug: "harry-kane", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", assists: 9 },
  ],
  cleanSheets: [
    { name: "Alisson", playerSlug: "alisson", club: "Liverpool", clubSlug: "liverpool", cleanSheets: 20 },
    { name: "Ederson", playerSlug: "ederson", club: "Manchester City", clubSlug: "manchester-city", cleanSheets: 20 },
    { name: "Jose Sa", playerSlug: "jose-sa", club: "Wolverhampton Wanderers", clubSlug: "wolves", cleanSheets: 14 },
    { name: "Aaron Ramsdale", playerSlug: "aaron-ramsdale", club: "Arsenal", clubSlug: "arsenal", cleanSheets: 12 },
    { name: "Hugo Lloris", playerSlug: "hugo-lloris", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", cleanSheets: 12 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Kevin De Bruyne", playerSlug: "kevin-de-bruyne" },
    { title: "Young Player of the Season", winner: "Phil Foden", playerSlug: "phil-foden" },
    { title: "Golden Glove", winner: "Alisson & Ederson" },
    { title: "Manager of the Season", winner: "Pep Guardiola" },
  ],
  relegated: ["Burnley", "Watford", "Norwich City"],
  promoted: ["Fulham", "AFC Bournemouth", "Nottingham Forest"],
  narrative: `The 2021-22 Premier League season produced one of the greatest title races in the competition's history, with Manchester City pipping Liverpool by a single point on a dramatic final day. City finished on 93 points, just one ahead of Jurgen Klopp's relentless Liverpool side on 92  -  the third-highest points total ever recorded by a runner-up.

The final day drama at the Etihad Stadium will live long in the memory. City found themselves 2-0 down to Aston Villa at half-time, with Liverpool leading Wolverhampton Wanderers at Anfield and the title seemingly slipping away. But three goals in five extraordinary second-half minutes  -  from Ilkay Gundogan twice and Rodri  -  turned the match and the title race on its head. City won 3-2 and were confirmed as champions for the fourth time in five seasons.

Mohamed Salah and Son Heung-min shared the Golden Boot with 23 goals apiece, the first time two players had finished level at the top since 1998-99. Salah also contributed 13 assists for Liverpool, making him one of the most complete attacking players in the world. Son's goals were particularly remarkable given Tottenham's largely defensive approach under Antonio Conte, who guided them to a fourth-place finish and Champions League qualification.

Kevin De Bruyne was named Player of the Season after another sublime campaign orchestrating City's attacking play. The Belgian scored 15 goals from midfield and was the creative fulcrum of Guardiola's system. Phil Foden earned the Young Player of the Season award for the second consecutive year, continuing his development as one of England's brightest talents.

Chelsea finished third with 74 points under Thomas Tuchel, though their season was disrupted significantly by the sanctions imposed on owner Roman Abramovich following Russia's invasion of Ukraine. Despite the off-field turmoil, Chelsea remained competitive and reached the FA Cup final. Arsenal, under Mikel Arteta, were in the running for fourth place until a late-season collapse saw them slip to fifth.

The goalkeeping awards told their own story  -  Alisson and Ederson shared the Golden Glove with an astonishing 20 clean sheets each, underlining the defensive excellence at both title-chasing clubs. Liverpool conceded just 26 goals all season, the same as City.

At the bottom, Burnley's six-year Premier League stay came to an end as they were relegated with 35 points. Watford returned to the Championship immediately after promotion with just 23 points, while Norwich City suffered the same fate for the second time in three seasons, finishing bottom with only 22 points and 23 goals scored  -  the lowest tally in over a decade.

Brentford impressed in their debut Premier League campaign, finishing a comfortable thirteenth, while Newcastle United's Saudi-backed takeover began to bear fruit in the second half of the season as Eddie Howe transformed their fortunes. The 2021-22 season set the stage for a new era of competition at the top of English football.`,
  notableMoments: [
    "Manchester City won the title on the final day, coming from 2-0 down to beat Aston Villa 3-2",
    "Mohamed Salah and Son Heung-min shared the Golden Boot with 23 goals each",
    "Liverpool amassed 92 points but finished second by a single point",
    "Everton survived relegation with a dramatic comeback win against Crystal Palace on the penultimate matchday",
    "Norwich City and Watford suffered immediate relegation after promotion",
  ],
  metaTitle: "Premier League 2021-22 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2021-22 Premier League season. Final standings, top goalscorers, assists, player awards and a complete recap of City's dramatic final-day title win.",
};

export default data;
