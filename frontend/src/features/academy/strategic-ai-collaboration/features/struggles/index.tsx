import React from "react";
import { SERIF } from "../../constants";
import { strugglesContent, StrugglesContent } from "./constants";
import { SituationList } from "./features/SituationList";
import { TrapsParagraph } from "./features/TrapsParagraph";
import { PullQuote } from "./features/PullQuote";

interface StrugglesSectionProps {
  content?: StrugglesContent;
}

export function StrugglesSection({ content = strugglesContent }: StrugglesSectionProps) {
  const bodyText = `${SERIF} text-[clamp(18px,1.8vw,21px)] leading-[1.65] text-[#3D3833]`;

  return (
    <section id="surat" className="scroll-mt-6 border-t border-[#E6E0D7] px-5 py-16 sm:px-8 lg:py-28">
      <h2
        className={`${SERIF} mx-auto mb-10 max-w-4xl text-center text-[clamp(34px,5vw,52px)] font-medium leading-[1.05] tracking-[-0.02em] text-balance`}
      >
        {content.title}
      </h2>
      <div className="mx-auto flex max-w-[720px] flex-col gap-10">
        <SituationList situations={content.situations} />
        <div className={`${bodyText} flex flex-col gap-5`}>
          {content.opening.map((paragraph) => (
            <p key={paragraph} className="m-0">
              {paragraph}
            </p>
          ))}
          <TrapsParagraph intro={content.trapsIntro} traps={content.traps} />
        </div>
        <PullQuote text={content.pullQuote.text} emphasis={content.pullQuote.emphasis} />
        <p className={`${bodyText} m-0`}>{content.bridge}</p>
      </div>
    </section>
  );
}

export default StrugglesSection;
