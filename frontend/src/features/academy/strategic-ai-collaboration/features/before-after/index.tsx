import React from "react";
import { beforeAfterContent, BeforeAfterContent } from "./constants";
import { SectionHeader } from "./features/SectionHeader";
import { ChatExampleCard } from "./features/ChatExampleCard";

interface BeforeAfterSectionProps {
  content?: BeforeAfterContent;
}

export function BeforeAfterSection({ content = beforeAfterContent }: BeforeAfterSectionProps) {
  return (
    <section id="contoh" className="scroll-mt-6 border-y border-[#E6E0D7] bg-[#F3EEE6] px-5 py-16 sm:px-8 lg:py-28">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12">
        <SectionHeader title={content.title} intro={content.intro} />
        <div className="flex flex-wrap gap-x-14 gap-y-12">
          {content.examples.map((example) => (
            <ChatExampleCard key={example.id} example={example} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeforeAfterSection;
