"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Lock } from "lucide-react";
import { assessmentData } from "../constants";
import { AssessmentGallery } from "./AssessmentGallery";

export function AssessmentCaseStudy() {
  const { title, clientName, clientLogo, description, ndaNotice, topics } =
    assessmentData;

  return (
    <div className="w-full px-4 sm:px-6 flex flex-col items-center pt-24 sm:pt-28 md:pt-28 pb-12 sm:pb-16">
      {/* Main Card Container */}
      <div className="w-full max-w-4xl lg:max-w-5xl rounded-3xl bg-white border border-stone-200/80 shadow-xl shadow-stone-900/5 p-6 sm:p-8 md:p-10 text-stone-900">
        {/* =========================================================================
            1. HEADER SECTION
           ========================================================================= */}
        <div>
          {/* Top Row: Back to Selected Works (Left) + Client Attribution (Right) */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-2 sm:mb-4">
            <Link
              href="/#work"
              className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-500 hover:text-stone-950 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-stone-400 group-hover:text-stone-950 group-hover:-translate-x-1 transition-all" />
              <span>Back to Selected Works</span>
            </Link>

            {/* Client Logo Tag */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-stone-50 border border-stone-200/60">
              <span className="text-xs font-medium text-stone-400 font-sans">
                Client:
              </span>
              <Image
                src={clientLogo}
                alt={clientName}
                height={16}
                width={65}
                className="h-4 w-auto object-contain select-none"
              />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-stone-950 tracking-tight leading-tight">
            {title}
          </h1>

          {/* Subtitle / Description */}
          <p className="text-base sm:text-lg text-stone-600 font-sans leading-relaxed mt-4 max-w-3xl">
            {description}
          </p>

          {/* Clean NDA Notice (Replaces Launch App / External Links) */}
          <div className="mt-5 p-3.5 sm:p-4 rounded-2xl bg-[#fafaf9] border border-stone-200/80 flex items-start sm:items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-stone-100 border border-stone-200/80 flex items-center justify-center text-stone-600 shrink-0 mt-0.5 sm:mt-0">
              <Lock className="w-3.5 h-3.5 text-stone-500" />
            </div>
            <p className="text-xs text-stone-500 font-sans leading-relaxed">
              {ndaNotice}
            </p>
          </div>
        </div>

        {/* =========================================================================
            2. IMAGE GALLERY (Directly Right After Subtitle & NDA Note)
           ========================================================================= */}
        <AssessmentGallery />

        {/* Divider */}
        <div className="border-t border-stone-200/80 my-8 sm:my-10" />

        {/* =========================================================================
            3. 5 KEY TOPICS SECTION
           ========================================================================= */}
        <div className="space-y-8 sm:space-y-10">
          {topics.map((topic, idx) => (
            <section key={idx} className="space-y-2.5 sm:space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-sans text-stone-950 tracking-tight">
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
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 font-sans leading-relaxed"
                    >
                      <span className="text-amber-500 font-semibold text-xs mt-1 shrink-0">
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

        {/* =========================================================================
            4. FOOTER / BOTTOM NAVIGATION
           ========================================================================= */}
        <div className="border-t border-stone-200/80 mt-10 sm:mt-12 pt-6 sm:pt-8 flex items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-500 hover:text-stone-950 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Selected Works</span>
          </Link>

          <span className="text-xs text-stone-400 font-mono">
            PT Inti Dinamis Case Study
          </span>
        </div>
      </div>
    </div>
  );
}
