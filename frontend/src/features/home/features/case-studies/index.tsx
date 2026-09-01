import React from "react";
import { CaseCard } from "./features/case-card";
import { projects } from "./constants";

export function CaseStudiesSection() {
  return (
    <section
      id="work"
      className="py-16 relative bg-stone-100/70 border-y border-stone-200/60 backdrop-blur-xs"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
            Envien Studio Apps
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600">
            
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
