import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "2020-21",
  seasonDisplay: "2020-21",
  champion: "Manchester City",
  championSlug: "manchester-city",
  topScorer: "Harry Kane",
  topScorerGoals: 23,
  totalGoals: 1024,
  standings: [
    { pos: 1, club: "Manchester City", clubSlug: "manchester-city", p: 38, w: 27, d: 5, l: 6, gf: 83, ga: 32, gd: 51, pts: 86, zone: "cl" },
    { pos: 2, club: "Manchester United", clubSlug: "manchester-united", p: 38, w: 21, d: 11, l: 6, gf: 73, ga: 44, gd: 29, pts: 74, zone: "cl" },
    { pos: 3, club: "Liverpool", clubSlug: "liverpool", p: 38, w: 20, d: 9, l: 9, gf: 68, ga: 42, gd: 26, pts: 69, zone: "cl" },
    { pos: 4, club: "Chelsea", clubSlug: "chelsea", p: 38, w: 19, d: 10, l: 9, gf: 58, ga: 36, gd: 22, pts: 67, zone: "cl" },
    { pos: 5, club: "Leicester City", clubSlug: "leicester-city", p: 38, w: 20, d: 6, l: 12, gf: 68, ga: 50, gd: 18, pts: 66, zone: "el" },
    { pos: 6, club: "West Ham United", clubSlug: "west-ham-united", p: 38, w: 19, d: 8, l: 11, gf: 62, ga: 47, gd: 15, pts: 65, zone: "ecl" },
    { pos: 7, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 38, w: 18, d: 8, l: 12, gf: 68, ga: 45, gd: 23, pts: 62 },
    { pos: 8, club: "Arsenal", clubSlug: "arsenal", p: 38, w: 18, d: 7, l: 13, gf: 55, ga: 39, gd: 16, pts: 61 },
    { pos: 9, club: "Leeds United", clubSlug: "leeds-united", p: 38, w: 18, d: 5, l: 15, gf: 62, ga: 54, gd: 8, pts: 59 },
    { pos: 10, club: "Everton", clubSlug: "everton", p: 38, w: 17, d: 8, l: 13, gf: 47, ga: 48, gd: -1, pts: 59 },
    { pos: 11, club: "Aston Villa", clubSlug: "aston-villa", p: 38, w: 16, d: 7, l: 15, gf: 55, ga: 46, gd: 9, pts: 55 },
    { pos: 12, club: "Newcastle United", clubSlug: "newcastle-united", p: 38, w: 12, d: 9, l: 17, gf: 46, ga: 62, gd: -16, pts: 45 },
    { pos: 13, club: "Wolverhampton Wanderers", clubSlug: "wolves", p: 38, w: 12, d: 9, l: 17, gf: 36, ga: 52, gd: -16, pts: 45 },
    { pos: 14, club: "Crystal Palace", clubSlug: "crystal-palace", p: 38, w: 12, d: 8, l: 18, gf: 41, ga: 66, gd: -25, pts: 44 },
    { pos: 15, club: "Southampton", clubSlug: "southampton", p: 38, w: 12, d: 7, l: 19, gf: 47, ga: 68, gd: -21, pts: 43 },
    { pos: 16, club: "Brighton & Hove Albion", clubSlug: "brighton", p: 38, w: 9, d: 14, l: 15, gf: 40, ga: 46, gd: -6, pts: 41 },
    { pos: 17, club: "Burnley", clubSlug: "burnley", p: 38, w: 10, d: 9, l: 19, gf: 33, ga: 55, gd: -22, pts: 39 },
    { pos: 18, club: "Fulham", clubSlug: "fulham", p: 38, w: 5, d: 13, l: 20, gf: 27, ga: 53, gd: -26, pts: 28, zone: "relegation" },
    { pos: 19, club: "West Bromwich Albion", clubSlug: "west-brom", p: 38, w: 5, d: 11, l: 22, gf: 35, ga: 76, gd: -41, pts: 26, zone: "relegation" },
    { pos: 20, club: "Sheffield United", clubSlug: "sheffield-united", p: 38, w: 7, d: 2, l: 29, gf: 20, ga: 63, gd: -43, pts: 23, zone: "relegation" },
  ],
  scorers: [
    { name: "Harry Kane", playerSlug: "harry-kane", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 23, assists: 14 },
    { name: "Mohamed Salah", playerSlug: "mohamed-salah", club: "Liverpool", clubSlug: "liverpool", goals: 22, assists: 5 },
    { name: "Bruno Fernandes", playerSlug: "bruno-fernandes", club: "Manchester United", clubSlug: "manchester-united", goals: 18, assists: 12 },
    { name: "Patrick Bamford", playerSlug: "patrick-bamford", club: "Leeds United", clubSlug: "leeds-united", goals: 17, assists: 8 },
    { name: "Son Heung-min", playerSlug: "son-heung-min", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 17, assists: 10 },
    { name: "Dominic Calvert-Lewin", playerSlug: "dominic-calvert-lewin", club: "Everton", clubSlug: "everton", goals: 16, assists: 1 },
    { name: "Jamie Vardy", playerSlug: "jamie-vardy", club: "Leicester City", clubSlug: "leicester-city", goals: 15, assists: 3 },
    { name: "Ollie Watkins", playerSlug: "ollie-watkins", club: "Aston Villa", clubSlug: "aston-villa", goals: 14, assists: 5 },
    { name: "Alexandre Lacazette", playerSlug: "alexandre-lacazette", club: "Arsenal", clubSlug: "arsenal", goals: 13, assists: 2 },
    { name: "Ilkay Gundogan", playerSlug: "ilkay-gundogan", club: "Manchester City", clubSlug: "manchester-city", goals: 13, assists: 2 },
  ],
  assisters: [
    { name: "Harry Kane", playerSlug: "harry-kane", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", assists: 14 },
    { name: "Bruno Fernandes", playerSlug: "bruno-fernandes", club: "Manchester United", clubSlug: "manchester-united", assists: 12 },
    { name: "Son Heung-min", playerSlug: "son-heung-min", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", assists: 10 },
    { name: "Jack Grealish", playerSlug: "jack-grealish", club: "Aston Villa", clubSlug: "aston-villa", assists: 10 },
    { name: "Patrick Bamford", playerSlug: "patrick-bamford", club: "Leeds United", clubSlug: "leeds-united", assists: 8 },
  ],
  cleanSheets: [
    { name: "Ederson", playerSlug: "ederson", club: "Manchester City", clubSlug: "manchester-city", cleanSheets: 19 },
    { name: "Edouard Mendy", playerSlug: "edouard-mendy", club: "Chelsea", clubSlug: "chelsea", cleanSheets: 16 },
    { name: "Emiliano Martinez", playerSlug: "emiliano-martinez", club: "Aston Villa", clubSlug: "aston-villa", cleanSheets: 15 },
    { name: "Hugo Lloris", playerSlug: "hugo-lloris", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", cleanSheets: 11 },
    { name: "Bernd Leno", playerSlug: "bernd-leno", club: "Arsenal", clubSlug: "arsenal", cleanSheets: 10 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Ruben Dias", playerSlug: "ruben-dias" },
    { title: "Young Player of the Season", winner: "Phil Foden", playerSlug: "phil-foden" },
    { title: "Golden Glove", winner: "Ederson", playerSlug: "ederson" },
    { title: "Manager of the Season", winner: "Pep Guardiola" },
  ],
  relegated: ["Fulham", "West Bromwich Albion", "Sheffield United"],
  promoted: ["Norwich City", "Watford", "Brentford"],
  narrative: `The 2020-21 Premier League season was unlike any other, played almost entirely behind closed doors as the COVID-19 pandemic continued to reshape the sporting landscape. Empty stadiums created an eerie atmosphere throughout the campaign, but the football itself was no less compelling. Manchester City won their fifth Premier League title with 86 points, pulling away from the chasing pack in the second half of the season.

City's title charge was built on a remarkable 21-match winning run across all competitions between mid-December and early March that effectively put the title beyond doubt. At the heart of this transformation was Ruben Dias, the Portuguese centre-back signed from Benfica the previous summer. Dias formed a formidable partnership with John Stones, bringing a stability and authority to City's defence that had been missing in previous seasons. His commanding performances earned him the Player of the Season award in his debut campaign.

Harry Kane produced the finest individual season of his career, winning both the Golden Boot with 23 goals and the Playmaker Award with 14 assists  -  a combination of scoring and creativity that no Premier League player had matched before. Kane's partnership with Son Heung-min was devastating, with the South Korean contributing 17 goals and 10 assists of his own. Despite their brilliance, Tottenham could only manage a seventh-place finish in a turbulent season that saw Jose Mourinho sacked and replaced by interim manager Ryan Mason.

Manchester United finished second with 74 points, their highest league finish since 2018, largely fuelled by the brilliance of Bruno Fernandes, who scored 18 goals and added 12 assists. Liverpool's title defence was derailed by a catastrophic injury crisis, particularly at centre-back, where long-term absences for Virgil van Dijk, Joe Gomez and Joel Matip forced Jurgen Klopp to field midfielders in defence for much of the campaign. They still managed to finish third with 69 points, testament to Mohamed Salah's 22 goals.

Chelsea's season was transformed by the appointment of Thomas Tuchel in January, replacing the struggling Frank Lampard. Under Tuchel, Chelsea became one of the tightest defensive units in Europe and went on to win the Champions League. Leicester City narrowly missed out on a top-four finish for the second consecutive season, pipped on the final day by Chelsea.

West Ham United were the surprise package, finishing sixth under David Moyes and qualifying for European competition for the first time in years. Leeds United made a successful return to the Premier League after 16 years away, finishing ninth with an exciting brand of football under Marcelo Bielsa.

Sheffield United's season was historically poor. They won just seven matches and finished bottom with 23 points, having gone on a record-breaking losing streak at the start of the campaign. Fulham and West Bromwich Albion also went down, both having been promoted the previous season.

Phil Foden's emergence as a genuine star continued, earning him the Young Player of the Season award, while Ederson's 19 clean sheets secured the Golden Glove as the foundation of City's title-winning defence.`,
  notableMoments: [
    "The majority of the season was played behind closed doors due to COVID-19 restrictions",
    "Manchester City embarked on a 21-match winning run to seal the title",
    "Harry Kane won both the Golden Boot and the Playmaker Award in the same season",
    "Ruben Dias won Player of the Season in his debut Premier League campaign",
    "Sheffield United finished bottom after a record-breaking losing streak to start the season",
  ],
  metaTitle: "Premier League 2020-21 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2020-21 Premier League season. Final standings, top goalscorers, assists, player awards and a complete recap of City's title win in the behind-closed-doors campaign.",
};

export default data;
