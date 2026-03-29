export interface League {
  name: string;
  slug: string;
  country: string;
  accentColor: string;
  seasons: string[];
}

export interface Standing {
  pos: number;
  club: string;
  clubSlug: string;
  p: number;
  w: number;
  d: number;
  l: number;
  gf: number;
  ga: number;
  gd: number;
  pts: number;
  zone?: "cl" | "el" | "ecl" | "relegation" | "promotion";
}

export interface Scorer {
  name: string;
  playerSlug: string;
  club: string;
  clubSlug: string;
  goals: number;
  assists: number;
}

export interface Assister {
  name: string;
  playerSlug: string;
  club: string;
  clubSlug: string;
  assists: number;
}

export interface CleanSheet {
  name: string;
  playerSlug: string;
  club: string;
  clubSlug: string;
  cleanSheets: number;
}

export interface Award {
  title: string;
  winner: string;
  playerSlug?: string;
}

export interface SeasonData {
  league: string;
  leagueSlug: string;
  season: string;
  seasonDisplay: string;
  champion: string;
  championSlug: string;
  topScorer: string;
  topScorerGoals: number;
  totalGoals: number;
  standings: Standing[];
  scorers: Scorer[];
  assisters: Assister[];
  cleanSheets: CleanSheet[];
  awards: Award[];
  relegated: string[];
  promoted: string[];
  narrative: string;
  notableMoments: string[];
  metaTitle: string;
  metaDescription: string;
}

export interface ClubData {
  name: string;
  slug: string;
  seasons: ClubSeason[];
  bestFinish: string;
  topHistoricScorers: HistoricScorer[];
}

export interface ClubSeason {
  season: string;
  league: string;
  leagueSlug: string;
  position: number;
  points: number;
}

export interface HistoricScorer {
  name: string;
  playerSlug: string;
  goals: number;
  years: string;
}

export interface PlayerData {
  name: string;
  slug: string;
  nationality: string;
  position: string;
  seasons: PlayerSeason[];
  careerGoals: number;
  careerAssists: number;
}

export interface PlayerSeason {
  season: string;
  league: string;
  leagueSlug: string;
  club: string;
  clubSlug: string;
  appearances: number;
  goals: number;
  assists: number;
}
