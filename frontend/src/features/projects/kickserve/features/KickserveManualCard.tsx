"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  ImageIcon,
  Sparkles,
  Users,
  Shuffle,
  Trophy,
  Check,
} from "lucide-react";
import { LothlorienButton } from "@/components/ui/LothlorienButton";
import { kickserveData } from "../constants";

const TAB_ICONS = {
  "custom-players": Users,
  matchmaking: Shuffle,
  "live-standings": Trophy,
};

export function KickserveManualCard() {
  const [activeTabId, setActiveTabId] = useState<string>("custom-players");

  const activeTab =
    kickserveData.galleryTabs.find((t) => t.id === activeTabId) ||
    kickserveData.galleryTabs[0];

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

      {/* Big Simple Manual Card Container */}
      <div className="rounded-3xl bg-linear-to-b from-[#0e121b] via-[#090c14] to-[#070910] border border-stone-700/70 shadow-2xl shadow-black/80 p-7 sm:p-10 md:p-12 ring-1 ring-white/5">
        {/* 1. Header & Title */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>{kickserveData.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal font-serif text-stone-100 tracking-tight leading-tight">
            {kickserveData.title}
          </h1>
        </div>

        {/* 2. Description */}
        <p className="text-base sm:text-lg text-stone-300 font-sans leading-relaxed mb-8">
          {kickserveData.description}
        </p>

        {/* 3. "What can you manage?" section */}
        <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-stone-900/40 border border-stone-800/80">
          <h2 className="text-xl sm:text-2xl font-serif text-stone-100 mb-5 flex items-center gap-2">
            <span>What can you manage?</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {kickserveData.whatCanYouManage.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-emerald-400 font-semibold text-sm mt-0.5 shrink-0">
                  ◆
                </span>
                <div>
                  <h3 className="text-sm font-medium text-stone-200">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-400 leading-relaxed mt-0.5 font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. "Launch Kickserve" CTA Button */}
        <div className="mb-10">
          <Link
            href={kickserveData.launchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto"
          >
            <LothlorienButton
              variant="gold"
              size="lg"
              className="w-full sm:w-auto justify-center font-semibold"
              rightIcon={<ExternalLink className="w-4.5 h-4.5" />}
            >
              {kickserveData.buttonText}
            </LothlorienButton>
          </Link>
        </div>

        {/* 5. Line Divider */}
        <div className="border-t border-stone-800/90 my-10 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-[#090c14] text-xs font-mono uppercase tracking-widest text-stone-500">
            App Gallery
          </div>
        </div>

        {/* 6. App Gallery with Tabs */}
        <div className="mt-8">
          {/* Gallery Navigation Tabs */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {kickserveData.galleryTabs.map((tab) => {
              const Icon =
                TAB_ICONS[tab.id as keyof typeof TAB_ICONS] || Users;
              const isActive = tab.id === activeTabId;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-amber-500/20 text-amber-200 border border-amber-500/50 shadow-md shadow-amber-950/30"
                      : "bg-stone-900/70 text-stone-400 hover:text-stone-200 hover:bg-stone-800/60 border border-stone-800/80"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-amber-300" : "text-stone-400"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Preview Box / Image Placeholder */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0a0d15] border border-stone-800/90">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-serif text-stone-100 mb-2">
                {activeTab.title}
              </h3>
              <p className="text-sm text-stone-400 font-sans leading-relaxed">
                {activeTab.description}
              </p>
            </div>

            {/* Visual Image Placeholder Container */}
            <div className="relative w-full rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden flex flex-col items-center justify-center p-8 sm:p-12 text-center min-h-[300px] sm:min-h-[360px] group">
              {/* Background Glow Pattern */}
              <div className="absolute inset-0 bg-radial from-amber-500/5 via-emerald-500/5 to-transparent blur-xl pointer-events-none" />

              {/* Placeholder Graphic Frame */}
              <div className="relative z-10 flex flex-col items-center max-w-md">
                <div className="w-16 h-16 rounded-2xl bg-stone-900 border border-stone-700/60 flex items-center justify-center text-amber-300 mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <ImageIcon className="w-8 h-8 opacity-80" />
                </div>
                <div className="text-sm sm:text-base font-serif font-medium text-stone-200 mb-1">
                  {activeTab.placeholderLabel}
                </div>
                <p className="text-xs text-stone-500 font-sans mb-6">
                  Image Placeholder • High-resolution screenshot coming soon
                </p>

                {/* Wireframe Mockup Representation */}
                <div className="w-full bg-stone-900/90 border border-stone-800 rounded-xl p-4 text-left shadow-inner">
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-stone-800">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                    <span className="text-[10px] font-mono text-stone-500 ml-2">
                      kickserve.envienstudio.com / {activeTab.id}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {activeTab.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-xs text-stone-300"
                      >
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
