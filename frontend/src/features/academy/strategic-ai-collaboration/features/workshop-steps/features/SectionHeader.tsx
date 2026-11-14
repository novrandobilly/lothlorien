import React from "react";
import { SERIF } from "../../../constants";

interface SectionHeaderProps {
  title: string;
  intro: string;
}

export function SectionHeader({ title, intro }: SectionHeaderProps) {
  return (
    <div className="flex max-w-[720px] flex-col gap-4">
      <h2 className={`${SERIF} m-0 text-[clamp(34px,5vw,56px)] font-medium leading-[1.05] tracking-[-0.02em]`}>
        {title}
      </h2>
      <p className={`${SERIF} m-0 text-[clamp(18px,1.8vw,21px)] leading-relaxed text-[#3D3833]`}>{intro}</p>
    </div>
  );
}
