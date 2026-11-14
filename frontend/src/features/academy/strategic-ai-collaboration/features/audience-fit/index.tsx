import React from "react";
import { audienceFitContent, AudienceFitContent } from "./constants";
import { FitList } from "./features/FitList";

interface AudienceFitSectionProps {
  content?: AudienceFitContent;
}

export function AudienceFitSection({ content = audienceFitContent }: AudienceFitSectionProps) {
  const [fit, notFit] = content.columns;

  return (
    <section id="untuk-siapa" className="scroll-mt-6 border-t border-[#E6E0D7] px-5 py-16 sm:px-8 lg:py-28">
      <div className="mx-auto flex max-w-[1200px] flex-wrap gap-x-16 gap-y-10">
        <FitList column={fit} />
        <FitList column={notFit} />
      </div>
    </section>
  );
}

export default AudienceFitSection;
