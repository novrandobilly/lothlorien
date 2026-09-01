import React from "react";

export function ProofStripSection() {
  const metrics = [
    {
      value: "6+ Years",
      label: "Frontend Architecture Craft",
    },
    {
      value: "10+",
      label: "Production Web & Mobile Systems Shipped",
    },
    {
      value: "Fintech & SaaS",
      label: "Domain & Workflow Experience",
    },
    {
      value: "Web & Mobile",
      label: "Cross-Platform Product Specialization",
    },
  ];

  return (
    <div className="mt-12 md:mt-16 pt-8 border-t border-stone-800/80">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 md:gap-12">
        {metrics.map((item) => (
          <div key={item.label} className="space-y-1">
            <div className="text-xl sm:text-2xl font-normal font-serif text-amber-200 tracking-tight">
              {item.value}
            </div>
            <div className="text-xs sm:text-sm text-stone-400 font-normal leading-snug font-sans">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
