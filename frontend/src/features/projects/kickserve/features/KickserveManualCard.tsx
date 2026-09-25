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
      {/* Top Back Navigation Link */}
      <div className="mb-6 sm:mb-8">
        <Link
          href="/#products"
          className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-500 hover:text-stone-950 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-stone-400 group-hover:text-stone-950 group-hover:-translate-x-1 transition-all" />
          <span>Back to Products</span>
        </Link>
      </div>

      {/* Main Card Container */}
      <div className="rounded-3xl bg-white border border-stone-200/80 shadow-xl shadow-stone-900/5 p-6 sm:p-10 md:p-12 text-stone-900">
        {/* 1. Badge & Title */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100/90 border border-stone-200/80 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-5 shadow-2xs font-sans">
            <span>{kickserveData.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-stone-950 tracking-tight leading-tight">
            {kickserveData.title}
          </h1>
        </div>

        {/* 2. Hero Summary Tagline */}
        <p className="text-base sm:text-lg text-stone-600 font-sans leading-relaxed mb-8 max-w-2xl">
          {kickserveData.description}
        </p>

        {/* 3. "What can you manage?" Feature Box */}
        <div className="mb-10 sm:mb-12 p-6 sm:p-8 rounded-2xl bg-[#f4f3ee]/80 border border-stone-200/80">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#f26522]" />
            <h2 className="text-lg sm:text-xl font-bold font-sans text-stone-950 tracking-tight">
              What Can You Manage?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {kickserveData.whatCanYouManage.map((item, idx) => (
              <div
                key={idx}
                className="group/item p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-stone-200/80 hover:border-stone-300 hover:shadow-xs transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f26522] shrink-0" />
                  <h3 className="text-sm sm:text-base font-bold font-sans text-stone-950 tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-stone-500 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. "Launch Kickserve" CTA Button (Centered) */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <a
            href={kickserveData.launchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-stone-950 text-white hover:bg-stone-800 text-sm sm:text-base font-semibold shadow-sm hover:shadow-md hover:shadow-stone-950/15 transition-all duration-200 active:scale-95 group"
          >
            <span>{kickserveData.buttonText}</span>
            <ExternalLink className="w-4 h-4 text-[#f26522] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
          </a>
        </div>

        {/* 5. Line Divider with App Gallery Eyebrow */}
        <div className="border-t border-stone-200/80 my-10 sm:my-12 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-white text-[11px] sm:text-xs font-semibold font-sans uppercase tracking-wider text-stone-500 border border-stone-200/80 rounded-full shadow-2xs">
            App Gallery
          </div>
        </div>

        {/* 6. App Gallery (Portrait PWA Phone Mockup + Tabs Underneath) */}
        <div className="mt-8 flex flex-col items-center">
          {/* Portrait PWA Smartphone Mockup Frame */}
          <div className="w-full max-w-70 sm:max-w-77.5 rounded-[42px] sm:rounded-[46px] p-2.5 sm:p-3 bg-stone-950 border-4 border-stone-800/90 shadow-2xl shadow-stone-950/15 ring-1 ring-stone-950/20">
            {/* Dynamic Island / Speaker Notch */}
            <div className="w-20 sm:w-24 h-3.5 sm:h-4 bg-stone-900 rounded-full mx-auto mb-2 sm:mb-2.5 flex items-center justify-end px-2">
              <div className="w-1.5 h-1.5 rounded-full bg-stone-800" />
            </div>

            {/* Smartphone Screen Viewport */}
            <div className="relative w-full rounded-b-[30px] sm:rounded-b-[34px] overflow-hidden bg-stone-100 border border-stone-800/40 shadow-inner">
              <Image
                key={activeTabId}
                src={currentScreenshot.src}
                alt={currentScreenshot.alt}
                className="w-full h-auto object-cover rounded-b-[30px] sm:rounded-b-[34px] transition-all duration-300"
                priority
              />
            </div>
          </div>

          {/* Gallery Tabs (Positioned Underneath Phone Mockup) */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mt-7 sm:mt-8">
            {kickserveData.galleryTabs.map((tab) => {
              const Icon = TAB_ICONS[tab.id as keyof typeof TAB_ICONS] || Users;
              const isActive = tab.id === activeTabId;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTabId(tab.id)}
                  className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-sans cursor-pointer transition-all duration-200 active:scale-95 ${
                    isActive
                      ? "bg-stone-950 text-white font-semibold shadow-xs"
                      : "bg-white text-stone-600 hover:text-stone-950 border border-stone-200/80 hover:border-stone-300 font-medium shadow-2xs hover:bg-stone-50"
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 transition-colors ${
                      isActive ? "text-[#f26522]" : "text-stone-400"
                    }`}
                  />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 7. Footer / Bottom Links inside the Card */}
        <div className="border-t border-stone-200/80 mt-12 sm:mt-14 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-500 hover:text-stone-950 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 text-stone-400 group-hover:text-stone-950 group-hover:-translate-x-1 transition-all" />
            <span>Back to Products</span>
          </Link>

          <a
            href={kickserveData.launchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-900 hover:text-[#f26522] transition-colors group"
          >
            <span>Launch Kickserve</span>
            <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#f26522] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </div>
      </div>
    </div>
  );
}
