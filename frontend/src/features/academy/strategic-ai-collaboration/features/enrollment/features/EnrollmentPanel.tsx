import React from "react";
import { WorkshopBatch } from "../../../constants";
import { EnrollmentContent } from "../constants";
import { BatchCard } from "./BatchCard";

interface EnrollmentPanelProps {
  heading: React.ReactNode;
  openBatches: WorkshopBatch[];
  content: EnrollmentContent;
}

export function EnrollmentPanel({ heading, openBatches, content }: EnrollmentPanelProps) {
  if (openBatches.length === 0) return null;

  return (
    <div className="mx-auto flex max-w-[1200px] flex-wrap items-start gap-x-16 gap-y-12">
      <div className="flex min-w-0 flex-[1.1_1_420px] flex-col gap-6">
        {heading}
        <p className="m-0 max-w-[480px] text-[17px] leading-relaxed text-[#B5ACA2]">{content.lead}</p>
        <div className="flex max-w-[480px] flex-col gap-3 border-t border-[#3D3833] pt-6">
          <h3 className="m-0 text-[12.5px] font-bold uppercase tracking-[0.1em] text-[#B5ACA2]">{content.bring.label}</h3>
          <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
            {content.bring.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[17px] leading-snug text-[#FAF7F2]">
                <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#F26522]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-6">
        {openBatches.map((batch) => (
          <BatchCard
            key={batch.id}
            batch={batch}
            eyebrow={content.cardEyebrow}
            ctaPrefix={content.ctaPrefix}
            notOpenLabel={content.notOpenLabel}
            footnote={content.footnote}
          />
        ))}
      </div>
    </div>
  );
}
