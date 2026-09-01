import React from "react";
import { CaseCard } from "./features/case-card";
import { projects } from "./constants";

export function CaseStudiesSection() {
  return (
    <section
      id="work"
      className="py-20 relative bg-[#0c1017]/70 border-y border-stone-800/80 backdrop-blur-xs"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121622] border border-amber-500/25 text-amber-300/90 text-xs font-semibold tracking-[0.2em] uppercase mb-4 shadow-xs">
            <span>Featured Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal font-serif tracking-tight text-stone-100">
            Engineered Apps &amp; Products
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-400 leading-relaxed">
            Production-grade web &amp; mobile solutions designed for velocity, scalable state architectures, and refined UX.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((item) => (
            <div
              key={item.title}
              className="flex w-full md:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-4rem)/3)] max-w-md"
            >
              <CaseCard
                title={item.title}
                description={item.description}
                bullets={item.bullets}
                url={item.url}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
