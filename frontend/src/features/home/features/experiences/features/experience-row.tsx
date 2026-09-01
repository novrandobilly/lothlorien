import React from "react";
import { Experience } from "../constants";

interface ExperienceRowProps {
  experience: Experience;
}

export function ExperienceRow({ experience }: ExperienceRowProps) {
  return (
    <div className="py-7 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 group">
      {/* Left Column: Company & Period */}
      <div className="md:w-5/12">
        <h3 className="text-xl sm:text-2xl font-normal font-serif text-stone-100 tracking-tight group-hover:text-amber-200 transition-colors">
          {experience.company}
        </h3>
        <p className="text-xs sm:text-sm text-stone-400 mt-1.5 flex items-center gap-2">
          <span className="text-amber-400/80">◆</span>
          <span>{experience.period}</span>
        </p>
      </div>

      {/* Middle Column: Role & Summary */}
      <div className="md:w-4/12">
        <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
          {experience.description}
        </p>
      </div>

      {/* Right Column: Skill / Category Tags */}
      <div className="md:w-3/12 flex flex-wrap items-center md:justify-end gap-2 shrink-0">
        {experience.tags.map((tag) => (
          <span
            key={tag}
            className="px-3.5 py-1 rounded-full text-xs font-medium bg-[#131724] text-stone-300 border border-stone-800/90 hover:border-amber-500/40 hover:text-amber-200 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
