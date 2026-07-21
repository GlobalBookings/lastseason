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

export const fantasyUpdated = "21 July 2026";
export const fantasyKickoff = "2026-08-21T20:00:00+01:00";
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

export const clubNameCollections = [
  { slug:"arsenal", name:"Arsenal", intro:"Names inspired by Arsenal's title-winning squad, North London and familiar terrace references.", names:["Rice Rice Baby","Livin' Saliba Loca","Saka Potatoes","Ode to Joy","Gunners and Roses","Gabriel's Inferno","North Bank Notes","Arteta Than Ever","Raya Sunshine","Ødegaardians","The Invinciballs","Emirates of Mind"] },
  { slug:"chelsea", name:"Chelsea", intro:"Clean Chelsea puns built around the current squad and Stamford Bridge.", names:["Palmer Violets","Cole Blooded","Cucurella De Vil","The Neto Result","Stamford Fridge","Blue Is the Colour","Bridge Over Troubled Water","João Must Go On","Caicedo With Me","Enzo the Night","London Is Blue-ish","Chelsea Dagger"] },
  { slug:"liverpool", name:"Liverpool", intro:"Liverpool team names spanning the current side, Anfield and a little archive nostalgia.", names:["Virgil's on Fire","Alisson Wonderland","Szobo Cop","Mac Allisterpiece","Slot Machines","You'll Never Walk Alonso","Anfield of Dreams","Red Letter Day","The Kop Idles","Mo Problems","Gakpo and Roll","Heavy Metal Football"] },
  { slug:"manchester-city", name:"Manchester City", intro:"Manchester City names featuring the champions' familiar stars and Pep-era references.", names:["Haalandaise Sauce","Gvardiol of Honour","Foden Around","Pep Talk","Doku and the Beast","Blue Moon Rising","Etihad and Seek","City Slickers","Semenyo Business","Guéhi Whiz","No Rodri No Party","Sky Blue Thinking"] },
  { slug:"manchester-united", name:"Manchester United", intro:"Manchester United puns for managers who still believe every August can be the one.", names:["Bruno Mars","Mainoo Event","Shaw Thing","Diallo M for Murder","Red Fred Redemption","Old Trafford Traffic","Carrick On Winning","The Theatre of Memes","United We Standings","Amad World","Devils in Detail","Class of Twenty-Six"] },
  { slug:"tottenham-hotspur", name:"Tottenham Hotspur", intro:"Spurs team names with enough optimism to survive the first difficult Gameweek.", names:["Porro Decisions","Madd About You","Solanke You Very Much","Vicario Secret","Spurs of the Moment","Hotspur Summer","Son and Done","North London Calling","Tottenham Court Road","White Hart Lane Brain","Lilywhite Lies","To Dare Is to Do Points"] },
  { slug:"newcastle-united", name:"Newcastle United", intro:"Newcastle names built around St James' Park, current players and familiar Geordie references.", names:["Isak and You Shall Find","Gordon Bennett","Bruno G Force","Howe's That","Toon Soon","The Magpie High Club","St James' Parklife","Black and White Noise","Geordie Shoreline","Pope Fiction","Tyneside Story","Newcastle Brown Goals"] },
  { slug:"leeds-united", name:"Leeds United", intro:"Leeds names for the return to the top flight, from Elland Road to the current squad.", names:["Gnonto Stop Me Now","Meslier Than Thou","Leeds by Example","Elland Back","Marching On Together-ish","White Noise","Yorkshire Puddings XI","Leeds the Way","Bielsa Memories","The Peacock Strut","West Yorkshire XI","All Leeds Aren't We"] },
];

export const leagueNameIdeas = ["The Expected Goals Society","No Kane No Gain League","The Monday Morning Review","Net Six and Chill","The Office VAR Room","Gameweek and the City","The Transfer Window Shoppers","The Bench Warmers Union","Champions of the Group Chat","The Accidental Captains","Spreadsheet Ultras","The Last-Minute Wildcards"];
export const punishmentIdeas = ["Write a sincere 200-word apology to the winning manager","Use the winner's chosen profile picture for seven days","Serve drinks at the end-of-season gathering","Wear a rival-colour scarf for one match","Record a dramatic reading of the final league table","Let the winner rename next season's league"];
export const prizeIdeas = ["A deliberately tiny trophy","First choice in next season's draft order","A framed screenshot of the final table","A retro football shirt voucher","Dinner paid for by the bottom three","Permanent bragging rights in the group description"];
