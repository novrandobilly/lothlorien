import React from "react";
import { ArrowUpRight } from "lucide-react";
import { experiences } from "./constants";
import { ExperienceRow } from "./features/experience-row";

export function ExperiencesSection() {
  return (
    <section id="experiences" className="py-24 sm:py-28 relative bg-[#090b10]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start justify-between">
          {/* Left Column: Title */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif tracking-tight text-stone-100 leading-[1.15]">
              Explore My
              <br />
              Frontend Journey
            </h2>
          </div>

          {/* Right Column: Description & Book A Call CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-1">
            <p className="text-stone-400 text-sm sm:text-base leading-relaxed font-sans">
              Over the past 5+ years, I&apos;ve had the privilege of working on a
              diverse range of projects, from web-application, mobile apps, and
              company landing pages.
            </p>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-amber-200 hover:text-amber-100 underline underline-offset-4 decoration-amber-500/40 hover:decoration-amber-300 transition-colors group"
              >
                <span>Book A Call</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Experience List */}
        <div className="mt-12 sm:mt-16 border-t border-stone-800/80 divide-y divide-stone-800/80">
          {experiences.map((experience) => (
            <ExperienceRow key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
