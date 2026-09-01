import React from "react";
import { CaseCard } from "./features/case-card";
import { projects } from "./constants";

export function CaseStudiesSection() {
  return (
    <section
      id="work"
      className="py-24 relative bg-stone-100/70 border-y border-stone-200/60 backdrop-blur-xs"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
            Web Apps & Interactive Experiences
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600">
            A showcase of web applications built with high craftsmanship, performance, and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 justify-items-center">
          {projects.map((item) => (
            <CaseCard
              key={item.title}
              title={item.title}
              description={item.description}
              bullets={item.bullets}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
