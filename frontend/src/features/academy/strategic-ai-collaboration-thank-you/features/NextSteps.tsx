import React from "react";
import { SERIF } from "@/features/academy/strategic-ai-collaboration/constants";
import type { ThankYouStep } from "../constants";

interface NextStepsProps {
  title: string;
  steps: ThankYouStep[];
}

export function NextSteps({ title, steps }: NextStepsProps) {
  return (
    <section className="flex flex-col gap-6">
      <h2 className={`${SERIF} m-0 text-[clamp(26px,3.2vw,34px)] font-medium leading-tight tracking-[-0.01em]`}>
        {title}
      </h2>
      <ol className="m-0 flex list-none flex-col p-0">
        {steps.map((step, index) => (
          <li key={step.title} className="flex gap-5 border-t border-[#E6E0D7] py-5 last:border-b">
            <span className={`${SERIF} w-8 shrink-0 text-[28px] font-medium leading-none text-[#E95E28]`}>
              {index + 1}
            </span>
            <div className="flex flex-col gap-1.5">
              <h3 className="m-0 text-[18px] font-bold leading-snug">{step.title}</h3>
              <p className="m-0 text-[17px] leading-relaxed text-[#6E665E]">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
