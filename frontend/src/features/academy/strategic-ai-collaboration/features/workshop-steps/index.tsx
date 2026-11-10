import React from "react";
import { workshopStepsContent, WorkshopStepsContent } from "./constants";
import { SectionHeader } from "./features/SectionHeader";
import { StepItem } from "./features/StepItem";
import { TakeawayBlock } from "./features/TakeawayBlock";

interface WorkshopStepsSectionProps {
  content?: WorkshopStepsContent;
}

export function WorkshopStepsSection({ content = workshopStepsContent }: WorkshopStepsSectionProps) {
  return (
    <section id="tiga-jam" className="scroll-mt-6 px-5 py-16 sm:px-8 lg:py-28">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12">
        <SectionHeader title={content.title} intro={content.intro} />
        <ol className="m-0 grid list-none grid-cols-1 gap-x-12 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {content.steps.map((step) => (
            <StepItem key={step.number} step={step} />
          ))}
        </ol>
        <TakeawayBlock takeaway={content.takeaway} />
      </div>
    </section>
  );
}

export default WorkshopStepsSection;
