import React from "react";
import { ExternalLink, Sparkles } from "lucide-react";
import { LothlorienButton } from "@/components/ui/LothlorienButton";

export function CaseStudiesSection() {
  const projects = [
    {
      title: "Real-Time Financial Studio",
      description:
        "High-frequency charting platform with live telemetry and financial data streams, optimized for 60 FPS performance.",
      url: "https://example.com/demo1",
    },
    {
      title: "Fintech KYC Onboarding Engine",
      description:
        "Multi-step registration and identity verification flow built with deterministic state machine logic and strict schema validation.",
      url: "https://example.com/demo2",
    },
    {
      title: "Offline-First Operations Client",
      description:
        "Resilient web & mobile companion app designed with optimistic mutation queues for seamless offline sync.",
      url: "https://example.com/demo3",
    },
  ];

  return (
    <section id="work" className="py-24 relative bg-stone-100/70 border-y border-stone-200/60 backdrop-blur-xs">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-200 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            Selected Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-tight text-stone-900">
            Web Apps & Interactive Experiences
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 font-sans">
            A showcase of web applications built with high craftsmanship, performance, and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-stone-200/90 hover:border-emerald-400/80 shadow-xs hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-3 group-hover:text-emerald-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-600 mb-6 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="pt-2">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <LothlorienButton
                    variant="outline"
                    size="sm"
                    className="w-full justify-center group-hover:border-emerald-500 group-hover:bg-emerald-50/50 group-hover:text-emerald-900"
                    rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                  >
                    Launch this app
                  </LothlorienButton>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
