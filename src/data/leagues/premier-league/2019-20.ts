import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "2019-20",
  seasonDisplay: "2019-20",
  champion: "Liverpool",
  championSlug: "liverpool",
  topScorer: "Jamie Vardy",
  topScorerGoals: 23,
  totalGoals: 1034,
  standings: [
    { pos: 1, club: "Liverpool", clubSlug: "liverpool", p: 38, w: 32, d: 3, l: 3, gf: 85, ga: 33, gd: 52, pts: 99, zone: "cl" },
    { pos: 2, club: "Manchester City", clubSlug: "manchester-city", p: 38, w: 26, d: 3, l: 9, gf: 102, ga: 35, gd: 67, pts: 81, zone: "cl" },
    { pos: 3, club: "Manchester United", clubSlug: "manchester-united", p: 38, w: 18, d: 12, l: 8, gf: 66, ga: 36, gd: 30, pts: 66, zone: "cl" },
    { pos: 4, club: "Chelsea", clubSlug: "chelsea", p: 38, w: 20, d: 6, l: 12, gf: 69, ga: 54, gd: 15, pts: 66, zone: "cl" },
    { pos: 5, club: "Leicester City", clubSlug: "leicester-city", p: 38, w: 18, d: 8, l: 12, gf: 67, ga: 41, gd: 26, pts: 62, zone: "el" },
    { pos: 6, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 38, w: 16, d: 11, l: 11, gf: 61, ga: 47, gd: 14, pts: 59, zone: "ecl" },
    { pos: 7, club: "Wolverhampton Wanderers", clubSlug: "wolves", p: 38, w: 15, d: 14, l: 9, gf: 51, ga: 40, gd: 11, pts: 59 },
    { pos: 8, club: "Arsenal", clubSlug: "arsenal", p: 38, w: 14, d: 14, l: 10, gf: 56, ga: 48, gd: 8, pts: 56 },
    { pos: 9, club: "Sheffield United", clubSlug: "sheffield-united", p: 38, w: 14, d: 12, l: 12, gf: 39, ga: 39, gd: 0, pts: 54 },
    { pos: 10, club: "Burnley", clubSlug: "burnley", p: 38, w: 15, d: 9, l: 14, gf: 43, ga: 50, gd: -7, pts: 54 },
    { pos: 11, club: "Southampton", clubSlug: "southampton", p: 38, w: 15, d: 7, l: 16, gf: 51, ga: 60, gd: -9, pts: 52 },
    { pos: 12, club: "Everton", clubSlug: "everton", p: 38, w: 13, d: 10, l: 15, gf: 44, ga: 56, gd: -12, pts: 49 },
    { pos: 13, club: "Newcastle United", clubSlug: "newcastle-united", p: 38, w: 11, d: 11, l: 16, gf: 38, ga: 58, gd: -20, pts: 44 },
    { pos: 14, club: "Crystal Palace", clubSlug: "crystal-palace", p: 38, w: 11, d: 10, l: 17, gf: 31, ga: 50, gd: -19, pts: 43 },
    { pos: 15, club: "Brighton & Hove Albion", clubSlug: "brighton", p: 38, w: 9, d: 14, l: 15, gf: 39, ga: 54, gd: -15, pts: 41 },
    { pos: 16, club: "West Ham United", clubSlug: "west-ham-united", p: 38, w: 10, d: 9, l: 19, gf: 49, ga: 62, gd: -13, pts: 39 },
    { pos: 17, club: "Aston Villa", clubSlug: "aston-villa", p: 38, w: 9, d: 8, l: 21, gf: 41, ga: 67, gd: -26, pts: 35 },
    { pos: 18, club: "AFC Bournemouth", clubSlug: "bournemouth", p: 38, w: 9, d: 7, l: 22, gf: 40, ga: 65, gd: -25, pts: 34, zone: "relegation" },
    { pos: 19, club: "Watford", clubSlug: "watford", p: 38, w: 8, d: 10, l: 20, gf: 36, ga: 64, gd: -28, pts: 34, zone: "relegation" },
    { pos: 20, club: "Norwich City", clubSlug: "norwich-city", p: 38, w: 5, d: 6, l: 27, gf: 26, ga: 75, gd: -49, pts: 21, zone: "relegation" },
  ],
  scorers: [
    { name: "Jamie Vardy", playerSlug: "jamie-vardy", club: "Leicester City", clubSlug: "leicester-city", goals: 23, assists: 5 },
    { name: "Pierre-Emerick Aubameyang", playerSlug: "pierre-emerick-aubameyang", club: "Arsenal", clubSlug: "arsenal", goals: 22, assists: 3 },
    { name: "Danny Ings", playerSlug: "danny-ings", club: "Southampton", clubSlug: "southampton", goals: 22, assists: 2 },
    { name: "Raheem Sterling", playerSlug: "raheem-sterling", club: "Manchester City", clubSlug: "manchester-city", goals: 20, assists: 4 },
    { name: "Mohamed Salah", playerSlug: "mohamed-salah", club: "Liverpool", clubSlug: "liverpool", goals: 19, assists: 10 },
    { name: "Sadio Mane", playerSlug: "sadio-mane", club: "Liverpool", clubSlug: "liverpool", goals: 18, assists: 9 },
    { name: "Marcus Rashford", playerSlug: "marcus-rashford", club: "Manchester United", clubSlug: "manchester-united", goals: 17, assists: 7 },
    { name: "Anthony Martial", playerSlug: "anthony-martial", club: "Manchester United", clubSlug: "manchester-united", goals: 17, assists: 5 },
    { name: "Raul Jimenez", playerSlug: "raul-jimenez", club: "Wolverhampton Wanderers", clubSlug: "wolves", goals: 17, assists: 6 },
    { name: "Tammy Abraham", playerSlug: "tammy-abraham", club: "Chelsea", clubSlug: "chelsea", goals: 15, assists: 3 },
  ],
  assisters: [
    { name: "Kevin De Bruyne", playerSlug: "kevin-de-bruyne", club: "Manchester City", clubSlug: "manchester-city", assists: 20 },
    { name: "Trent Alexander-Arnold", playerSlug: "trent-alexander-arnold", club: "Liverpool", clubSlug: "liverpool", assists: 13 },
    { name: "Andrew Robertson", playerSlug: "andrew-robertson", club: "Liverpool", clubSlug: "liverpool", assists: 12 },
    { name: "Mohamed Salah", playerSlug: "mohamed-salah", club: "Liverpool", clubSlug: "liverpool", assists: 10 },
    { name: "Sadio Mane", playerSlug: "sadio-mane", club: "Liverpool", clubSlug: "liverpool", assists: 9 },
  ],
  cleanSheets: [
    { name: "Ederson", playerSlug: "ederson", club: "Manchester City", clubSlug: "manchester-city", cleanSheets: 16 },
    { name: "Nick Pope", playerSlug: "nick-pope", club: "Burnley", clubSlug: "burnley", cleanSheets: 15 },
    { name: "Alisson", playerSlug: "alisson", club: "Liverpool", clubSlug: "liverpool", cleanSheets: 13 },
    { name: "Dean Henderson", playerSlug: "dean-henderson", club: "Sheffield United", clubSlug: "sheffield-united", cleanSheets: 13 },
    { name: "Kasper Schmeichel", playerSlug: "kasper-schmeichel", club: "Leicester City", clubSlug: "leicester-city", cleanSheets: 10 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Jordan Henderson", playerSlug: "jordan-henderson" },
    { title: "Young Player of the Season", winner: "Trent Alexander-Arnold", playerSlug: "trent-alexander-arnold" },
    { title: "Golden Glove", winner: "Ederson", playerSlug: "ederson" },
    { title: "Manager of the Season", winner: "Jurgen Klopp" },
  ],
  relegated: ["AFC Bournemouth", "Watford", "Norwich City"],
  promoted: ["Leeds United", "West Bromwich Albion", "Fulham"],
  narrative: `The 2019-20 Premier League season will forever be remembered as the year Liverpool ended their 30-year wait for a league title — and the year the world changed. The COVID-19 pandemic forced the season into a three-month hiatus from March to June, but when football returned, it was Jurgen Klopp's extraordinary Liverpool side who were confirmed as champions with seven matches still to play.

Liverpool's dominance was staggering. They won 32 of their 38 matches and amassed 99 points, the third-highest total in Premier League history and just one short of Manchester City's record 100. Their only league defeat came at Watford in February, ending a run of 44 unbeaten matches. The front three of Mohamed Salah, Sadio Mane and Roberto Firmino continued to terrorise defences, contributing 37 league goals between them, while the full-back pairing of Trent Alexander-Arnold and Andrew Robertson provided a combined 25 assists from defence.

Jordan Henderson, Liverpool's captain, was named Player of the Season — a fitting tribute to the midfielder whose leadership and energy drove the team throughout the campaign. Alexander-Arnold earned the Young Player of the Season award after another record-breaking season from right-back, with 13 assists underlining his revolutionary impact on the position.

Manchester City, despite finishing 18 points behind Liverpool, still scored 102 goals — the most in the league — thanks to the brilliance of Kevin De Bruyne. The Belgian maestro equaled Thierry Henry's long-standing record of 20 assists in a single season, cementing his status as one of the greatest creators the Premier League has ever seen.

Jamie Vardy became the oldest player to win the Golden Boot at the age of 33, netting 23 goals for Leicester City with characteristic speed and clinical finishing. His achievement was a testament to remarkable longevity. Pierre-Emerick Aubameyang and Danny Ings finished close behind with 22 goals each, with Ings's tally being particularly impressive for a Southampton side that flirted with relegation.

The season saw two Manchester clubs finish in the top four, with United securing third place thanks largely to Bruno Fernandes, who transformed the club following his January arrival from Sporting Lisbon. Chelsea, under the guidance of Frank Lampard, finished fourth with a youthful squad featuring Mason Mount, Tammy Abraham and Reece James.

Sheffield United were the surprise story of the campaign, finishing ninth in their first top-flight season since 2006-07 under Chris Wilder's innovative overlapping centre-back system. Wolverhampton Wanderers continued their impressive return to the Premier League with a seventh-place finish.

At the bottom, AFC Bournemouth's five-year spell in the Premier League came to an end. Watford and Norwich City also went down, with Norwich finishing bottom on just 21 points. The pandemic-affected conclusion to the season meant the final matches were played behind closed doors, robbing Liverpool of the chance to celebrate their historic triumph with their fans at Anfield.

Ederson claimed the Golden Glove with 16 clean sheets, while Nick Pope of Burnley ran him close with 15 — an outstanding achievement for a side that finished tenth.`,
  notableMoments: [
    "Liverpool won their first league title in 30 years, finishing on 99 points",
    "The season was suspended for three months due to the COVID-19 pandemic",
    "Kevin De Bruyne equaled Thierry Henry's record of 20 assists in a single season",
    "Jamie Vardy became the oldest Golden Boot winner at 33 years old",
    "Sheffield United finished ninth in their first top-flight season since 2006-07",
  ],
  metaTitle: "Premier League 2019-20 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2019-20 Premier League season. Final standings, top goalscorers, assists, player awards and a complete recap of Liverpool's historic title triumph.",
};

export default data;
