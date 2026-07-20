# Search performance review

The sitemap entry point is `https://lastseason.co.uk/sitemap-index.xml`.

## Release-day baseline

Record the release date and deployed Worker version, then confirm:

- Google Search Console and Bing Webmaster Tools both show the sitemap as submitted.
- The six `2025-26` league URLs and `/compare/` return HTTP 200 and have self-referencing canonicals.
- Search Console URL Inspection can fetch the Arsenal 2025-26 page and the Invincibles comparison.
- GA4 receives page views only after consent and records `retailer_click` for consented retailer-link clicks.

## Seven-day review

Compare the last seven days with the seven days before release:

- indexed pages and sitemap-discovered URLs;
- impressions, clicks, click-through rate and average position for `2025-26`, `final table`, `top scorers`, `Arsenal champions` and `Invincibles` queries;
- queries and landing pages with high impressions but CTR below the site average;
- excluded/crawled-not-indexed pages and canonical mismatches;
- retailer clicks by retailer and kit context.

Prioritise title/description changes only where impressions are meaningful. Do not rewrite pages based on one or two impressions.

## Twenty-eight-day review

- Compare 28 days after release with the preceding 28 days.
- Group performance by league pages, comparison pages, club/player pages, records/tools and kit pages.
- Expand comparison pages only where the first four earn impressions or links.
- Check affiliate applications, approved tracking links, earnings per click, conversion rate and broken retailer searches.
- Review Core Web Vitals, 404s, redirect chains and sitemap status.
- Re-audit any season that receives a correction report.

## Decision rules

- High impressions + low CTR: test a more specific title and description.
- Position 8–20 + useful page: add internal links and unique analysis before creating more URLs.
- Crawled but not indexed: improve or consolidate the page; do not submit it repeatedly.
- No impressions after 28 days: check indexability, internal links and search intent before expanding that template.
- Affiliate clicks but no sales: inspect query relevance, stock and retailer fit before adding more merchants.
