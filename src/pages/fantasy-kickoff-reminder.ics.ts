export function GET() {
  const calendar = [
    "BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Last Season//Fantasy Planning Reminder//EN","CALSCALE:GREGORIAN",
    "BEGIN:VEVENT","UID:fantasy-kickoff-2026@lastseason.co.uk","DTSTAMP:20260721T080000Z","DTSTART:20260820T180000Z",
    "SUMMARY:Review your fantasy football first draft","DESCRIPTION:Check confirmed prices injuries starting roles and the official deadline before finalising your team. Planning tools: https://lastseason.co.uk/fantasy-football/my-plan/",
    "URL:https://lastseason.co.uk/fantasy-football/my-plan/","DURATION:PT30M","END:VEVENT","END:VCALENDAR",
  ].join("\r\n");
  return new Response(calendar,{headers:{"content-type":"text/calendar; charset=utf-8","content-disposition":"attachment; filename=last-season-fantasy-reminder.ics","cache-control":"public, max-age=86400"}});
}
