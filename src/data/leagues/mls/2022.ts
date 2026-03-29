import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "MLS",
  leagueSlug: "mls",
  season: "2022",
  seasonDisplay: "2022",
  champion: "LAFC",
  championSlug: "lafc",
  topScorer: "Hany Mukhtar",
  topScorerGoals: 23,
  totalGoals: 1380,
  standings: [
    { pos: 1, club: "LAFC", clubSlug: "lafc", p: 34, w: 21, d: 4, l: 9, gf: 66, ga: 38, gd: 28, pts: 67, zone: "cl" },
    { pos: 2, club: "Philadelphia Union", clubSlug: "philadelphia-union", p: 34, w: 19, d: 8, l: 7, gf: 72, ga: 36, gd: 36, pts: 67, zone: "cl" },
    { pos: 3, club: "Austin FC", clubSlug: "austin-fc", p: 34, w: 16, d: 10, l: 8, gf: 62, ga: 42, gd: 20, pts: 58 },
    { pos: 4, club: "FC Cincinnati", clubSlug: "fc-cincinnati", p: 34, w: 18, d: 4, l: 12, gf: 64, ga: 50, gd: 14, pts: 58 },
    { pos: 5, club: "New York Red Bulls", clubSlug: "new-york-red-bulls", p: 34, w: 15, d: 9, l: 10, gf: 54, ga: 39, gd: 15, pts: 54 },
    { pos: 6, club: "Nashville SC", clubSlug: "nashville-sc", p: 34, w: 14, d: 12, l: 8, gf: 49, ga: 35, gd: 14, pts: 54 },
    { pos: 7, club: "CF Montreal", clubSlug: "cf-montreal", p: 34, w: 15, d: 7, l: 12, gf: 54, ga: 50, gd: 4, pts: 52 },
    { pos: 8, club: "Portland Timbers", clubSlug: "portland-timbers", p: 34, w: 14, d: 8, l: 12, gf: 58, ga: 55, gd: 3, pts: 50 },
    { pos: 9, club: "Real Salt Lake", clubSlug: "real-salt-lake", p: 34, w: 13, d: 8, l: 13, gf: 51, ga: 48, gd: 3, pts: 47 },
    { pos: 10, club: "Dallas", clubSlug: "dallas", p: 34, w: 13, d: 8, l: 13, gf: 49, ga: 48, gd: 1, pts: 47 },
    { pos: 11, club: "Columbus Crew", clubSlug: "columbus-crew", p: 34, w: 11, d: 11, l: 12, gf: 46, ga: 46, gd: 0, pts: 44 },
    { pos: 12, club: "New York City FC", clubSlug: "new-york-city-fc", p: 34, w: 14, d: 6, l: 14, gf: 57, ga: 52, gd: 5, pts: 48 },
    { pos: 13, club: "LA Galaxy", clubSlug: "la-galaxy", p: 34, w: 14, d: 5, l: 15, gf: 52, ga: 49, gd: 3, pts: 47 },
    { pos: 14, club: "Minnesota United", clubSlug: "minnesota-united", p: 34, w: 13, d: 6, l: 15, gf: 49, ga: 51, gd: -2, pts: 45 },
    { pos: 15, club: "Inter Miami", clubSlug: "inter-miami", p: 34, w: 14, d: 5, l: 15, gf: 48, ga: 56, gd: -8, pts: 47 },
    { pos: 16, club: "Seattle Sounders", clubSlug: "seattle-sounders", p: 34, w: 13, d: 5, l: 16, gf: 44, ga: 47, gd: -3, pts: 44 },
    { pos: 17, club: "Atlanta United", clubSlug: "atlanta-united", p: 34, w: 11, d: 8, l: 15, gf: 43, ga: 47, gd: -4, pts: 41 },
    { pos: 18, club: "Charlotte FC", clubSlug: "charlotte-fc", p: 34, w: 10, d: 9, l: 15, gf: 42, ga: 48, gd: -6, pts: 39 },
    { pos: 19, club: "DC United", clubSlug: "dc-united", p: 34, w: 7, d: 10, l: 17, gf: 49, ga: 62, gd: -13, pts: 31 },
    { pos: 20, club: "San Jose Earthquakes", clubSlug: "san-jose-earthquakes", p: 34, w: 8, d: 6, l: 20, gf: 39, ga: 59, gd: -20, pts: 30 },
  ],
  scorers: [
    { name: "Hany Mukhtar", playerSlug: "hany-mukhtar", club: "Nashville SC", clubSlug: "nashville-sc", goals: 23, assists: 11 },
    { name: "Sebastian Driussi", playerSlug: "sebastian-driussi", club: "Austin FC", clubSlug: "austin-fc", goals: 22, assists: 7 },
    { name: "Daniel Gazdag", playerSlug: "daniel-gazdag", club: "Philadelphia Union", clubSlug: "philadelphia-union", goals: 19, assists: 7 },
    { name: "Brandon Vazquez", playerSlug: "brandon-vazquez", club: "FC Cincinnati", clubSlug: "fc-cincinnati", goals: 18, assists: 4 },
    { name: "Jesus Ferreira", playerSlug: "jesus-ferreira", club: "Dallas", clubSlug: "dallas", goals: 15, assists: 5 },
    { name: "Taxiarchis Fountas", playerSlug: "taxiarchis-fountas", club: "DC United", clubSlug: "dc-united", goals: 12, assists: 4 },
    { name: "Valentín Castellanos", playerSlug: "valentin-castellanos", club: "New York City FC", clubSlug: "new-york-city-fc", goals: 13, assists: 4 },
    { name: "Carlos Vela", playerSlug: "carlos-vela", club: "LAFC", clubSlug: "lafc", goals: 12, assists: 13 },
    { name: "Jeremy Ebobisse", playerSlug: "jeremy-ebobisse", club: "San Jose Earthquakes", clubSlug: "san-jose-earthquakes", goals: 11, assists: 3 },
    { name: "Raul Ruidiaz", playerSlug: "raul-ruidiaz", club: "Seattle Sounders", clubSlug: "seattle-sounders", goals: 10, assists: 4 },
  ],
  assisters: [
    { name: "Carlos Vela", playerSlug: "carlos-vela", club: "LAFC", clubSlug: "lafc", assists: 13 },
    { name: "Hany Mukhtar", playerSlug: "hany-mukhtar", club: "Nashville SC", clubSlug: "nashville-sc", assists: 11 },
    { name: "Daniel Gazdag", playerSlug: "daniel-gazdag", club: "Philadelphia Union", clubSlug: "philadelphia-union", assists: 7 },
    { name: "Sebastian Driussi", playerSlug: "sebastian-driussi", club: "Austin FC", clubSlug: "austin-fc", assists: 7 },
    { name: "Carles Gil", playerSlug: "carles-gil", club: "New England Revolution", clubSlug: "new-england-revolution", assists: 8 },
  ],
  cleanSheets: [
    { name: "Andre Blake", playerSlug: "andre-blake", club: "Philadelphia Union", clubSlug: "philadelphia-union", cleanSheets: 13 },
    { name: "Maxime Crepeau", playerSlug: "maxime-crepeau", club: "LAFC", clubSlug: "lafc", cleanSheets: 10 },
    { name: "Joe Willis", playerSlug: "joe-willis", club: "Nashville SC", clubSlug: "nashville-sc", cleanSheets: 10 },
    { name: "Brad Guzan", playerSlug: "brad-guzan", club: "Atlanta United", clubSlug: "atlanta-united", cleanSheets: 8 },
    { name: "Stefan Frei", playerSlug: "stefan-frei", club: "Seattle Sounders", clubSlug: "seattle-sounders", cleanSheets: 7 },
  ],
  awards: [
    { title: "MLS Cup Champion", winner: "LAFC" },
    { title: "Supporters' Shield (Best Record)", winner: "LAFC" },
    { title: "MVP", winner: "Hany Mukhtar", playerSlug: "hany-mukhtar" },
    { title: "Golden Boot", winner: "Hany Mukhtar", playerSlug: "hany-mukhtar" },
  ],
  relegated: [],
  promoted: [],
  narrative: `The 2022 MLS season culminated in one of the most dramatic cup finals in American football history. LAFC defeated Philadelphia Union in a penalty shootout to win MLS Cup, with Gareth Bale scoring a 128th-minute equaliser to force the shootout after one of the most remarkable finishes the sport has ever produced.

LAFC were the dominant force throughout the regular season, winning both the Supporters' Shield for the best overall record and the MLS Cup. Steve Cherundolo's side combined attacking flair with a newly found defensive solidity, with Carlos Vela providing 12 goals and a league-high 13 assists. The arrival of Bale and Giorgio Chiellini added experience and quality that proved decisive in the playoff run.

Hany Mukhtar of Nashville SC was named league MVP after a stunning campaign of 23 goals and 11 assists. The German midfielder was the most complete attacking player in the league, driving Nashville to a strong season. Sebastian Driussi of Austin FC ran him close with 22 goals of his own, in what was one of the tightest Golden Boot races in years.

Philadelphia Union, winners of the Supporters' Shield in the Eastern Conference with a record-tying 67 points, were the class act defensively. Andre Blake kept 13 clean sheets and was widely regarded as the best goalkeeper in the league. Jim Curtin's side came within a penalty shootout of their first ever MLS Cup.

FC Cincinnati's remarkable improvement continued as they reached the playoffs for the first time, with Brandon Vazquez scoring 18 goals. The New York Red Bulls and CF Montreal both had solid campaigns, while Portland Timbers reached the Western Conference Final.

Seattle Sounders made history by winning the CONCACAF Champions League earlier in the year, becoming the first MLS team to lift the continental trophy. It was a landmark achievement for the league's credibility on the international stage, even if their domestic campaign was less consistent.

The 2022 season was a milestone year for MLS: a dramatic final, growing star power and international recognition through Seattle's continental triumph all pointed to a league ascending towards the global mainstream.`,
  notableMoments: [
    "Gareth Bale scored a 128th-minute equaliser in the MLS Cup Final for LAFC",
    "LAFC won both the Supporters' Shield and MLS Cup",
    "Seattle Sounders became the first MLS team to win CONCACAF Champions League",
    "Hany Mukhtar won both MVP and Golden Boot with 23 goals and 11 assists",
    "Charlotte FC played their debut MLS season",
  ],
  metaTitle: "MLS 2022 | Final Standings, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2022 MLS season. Final standings, top scorers, MVP, MLS Cup winner and a complete season recap.",
};

export default data;
