"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Users, Shuffle, Trophy } from "lucide-react";
import { LothlorienButton } from "@/components/ui/LothlorienButton";
import { kickserveData } from "../constants";
import customPlayersImg from "@/assets/kickserve/custom-players.png";
import matchmakingImg from "@/assets/kickserve/match-making.png";
import liveStandingsImg from "@/assets/kickserve/live-standings.png";

const TAB_ICONS = {
  "custom-players": Users,
  matchmaking: Shuffle,
  "live-standings": Trophy,
};

const SCREENSHOTS = {
  "custom-players": {
    src: customPlayersImg,
    alt: "Kickserve Custom Players Management",
  },
  matchmaking: {
    src: matchmakingImg,
    alt: "Kickserve Americano Matchmaking Rounds",
  },
  "live-standings": {
    src: liveStandingsImg,
    alt: "Kickserve Real-Time Standings & Leaderboard",
  },
};

export function KickserveManualCard() {
  const [activeTabId, setActiveTabId] = useState<string>("custom-players");

  const currentScreenshot =
    SCREENSHOTS[activeTabId as keyof typeof SCREENSHOTS] ||
    SCREENSHOTS["custom-players"];

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

      {/* Obsidian Codex Manual Card Container */}
      <div className="rounded-3xl bg-linear-to-b from-[#0e121b] via-[#090c14] to-[#070910] border border-stone-700/70 shadow-2xl shadow-black/80 ring-1 ring-white/5 p-7 sm:p-10 md:p-12 text-stone-100">
        {/* 1. Header & Title */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <span>{kickserveData.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal font-serif text-stone-100 tracking-tight leading-tight">
            {kickserveData.title}
          </h1>
        </div>

        {/* 2. Description */}
        <p className="text-base sm:text-lg text-stone-400 font-sans leading-relaxed mb-8">
          {kickserveData.description}
        </p>

        {/* 3. "What can you manage?" session */}
        <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-[#080b12]/80 border border-stone-800/90 shadow-inner">
          <h2 className="text-xl sm:text-2xl font-serif text-stone-100 mb-6 font-normal">
            What can you manage?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {kickserveData.whatCanYouManage.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3.5">
                <span className="text-emerald-400 font-semibold text-sm mt-0.5 shrink-0">
                  ◆
                </span>
                <div>
                  <h3 className="text-base font-serif font-medium text-stone-200">
                    {item.title}
                  </h3>
                  <p className="text-sm text-stone-400 leading-relaxed mt-1 font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. "Launch Kickserve" CTA Button (Centered) */}
        <div className="flex justify-center mb-10">
          <Link
            href={kickserveData.launchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <LothlorienButton
              variant="gold"
              size="lg"
              className="px-8 py-3.5 text-sm sm:text-base font-semibold shadow-lg shadow-amber-950/60 cursor-pointer text-stone-950 bg-linear-to-r from-amber-600 via-amber-500 to-amber-600 border border-amber-300/90"
              rightIcon={<ExternalLink className="w-4.5 h-4.5" />}
            >
              {kickserveData.buttonText}
            </LothlorienButton>
          </Link>
        </div>

        {/* 5. Line Divider */}
        <div className="border-t border-stone-800/80 my-10 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-[#131724] text-xs font-mono uppercase tracking-widest text-stone-300 border border-stone-800/90 rounded-full py-0.5 shadow-2xs font-semibold">
            App Gallery
          </div>
        </div>

        {/* 6. App Gallery (Portrait PWA Phone Mockup + Tabs Underneath) */}
        <div className="mt-8 flex flex-col items-center">
          {/* Portrait PWA Smartphone Mockup Frame */}
          <div className="w-full max-w-72.5 sm:max-w-77.5 rounded-[38px] p-2.5 sm:p-3 bg-[#0a0d14] border-2 border-stone-800 shadow-2xl shadow-black ring-1 ring-white/5">
            {/* Dynamic Island / Speaker Notch */}
            <div className="w-22 h-3.5 bg-stone-950 rounded-full mx-auto mb-2.5" />

            {/* Smartphone Screen Viewport */}
            <div className="relative w-full rounded-t-0 rounded-b-[28px] overflow-hidden bg-[#070910] border border-stone-800/90 shadow-inner">
              <Image
                src={currentScreenshot.src}
                alt={currentScreenshot.alt}
                className="w-full h-auto object-cover rounded-t-0 rounded-b-[28px]"
                priority
              />
            </div>
          </div>

          {/* 3b. Gallery Tabs (Positioned Underneath Phone Mockup) */}
          <div className="flex flex-wrap justify-center gap-2.5 mt-8">
            {kickserveData.galleryTabs.map((tab) => {
              const Icon = TAB_ICONS[tab.id as keyof typeof TAB_ICONS] || Users;
              const isActive = tab.id === activeTabId;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm cursor-pointer ${
                    isActive
                      ? "bg-[#1a2233] text-amber-200 border border-amber-500/40 shadow-xs font-semibold"
                      : "bg-[#131724] text-stone-400 border border-stone-800/90 font-medium"
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 ${
                      isActive ? "text-amber-300" : "text-stone-500"
                    }`}
                  />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
