import React from "react";
import { HowEnvienStudioWorksItem } from "../constants";

interface HowEnvienStudioWorksCardProps {
  item: HowEnvienStudioWorksItem;
}

export function HowEnvienStudioWorksCard({
  item,
}: HowEnvienStudioWorksCardProps) {
  const Icon = item.icon;

  return (
    <div className="group flex flex-col items-start text-left">
      {/* Circular Icon Container matching site design */}
      <div className="w-12 h-12 rounded-full bg-white border border-stone-200/80 flex items-center justify-center text-stone-800 shadow-2xs group-hover:bg-stone-950 group-hover:text-white group-hover:border-stone-950 transition-all duration-300">
        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
      </div>

      {/* Title */}
      <h3 className="mt-3.5 sm:mt-4 text-lg sm:text-xl font-bold font-sans text-stone-950 tracking-tight">
        {item.title}
      </h3>

      {/* Benefit-led text */}
      <p className="mt-1.5 sm:mt-2 text-[16px] text-stone-500 font-sans leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}
