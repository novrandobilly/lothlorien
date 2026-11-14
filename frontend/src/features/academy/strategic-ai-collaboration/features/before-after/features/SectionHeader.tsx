import React from "react";
import { SERIF } from "../../../constants";

interface SectionHeaderProps {
  title: string;
  intro: string;
}

export function SectionHeader({ title, intro }: SectionHeaderProps) {
  return (
    <div className="flex flex-wrap items-end gap-x-16 gap-y-5 border-b border-[#16130F] pb-7">
      <h2
        className={`${SERIF} m-0 min-w-0 flex-[1.2_1_420px] text-[clamp(34px,4.4vw,56px)] font-medium leading-[1.05] tracking-[-0.02em]`}
      >
        {title}
      </h2>
      <p className={`${SERIF} m-0 min-w-0 flex-[1_1_320px] text-[clamp(18px,1.8vw,20px)] leading-relaxed text-[#3D3833]`}>
        {intro}
      </p>
    </div>
  );
}
