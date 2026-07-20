export interface LeagueSource {
  name: string;
  url: string;
  scope: string;
}

export const leagueSources: Record<string, LeagueSource[]> = {
  "premier-league": [
    { name: "Premier League", url: "https://www.premierleague.com/tables", scope: "Final tables and competition records" },
  ],
  championship: [
    { name: "English Football League", url: "https://www.efl.com/competitions/sky-bet-championship/", scope: "Competition and season records" },
  ],
  "la-liga": [
    { name: "LALIGA", url: "https://www.laliga.com/en-GB/laliga-easports/standing", scope: "Final tables and competition records" },
  ],
  bundesliga: [
    { name: "Bundesliga", url: "https://www.bundesliga.com/en/bundesliga/table", scope: "Final tables and competition records" },
  ],
  "serie-a": [
    { name: "Lega Serie A", url: "https://www.legaseriea.it/en/serie-a/classifica", scope: "Final tables and competition records" },
  ],
  "ligue-1": [
    { name: "Ligue 1", url: "https://ligue1.com/standings", scope: "Final tables and competition records" },
  ],
  "scottish-premiership": [
    { name: "SPFL", url: "https://spfl.co.uk/league/premiership/table", scope: "Final tables and competition records" },
  ],
  mls: [
    { name: "Major League Soccer", url: "https://www.mlssoccer.com/standings/", scope: "Competition records; archive review pending" },
  ],
};

export const siteReviewDate = "20 July 2026";
