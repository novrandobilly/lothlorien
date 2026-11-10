import React from "react";
import { SERIF } from "../../../constants";

interface SituationListProps {
  situations: string[];
}

export function SituationList({ situations }: SituationListProps) {
  return (
    <ol className="m-0 flex list-none flex-col border-t border-[#16130F] p-0">
      {situations.map((situation, index) => (
        <li key={situation} className="flex items-baseline gap-5 border-b border-[#E6E0D7] py-[18px]">
          <span className="min-w-6 text-[13px] font-bold tracking-[0.08em] text-[#6E665E]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className={`${SERIF} text-[clamp(19px,2.2vw,23px)] leading-snug`}>{situation}</span>
        </li>
      ))}
    </ol>
  );
}
