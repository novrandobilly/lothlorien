"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Trophy, Users, Shuffle } from "lucide-react";
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
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-500 hover:text-stone-900 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Case Studies</span>
        </Link>
      </div>

      {/* Clean White Codex Card Container */}
      <div className="rounded-3xl bg-white border border-stone-200 shadow-xl p-7 sm:p-10 md:p-12 text-stone-900">
        {/* 1. Header & Title */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <span>{kickserveData.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-stone-900 tracking-tight leading-tight">
            {kickserveData.title}
          </h1>
        </div>

        {/* 2. Hero Summary Tagline */}
        <p className="text-base sm:text-lg text-stone-600 font-sans leading-relaxed mb-8 max-w-3xl">
          {kickserveData.description}
        </p>

        {/* 3. "What can you manage?" session */}
        <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-emerald-50/40 border border-emerald-200">
          <h2 className="text-xl sm:text-2xl font-sans font-bold text-stone-900 mb-6">
            What Can You Manage?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {kickserveData.whatCanYouManage.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-stone-200 hover:border-emerald-400 transition-colors shadow-xs"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <h3 className="text-base font-sans font-semibold text-stone-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed mt-1 font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. "Launch Kickserve" CTA Button (Centered) */}
        <div className="flex justify-center mb-10">
          <a
            href={kickserveData.launchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm sm:text-base font-bold shadow-md shadow-amber-500/20 cursor-pointer text-stone-950 bg-amber-400 hover:bg-amber-500 border border-amber-300 transition-all group"
          >
            <span>{kickserveData.buttonText}</span>
            <ExternalLink className="w-4 h-4 text-stone-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </a>
        </div>

        {/* 5. Line Divider */}
        <div className="border-t border-stone-200 my-10 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-white text-xs font-mono uppercase tracking-widest text-stone-500 border border-stone-200 rounded-full py-0.5 shadow-2xs font-semibold">
            App Gallery
          </div>
        </div>

        {/* 6. App Gallery (Portrait PWA Phone Mockup + Tabs Underneath) */}
        <div className="mt-8 flex flex-col items-center">
          {/* Portrait PWA Smartphone Mockup Frame */}
          <div className="w-full max-w-72.5 sm:max-w-77.5 rounded-[38px] p-2.5 sm:p-3 bg-stone-900 border-2 border-stone-800 shadow-2xl shadow-stone-900/20">
            {/* Dynamic Island / Speaker Notch */}
            <div className="w-22 h-3.5 bg-black rounded-full mx-auto mb-2.5" />

            {/* Smartphone Screen Viewport */}
            <div className="relative w-full rounded-t-0 rounded-b-[28px] overflow-hidden bg-white border border-stone-800 shadow-inner">
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
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm cursor-pointer transition-all ${
                    isActive
                      ? "bg-emerald-800 text-white border border-emerald-700 shadow-sm font-semibold"
                      : "bg-stone-100 text-stone-700 border border-stone-200 font-medium hover:bg-stone-200"
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 ${
                      isActive ? "text-white" : "text-emerald-700"
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
