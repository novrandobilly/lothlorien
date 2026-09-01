import React from "react";
import { ArrowUpRight } from "lucide-react";
import { experiences } from "./constants";
import { ExperienceRow } from "./features/experience-row";

export function ExperiencesSection() {
  return (
    <section id="experiences" className="py-20 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start justify-between">
          {/* Left Column: Pill Label & Title */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-stone-900 text-sm sm:text-base font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-stone-900 inline-block" />
              <span>Experiences</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-stone-900 mt-4 leading-[1.12]">
              Explore My
              <br />
              Frontend Journey
            </h2>
          </div>

          {/* Right Column: Description & Book A Call CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-1">
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              Over the past 5+ years, I've had the privilege of working on a
              diverse range of projects, from web-application, mobile apps, and
              company landing pages.
            </p>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-base font-medium text-stone-900 hover:text-emerald-700 underline underline-offset-4 decoration-stone-400 hover:decoration-emerald-700 transition-colors group"
              >
                <span>Book A Call</span>
                <ArrowUpRight className="w-4.5 h-4.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Experience List */}
        <div className="mt-14 sm:mt-18 border-t border-stone-200/80 divide-y divide-stone-200/80">
          {experiences.map((experience) => (
            <ExperienceRow key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
