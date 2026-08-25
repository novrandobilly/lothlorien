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
    <div className="mt-16 md:mt-24 pt-12 border-t border-stone-200">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-32">
        {metrics.map((item) => (
          <div key={item.label} className="space-y-1">
            <div className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight font-sans">
              {item.value}
            </div>
            <div className="text-xs sm:text-sm text-stone-600 font-medium leading-snug">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
