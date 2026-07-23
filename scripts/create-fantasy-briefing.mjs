const apiKey = process.env.RESEND_API_KEY;
const segmentId = process.env.RESEND_BRIEFING_SEGMENT_ID;
const args = Object.fromEntries(process.argv.slice(2).map((arg) => {
  const [key, ...rest] = arg.replace(/^--/, "").split("=");
  return [key, rest.join("=") || true];
}));

if (!apiKey || !segmentId) {
  console.error("Set RESEND_API_KEY and RESEND_BRIEFING_SEGMENT_ID before creating a draft.");
  process.exit(1);
}

const week = String(args.week || "Pre-season");
const subject = String(args.subject || `The Last Season ${week} fantasy briefing`);
const pageUrl = String(args.url || "https://lastseason.co.uk/fantasy-football/briefing/");
const preheader = String(args.preheader || "The deadline, role check and three useful next moves.");
const sendNow = args.send === true;
const scheduledAt = typeof args.schedule === "string" ? args.schedule : undefined;

const html = `<!doctype html><html><body style="margin:0;background:#f2f6f3;color:#17251f;font-family:Arial,sans-serif">
<div style="display:none;max-height:0;overflow:hidden">${preheader}</div>
<div style="max-width:620px;margin:0 auto;padding:28px 16px">
  <div style="background:#09141d;color:#fff;border-radius:16px 16px 0 0;padding:28px">
    <div style="color:#b7ff5a;font-size:12px;font-weight:bold;letter-spacing:.12em;text-transform:uppercase">Last Season · ${week}</div>
    <h1 style="margin:12px 0 8px;font-size:34px;line-height:1.05">Your useful fantasy briefing.</h1>
    <p style="margin:0;color:#b9c9d2;line-height:1.6">${preheader}</p>
  </div>
  <div style="background:#fff;border:1px solid #dfe7e2;border-top:0;border-radius:0 0 16px 16px;padding:28px">
    <h2 style="margin-top:0">The decision board</h2>
    <p style="line-height:1.65">The live briefing separates confirmed information from the things still worth monitoring, then links each decision to a transparent tool.</p>
    <p style="margin:26px 0"><a href="${pageUrl}" style="display:inline-block;background:#b7ff5a;color:#09141d;text-decoration:none;font-weight:bold;padding:13px 18px;border-radius:9px">Open the full briefing</a></p>
    <p style="font-size:13px;line-height:1.55;color:#66706b">Independent advice and data—not another fantasy game. <a href="{{{RESEND_UNSUBSCRIBE_URL}}}">Unsubscribe</a>.</p>
  </div>
</div></body></html>`;

const response = await fetch("https://api.resend.com/broadcasts", {
  method: "POST",
  headers: { authorization: `Bearer ${apiKey}`, "content-type": "application/json" },
  body: JSON.stringify({
    segment_id: segmentId,
    from: "Last Season <briefing@lastseason.co.uk>",
    reply_to: "jack@lastseason.co.uk",
    subject,
    html,
    ...(sendNow ? { send: true } : {}),
    ...(scheduledAt ? { scheduled_at: scheduledAt } : {}),
  }),
});

const result = await response.json().catch(() => ({}));
if (!response.ok) {
  console.error(`Resend returned ${response.status}:`, result);
  process.exit(1);
}

console.log(sendNow ? "Broadcast sent:" : scheduledAt ? "Broadcast scheduled:" : "Broadcast draft created:", result.id);
console.log("Review in Resend:", `https://resend.com/broadcasts/${result.id}`);
