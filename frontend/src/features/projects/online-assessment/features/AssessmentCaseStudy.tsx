"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { assessmentData } from "../constants";
import { AssessmentIcon } from "@/features/home/icons";

export function AssessmentCaseStudy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      {/* Back Link */}
      <div className="mb-6">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-500 hover:text-stone-900 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Case Studies</span>
        </Link>
      </div>

      {/* Main Container */}
      <div className="rounded-3xl bg-white border border-stone-200 p-7 sm:p-10 md:p-12 text-stone-900 shadow-xl shadow-stone-900/5">
        {/* Header Section */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-300 text-cyan-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <AssessmentIcon className="w-4 h-4 text-cyan-600" />
            <span>{assessmentData.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-stone-900 tracking-tight leading-tight">
            {assessmentData.title}
          </h1>

          <p className="text-base sm:text-lg text-stone-600 font-sans leading-relaxed mt-4 mb-6 max-w-3xl">
            {assessmentData.description}
          </p>

          {/* Launch CTA */}
          <div className="flex items-center gap-4">
            <a
              href={assessmentData.launchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full text-sm sm:text-base font-bold text-stone-950 bg-amber-400 hover:bg-amber-500 border border-amber-300 shadow-md shadow-amber-500/20 transition-all cursor-pointer group"
            >
              <span>{assessmentData.buttonText}</span>
              <ExternalLink className="w-4 h-4 text-stone-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-stone-200 my-10" />

        {/* 5 Simple Topics */}
        <div className="space-y-10">
          {assessmentData.topics.map((topic, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-sans text-stone-900 font-bold">
                {topic.title}
              </h2>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans">
                {topic.content}
              </p>
              {topic.bullets && topic.bullets.length > 0 && (
                <ul className="space-y-2 pt-1">
                  {topic.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-2.5 text-sm sm:text-base text-stone-600 font-sans"
                    >
                      <span className="text-cyan-600 font-semibold text-xs mt-1.5 shrink-0">
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
        <div className="border-t border-stone-200 mt-12 pt-8 flex items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-500 hover:text-stone-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Case Studies</span>
          </Link>

          <a
            href={assessmentData.launchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-700 hover:text-amber-800 transition-colors"
          >
            <span>Open live app</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
