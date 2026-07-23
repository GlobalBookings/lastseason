export type FantasyPosition = "GK" | "DEF" | "MID" | "FWD";
export type Venue = "H" | "A";

export interface FantasyFixture {
  gw: number;
  opponent: string;
  venue: Venue;
}

export interface FantasyClub {
  name: string;
  slug: string;
  short: string;
  previousRank: number;
  fixtures: FantasyFixture[];
}

export interface FantasyPlayer {
  id: string;
  name: string;
  club: string;
  clubSlug: string;
  position: FantasyPosition;
  planningPrice: number;
  lastSeasonPoints?: number;
  evidence: number;
  minutes: "Strong" | "Monitor";
  note: string;
  tags: string[];
}

export const fantasyUpdated = "23 July 2026";
export const fantasyKickoff = "2026-08-21T20:00:00+01:00";
export const fantasyDeadline = "2026-08-21T18:30:00+01:00";
export const fantasyDeadlineLabel = "Friday 21 August · 18:30 BST";
export const fantasyRulesUrl = "https://www.premierleague.com/en/news/4679879/whats-happening-with-fpl-chips-in-202627";
export const fantasyPositionChangesUrl = "https://www.premierleague.com/en/news/4679886/position-changes-for-202627-fantasy-premier-league";
export const fantasyBonusChangesUrl = "https://www.premierleague.com/en/news/4679946/whats-new-in-202627-fantasy-changes-to-bonus-points-system";
export const fantasyLiveRankingsUrl = "https://www.premierleague.com/en/news/4680230/whats-new-in-202627-fantasy-league-rankings-change-in-real-time";
export const fantasyPositionChanges = [
  { player:"Myles Lewis-Skelly", club:"Arsenal", previous:"DEF", current:"MID" },
  { player:"Lamare Bogarde", club:"Aston Villa", previous:"DEF", current:"MID" },
  { player:"Eli Junior Kroupi", club:"AFC Bournemouth", previous:"FWD", current:"MID" },
  { player:"Keane Lewis-Potter", club:"Brentford", previous:"DEF", current:"MID" },
  { player:"Mats Wieffer", club:"Brighton", previous:"MID", current:"DEF" },
  { player:"Georginio Rutter", club:"Brighton", previous:"MID", current:"FWD" },
  { player:"Rio Cardines", club:"Crystal Palace", previous:"MID", current:"DEF" },
  { player:"Ryan Sessegnon", club:"Fulham", previous:"MID", current:"DEF" },
  { player:"Omar Marmoush", club:"Manchester City", previous:"MID", current:"FWD" },
  { player:"Patrick Dorgu", club:"Manchester United", previous:"DEF", current:"MID" },
  { player:"Eric Moreira", club:"Nottingham Forest", previous:"MID", current:"DEF" },
] as const;
export const fantasySourceUrl = "https://resources.premierleague.pulselive.com/premierleague/document/2026/06/19/6ca67658-af7f-41ac-872c-91e7140b4531/FDR-complete-season-2026-27-19-June-2026-v2.pdf";

const rawFixtures: Record<string, [string, Venue][]> = {
  arsenal: [["coventry-city","H"],["aston-villa","A"],["chelsea","H"],["sunderland","A"],["brighton","A"],["leeds-united","H"]],
  "aston-villa": [["brighton","A"],["arsenal","H"],["hull-city","A"],["nottingham-forest","H"],["tottenham-hotspur","A"],["brentford","H"]],
  bournemouth: [["manchester-city","A"],["everton","H"],["newcastle-united","A"],["brentford","H"],["liverpool","H"],["chelsea","A"]],
  brentford: [["tottenham-hotspur","H"],["leeds-united","A"],["sunderland","H"],["bournemouth","A"],["chelsea","H"],["aston-villa","A"]],
  brighton: [["aston-villa","H"],["chelsea","A"],["leeds-united","H"],["coventry-city","A"],["arsenal","H"],["sunderland","A"]],
  chelsea: [["fulham","A"],["brighton","H"],["arsenal","A"],["hull-city","H"],["brentford","A"],["bournemouth","H"]],
  "coventry-city": [["arsenal","A"],["hull-city","H"],["manchester-city","A"],["brighton","H"],["nottingham-forest","A"],["newcastle-united","H"]],
  "crystal-palace": [["everton","A"],["manchester-city","H"],["fulham","A"],["ipswich-town","H"],["leeds-united","A"],["nottingham-forest","H"]],
  everton: [["crystal-palace","H"],["bournemouth","A"],["manchester-united","H"],["tottenham-hotspur","A"],["ipswich-town","H"],["hull-city","A"]],
  fulham: [["chelsea","H"],["sunderland","A"],["crystal-palace","H"],["liverpool","A"],["manchester-united","H"],["ipswich-town","A"]],
  "hull-city": [["manchester-united","H"],["coventry-city","A"],["aston-villa","H"],["chelsea","A"],["newcastle-united","A"],["everton","H"]],
  "ipswich-town": [["sunderland","H"],["manchester-united","A"],["liverpool","H"],["crystal-palace","A"],["everton","A"],["fulham","H"]],
  "leeds-united": [["nottingham-forest","A"],["brentford","H"],["brighton","A"],["newcastle-united","H"],["crystal-palace","H"],["arsenal","A"]],
  liverpool: [["newcastle-united","A"],["nottingham-forest","H"],["ipswich-town","A"],["fulham","H"],["bournemouth","A"],["manchester-city","H"]],
  "manchester-city": [["bournemouth","H"],["crystal-palace","A"],["coventry-city","H"],["manchester-united","A"],["sunderland","H"],["liverpool","A"]],
  "manchester-united": [["hull-city","A"],["ipswich-town","H"],["everton","A"],["manchester-city","H"],["fulham","A"],["tottenham-hotspur","H"]],
  "newcastle-united": [["liverpool","H"],["tottenham-hotspur","A"],["bournemouth","H"],["leeds-united","A"],["hull-city","H"],["coventry-city","A"]],
  "nottingham-forest": [["leeds-united","H"],["liverpool","A"],["tottenham-hotspur","H"],["aston-villa","A"],["coventry-city","H"],["crystal-palace","A"]],
  sunderland: [["ipswich-town","A"],["fulham","H"],["brentford","A"],["arsenal","H"],["manchester-city","A"],["brighton","H"]],
  "tottenham-hotspur": [["brentford","A"],["newcastle-united","H"],["nottingham-forest","A"],["everton","H"],["aston-villa","H"],["manchester-united","A"]],
};

const clubBasics: Array<[string, string, string, number]> = [
  ["Arsenal","arsenal","ARS",1],["Aston Villa","aston-villa","AVL",4],["AFC Bournemouth","bournemouth","BOU",6],
  ["Brentford","brentford","BRE",9],["Brighton & Hove Albion","brighton","BHA",8],["Chelsea","chelsea","CHE",10],
  ["Coventry City","coventry-city","COV",18],["Crystal Palace","crystal-palace","CRY",15],["Everton","everton","EVE",13],
  ["Fulham","fulham","FUL",11],["Hull City","hull-city","HUL",20],["Ipswich Town","ipswich-town","IPS",19],
  ["Leeds United","leeds-united","LEE",14],["Liverpool","liverpool","LIV",5],["Manchester City","manchester-city","MCI",2],
  ["Manchester United","manchester-united","MUN",3],["Newcastle United","newcastle-united","NEW",12],
  ["Nottingham Forest","nottingham-forest","NFO",16],["Sunderland","sunderland","SUN",7],["Tottenham Hotspur","tottenham-hotspur","TOT",17],
];

export const fantasyClubs: FantasyClub[] = clubBasics.map(([name, slug, short, previousRank]) => ({
  name, slug, short, previousRank,
  fixtures: rawFixtures[slug].map(([opponent, venue], index) => ({ gw: index + 1, opponent, venue })),
}));

export const clubBySlug = new Map(fantasyClubs.map((club) => [club.slug, club]));

export function fixtureDifficulty(opponentSlug: string, venue: Venue): number {
  const rank = clubBySlug.get(opponentSlug)?.previousRank ?? 10;
  let score = rank <= 4 ? 5 : rank <= 8 ? 4 : rank <= 14 ? 3 : 2;
  score += venue === "A" ? 0.35 : -0.35;
  return Math.max(1, Math.min(5, Math.round(score)));
}

export function averageFixtureDifficulty(clubSlug: string, from = 1, to = 6): number {
  const fixtures = clubBySlug.get(clubSlug)?.fixtures.filter((fixture) => fixture.gw >= from && fixture.gw <= to) ?? [];
  if (!fixtures.length) return 3;
  return fixtures.reduce((sum, fixture) => sum + fixtureDifficulty(fixture.opponent, fixture.venue), 0) / fixtures.length;
}

export const fantasyPlayers: FantasyPlayer[] = [
  { id:"david-raya", name:"David Raya", club:"Arsenal", clubSlug:"arsenal", position:"GK", planningPrice:6, lastSeasonPoints:162, evidence:91, minutes:"Strong", note:"Elite clean-sheet evidence; premium planning cost.", tags:["safe","clean sheets"] },
  { id:"alisson", name:"Alisson", club:"Liverpool", clubSlug:"liverpool", position:"GK", planningPrice:5.5, evidence:82, minutes:"Strong", note:"Reliable route into a side with an encouraging opening run.", tags:["safe","fixtures"] },
  { id:"jordan-pickford", name:"Jordan Pickford", club:"Everton", clubSlug:"everton", position:"GK", planningPrice:5, evidence:77, minutes:"Strong", note:"Save potential plus two promoted opponents in the first six.", tags:["value","saves"] },
  { id:"mats-sels", name:"Matz Sels", club:"Nottingham Forest", clubSlug:"nottingham-forest", position:"GK", planningPrice:5, evidence:75, minutes:"Strong", note:"Useful early home fixtures; monitor defensive changes.", tags:["value","rotation"] },
  { id:"bernd-leno", name:"Bernd Leno", club:"Fulham", clubSlug:"fulham", position:"GK", planningPrice:4.5, evidence:70, minutes:"Strong", note:"Budget goalkeeper with save-volume appeal.", tags:["budget","saves"] },
  { id:"nick-pope", name:"Nick Pope", club:"Newcastle United", clubSlug:"newcastle-united", position:"GK", planningPrice:5, evidence:72, minutes:"Monitor", note:"Strong fixture stretch after a difficult opener.", tags:["fixtures","monitor"] },

  { id:"gabriel", name:"Gabriel", club:"Arsenal", clubSlug:"arsenal", position:"DEF", planningPrice:6.5, lastSeasonPoints:209, evidence:96, minutes:"Strong", note:"Last season's leading defender in this reviewed watchlist.", tags:["premium","set pieces"] },
  { id:"william-saliba", name:"William Saliba", club:"Arsenal", clubSlug:"arsenal", position:"DEF", planningPrice:6, evidence:88, minutes:"Strong", note:"Minutes security and clean-sheet strength.", tags:["safe","clean sheets"] },
  { id:"virgil-van-dijk", name:"Virgil van Dijk", club:"Liverpool", clubSlug:"liverpool", position:"DEF", planningPrice:6.5, lastSeasonPoints:175, evidence:91, minutes:"Strong", note:"Played every league minute last season and adds set-piece threat.", tags:["safe","set pieces"] },
  { id:"marc-guehi", name:"Marc Guéhi", club:"Manchester City", clubSlug:"manchester-city", position:"DEF", planningPrice:6, lastSeasonPoints:179, evidence:89, minutes:"Strong", note:"Strong 2025/26 output across two clubs; role still worth tracking.", tags:["premium","monitor"] },
  { id:"josko-gvardiol", name:"Joško Gvardiol", club:"Manchester City", clubSlug:"manchester-city", position:"DEF", planningPrice:6, evidence:84, minutes:"Monitor", note:"Attacking upside with rotation risk attached.", tags:["upside","rotation risk"] },
  { id:"pedro-porro", name:"Pedro Porro", club:"Tottenham Hotspur", clubSlug:"tottenham-hotspur", position:"DEF", planningPrice:5.5, evidence:78, minutes:"Strong", note:"Attacking defender; early schedule is mixed.", tags:["attacking","differential"] },
  { id:"marc-cucurella", name:"Marc Cucurella", club:"Chelsea", clubSlug:"chelsea", position:"DEF", planningPrice:5.5, evidence:76, minutes:"Monitor", note:"Useful GW4-GW6 run if his pre-season role is secure.", tags:["fixtures","monitor"] },
  { id:"jarrad-branthwaite", name:"Jarrad Branthwaite", club:"Everton", clubSlug:"everton", position:"DEF", planningPrice:5, evidence:76, minutes:"Strong", note:"Everton's opening six include Ipswich and Hull.", tags:["value","fixtures"] },
  { id:"joachim-andersen", name:"Joachim Andersen", club:"Fulham", clubSlug:"fulham", position:"DEF", planningPrice:5, evidence:73, minutes:"Strong", note:"A steady minutes pick rather than an explosive one.", tags:["safe","budget"] },
  { id:"dan-burn", name:"Dan Burn", club:"Newcastle United", clubSlug:"newcastle-united", position:"DEF", planningPrice:4.5, evidence:70, minutes:"Monitor", note:"Budget route into an improving run; role requires checking.", tags:["budget","monitor"] },
  { id:"daniel-munoz", name:"Daniel Muñoz", club:"Crystal Palace", clubSlug:"crystal-palace", position:"DEF", planningPrice:5.5, evidence:80, minutes:"Strong", note:"Attacking profile makes him more than a clean-sheet pick.", tags:["attacking","upside"] },
  { id:"murillo", name:"Murillo", club:"Nottingham Forest", clubSlug:"nottingham-forest", position:"DEF", planningPrice:5, evidence:74, minutes:"Strong", note:"Home fixtures against Leeds, Spurs and Coventry in the first five.", tags:["value","fixtures"] },

  { id:"bruno-fernandes", name:"Bruno Fernandes", club:"Manchester United", clubSlug:"manchester-united", position:"MID", planningPrice:10.5, lastSeasonPoints:235, evidence:97, minutes:"Strong", note:"Elite 2025/26 output and captaincy potential in the opening weeks.", tags:["captain","premium"] },
  { id:"antoine-semenyo", name:"Antoine Semenyo", club:"Manchester City", clubSlug:"manchester-city", position:"MID", planningPrice:9.5, lastSeasonPoints:202, evidence:91, minutes:"Strong", note:"Consistent returns last season; verify classification and role at launch.", tags:["premium","upside"] },
  { id:"morgan-gibbs-white", name:"Morgan Gibbs-White", club:"Nottingham Forest", clubSlug:"nottingham-forest", position:"MID", planningPrice:8, lastSeasonPoints:188, evidence:90, minutes:"Strong", note:"Finished 2025/26 in exceptional form and has attractive home fixtures.", tags:["form","fixtures"] },
  { id:"declan-rice", name:"Declan Rice", club:"Arsenal", clubSlug:"arsenal", position:"MID", planningPrice:7, lastSeasonPoints:184, evidence:88, minutes:"Strong", note:"Set pieces and defensive contributions broaden his routes to points.", tags:["value","set pieces"] },
  { id:"bukayo-saka", name:"Bukayo Saka", club:"Arsenal", clubSlug:"arsenal", position:"MID", planningPrice:10, evidence:88, minutes:"Monitor", note:"Premium ceiling; check post-World Cup fitness before committing.", tags:["premium","monitor"] },
  { id:"cole-palmer", name:"Cole Palmer", club:"Chelsea", clubSlug:"chelsea", position:"MID", planningPrice:10.5, evidence:89, minutes:"Monitor", note:"High-upside talisman with a promising GW4-GW6 stretch.", tags:["captain","premium"] },
  { id:"dominik-szoboszlai", name:"Dominik Szoboszlai", club:"Liverpool", clubSlug:"liverpool", position:"MID", planningPrice:8, evidence:80, minutes:"Monitor", note:"Pre-season role under a new coach is the key variable.", tags:["fixtures","monitor"] },
  { id:"phil-foden", name:"Phil Foden", club:"Manchester City", clubSlug:"manchester-city", position:"MID", planningPrice:9, evidence:82, minutes:"Monitor", note:"Excellent opening home fixtures, balanced by rotation uncertainty.", tags:["upside","rotation risk"] },
  { id:"eberechi-eze", name:"Eberechi Eze", club:"Crystal Palace", clubSlug:"crystal-palace", position:"MID", planningPrice:8.5, evidence:82, minutes:"Strong", note:"Creative focal point with set-piece involvement.", tags:["differential","set pieces"] },
  { id:"anthony-gordon", name:"Anthony Gordon", club:"Newcastle United", clubSlug:"newcastle-united", position:"MID", planningPrice:7.5, evidence:77, minutes:"Monitor", note:"The schedule improves quickly after Liverpool in GW1.", tags:["fixtures","upside"] },
  { id:"morgan-rogers", name:"Morgan Rogers", club:"Aston Villa", clubSlug:"aston-villa", position:"MID", planningPrice:7.5, evidence:78, minutes:"Strong", note:"Direct attacking role with a balanced opening run.", tags:["value","upside"] },
  { id:"kaoru-mitoma", name:"Kaoru Mitoma", club:"Brighton & Hove Albion", clubSlug:"brighton", position:"MID", planningPrice:7, evidence:73, minutes:"Monitor", note:"Explosive option; fixtures alternate between appealing and difficult.", tags:["differential","monitor"] },
  { id:"iliman-ndiaye", name:"Iliman Ndiaye", club:"Everton", clubSlug:"everton", position:"MID", planningPrice:6.5, evidence:72, minutes:"Strong", note:"A lower-cost route into Everton's kind opening fixtures.", tags:["budget","differential"] },

  { id:"erling-haaland", name:"Erling Haaland", club:"Manchester City", clubSlug:"manchester-city", position:"FWD", planningPrice:14, lastSeasonPoints:239, evidence:99, minutes:"Strong", note:"The reviewed points leader and standout early captaincy candidate.", tags:["captain","premium"] },
  { id:"igor-thiago", name:"Igor Thiago", club:"Brentford", clubSlug:"brentford", position:"FWD", planningPrice:8, lastSeasonPoints:181, evidence:88, minutes:"Strong", note:"Twenty-two league goals last season, including eight penalties.", tags:["value","penalties"] },
  { id:"ollie-watkins", name:"Ollie Watkins", club:"Aston Villa", clubSlug:"aston-villa", position:"FWD", planningPrice:9, evidence:84, minutes:"Strong", note:"Reliable central role with assist as well as goal potential.", tags:["safe","talisman"] },
  { id:"alexander-isak", name:"Alexander Isak", club:"Newcastle United", clubSlug:"newcastle-united", position:"FWD", planningPrice:10.5, evidence:86, minutes:"Monitor", note:"Premium finishing quality; confirm fitness and transfer status.", tags:["premium","monitor"] },
  { id:"joao-pedro", name:"João Pedro", club:"Chelsea", clubSlug:"chelsea", position:"FWD", planningPrice:8, evidence:80, minutes:"Monitor", note:"Potential value if pre-season confirms a central starting role.", tags:["value","monitor"] },
  { id:"jean-philippe-mateta", name:"Jean-Philippe Mateta", club:"Crystal Palace", clubSlug:"crystal-palace", position:"FWD", planningPrice:8, evidence:79, minutes:"Strong", note:"A focal-point forward suited to managers avoiding the premium tier.", tags:["value","talisman"] },
  { id:"oli-mcburnie", name:"Oli McBurnie", club:"Hull City", clubSlug:"hull-city", position:"FWD", planningPrice:6.5, evidence:75, minutes:"Strong", note:"Scored 18 times in Hull's promotion campaign; a promoted-team watch.", tags:["budget","differential"] },
  { id:"dominic-solanke", name:"Dominic Solanke", club:"Tottenham Hotspur", clubSlug:"tottenham-hotspur", position:"FWD", planningPrice:8, evidence:76, minutes:"Monitor", note:"Central-forward upside, with new-system minutes to assess.", tags:["differential","monitor"] },
  { id:"evanilson", name:"Evanilson", club:"AFC Bournemouth", clubSlug:"bournemouth", position:"FWD", planningPrice:7, evidence:72, minutes:"Strong", note:"Capable option, although the opening six are demanding.", tags:["differential","hard fixtures"] },
  { id:"chris-wood", name:"Chris Wood", club:"Nottingham Forest", clubSlug:"nottingham-forest", position:"FWD", planningPrice:7.5, evidence:76, minutes:"Monitor", note:"Short-term appeal if pre-season confirms he remains first choice.", tags:["fixtures","monitor"] },
];

export const fantasySources = [
  { name:"2026/27 opening fixtures", url:fantasySourceUrl },
  { name:"2026/27 chips and half-season reset", url:fantasyRulesUrl },
  { name:"2026/27 position changes", url:fantasyPositionChangesUrl },
  { name:"2026/27 Bonus Points System changes", url:fantasyBonusChangesUrl },
  { name:"2026/27 live rankings and projected bonus", url:fantasyLiveRankingsUrl },
  { name:"Gameweek 1 deadline and price-change predictor", url:"https://www.premierleague.com/en/news/4680462/whats-new-in-202627-fantasy-price-change-predictor" },
  { name:"2025/26 fantasy team of the season", url:"https://www.premierleague.com/en/news/4671444/fpl-202526-team-of-the-season" },
  { name:"2026 summer transfer tracker", url:"https://www.premierleague.com/en/transfers/2026-27/summer" },
];

export const generalTeamNames = [
  ["The xG Files","clever"],["Expected Toulouse","clever"],["Game of Throw-Ins","classic"],["Clean Sheet Happens","classic"],
  ["Ctrl Alt De Ligt","player"],["Haalandaise Sauce","player"],["Rice Rice Baby","player"],["Saka Potatoes","player"],
  ["Palmer Violets","player"],["Eze Come Eze Go","player"],["Gvardiol of Honour","player"],["Watkins the Dog","player"],
  ["Isak and You Shall Find","player"],["Obi-Wan Iwobi","player"],["Livin' Saliba Loca","player"],["Bruno Mars","player"],
  ["Crouch Potato","retro"],["Neville Wears Prada","retro"],["Enter Shaqiri","retro"],["Lallanas in Pyjamas","retro"],
  ["Murder on Zidane's Floor","retro"],["Teenage Mutant Ninja Skrtels","retro"],["Gangsters Allardyce","retro"],["Flying Without Ings","retro"],
  ["Goals Aloud","clean"],["Net Results","clean"],["The Assistants","clean"],["Back of the Newsletter","clean"],
  ["VAR and Peace","clever"],["Terms and Kondogbia","retro"],["No More Mr Nice Gaffer","classic"],["Moves Like Agger","retro"],
] as const;

export type FantasyNameGroup = {
  label: "Current squad" | "Club culture" | "Retro & clean";
  names: string[];
};

export type ClubNameCollection = {
  slug: string;
  name: string;
  intro: string;
  groups: FantasyNameGroup[];
  names: string[];
};

const nameCollection = (
  slug: string,
  name: string,
  intro: string,
  current: string[],
  culture: string[],
  retro: string[],
): ClubNameCollection => ({
  slug,
  name,
  intro,
  groups: [
    { label: "Current squad", names: current },
    { label: "Club culture", names: culture },
    { label: "Retro & clean", names: retro },
  ],
  names: [...current, ...culture, ...retro],
});

export const clubNameCollections: ClubNameCollection[] = [
  nameCollection("arsenal", "Arsenal", "Names inspired by Arsenal's current squad, North London and familiar terrace references.",
    ["Rice Rice Baby","Livin' Saliba Loca","Saka Potatoes","Raya Sunshine","Øde to Joy","Gabriel's Inferno","Havertz Your Way","Timber Land"],
    ["Gunners and Roses","North Bank Notes","Emirates of Mind","Cannon Fodder FC","Arteta Than Ever","Red Side Story","Clock End Credits","Highbury Revisited"],
    ["The Invinciballs","Bergkamp and Roll","Wright Said Fred","Thierry and Now","Petit Filous XI","Adams Family Values","Good Ebening XI","One Nil to the Arsenal"]),
  nameCollection("aston-villa", "Aston Villa", "Villa Park, claret-and-blue history and current-player ideas for Aston Villa managers.",
    ["Watkins the Dog","Rogers That","Onana What's My Name","Konsa Business","Cash Converter XI","Mings Dynasty"],
    ["Villa Thriller","Claret Expectations","Holte End Heroes","Villa Parklife","B6 and the City","Lions Share FC"],
    ["McGrath Expectations","Gabby Road","Benteke Fried Chicken","Bosnich and Chips","Dwight Stuff","European Cupboard"]),
  nameCollection("bournemouth", "AFC Bournemouth", "Bournemouth names drawn from the current side, the south coast and Dean Court.",
    ["Evanilson Wonderland","Semenyo Business","Kluivert Acts","Cook the Books","Tavernier Please","Cherries on Top"],
    ["Dean Court Drama","Boscombe Ballers","South Coast Goals","Cherry Pickers XI","Vitality Check","Red and Black Attack"],
    ["Howe About That","Jermaine Defoe-nitely","Begovic and Chips","Cherries Jubilee","Coast Is Clear","Boscombe Back Again"]),
  nameCollection("brentford", "Brentford", "Bee-themed, west-London and current-player names for Brentford fantasy teams.",
    ["Thiago a Go Go","Mbeumo No More","Wissa Business","Collins Dictionary","Flekken Brilliant","Nørgaardians"],
    ["Bees Knees XI","Gtech Support","Brentford and Beyond","Hive Mind FC","West London Buzz","Bee Positive"],
    ["Griffin Parklife","Marcondes of Quality","Toney Award Winners","Bees Back Catalogue","Buzz Light XI","The Old Braemar Road"]),
  nameCollection("brighton", "Brighton & Hove Albion", "Seagulls, south-coast culture and Brighton player puns for the new season.",
    ["Mitoma Prime","Dunk and Disorderly","Verbruggen Rights","Baleba Believe It","João Must Go On","Minteh Fresh"],
    ["Seagulls and Chips","Amex Appeal","Hove Actually","Brighton Up","Pier Pressure XI","Sussex by the Sea"],
    ["Gross Misconduct","Murray Christmas","Zamora the Merrier","Withdean Warriors","Albion Again","Potter Than Ever"]),
  nameCollection("chelsea", "Chelsea", "Clean Chelsea puns built around the current squad, Stamford Bridge and archive favourites.",
    ["Palmer Violets","Cole Blooded","Cucurella De Vil","The Neto Result","João Must Go On","Caicedo With Me","Enzo the Night","Gusto Be Kidding"],
    ["Stamford Fridge","Blue Is the Colour","Bridge Over Troubled Water","London Is Blue-ish","Kings Road Runners","Pensioners Plan","Blue Borough XI","West London Calling"],
    ["Drogba the Builder","Hazard Warning","Lampard in the Dark","Cech Yourself","Makelele Believe","Zola Eclipse","JT Phone Home","Di Matteo Fact"]),
  nameCollection("coventry-city", "Coventry City", "Sky Blues, Coventry culture and archive-inspired names for the promoted club.",
    ["Sky Blue Thinking","Coventry Calling","City of Goals","CBS Arena Ballers","Promotion Motion","Blue Ribbon XI"],
    ["Lady Godiva's XI","Two-Tone Tactics","Ring Road Runners","Sent to Coventry","Sky Blue Army","Cathedral City FC"],
    ["Huckerby Finn","Dion and On","Hadji's Heroes","Highfield Roadies","Keane to Score","Micky Quinn It"]),
  nameCollection("crystal-palace", "Crystal Palace", "South London, Selhurst Park and current Palace player puns.",
    ["Eze Come Eze Go","Mateta of Fact","Muñoz Better Blues","Wharton Earth","Guehi Whiz","Henderson Rules"],
    ["Palace Intrigue","Selhurst and Found","Eagle Eyed XI","South London Calling","Glaziers Gonna Glaze","Red and Blue Moon"],
    ["Zaha Hadid XI","Jedinak's Midnight Runners","AJ Tracey Goals","Wright Place Wright Time","Bolasie Through Life","The Crystals"]),
  nameCollection("everton", "Everton", "Goodison memories, the new stadium era and current Everton-player ideas.",
    ["Pickford and Mix","Ndiaye Another Day","Branthwaite Here","Garner Attention","Myko Drop","Beto Together"],
    ["Toffee Crisp XI","Goodison Goodbye","School of Science","Royal Blue Moon","Dockside Blues","Nil Satis XI"],
    ["Cahill the Gang","Arteta Believe It","Baines on Toast","Fellaini the Roof","Yakubu Can Dance","Southall Stars"]),
  nameCollection("fulham", "Fulham", "Craven Cottage, west London and clean Fulham fantasy football names.",
    ["Leno Me Your Ears","Iwobi-Wan Kenobi","Smith Rowe Your Boat","Andersen Shelter","Robinson Crusoe XI","Muniz Business"],
    ["Cottage Industry","Putney End Product","Thames the Day","Fulham and Void","Black and White Night","Riverside XI"],
    ["Boa Morte Than Words","Dempsey Roll","Saha So Good","The Tigana Turn","Craven Haven","Johnny Haynes Train"]),
  nameCollection("hull-city", "Hull City", "Tigers, the Humber and promoted-club optimism for Hull City managers.",
    ["McBurnie Notice","Tigers on Tour","Hull or High Water","City of Culture XI","Black and Amber","Humber Goals"],
    ["The Deep Defence","KC and the Sunshine","East Yorkshire XI","Tiger Feet","Boothferry Ballers","Hull Yeah"],
    ["Windass in the Willows","Bullard Market","Geovanni Be Good","Barmby Army","Dean Windass Again","Fer Ark It"]),
  nameCollection("ipswich-town", "Ipswich Town", "Portman Road, Suffolk and Tractor Boys ideas for the new campaign.",
    ["Tractor Beam XI","Portman Roadies","Suffolk Punch","Town Called Malice","Blue Action","Ipswich Please"],
    ["Tractor Boys Club","East Anglian Express","Blue Suffolk Sky","The Orwell XI","Portman Pressure","Harvesting Points"],
    ["Kieran and Able","Bent Goals","Magic of Mariner","Wark This Way","Burley's Heroes","Sir Alf's XI"]),
  nameCollection("leeds-united", "Leeds United", "Leeds names from Elland Road, Yorkshire culture and the current squad.",
    ["Gnonto Stop Me Now","Meslier Than Thou","Leeds by Example","Ampadu About You","James and the Giant Points","Struijk a Light"],
    ["Elland Back","Marching On Together-ish","Yorkshire Puddings XI","Leeds the Way","The Peacock Strut","West Yorkshire XI","All Leeds Aren't We","White Noise"],
    ["Bielsa Memories","Viduka Feel Good","Kewell Runnings","Batty Boys XI","Yeboah Constrictor","Radebe or Not","Lorimerick FC","Revie Revival"]),
  nameCollection("liverpool", "Liverpool", "Liverpool team names spanning the current side, Anfield and archive nostalgia.",
    ["Virgil's on Fire","Alisson Wonderland","Szobo Cop","Mac Allisterpiece","Slot Machines","Gakpo and Roll","Konaté Kid","Gravenberch Day"],
    ["Anfield of Dreams","Red Letter Day","The Kop Idles","Heavy Metal Football","You'll Never Score Alone","Mersey Paradise","This Is Anfield XI","Boot Room Reloaded"],
    ["Mo Problems","You'll Never Walk Alonso","Kenny Loggins XI","Rush Hour","Fowler Play","Gerrard Way","Torres de France","Paisley Patterns"]),
  nameCollection("manchester-city", "Manchester City", "Manchester City names featuring current stars, Pep-era references and Maine Road nostalgia.",
    ["Haalandaise Sauce","Gvardiol of Honour","Foden Around","Doku and the Beast","Semenyo Business","Guéhi Whiz","Pep Talk","Rico Suave XI"],
    ["Blue Moon Rising","Etihad and Seek","City Slickers","Sky Blue Thinking","Manchester Is Blue-ish","Treble Makers","Possession Obsession","Noisy Neighbours XI"],
    ["No Rodri No Party","Kinkladze of Glory","Maine Roadies","Goater Than Ever","Aguero Somewhere","Silva Service","Yaya Ding Dong","Kompany Policy"]),
  nameCollection("manchester-united", "Manchester United", "Manchester United puns for managers who still believe every August can be the one.",
    ["Bruno Mars","Mainoo Event","Shaw Thing","Diallo M for Murder","Amad World","De Ligt Club","Onana Matata","Mount Rushmore XI"],
    ["Old Trafford Traffic","Carrick On Winning","The Theatre of Memes","United We Standings","Devils in Detail","Stretford End Product","Red Letter Devils","M16 and Counting"],
    ["Class of Twenty-Six","Cantona Believe It","Scholes Goals","Giggs Economy","Beckham Palace","Keane and Able","Neville Wears Prada","Rooney Tunes"]),
  nameCollection("newcastle-united", "Newcastle United", "Newcastle names built around St James' Park, current players and familiar Geordie references.",
    ["Isak and You Shall Find","Gordon Bennett","Bruno G Force","Pope Fiction","Tonali Vision","Barnes and Noble"],
    ["Howe's That","Toon Soon","The Magpie High Club","St James' Parklife","Black and White Noise","Geordie Shoreline"],
    ["Newcastle Brown Goals","Shearer Delight","Given Sunday","Nobby's Nuts","Beardsley's XI","Cole Powered"]),
  nameCollection("nottingham-forest", "Nottingham Forest", "City Ground, Trentside and current Forest-player fantasy names.",
    ["Wood You Believe It","Gibbs White Noise","Murillo on the Wall","Sels Like Team Spirit","Elanga Language","Danilo and Stitch"],
    ["Forest Gumption","City Ground Control","Tricky Trees XI","Robin Hood Press","Trent End Product","Garibaldi Goals"],
    ["Clough Said Fred","Pearce Pressure","Collymore Please","Birtles and Pieces","European Cupboard","Forest Forever"]),
  nameCollection("sunderland", "Sunderland", "Stadium of Light, Wearside and Black Cats names for the new campaign.",
    ["Black Cat Energy","Wearside Story","Light Work XI","Mackem Believe","Roker Rollers","Sunderland Till Half-Time"],
    ["Stadium of Delight","Red and White Night","Tyne-Wear Tactics","The Mackem XI","North East Express","Wise Men Say XI"],
    ["Quinn It to Win It","Phillips Screw XI","Defoe Sure","Roker Parklife","Super Kev Seven","Montgomery Burns"]),
  nameCollection("tottenham-hotspur", "Tottenham Hotspur", "Spurs team names with enough optimism to survive the first difficult Gameweek.",
    ["Porro Decisions","Madd About You","Solanke You Very Much","Vicario Secret","Spurs of the Moment","Kulusevski Business","Bentancur Feel It","Van de Ven Diagram"],
    ["Hotspur Summer","North London Calling","Tottenham Court Road","Lilywhite Lies","To Dare Is to Do Points","N17 Forever","White Hart Brain","The Cockerel Crew"],
    ["Son and Done","Bale Force","Defoe Sure","Moura the Merrier","Ginola Tonic","Ledley Goals","Klinsmann Machine","Gascoigne Up"]),
];

export const fantasyNameStyles = [
  { slug:"funny", name:"Funny", description:"Quick, recognisable puns for a group chat or mini-league.", names:["Game of Throw-Ins","Expected Toulouse","Rice Rice Baby","Haalandaise Sauce","Ctrl Alt De Ligt","Palmer Violets","Eze Come Eze Go","VAR and Peace","Clean Sheet Happens","Watkins the Dog","Isak and You Shall Find","Gvardiol of Honour","Bruno Mars","Saka Potatoes","Obi-Wan Iwobi","Net Six and Chill"] },
  { slug:"clean", name:"Clean", description:"Work-league and family-friendly names without awkward explanations.", names:["The Assistants","Net Results","Goals Aloud","Expected Success","Top Bins Society","The Set Piece","Monday Review FC","The Clean Sheets","Eleven Up","The Final Whistle","The Touchline Thinkers","The Dugout Club","Weekend Wanderers","The Away End","One More Transfer","Deadline Day XI"] },
  { slug:"clever", name:"Clever", description:"Football language, statistics and tactics with a sharper twist.", names:["The xG Files","Expected Toulouse","VAR and Peace","Low Block Party","The Half-Space Cadets","False Nine to Five","The Overlap Society","Pressing Matters","Marginal Gains XI","The Rest Defence","Box Midfield Office","Transition Period","The Inverted Fullbacks","Possession Is Nine Tenths","Return of the xG","The Bonus Point"] },
  { slug:"retro", name:"Retro", description:"Archive favourites and player puns that deserve another season.", names:["Crouch Potato","Neville Wears Prada","Enter Shaqiri","Lallanas in Pyjamas","Murder on Zidane's Floor","Teenage Mutant Ninja Skrtels","Gangsters Allardyce","Flying Without Ings","Moves Like Agger","Wright Said Fred","Bergkamp and Roll","Cantona Believe It","Scholes Goals","Zola Eclipse","Shearer Delight","Drogba the Builder"] },
  { slug:"mini-league", name:"Mini-league", description:"Names for the whole league rather than one manager's team.", names:["The Monday Morning Review","Champions of the Group Chat","The Expected Goals Society","The Last-Minute Wildcards","The Bench Warmers Union","The Accidental Captains","Spreadsheet Ultras","Gameweek and the City","The Office VAR Room","The Transfer Window Shoppers","Deadline Dodgers","The Captaincy Committee","The Kneejerk Society","The Bonus Point Club","No Context Transfers","The Sunday Night Rankings"] },
];

export const fantasyPlayerNameCollections = [
  { slug:"erling-haaland", player:"Erling Haaland", club:"Manchester City", names:["Haalandaise Sauce","Haaland Oates","Haaland Before Time","Haaland Globetrotters","Erling Warning","Haaland Order","Haaland Days Night","Haaland Drive","Haaland Seek","Haaland Empire","Haaland About That","Erling Doors"] },
  { slug:"bukayo-saka", player:"Bukayo Saka", club:"Arsenal", names:["Saka Potatoes","Saka Punch","Saka the Net","Saka Service","Saka Tomorrow","Saka and Awe","Saka to the Future","Bukayo Believe It","Saka Claus XI","Saka Race","Saka the Difference","Saka Lot"] },
  { slug:"cole-palmer", player:"Cole Palmer", club:"Chelsea", names:["Palmer Violets","Cole Blooded","Cold Palmer","Palmer Calmly","No Palmer No Party","Cole of Duty","Palmer Chameleon","Ice Cole XI","Cole Standard","Palm Reading XI","Cole Play","Palmer Lucky"] },
  { slug:"bruno-fernandes", player:"Bruno Fernandes", club:"Manchester United", names:["Bruno Mars","Bruno Direction","Fernandes and Found","We Don't Talk About Bruno","Bruno Your Mind","Bruno Service","Bruno Point","Fernandes Club","Bruno Again","Bruno There","Captain Bruno","Bruno the Red"] },
  { slug:"alexander-isak", player:"Alexander Isak", club:"Newcastle United", names:["Isak and You Shall Find","Isak Newton","Isak the Net","Isak of You","Isak Attack","Isakly Business","Isak Time","Isak to Basics","Isak the Difference","Isak in the City","Isak and Roll","Isakly Right"] },
  { slug:"ollie-watkins", player:"Ollie Watkins", club:"Aston Villa", names:["Watkins the Dog","Watkins on Sunshine","Watkins This Way","Watkins Tall","Watkins Wonder","Watkins the Line","Ollie Good Time","Watkins the Park","Ollie or Nothing","Watkins Around","Watkins to Glory","Watkins Point"] },
  { slug:"eberechi-eze", player:"Eberechi Eze", club:"Crystal Palace", names:["Eze Come Eze Go","Eze Does It","Eze Like Sunday Morning","Eze Street","Eze Rider","Eze Peasy XI","Take It Eze","Eze Money","Eze Choice","Eze Target","Eze Living","Eze on the Eye"] },
  { slug:"phil-foden", player:"Phil Foden", club:"Manchester City", names:["Foden Around","Foden the Gap","Phil Your Boots","Foden Opportunity","Phil Good XI","Foden Telephone","Foden Finish","Phil the Points","Foden Chair","Foden Service","Phil Time","Foden Motion"] },
];

export const leagueNameIdeas = ["The Expected Goals Society","No Kane No Gain League","The Monday Morning Review","Net Six and Chill","The Office VAR Room","Gameweek and the City","The Transfer Window Shoppers","The Bench Warmers Union","Champions of the Group Chat","The Accidental Captains","Spreadsheet Ultras","The Last-Minute Wildcards"];
export const punishmentIdeas = ["Write a sincere 200-word apology to the winning manager","Use the winner's chosen profile picture for seven days","Serve drinks at the end-of-season gathering","Wear a rival-colour scarf for one match","Record a dramatic reading of the final league table","Let the winner rename next season's league"];
export const prizeIdeas = ["A deliberately tiny trophy","First choice in next season's draft order","A framed screenshot of the final table","A retro football shirt voucher","Dinner paid for by the bottom three","Permanent bragging rights in the group description"];
