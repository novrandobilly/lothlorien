"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LabProject } from "../constants";

interface LabCardProps {
  project: LabProject;
}

export function LabCard({ project }: LabCardProps) {
  return (
    <div className="py-7 sm:py-9 group transition-colors">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
        {/* Col 1: Period (Left) */}
        <div className="md:col-span-2 text-sm sm:text-base font-semibold text-stone-900 shrink-0">
          {project.period}
        </div>

        {/* Col 2: Title & Subtitle (Center) */}
        <div className="md:col-span-4 flex flex-col justify-start">
          <h3 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-stone-950 group-hover:text-emerald-700 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-1 font-sans">
            {project.subtitle}
          </p>
        </div>

        {/* Col 3: Bullets & Action Link (Right) */}
        <div className="md:col-span-6 flex flex-col justify-between">
          {/* Bullets List (matches screenshot • Item1 • Item2 layout) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-stone-700 font-sans">
            {project.skills.map((skill) => (
              <div key={skill} className="flex items-center gap-2">
                <span className="text-stone-400 font-bold">•</span>
                <span className="text-stone-700">{skill}</span>
              </div>
            ))}
          </div>

          {/* Minimal Action Link */}
          <div className="mt-4 pt-3 flex items-center justify-start">
            <Link
              href={project.url}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-900 hover:text-emerald-700 transition-colors group/link"
            >
              <span>{project.buttonText}</span>
              <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover/link:text-emerald-700 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
