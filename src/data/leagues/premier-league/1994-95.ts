import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "1994-95",
  seasonDisplay: "1994-95",
  champion: "Blackburn Rovers",
  championSlug: "blackburn-rovers",
  topScorer: "Alan Shearer",
  topScorerGoals: 34,
  totalGoals: 1195,
  standings: [
    { pos: 1, club: "Blackburn Rovers", clubSlug: "blackburn-rovers", p: 42, w: 27, d: 8, l: 7, gf: 80, ga: 39, gd: 41, pts: 89, zone: "cl" },
    { pos: 2, club: "Manchester United", clubSlug: "manchester-united", p: 42, w: 26, d: 10, l: 6, gf: 77, ga: 28, gd: 49, pts: 88, zone: "cl" },
    { pos: 3, club: "Nottingham Forest", clubSlug: "nottingham-forest", p: 42, w: 22, d: 11, l: 9, gf: 72, ga: 43, gd: 29, pts: 77, zone: "el" },
    { pos: 4, club: "Liverpool", clubSlug: "liverpool", p: 42, w: 21, d: 11, l: 10, gf: 65, ga: 37, gd: 28, pts: 74, zone: "el" },
    { pos: 5, club: "Leeds United", clubSlug: "leeds-united", p: 42, w: 20, d: 13, l: 9, gf: 59, ga: 38, gd: 21, pts: 73 },
    { pos: 6, club: "Newcastle United", clubSlug: "newcastle-united", p: 42, w: 20, d: 12, l: 10, gf: 67, ga: 47, gd: 20, pts: 72 },
    { pos: 7, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 42, w: 16, d: 14, l: 12, gf: 66, ga: 58, gd: 8, pts: 62 },
    { pos: 8, club: "Queens Park Rangers", clubSlug: "queens-park-rangers", p: 42, w: 17, d: 9, l: 16, gf: 61, ga: 59, gd: 2, pts: 60 },
    { pos: 9, club: "Wimbledon", clubSlug: "wimbledon", p: 42, w: 15, d: 11, l: 16, gf: 48, ga: 65, gd: -17, pts: 56 },
    { pos: 10, club: "Southampton", clubSlug: "southampton", p: 42, w: 12, d: 18, l: 12, gf: 61, ga: 63, gd: -2, pts: 54 },
    { pos: 11, club: "Chelsea", clubSlug: "chelsea", p: 42, w: 13, d: 15, l: 14, gf: 50, ga: 55, gd: -5, pts: 54 },
    { pos: 12, club: "Arsenal", clubSlug: "arsenal", p: 42, w: 13, d: 12, l: 17, gf: 52, ga: 49, gd: 3, pts: 51 },
    { pos: 13, club: "Sheffield Wednesday", clubSlug: "sheffield-wednesday", p: 42, w: 13, d: 12, l: 17, gf: 49, ga: 57, gd: -8, pts: 51 },
    { pos: 14, club: "West Ham United", clubSlug: "west-ham-united", p: 42, w: 13, d: 11, l: 18, gf: 44, ga: 48, gd: -4, pts: 50 },
    { pos: 15, club: "Everton", clubSlug: "everton", p: 42, w: 11, d: 17, l: 14, gf: 44, ga: 51, gd: -7, pts: 50 },
    { pos: 16, club: "Coventry City", clubSlug: "coventry-city", p: 42, w: 12, d: 14, l: 16, gf: 44, ga: 62, gd: -18, pts: 50 },
    { pos: 17, club: "Manchester City", clubSlug: "manchester-city", p: 42, w: 12, d: 13, l: 17, gf: 53, ga: 64, gd: -11, pts: 49 },
    { pos: 18, club: "Aston Villa", clubSlug: "aston-villa", p: 42, w: 11, d: 15, l: 16, gf: 51, ga: 56, gd: -5, pts: 48 },
    { pos: 19, club: "Crystal Palace", clubSlug: "crystal-palace", p: 42, w: 11, d: 12, l: 19, gf: 34, ga: 49, gd: -15, pts: 45, zone: "relegation" },
    { pos: 20, club: "Norwich City", clubSlug: "norwich-city", p: 42, w: 10, d: 13, l: 19, gf: 37, ga: 54, gd: -17, pts: 43, zone: "relegation" },
    { pos: 21, club: "Leicester City", clubSlug: "leicester-city", p: 42, w: 6, d: 11, l: 25, gf: 45, ga: 80, gd: -35, pts: 29, zone: "relegation" },
    { pos: 22, club: "Ipswich Town", clubSlug: "ipswich-town", p: 42, w: 7, d: 6, l: 29, gf: 36, ga: 93, gd: -57, pts: 27, zone: "relegation" },
  ],
  scorers: [
    { name: "Alan Shearer", playerSlug: "alan-shearer", club: "Blackburn Rovers", clubSlug: "blackburn-rovers", goals: 34, assists: 0 },
    { name: "Robbie Fowler", playerSlug: "robbie-fowler", club: "Liverpool", clubSlug: "liverpool", goals: 25, assists: 0 },
    { name: "Les Ferdinand", playerSlug: "les-ferdinand", club: "Queens Park Rangers", clubSlug: "queens-park-rangers", goals: 24, assists: 0 },
    { name: "Stan Collymore", playerSlug: "stan-collymore", club: "Nottingham Forest", clubSlug: "nottingham-forest", goals: 22, assists: 0 },
    { name: "Andy Cole", playerSlug: "andy-cole", club: "Newcastle United", clubSlug: "newcastle-united", goals: 21, assists: 0 },
    { name: "Jurgen Klinsmann", playerSlug: "jurgen-klinsmann", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 20, assists: 0 },
    { name: "Matt Le Tissier", playerSlug: "matt-le-tissier", club: "Southampton", clubSlug: "southampton", goals: 19, assists: 0 },
    { name: "Teddy Sheringham", playerSlug: "teddy-sheringham", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 18, assists: 0 },
    { name: "Ian Wright", playerSlug: "ian-wright", club: "Arsenal", clubSlug: "arsenal", goals: 18, assists: 0 },
    { name: "Uwe Rosler", playerSlug: "uwe-rosler", club: "Manchester City", clubSlug: "manchester-city", goals: 15, assists: 0 },
  ],
  assisters: [
    { name: "Matt Le Tissier", playerSlug: "matt-le-tissier", club: "Southampton", clubSlug: "southampton", assists: 13 },
    { name: "Ruel Fox", playerSlug: "ruel-fox", club: "Newcastle United", clubSlug: "newcastle-united", assists: 11 },
    { name: "Steve McManaman", playerSlug: "steve-mcmanaman", club: "Liverpool", clubSlug: "liverpool", assists: 10 },
    { name: "David Ginola", playerSlug: "david-ginola", club: "Newcastle United", clubSlug: "newcastle-united", assists: 9 },
    { name: "Darren Anderton", playerSlug: "darren-anderton", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", assists: 8 },
  ],
  cleanSheets: [
    { name: "Peter Schmeichel", playerSlug: "peter-schmeichel", club: "Manchester United", clubSlug: "manchester-united", cleanSheets: 20 },
    { name: "David James", playerSlug: "david-james", club: "Liverpool", clubSlug: "liverpool", cleanSheets: 17 },
    { name: "Tim Flowers", playerSlug: "tim-flowers", club: "Blackburn Rovers", clubSlug: "blackburn-rovers", cleanSheets: 16 },
    { name: "Nigel Martyn", playerSlug: "nigel-martyn", club: "Crystal Palace", clubSlug: "crystal-palace", cleanSheets: 14 },
    { name: "Mark Crossley", playerSlug: "mark-crossley", club: "Nottingham Forest", clubSlug: "nottingham-forest", cleanSheets: 13 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Alan Shearer", playerSlug: "alan-shearer" },
    { title: "Young Player of the Season", winner: "Robbie Fowler", playerSlug: "robbie-fowler" },
    { title: "Golden Boot", winner: "Alan Shearer", playerSlug: "alan-shearer" },
  ],
  relegated: ["Crystal Palace", "Norwich City", "Leicester City", "Ipswich Town"],
  promoted: ["Middlesbrough", "Bolton Wanderers"],
  narrative: `The 1994-95 season produced one of the most dramatic title races in English football history, with Blackburn Rovers claiming the Premier League championship for the first time  -  their first league title since 1914. Kenny Dalglish's side secured the trophy on the final day of the season despite losing 2-1 at Liverpool, as Manchester United could only manage a 1-1 draw at West Ham United.

Blackburn's title was bankrolled by steel magnate Jack Walker, whose investment transformed the Lancashire club from second-tier also-rans into champions. The formidable strike partnership of Alan Shearer and Chris Sutton  -  known as the SAS  -  provided the firepower, with Shearer scoring 34 goals to claim the Golden Boot and the PFA Player of the Year award. Blackburn led the league for much of the season, but a late wobble saw them lose three of their final four matches, creating unbearable tension on the final day.

Manchester United, chasing a third consecutive title, finished just one point behind on 88 points. Eric Cantona's infamous kung-fu kick on a Crystal Palace fan in January resulted in an eight-month ban, depriving United of their talisman for the crucial run-in. Andy Cole, signed from Newcastle for a record £6 million in January, struggled to replicate his prolific form from the previous season. The title race went down to the wire, but United's failure to beat West Ham on the final day handed the trophy to Blackburn.

Nottingham Forest had a superb campaign in their first season back in the top flight, finishing third under Frank Clark. Stan Collymore's 22 goals earned him a big-money move to Liverpool. Robbie Fowler announced himself as a generational talent, scoring 25 league goals for Liverpool at just 19 years of age, earning the PFA Young Player of the Year award. Jurgen Klinsmann's arrival at Tottenham was one of the stories of the season  -  the German striker's 20 goals and gracious celebration dives won hearts across the country.

This was the final season with 22 teams, as four clubs were relegated to reduce the league to 20 from the following season. Ipswich Town finished bottom with just 27 points, their 9-0 defeat to Manchester United being one of the heaviest losses in Premier League history. Leicester City, Norwich City and Crystal Palace also went down. The Cantona incident, Blackburn's fairy-tale triumph and Shearer's deadly finishing made this a season for the ages.`,
  notableMoments: [
    "Blackburn Rovers won their first league title since 1914, secured on a dramatic final day despite losing at Liverpool",
    "Eric Cantona's kung-fu kick on a Crystal Palace fan resulted in an eight-month ban from football",
    "Manchester United beat Ipswich Town 9-0, one of the heaviest victories in Premier League history",
    "Four teams were relegated for the only time in PL history, reducing the league from 22 to 20 teams",
    "Jurgen Klinsmann's arrival at Tottenham was a cultural moment, winning the FWA Footballer of the Year award",
  ],
  metaTitle: "Premier League 1994-95 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 1994-95 Premier League season. Final standings, top goalscorers, assists, player awards and a complete season recap.",
};

export default data;
