export function GET() {
  const calendar = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Last Season//Daily Challenge//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    "UID:daily@lastseason.co.uk",
    "DTSTAMP:20260720T070000Z",
    "DTSTART:20260721T073000",
    "RRULE:FREQ=DAILY",
    "SUMMARY:Play Last Season Daily",
    "DESCRIPTION:A new football history challenge is ready: https://lastseason.co.uk/daily/",
    "URL:https://lastseason.co.uk/daily/",
    "DURATION:PT5M",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  return new Response(calendar, {
    headers: {
      "content-type": "text/calendar; charset=utf-8",
      "content-disposition": "attachment; filename=last-season-daily.ics",
      "cache-control": "public, max-age=86400",
    },
  });
}
