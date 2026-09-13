import React from "react";

export function ProofStripSection() {
  const metrics = [
    {
      value: "6+ Years",
      label: "Senior Frontend",
    },
    {
      value: "10+",
      label: "Production Systems",
    },
    {
      value: "Fintech & SaaS",
      label: "Domain Focus",
    },
    {
      value: "Web & Mobile",
      label: "Cross-Platform",
    },
  ];

  return (
    <div className="relative mt-10 md:mt-12 pt-7 md:pt-8 border-t border-stone-200">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-5 md:gap-10">
        {metrics.map((item) => (
          <div key={item.label} className="space-y-1">
            <div className="text-xl sm:text-2xl font-bold font-sans text-stone-900 tracking-tight">
              {item.value}
            </div>
            <div className="text-xs sm:text-sm text-stone-500 font-medium leading-snug font-sans">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
