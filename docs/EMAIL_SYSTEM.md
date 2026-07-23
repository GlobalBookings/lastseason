# Last Season email system

## Production setup

- Signup endpoint: `POST /api/fantasy-interest`
- Consent source of truth: Cloudflare D1, table `fantasy_interests`
- Delivery provider: Resend
- Sender: `Last Season <briefing@lastseason.co.uk>`
- Reply-to: `jack@lastseason.co.uk`
- Worker secret: `RESEND_API_KEY` in Cloudflare (never commit the value)

Every valid signup is written to D1 first, then synced to Resend. The Resend contact receives explicit topic preferences for:

- Fantasy gameweek briefing
- Supporter plan updates

Both topics default to opt-out, so a contact only receives a topic after choosing it on the site. A first-time signup receives one transactional welcome email. Repeat submissions update the existing contact and topic choices without sending another welcome.

## Sending a briefing

1. Create a Broadcast in Resend.
2. Select the **Fantasy gameweek briefing** topic.
3. Send from `Last Season <briefing@lastseason.co.uk>`.
4. Use `jack@lastseason.co.uk` as the reply-to address.
5. Send a test, check desktop and mobile rendering, then schedule or send.

Resend Broadcasts provide unsubscribe and preference-management links. Never send a briefing as a loop of transactional API calls.

## Data and deletion

D1 retains the signup source, consent time, last update, status and the two selected interests. Resend stores the delivery contact and topic state. A deletion request must remove the address from both systems. A global Resend unsubscribe must not be silently reversed except by a new explicit signup from that address.

## Operational checks

- Confirm `lastseason.co.uk` remains verified in Resend.
- Keep DKIM and SPF records in Cloudflare DNS.
- Review Resend bounces and complaints before each campaign.
- Keep the Cloudflare Email Routing destination for `jack@lastseason.co.uk` active so replies are received.
