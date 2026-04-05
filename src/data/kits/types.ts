export interface KitRetailer {
  name: string;
  slug: string;
  url: string;
  price?: string;
}

export interface Kit {
  type: "home" | "away" | "third" | "goalkeeper";
  season: string;
  manufacturer: string;
  retailers: KitRetailer[];
}

export interface ClubKits {
  club: string;
  clubSlug: string;
  league: string;
  leagueSlug: string;
  kits: Kit[];
}
