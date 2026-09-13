"use client";

import React from "react";
import { Code2, Sparkles, Layers } from "lucide-react";
import { transfezSubProjects } from "../constants";

export function TransfezModalContent() {
  return (
    <div className="space-y-6 max-h-[75vh] overflow-y-auto pr-1">
      {/* Header Context */}
      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm">
        <div className="flex items-center gap-2 font-semibold text-amber-900 mb-1">
          <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
          <span>Corporate Works Showcase &bull; Senior Frontend Engineer</span>
        </div>
        <p className="text-stone-600 text-xs leading-relaxed">
          Overview of major initiatives and enterprise systems engineered at Transfez.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {transfezSubProjects.map((project, index) => (
          <div
            key={project.id}
            className="p-5 rounded-2xl bg-stone-50 border border-stone-200 hover:border-amber-400/80 transition-colors shadow-xs"
          >
            {/* Top row: Title & Status */}
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-amber-700 font-mono">
                  Project {index + 1} &bull; {project.category}
                </span>
                <h4 className="text-lg font-sans font-bold text-stone-900 mt-0.5">
                  {project.title}
                </h4>
              </div>

              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {project.status}
              </span>
            </div>

            {/* Role & Summary */}
            <p className="text-xs text-stone-500 mb-2.5 flex items-center gap-2">
              <span className="text-stone-700 font-semibold">Role:</span>
              <span>{project.role}</span>
            </p>

            <p className="text-sm text-stone-700 leading-relaxed font-sans mb-4">
              {project.summary}
            </p>

            {/* Key Contributions */}
            <div className="space-y-2 mb-4">
              <div className="text-xs font-semibold text-stone-800 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-amber-600" />
                <span>Key Engineering Contributions:</span>
              </div>
              <ul className="space-y-1.5 pl-1">
                {project.contributions.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2 text-xs text-stone-600">
                    <span className="text-amber-600 font-bold mt-0.5">•</span>
                    <span className="leading-normal">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-3 border-t border-stone-200 flex flex-wrap items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-stone-400 mr-1" />
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white text-stone-700 border border-stone-200 shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
