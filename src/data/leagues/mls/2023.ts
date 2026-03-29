import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "MLS",
  leagueSlug: "mls",
  season: "2023",
  seasonDisplay: "2023",
  champion: "Columbus Crew",
  championSlug: "columbus-crew",
  topScorer: "Lionel Messi",
  topScorerGoals: 12,
  totalGoals: 1420,
  standings: [
    { pos: 1, club: "Inter Miami", clubSlug: "inter-miami", p: 34, w: 12, d: 9, l: 13, gf: 53, ga: 49, gd: 4, pts: 45 },
    { pos: 2, club: "Columbus Crew", clubSlug: "columbus-crew", p: 34, w: 17, d: 9, l: 8, gf: 53, ga: 39, gd: 14, pts: 60, zone: "cl" },
    { pos: 3, club: "FC Cincinnati", clubSlug: "fc-cincinnati", p: 34, w: 21, d: 6, l: 7, gf: 67, ga: 40, gd: 27, pts: 69, zone: "cl" },
    { pos: 4, club: "St. Louis City", clubSlug: "st-louis-city", p: 34, w: 15, d: 7, l: 12, gf: 48, ga: 44, gd: 4, pts: 52 },
    { pos: 5, club: "Philadelphia Union", clubSlug: "philadelphia-union", p: 34, w: 13, d: 7, l: 14, gf: 47, ga: 48, gd: -1, pts: 46 },
    { pos: 6, club: "LAFC", clubSlug: "lafc", p: 34, w: 18, d: 5, l: 11, gf: 61, ga: 50, gd: 11, pts: 59 },
    { pos: 7, club: "LA Galaxy", clubSlug: "la-galaxy", p: 34, w: 14, d: 7, l: 13, gf: 53, ga: 51, gd: 2, pts: 49 },
    { pos: 8, club: "Real Salt Lake", clubSlug: "real-salt-lake", p: 34, w: 14, d: 10, l: 10, gf: 47, ga: 41, gd: 6, pts: 52 },
    { pos: 9, club: "Seattle Sounders", clubSlug: "seattle-sounders", p: 34, w: 12, d: 10, l: 12, gf: 42, ga: 40, gd: 2, pts: 46 },
    { pos: 10, club: "Houston Dynamo", clubSlug: "houston-dynamo", p: 34, w: 14, d: 8, l: 12, gf: 55, ga: 50, gd: 5, pts: 50 },
    { pos: 11, club: "Nashville SC", clubSlug: "nashville-sc", p: 34, w: 13, d: 10, l: 11, gf: 45, ga: 38, gd: 7, pts: 49 },
    { pos: 12, club: "New England Revolution", clubSlug: "new-england-revolution", p: 34, w: 12, d: 7, l: 15, gf: 40, ga: 49, gd: -9, pts: 43 },
    { pos: 13, club: "Portland Timbers", clubSlug: "portland-timbers", p: 34, w: 11, d: 8, l: 15, gf: 44, ga: 50, gd: -6, pts: 41 },
    { pos: 14, club: "Orlando City", clubSlug: "orlando-city", p: 34, w: 15, d: 7, l: 12, gf: 51, ga: 45, gd: 6, pts: 52 },
    { pos: 15, club: "Minnesota United", clubSlug: "minnesota-united", p: 34, w: 11, d: 10, l: 13, gf: 46, ga: 48, gd: -2, pts: 43 },
    { pos: 16, club: "New York Red Bulls", clubSlug: "new-york-red-bulls", p: 34, w: 12, d: 8, l: 14, gf: 41, ga: 43, gd: -2, pts: 44 },
    { pos: 17, club: "Atlanta United", clubSlug: "atlanta-united", p: 34, w: 9, d: 9, l: 16, gf: 40, ga: 51, gd: -11, pts: 36 },
    { pos: 18, club: "Charlotte FC", clubSlug: "charlotte-fc", p: 34, w: 10, d: 7, l: 17, gf: 38, ga: 50, gd: -12, pts: 37 },
    { pos: 19, club: "CF Montreal", clubSlug: "cf-montreal", p: 34, w: 9, d: 8, l: 17, gf: 38, ga: 56, gd: -18, pts: 35 },
    { pos: 20, club: "San Jose Earthquakes", clubSlug: "san-jose-earthquakes", p: 34, w: 7, d: 4, l: 23, gf: 37, ga: 67, gd: -30, pts: 25 },
  ],
  scorers: [
    { name: "Lionel Messi", playerSlug: "lionel-messi", club: "Inter Miami", clubSlug: "inter-miami", goals: 12, assists: 4 },
    { name: "Christian Benteke", playerSlug: "christian-benteke", club: "DC United", clubSlug: "dc-united", goals: 13, assists: 3 },
    { name: "Denis Bouanga", playerSlug: "denis-bouanga", club: "LAFC", clubSlug: "lafc", goals: 18, assists: 6 },
    { name: "Cucho Hernandez", playerSlug: "cucho-hernandez", club: "Columbus Crew", clubSlug: "columbus-crew", goals: 14, assists: 8 },
    { name: "Chicharito", playerSlug: "chicharito", club: "LA Galaxy", clubSlug: "la-galaxy", goals: 11, assists: 2 },
    { name: "Luciano Acosta", playerSlug: "luciano-acosta", club: "FC Cincinnati", clubSlug: "fc-cincinnati", goals: 12, assists: 17 },
    { name: "Hany Mukhtar", playerSlug: "hany-mukhtar", club: "Nashville SC", clubSlug: "nashville-sc", goals: 11, assists: 7 },
    { name: "Sebastian Driussi", playerSlug: "sebastian-driussi", club: "Austin FC", clubSlug: "austin-fc", goals: 10, assists: 5 },
    { name: "Jordan Morris", playerSlug: "jordan-morris", club: "Seattle Sounders", clubSlug: "seattle-sounders", goals: 10, assists: 4 },
    { name: "Riqui Puig", playerSlug: "riqui-puig", club: "LA Galaxy", clubSlug: "la-galaxy", goals: 8, assists: 10 },
  ],
  assisters: [
    { name: "Luciano Acosta", playerSlug: "luciano-acosta", club: "FC Cincinnati", clubSlug: "fc-cincinnati", assists: 17 },
    { name: "Riqui Puig", playerSlug: "riqui-puig", club: "LA Galaxy", clubSlug: "la-galaxy", assists: 10 },
    { name: "Cucho Hernandez", playerSlug: "cucho-hernandez", club: "Columbus Crew", clubSlug: "columbus-crew", assists: 8 },
    { name: "Hany Mukhtar", playerSlug: "hany-mukhtar", club: "Nashville SC", clubSlug: "nashville-sc", assists: 7 },
    { name: "Denis Bouanga", playerSlug: "denis-bouanga", club: "LAFC", clubSlug: "lafc", assists: 6 },
  ],
  cleanSheets: [
    { name: "Roman Burki", playerSlug: "roman-burki", club: "St. Louis City", clubSlug: "st-louis-city", cleanSheets: 10 },
    { name: "Andre Blake", playerSlug: "andre-blake", club: "Philadelphia Union", clubSlug: "philadelphia-union", cleanSheets: 9 },
    { name: "Patrick Schulte", playerSlug: "patrick-schulte", club: "Columbus Crew", clubSlug: "columbus-crew", cleanSheets: 9 },
    { name: "Joe Willis", playerSlug: "joe-willis", club: "Nashville SC", clubSlug: "nashville-sc", cleanSheets: 8 },
    { name: "Drake Callender", playerSlug: "drake-callender", club: "Inter Miami", clubSlug: "inter-miami", cleanSheets: 7 },
  ],
  awards: [
    { title: "MLS Cup Champion", winner: "Columbus Crew" },
    { title: "Supporters' Shield (Best Record)", winner: "FC Cincinnati" },
    { title: "MVP", winner: "Luciano Acosta", playerSlug: "luciano-acosta" },
    { title: "Golden Boot", winner: "Denis Bouanga", playerSlug: "denis-bouanga" },
  ],
  relegated: [],
  promoted: [],
  narrative: `The 2023 MLS season will forever be remembered as the year Lionel Messi arrived in American football. The Argentine legend's move to Inter Miami in July transformed not just the club but the entire league's global profile, bringing unprecedented attention to MLS from fans and media worldwide.

Messi's impact was immediate and spectacular. Despite joining mid-season, he scored 12 goals in limited appearances and led Inter Miami to the Leagues Cup title, the club's first ever trophy. However, Miami's regular season form was inconsistent, and they finished outside the top playoff positions.

The regular season belonged to FC Cincinnati, who won the Supporters' Shield with 69 points. Luciano Acosta was the creative heartbeat with 12 goals and a league-leading 17 assists, earning him the MVP award. Cincinnati's free-flowing attacking football was the best the league had to offer through the regular season.

Denis Bouanga was the league's most prolific scorer with 18 goals for LAFC, winning the Golden Boot award. The Gabonese forward formed a lethal partnership with Carlos Vela, making LAFC one of the most entertaining sides in the Western Conference.

But when it mattered most, it was Columbus Crew who peaked at the right time. Wilfried Nancy's side navigated the playoffs with composure and quality, with Cucho Hernandez proving the difference in several key matches. Columbus beat LAFC in the MLS Cup Final to claim their third championship, with Hernandez contributing 14 goals and 8 assists across the season.

St. Louis City, in their expansion debut season, impressed with a competitive campaign that saw them challenge for playoff positions. Real Salt Lake and Houston Dynamo both enjoyed strong seasons, the latter winning the US Open Cup.

The 2023 season marked a watershed moment for MLS. Messi's arrival pushed the league into mainstream global conversation, while the on-pitch quality continued to improve. Columbus Crew's deserved Cup triumph capped a season that demonstrated the growing depth and competitiveness of American football's top division.`,
  notableMoments: [
    "Lionel Messi joined Inter Miami in July and immediately won the Leagues Cup",
    "FC Cincinnati won the Supporters' Shield with 69 points",
    "Columbus Crew won MLS Cup, their third championship",
    "Denis Bouanga scored 18 goals to claim the Golden Boot",
    "Luciano Acosta won MVP with 12 goals and 17 assists for FC Cincinnati",
  ],
  metaTitle: "MLS 2023 | Final Standings, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2023 MLS season. Final standings, top scorers, MVP, MLS Cup winner and a complete season recap.",
};

export default data;
