import React from "react";
import { Plus } from "lucide-react";
import { SERIF } from "../../../constants";
import { SalesFaqItem } from "../constants";

interface FaqItemProps {
  item: SalesFaqItem;
  defaultOpen?: boolean;
}

// Native <details>: keyboard and screen-reader support without client JS.
export function FaqItem({ item, defaultOpen = false }: FaqItemProps) {
  return (
    <details open={defaultOpen} className="group border-b border-[#E6E0D7]">
      <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-semibold [&::-webkit-details-marker]:hidden">
        {item.question}
        <Plus
          aria-hidden="true"
          className="h-[18px] w-[18px] shrink-0 transition-transform duration-200 group-open:rotate-45"
        />
      </summary>
      <p className={`${SERIF} m-0 mb-[22px] text-[19px] leading-relaxed text-[#3D3833]`}>{item.answer}</p>
    </details>
  );
}
