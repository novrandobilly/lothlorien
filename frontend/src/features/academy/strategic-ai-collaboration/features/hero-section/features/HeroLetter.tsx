import React from "react";
import { SERIF, ENROLL_ANCHOR, LETTER_ANCHOR } from "../../../constants";
import { CtaLink } from "../../../components/CtaLink";
import { TextLink } from "../../../components/TextLink";
import { HeroContent } from "../constants";

interface HeroLetterProps {
  content: HeroContent;
}

function renderParagraph(text: string, highlight: string) {
  const [before, after] = text.split("{highlight}");
  if (after === undefined) return text;
  return (
    <>
      {before}
      <span className="bg-[#FBEADF] px-1 text-[#16130F]">{highlight}</span>
      {after}
    </>
  );
}

export function HeroLetter({ content }: HeroLetterProps) {
  const [lineOne, lineTwo] = content.titleLines;

  return (
    <div className="flex min-w-0 flex-[1.4_1_560px] flex-col gap-6 sm:gap-7">
      <div className="flex flex-col gap-[18px]">
        <h1
          className={`${SERIF} m-0 text-[clamp(46px,12vw,96px)] font-medium leading-[0.95] tracking-[-0.035em]`}
        >
          <span className="block">{lineOne}</span>
          <span className="block">
            {lineTwo}
            <span className="text-[#F26522]">?</span>
          </span>
        </h1>
        <p
          className={`${SERIF} m-0 text-[clamp(19px,2vw,26px)] italic leading-snug text-[#3D3833]`}
        >
          {content.subtitle}
        </p>
      </div>

      <div
        className={`${SERIF} flex flex-col gap-[18px] text-[clamp(18px,1.8vw,21px)] leading-relaxed text-[#3D3833]`}
      >
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph} className="m-0">
            {renderParagraph(paragraph, content.highlight)}
          </p>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-x-7 gap-y-3 pt-1">
        <CtaLink href={ENROLL_ANCHOR} className="w-full sm:w-auto">
          {content.primaryCta}
        </CtaLink>
        <TextLink href={LETTER_ANCHOR}>{content.secondaryCta}</TextLink>
      </div>
    </div>
  );
}
