import type { League } from "../../types";

export const leagues: League[] = [
  {
    name: "Premier League",
    slug: "premier-league",
    country: "England",
    accentColor: "#3d195b",
    seasons: ["2023-24", "2022-23", "2021-22", "2020-21", "2019-20"],
  },
  {
    name: "Championship",
    slug: "championship",
    country: "England",
    accentColor: "#c8102e",
    seasons: ["2023-24", "2022-23", "2021-22"],
  },
  {
    name: "La Liga",
    slug: "la-liga",
    country: "Spain",
    accentColor: "#ee8707",
    seasons: ["2023-24", "2022-23", "2021-22"],
  },
  {
    name: "Bundesliga",
    slug: "bundesliga",
    country: "Germany",
    accentColor: "#d20515",
    seasons: ["2023-24", "2022-23"],
  },
  {
    name: "Serie A",
    slug: "serie-a",
    country: "Italy",
    accentColor: "#024494",
    seasons: ["2023-24", "2022-23"],
  },
  {
    name: "Ligue 1",
    slug: "ligue-1",
    country: "France",
    accentColor: "#091c3e",
    seasons: ["2023-24", "2022-23"],
  },
  {
    name: "Scottish Premiership",
    slug: "scottish-premiership",
    country: "Scotland",
    accentColor: "#1a3668",
    seasons: ["2023-24", "2022-23"],
  },
  {
    name: "MLS",
    slug: "mls",
    country: "United States",
    accentColor: "#013a5e",
    seasons: ["2023", "2022"],
  },
];
