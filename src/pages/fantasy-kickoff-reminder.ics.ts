export function GET() {
  const calendar = [
    "BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Last Season//Fantasy Planning Reminder//EN","CALSCALE:GREGORIAN",
    "BEGIN:VEVENT","UID:fantasy-deadline-gw1-2026@lastseason.co.uk","DTSTAMP:20260723T080000Z","DTSTART:20260821T163000Z",
    "SUMMARY:Fantasy GW1 deadline check — one hour to go","DESCRIPTION:Check injuries starting roles captain vice-captain and your final squad before the confirmed 18:30 BST deadline. Control room: https://lastseason.co.uk/fantasy-football/control-room/",
    "URL:https://lastseason.co.uk/fantasy-football/control-room/","DURATION:PT30M","END:VEVENT","END:VCALENDAR",
  ].join("\r\n");
  return new Response(calendar,{headers:{"content-type":"text/calendar; charset=utf-8","content-disposition":"attachment; filename=last-season-fantasy-reminder.ics","cache-control":"public, max-age=86400"}});
}
