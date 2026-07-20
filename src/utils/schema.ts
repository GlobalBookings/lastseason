import type { SeasonData } from "../types";

export function buildSeasonSchema(data: SeasonData): string {
  const url = `https://lastseason.co.uk/${data.leagueSlug}/${data.season}/`;
  const csvUrl = `https://lastseason.co.uk/data/${data.leagueSlug}/${data.season}.csv`;

  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dataset",
        "@id": `${url}#dataset`,
        name: `${data.league} ${data.seasonDisplay} final table and season statistics`,
        description: data.metaDescription,
        url,
        isAccessibleForFree: true,
        inLanguage: "en-GB",
        temporalCoverage: data.seasonDisplay,
        creator: { "@id": "https://lastseason.co.uk/#organization" },
        variableMeasured: ["Position", "Played", "Wins", "Draws", "Losses", "Goals for", "Goals against", "Goal difference", "Points"],
        distribution: {
          "@type": "DataDownload",
          encodingFormat: "text/csv",
          contentUrl: csvUrl,
        },
      },
      {
        "@type": "Table",
        about: { "@id": `${url}#dataset` },
      },
    ],
  });
}
