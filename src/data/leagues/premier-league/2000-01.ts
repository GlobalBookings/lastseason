import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "2000-01",
  seasonDisplay: "2000-01",
  champion: "Manchester United",
  championSlug: "manchester-united",
  topScorer: "Jimmy Floyd Hasselbaink",
  topScorerGoals: 23,
  totalGoals: 992,
  standings: [
    { pos: 1, club: "Manchester United", clubSlug: "manchester-united", p: 38, w: 24, d: 8, l: 6, gf: 79, ga: 31, gd: 48, pts: 80, zone: "cl" },
    { pos: 2, club: "Arsenal", clubSlug: "arsenal", p: 38, w: 20, d: 10, l: 8, gf: 63, ga: 38, gd: 25, pts: 70, zone: "cl" },
    { pos: 3, club: "Liverpool", clubSlug: "liverpool", p: 38, w: 20, d: 9, l: 9, gf: 71, ga: 39, gd: 32, pts: 69, zone: "cl" },
    { pos: 4, club: "Leeds United", clubSlug: "leeds-united", p: 38, w: 20, d: 8, l: 10, gf: 64, ga: 43, gd: 21, pts: 68, zone: "el" },
    { pos: 5, club: "Ipswich Town", clubSlug: "ipswich-town", p: 38, w: 20, d: 6, l: 12, gf: 57, ga: 42, gd: 15, pts: 66, zone: "el" },
    { pos: 6, club: "Chelsea", clubSlug: "chelsea", p: 38, w: 17, d: 10, l: 11, gf: 68, ga: 45, gd: 23, pts: 61 },
    { pos: 7, club: "Sunderland", clubSlug: "sunderland", p: 38, w: 15, d: 12, l: 11, gf: 46, ga: 41, gd: 5, pts: 57 },
    { pos: 8, club: "Aston Villa", clubSlug: "aston-villa", p: 38, w: 13, d: 15, l: 10, gf: 46, ga: 43, gd: 3, pts: 54 },
    { pos: 9, club: "Charlton Athletic", clubSlug: "charlton-athletic", p: 38, w: 14, d: 10, l: 14, gf: 50, ga: 57, gd: -7, pts: 52 },
    { pos: 10, club: "Southampton", clubSlug: "southampton", p: 38, w: 14, d: 10, l: 14, gf: 40, ga: 48, gd: -8, pts: 52 },
    { pos: 11, club: "Newcastle United", clubSlug: "newcastle-united", p: 38, w: 14, d: 9, l: 15, gf: 44, ga: 50, gd: -6, pts: 51 },
    { pos: 12, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 38, w: 13, d: 10, l: 15, gf: 47, ga: 54, gd: -7, pts: 49 },
    { pos: 13, club: "Leicester City", clubSlug: "leicester-city", p: 38, w: 14, d: 6, l: 18, gf: 39, ga: 51, gd: -12, pts: 48 },
    { pos: 14, club: "Middlesbrough", clubSlug: "middlesbrough", p: 38, w: 9, d: 15, l: 14, gf: 44, ga: 44, gd: 0, pts: 42 },
    { pos: 15, club: "West Ham United", clubSlug: "west-ham-united", p: 38, w: 10, d: 12, l: 16, gf: 45, ga: 50, gd: -5, pts: 42 },
    { pos: 16, club: "Everton", clubSlug: "everton", p: 38, w: 11, d: 9, l: 18, gf: 45, ga: 59, gd: -14, pts: 42 },
    { pos: 17, club: "Derby County", clubSlug: "derby-county", p: 38, w: 10, d: 12, l: 16, gf: 37, ga: 59, gd: -22, pts: 42 },
    { pos: 18, club: "Manchester City", clubSlug: "manchester-city", p: 38, w: 8, d: 10, l: 20, gf: 41, ga: 65, gd: -24, pts: 34, zone: "relegation" },
    { pos: 19, club: "Coventry City", clubSlug: "coventry-city", p: 38, w: 8, d: 10, l: 20, gf: 36, ga: 63, gd: -27, pts: 34, zone: "relegation" },
    { pos: 20, club: "Bradford City", clubSlug: "bradford-city", p: 38, w: 5, d: 11, l: 22, gf: 30, ga: 70, gd: -40, pts: 26, zone: "relegation" },
  ],
  scorers: [
    { name: "Jimmy Floyd Hasselbaink", playerSlug: "jimmy-floyd-hasselbaink", club: "Chelsea", clubSlug: "chelsea", goals: 23, assists: 4 },
    { name: "Marcus Stewart", playerSlug: "marcus-stewart", club: "Ipswich Town", clubSlug: "ipswich-town", goals: 19, assists: 5 },
    { name: "Thierry Henry", playerSlug: "thierry-henry", club: "Arsenal", clubSlug: "arsenal", goals: 17, assists: 6 },
    { name: "Mark Viduka", playerSlug: "mark-viduka", club: "Leeds United", clubSlug: "leeds-united", goals: 17, assists: 4 },
    { name: "Michael Owen", playerSlug: "michael-owen", club: "Liverpool", clubSlug: "liverpool", goals: 16, assists: 3 },
    { name: "Teddy Sheringham", playerSlug: "teddy-sheringham", club: "Manchester United", clubSlug: "manchester-united", goals: 15, assists: 8 },
    { name: "Emile Heskey", playerSlug: "emile-heskey", club: "Liverpool", clubSlug: "liverpool", goals: 14, assists: 6 },
    { name: "Kevin Phillips", playerSlug: "kevin-phillips", club: "Sunderland", clubSlug: "sunderland", goals: 14, assists: 3 },
    { name: "Alen Boksic", playerSlug: "alen-boksic", club: "Middlesbrough", clubSlug: "middlesbrough", goals: 12, assists: 2 },
    { name: "Jonatan Johansson", playerSlug: "jonatan-johansson", club: "Charlton Athletic", clubSlug: "charlton-athletic", goals: 11, assists: 3 },
  ],
  assisters: [
    { name: "David Beckham", playerSlug: "david-beckham", club: "Manchester United", clubSlug: "manchester-united", assists: 10 },
    { name: "Teddy Sheringham", playerSlug: "teddy-sheringham", club: "Manchester United", clubSlug: "manchester-united", assists: 8 },
    { name: "Thierry Henry", playerSlug: "thierry-henry", club: "Arsenal", clubSlug: "arsenal", assists: 6 },
    { name: "Emile Heskey", playerSlug: "emile-heskey", club: "Liverpool", clubSlug: "liverpool", assists: 6 },
    { name: "Robert Pires", playerSlug: "robert-pires", club: "Arsenal", clubSlug: "arsenal", assists: 6 },
  ],
  cleanSheets: [
    { name: "Fabien Barthez", playerSlug: "fabien-barthez", club: "Manchester United", clubSlug: "manchester-united", cleanSheets: 14 },
    { name: "Paul Jones", playerSlug: "paul-jones", club: "Southampton", clubSlug: "southampton", cleanSheets: 14 },
    { name: "Sander Westerveld", playerSlug: "sander-westerveld", club: "Liverpool", clubSlug: "liverpool", cleanSheets: 14 },
    { name: "David Seaman", playerSlug: "david-seaman", club: "Arsenal", clubSlug: "arsenal", cleanSheets: 13 },
    { name: "Nigel Martyn", playerSlug: "nigel-martyn", club: "Leeds United", clubSlug: "leeds-united", cleanSheets: 11 },
  ],
  awards: [
    { title: "PFA Player of the Year", winner: "Teddy Sheringham", playerSlug: "teddy-sheringham" },
    { title: "PFA Young Player of the Year", winner: "Steven Gerrard", playerSlug: "steven-gerrard" },
    { title: "FWA Footballer of the Year", winner: "Teddy Sheringham", playerSlug: "teddy-sheringham" },
    { title: "Manager of the Season", winner: "George Burley" },
  ],
  relegated: ["Manchester City", "Coventry City", "Bradford City"],
  promoted: ["Fulham", "Blackburn Rovers", "Bolton Wanderers"],
  narrative: `Manchester United sealed a historic third consecutive Premier League title in 2000-01, making Sir Alex Ferguson the first manager to achieve this feat with the same club. The 80-point tally was 10 clear of second-placed Arsenal, confirming United's absolute dominance of English football at the turn of the millennium.

Ferguson's squad was bolstered by the arrival of French World Cup-winning goalkeeper Fabien Barthez and the emerging influence of Teddy Sheringham, who enjoyed an Indian summer at 35, winning both the PFA and FWA Player of the Year awards. Sheringham scored 15 goals and provided 8 assists, forming fluid attacking partnerships with Andy Cole, Dwight Yorke, Ole Gunnar Solskjaer and Ryan Giggs.

The season's biggest surprise was undoubtedly newly promoted Ipswich Town. Under George Burley, who won the Manager of the Year award, the Tractor Boys defied all expectations to finish fifth on 66 points -- the highest total for a promoted side in the Premier League era. Marcus Stewart's 19 goals were crucial to their remarkable campaign, which earned them a place in the UEFA Cup.

Liverpool, under Gérard Houllier, enjoyed a memorable season despite finishing third. The Reds won an unprecedented treble of their own -- the FA Cup, League Cup and UEFA Cup -- with Michael Owen, Emile Heskey and Steven Gerrard all starring. Gerrard, at just 20, was named PFA Young Player of the Year for his commanding midfield performances.

Leeds United finished fourth as David O'Leary's youthful side continued to progress, reaching the Champions League semi-finals in a thrilling European campaign. Jimmy Floyd Hasselbaink, now at Chelsea, claimed the Golden Boot with 23 goals after his summer move from Leeds.

Charlton Athletic's return to the Premier League was a success story, with Alan Curbishley guiding them to a creditable ninth-place finish. Sunderland maintained their momentum from the previous season, finishing seventh with another strong campaign under Peter Reid.

At the bottom, the season marked the end of Coventry City's extraordinary 34-year run in the top flight. After decades of survival acts, they were finally relegated alongside Manchester City and Bradford City. City's relegation was their third in six years, while Bradford, who had only survived on the final day the previous season, went down with just 26 points.

The season also saw the emergence of Steven Gerrard as one of the league's finest young talents, the continued development of Thierry Henry at Arsenal, and the beginning of what would become a sustained period of investment at Chelsea under new manager Claudio Ranieri.`,
  notableMoments: [
    "Manchester United won a third consecutive Premier League title",
    "Ipswich Town finished fifth as newly promoted under George Burley",
    "Liverpool won an unprecedented cup treble -- FA Cup, League Cup and UEFA Cup",
    "Coventry City were relegated after 34 consecutive years in the top flight",
    "Teddy Sheringham won PFA and FWA Player of the Year at the age of 35",
  ],
  metaTitle: "Premier League 2000-01 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2000-01 Premier League season. Man Utd's third title in a row, final standings, top goalscorers, assists, player awards and a complete season recap.",
};

export default data;
