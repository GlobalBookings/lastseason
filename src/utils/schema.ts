import type { SeasonData } from "../types";

export function buildSeasonSchema(data: SeasonData): string {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: `${data.league} ${data.seasonDisplay} Season`,
    description: data.metaDescription,
    url: `https://lastseason.co.uk/${data.leagueSlug}/${data.season}/`,
    location: {
      "@type": "Country",
      name: data.leagueSlug === "premier-league" || data.leagueSlug === "championship"
        ? "England"
        : data.leagueSlug === "la-liga"
          ? "Spain"
          : data.leagueSlug === "bundesliga"
            ? "Germany"
            : data.leagueSlug === "serie-a"
              ? "Italy"
              : data.leagueSlug === "ligue-1"
                ? "France"
                : data.leagueSlug === "scottish-premiership"
                  ? "Scotland"
                  : "United States",
    },
    competitor: data.standings.slice(0, 4).map((s) => ({
      "@type": "SportsTeam",
      name: s.club,
    })),
  };

  const tableSchema = {
    "@context": "https://schema.org",
    "@type": "Table",
    about: `${data.league} ${data.seasonDisplay} Final Standings`,
  };

  return JSON.stringify([schema, tableSchema]);
}
