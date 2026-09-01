import React from "react";
import { CaseCard } from "./features/case-card";
import { projects } from "./constants";

export function CaseStudiesSection() {
  return (
    <section
      id="work"
      className="py-24 sm:py-28 relative bg-[#131825] border-y border-stone-800/90"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif tracking-tight text-stone-100 leading-[1.15]">
            Envien Studio Apps
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-400 font-sans">
            Here's a selection of my recent projects with the mindset of
          </p>
          <p className="text-base sm:text-lg text-stone-400 font-sans font-bold">
            "creating an app that I'm actually going to use myself."
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
