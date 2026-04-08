import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "1992-93",
  seasonDisplay: "1992-93",
  champion: "Manchester United",
  championSlug: "manchester-united",
  topScorer: "Teddy Sheringham",
  topScorerGoals: 22,
  totalGoals: 1222,
  standings: [
    { pos: 1, club: "Manchester United", clubSlug: "manchester-united", p: 42, w: 24, d: 12, l: 6, gf: 67, ga: 31, gd: 36, pts: 84, zone: "cl" },
    { pos: 2, club: "Aston Villa", clubSlug: "aston-villa", p: 42, w: 21, d: 11, l: 10, gf: 57, ga: 40, gd: 17, pts: 74, zone: "cl" },
    { pos: 3, club: "Norwich City", clubSlug: "norwich-city", p: 42, w: 21, d: 9, l: 12, gf: 61, ga: 65, gd: -4, pts: 72, zone: "el" },
    { pos: 4, club: "Blackburn Rovers", clubSlug: "blackburn-rovers", p: 42, w: 20, d: 11, l: 11, gf: 68, ga: 46, gd: 22, pts: 71, zone: "el" },
    { pos: 5, club: "Queens Park Rangers", clubSlug: "queens-park-rangers", p: 42, w: 17, d: 12, l: 13, gf: 63, ga: 55, gd: 8, pts: 63 },
    { pos: 6, club: "Liverpool", clubSlug: "liverpool", p: 42, w: 16, d: 11, l: 15, gf: 62, ga: 55, gd: 7, pts: 59 },
    { pos: 7, club: "Sheffield Wednesday", clubSlug: "sheffield-wednesday", p: 42, w: 15, d: 14, l: 13, gf: 55, ga: 51, gd: 4, pts: 59 },
    { pos: 8, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 42, w: 16, d: 11, l: 15, gf: 60, ga: 66, gd: -6, pts: 59 },
    { pos: 9, club: "Manchester City", clubSlug: "manchester-city", p: 42, w: 15, d: 12, l: 15, gf: 56, ga: 51, gd: 5, pts: 57 },
    { pos: 10, club: "Arsenal", clubSlug: "arsenal", p: 42, w: 15, d: 11, l: 16, gf: 40, ga: 38, gd: 2, pts: 56 },
    { pos: 11, club: "Chelsea", clubSlug: "chelsea", p: 42, w: 14, d: 14, l: 14, gf: 51, ga: 54, gd: -3, pts: 56 },
    { pos: 12, club: "Wimbledon", clubSlug: "wimbledon", p: 42, w: 14, d: 12, l: 16, gf: 56, ga: 55, gd: 1, pts: 54 },
    { pos: 13, club: "Everton", clubSlug: "everton", p: 42, w: 15, d: 8, l: 19, gf: 53, ga: 55, gd: -2, pts: 53 },
    { pos: 14, club: "Sheffield United", clubSlug: "sheffield-united", p: 42, w: 14, d: 10, l: 18, gf: 54, ga: 53, gd: 1, pts: 52 },
    { pos: 15, club: "Coventry City", clubSlug: "coventry-city", p: 42, w: 13, d: 13, l: 16, gf: 52, ga: 57, gd: -5, pts: 52 },
    { pos: 16, club: "Ipswich Town", clubSlug: "ipswich-town", p: 42, w: 12, d: 16, l: 14, gf: 50, ga: 55, gd: -5, pts: 52 },
    { pos: 17, club: "Leeds United", clubSlug: "leeds-united", p: 42, w: 12, d: 15, l: 15, gf: 57, ga: 62, gd: -5, pts: 51 },
    { pos: 18, club: "Southampton", clubSlug: "southampton", p: 42, w: 13, d: 11, l: 18, gf: 54, ga: 61, gd: -7, pts: 50 },
    { pos: 19, club: "Oldham Athletic", clubSlug: "oldham-athletic", p: 42, w: 13, d: 10, l: 19, gf: 63, ga: 74, gd: -11, pts: 49 },
    { pos: 20, club: "Crystal Palace", clubSlug: "crystal-palace", p: 42, w: 11, d: 16, l: 15, gf: 48, ga: 61, gd: -13, pts: 49, zone: "relegation" },
    { pos: 21, club: "Middlesbrough", clubSlug: "middlesbrough", p: 42, w: 11, d: 11, l: 20, gf: 54, ga: 75, gd: -21, pts: 44, zone: "relegation" },
    { pos: 22, club: "Nottingham Forest", clubSlug: "nottingham-forest", p: 42, w: 10, d: 10, l: 22, gf: 41, ga: 62, gd: -21, pts: 40, zone: "relegation" },
  ],
  scorers: [
    { name: "Teddy Sheringham", playerSlug: "teddy-sheringham", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 22, assists: 0 },
    { name: "Les Ferdinand", playerSlug: "les-ferdinand", club: "Queens Park Rangers", clubSlug: "queens-park-rangers", goals: 20, assists: 0 },
    { name: "Dean Holdsworth", playerSlug: "dean-holdsworth", club: "Wimbledon", clubSlug: "wimbledon", goals: 19, assists: 0 },
    { name: "Micky Quinn", playerSlug: "micky-quinn", club: "Coventry City", clubSlug: "coventry-city", goals: 17, assists: 0 },
    { name: "Alan Shearer", playerSlug: "alan-shearer", club: "Blackburn Rovers", clubSlug: "blackburn-rovers", goals: 16, assists: 0 },
    { name: "David White", playerSlug: "david-white", club: "Manchester City", clubSlug: "manchester-city", goals: 16, assists: 0 },
    { name: "Chris Armstrong", playerSlug: "chris-armstrong", club: "Crystal Palace", clubSlug: "crystal-palace", goals: 15, assists: 0 },
    { name: "Ian Wright", playerSlug: "ian-wright", club: "Arsenal", clubSlug: "arsenal", goals: 15, assists: 0 },
    { name: "Mark Hughes", playerSlug: "mark-hughes", club: "Manchester United", clubSlug: "manchester-united", goals: 15, assists: 0 },
    { name: "Mark Bright", playerSlug: "mark-bright", club: "Sheffield Wednesday", clubSlug: "sheffield-wednesday", goals: 14, assists: 0 },
  ],
  assisters: [
    { name: "Eric Cantona", playerSlug: "eric-cantona", club: "Manchester United", clubSlug: "manchester-united", assists: 16 },
    { name: "Darren Anderton", playerSlug: "darren-anderton", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", assists: 11 },
    { name: "Brian Deane", playerSlug: "brian-deane", club: "Sheffield United", clubSlug: "sheffield-united", assists: 10 },
    { name: "Jason Dozzell", playerSlug: "jason-dozzell", club: "Ipswich Town", clubSlug: "ipswich-town", assists: 9 },
    { name: "Paul Ince", playerSlug: "paul-ince", club: "Manchester United", clubSlug: "manchester-united", assists: 8 },
  ],
  cleanSheets: [
    { name: "Bobby Mimms", playerSlug: "bobby-mimms", club: "Blackburn Rovers", clubSlug: "blackburn-rovers", cleanSheets: 19 },
    { name: "Peter Schmeichel", playerSlug: "peter-schmeichel", club: "Manchester United", clubSlug: "manchester-united", cleanSheets: 18 },
    { name: "David Seaman", playerSlug: "david-seaman", club: "Arsenal", clubSlug: "arsenal", cleanSheets: 15 },
    { name: "Hans Segers", playerSlug: "hans-segers", club: "Wimbledon", clubSlug: "wimbledon", cleanSheets: 13 },
    { name: "Tony Coton", playerSlug: "tony-coton", club: "Manchester City", clubSlug: "manchester-city", cleanSheets: 11 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Paul McGrath", playerSlug: "paul-mcgrath" },
    { title: "Young Player of the Season", winner: "Ryan Giggs", playerSlug: "ryan-giggs" },
    { title: "Golden Boot", winner: "Teddy Sheringham", playerSlug: "teddy-sheringham" },
  ],
  relegated: ["Crystal Palace", "Middlesbrough", "Nottingham Forest"],
  promoted: ["Newcastle United", "West Ham United", "Swindon Town"],
  narrative: `The 1992-93 season was the inaugural campaign of the FA Premier League, marking a revolutionary new era for English football. Backed by a landmark £304 million television deal with Sky Sports, the breakaway league brought unprecedented coverage and commercial power to the English game. Twenty-two clubs competed in the first season, each playing 42 matches.

Manchester United, under Alex Ferguson, claimed their first league title in 26 years, ending a painful drought that had stretched back to 1967. The signing of French forward Eric Cantona from Leeds United in late November proved to be the catalyst for their success. Before Cantona's arrival, United had been languishing in mid-table, but his creative brilliance and goals transformed their season. They lost just two league matches after his arrival and finished on 84 points, ten clear of runners-up Aston Villa.

Aston Villa, inspired by the veteran Paul McGrath who earned the PFA Player of the Year award, were in close contention for much of the season. However, they lost all three of their final matches to surrender their title challenge. Norwich City produced one of the great underdog stories, finishing third despite having a negative goal difference of minus four  -  a feat unmatched in Premier League history. Their impressive campaign under Mike Walker included a famous victory over Bayern Munich in the UEFA Cup.

At the other end of the table, Nottingham Forest endured a miserable final season under the legendary Brian Clough. Forest were bottom for much of the campaign, and their relegation in early May prompted Clough to announce his retirement after 18 years in charge. Middlesbrough, newly promoted, collapsed from a decent mid-season position to go down in 21st place. Crystal Palace were the last team relegated, dropping down after failing to win their final match.

Teddy Sheringham was the league's top scorer with 22 goals, having started the season at Nottingham Forest before moving to Tottenham Hotspur. The inaugural season produced 1,222 goals in 462 matches, setting a Premier League record that stood for over three decades. Ryan Giggs, just 19 years old, won the PFA Young Player of the Year award for the second consecutive time.

The season marked the beginning of Manchester United's dynasty under Ferguson, the decline of Liverpool's long-standing dominance, and the dawn of football as big business in England. The Premier League era had begun.`,
  notableMoments: [
    "Manchester United won the inaugural Premier League title, their first league championship in 26 years",
    "Eric Cantona's transfer from Leeds to Manchester United in November transformed the title race",
    "Brian Clough retired after Nottingham Forest's relegation, ending an 18-year managerial reign",
    "Norwich City finished third with a negative goal difference  -  a unique Premier League achievement",
    "Wimbledon vs Everton drew just 3,039 fans, the lowest Premier League attendance on record",
  ],
  metaTitle: "Premier League 1992-93 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the inaugural 1992-93 Premier League season. Final standings, top goalscorers, assists, player awards and a complete season recap.",
};

export default data;
