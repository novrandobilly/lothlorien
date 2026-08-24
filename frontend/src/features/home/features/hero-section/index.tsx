import React from "react";
import { LothlorienButton } from "@/components/ui/LothlorienButton";
import {
  ArrowRight,
  Code2,
  Layers,
  Cpu,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

export function HeroSection() {
  const techStack = [
    { label: "TypeScript", icon: Code2 },
    { label: "React / Next.js", icon: Layers },
    { label: "React Native", icon: Smartphone },
    { label: "TanStack Query", icon: Cpu },
    { label: "Tailwind CSS", icon: ShieldCheck },
  ];

  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 border-b border-stone-200 bg-stone-50">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-137.5 h-75 bg-emerald-100/60 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold tracking-wide uppercase mb-8 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Senior Frontend Engineer & UI Architect</span>
          <span className="text-emerald-400">•</span>
          <span className="text-stone-600 font-normal">
            Available for Select Contracts
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-stone-900 leading-[1.1]">
          Building high-performance interfaces with{" "}
          <span className="bg-linear-to-r from-emerald-700 via-emerald-600 to-teal-700 bg-clip-text text-transparent">
            architectural precision
          </span>{" "}
          & modern frontend craft.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
          Specializing in React, React Native, TanStack Query, and Next.js.
          Combining SOLID architectural principles with agentic velocity to
          transform complex product specs into resilient, production-ready
          software.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#contact">
            <LothlorienButton
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Schedule Discovery Call
            </LothlorienButton>
          </a>

          <a href="#work">
            <LothlorienButton variant="outline" size="lg">
              Explore Selected Work
            </LothlorienButton>
          </a>
        </div>

        {/* Tech Stack Chips */}
        <div className="mt-16 pt-8 border-t border-stone-200/70">
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-4">
            Core Technical Ecosystem
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {techStack.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.label}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-stone-200 shadow-2xs text-xs font-medium text-stone-700 hover:border-emerald-300 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{tech.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
