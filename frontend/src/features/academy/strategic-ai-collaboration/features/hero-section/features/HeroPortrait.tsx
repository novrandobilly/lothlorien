import React from "react";
import { SERIF } from "../../../constants";
import { PhotoPlaceholder } from "../../../components/PhotoPlaceholder";

interface HeroPortraitProps {
  label: string;
  description: string;
  name: string;
  role: string;
}

export function HeroPortrait({ label, description, name, role }: HeroPortraitProps) {
  return (
    <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-3.5">
      <PhotoPlaceholder label={label} description={description} className="aspect-[4/5]" />
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-t border-[#16130F] pt-3">
        <span className={`${SERIF} text-[22px] italic`}>{name}</span>
        <span className="text-[13px] text-[#6E665E]">{role}</span>
      </div>
    </div>
  );
}
