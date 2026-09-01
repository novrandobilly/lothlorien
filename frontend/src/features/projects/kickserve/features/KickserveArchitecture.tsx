import React from "react";
import Link from "next/link";
import { Code2, Layers, ArrowRight, ExternalLink } from "lucide-react";
import { LothlorienButton } from "@/components/ui/LothlorienButton";
import { kickserveDetail } from "../constants";

export function KickserveArchitecture() {
  return (
    <section className="py-20 bg-[#0c0f17] border-t border-stone-800/90 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5" />
            Engineering & Tech Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-100 mb-4">
            Under the Hood
          </h2>
          <p className="text-stone-400 font-sans text-sm sm:text-base">
            How robust frontend architecture guarantees deterministic performance and offline durability.
          </p>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12">
          {kickserveDetail.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded-xl bg-stone-900/80 border border-stone-700/70 text-stone-200 text-xs sm:text-sm font-mono flex items-center gap-2 shadow-xs"
            >
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              {tech}
            </span>
          ))}
        </div>

        {/* Architecture Cards */}
        <div className="space-y-6 mb-16">
          {kickserveDetail.architecture.map((item, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-3xl bg-[#090b10] border border-stone-800/80 hover:border-amber-500/30 transition-all"
            >
              <h3 className="text-lg sm:text-xl font-serif font-medium text-stone-100 mb-3">
                {item.title}
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Next Project / CTA Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-linear-to-r from-[#121622] via-[#10141f] to-[#0e121a] border border-amber-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-wider text-amber-300/80 font-semibold mb-1 block">
              Next Case Study
            </span>
            <h4 className="text-2xl font-serif text-stone-100">
              Bagels PreOrder App
            </h4>
            <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-md">
              Discover how custom micro-bakery pre-ordering workflows and QRIS payments eliminate checkout friction.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link href="/projects/bagels">
              <LothlorienButton
                variant="gold"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                View Bagels Project
              </LothlorienButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
