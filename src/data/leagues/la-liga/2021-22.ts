import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "La Liga",
  leagueSlug: "la-liga",
  season: "2021-22",
  seasonDisplay: "2021-22",
  champion: "Real Madrid",
  championSlug: "real-madrid",
  topScorer: "Karim Benzema",
  topScorerGoals: 27,
  totalGoals: 1024,
  standings: [
    { pos: 1, club: "Real Madrid", clubSlug: "real-madrid", p: 38, w: 26, d: 8, l: 4, gf: 80, ga: 31, gd: 49, pts: 86, zone: "cl" },
    { pos: 2, club: "Barcelona", clubSlug: "barcelona", p: 38, w: 21, d: 10, l: 7, gf: 68, ga: 38, gd: 30, pts: 73, zone: "cl" },
    { pos: 3, club: "Atletico Madrid", clubSlug: "atletico-madrid", p: 38, w: 21, d: 8, l: 9, gf: 65, ga: 43, gd: 22, pts: 71, zone: "cl" },
    { pos: 4, club: "Sevilla", clubSlug: "sevilla", p: 38, w: 18, d: 16, l: 4, gf: 53, ga: 30, gd: 23, pts: 70, zone: "cl" },
    { pos: 5, club: "Real Betis", clubSlug: "real-betis", p: 38, w: 19, d: 8, l: 11, gf: 62, ga: 40, gd: 22, pts: 65, zone: "el" },
    { pos: 6, club: "Real Sociedad", clubSlug: "real-sociedad", p: 38, w: 17, d: 11, l: 10, gf: 40, ga: 37, gd: 3, pts: 62, zone: "ecl" },
    { pos: 7, club: "Villarreal", clubSlug: "villarreal", p: 38, w: 16, d: 11, l: 11, gf: 63, ga: 37, gd: 26, pts: 59 },
    { pos: 8, club: "Athletic Bilbao", clubSlug: "athletic-bilbao", p: 38, w: 14, d: 13, l: 11, gf: 43, ga: 36, gd: 7, pts: 55 },
    { pos: 9, club: "Valencia", clubSlug: "valencia", p: 38, w: 11, d: 15, l: 12, gf: 48, ga: 53, gd: -5, pts: 48 },
    { pos: 10, club: "Osasuna", clubSlug: "osasuna", p: 38, w: 12, d: 11, l: 15, gf: 37, ga: 51, gd: -14, pts: 47 },
    { pos: 11, club: "Celta Vigo", clubSlug: "celta-vigo", p: 38, w: 12, d: 10, l: 16, gf: 43, ga: 48, gd: -5, pts: 46 },
    { pos: 12, club: "Rayo Vallecano", clubSlug: "rayo-vallecano", p: 38, w: 11, d: 9, l: 18, gf: 39, ga: 52, gd: -13, pts: 42 },
    { pos: 13, club: "Espanyol", clubSlug: "espanyol", p: 38, w: 10, d: 12, l: 16, gf: 40, ga: 53, gd: -13, pts: 42 },
    { pos: 14, club: "Elche", clubSlug: "elche", p: 38, w: 10, d: 9, l: 19, gf: 33, ga: 52, gd: -19, pts: 39 },
    { pos: 15, club: "Getafe", clubSlug: "getafe", p: 38, w: 8, d: 15, l: 15, gf: 33, ga: 41, gd: -8, pts: 39 },
    { pos: 16, club: "Mallorca", clubSlug: "mallorca", p: 38, w: 8, d: 12, l: 18, gf: 36, ga: 63, gd: -27, pts: 36 },
    { pos: 17, club: "Cadiz", clubSlug: "cadiz", p: 38, w: 8, d: 15, l: 15, gf: 35, ga: 51, gd: -16, pts: 39 },
    { pos: 18, club: "Granada", clubSlug: "granada", p: 38, w: 8, d: 14, l: 16, gf: 44, ga: 61, gd: -17, pts: 38, zone: "relegation" },
    { pos: 19, club: "Levante", clubSlug: "levante", p: 38, w: 8, d: 11, l: 19, gf: 48, ga: 63, gd: -15, pts: 35, zone: "relegation" },
    { pos: 20, club: "Alaves", clubSlug: "alaves", p: 38, w: 6, d: 13, l: 19, gf: 31, ga: 56, gd: -25, pts: 31, zone: "relegation" },
  ],
  scorers: [
    { name: "Karim Benzema", playerSlug: "karim-benzema", club: "Real Madrid", clubSlug: "real-madrid", goals: 27, assists: 12 },
    { name: "Iago Aspas", playerSlug: "iago-aspas", club: "Celta Vigo", clubSlug: "celta-vigo", goals: 18, assists: 7 },
    { name: "Raul de Tomas", playerSlug: "raul-de-tomas", club: "Espanyol", clubSlug: "espanyol", goals: 17, assists: 3 },
    { name: "Vinicius Junior", playerSlug: "vinicius-junior", club: "Real Madrid", clubSlug: "real-madrid", goals: 17, assists: 10 },
    { name: "Juanmi", playerSlug: "juanmi", club: "Real Betis", clubSlug: "real-betis", goals: 14, assists: 3 },
    { name: "Joselu", playerSlug: "joselu", club: "Alaves", clubSlug: "alaves", goals: 13, assists: 2 },
    { name: "Youssef En-Nesyri", playerSlug: "youssef-en-nesyri", club: "Sevilla", clubSlug: "sevilla", goals: 12, assists: 3 },
    { name: "Mikel Oyarzabal", playerSlug: "mikel-oyarzabal", club: "Real Sociedad", clubSlug: "real-sociedad", goals: 11, assists: 5 },
    { name: "Alexander Isak", playerSlug: "alexander-isak", club: "Real Sociedad", clubSlug: "real-sociedad", goals: 10, assists: 2 },
    { name: "Inaki Williams", playerSlug: "inaki-williams", club: "Athletic Bilbao", clubSlug: "athletic-bilbao", goals: 10, assists: 2 },
  ],
  assisters: [
    { name: "Karim Benzema", playerSlug: "karim-benzema", club: "Real Madrid", clubSlug: "real-madrid", assists: 12 },
    { name: "Vinicius Junior", playerSlug: "vinicius-junior", club: "Real Madrid", clubSlug: "real-madrid", assists: 10 },
    { name: "Iago Aspas", playerSlug: "iago-aspas", club: "Celta Vigo", clubSlug: "celta-vigo", assists: 7 },
    { name: "Ousmane Dembele", playerSlug: "ousmane-dembele", club: "Barcelona", clubSlug: "barcelona", assists: 6 },
    { name: "Mikel Oyarzabal", playerSlug: "mikel-oyarzabal", club: "Real Sociedad", clubSlug: "real-sociedad", assists: 5 },
  ],
  cleanSheets: [
    { name: "Thibaut Courtois", playerSlug: "thibaut-courtois", club: "Real Madrid", clubSlug: "real-madrid", cleanSheets: 16 },
    { name: "Yassine Bounou", playerSlug: "yassine-bounou", club: "Sevilla", clubSlug: "sevilla", cleanSheets: 15 },
    { name: "Jan Oblak", playerSlug: "jan-oblak", club: "Atletico Madrid", clubSlug: "atletico-madrid", cleanSheets: 12 },
    { name: "Marc-Andre ter Stegen", playerSlug: "marc-andre-ter-stegen", club: "Barcelona", clubSlug: "barcelona", cleanSheets: 11 },
    { name: "Unai Simon", playerSlug: "unai-simon", club: "Athletic Bilbao", clubSlug: "athletic-bilbao", cleanSheets: 10 },
  ],
  awards: [
    { title: "Pichichi (Top Scorer)", winner: "Karim Benzema", playerSlug: "karim-benzema" },
    { title: "Best Goalkeeper (Zamora)", winner: "Thibaut Courtois", playerSlug: "thibaut-courtois" },
    { title: "Best Player", winner: "Karim Benzema", playerSlug: "karim-benzema" },
    { title: "Best Coach", winner: "Carlo Ancelotti" },
  ],
  relegated: ["Alaves", "Levante", "Granada"],
  promoted: ["Almeria", "Real Valladolid", "Girona"],
  narrative: `Real Madrid's 2021-22 La Liga campaign was defined by the brilliance of one man: Karim Benzema. The French striker delivered arguably the finest individual season in the club's modern history, scoring 27 league goals and providing 12 assists on his way to winning both the Pichichi trophy and the Ballon d'Or.

Carlo Ancelotti, returning for a second spell at the Bernabeu, guided Real Madrid to the title with 86 points. It was a campaign built on experience, tactical intelligence and Benzema's extraordinary finishing. Vinicius Junior also emerged as a truly elite talent, contributing 17 goals and 10 assists as his electric pace and improving end product terrorised defences across Spain.

Barcelona, still rebuilding after Lionel Messi's departure and deep in financial crisis, finished second on 73 points. Xavi Hernandez took charge in November, replacing Ronald Koeman, and gradually steadied the ship. The arrival of Pierre-Emerick Aubameyang in January provided a useful goal threat, while teenage midfielders Pedri and Gavi showed glimpses of a brighter future.

Atletico Madrid, the reigning champions, finished third on 71 points in a campaign that never quite caught fire. Sevilla, marshalled by Julen Lopetegui's organised defence, finished fourth and qualified for the Champions League, conceding just 30 goals all season.

Thibaut Courtois was outstanding in goal for Real Madrid, claiming the Zamora Trophy with 16 clean sheets. His performances continued into the Champions League, where he was named man of the match in the final as Real Madrid beat Liverpool to add European glory to their domestic title.

Real Betis enjoyed a fine season under Manuel Pellegrini, finishing fifth and qualifying for the Europa League. Villarreal reached the Champions League semi-finals under Unai Emery, adding European excitement to their solid domestic campaign.

At the bottom, Alaves finished on just 31 points and were relegated alongside Levante and Granada. Rayo Vallecano's return to La Liga was a success, finishing twelfth in their first season back.

Benzema's season was one for the ages. His combination of goals, creativity and leadership carried Real Madrid through both domestic and European campaigns, and his Ballon d'Or was a fitting reward for a year that cemented his legacy as one of the finest strikers of his generation.`,
  notableMoments: [
    "Karim Benzema scored 27 league goals and won the Ballon d'Or",
    "Vinicius Junior established himself as an elite talent with 17 goals and 10 assists",
    "Real Madrid completed the La Liga and Champions League double under Ancelotti",
    "Barcelona were still rebuilding after Messi's departure, with Xavi taking charge mid-season",
    "Sevilla conceded just 30 league goals, the second-best defensive record in the division",
  ],
  metaTitle: "La Liga 2021-22 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2021-22 La Liga season. Final standings, Benzema's Pichichi-winning campaign, top assists, and a complete season recap.",
};

export default data;
