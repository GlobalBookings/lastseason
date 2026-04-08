import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "1996-97",
  seasonDisplay: "1996-97",
  champion: "Manchester United",
  championSlug: "manchester-united",
  topScorer: "Alan Shearer",
  topScorerGoals: 25,
  totalGoals: 970,
  standings: [
    { pos: 1, club: "Manchester United", clubSlug: "manchester-united", p: 38, w: 21, d: 12, l: 5, gf: 76, ga: 44, gd: 32, pts: 75, zone: "cl" },
    { pos: 2, club: "Newcastle United", clubSlug: "newcastle-united", p: 38, w: 19, d: 11, l: 8, gf: 73, ga: 40, gd: 33, pts: 68, zone: "cl" },
    { pos: 3, club: "Arsenal", clubSlug: "arsenal", p: 38, w: 19, d: 11, l: 8, gf: 62, ga: 32, gd: 30, pts: 68, zone: "el" },
    { pos: 4, club: "Liverpool", clubSlug: "liverpool", p: 38, w: 19, d: 11, l: 8, gf: 62, ga: 37, gd: 25, pts: 68, zone: "el" },
    { pos: 5, club: "Aston Villa", clubSlug: "aston-villa", p: 38, w: 17, d: 10, l: 11, gf: 47, ga: 34, gd: 13, pts: 61 },
    { pos: 6, club: "Chelsea", clubSlug: "chelsea", p: 38, w: 16, d: 11, l: 11, gf: 58, ga: 55, gd: 3, pts: 59 },
    { pos: 7, club: "Sheffield Wednesday", clubSlug: "sheffield-wednesday", p: 38, w: 14, d: 15, l: 9, gf: 50, ga: 51, gd: -1, pts: 57 },
    { pos: 8, club: "Wimbledon", clubSlug: "wimbledon", p: 38, w: 15, d: 11, l: 12, gf: 49, ga: 46, gd: 3, pts: 56 },
    { pos: 9, club: "Leicester City", clubSlug: "leicester-city", p: 38, w: 12, d: 11, l: 15, gf: 46, ga: 54, gd: -8, pts: 47 },
    { pos: 10, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 38, w: 13, d: 7, l: 18, gf: 44, ga: 51, gd: -7, pts: 46 },
    { pos: 11, club: "Leeds United", clubSlug: "leeds-united", p: 38, w: 11, d: 13, l: 14, gf: 28, ga: 38, gd: -10, pts: 46 },
    { pos: 12, club: "Derby County", clubSlug: "derby-county", p: 38, w: 11, d: 13, l: 14, gf: 45, ga: 58, gd: -13, pts: 46 },
    { pos: 13, club: "Blackburn Rovers", clubSlug: "blackburn-rovers", p: 38, w: 9, d: 15, l: 14, gf: 42, ga: 43, gd: -1, pts: 42 },
    { pos: 14, club: "West Ham United", clubSlug: "west-ham-united", p: 38, w: 10, d: 12, l: 16, gf: 39, ga: 48, gd: -9, pts: 42 },
    { pos: 15, club: "Everton", clubSlug: "everton", p: 38, w: 10, d: 12, l: 16, gf: 44, ga: 57, gd: -13, pts: 42 },
    { pos: 16, club: "Southampton", clubSlug: "southampton", p: 38, w: 10, d: 11, l: 17, gf: 50, ga: 56, gd: -6, pts: 41 },
    { pos: 17, club: "Coventry City", clubSlug: "coventry-city", p: 38, w: 9, d: 14, l: 15, gf: 38, ga: 54, gd: -16, pts: 41 },
    { pos: 18, club: "Sunderland", clubSlug: "sunderland", p: 38, w: 10, d: 10, l: 18, gf: 35, ga: 53, gd: -18, pts: 40, zone: "relegation" },
    { pos: 19, club: "Middlesbrough", clubSlug: "middlesbrough", p: 38, w: 10, d: 12, l: 16, gf: 51, ga: 60, gd: -9, pts: 39, zone: "relegation" },
    { pos: 20, club: "Nottingham Forest", clubSlug: "nottingham-forest", p: 38, w: 6, d: 16, l: 16, gf: 31, ga: 59, gd: -28, pts: 34, zone: "relegation" },
  ],
  scorers: [
    { name: "Alan Shearer", playerSlug: "alan-shearer", club: "Newcastle United", clubSlug: "newcastle-united", goals: 25, assists: 0 },
    { name: "Ian Wright", playerSlug: "ian-wright", club: "Arsenal", clubSlug: "arsenal", goals: 23, assists: 0 },
    { name: "Robbie Fowler", playerSlug: "robbie-fowler", club: "Liverpool", clubSlug: "liverpool", goals: 18, assists: 0 },
    { name: "Ole Gunnar Solskjaer", playerSlug: "ole-gunnar-solskjaer", club: "Manchester United", clubSlug: "manchester-united", goals: 18, assists: 0 },
    { name: "Dwight Yorke", playerSlug: "dwight-yorke", club: "Aston Villa", clubSlug: "aston-villa", goals: 17, assists: 0 },
    { name: "Les Ferdinand", playerSlug: "les-ferdinand", club: "Newcastle United", clubSlug: "newcastle-united", goals: 16, assists: 0 },
    { name: "Fabrizio Ravanelli", playerSlug: "fabrizio-ravanelli", club: "Middlesbrough", clubSlug: "middlesbrough", goals: 16, assists: 0 },
    { name: "Matt Le Tissier", playerSlug: "matt-le-tissier", club: "Southampton", clubSlug: "southampton", goals: 13, assists: 0 },
    { name: "Dion Dublin", playerSlug: "dion-dublin", club: "Coventry City", clubSlug: "coventry-city", goals: 13, assists: 0 },
    { name: "Dennis Bergkamp", playerSlug: "dennis-bergkamp", club: "Arsenal", clubSlug: "arsenal", goals: 12, assists: 0 },
  ],
  assisters: [
    { name: "Eric Cantona", playerSlug: "eric-cantona", club: "Manchester United", clubSlug: "manchester-united", assists: 12 },
    { name: "Neal Ardley", playerSlug: "neal-ardley", club: "Wimbledon", clubSlug: "wimbledon", assists: 11 },
    { name: "Dennis Bergkamp", playerSlug: "dennis-bergkamp", club: "Arsenal", clubSlug: "arsenal", assists: 9 },
    { name: "Steve McManaman", playerSlug: "steve-mcmanaman", club: "Liverpool", clubSlug: "liverpool", assists: 8 },
    { name: "Nick Barmby", playerSlug: "nick-barmby", club: "Everton", clubSlug: "everton", assists: 8 },
  ],
  cleanSheets: [
    { name: "Nigel Martyn", playerSlug: "nigel-martyn", club: "Leeds United", clubSlug: "leeds-united", cleanSheets: 19 },
    { name: "David Seaman", playerSlug: "david-seaman", club: "Arsenal", clubSlug: "arsenal", cleanSheets: 16 },
    { name: "Peter Schmeichel", playerSlug: "peter-schmeichel", club: "Manchester United", clubSlug: "manchester-united", cleanSheets: 14 },
    { name: "Shaka Hislop", playerSlug: "shaka-hislop", club: "Newcastle United", clubSlug: "newcastle-united", cleanSheets: 12 },
    { name: "Mark Bosnich", playerSlug: "mark-bosnich", club: "Aston Villa", clubSlug: "aston-villa", cleanSheets: 12 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Alan Shearer", playerSlug: "alan-shearer" },
    { title: "Young Player of the Season", winner: "David Beckham", playerSlug: "david-beckham" },
    { title: "Golden Boot", winner: "Alan Shearer", playerSlug: "alan-shearer" },
  ],
  relegated: ["Sunderland", "Middlesbrough", "Nottingham Forest"],
  promoted: ["Bolton Wanderers", "Barnsley", "Crystal Palace"],
  narrative: `The 1996-97 season saw Manchester United reclaim the Premier League title for a fourth time in five years, though it was far from straightforward. With 75 points, it remains the lowest total ever achieved by a Premier League champion, reflecting the competitiveness of a campaign where four teams entered the final weeks with realistic title aspirations.

Alex Ferguson's side were far from their imperious best, drawing 12 of their 38 matches. However, they showed their trademark resilience, losing just five times all season. Eric Cantona, in what would prove to be his final season before a shock retirement at 30, contributed 11 goals and 12 assists, pulling the strings in a side that also featured the emerging David Beckham, who claimed the PFA Young Player of the Year award.

The title race was remarkably tight. Newcastle United, Arsenal and Liverpool all finished on 68 points  -  seven behind United but separated by goal difference. Newcastle's second-place finish demonstrated their continued quality despite the previous season's collapse, with Alan Shearer scoring 25 goals in his first season at his hometown club after a world-record £15 million move from Blackburn. Shearer claimed both the PFA Player of the Year award and the Golden Boot.

Arsene Wenger's arrival at Arsenal in September transformed the Gunners, who mounted a late charge for the title. Dennis Bergkamp produced moments of breathtaking brilliance, while Ian Wright scored 23 goals to become Arsenal's all-time leading scorer. Chelsea, under Ruud Gullit, won the FA Cup with foreign stars like Gianfranco Zola and Gianluca Vialli adding continental flair to the league.

The relegation battle was dramatic and controversial. Middlesbrough, despite fielding expensive foreign imports including Fabrizio Ravanelli, Juninho and Emerson, were docked three points for failing to fulfil a fixture at Blackburn in December. Without the deduction, they would have finished 14th. Instead, they went down alongside Sunderland and Nottingham Forest, despite reaching both domestic cup finals.

Sunderland's relegation in their final season at Roker Park was a poignant moment, while Nottingham Forest endured a difficult campaign that saw manager Frank Clark sacked in December. Ole Gunnar Solskjaer announced himself as a deadly super-sub, scoring 18 league goals including several crucial late strikes for United.

It was a season of change  -  Wenger's revolution at Arsenal, Chelsea's foreign influx, and the beginning of the end for Cantona. The Premier League was evolving rapidly, and the best was yet to come.`,
  notableMoments: [
    "Manchester United won the title with 75 points  -  the lowest total for a Premier League champion",
    "Alan Shearer scored 25 goals in his first season at hometown club Newcastle after a world-record transfer",
    "Middlesbrough were relegated despite reaching both the FA Cup and League Cup finals, partly due to a three-point deduction",
    "Arsene Wenger took charge of Arsenal in September, beginning a transformative era for the club",
    "Eric Cantona retired at the end of the season aged 30, shocking the football world",
  ],
  metaTitle: "Premier League 1996-97 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 1996-97 Premier League season. Final standings, top goalscorers, assists, player awards and a complete season recap.",
};

export default data;
