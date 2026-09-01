import React from "react";
import { Compass, Cpu, CheckCircle, PackageCheck } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      icon: Compass,
      title: "Spec & Architecture Blueprint",
      description:
        "We align on user flows, API schemas, and data boundaries before touching UI code. No ambiguous requirements.",
      deliverable: "Schema definitions, state machine map & tech architecture doc",
    },
    {
      number: "02",
      icon: Cpu,
      title: "Rapid Scaffolding & State Design",
      description:
        "Setting up type-safe queries, optimistic mutations, and modular component primitives styled with Tailwind.",
      deliverable: "Interactive frontend prototype with live mock/API integration",
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Production Hardening & Polish",
      description:
        "Eliminating layout shifts, ensuring 100/100 Lighthouse performance, multi-device testing, and fluid animations.",
      deliverable: "Zero-error build, cross-browser validation & a11y compliance",
    },
    {
      number: "04",
      icon: PackageCheck,
      title: "Clean Handover & Enablement",
      description:
        "Complete ownership with clean Git history, comprehensive code comments, and zero vendor lock-in.",
      deliverable: "Production deployment, documented codebase & walk-through video",
    },
  ];

  return (
    <section id="process" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-4">
            Execution Roadmap
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
            Demystifying the build from 0 to 1.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600">
            A transparent, sprint-driven workflow designed to ship high-craft frontend software fast without cutting architectural corners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-stone-200 shadow-2xs relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-emerald-800/80 font-mono">
                      {step.number}
                    </span>
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <p className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-1">
                    Key Deliverable
                  </p>
                  <p className="text-xs font-medium text-emerald-900">
                    {step.deliverable}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
