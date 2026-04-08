import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "1998-99",
  seasonDisplay: "1998-99",
  champion: "Manchester United",
  championSlug: "manchester-united",
  topScorer: "Jimmy Floyd Hasselbaink / Michael Owen / Dwight Yorke",
  topScorerGoals: 18,
  totalGoals: 959,
  standings: [
    { pos: 1, club: "Manchester United", clubSlug: "manchester-united", p: 38, w: 22, d: 13, l: 3, gf: 80, ga: 37, gd: 43, pts: 79, zone: "cl" },
    { pos: 2, club: "Arsenal", clubSlug: "arsenal", p: 38, w: 22, d: 12, l: 4, gf: 59, ga: 17, gd: 42, pts: 78, zone: "cl" },
    { pos: 3, club: "Chelsea", clubSlug: "chelsea", p: 38, w: 20, d: 15, l: 3, gf: 57, ga: 30, gd: 27, pts: 75, zone: "cl" },
    { pos: 4, club: "Leeds United", clubSlug: "leeds-united", p: 38, w: 18, d: 13, l: 7, gf: 62, ga: 34, gd: 28, pts: 67, zone: "el" },
    { pos: 5, club: "West Ham United", clubSlug: "west-ham-united", p: 38, w: 16, d: 9, l: 13, gf: 46, ga: 53, gd: -7, pts: 57 },
    { pos: 6, club: "Aston Villa", clubSlug: "aston-villa", p: 38, w: 15, d: 10, l: 13, gf: 51, ga: 46, gd: 5, pts: 55 },
    { pos: 7, club: "Liverpool", clubSlug: "liverpool", p: 38, w: 15, d: 9, l: 14, gf: 68, ga: 49, gd: 19, pts: 54 },
    { pos: 8, club: "Derby County", clubSlug: "derby-county", p: 38, w: 13, d: 13, l: 12, gf: 40, ga: 45, gd: -5, pts: 52 },
    { pos: 9, club: "Middlesbrough", clubSlug: "middlesbrough", p: 38, w: 12, d: 15, l: 11, gf: 48, ga: 54, gd: -6, pts: 51 },
    { pos: 10, club: "Leicester City", clubSlug: "leicester-city", p: 38, w: 12, d: 13, l: 13, gf: 40, ga: 46, gd: -6, pts: 49 },
    { pos: 11, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 38, w: 11, d: 14, l: 13, gf: 47, ga: 50, gd: -3, pts: 47 },
    { pos: 12, club: "Sheffield Wednesday", clubSlug: "sheffield-wednesday", p: 38, w: 13, d: 7, l: 18, gf: 41, ga: 42, gd: -1, pts: 46 },
    { pos: 13, club: "Newcastle United", clubSlug: "newcastle-united", p: 38, w: 11, d: 13, l: 14, gf: 48, ga: 54, gd: -6, pts: 46 },
    { pos: 14, club: "Everton", clubSlug: "everton", p: 38, w: 11, d: 10, l: 17, gf: 42, ga: 47, gd: -5, pts: 43 },
    { pos: 15, club: "Coventry City", clubSlug: "coventry-city", p: 38, w: 11, d: 9, l: 18, gf: 39, ga: 51, gd: -12, pts: 42 },
    { pos: 16, club: "Wimbledon", clubSlug: "wimbledon", p: 38, w: 10, d: 12, l: 16, gf: 40, ga: 63, gd: -23, pts: 42 },
    { pos: 17, club: "Southampton", clubSlug: "southampton", p: 38, w: 11, d: 8, l: 19, gf: 37, ga: 64, gd: -27, pts: 41 },
    { pos: 18, club: "Charlton Athletic", clubSlug: "charlton-athletic", p: 38, w: 8, d: 12, l: 18, gf: 41, ga: 56, gd: -15, pts: 36, zone: "relegation" },
    { pos: 19, club: "Blackburn Rovers", clubSlug: "blackburn-rovers", p: 38, w: 7, d: 14, l: 17, gf: 38, ga: 52, gd: -14, pts: 35, zone: "relegation" },
    { pos: 20, club: "Nottingham Forest", clubSlug: "nottingham-forest", p: 38, w: 7, d: 9, l: 22, gf: 35, ga: 69, gd: -34, pts: 30, zone: "relegation" },
  ],
  scorers: [
    { name: "Jimmy Floyd Hasselbaink", playerSlug: "jimmy-floyd-hasselbaink", club: "Leeds United", clubSlug: "leeds-united", goals: 18, assists: 3 },
    { name: "Michael Owen", playerSlug: "michael-owen", club: "Liverpool", clubSlug: "liverpool", goals: 18, assists: 5 },
    { name: "Dwight Yorke", playerSlug: "dwight-yorke", club: "Manchester United", clubSlug: "manchester-united", goals: 18, assists: 8 },
    { name: "Nicolas Anelka", playerSlug: "nicolas-anelka", club: "Arsenal", clubSlug: "arsenal", goals: 17, assists: 4 },
    { name: "Andy Cole", playerSlug: "andy-cole", club: "Manchester United", clubSlug: "manchester-united", goals: 17, assists: 5 },
    { name: "Hamilton Ricard", playerSlug: "hamilton-ricard", club: "Middlesbrough", clubSlug: "middlesbrough", goals: 15, assists: 2 },
    { name: "Dion Dublin", playerSlug: "dion-dublin", club: "Aston Villa", clubSlug: "aston-villa", goals: 14, assists: 3 },
    { name: "Robbie Fowler", playerSlug: "robbie-fowler", club: "Liverpool", clubSlug: "liverpool", goals: 14, assists: 4 },
    { name: "Julian Joachim", playerSlug: "julian-joachim", club: "Aston Villa", clubSlug: "aston-villa", goals: 14, assists: 3 },
    { name: "Alan Shearer", playerSlug: "alan-shearer", club: "Newcastle United", clubSlug: "newcastle-united", goals: 14, assists: 4 },
  ],
  assisters: [
    { name: "David Beckham", playerSlug: "david-beckham", club: "Manchester United", clubSlug: "manchester-united", assists: 12 },
    { name: "Dwight Yorke", playerSlug: "dwight-yorke", club: "Manchester United", clubSlug: "manchester-united", assists: 8 },
    { name: "Dennis Bergkamp", playerSlug: "dennis-bergkamp", club: "Arsenal", clubSlug: "arsenal", assists: 7 },
    { name: "Ryan Giggs", playerSlug: "ryan-giggs", club: "Manchester United", clubSlug: "manchester-united", assists: 7 },
    { name: "Michael Owen", playerSlug: "michael-owen", club: "Liverpool", clubSlug: "liverpool", assists: 5 },
  ],
  cleanSheets: [
    { name: "David Seaman", playerSlug: "david-seaman", club: "Arsenal", clubSlug: "arsenal", cleanSheets: 19 },
    { name: "Peter Schmeichel", playerSlug: "peter-schmeichel", club: "Manchester United", clubSlug: "manchester-united", cleanSheets: 15 },
    { name: "Ed de Goey", playerSlug: "ed-de-goey", club: "Chelsea", clubSlug: "chelsea", cleanSheets: 14 },
    { name: "Nigel Martyn", playerSlug: "nigel-martyn", club: "Leeds United", clubSlug: "leeds-united", cleanSheets: 13 },
    { name: "Shaka Hislop", playerSlug: "shaka-hislop", club: "West Ham United", clubSlug: "west-ham-united", cleanSheets: 10 },
  ],
  awards: [
    { title: "PFA Player of the Year", winner: "David Ginola", playerSlug: "david-ginola" },
    { title: "PFA Young Player of the Year", winner: "Nicolas Anelka", playerSlug: "nicolas-anelka" },
    { title: "FWA Footballer of the Year", winner: "David Ginola", playerSlug: "david-ginola" },
    { title: "Manager of the Season", winner: "Alex Ferguson" },
  ],
  relegated: ["Charlton Athletic", "Blackburn Rovers", "Nottingham Forest"],
  promoted: ["Sunderland", "Bradford City", "Watford"],
  narrative: `The 1998-99 Premier League season will forever be remembered as the year Manchester United achieved the unprecedented Treble -- winning the league title, the FA Cup and the UEFA Champions League. Sir Alex Ferguson's side lost just three league games all season, clinching the title by a single point from Arsenal in one of the closest finishes the competition had seen.

The title race was a three-horse affair for much of the campaign. Chelsea, under Gianluca Vialli, went top on Boxing Day and looked genuine contenders, losing only three league matches all season. However, three costly draws in April against mid-table and relegation-threatened opponents derailed their challenge, and they finished third on 75 points. Arsenal, who had won the Double the previous season, matched their 78-point tally but it was not enough as United's remarkable consistency proved decisive.

The drama went down to the final day. Manchester United needed to win at home to Tottenham to guarantee the title, and despite falling behind, they rallied to win 2-1 -- a result that rendered Arsenal's own victory irrelevant. Dwight Yorke, signed from Aston Villa for £12.6 million, formed a devastating partnership with Andy Cole, the pair contributing 35 league goals between them. David Beckham provided assists from the right wing, while Roy Keane led the midfield with inspirational performances.

Arsenal's defensive record was extraordinary -- conceding just 17 league goals, a remarkable achievement. Yet they could not match United's relentless winning habit. David Seaman earned 19 clean sheets, the most by any goalkeeper that season.

The title race overshadowed what was a turbulent season elsewhere. David Ginola, the Tottenham winger, won both the PFA and FWA Player of the Year awards despite his side finishing a mid-table 11th, a controversial choice that reflected his individual brilliance. Nicolas Anelka was named Young Player of the Year for his impressive displays at Arsenal.

At the bottom, Nottingham Forest endured a dismal campaign, suffering a record 1-8 home defeat to Manchester United and finishing rock bottom with just 30 points. Blackburn Rovers, champions only four seasons earlier, were also relegated after Brian Kidd's appointment as manager failed to arrest their decline. Charlton Athletic, in their first Premier League season, completed the relegation trio.

The Golden Boot was shared three ways again: Hasselbaink, Owen and Yorke each scored 18. Goals were harder to come by this season, with a total of 959 across the campaign -- the lowest in Premier League history at that point.

Leeds United continued their rise under David O'Leary, finishing fourth and qualifying for the UEFA Cup. West Ham, under Harry Redknapp, achieved a superb fifth-place finish, their best since 1986.`,
  notableMoments: [
    "Manchester United completed an unprecedented Treble of League, FA Cup and Champions League",
    "Arsenal conceded only 17 league goals but still finished second",
    "David Ginola won both PFA and FWA Player of the Year awards",
    "Nottingham Forest suffered a record 1-8 home defeat to Manchester United",
    "Blackburn Rovers, champions in 1994-95, were relegated after a dire campaign",
  ],
  metaTitle: "Premier League 1998-99 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 1998-99 Premier League season. Manchester United's Treble, final standings, top goalscorers, assists, player awards and a complete season recap.",
};

export default data;
