import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "1997-98",
  seasonDisplay: "1997-98",
  champion: "Arsenal",
  championSlug: "arsenal",
  topScorer: "Dion Dublin / Michael Owen / Chris Sutton",
  topScorerGoals: 18,
  totalGoals: 1019,
  standings: [
    { pos: 1, club: "Arsenal", clubSlug: "arsenal", p: 38, w: 23, d: 9, l: 6, gf: 68, ga: 33, gd: 35, pts: 78, zone: "cl" },
    { pos: 2, club: "Manchester United", clubSlug: "manchester-united", p: 38, w: 23, d: 8, l: 7, gf: 73, ga: 26, gd: 47, pts: 77, zone: "cl" },
    { pos: 3, club: "Liverpool", clubSlug: "liverpool", p: 38, w: 18, d: 11, l: 9, gf: 68, ga: 42, gd: 26, pts: 65, zone: "el" },
    { pos: 4, club: "Chelsea", clubSlug: "chelsea", p: 38, w: 20, d: 3, l: 15, gf: 71, ga: 43, gd: 28, pts: 63, zone: "el" },
    { pos: 5, club: "Leeds United", clubSlug: "leeds-united", p: 38, w: 17, d: 8, l: 13, gf: 57, ga: 46, gd: 11, pts: 59, zone: "el" },
    { pos: 6, club: "Blackburn Rovers", clubSlug: "blackburn-rovers", p: 38, w: 16, d: 10, l: 12, gf: 57, ga: 52, gd: 5, pts: 58 },
    { pos: 7, club: "Aston Villa", clubSlug: "aston-villa", p: 38, w: 17, d: 6, l: 15, gf: 49, ga: 48, gd: 1, pts: 57 },
    { pos: 8, club: "West Ham United", clubSlug: "west-ham-united", p: 38, w: 16, d: 8, l: 14, gf: 56, ga: 57, gd: -1, pts: 56 },
    { pos: 9, club: "Derby County", clubSlug: "derby-county", p: 38, w: 16, d: 7, l: 15, gf: 52, ga: 49, gd: 3, pts: 55 },
    { pos: 10, club: "Leicester City", clubSlug: "leicester-city", p: 38, w: 13, d: 14, l: 11, gf: 51, ga: 41, gd: 10, pts: 53 },
    { pos: 11, club: "Coventry City", clubSlug: "coventry-city", p: 38, w: 12, d: 16, l: 10, gf: 46, ga: 44, gd: 2, pts: 52 },
    { pos: 12, club: "Southampton", clubSlug: "southampton", p: 38, w: 14, d: 6, l: 18, gf: 50, ga: 55, gd: -5, pts: 48 },
    { pos: 13, club: "Newcastle United", clubSlug: "newcastle-united", p: 38, w: 11, d: 11, l: 16, gf: 35, ga: 44, gd: -9, pts: 44 },
    { pos: 14, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 38, w: 11, d: 11, l: 16, gf: 44, ga: 56, gd: -12, pts: 44 },
    { pos: 15, club: "Wimbledon", clubSlug: "wimbledon", p: 38, w: 10, d: 14, l: 14, gf: 34, ga: 46, gd: -12, pts: 44 },
    { pos: 16, club: "Sheffield Wednesday", clubSlug: "sheffield-wednesday", p: 38, w: 12, d: 8, l: 18, gf: 52, ga: 67, gd: -15, pts: 44 },
    { pos: 17, club: "Everton", clubSlug: "everton", p: 38, w: 9, d: 13, l: 16, gf: 41, ga: 56, gd: -15, pts: 40 },
    { pos: 18, club: "Bolton Wanderers", clubSlug: "bolton-wanderers", p: 38, w: 9, d: 13, l: 16, gf: 41, ga: 61, gd: -20, pts: 40, zone: "relegation" },
    { pos: 19, club: "Barnsley", clubSlug: "barnsley", p: 38, w: 10, d: 5, l: 23, gf: 37, ga: 82, gd: -45, pts: 35, zone: "relegation" },
    { pos: 20, club: "Crystal Palace", clubSlug: "crystal-palace", p: 38, w: 8, d: 9, l: 21, gf: 37, ga: 71, gd: -34, pts: 33, zone: "relegation" },
  ],
  scorers: [
    { name: "Dion Dublin", playerSlug: "dion-dublin", club: "Coventry City", clubSlug: "coventry-city", goals: 18, assists: 3 },
    { name: "Michael Owen", playerSlug: "michael-owen", club: "Liverpool", clubSlug: "liverpool", goals: 18, assists: 3 },
    { name: "Chris Sutton", playerSlug: "chris-sutton", club: "Blackburn Rovers", clubSlug: "blackburn-rovers", goals: 18, assists: 4 },
    { name: "Dennis Bergkamp", playerSlug: "dennis-bergkamp", club: "Arsenal", clubSlug: "arsenal", goals: 16, assists: 11 },
    { name: "Kevin Gallacher", playerSlug: "kevin-gallacher", club: "Blackburn Rovers", clubSlug: "blackburn-rovers", goals: 16, assists: 3 },
    { name: "Jimmy Floyd Hasselbaink", playerSlug: "jimmy-floyd-hasselbaink", club: "Leeds United", clubSlug: "leeds-united", goals: 16, assists: 4 },
    { name: "Andy Cole", playerSlug: "andy-cole", club: "Manchester United", clubSlug: "manchester-united", goals: 15, assists: 5 },
    { name: "John Hartson", playerSlug: "john-hartson", club: "West Ham United", clubSlug: "west-ham-united", goals: 15, assists: 2 },
    { name: "Darren Huckerby", playerSlug: "darren-huckerby", club: "Coventry City", clubSlug: "coventry-city", goals: 14, assists: 5 },
    { name: "Paulo Wanchope", playerSlug: "paulo-wanchope", club: "Derby County", clubSlug: "derby-county", goals: 13, assists: 3 },
  ],
  assisters: [
    { name: "Dennis Bergkamp", playerSlug: "dennis-bergkamp", club: "Arsenal", clubSlug: "arsenal", assists: 11 },
    { name: "David Beckham", playerSlug: "david-beckham", club: "Manchester United", clubSlug: "manchester-united", assists: 10 },
    { name: "Jason Wilcox", playerSlug: "jason-wilcox", club: "Blackburn Rovers", clubSlug: "blackburn-rovers", assists: 8 },
    { name: "Steve McManaman", playerSlug: "steve-mcmanaman", club: "Liverpool", clubSlug: "liverpool", assists: 7 },
    { name: "Marc Overmars", playerSlug: "marc-overmars", club: "Arsenal", clubSlug: "arsenal", assists: 7 },
  ],
  cleanSheets: [
    { name: "Peter Schmeichel", playerSlug: "peter-schmeichel", club: "Manchester United", clubSlug: "manchester-united", cleanSheets: 16 },
    { name: "David Seaman", playerSlug: "david-seaman", club: "Arsenal", clubSlug: "arsenal", cleanSheets: 14 },
    { name: "Nigel Martyn", playerSlug: "nigel-martyn", club: "Leeds United", clubSlug: "leeds-united", cleanSheets: 12 },
    { name: "Ed de Goey", playerSlug: "ed-de-goey", club: "Chelsea", clubSlug: "chelsea", cleanSheets: 11 },
    { name: "Kasey Keller", playerSlug: "kasey-keller", club: "Leicester City", clubSlug: "leicester-city", cleanSheets: 10 },
  ],
  awards: [
    { title: "PFA Player of the Year", winner: "Dennis Bergkamp", playerSlug: "dennis-bergkamp" },
    { title: "PFA Young Player of the Year", winner: "Michael Owen", playerSlug: "michael-owen" },
    { title: "FWA Footballer of the Year", winner: "Dennis Bergkamp", playerSlug: "dennis-bergkamp" },
    { title: "Manager of the Season", winner: "Arsène Wenger" },
  ],
  relegated: ["Bolton Wanderers", "Barnsley", "Crystal Palace"],
  promoted: ["Nottingham Forest", "Middlesbrough", "Charlton Athletic"],
  narrative: `Arsenal's 1997-98 Premier League campaign stands as one of the most iconic in the competition's history. Under Arsène Wenger, in his first full season as manager, the Gunners secured a magnificent League and FA Cup Double -- only the second club to achieve the feat twice.

Manchester United led the table for much of the season, looking well set for another title. However, a dip in form during the final two months allowed Arsenal to capitalise on games in hand. The pivotal moment came when Marc Overmars scored a brilliant solo goal to seal a 1-0 victory at Old Trafford in March, shifting the momentum firmly in Arsenal's favour. The Gunners then embarked on a remarkable run, winning ten consecutive league matches to clinch the title with two games to spare.

Arsenal's success was built on a potent combination of Wenger's continental approach and the steely resolve of the famous English back four. Tony Adams, who scored a memorable goal at Highbury on the night the title was clinched against Everton, captained the side with distinction. The Frenchman brought a new tactical sophistication to English football, introducing innovative dietary and training methods that transformed senior players like Adams, Lee Dixon, Nigel Winterburn and Martin Keown.

In attack, Dennis Bergkamp was simply mesmerising, earning both the PFA and FWA Player of the Year awards. His partnership with Ian Wright, who became the club's all-time record goalscorer during the campaign, and later Nicolas Anelka, provided a constant threat. Marc Overmars offered explosive pace from the wing, while the midfield duo of Patrick Vieira and Emmanuel Petit gave Arsenal a perfect blend of power and finesse.

The Golden Boot was shared three ways: Dion Dublin of Coventry City, Michael Owen of Liverpool and Chris Sutton of Blackburn Rovers each scored 18 goals. Owen, at just 18, announced himself as a prodigious talent and was named PFA Young Player of the Year.

The gap between the Premier League and the First Division was starkly highlighted as all three promoted clubs -- Bolton Wanderers, Barnsley and Crystal Palace -- were relegated. Barnsley's first ever season in the top flight was a chastening experience, though they did enjoy FA Cup success by knocking out Manchester United in the Fifth Round. Crystal Palace finished bottom with a miserable record.

Chelsea, under new player-manager Gianluca Vialli following the dismissal of Ruud Gullit, had a successful cup season, winning the League Cup and the European Cup Winners' Cup, though they could only manage fourth in the league with an inconsistent record of 20 wins but 15 defeats.

The season also saw the emergence of Liverpool as a force under Gérard Houllier and Roy Evans, while Leeds United showed steady improvement under George Graham, finishing fifth. Peter Schmeichel claimed the Golden Glove with 16 clean sheets in his final season at Manchester United, a fitting farewell before his departure.`,
  notableMoments: [
    "Arsenal completed the Double under Arsène Wenger in his first full season",
    "Tony Adams scored a famous goal on the night the title was won at Highbury",
    "Marc Overmars' winner at Old Trafford proved the turning point in the title race",
    "Three-way Golden Boot shared by Dublin, Owen and Sutton with 18 goals each",
    "All three promoted clubs were relegated -- Bolton, Barnsley and Crystal Palace",
  ],
  metaTitle: "Premier League 1997-98 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 1997-98 Premier League season. Arsenal's Double, final standings, top goalscorers, assists, player awards and a complete season recap.",
};

export default data;
