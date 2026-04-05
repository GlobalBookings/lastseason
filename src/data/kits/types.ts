export interface KitRetailer {
  name: string;
  url: string;
  price?: string;
}

export interface HistoricKit {
  club: string;
  clubSlug: string;
  season: string;
  type: "home" | "away" | "third" | "goalkeeper";
  manufacturer: string;
  sponsor?: string;
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor?: string;
  description?: string;
  retailers: KitRetailer[];
}

export interface ClubKitArchive {
  club: string;
  clubSlug: string;
  league: string;
  leagueSlug: string;
  founded?: number;
  kits: HistoricKit[];
}
