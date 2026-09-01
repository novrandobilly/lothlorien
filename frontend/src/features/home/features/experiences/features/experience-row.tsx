import React from "react";
import { Experience } from "../constants";

interface ExperienceRowProps {
  experience: Experience;
}

export function ExperienceRow({ experience }: ExperienceRowProps) {
  return (
    <div className="py-7 sm:py-9 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 group">
      {/* Left Column: Company & Period */}
      <div className="md:w-5/12">
        <h3 className="text-xl sm:text-2xl font-normal text-stone-900 tracking-tight group-hover:text-emerald-950 transition-colors">
          {experience.company}
        </h3>
        <p className="text-sm text-stone-500 mt-1.5 flex items-center gap-1.5">
          <span className="text-stone-400">•</span>
          <span>{experience.period}</span>
        </p>
      </div>

      {/* Middle Column: Role & Summary */}
      <div className="md:w-4/12">
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
          {experience.description}
        </p>
      </div>

      {/* Right Column: Skill / Category Tags */}
      <div className="md:w-3/12 flex flex-wrap items-center md:justify-end gap-2 shrink-0">
        {experience.tags.map((tag) => (
          <span
            key={tag}
            className="px-4 py-1.5 rounded-full text-xs font-medium bg-stone-200/60 text-stone-700 border border-stone-300/60 hover:border-stone-400/80 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
