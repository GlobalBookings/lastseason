import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "2012-13",
  seasonDisplay: "2012-13",
  champion: "Manchester United",
  championSlug: "manchester-united",
  topScorer: "Robin van Persie",
  topScorerGoals: 26,
  totalGoals: 1063,
  standings: [
    { pos: 1, club: "Manchester United", clubSlug: "manchester-united", p: 38, w: 28, d: 5, l: 5, gf: 86, ga: 43, gd: 43, pts: 89, zone: "cl" },
    { pos: 2, club: "Manchester City", clubSlug: "manchester-city", p: 38, w: 23, d: 9, l: 6, gf: 66, ga: 34, gd: 32, pts: 78, zone: "cl" },
    { pos: 3, club: "Chelsea", clubSlug: "chelsea", p: 38, w: 22, d: 9, l: 7, gf: 75, ga: 39, gd: 36, pts: 75, zone: "cl" },
    { pos: 4, club: "Arsenal", clubSlug: "arsenal", p: 38, w: 21, d: 10, l: 7, gf: 72, ga: 37, gd: 35, pts: 73, zone: "cl" },
    { pos: 5, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 38, w: 21, d: 9, l: 8, gf: 66, ga: 46, gd: 20, pts: 72, zone: "el" },
    { pos: 6, club: "Everton", clubSlug: "everton", p: 38, w: 16, d: 15, l: 7, gf: 55, ga: 40, gd: 15, pts: 63 },
    { pos: 7, club: "Liverpool", clubSlug: "liverpool", p: 38, w: 16, d: 13, l: 9, gf: 71, ga: 43, gd: 28, pts: 61 },
    { pos: 8, club: "West Bromwich Albion", clubSlug: "west-bromwich-albion", p: 38, w: 14, d: 7, l: 17, gf: 53, ga: 57, gd: -4, pts: 49 },
    { pos: 9, club: "Swansea City", clubSlug: "swansea-city", p: 38, w: 11, d: 13, l: 14, gf: 47, ga: 51, gd: -4, pts: 46 },
    { pos: 10, club: "West Ham United", clubSlug: "west-ham-united", p: 38, w: 12, d: 10, l: 16, gf: 45, ga: 53, gd: -8, pts: 46 },
    { pos: 11, club: "Norwich City", clubSlug: "norwich-city", p: 38, w: 10, d: 14, l: 14, gf: 41, ga: 58, gd: -17, pts: 44 },
    { pos: 12, club: "Fulham", clubSlug: "fulham", p: 38, w: 11, d: 10, l: 17, gf: 50, ga: 60, gd: -10, pts: 43 },
    { pos: 13, club: "Stoke City", clubSlug: "stoke-city", p: 38, w: 9, d: 15, l: 14, gf: 34, ga: 45, gd: -11, pts: 42 },
    { pos: 14, club: "Southampton", clubSlug: "southampton", p: 38, w: 9, d: 14, l: 15, gf: 49, ga: 60, gd: -11, pts: 41 },
    { pos: 15, club: "Aston Villa", clubSlug: "aston-villa", p: 38, w: 10, d: 11, l: 17, gf: 47, ga: 69, gd: -22, pts: 41 },
    { pos: 16, club: "Newcastle United", clubSlug: "newcastle-united", p: 38, w: 11, d: 8, l: 19, gf: 45, ga: 68, gd: -23, pts: 41 },
    { pos: 17, club: "Sunderland", clubSlug: "sunderland", p: 38, w: 9, d: 12, l: 17, gf: 41, ga: 54, gd: -13, pts: 39 },
    { pos: 18, club: "Wigan Athletic", clubSlug: "wigan-athletic", p: 38, w: 9, d: 9, l: 20, gf: 47, ga: 73, gd: -26, pts: 36, zone: "relegation" },
    { pos: 19, club: "Reading", clubSlug: "reading", p: 38, w: 6, d: 10, l: 22, gf: 43, ga: 73, gd: -30, pts: 28, zone: "relegation" },
    { pos: 20, club: "Queens Park Rangers", clubSlug: "queens-park-rangers", p: 38, w: 4, d: 13, l: 21, gf: 30, ga: 60, gd: -30, pts: 25, zone: "relegation" },
  ],
  scorers: [
    { name: "Robin van Persie", playerSlug: "robin-van-persie", club: "Manchester United", clubSlug: "manchester-united", goals: 26, assists: 15 },
    { name: "Luis Suarez", playerSlug: "luis-suarez", club: "Liverpool", clubSlug: "liverpool", goals: 23, assists: 5 },
    { name: "Gareth Bale", playerSlug: "gareth-bale", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 21, assists: 4 },
    { name: "Christian Benteke", playerSlug: "christian-benteke", club: "Aston Villa", clubSlug: "aston-villa", goals: 19, assists: 4 },
    { name: "Michu", playerSlug: "michu", club: "Swansea City", clubSlug: "swansea-city", goals: 18, assists: 2 },
    { name: "Romelu Lukaku", playerSlug: "romelu-lukaku", club: "West Bromwich Albion", clubSlug: "west-bromwich-albion", goals: 17, assists: 4 },
    { name: "Demba Ba", playerSlug: "demba-ba", club: "Chelsea", clubSlug: "chelsea", goals: 15, assists: 1 },
    { name: "Frank Lampard", playerSlug: "frank-lampard", club: "Chelsea", clubSlug: "chelsea", goals: 15, assists: 9 },
    { name: "Edin Dzeko", playerSlug: "edin-dzeko", club: "Manchester City", clubSlug: "manchester-city", goals: 14, assists: 5 },
    { name: "Theo Walcott", playerSlug: "theo-walcott", club: "Arsenal", clubSlug: "arsenal", goals: 14, assists: 10 },
  ],
  assisters: [
    { name: "Juan Mata", playerSlug: "juan-mata", club: "Chelsea", clubSlug: "chelsea", assists: 12 },
    { name: "Santi Cazorla", playerSlug: "santi-cazorla", club: "Arsenal", clubSlug: "arsenal", assists: 11 },
    { name: "Leighton Baines", playerSlug: "leighton-baines", club: "Everton", clubSlug: "everton", assists: 10 },
    { name: "David Silva", playerSlug: "david-silva", club: "Manchester City", clubSlug: "manchester-city", assists: 8 },
    { name: "Steven Gerrard", playerSlug: "steven-gerrard", club: "Liverpool", clubSlug: "liverpool", assists: 9 },
  ],
  cleanSheets: [
    { name: "Joe Hart", playerSlug: "joe-hart", club: "Manchester City", clubSlug: "manchester-city", cleanSheets: 18 },
    { name: "Petr Cech", playerSlug: "petr-cech", club: "Chelsea", clubSlug: "chelsea", cleanSheets: 14 },
    { name: "David de Gea", playerSlug: "david-de-gea", club: "Manchester United", clubSlug: "manchester-united", cleanSheets: 11 },
    { name: "Asmir Begovic", playerSlug: "asmir-begovic", club: "Stoke City", clubSlug: "stoke-city", cleanSheets: 12 },
    { name: "Tim Howard", playerSlug: "tim-howard", club: "Everton", clubSlug: "everton", cleanSheets: 10 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Gareth Bale", playerSlug: "gareth-bale" },
    { title: "Young Player of the Season", winner: "Gareth Bale", playerSlug: "gareth-bale" },
    { title: "Golden Glove", winner: "Joe Hart", playerSlug: "joe-hart" },
    { title: "Manager of the Season", winner: "Sir Alex Ferguson" },
  ],
  relegated: ["Wigan Athletic", "Reading", "Queens Park Rangers"],
  promoted: ["Cardiff City", "Hull City", "Crystal Palace"],
  narrative: `Manchester United reclaimed the Premier League title in 2012-13, finishing on 89 points to win Sir Alex Ferguson's 13th and final league crown. The legendary Scot announced his retirement on 8 May 2013, bringing to an end 26 extraordinary years at Old Trafford. His side clinched the championship with four games to spare after a 3-0 victory over Aston Villa in April.

Robin van Persie was the catalyst for United's success. The Dutchman, signed from Arsenal for 24 million pounds the previous summer, scored 26 league goals to claim the Golden Boot and vindicate the faith Ferguson had placed in him. His hat-trick against Aston Villa to seal the title, including a stunning volley from Wayne Rooney's lofted pass, became one of the defining moments of the season.

Manchester City finished a distant second on 78 points, eleven adrift of their rivals. Roberto Mancini's side never mounted a serious challenge and the Italian was sacked on the final day of the season following a 3-2 defeat at Wigan. Chelsea came third with 75 points under Rafael Benitez, who had taken charge following Roberto Di Matteo's sacking in November.

Gareth Bale produced a season of scintillating form for Tottenham Hotspur, scoring 21 goals from midfield and earning both the PFA Player of the Year and Young Player of the Year awards. His performances earned him a world-record move to Real Madrid that summer for around 85 million pounds.

At the bottom, Wigan Athletic made history by becoming the first club to win the FA Cup and be relegated in the same season. Their emotional Wembley triumph over Manchester City was followed days later by a defeat to Arsenal that confirmed their drop. Reading and Queens Park Rangers also went down, with QPR managing just four wins all season.

Ferguson's final match ended in a remarkable 5-5 draw at West Brom, a fittingly dramatic conclusion to a managerial career without parallel in English football. The season marked the end of an era that had defined the Premier League since its inception.`,
  notableMoments: [
    "Sir Alex Ferguson retired after winning his 13th Premier League title",
    "Robin van Persie scored 26 goals in his debut United season to claim the Golden Boot",
    "Gareth Bale won both PFA Player and Young Player of the Year at Tottenham",
    "Wigan Athletic became the first club to win the FA Cup and be relegated in the same season",
    "Ferguson's final match ended in a dramatic 5-5 draw at West Bromwich Albion",
  ],
  metaTitle: "Premier League 2012-13 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2012-13 Premier League season. Final standings, top goalscorers, assists, player awards and a complete season recap.",
};

export default data;
