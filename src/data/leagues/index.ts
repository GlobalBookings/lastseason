import type { League } from "../../types";

export const leagues: League[] = [
  {
    name: "Premier League",
    slug: "premier-league",
    country: "England",
    accentColor: "#3d195b",
    seasons: ["2024-25", "2023-24", "2022-23", "2021-22", "2020-21", "2019-20", "2018-19", "2017-18", "2016-17", "2015-16", "2014-15", "2013-14", "2012-13", "2011-12", "2010-11", "2009-10", "2008-09", "2007-08", "2006-07", "2005-06", "2004-05", "2003-04", "2002-03", "2001-02", "2000-01", "1999-00", "1998-99", "1997-98", "1996-97", "1995-96", "1994-95", "1993-94", "1992-93"],
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
