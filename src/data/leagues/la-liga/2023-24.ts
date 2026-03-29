import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "La Liga",
  leagueSlug: "la-liga",
  season: "2023-24",
  seasonDisplay: "2023-24",
  champion: "Real Madrid",
  championSlug: "real-madrid",
  topScorer: "Artem Dovbyk",
  topScorerGoals: 24,
  totalGoals: 1038,
  standings: [
    { pos: 1, club: "Real Madrid", clubSlug: "real-madrid", p: 38, w: 29, d: 4, l: 5, gf: 87, ga: 26, gd: 61, pts: 91, zone: "cl" },
    { pos: 2, club: "Barcelona", clubSlug: "barcelona", p: 38, w: 26, d: 7, l: 5, gf: 79, ga: 44, gd: 35, pts: 85, zone: "cl" },
    { pos: 3, club: "Girona", clubSlug: "girona", p: 38, w: 25, d: 6, l: 7, gf: 85, ga: 46, gd: 39, pts: 81, zone: "cl" },
    { pos: 4, club: "Atletico Madrid", clubSlug: "atletico-madrid", p: 38, w: 24, d: 4, l: 10, gf: 70, ga: 43, gd: 27, pts: 76, zone: "cl" },
    { pos: 5, club: "Athletic Bilbao", clubSlug: "athletic-bilbao", p: 38, w: 19, d: 11, l: 8, gf: 61, ga: 37, gd: 24, pts: 68, zone: "el" },
    { pos: 6, club: "Real Sociedad", clubSlug: "real-sociedad", p: 38, w: 16, d: 12, l: 10, gf: 51, ga: 39, gd: 12, pts: 60, zone: "ecl" },
    { pos: 7, club: "Real Betis", clubSlug: "real-betis", p: 38, w: 14, d: 15, l: 9, gf: 48, ga: 42, gd: 6, pts: 57 },
    { pos: 8, club: "Villarreal", clubSlug: "villarreal", p: 38, w: 14, d: 11, l: 13, gf: 65, ga: 62, gd: 3, pts: 53 },
    { pos: 9, club: "Valencia", clubSlug: "valencia", p: 38, w: 13, d: 10, l: 15, gf: 42, ga: 51, gd: -9, pts: 49 },
    { pos: 10, club: "Getafe", clubSlug: "getafe", p: 38, w: 12, d: 13, l: 13, gf: 44, ga: 51, gd: -7, pts: 49 },
    { pos: 11, club: "Osasuna", clubSlug: "osasuna", p: 38, w: 12, d: 11, l: 15, gf: 42, ga: 53, gd: -11, pts: 47 },
    { pos: 12, club: "Celta Vigo", clubSlug: "celta-vigo", p: 38, w: 12, d: 10, l: 16, gf: 50, ga: 54, gd: -4, pts: 46 },
    { pos: 13, club: "Sevilla", clubSlug: "sevilla", p: 38, w: 11, d: 12, l: 15, gf: 47, ga: 54, gd: -7, pts: 45 },
    { pos: 14, club: "Mallorca", clubSlug: "mallorca", p: 38, w: 12, d: 9, l: 17, gf: 35, ga: 48, gd: -13, pts: 45 },
    { pos: 15, club: "Las Palmas", clubSlug: "las-palmas", p: 38, w: 11, d: 11, l: 16, gf: 39, ga: 47, gd: -8, pts: 44 },
    { pos: 16, club: "Rayo Vallecano", clubSlug: "rayo-vallecano", p: 38, w: 10, d: 10, l: 18, gf: 32, ga: 49, gd: -17, pts: 40 },
    { pos: 17, club: "Alaves", clubSlug: "alaves", p: 38, w: 7, d: 10, l: 21, gf: 28, ga: 52, gd: -24, pts: 31 },
    { pos: 18, club: "Cadiz", clubSlug: "cadiz", p: 38, w: 6, d: 15, l: 17, gf: 29, ga: 55, gd: -26, pts: 33, zone: "relegation" },
    { pos: 19, club: "Granada", clubSlug: "granada", p: 38, w: 4, d: 9, l: 25, gf: 35, ga: 72, gd: -37, pts: 21, zone: "relegation" },
    { pos: 20, club: "Almeria", clubSlug: "almeria", p: 38, w: 3, d: 12, l: 23, gf: 33, ga: 68, gd: -35, pts: 21, zone: "relegation" },
  ],
  scorers: [
    { name: "Artem Dovbyk", playerSlug: "artem-dovbyk", club: "Girona", clubSlug: "girona", goals: 24, assists: 8 },
    { name: "Alexander Sorloth", playerSlug: "alexander-sorloth", club: "Villarreal", clubSlug: "villarreal", goals: 23, assists: 4 },
    { name: "Jude Bellingham", playerSlug: "jude-bellingham", club: "Real Madrid", clubSlug: "real-madrid", goals: 19, assists: 6 },
    { name: "Antoine Griezmann", playerSlug: "antoine-griezmann", club: "Atletico Madrid", clubSlug: "atletico-madrid", goals: 16, assists: 7 },
    { name: "Robert Lewandowski", playerSlug: "robert-lewandowski", club: "Barcelona", clubSlug: "barcelona", goals: 15, assists: 5 },
    { name: "Alvaro Morata", playerSlug: "alvaro-morata", club: "Atletico Madrid", clubSlug: "atletico-madrid", goals: 15, assists: 3 },
    { name: "Vinicius Junior", playerSlug: "vinicius-junior", club: "Real Madrid", clubSlug: "real-madrid", goals: 15, assists: 5 },
    { name: "Iago Aspas", playerSlug: "iago-aspas", club: "Celta Vigo", clubSlug: "celta-vigo", goals: 14, assists: 4 },
    { name: "Joselu", playerSlug: "joselu", club: "Real Madrid", clubSlug: "real-madrid", goals: 13, assists: 3 },
    { name: "Savio", playerSlug: "savio", club: "Girona", clubSlug: "girona", goals: 11, assists: 10 },
  ],
  assisters: [
    { name: "Savio", playerSlug: "savio", club: "Girona", clubSlug: "girona", assists: 10 },
    { name: "Artem Dovbyk", playerSlug: "artem-dovbyk", club: "Girona", clubSlug: "girona", assists: 8 },
    { name: "Antoine Griezmann", playerSlug: "antoine-griezmann", club: "Atletico Madrid", clubSlug: "atletico-madrid", assists: 7 },
    { name: "Jude Bellingham", playerSlug: "jude-bellingham", club: "Real Madrid", clubSlug: "real-madrid", assists: 6 },
    { name: "Vinicius Junior", playerSlug: "vinicius-junior", club: "Real Madrid", clubSlug: "real-madrid", assists: 5 },
  ],
  cleanSheets: [
    { name: "Unai Simon", playerSlug: "unai-simon", club: "Athletic Bilbao", clubSlug: "athletic-bilbao", cleanSheets: 14 },
    { name: "Marc-Andre ter Stegen", playerSlug: "marc-andre-ter-stegen", club: "Barcelona", clubSlug: "barcelona", cleanSheets: 13 },
    { name: "Andriy Lunin", playerSlug: "andriy-lunin", club: "Real Madrid", clubSlug: "real-madrid", cleanSheets: 12 },
    { name: "Alex Remiro", playerSlug: "alex-remiro", club: "Real Sociedad", clubSlug: "real-sociedad", cleanSheets: 11 },
    { name: "Jan Oblak", playerSlug: "jan-oblak", club: "Atletico Madrid", clubSlug: "atletico-madrid", cleanSheets: 10 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Jude Bellingham", playerSlug: "jude-bellingham" },
    { title: "Pichichi (Top Scorer)", winner: "Artem Dovbyk", playerSlug: "artem-dovbyk" },
    { title: "Best Goalkeeper", winner: "Unai Simon", playerSlug: "unai-simon" },
    { title: "Best Coach", winner: "Michel (Girona)" },
  ],
  relegated: ["Granada", "Almeria", "Cadiz"],
  promoted: ["Leganes", "Real Valladolid", "Espanyol"],
  narrative: `Real Madrid reclaimed the La Liga title in 2023-24, finishing on 91 points in what proved to be a season of surprises and storylines that captivated Spanish football from August to May.

The headline act was Jude Bellingham. The young Englishman, signed from Borussia Dortmund for over 100 million euros, delivered one of the most remarkable debut seasons in La Liga history. With 19 league goals, many of them late winners, Bellingham became the heartbeat of Carlo Ancelotti's side and was named the league's Player of the Season.

But perhaps the greatest story of the campaign belonged to Girona. Michel's side, competing in only their second ever top-flight season, finished a stunning third on 81 points, qualifying for the Champions League for the first time in the club's history. Ukrainian striker Artem Dovbyk was the driving force, scoring 24 goals to claim the Pichichi trophy as La Liga's top scorer. Brazilian winger Savio provided 10 assists, making Girona's attack one of the most potent in the division.

Barcelona endured a frustrating campaign by their standards. Despite finishing second on 85 points, Xavi Hernandez's side never truly threatened Real Madrid's march to the title. Robert Lewandowski managed 15 goals, a notable drop from his debut season tally, and the club's inconsistency in big matches proved costly. Xavi announced his departure before later reversing the decision, adding further turbulence to a difficult year.

Atletico Madrid secured fourth place under Diego Simeone, with Antoine Griezmann and Alvaro Morata combining for 31 goals. Athletic Bilbao enjoyed a fine season, finishing fifth and qualifying for the Europa League under Ernesto Valverde, while also winning the Copa del Rey for the first time in 40 years.

At the bottom, newly promoted Granada and Almeria both finished on just 21 points, going straight back down. Cadiz joined them in relegation with 33 points, unable to find consistency throughout the campaign.

Alexander Sorloth deserves mention for his outstanding campaign at Villarreal, netting 23 goals to finish second in the scoring charts. The Norwegian's form earned him a summer move to Atletico Madrid.

A season that saw Real Madrid add the Champions League to their domestic crown, witnessed the rise of a provincial fairy tale in Girona, and produced one of the most exciting debut campaigns in league history through Bellingham -- the 2023-24 La Liga season delivered drama at every turn.`,
  notableMoments: [
    "Jude Bellingham scored 19 league goals in a sensational debut season at Real Madrid",
    "Girona qualified for the Champions League for the first time in their history",
    "Artem Dovbyk won the Pichichi trophy with 24 goals in his debut La Liga campaign",
    "Athletic Bilbao won the Copa del Rey for the first time in 40 years",
    "Real Madrid completed the La Liga and Champions League double",
  ],
  metaTitle: "La Liga 2023-24 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2023-24 La Liga season. Final standings, top goalscorers, assists, Pichichi winner and a complete season recap.",
};

export default data;
