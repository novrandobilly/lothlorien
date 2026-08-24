import React from "react";
import { XCircle, CheckCircle2, ShieldAlert, Sparkles } from "lucide-react";

export function ProblemSolutionSection() {
  const problems = [
    "Spaghetti state management causing random re-renders and UI flickers.",
    "Brittle multi-step form logic with poorly validated edge cases.",
    "Hardcoded styles and chaotic design tokens that break across screen sizes.",
    "Slow build times, messy PRs, and crippling technical debt.",
  ];

  const solutions = [
    "Predictable, server-state caching powered by TanStack Query & clean hooks.",
    "Strict type-safe schemas (Zod + TypeScript) for rock-solid forms and flows.",
    "Modular component systems styled with Tailwind CSS and scalable tokens.",
    "SOLID principles and agentic workflows delivering fast, maintainable code.",
  ];

  return (
    <section id="problem-solution" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            Engineering Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Frontend is your product&apos;s first impression. Don&apos;t let tech debt slow you down.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600">
            Building complex interfaces shouldn&apos;t mean accepting fragility. I replace fragile patchwork with architectural clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problem Card */}
          <div className="p-8 rounded-2xl bg-red-50/40 border border-red-200/80 shadow-2xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-lg bg-red-100 text-red-700">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900">The Fragile Frontend</h3>
                <p className="text-xs text-stone-500">How technical debt sneaks into fast-moving teams</p>
              </div>
            </div>

            <ul className="space-y-4">
              {problems.map((prob, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-stone-700">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{prob}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Card */}
          <div className="p-8 rounded-2xl bg-emerald-50/60 border border-emerald-300 shadow-2xs relative">
            <div className="absolute top-4 right-4 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-emerald-200 text-emerald-900">
              The Lothlorien Standard
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-lg bg-emerald-200 text-emerald-900">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900">Architecture-First Engineering</h3>
                <p className="text-xs text-emerald-800">Clean modularity built to scale without fear</p>
              </div>
            </div>

            <ul className="space-y-4">
              {solutions.map((sol, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-stone-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{sol}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
