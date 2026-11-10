import React from "react";
import { SERIF } from "../../../constants";
import { WorkshopStep } from "../constants";

interface StepItemProps {
  step: WorkshopStep;
}

export function StepItem({ step }: StepItemProps) {
  return (
    <li className="flex flex-col gap-2.5 border-t border-[#16130F] pt-6 pb-8">
      <span aria-hidden="true" className={`${SERIF} text-[56px] leading-none text-[#F26522]`}>
        {step.number}
      </span>
      <h3 className={`${SERIF} m-0 text-[26px] font-medium leading-tight`}>{step.title}</h3>
      <p className="m-0 text-base leading-relaxed text-[#3D3833]">{step.description}</p>
    </li>
  );
}
