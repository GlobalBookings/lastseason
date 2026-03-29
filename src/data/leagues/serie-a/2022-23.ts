import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Serie A",
  leagueSlug: "serie-a",
  season: "2022-23",
  seasonDisplay: "2022-23",
  champion: "Napoli",
  championSlug: "napoli",
  topScorer: "Victor Osimhen",
  topScorerGoals: 26,
  totalGoals: 1030,
  standings: [
    { pos: 1, club: "Napoli", clubSlug: "napoli", p: 38, w: 28, d: 6, l: 4, gf: 82, ga: 30, gd: 52, pts: 90, zone: "cl" },
    { pos: 2, club: "Lazio", clubSlug: "lazio", p: 38, w: 22, d: 8, l: 8, gf: 70, ga: 39, gd: 31, pts: 74, zone: "cl" },
    { pos: 3, club: "Inter Milan", clubSlug: "inter-milan", p: 38, w: 21, d: 9, l: 8, gf: 76, ga: 40, gd: 36, pts: 72, zone: "cl" },
    { pos: 4, club: "AC Milan", clubSlug: "ac-milan", p: 38, w: 21, d: 7, l: 10, gf: 68, ga: 45, gd: 23, pts: 70, zone: "cl" },
    { pos: 5, club: "Atalanta", clubSlug: "atalanta", p: 38, w: 19, d: 7, l: 12, gf: 67, ga: 50, gd: 17, pts: 64, zone: "el" },
    { pos: 6, club: "Roma", clubSlug: "roma", p: 38, w: 18, d: 9, l: 11, gf: 60, ga: 44, gd: 16, pts: 63, zone: "ecl" },
    { pos: 7, club: "Juventus", clubSlug: "juventus", p: 38, w: 18, d: 8, l: 12, gf: 54, ga: 42, gd: 12, pts: 62 },
    { pos: 8, club: "Fiorentina", clubSlug: "fiorentina", p: 38, w: 14, d: 10, l: 14, gf: 54, ga: 50, gd: 4, pts: 52 },
    { pos: 9, club: "Bologna", clubSlug: "bologna", p: 38, w: 14, d: 10, l: 14, gf: 53, ga: 52, gd: 1, pts: 52 },
    { pos: 10, club: "Torino", clubSlug: "torino", p: 38, w: 12, d: 11, l: 15, gf: 47, ga: 51, gd: -4, pts: 47 },
    { pos: 11, club: "Monza", clubSlug: "monza", p: 38, w: 12, d: 10, l: 16, gf: 45, ga: 55, gd: -10, pts: 46 },
    { pos: 12, club: "Udinese", clubSlug: "udinese", p: 38, w: 11, d: 10, l: 17, gf: 49, ga: 54, gd: -5, pts: 43 },
    { pos: 13, club: "Sassuolo", clubSlug: "sassuolo", p: 38, w: 11, d: 10, l: 17, gf: 47, ga: 57, gd: -10, pts: 43 },
    { pos: 14, club: "Empoli", clubSlug: "empoli", p: 38, w: 11, d: 9, l: 18, gf: 41, ga: 56, gd: -15, pts: 42 },
    { pos: 15, club: "Lecce", clubSlug: "lecce", p: 38, w: 10, d: 9, l: 19, gf: 39, ga: 56, gd: -17, pts: 39 },
    { pos: 16, club: "Salernitana", clubSlug: "salernitana", p: 38, w: 9, d: 9, l: 20, gf: 39, ga: 64, gd: -25, pts: 36 },
    { pos: 17, club: "Sampdoria", clubSlug: "sampdoria", p: 38, w: 9, d: 8, l: 21, gf: 34, ga: 60, gd: -26, pts: 35 },
    { pos: 18, club: "Hellas Verona", clubSlug: "hellas-verona", p: 38, w: 8, d: 10, l: 20, gf: 37, ga: 58, gd: -21, pts: 34, zone: "relegation" },
    { pos: 19, club: "Spezia", clubSlug: "spezia", p: 38, w: 7, d: 10, l: 21, gf: 35, ga: 61, gd: -26, pts: 31, zone: "relegation" },
    { pos: 20, club: "Cremonese", clubSlug: "cremonese", p: 38, w: 6, d: 10, l: 22, gf: 33, ga: 66, gd: -33, pts: 28, zone: "relegation" },
  ],
  scorers: [
    { name: "Victor Osimhen", playerSlug: "victor-osimhen", club: "Napoli", clubSlug: "napoli", goals: 26, assists: 4 },
    { name: "Lautaro Martinez", playerSlug: "lautaro-martinez", club: "Inter Milan", clubSlug: "inter-milan", goals: 21, assists: 5 },
    { name: "Ademola Lookman", playerSlug: "ademola-lookman", club: "Atalanta", clubSlug: "atalanta", goals: 13, assists: 5 },
    { name: "Ciro Immobile", playerSlug: "ciro-immobile", club: "Lazio", clubSlug: "lazio", goals: 12, assists: 3 },
    { name: "Khvicha Kvaratskhelia", playerSlug: "khvicha-kvaratskhelia", club: "Napoli", clubSlug: "napoli", goals: 12, assists: 10 },
    { name: "Dusan Vlahovic", playerSlug: "dusan-vlahovic", club: "Juventus", clubSlug: "juventus", goals: 12, assists: 3 },
    { name: "Rafael Leao", playerSlug: "rafael-leao", club: "AC Milan", clubSlug: "ac-milan", goals: 11, assists: 7 },
    { name: "Olivier Giroud", playerSlug: "olivier-giroud", club: "AC Milan", clubSlug: "ac-milan", goals: 11, assists: 3 },
    { name: "Giacomo Raspadori", playerSlug: "giacomo-raspadori", club: "Napoli", clubSlug: "napoli", goals: 8, assists: 4 },
    { name: "Luis Muriel", playerSlug: "luis-muriel", club: "Atalanta", clubSlug: "atalanta", goals: 8, assists: 3 },
  ],
  assisters: [
    { name: "Khvicha Kvaratskhelia", playerSlug: "khvicha-kvaratskhelia", club: "Napoli", clubSlug: "napoli", assists: 10 },
    { name: "Rafael Leao", playerSlug: "rafael-leao", club: "AC Milan", clubSlug: "ac-milan", assists: 7 },
    { name: "Luis Alberto", playerSlug: "luis-alberto", club: "Lazio", clubSlug: "lazio", assists: 7 },
    { name: "Lautaro Martinez", playerSlug: "lautaro-martinez", club: "Inter Milan", clubSlug: "inter-milan", assists: 5 },
    { name: "Ademola Lookman", playerSlug: "ademola-lookman", club: "Atalanta", clubSlug: "atalanta", assists: 5 },
  ],
  cleanSheets: [
    { name: "Alex Meret", playerSlug: "alex-meret", club: "Napoli", clubSlug: "napoli", cleanSheets: 16 },
    { name: "Andre Onana", playerSlug: "andre-onana", club: "Inter Milan", clubSlug: "inter-milan", cleanSheets: 12 },
    { name: "Mike Maignan", playerSlug: "mike-maignan", club: "AC Milan", clubSlug: "ac-milan", cleanSheets: 12 },
    { name: "Ivan Provedel", playerSlug: "ivan-provedel", club: "Lazio", clubSlug: "lazio", cleanSheets: 11 },
    { name: "Wojciech Szczesny", playerSlug: "wojciech-szczesny", club: "Juventus", clubSlug: "juventus", cleanSheets: 10 },
  ],
  awards: [
    { title: "Capocannoniere", winner: "Victor Osimhen", playerSlug: "victor-osimhen" },
    { title: "Player of the Season", winner: "Victor Osimhen", playerSlug: "victor-osimhen" },
    { title: "Best Coach", winner: "Luciano Spalletti" },
    { title: "Best Goalkeeper", winner: "Alex Meret", playerSlug: "alex-meret" },
  ],
  relegated: ["Cremonese", "Spezia", "Hellas Verona"],
  promoted: ["Frosinone", "Genoa", "Cagliari"],
  narrative: `Napoli's 2022-23 season was nothing short of a fairytale. The club secured their first Scudetto since the Diego Maradona era of 1990, sending the city into rapturous celebrations that lasted for days. Under the masterful guidance of Luciano Spalletti, Napoli were utterly dominant, finishing on 90 points with a 16-point cushion over second-placed Lazio.

Victor Osimhen was the talisman, plundering 26 league goals to claim the Capocannoniere and the league MVP award. The Nigerian striker's power, pace and clinical finishing terrorised every defence in Serie A. Alongside him, Khvicha Kvaratskhelia was a revelation in his debut season, contributing 12 goals and a league-leading 10 assists. The Georgian winger's dazzling dribbling and creativity made him an instant fan favourite and one of the signings of the season across European football.

Spalletti's tactical masterclass saw Napoli play some of the most exhilarating football the league had witnessed in years. They went unbeaten at home throughout the entire campaign, and the title was effectively wrapped up with weeks to spare. The Stadio Diego Armando Maradona became a fortress, and on the night the Scudetto was mathematically secured, Naples erupted in scenes reminiscent of the Maradona celebrations over three decades earlier.

Lazio enjoyed an excellent campaign under Maurizio Sarri, finishing second on 74 points with Ciro Immobile leading the line. Inter Milan and AC Milan occupied third and fourth respectively, ensuring both Milan clubs qualified for the Champions League. Atalanta continued their impressive run under Gian Piero Gasperini, securing Europa League football.

At the bottom, Cremonese, Spezia and Hellas Verona were relegated, with Cremonese returning to Serie B after just one season in the top flight.`,
  notableMoments: [
    "Napoli won their first Scudetto since Diego Maradona's era in 1990",
    "Victor Osimhen scored 26 goals to win the Capocannoniere",
    "Khvicha Kvaratskhelia won Serie A Best Young Player in his debut season",
    "Napoli went unbeaten at home throughout the entire season",
    "The title was won with several weeks to spare, such was Napoli's dominance",
  ],
  metaTitle: "Serie A 2022-23 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2022-23 Serie A season. Napoli's historic Scudetto, Osimhen's Capocannoniere and full season recap.",
};

export default data;
