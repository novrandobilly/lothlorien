import React from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { LothlorienButton } from "@/components/ui/LothlorienButton";

export function PricingTiersSection() {
  const tiers = [
    {
      name: "Architecture & Performance Audit",
      badge: "Targeted Sprint",
      price: "Rp 15.000.000",
      period: "one-time (1 week)",
      description:
        "Comprehensive diagnosis of your existing frontend to eliminate render lag, fix state bottlenecks, and chart a scalable roadmap.",
      features: [
        "Deep codebase & bundle size audit",
        "TanStack Query & state architecture review",
        "Core Web Vitals & hydration fix blueprint",
        "Actionable refactor PR or step-by-step report",
        "1-on-1 strategy alignment call",
      ],
      ctaText: "Book an Audit",
      isPopular: false,
    },
    {
      name: "0-to-1 MVP Frontend Sprint",
      badge: "Most Popular",
      price: "Rp 38.000.000",
      period: "per 2-3 week sprint",
      description:
        "End-to-end production frontend build for early-stage products, startups, or major feature expansions.",
      features: [
        "Full Next.js or React Native application",
        "Strict TypeScript & Zod schema validation",
        "Tailwind CSS custom design system tokens",
        "API & PocketBase/REST integration",
        "100% responsive, a11y & mobile optimized",
        "2 weeks of post-launch bug warranty",
      ],
      ctaText: "Start MVP Build",
      isPopular: true,
    },
    {
      name: "Fractional Frontend Lead",
      badge: "Monthly Retainer",
      price: "Rp 45.000.000",
      period: "per month (select capacity)",
      description:
        "Embedded senior frontend architect to lead complex UI initiatives, mentor teams, and scale your engineering output.",
      features: [
        "Architecting complex flows & state machines",
        "Daily async standup & PR code reviews",
        "Agentic developer tooling & AI workflow setup",
        "Direct Slack / Discord engineering support",
        "Ongoing refactoring & performance tuning",
      ],
      ctaText: "Reserve Retainer Spot",
      isPopular: false,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
            Transparent Engagements
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Straightforward pricing. Zero agency overhead.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600">
            Transparent IDR engagement models suited for high-growth startups, founders, and teams needing senior-level execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col justify-between p-8 rounded-2xl transition-all ${
                tier.isPopular
                  ? "bg-stone-900 text-white shadow-xl ring-2 ring-emerald-500 scale-100 lg:-translate-y-2"
                  : "bg-stone-50 border border-stone-200/90 text-stone-900 shadow-2xs"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      tier.isPopular
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : "bg-emerald-100 text-emerald-800"
                    }`}
                  >
                    {tier.badge}
                  </span>
                  {tier.isPopular && (
                    <span className="flex items-center gap-1 text-xs text-amber-400 font-medium">
                      <Sparkles className="w-3.5 h-3.5" /> High Demand
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>

                <div className="my-5">
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    {tier.price}
                  </span>
                  <span
                    className={`text-xs block mt-1 ${
                      tier.isPopular ? "text-stone-400" : "text-stone-500"
                    }`}
                  >
                    {tier.period}
                  </span>
                </div>

                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                    tier.isPopular ? "text-stone-300" : "text-stone-600"
                  }`}
                >
                  {tier.description}
                </p>

                <div
                  className={`pt-6 border-t ${
                    tier.isPopular ? "border-stone-800" : "border-stone-200"
                  }`}
                >
                  <p
                    className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                      tier.isPopular ? "text-stone-400" : "text-stone-700"
                    }`}
                  >
                    What&apos;s Included:
                  </p>
                  <ul className="space-y-3">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            tier.isPopular ? "text-emerald-400" : "text-emerald-600"
                          }`}
                        />
                        <span
                          className={tier.isPopular ? "text-stone-200" : "text-stone-700"}
                        >
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-6">
                <a href="#contact" className="block w-full">
                  <LothlorienButton
                    variant={tier.isPopular ? "gold" : "primary"}
                    size="lg"
                    className="w-full justify-center"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    {tier.ctaText}
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
