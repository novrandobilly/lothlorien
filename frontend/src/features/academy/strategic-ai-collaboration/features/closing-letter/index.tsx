import React from "react";
import { SERIF } from "../../constants";
import { PhotoPlaceholder } from "../../components/PhotoPlaceholder";
import { closingLetterContent, ClosingLetterContent } from "./constants";

interface ClosingLetterSectionProps {
  content?: ClosingLetterContent;
}

export function ClosingLetterSection({ content = closingLetterContent }: ClosingLetterSectionProps) {
  return (
    <section id="penutup" className="scroll-mt-6 border-y border-[#E6E0D7] bg-[#F3EEE6] px-5 py-16 sm:px-8 lg:py-28">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-16 gap-y-10">
        <div className="min-w-0 flex-[1_1_360px]">
          <PhotoPlaceholder
            label={content.photo.label}
            description={content.photo.description}
            className="aspect-[3/2] bg-[#EAE3D8]"
          />
        </div>
        <div className="flex min-w-0 flex-[1.1_1_400px] flex-col gap-5">
          <h2 className={`${SERIF} m-0 text-[clamp(30px,4vw,44px)] font-medium leading-[1.1] tracking-[-0.015em]`}>
            {content.title}
          </h2>
          <div className={`${SERIF} flex flex-col gap-4 text-[clamp(18px,1.8vw,20px)] leading-[1.65] text-[#3D3833]`}>
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph} className="m-0">
                {paragraph}
              </p>
            ))}
          </div>
          <div className={`${SERIF} flex flex-col gap-0.5 pt-2`}>
            <span className="text-lg text-[#3D3833]">{content.signOff}</span>
            <span className="text-[30px] italic">{content.signature}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClosingLetterSection;
