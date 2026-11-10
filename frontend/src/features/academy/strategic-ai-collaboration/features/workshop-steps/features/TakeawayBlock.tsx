import React from "react";
import { SERIF } from "../../../constants";
import { WorkshopStepsContent } from "../constants";

interface TakeawayBlockProps {
  takeaway: WorkshopStepsContent["takeaway"];
}

export function TakeawayBlock({ takeaway }: TakeawayBlockProps) {
  return (
    <div className="flex flex-wrap gap-x-14 gap-y-6 rounded bg-[#16130F] p-6 text-[#FAF7F2] sm:p-8">
      <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-3.5">
        <p className="m-0 text-[12.5px] font-bold uppercase tracking-[0.1em] text-[#B5ACA2]">{takeaway.eyebrow}</p>
        <p className={`${SERIF} m-0 text-[clamp(22px,2.4vw,28px)] leading-tight`}>{takeaway.headline}</p>
      </div>
      <ul className="m-0 flex min-w-0 flex-[1_1_280px] list-none flex-col p-0 text-base leading-normal text-[#D9D1C5]">
        {takeaway.extras.map((extra) => (
          <li key={extra.label} className="border-b border-[#3D3833] py-2.5 last:border-b-0">
            <strong className="text-[#FAF7F2]">{extra.label}</strong> {extra.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
