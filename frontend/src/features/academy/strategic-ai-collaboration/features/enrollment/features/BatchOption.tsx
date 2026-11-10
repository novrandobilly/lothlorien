import React from "react";
import { SERIF, WorkshopBatch } from "../../../constants";

interface BatchOptionProps {
  batch: WorkshopBatch;
  selected: boolean;
  onSelect: (id: string) => void;
}

function seatsText(batch: WorkshopBatch) {
  if (batch.seatsLeft === batch.capacity) return `${batch.capacity} kursi tersedia`;
  return `${batch.seatsLeft} dari ${batch.capacity} kursi tersisa`;
}

// A real radio input inside a label, styled as a card.
export function BatchOption({ batch, selected, onSelect }: BatchOptionProps) {
  const fewSeats = batch.seatsLeft <= batch.capacity * 0.3;

  return (
    <label
      className={`flex cursor-pointer items-start gap-4 rounded border-[1.5px] p-5 transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[#F26522] ${
        selected ? "border-[#F26522] bg-[#221B15]" : "border-[#3D3833] bg-[#1C1814] hover:border-[#6E665E]"
      }`}
    >
      <input
        type="radio"
        name="batch"
        value={batch.id}
        checked={selected}
        onChange={() => onSelect(batch.id)}
        className="sr-only"
      />
      <span
        aria-hidden="true"
        className={`mt-[3px] flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border-2 ${
          selected ? "border-[#F26522]" : "border-[#8F867C]"
        }`}
      >
        {selected && <span className="h-2.5 w-2.5 rounded-full bg-[#F26522]" />}
      </span>
      <span className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <span className="text-[12.5px] font-bold uppercase tracking-[0.1em] text-[#B5ACA2]">{batch.code}</span>
          <span className={`text-[13px] font-semibold ${fewSeats ? "text-[#F7A777]" : "text-[#B5ACA2]"}`}>
            {seatsText(batch)}
          </span>
        </span>
        <span className={`${SERIF} text-2xl leading-tight`}>{batch.date}</span>
        <span className="text-sm text-[#B5ACA2]">{batch.time} · Zoom · 3 jam</span>
        <span className="mt-1.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-xl font-bold">{batch.price}</span>
          {batch.originalPrice && (
            <span className="text-sm text-[#8F867C] line-through">{batch.originalPrice}</span>
          )}
          {batch.priceNote && <span className="text-[13px] font-semibold text-[#F7A777]">{batch.priceNote}</span>}
        </span>
      </span>
    </label>
  );
}
