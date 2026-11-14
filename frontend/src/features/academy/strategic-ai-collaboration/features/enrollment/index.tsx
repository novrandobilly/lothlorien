import React from "react";
import { SERIF, openBatches as defaultOpenBatches, WorkshopBatch } from "../../constants";
import { enrollmentContent, EnrollmentContent } from "./constants";
import { EnrollmentPanel } from "./features/EnrollmentPanel";

interface EnrollmentSectionProps {
  content?: EnrollmentContent;
  openBatches?: WorkshopBatch[];
}

export function EnrollmentSection({
  content = enrollmentContent,
  openBatches = defaultOpenBatches,
}: EnrollmentSectionProps) {
  return (
    <section id="daftar" className="scroll-mt-6 bg-[#16130F] px-5 py-16 text-[#FAF7F2] sm:px-8 lg:py-28">
      <EnrollmentPanel
        heading={
          <h2 className={`${SERIF} m-0 text-[clamp(36px,5vw,58px)] font-medium leading-[1.02] tracking-[-0.025em]`}>
            {content.title}
            <span className="text-[#F26522]">.</span>
          </h2>
        }
        openBatches={openBatches}
        content={content}
      />
    </section>
  );
}

export default EnrollmentSection;
