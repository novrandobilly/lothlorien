import React from "react";
import { SERIF } from "../../../constants";
import { FitColumn } from "../constants";

interface FitListProps {
  column: FitColumn;
  children?: React.ReactNode;
}

export function FitList({ column, children }: FitListProps) {
  const muted = column.id === "not-fit";

  return (
    <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-4">
      <h2
        className={`${SERIF} m-0 text-[clamp(28px,3.4vw,38px)] font-medium leading-[1.1] ${
          muted ? "text-[#6E665E]" : ""
        }`}
      >
        {column.title}
      </h2>
      <ul
        className={`${SERIF} m-0 flex list-none flex-col border-t p-0 text-xl leading-snug ${
          muted ? "border-[#6E665E] text-[#3D3833]" : "border-[#16130F]"
        }`}
      >
        {column.items.map((item) => (
          <li key={item} className="border-b border-[#E6E0D7] py-3.5">
            {item}
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}
