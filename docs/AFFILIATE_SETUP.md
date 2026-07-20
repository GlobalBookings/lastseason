# Affiliate link setup

Last Season never fabricates a partner ID. Direct retailer links remain active until an approved affiliate account supplies a tracking link.

## Supported build variables

- `PUBLIC_EBAY_AFFILIATE_LINK_TEMPLATE`
- `PUBLIC_CFS_AFFILIATE_LINK_TEMPLATE`
- `PUBLIC_VFS_AFFILIATE_LINK_TEMPLATE`

Paste the exact tracking-link format supplied by the relevant partner portal. Templates may contain:

- `{destination}` — URL-encoded direct retailer search URL
- `{query}` — URL-encoded club, season and shirt query
- `{context}` — URL-encoded Last Season page identifier for campaign reporting

If the partner portal produces a fixed tracking URL, it can be used without placeholders. If a network documents a destination/deep-link parameter, put `{destination}` in that parameter. Do not edit or guess tracking-code fields.

## Release checklist

1. Obtain written approval from the retailer or affiliate network.
2. Generate and test a tracking link in the partner portal.
3. Add the corresponding build variable in Cloudflare without committing credentials to Git.
4. Deploy and inspect a kit detail page. The disclosure must say the link may earn commission and the link must have `rel="sponsored nofollow noopener"`.
5. Make one normal click and confirm the `retailer_click` event in GA4 DebugView and the click in the partner portal when reporting becomes available.
6. Review conversion rate, earnings per click and broken retailer searches every 28 days.

eBay also offers Smart Links through its Partner Network portal. If that route is chosen, use eBay's supplied code unchanged and review the site's consent/privacy position before enabling it.
