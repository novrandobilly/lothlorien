import React from "react";
import { SERIF } from "../../constants";
import { salesFaqContent, SalesFaqContent } from "./constants";
import { FaqItem } from "./features/FaqItem";

interface FaqSectionProps {
  content?: SalesFaqContent;
}

export function FaqSection({ content = salesFaqContent }: FaqSectionProps) {
  return (
    <section id="faq" className="scroll-mt-6 px-5 py-16 sm:px-8 lg:py-28">
      <div className="mx-auto flex max-w-[760px] flex-col gap-7">
        <h2 className={`${SERIF} m-0 text-[clamp(30px,4vw,44px)] font-medium leading-[1.1]`}>{content.title}</h2>
        <div className="flex flex-col border-t border-[#16130F]">
          {content.items.map((item, index) => (
            <FaqItem key={item.id} item={item} defaultOpen={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
