import React from "react";
import { SERIF, type WorkshopBatch } from "@/features/academy/strategic-ai-collaboration/constants";

interface EventCardProps {
  batch: WorkshopBatch;
  label: string;
  calendarUrl: string;
  calendarLabel: string;
}

export function EventCard({ batch, label, calendarUrl, calendarLabel }: EventCardProps) {
  return (
    <div className="flex flex-col gap-5 rounded-lg bg-[#16130F] p-6 text-[#FAF7F2] sm:p-8">
      <span className="text-[12.5px] font-bold uppercase tracking-[0.1em] text-[#B5ACA2]">{label}</span>
      <div className="flex flex-col gap-1">
        <span className={`${SERIF} text-[clamp(26px,3.4vw,34px)] font-medium leading-tight`}>{batch.date}</span>
        <span className="text-[17px] text-[#E6E0D7]">
          {batch.code} · {batch.time} · Zoom · 3 jam
        </span>
      </div>
      <a
        href={calendarUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-12 w-fit items-center justify-center rounded-md bg-[#F26522] px-[22px] text-base font-bold text-[#16130F] transition-[background-color,transform] duration-150 hover:bg-[#E0571A] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAF7F2]"
      >
        {calendarLabel}
      </a>
    </div>
  );
}
