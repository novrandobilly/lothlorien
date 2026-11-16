import type { WorkshopBatch } from "@/features/academy/strategic-ai-collaboration/constants";

interface CalendarEventInput {
  batch: WorkshopBatch;
  title: string;
  details: string;
}

// Google Calendar "add event" template link. No API or account needed on our side.
export function buildGoogleCalendarUrl({ batch, title, details }: CalendarEventInput): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${batch.calendarStart}/${batch.calendarEnd}`,
    details,
    location: "Zoom",
    ctz: "Asia/Jakarta",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
