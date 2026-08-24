import React from "react";
import { ExternalLink, LineChart, ShieldCheck, Smartphone, Layers } from "lucide-react";
import { LothlorienButton } from "@/components/ui/LothlorienButton";

export function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "Real-Time Financial Charting & Data Studio",
      category: "High-Performance Web App",
      icon: LineChart,
      tags: ["React", "TanStack Query", "PocketBase", "Tailwind CSS"],
      summary:
        "Engineered a high-frequency charting platform handling live telemetry and financial data streams without UI stutter.",
      architecturalWin:
        "Decoupled WebSocket subscriptions into isolated TanStack Query caches, preserving 60 FPS render cycles under intense data spikes.",
      metrics: ["60 FPS Continuous UI", "99.9% Cache Accuracy", "<50ms Ingestion Latency"],
    },
    {
      title: "Fintech KYC & Multi-Step Onboarding Flow",
      category: "Complex State Architecture",
      icon: ShieldCheck,
      tags: ["Next.js", "TypeScript", "Zod", "State Machine"],
      summary:
        "Re-architected an enterprise registration and identity verification flow with strict validation and progressive disclosure.",
      architecturalWin:
        "Implemented deterministic finite state machines with Zod schema validation, eliminating phantom errors across 7 onboarding stages.",
      metrics: ["+38% Conversion Rate", "0% Validation Desync", "100% Type-Safe API"],
    },
    {
      title: "Cross-Platform Operations & Field Companion",
      category: "Mobile & Offline-First",
      icon: Smartphone,
      tags: ["React Native", "Expo", "TanStack Query", "Tailwind"],
      summary:
        "Built a resilient cross-platform mobile client enabling technicians to work completely offline in low-connectivity zones.",
      architecturalWin:
        "Designed an optimistic offline mutation queue that auto-reconciles conflict resolution upon network reconnection.",
      metrics: ["100% Offline Capability", "Native Smooth 120Hz UI", "Shared 80% Logic"],
    },
  ];

  return (
    <section id="work" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
              Selected Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
              Outcome-driven engineering stories.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-stone-600 max-w-2xl">
              A sample of complex frontend architectures, custom state machines, and high-craft interfaces engineered for production scale.
            </p>
          </div>

          <a href="#contact">
            <LothlorienButton variant="outline" size="md" rightIcon={<ExternalLink className="w-4 h-4" />}>
              Discuss Your Project
            </LothlorienButton>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col justify-between p-7 rounded-2xl bg-stone-50 border border-stone-200/90 hover:border-emerald-300 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      {item.category}
                    </span>
                    <div className="p-2 rounded-lg bg-white border border-stone-200 text-stone-700 group-hover:text-emerald-700 group-hover:border-emerald-200 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-stone-600 mb-4 leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="p-3.5 rounded-xl bg-white border border-stone-200 mb-6">
                    <p className="text-xs font-semibold text-stone-800 mb-1">Architectural Solution:</p>
                    <p className="text-xs text-stone-600 leading-relaxed">{item.architecturalWin}</p>
                  </div>
                </div>

                <div>
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-stone-200/80 mb-5 text-center">
                    {item.metrics.map((m, idx) => (
                      <div key={idx} className="px-1">
                        <p className="text-[11px] font-bold text-stone-800">{m}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-stone-200/60 text-stone-700 text-[11px] font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
