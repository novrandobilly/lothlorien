import React from "react";
import {
  Code2,
  GitMerge,
  Bot,
  Terminal,
  CheckCircle2,
  User,
} from "lucide-react";

export function AboutStudioSection() {
  const pillars = [
    {
      title: "Senior Frontend Craft",
      icon: Code2,
      description:
        "Deeply rooted in the modern TypeScript, React, and React Native ecosystems. Heavy emphasis on scalable state management (TanStack Query) and responsive utility styling (Tailwind CSS) to deliver clean 60+ FPS web and mobile apps.",
    },
    {
      title: "Architecture-First Mindset",
      icon: GitMerge,
      description:
        "Prioritizing SOLID principles, modularity, and strict component boundaries over quick hacks. Experienced in architecting complex multi-step fintech/KYC flows and high-frequency charting with PocketBase.",
    },
    {
      title: "Agentic Developer Workflows",
      icon: Bot,
      description:
        "Pragmatic adopter of AI orchestration—utilizing CLI developer agents, spec-driven instruction files, and automated tooling to amplify shipping velocity without compromising architectural rigor or code quality.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Bio & Personal Manifesto */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
              <User className="w-3.5 h-3.5 text-emerald-700" />
              The Engineer Behind Lothlorien
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
              High-craft engineering designed to outlast short-term trends.
            </h2>

            <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
              Hi, I&apos;m a Senior Frontend Engineer and UI Architect. I help
              founders, product teams, and tech leaders build exceptional
              digital experiences without drowning in technical debt.
            </p>

            <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
              Whether you need to ship a brand-new 0-to-1 MVP, untangle a
              sluggish legacy frontend, or build responsive cross-platform apps
              with React Native, I bring clarity, velocity, and craftsmanship to
              every pull request.
            </p>

            <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-400">
                <Terminal className="w-3.5 h-3.5 text-emerald-600" />
                Working Principles
              </div>
              <div className="space-y-2">
                {[
                  "Clear communication & frequent async progress updates",
                  "Direct code ownership with full documentation",
                  "Performance and accessibility as default requirements",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs text-stone-700"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 3 Core Pillars */}
          <div className="lg:col-span-7 space-y-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200/90 shadow-2xs hover:border-emerald-300 transition-colors"
                >
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-stone-900">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed pl-0 sm:pl-13">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
