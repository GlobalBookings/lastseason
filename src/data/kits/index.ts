import type { ClubKits } from "./types";

// AWIN placeholder URLs — replace with real tracked AWIN deep links once publisher account is approved
// Format: https://www.awin1.com/cread.php?awinmid=XXXXX&awinaffid=YYYYY&ued=PRODUCT_URL
const AWIN_JD = "https://www.jdsports.co.uk";
const AWIN_KITBAG = "https://www.kitbag.com";
const AWIN_NIKE = "https://www.nike.com/gb";
const AWIN_ADIDAS = "https://www.adidas.co.uk";
const AWIN_PUMA = "https://uk.puma.com";

export const allClubKits: ClubKits[] = [
  // Premier League
  {
    club: "Manchester City", clubSlug: "manchester-city", league: "Premier League", leagueSlug: "premier-league",
    kits: [
      { type: "home", season: "2024-25", manufacturer: "Puma", retailers: [
        { name: "JD Sports", slug: "jd-sports", url: `${AWIN_JD}/product/puma-manchester-city-home-shirt-2024-25`, price: "£80" },
        { name: "Kitbag", slug: "kitbag", url: `${AWIN_KITBAG}/manchester-city-home-shirt-2024-25`, price: "£80" },
        { name: "Puma", slug: "puma", url: `${AWIN_PUMA}/manchester-city-home-2024-25`, price: "£80" },
      ]},
      { type: "away", season: "2024-25", manufacturer: "Puma", retailers: [
        { name: "JD Sports", slug: "jd-sports", url: `${AWIN_JD}/product/puma-manchester-city-away-shirt-2024-25`, price: "£80" },
        { name: "Kitbag", slug: "kitbag", url: `${AWIN_KITBAG}/manchester-city-away-shirt-2024-25`, price: "£80" },
      ]},
      { type: "third", season: "2024-25", manufacturer: "Puma", retailers: [
        { name: "JD Sports", slug: "jd-sports", url: `${AWIN_JD}/product/puma-manchester-city-third-shirt-2024-25`, price: "£80" },
      ]},
    ],
  },
  {
    club: "Arsenal", clubSlug: "arsenal", league: "Premier League", leagueSlug: "premier-league",
    kits: [
      { type: "home", season: "2024-25", manufacturer: "Adidas", retailers: [
        { name: "JD Sports", slug: "jd-sports", url: `${AWIN_JD}/product/adidas-arsenal-home-shirt-2024-25`, price: "£90" },
        { name: "Kitbag", slug: "kitbag", url: `${AWIN_KITBAG}/arsenal-home-shirt-2024-25`, price: "£90" },
        { name: "Adidas", slug: "adidas", url: `${AWIN_ADIDAS}/arsenal-home-2024-25`, price: "£90" },
      ]},
      { type: "away", season: "2024-25", manufacturer: "Adidas", retailers: [
        { name: "JD Sports", slug: "jd-sports", url: `${AWIN_JD}/product/adidas-arsenal-away-shirt-2024-25`, price: "£90" },
        { name: "Adidas", slug: "adidas", url: `${AWIN_ADIDAS}/arsenal-away-2024-25`, price: "£90" },
      ]},
      { type: "third", season: "2024-25", manufacturer: "Adidas", retailers: [
        { name: "JD Sports", slug: "jd-sports", url: `${AWIN_JD}/product/adidas-arsenal-third-shirt-2024-25`, price: "£90" },
      ]},
    ],
  },
  {
    club: "Liverpool", clubSlug: "liverpool", league: "Premier League", leagueSlug: "premier-league",
    kits: [
      { type: "home", season: "2024-25", manufacturer: "Nike", retailers: [
        { name: "JD Sports", slug: "jd-sports", url: `${AWIN_JD}/product/nike-liverpool-home-shirt-2024-25`, price: "£85" },
        { name: "Kitbag", slug: "kitbag", url: `${AWIN_KITBAG}/liverpool-home-shirt-2024-25`, price: "£85" },
        { name: "Nike", slug: "nike", url: `${AWIN_NIKE}/liverpool-home-2024-25`, price: "£85" },
      ]},
      { type: "away", season: "2024-25", manufacturer: "Nike", retailers: [
        { name: "JD Sports", slug: "jd-sports", url: `${AWIN_JD}/product/nike-liverpool-away-shirt-2024-25`, price: "£85" },
        { name: "Nike", slug: "nike", url: `${AWIN_NIKE}/liverpool-away-2024-25`, price: "£85" },
      ]},
    ],
  },
  {
    club: "Chelsea", clubSlug: "chelsea", league: "Premier League", leagueSlug: "premier-league",
    kits: [
      { type: "home", season: "2024-25", manufacturer: "Nike", retailers: [
        { name: "JD Sports", slug: "jd-sports", url: `${AWIN_JD}/product/nike-chelsea-home-shirt-2024-25`, price: "£85" },
        { name: "Kitbag", slug: "kitbag", url: `${AWIN_KITBAG}/chelsea-home-shirt-2024-25`, price: "£85" },
        { name: "Nike", slug: "nike", url: `${AWIN_NIKE}/chelsea-home-2024-25`, price: "£85" },
      ]},
      { type: "away", season: "2024-25", manufacturer: "Nike", retailers: [
        { name: "JD Sports", slug: "jd-sports", url: `${AWIN_JD}/product/nike-chelsea-away-shirt-2024-25`, price: "£85" },
      ]},
    ],
  },
  {
    club: "Manchester United", clubSlug: "manchester-united", league: "Premier League", leagueSlug: "premier-league",
    kits: [
      { type: "home", season: "2024-25", manufacturer: "Adidas", retailers: [
        { name: "JD Sports", slug: "jd-sports", url: `${AWIN_JD}/product/adidas-manchester-united-home-shirt-2024-25`, price: "£90" },
        { name: "Kitbag", slug: "kitbag", url: `${AWIN_KITBAG}/manchester-united-home-shirt-2024-25`, price: "£90" },
        { name: "Adidas", slug: "adidas", url: `${AWIN_ADIDAS}/manchester-united-home-2024-25`, price: "£90" },
      ]},
      { type: "away", season: "2024-25", manufacturer: "Adidas", retailers: [
        { name: "JD Sports", slug: "jd-sports", url: `${AWIN_JD}/product/adidas-manchester-united-away-shirt-2024-25`, price: "£90" },
        { name: "Adidas", slug: "adidas", url: `${AWIN_ADIDAS}/manchester-united-away-2024-25`, price: "£90" },
      ]},
    ],
  },
  {
    club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", league: "Premier League", leagueSlug: "premier-league",
    kits: [
      { type: "home", season: "2024-25", manufacturer: "Nike", retailers: [
        { name: "JD Sports", slug: "jd-sports", url: `${AWIN_JD}/product/nike-tottenham-home-shirt-2024-25`, price: "£85" },
        { name: "Nike", slug: "nike", url: `${AWIN_NIKE}/tottenham-home-2024-25`, price: "£85" },
      ]},
      { type: "away", season: "2024-25", manufacturer: "Nike", retailers: [
        { name: "JD Sports", slug: "jd-sports", url: `${AWIN_JD}/product/nike-tottenham-away-shirt-2024-25`, price: "£85" },
      ]},
    ],
  },
  {
    club: "Aston Villa", clubSlug: "aston-villa", league: "Premier League", leagueSlug: "premier-league",
    kits: [
      { type: "home", season: "2024-25", manufacturer: "Adidas", retailers: [
        { name: "JD Sports", slug: "jd-sports", url: `${AWIN_JD}/product/adidas-aston-villa-home-shirt-2024-25`, price: "£80" },
        { name: "Kitbag", slug: "kitbag", url: `${AWIN_KITBAG}/aston-villa-home-shirt-2024-25`, price: "£80" },
      ]},
    ],
  },
  {
    club: "Newcastle United", clubSlug: "newcastle-united", league: "Premier League", leagueSlug: "premier-league",
    kits: [
      { type: "home", season: "2024-25", manufacturer: "Adidas", retailers: [
        { name: "JD Sports", slug: "jd-sports", url: `${AWIN_JD}/product/adidas-newcastle-home-shirt-2024-25`, price: "£80" },
        { name: "Kitbag", slug: "kitbag", url: `${AWIN_KITBAG}/newcastle-home-shirt-2024-25`, price: "£80" },
        { name: "Adidas", slug: "adidas", url: `${AWIN_ADIDAS}/newcastle-home-2024-25`, price: "£80" },
      ]},
    ],
  },
  // La Liga
  {
    club: "Real Madrid", clubSlug: "real-madrid", league: "La Liga", leagueSlug: "la-liga",
    kits: [
      { type: "home", season: "2024-25", manufacturer: "Adidas", retailers: [
        { name: "JD Sports", slug: "jd-sports", url: `${AWIN_JD}/product/adidas-real-madrid-home-shirt-2024-25`, price: "£90" },
        { name: "Kitbag", slug: "kitbag", url: `${AWIN_KITBAG}/real-madrid-home-shirt-2024-25`, price: "£90" },
        { name: "Adidas", slug: "adidas", url: `${AWIN_ADIDAS}/real-madrid-home-2024-25`, price: "£90" },
      ]},
      { type: "away", season: "2024-25", manufacturer: "Adidas", retailers: [
        { name: "Adidas", slug: "adidas", url: `${AWIN_ADIDAS}/real-madrid-away-2024-25`, price: "£90" },
      ]},
    ],
  },
  {
    club: "Barcelona", clubSlug: "barcelona", league: "La Liga", leagueSlug: "la-liga",
    kits: [
      { type: "home", season: "2024-25", manufacturer: "Nike", retailers: [
        { name: "JD Sports", slug: "jd-sports", url: `${AWIN_JD}/product/nike-barcelona-home-shirt-2024-25`, price: "£90" },
        { name: "Kitbag", slug: "kitbag", url: `${AWIN_KITBAG}/barcelona-home-shirt-2024-25`, price: "£90" },
        { name: "Nike", slug: "nike", url: `${AWIN_NIKE}/barcelona-home-2024-25`, price: "£90" },
      ]},
    ],
  },
  // Bundesliga
  {
    club: "Bayern Munich", clubSlug: "bayern-munich", league: "Bundesliga", leagueSlug: "bundesliga",
    kits: [
      { type: "home", season: "2024-25", manufacturer: "Adidas", retailers: [
        { name: "JD Sports", slug: "jd-sports", url: `${AWIN_JD}/product/adidas-bayern-munich-home-shirt-2024-25`, price: "£85" },
        { name: "Kitbag", slug: "kitbag", url: `${AWIN_KITBAG}/bayern-munich-home-shirt-2024-25`, price: "£85" },
        { name: "Adidas", slug: "adidas", url: `${AWIN_ADIDAS}/bayern-munich-home-2024-25`, price: "£85" },
      ]},
    ],
  },
  {
    club: "Borussia Dortmund", clubSlug: "borussia-dortmund", league: "Bundesliga", leagueSlug: "bundesliga",
    kits: [
      { type: "home", season: "2024-25", manufacturer: "Puma", retailers: [
        { name: "JD Sports", slug: "jd-sports", url: `${AWIN_JD}/product/puma-borussia-dortmund-home-shirt-2024-25`, price: "£80" },
        { name: "Kitbag", slug: "kitbag", url: `${AWIN_KITBAG}/borussia-dortmund-home-shirt-2024-25`, price: "£80" },
        { name: "Puma", slug: "puma", url: `${AWIN_PUMA}/borussia-dortmund-home-2024-25`, price: "£80" },
      ]},
    ],
  },
  // Serie A
  {
    club: "Inter Milan", clubSlug: "inter-milan", league: "Serie A", leagueSlug: "serie-a",
    kits: [
      { type: "home", season: "2024-25", manufacturer: "Nike", retailers: [
        { name: "JD Sports", slug: "jd-sports", url: `${AWIN_JD}/product/nike-inter-milan-home-shirt-2024-25`, price: "£85" },
        { name: "Nike", slug: "nike", url: `${AWIN_NIKE}/inter-milan-home-2024-25`, price: "£85" },
      ]},
    ],
  },
  {
    club: "AC Milan", clubSlug: "ac-milan", league: "Serie A", leagueSlug: "serie-a",
    kits: [
      { type: "home", season: "2024-25", manufacturer: "Puma", retailers: [
        { name: "JD Sports", slug: "jd-sports", url: `${AWIN_JD}/product/puma-ac-milan-home-shirt-2024-25`, price: "£85" },
        { name: "Puma", slug: "puma", url: `${AWIN_PUMA}/ac-milan-home-2024-25`, price: "£85" },
      ]},
    ],
  },
  {
    club: "Juventus", clubSlug: "juventus", league: "Serie A", leagueSlug: "serie-a",
    kits: [
      { type: "home", season: "2024-25", manufacturer: "Adidas", retailers: [
        { name: "JD Sports", slug: "jd-sports", url: `${AWIN_JD}/product/adidas-juventus-home-shirt-2024-25`, price: "£85" },
        { name: "Adidas", slug: "adidas", url: `${AWIN_ADIDAS}/juventus-home-2024-25`, price: "£85" },
      ]},
    ],
  },
  // Ligue 1
  {
    club: "PSG", clubSlug: "psg", league: "Ligue 1", leagueSlug: "ligue-1",
    kits: [
      { type: "home", season: "2024-25", manufacturer: "Nike", retailers: [
        { name: "JD Sports", slug: "jd-sports", url: `${AWIN_JD}/product/nike-psg-home-shirt-2024-25`, price: "£90" },
        { name: "Kitbag", slug: "kitbag", url: `${AWIN_KITBAG}/psg-home-shirt-2024-25`, price: "£90" },
        { name: "Nike", slug: "nike", url: `${AWIN_NIKE}/psg-home-2024-25`, price: "£90" },
      ]},
    ],
  },
  // Scottish Premiership
  {
    club: "Celtic", clubSlug: "celtic", league: "Scottish Premiership", leagueSlug: "scottish-premiership",
    kits: [
      { type: "home", season: "2024-25", manufacturer: "Adidas", retailers: [
        { name: "JD Sports", slug: "jd-sports", url: `${AWIN_JD}/product/adidas-celtic-home-shirt-2024-25`, price: "£75" },
        { name: "Kitbag", slug: "kitbag", url: `${AWIN_KITBAG}/celtic-home-shirt-2024-25`, price: "£75" },
      ]},
    ],
  },
  {
    club: "Rangers", clubSlug: "rangers", league: "Scottish Premiership", leagueSlug: "scottish-premiership",
    kits: [
      { type: "home", season: "2024-25", manufacturer: "Castore", retailers: [
        { name: "JD Sports", slug: "jd-sports", url: `${AWIN_JD}/product/castore-rangers-home-shirt-2024-25`, price: "£75" },
        { name: "Kitbag", slug: "kitbag", url: `${AWIN_KITBAG}/rangers-home-shirt-2024-25`, price: "£75" },
      ]},
    ],
  },
];

export function getClubKits(clubSlug: string): ClubKits | undefined {
  return allClubKits.find((c) => c.clubSlug === clubSlug);
}

export function getKitsByLeague(leagueSlug: string): ClubKits[] {
  return allClubKits.filter((c) => c.leagueSlug === leagueSlug);
}
