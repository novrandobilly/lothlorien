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
      <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 text-[19px] font-bold leading-snug text-[#16130F] [&::-webkit-details-marker]:hidden">
        {item.question}
        <Plus
          aria-hidden="true"
          className="h-[18px] w-[18px] shrink-0 transition-transform duration-200 group-open:rotate-45"
        />
      </summary>
      <p className={`${SERIF} m-0 mb-[22px] max-w-[640px] border-l-2 border-[#F26522] pl-4 text-[17px] leading-relaxed text-[#6E665E]`}>{item.answer}</p>
    </details>
  );
}
