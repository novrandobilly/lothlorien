import React from "react";
import { heroContent, HeroContent } from "./constants";
import { InfoStrip } from "./features/InfoStrip";
import { HeroLetter } from "./features/HeroLetter";
import { HeroPortrait } from "./features/HeroPortrait";

interface HeroSectionProps {
  content?: HeroContent;
}

export function HeroSection({ content = heroContent }: HeroSectionProps) {
  return (
    <>
      <InfoStrip items={content.infoStrip} />
      <section
        id="hero"
        className="mx-auto w-full max-w-[1200px] px-5 pt-9 pb-16 sm:px-8 sm:pt-14 lg:pb-[104px]"
      >
        <div className="flex flex-wrap items-start gap-x-16 gap-y-10">
          <HeroLetter content={content} />
          <HeroPortrait
            label={content.portrait.label}
            description={content.portrait.description}
            name={content.signatureName}
            role={content.signatureRole}
          />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
