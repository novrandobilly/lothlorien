import React from "react";
import { Gauge, CheckCircle2, Zap, Award } from "lucide-react";

export function ProofStripSection() {
  const metrics = [
    {
      icon: Gauge,
      value: "100/100",
      label: "Performance Standard",
      detail: "Sub-100ms INP & LCP Core Web Vitals",
    },
    {
      icon: CheckCircle2,
      value: "100%",
      label: "Strict Type Safety",
      detail: "Zero-any policy with Zod & TypeScript",
    },
    {
      icon: Zap,
      value: "3x",
      label: "Build Velocity",
      detail: "Spec-driven agentic developer workflows",
    },
    {
      icon: Award,
      value: "5+ Yrs",
      label: "Senior Experience",
      detail: "Fintech, charting & complex web apps",
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-start gap-4 p-4 rounded-xl bg-stone-50/70 border border-stone-200/80 hover:bg-emerald-50/40 hover:border-emerald-200 transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-emerald-100/80 text-emerald-800 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-stone-900 tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-sm font-semibold text-stone-800 mt-0.5">
                    {item.label}
                  </div>
                  <div className="text-xs text-stone-500 mt-1">
                    {item.detail}
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
