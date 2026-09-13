import React from "react";
import { labProjects } from "./constants";
import { LabCard } from "./features/lab-card";

export function EnvienLabsSection() {
  return (
    <section
      id="labs"
      className="scroll-mt-20 sm:scroll-mt-24 py-14 sm:py-16 relative bg-[#090b10] border-b border-stone-800/90"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-widest font-mono text-emerald-400 font-semibold mb-2 block">
            R&amp;D, Side-Projects &amp; Experiments
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif tracking-tight text-stone-100 leading-[1.15]">
            Envien Studio Labs
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-stone-400 font-sans">
            App products crafted for fun, for self use, or free community utility.
          </p>
          <p className="text-base sm:text-lg text-emerald-300/90 font-sans font-medium mt-1">
            &ldquo;For experiments that are worth sharing.&rdquo;
          </p>
        </div>

        {/* Labs Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
          {labProjects.map((project) => (
            <div key={project.title} className="flex">
              <LabCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EnvienLabsSection;
export * from "./constants";
