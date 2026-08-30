import React from "react";
import { Sparkles } from "lucide-react";
import { CaseCard } from "./features/case-card";

export function CaseStudiesSection() {
  const projects = [
    {
      title: "Kickserve App",
      description:
        "Manage your session and players freely (Tennis, Padel, even Badminton)",
      bullets: [
        "Up to 32 players",
        "Singles & Doubles Americano",
        "Smart, no-repeat scheduling",
        "Live standings as you play",
        "Share results instantly",
      ],
      url: `${process.env.NEXT_PUBLIC_DEMO_URL_KICKSERVE}/project/kickserve`,
    },
    {
      title: "Bagels PreOrder App",
      description:
        "Multi-step registration and identity verification flow built with deterministic state machine logic and strict schema validation.",
      bullets: [
        "State machine router enforcing linear and conditional paths",
        "On-device OCR check and biometric verification step matching",
        "Persistent step auto-save with encrypted local storage caches",
      ],
      url: `${process.env.NEXT_PUBLIC_DEMO_URL_KICKSERVE}/project/bagels`,
    },
    {
      title: "Online Psychological Test",
      description:
        "Resilient web & mobile companion app designed with optimistic mutation queues for seamless offline sync.",
      bullets: [
        "Offline-first sync engine with automatic conflict resolution",
        "Optimistic UI updates for instant feedback during unstable connections",
        "Encrypted background database synchronizer using service workers",
      ],
      url: `${process.env.NEXT_PUBLIC_DEMO_URL_KICKSERVE}/project/psikotes`,
    },
  ];

  return (
    <section
      id="work"
      className="py-24 relative bg-stone-100/70 border-y border-stone-200/60 backdrop-blur-xs"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-200 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            Selected Work
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold tracking-tight text-stone-900">
            Web Apps & Interactive Experiences
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-stone-600 font-sans">
            A showcase of web applications built with high craftsmanship,
            performance, and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {projects.map((item) => (
            <CaseCard
              key={item.title}
              title={item.title}
              description={item.description}
              bullets={item.bullets}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
