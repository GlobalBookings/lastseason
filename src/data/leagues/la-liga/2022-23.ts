import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "La Liga",
  leagueSlug: "la-liga",
  season: "2022-23",
  seasonDisplay: "2022-23",
  champion: "Barcelona",
  championSlug: "barcelona",
  topScorer: "Robert Lewandowski",
  topScorerGoals: 23,
  totalGoals: 1016,
  standings: [
    { pos: 1, club: "Barcelona", clubSlug: "barcelona", p: 38, w: 28, d: 4, l: 6, gf: 70, ga: 20, gd: 50, pts: 88, zone: "cl" },
    { pos: 2, club: "Real Madrid", clubSlug: "real-madrid", p: 38, w: 24, d: 6, l: 8, gf: 75, ga: 36, gd: 39, pts: 78, zone: "cl" },
    { pos: 3, club: "Atletico Madrid", clubSlug: "atletico-madrid", p: 38, w: 23, d: 8, l: 7, gf: 70, ga: 33, gd: 37, pts: 77, zone: "cl" },
    { pos: 4, club: "Real Sociedad", clubSlug: "real-sociedad", p: 38, w: 21, d: 8, l: 9, gf: 51, ga: 35, gd: 16, pts: 71, zone: "cl" },
    { pos: 5, club: "Villarreal", clubSlug: "villarreal", p: 38, w: 19, d: 7, l: 12, gf: 59, ga: 40, gd: 19, pts: 64, zone: "el" },
    { pos: 6, club: "Real Betis", clubSlug: "real-betis", p: 38, w: 17, d: 9, l: 12, gf: 47, ga: 37, gd: 10, pts: 60, zone: "ecl" },
    { pos: 7, club: "Osasuna", clubSlug: "osasuna", p: 38, w: 14, d: 11, l: 13, gf: 42, ga: 44, gd: -2, pts: 53 },
    { pos: 8, club: "Athletic Bilbao", clubSlug: "athletic-bilbao", p: 38, w: 14, d: 9, l: 15, gf: 47, ga: 43, gd: 4, pts: 51 },
    { pos: 9, club: "Mallorca", clubSlug: "mallorca", p: 38, w: 14, d: 8, l: 16, gf: 34, ga: 42, gd: -8, pts: 50 },
    { pos: 10, club: "Girona", clubSlug: "girona", p: 38, w: 13, d: 10, l: 15, gf: 55, ga: 54, gd: 1, pts: 49 },
    { pos: 11, club: "Rayo Vallecano", clubSlug: "rayo-vallecano", p: 38, w: 13, d: 8, l: 17, gf: 38, ga: 50, gd: -12, pts: 47 },
    { pos: 12, club: "Sevilla", clubSlug: "sevilla", p: 38, w: 12, d: 11, l: 15, gf: 45, ga: 51, gd: -6, pts: 47 },
    { pos: 13, club: "Celta Vigo", clubSlug: "celta-vigo", p: 38, w: 11, d: 10, l: 17, gf: 42, ga: 52, gd: -10, pts: 43 },
    { pos: 14, club: "Cadiz", clubSlug: "cadiz", p: 38, w: 11, d: 9, l: 18, gf: 37, ga: 53, gd: -16, pts: 42 },
    { pos: 15, club: "Getafe", clubSlug: "getafe", p: 38, w: 11, d: 9, l: 18, gf: 40, ga: 50, gd: -10, pts: 42 },
    { pos: 16, club: "Valencia", clubSlug: "valencia", p: 38, w: 10, d: 11, l: 17, gf: 40, ga: 50, gd: -10, pts: 41 },
    { pos: 17, club: "Almeria", clubSlug: "almeria", p: 38, w: 10, d: 10, l: 18, gf: 46, ga: 62, gd: -16, pts: 40 },
    { pos: 18, club: "Real Valladolid", clubSlug: "real-valladolid", p: 38, w: 6, d: 14, l: 18, gf: 29, ga: 52, gd: -23, pts: 32, zone: "relegation" },
    { pos: 19, club: "Espanyol", clubSlug: "espanyol", p: 38, w: 6, d: 13, l: 19, gf: 32, ga: 58, gd: -26, pts: 31, zone: "relegation" },
    { pos: 20, club: "Elche", clubSlug: "elche", p: 38, w: 4, d: 13, l: 21, gf: 26, ga: 63, gd: -37, pts: 25, zone: "relegation" },
  ],
  scorers: [
    { name: "Robert Lewandowski", playerSlug: "robert-lewandowski", club: "Barcelona", clubSlug: "barcelona", goals: 23, assists: 6 },
    { name: "Karim Benzema", playerSlug: "karim-benzema", club: "Real Madrid", clubSlug: "real-madrid", goals: 19, assists: 4 },
    { name: "Antoine Griezmann", playerSlug: "antoine-griezmann", club: "Atletico Madrid", clubSlug: "atletico-madrid", goals: 15, assists: 7 },
    { name: "Joselu", playerSlug: "joselu", club: "Espanyol", clubSlug: "espanyol", goals: 14, assists: 2 },
    { name: "Borja Iglesias", playerSlug: "borja-iglesias", club: "Real Betis", clubSlug: "real-betis", goals: 13, assists: 3 },
    { name: "Iago Aspas", playerSlug: "iago-aspas", club: "Celta Vigo", clubSlug: "celta-vigo", goals: 13, assists: 5 },
    { name: "Alvaro Morata", playerSlug: "alvaro-morata", club: "Atletico Madrid", clubSlug: "atletico-madrid", goals: 12, assists: 4 },
    { name: "Vinicius Junior", playerSlug: "vinicius-junior", club: "Real Madrid", clubSlug: "real-madrid", goals: 11, assists: 5 },
    { name: "Raphinha", playerSlug: "raphinha", club: "Barcelona", clubSlug: "barcelona", goals: 10, assists: 6 },
    { name: "Mikel Oyarzabal", playerSlug: "mikel-oyarzabal", club: "Real Sociedad", clubSlug: "real-sociedad", goals: 10, assists: 3 },
  ],
  assisters: [
    { name: "Antoine Griezmann", playerSlug: "antoine-griezmann", club: "Atletico Madrid", clubSlug: "atletico-madrid", assists: 7 },
    { name: "Robert Lewandowski", playerSlug: "robert-lewandowski", club: "Barcelona", clubSlug: "barcelona", assists: 6 },
    { name: "Raphinha", playerSlug: "raphinha", club: "Barcelona", clubSlug: "barcelona", assists: 6 },
    { name: "Vinicius Junior", playerSlug: "vinicius-junior", club: "Real Madrid", clubSlug: "real-madrid", assists: 5 },
    { name: "Iago Aspas", playerSlug: "iago-aspas", club: "Celta Vigo", clubSlug: "celta-vigo", assists: 5 },
  ],
  cleanSheets: [
    { name: "Marc-Andre ter Stegen", playerSlug: "marc-andre-ter-stegen", club: "Barcelona", clubSlug: "barcelona", cleanSheets: 18 },
    { name: "Jan Oblak", playerSlug: "jan-oblak", club: "Atletico Madrid", clubSlug: "atletico-madrid", cleanSheets: 14 },
    { name: "Thibaut Courtois", playerSlug: "thibaut-courtois", club: "Real Madrid", clubSlug: "real-madrid", cleanSheets: 13 },
    { name: "Alex Remiro", playerSlug: "alex-remiro", club: "Real Sociedad", clubSlug: "real-sociedad", cleanSheets: 12 },
    { name: "Unai Simon", playerSlug: "unai-simon", club: "Athletic Bilbao", clubSlug: "athletic-bilbao", cleanSheets: 10 },
  ],
  awards: [
    { title: "Pichichi (Top Scorer)", winner: "Robert Lewandowski", playerSlug: "robert-lewandowski" },
    { title: "Best Goalkeeper (Zamora)", winner: "Marc-Andre ter Stegen", playerSlug: "marc-andre-ter-stegen" },
    { title: "Best Coach", winner: "Xavi Hernandez" },
    { title: "Best Player", winner: "Robert Lewandowski", playerSlug: "robert-lewandowski" },
  ],
  relegated: ["Elche", "Espanyol", "Real Valladolid"],
  promoted: ["Las Palmas", "Granada", "Alaves"],
  narrative: `Barcelona stormed to the 2022-23 La Liga title under Xavi Hernandez, finishing on 88 points and effectively wrapping up the championship with weeks to spare. It was a statement of intent from a club that had endured turbulent years of financial difficulty and on-pitch decline.

The arrival of Robert Lewandowski from Bayern Munich proved transformative. The Polish striker scored 23 league goals to claim the Pichichi trophy and brought a clinical edge that Barcelona had lacked since the departure of Luis Suarez. His partnership with Ousmane Dembele, Raphinha and the emerging talent of Pedri gave Barcelona an attacking potency that no other side could match consistently.

Real Madrid finished second on 78 points in what proved to be Karim Benzema's final season at the Bernabeu. The Frenchman, fresh from his Ballon d'Or triumph, scored 19 league goals but the team lacked the consistency to mount a serious title challenge. Benzema's emotional farewell at the end of the season marked the end of an era for Los Blancos.

Atletico Madrid enjoyed a solid campaign under Diego Simeone, finishing third on 77 points. Antoine Griezmann was the standout performer with 15 goals and 7 assists, his creative spark complementing the goals of Alvaro Morata and Memphis Depay. Real Sociedad secured a remarkable fourth-place finish and Champions League qualification, continuing their emergence as a genuine force in Spanish football.

Marc-Andre ter Stegen was exceptional between the posts for Barcelona, keeping 18 clean sheets and conceding just 20 goals all season. The German's form was a cornerstone of Barcelona's defensive solidity and he was deservedly named the Zamora Trophy winner as La Liga's best goalkeeper.

At the bottom of the table, Elche endured a miserable campaign, collecting just 25 points and finishing rock bottom. Espanyol and Real Valladolid joined them in relegation, with both clubs struggling to find consistency throughout the season.

Sevilla endured a disappointing domestic campaign, finishing twelfth, though they did manage to win the Europa League for a record-extending seventh time, beating Roma in the final in Budapest.

Barcelona's title triumph was a reminder of the club's enduring quality and Xavi's growing reputation as a coach. With a young core built around Pedri, Gavi and emerging talents, the future looked bright at Camp Nou.`,
  notableMoments: [
    "Barcelona clinched the title with several weeks to spare under Xavi Hernandez",
    "Robert Lewandowski won the Pichichi with 23 goals in his debut La Liga season",
    "Karim Benzema played his final season at Real Madrid before departing for Saudi Arabia",
    "Sevilla won the Europa League for a record-extending seventh time",
    "Real Sociedad qualified for the Champions League for the first time since 2013",
  ],
  metaTitle: "La Liga 2022-23 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2022-23 La Liga season. Final standings, top goalscorers, assists, Pichichi winner and a complete season recap.",
};

export default data;
