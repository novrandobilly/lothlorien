"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { bagelsData } from "../constants";
import { BagelIcon } from "@/features/home/features/case-studies/icons";

export function BagelsCaseStudy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      {/* Back Link */}
      <div className="mb-6">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-400 hover:text-amber-200 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Case Studies</span>
        </Link>
      </div>

      {/* Main Container */}
      <div className="rounded-3xl bg-[#0e121a] border border-stone-800 p-7 sm:p-10 md:p-12 text-stone-100 shadow-xl shadow-black/40">
        {/* Header Section */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-400/35 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <BagelIcon className="w-4 h-4 text-amber-400" />
            <span>{bagelsData.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal font-serif text-stone-100 tracking-tight leading-tight">
            {bagelsData.title}
          </h1>

          <p className="text-base sm:text-lg text-stone-300 font-sans leading-relaxed mt-4 mb-6 max-w-3xl">
            {bagelsData.description}
          </p>

          {/* Launch CTA */}
          <div className="flex items-center gap-4">
            <a
              href={bagelsData.launchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full text-sm sm:text-base font-semibold text-stone-950 bg-linear-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:via-amber-400 hover:to-amber-500 border border-amber-300/80 shadow-lg shadow-amber-950/60 hover:shadow-[0_0_20px_-3px_rgba(245,158,11,0.35)] transition-all cursor-pointer group"
            >
              <span>{bagelsData.buttonText}</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-stone-800/80 my-10" />

        {/* 5 Simple Topics */}
        <div className="space-y-10">
          {bagelsData.topics.map((topic, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-serif text-stone-100 font-normal">
                {topic.title}
              </h2>
              <p className="text-sm sm:text-base text-stone-400 leading-relaxed font-sans">
                {topic.content}
              </p>
              {topic.bullets && topic.bullets.length > 0 && (
                <ul className="space-y-2 pt-1">
                  {topic.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-2.5 text-sm sm:text-base text-stone-400 font-sans"
                    >
                      <span className="text-amber-400 font-semibold text-xs mt-1.5 shrink-0">
                        ◆
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Footer / Bottom Link */}
        <div className="border-t border-stone-800/80 mt-12 pt-8 flex items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-400 hover:text-amber-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Case Studies</span>
          </Link>

          <a
            href={bagelsData.launchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-amber-300 hover:text-amber-200 transition-colors"
          >
            <span>Open live app</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
