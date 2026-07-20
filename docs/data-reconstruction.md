# Season data reconstruction queue

Last reviewed: 20 July 2026

## Outcome

The automated audit examined all 62 unpublished season modules. It checks that:

- every club's played total equals wins, draws and losses;
- goal difference equals goals for minus goals against;
- league-wide goals for equals league-wide goals against;
- league-wide wins equal league-wide losses;
- the headline goal total equals the table total;
- positions and club slugs are unique;
- champion and top-scorer headlines agree with their detail rows.

Three current seasons passed those checks and were then checked against official competition sources before publication:

- Bundesliga 2024-25
- Championship 2024-25
- Serie A 2024-25

Unsupported assists, clean-sheet and award rows were removed rather than published as facts. Incorrect promotion and narrative details were corrected.

## Not publishable yet

Fifty-five modules fail one or more mathematical invariants and remain outside the public league index:

| Competition | Affected candidate files | Count |
| --- | --- | ---: |
| Bundesliga | 2010-11 through 2021-22 | 12 |
| Championship | 2004-05 and 2006-07 through 2020-21 | 16 |
| La Liga | 2005-06 through 2007-08, 2009-10 through 2012-13, 2014-15 through 2020-21, and 2024-25 | 15 |
| Serie A | 2010-11 through 2021-22 | 12 |

These files must be reconstructed from a trusted final table. Editing only the headline total would hide deeper contradictions in most of them.

## Structurally plausible, source review still required

Four historical modules pass the arithmetic audit but have not yet been verified field-by-field against primary sources, so they also remain unpublished:

- Championship 2005-06
- La Liga 2004-05
- La Liga 2008-09
- La Liga 2013-14

## Reconstruction workflow

1. Replace the standings from an official league, federation or governing-body source.
2. Run `npm run audit:data` and resolve every error.
3. Verify champion, top scorer, promoted and relegated clubs independently.
4. Include assists, clean sheets and awards only when a reliable source explicitly supports them.
5. Rewrite the recap from supported facts; do not retain unsourced superlatives or records.
6. Add the season to `src/data/leagues/index.ts` only after the audit and source review pass.
7. Run `npm run validate`, inspect the generated season page and confirm its canonical URL is present in `dist/sitemap-0.xml`.

## Current source set for the three published additions

- Bundesliga: official final table, official season statistics, player-of-the-season announcement, scorer review, relegation play-off report and 2. Bundesliga promotion report.
- Championship: official EFL final-day report, automatic-promotion report and play-off coverage.
- Serie A: official Lega Serie A final-round material, season MVP announcement and promoted-club material.

The audit tool is `scripts/audit-seasons.mjs`. It exits with a non-zero status while invalid candidate files remain, which makes it useful as an editorial gate rather than a cosmetic report.
