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
    <div className="mt-10 md:mt-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 md:gap-12">
        {metrics.map((item) => (
          <div key={item.label} className="space-y-0.5">
            <div className="text-lg sm:text-xl font-extrabold text-stone-950 tracking-tight font-sans">
              {item.value}
            </div>
            <div className="text-xs sm:text-sm text-stone-500 font-medium leading-snug">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
