import type { HistoricKit, ClubKitArchive } from "./types";

interface KitEra {
  from: number;
  to: number;
  manufacturer: string;
  sponsor?: string;
}

interface ClubKitDef {
  club: string;
  clubSlug: string;
  league: string;
  leagueSlug: string;
  founded?: number;
  homeColors: [string, string, string?];
  awayColors: [string, string, string?];
  eras: KitEra[];
}

function seasonLabel(year: number): string {
  const next = (year + 1) % 100;
  return `${year}-${next.toString().padStart(2, "0")}`;
}

function ebaySearchUrl(club: string, season: string, type: string): string {
  const q = encodeURIComponent(`${club} ${season} ${type} shirt football`);
  return `https://www.ebay.co.uk/sch/i.html?_nkw=${q}&_sacat=0&LH_TitleDesc=0&rt=nc&LH_All=1`;
}

function generateClubKits(def: ClubKitDef): ClubKitArchive {
  const kits: HistoricKit[] = [];

  for (const era of def.eras) {
    for (let year = era.from; year <= era.to; year++) {
      const season = seasonLabel(year);
      const ebayHome = ebaySearchUrl(def.club, season, "home");
      const ebayAway = ebaySearchUrl(def.club, season, "away");

      kits.push({
        club: def.club,
        clubSlug: def.clubSlug,
        season,
        type: "home",
        manufacturer: era.manufacturer,
        sponsor: era.sponsor,
        primaryColor: def.homeColors[0],
        secondaryColor: def.homeColors[1],
        tertiaryColor: def.homeColors[2],
        retailers: [
          { name: "eBay", url: ebayHome, price: "Varies" },
        ],
      });

      kits.push({
        club: def.club,
        clubSlug: def.clubSlug,
        season,
        type: "away",
        manufacturer: era.manufacturer,
        sponsor: era.sponsor,
        primaryColor: def.awayColors[0],
        secondaryColor: def.awayColors[1],
        tertiaryColor: def.awayColors[2],
        retailers: [
          { name: "eBay", url: ebayAway, price: "Varies" },
        ],
      });
    }
  }

  kits.sort((a, b) => b.season.localeCompare(a.season));

  return {
    club: def.club,
    clubSlug: def.clubSlug,
    league: def.league,
    leagueSlug: def.leagueSlug,
    founded: def.founded,
    kits,
  };
}

// ============================================
// CLUB DEFINITIONS
// ============================================

const PL = "Premier League";
const PLS = "premier-league";
const CH = "Championship";
const CHS = "championship";
const LL = "La Liga";
const LLS = "la-liga";
const BL = "Bundesliga";
const BLS = "bundesliga";
const SA = "Serie A";
const SAS = "serie-a";
const L1 = "Ligue 1";
const L1S = "ligue-1";
const SP = "Scottish Premiership";
const SPS = "scottish-premiership";
const MLS_N = "MLS";
const MLS_S = "mls";

const clubDefs: ClubKitDef[] = [
  // ---- PREMIER LEAGUE ----
  {
    club: "Arsenal", clubSlug: "arsenal", league: PL, leagueSlug: PLS, founded: 1886,
    homeColors: ["#EF0107", "#FFFFFF", "#002A5C"],
    awayColors: ["#FFD700", "#002A5C"],
    eras: [
      { from: 1986, to: 1993, manufacturer: "Adidas", sponsor: "JVC" },
      { from: 1994, to: 1998, manufacturer: "Nike", sponsor: "JVC" },
      { from: 1999, to: 2001, manufacturer: "Nike", sponsor: "Dreamcast" },
      { from: 2002, to: 2005, manufacturer: "Nike", sponsor: "O2" },
      { from: 2006, to: 2013, manufacturer: "Nike", sponsor: "Emirates" },
      { from: 2014, to: 2018, manufacturer: "Puma", sponsor: "Emirates" },
      { from: 2019, to: 2024, manufacturer: "Adidas", sponsor: "Emirates" },
    ],
  },
  {
    club: "Manchester City", clubSlug: "manchester-city", league: PL, leagueSlug: PLS, founded: 1880,
    homeColors: ["#6CABDD", "#FFFFFF"],
    awayColors: ["#1C2C5B", "#6CABDD"],
    eras: [
      { from: 1987, to: 1996, manufacturer: "Umbro" },
      { from: 1997, to: 2002, manufacturer: "Kappa", sponsor: "Eidos" },
      { from: 2003, to: 2006, manufacturer: "Reebok", sponsor: "First Advice" },
      { from: 2007, to: 2008, manufacturer: "Le Coq Sportif", sponsor: "Thomas Cook" },
      { from: 2009, to: 2012, manufacturer: "Umbro", sponsor: "Etihad Airways" },
      { from: 2013, to: 2018, manufacturer: "Nike", sponsor: "Etihad Airways" },
      { from: 2019, to: 2024, manufacturer: "Puma", sponsor: "Etihad Airways" },
    ],
  },
  {
    club: "Liverpool", clubSlug: "liverpool", league: PL, leagueSlug: PLS, founded: 1892,
    homeColors: ["#C8102E", "#FFFFFF"],
    awayColors: ["#FFFFFF", "#C8102E", "#1A1A1A"],
    eras: [
      { from: 1985, to: 1995, manufacturer: "Adidas", sponsor: "Crown Paints" },
      { from: 1996, to: 2005, manufacturer: "Reebok", sponsor: "Carlsberg" },
      { from: 2006, to: 2009, manufacturer: "Adidas", sponsor: "Carlsberg" },
      { from: 2010, to: 2011, manufacturer: "Adidas", sponsor: "Standard Chartered" },
      { from: 2012, to: 2014, manufacturer: "Warrior", sponsor: "Standard Chartered" },
      { from: 2015, to: 2019, manufacturer: "New Balance", sponsor: "Standard Chartered" },
      { from: 2020, to: 2024, manufacturer: "Nike", sponsor: "Standard Chartered" },
    ],
  },
  {
    club: "Chelsea", clubSlug: "chelsea", league: PL, leagueSlug: PLS, founded: 1905,
    homeColors: ["#034694", "#FFFFFF"],
    awayColors: ["#FFFFFF", "#034694"],
    eras: [
      { from: 1986, to: 1992, manufacturer: "Umbro", sponsor: "Commodore" },
      { from: 1993, to: 1994, manufacturer: "Umbro", sponsor: "Amiga" },
      { from: 1995, to: 2000, manufacturer: "Umbro", sponsor: "Autoglass" },
      { from: 2001, to: 2005, manufacturer: "Umbro", sponsor: "Emirates" },
      { from: 2006, to: 2016, manufacturer: "Adidas", sponsor: "Samsung" },
      { from: 2017, to: 2024, manufacturer: "Nike", sponsor: "Three" },
    ],
  },
  {
    club: "Manchester United", clubSlug: "manchester-united", league: PL, leagueSlug: PLS, founded: 1878,
    homeColors: ["#DA291C", "#FFFFFF", "#000000"],
    awayColors: ["#FFFFFF", "#000000", "#DA291C"],
    eras: [
      { from: 1986, to: 1991, manufacturer: "Adidas", sponsor: "Sharp" },
      { from: 1992, to: 1999, manufacturer: "Umbro", sponsor: "Sharp" },
      { from: 2000, to: 2001, manufacturer: "Umbro", sponsor: "Vodafone" },
      { from: 2002, to: 2014, manufacturer: "Nike", sponsor: "AIG" },
      { from: 2015, to: 2024, manufacturer: "Adidas", sponsor: "TeamViewer" },
    ],
  },
  {
    club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", league: PL, leagueSlug: PLS, founded: 1882,
    homeColors: ["#FFFFFF", "#132257"],
    awayColors: ["#132257", "#FFFFFF"],
    eras: [
      { from: 1986, to: 1990, manufacturer: "Hummel", sponsor: "Holsten" },
      { from: 1991, to: 1998, manufacturer: "Umbro", sponsor: "Holsten" },
      { from: 1999, to: 2001, manufacturer: "Adidas", sponsor: "Holsten" },
      { from: 2002, to: 2005, manufacturer: "Kappa", sponsor: "Thomson" },
      { from: 2006, to: 2011, manufacturer: "Puma", sponsor: "Mansion" },
      { from: 2012, to: 2016, manufacturer: "Under Armour", sponsor: "AIA" },
      { from: 2017, to: 2024, manufacturer: "Nike", sponsor: "AIA" },
    ],
  },
  {
    club: "Aston Villa", clubSlug: "aston-villa", league: PL, leagueSlug: PLS, founded: 1874,
    homeColors: ["#670E36", "#7BB3E0"],
    awayColors: ["#000000", "#7BB3E0"],
    eras: [
      { from: 1993, to: 1997, manufacturer: "Asics", sponsor: "AST" },
      { from: 1998, to: 2003, manufacturer: "Diadora", sponsor: "Rover" },
      { from: 2004, to: 2006, manufacturer: "Hummel", sponsor: "DWS" },
      { from: 2007, to: 2013, manufacturer: "Nike", sponsor: "Acorns" },
      { from: 2014, to: 2015, manufacturer: "Macron", sponsor: "Dafabet" },
      { from: 2016, to: 2019, manufacturer: "Luke / Kappa", sponsor: "32Red" },
      { from: 2020, to: 2024, manufacturer: "Kappa / Adidas", sponsor: "Cazoo" },
    ],
  },
  {
    club: "Newcastle United", clubSlug: "newcastle-united", league: PL, leagueSlug: PLS, founded: 1892,
    homeColors: ["#241F20", "#FFFFFF"],
    awayColors: ["#FFFFFF", "#241F20"],
    eras: [
      { from: 1990, to: 1994, manufacturer: "Asics", sponsor: "Newcastle Breweries" },
      { from: 1995, to: 2003, manufacturer: "Adidas", sponsor: "Newcastle Brown Ale" },
      { from: 2004, to: 2009, manufacturer: "Adidas", sponsor: "Northern Rock" },
      { from: 2010, to: 2016, manufacturer: "Puma", sponsor: "Wonga" },
      { from: 2017, to: 2020, manufacturer: "Puma", sponsor: "Fun88" },
      { from: 2021, to: 2024, manufacturer: "Castore / Adidas", sponsor: "Sela" },
    ],
  },
  {
    club: "West Ham United", clubSlug: "west-ham-united", league: PL, leagueSlug: PLS, founded: 1895,
    homeColors: ["#7A263A", "#1BB1E7"],
    awayColors: ["#FFFFFF", "#7A263A"],
    eras: [
      { from: 1993, to: 2002, manufacturer: "Pony / Fila", sponsor: "Dagenham Motors" },
      { from: 2003, to: 2006, manufacturer: "Reebok", sponsor: "Jobserve" },
      { from: 2007, to: 2012, manufacturer: "Umbro", sponsor: "SBOBET" },
      { from: 2013, to: 2024, manufacturer: "Umbro", sponsor: "Betway" },
    ],
  },
  {
    club: "Everton", clubSlug: "everton", league: PL, leagueSlug: PLS, founded: 1878,
    homeColors: ["#003399", "#FFFFFF"],
    awayColors: ["#FFFFFF", "#003399"],
    eras: [
      { from: 1986, to: 1996, manufacturer: "Umbro", sponsor: "NEC" },
      { from: 1997, to: 1999, manufacturer: "Umbro", sponsor: "One2One" },
      { from: 2000, to: 2007, manufacturer: "Puma", sponsor: "Keijan" },
      { from: 2008, to: 2011, manufacturer: "Le Coq Sportif", sponsor: "Chang" },
      { from: 2012, to: 2019, manufacturer: "Umbro", sponsor: "Chang" },
      { from: 2020, to: 2024, manufacturer: "Hummel", sponsor: "Stake.com" },
    ],
  },
  // ---- LA LIGA ----
  {
    club: "Real Madrid", clubSlug: "real-madrid", league: LL, leagueSlug: LLS, founded: 1902,
    homeColors: ["#FFFFFF", "#000000"],
    awayColors: ["#000000", "#FFFFFF"],
    eras: [
      { from: 1990, to: 1997, manufacturer: "Kelme", sponsor: "Teka" },
      { from: 1998, to: 2006, manufacturer: "Adidas", sponsor: "Siemens" },
      { from: 2007, to: 2013, manufacturer: "Adidas", sponsor: "bwin" },
      { from: 2014, to: 2024, manufacturer: "Adidas", sponsor: "Emirates" },
    ],
  },
  {
    club: "Barcelona", clubSlug: "barcelona", league: LL, leagueSlug: LLS, founded: 1899,
    homeColors: ["#A50044", "#004D98"],
    awayColors: ["#EDBB00", "#A50044"],
    eras: [
      { from: 1992, to: 1997, manufacturer: "Kappa" },
      { from: 1998, to: 2024, manufacturer: "Nike", sponsor: "Rakuten" },
    ],
  },
  {
    club: "Atletico Madrid", clubSlug: "atletico-madrid", league: LL, leagueSlug: LLS, founded: 1903,
    homeColors: ["#CE1126", "#FFFFFF"],
    awayColors: ["#000000", "#CE1126"],
    eras: [
      { from: 1997, to: 2000, manufacturer: "Reebok" },
      { from: 2001, to: 2013, manufacturer: "Nike", sponsor: "Columbia" },
      { from: 2014, to: 2024, manufacturer: "Nike", sponsor: "Hyundai" },
    ],
  },
  // ---- BUNDESLIGA ----
  {
    club: "Bayern Munich", clubSlug: "bayern-munich", league: BL, leagueSlug: BLS, founded: 1900,
    homeColors: ["#DC052D", "#FFFFFF"],
    awayColors: ["#FFFFFF", "#DC052D"],
    eras: [
      { from: 1989, to: 2001, manufacturer: "Adidas", sponsor: "Opel" },
      { from: 2002, to: 2024, manufacturer: "Adidas", sponsor: "T-Mobile" },
    ],
  },
  {
    club: "Borussia Dortmund", clubSlug: "borussia-dortmund", league: BL, leagueSlug: BLS, founded: 1909,
    homeColors: ["#FDE100", "#000000"],
    awayColors: ["#000000", "#FDE100"],
    eras: [
      { from: 1991, to: 1995, manufacturer: "Nike" },
      { from: 1996, to: 2003, manufacturer: "Nike", sponsor: "S.Oliver" },
      { from: 2004, to: 2012, manufacturer: "Kappa", sponsor: "Evonik" },
      { from: 2013, to: 2024, manufacturer: "Puma", sponsor: "Evonik" },
    ],
  },
  {
    club: "Bayer Leverkusen", clubSlug: "bayer-leverkusen", league: BL, leagueSlug: BLS, founded: 1904,
    homeColors: ["#E32221", "#000000"],
    awayColors: ["#FFFFFF", "#E32221"],
    eras: [
      { from: 1996, to: 2002, manufacturer: "Adidas" },
      { from: 2003, to: 2024, manufacturer: "Adidas / Jako / Castore", sponsor: "Bayer" },
    ],
  },
  // ---- SERIE A ----
  {
    club: "Inter Milan", clubSlug: "inter-milan", league: SA, leagueSlug: SAS, founded: 1908,
    homeColors: ["#0068A8", "#000000"],
    awayColors: ["#FFFFFF", "#0068A8"],
    eras: [
      { from: 1995, to: 1997, manufacturer: "Umbro", sponsor: "Pirelli" },
      { from: 1998, to: 2024, manufacturer: "Nike", sponsor: "Pirelli" },
    ],
  },
  {
    club: "AC Milan", clubSlug: "ac-milan", league: SA, leagueSlug: SAS, founded: 1899,
    homeColors: ["#FB090B", "#000000"],
    awayColors: ["#FFFFFF", "#000000"],
    eras: [
      { from: 1994, to: 1997, manufacturer: "Lotto", sponsor: "Opel" },
      { from: 1998, to: 2017, manufacturer: "Adidas", sponsor: "Emirates" },
      { from: 2018, to: 2024, manufacturer: "Puma", sponsor: "Emirates" },
    ],
  },
  {
    club: "Juventus", clubSlug: "juventus", league: SA, leagueSlug: SAS, founded: 1897,
    homeColors: ["#000000", "#FFFFFF"],
    awayColors: ["#FFFFFF", "#000000"],
    eras: [
      { from: 1995, to: 1999, manufacturer: "Kappa", sponsor: "Sony" },
      { from: 2000, to: 2002, manufacturer: "Lotto", sponsor: "Libero" },
      { from: 2003, to: 2014, manufacturer: "Nike", sponsor: "BetClic" },
      { from: 2015, to: 2024, manufacturer: "Adidas", sponsor: "Jeep" },
    ],
  },
  {
    club: "Napoli", clubSlug: "napoli", league: SA, leagueSlug: SAS, founded: 1926,
    homeColors: ["#12A0D7", "#FFFFFF"],
    awayColors: ["#FFFFFF", "#12A0D7"],
    eras: [
      { from: 1997, to: 2003, manufacturer: "Diadora" },
      { from: 2004, to: 2008, manufacturer: "Kappa" },
      { from: 2009, to: 2015, manufacturer: "Macron", sponsor: "MSC" },
      { from: 2016, to: 2020, manufacturer: "Kappa", sponsor: "Lete" },
      { from: 2021, to: 2024, manufacturer: "EA7 / Armani", sponsor: "MSC" },
    ],
  },
  // ---- LIGUE 1 ----
  {
    club: "PSG", clubSlug: "psg", league: L1, leagueSlug: L1S, founded: 1970,
    homeColors: ["#004170", "#CE1126"],
    awayColors: ["#FFFFFF", "#004170"],
    eras: [
      { from: 1992, to: 2007, manufacturer: "Nike" },
      { from: 2008, to: 2024, manufacturer: "Nike", sponsor: "Emirates" },
    ],
  },
  {
    club: "Monaco", clubSlug: "monaco", league: L1, leagueSlug: L1S, founded: 1919,
    homeColors: ["#E2001A", "#FFFFFF"],
    awayColors: ["#FFFFFF", "#E2001A"],
    eras: [
      { from: 1999, to: 2005, manufacturer: "Kappa" },
      { from: 2006, to: 2024, manufacturer: "Nike / Kappa", sponsor: "Fedcom" },
    ],
  },
  {
    club: "Marseille", clubSlug: "marseille", league: L1, leagueSlug: L1S, founded: 1899,
    homeColors: ["#FFFFFF", "#2FAEE0"],
    awayColors: ["#2FAEE0", "#000000"],
    eras: [
      { from: 1997, to: 2006, manufacturer: "Adidas" },
      { from: 2007, to: 2017, manufacturer: "Adidas", sponsor: "Betclic" },
      { from: 2018, to: 2024, manufacturer: "Puma", sponsor: "CMA CGM" },
    ],
  },
  // ---- SCOTTISH PREMIERSHIP ----
  {
    club: "Celtic", clubSlug: "celtic", league: SP, leagueSlug: SPS, founded: 1887,
    homeColors: ["#009E47", "#FFFFFF"],
    awayColors: ["#000000", "#FFD700"],
    eras: [
      { from: 1991, to: 1997, manufacturer: "Umbro", sponsor: "CR Smith" },
      { from: 1998, to: 2004, manufacturer: "Umbro", sponsor: "NTL" },
      { from: 2005, to: 2014, manufacturer: "Nike", sponsor: "Carling" },
      { from: 2015, to: 2019, manufacturer: "New Balance", sponsor: "Dafabet" },
      { from: 2020, to: 2024, manufacturer: "Adidas", sponsor: "Dafabet" },
    ],
  },
  {
    club: "Rangers", clubSlug: "rangers", league: SP, leagueSlug: SPS, founded: 1872,
    homeColors: ["#0049AF", "#FFFFFF", "#CF142B"],
    awayColors: ["#FFFFFF", "#0049AF"],
    eras: [
      { from: 1990, to: 1996, manufacturer: "Adidas", sponsor: "McEwan's Lager" },
      { from: 1997, to: 2002, manufacturer: "Nike", sponsor: "NTL" },
      { from: 2003, to: 2017, manufacturer: "Umbro / Puma", sponsor: "Carling" },
      { from: 2018, to: 2020, manufacturer: "Hummel", sponsor: "32Red" },
      { from: 2021, to: 2024, manufacturer: "Castore", sponsor: "32Red" },
    ],
  },
];

export function generateAllKitArchives(): ClubKitArchive[] {
  return clubDefs.map(generateClubKits);
}
