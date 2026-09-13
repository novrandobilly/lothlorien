"use client";

import React from "react";
import { Building2, CheckCircle2, Code2, Sparkles, Layers } from "lucide-react";
import { transfezSubProjects } from "../constants";

export function TransfezModalContent() {
  return (
    <div className="space-y-6 max-h-[75vh] overflow-y-auto pr-1">
      {/* Header Context */}
      <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200/90 text-xs sm:text-sm">
        <div className="flex items-center gap-2 font-medium text-amber-200 mb-1">
          <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
          <span>Corporate Works Showcase &bull; Senior Frontend Engineer</span>
        </div>
        <p className="text-stone-400 text-xs leading-relaxed">
          Here is an overview of major initiatives and enterprise systems I have
          engineered at Transfez. You can easily adjust, add, or elaborate these
          project entries in{" "}
          <code className="px-1 py-0.5 rounded bg-black/40 text-amber-300 font-mono text-[11px]">
            constants/index.ts
          </code>
          .
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {transfezSubProjects.map((project, index) => (
          <div
            key={project.id}
            className="p-5 rounded-2xl bg-[#0c1018] border border-stone-800 hover:border-amber-500/40 transition-colors shadow-sm"
          >
            {/* Top row: Title & Status */}
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-amber-400/90 font-mono">
                  Project {index + 1} &bull; {project.category}
                </span>
                <h4 className="text-lg font-serif font-normal text-stone-100 mt-0.5">
                  {project.title}
                </h4>
              </div>

              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {project.status}
              </span>
            </div>

            {/* Role & Summary */}
            <p className="text-xs text-stone-400 mb-3 flex items-center gap-2">
              <span className="text-stone-300 font-medium">Role:</span>
              <span>{project.role}</span>
            </p>

            <p className="text-sm text-stone-300 leading-relaxed font-sans mb-4">
              {project.summary}
            </p>

            {/* Key Contributions */}
            <div className="space-y-2 mb-4">
              <div className="text-xs font-medium text-stone-200 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>Key Engineering Contributions:</span>
              </div>
              <ul className="space-y-1.5 pl-1">
                {project.contributions.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2 text-xs text-stone-400">
                    <span className="text-amber-400/80 font-bold mt-0.5">•</span>
                    <span className="leading-normal">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-3 border-t border-stone-800/80 flex flex-wrap items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-stone-500 mr-1" />
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-stone-900 text-stone-300 border border-stone-800"
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
