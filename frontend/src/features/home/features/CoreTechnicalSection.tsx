import React from "react";
import { Code2, Layers, Cpu, Smartphone, ShieldCheck } from "lucide-react";

export function CoreTechnicalSection() {
  const techStack = [
    { label: "TypeScript", icon: Code2 },
    { label: "React / Next.js", icon: Layers },
    { label: "React Native", icon: Smartphone },
    { label: "TanStack Query", icon: Cpu },
    { label: "Tailwind CSS", icon: ShieldCheck },
  ];

  return (
    <section className="py-16 border-b border-stone-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-6">
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
    </section>
  );
}
