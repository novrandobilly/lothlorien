"use client";

import React from "react";
import { labProjects } from "./constants";
import { LabCard } from "./features/lab-card";

export function EnvienLabsSection() {
  return (
    <section
      id="labs"
      className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 bg-[#fafaf9] border-b border-stone-200"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Title (Uppercase, bold, matching screenshot) */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-sans tracking-tight text-stone-950 uppercase mb-8 sm:mb-12">
          Envien Studio In-House Apps
        </h2>

        {/* Divided List Rows */}
        <div className="border-t border-stone-200 divide-y divide-stone-200">
          {labProjects.map((project) => (
            <LabCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EnvienLabsSection;
export * from "./constants";
