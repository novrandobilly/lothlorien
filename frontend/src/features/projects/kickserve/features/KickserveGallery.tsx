"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Home, Users, Shuffle, Trophy } from "lucide-react";
import dsKickserveImg from "@/assets/digital-storefront/ds-kickserve.webp";
import customPlayersImg from "@/assets/kickserve/custom-players.png";
import matchmakingImg from "@/assets/kickserve/match-making.png";
import liveStandingsImg from "@/assets/kickserve/live-standings.png";

type TabId = "home-screen" | "custom-players" | "matchmaking" | "live-standings";

export function KickserveGallery() {
  const [activeTabId, setActiveTabId] = useState<TabId>("home-screen");

  const screenshots = {
    "home-screen": {
      src: dsKickserveImg,
      alt: "Kickserve Home Screen",
    },
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

  const currentScreenshot = screenshots[activeTabId];

  return (
    <div className="mb-8 sm:mb-10">
      {/* Line Divider with App Gallery Eyebrow */}
      <div className="border-t border-stone-200/80 my-10 sm:my-12 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-white text-[11px] sm:text-xs font-semibold font-sans uppercase tracking-wider text-stone-500 border border-stone-200/80 rounded-full shadow-2xs">
          App Gallery
        </div>
      </div>

      {/* App Gallery (Portrait PWA Phone Mockup + Tabs Underneath) */}
      <div className="mt-8 flex flex-col items-center">
        {/* Portrait PWA Smartphone Mockup Frame */}
        <div className="w-full max-w-70 sm:max-w-77.5 rounded-[36px] sm:rounded-[42px] p-1.5 sm:p-2 bg-stone-950 border-2 sm:border-[3px] border-stone-800/90 shadow-2xl shadow-stone-950/15 ring-1 ring-stone-950/20">
          {/* Smartphone Screen Viewport */}
          <div className="relative w-full rounded-[30px] sm:rounded-[36px] overflow-hidden bg-stone-100 border border-stone-800/30 shadow-inner">
            <Image
              key={activeTabId}
              src={currentScreenshot.src}
              alt={currentScreenshot.alt}
              className="w-full h-auto object-cover rounded-[30px] sm:rounded-[36px] transition-all duration-300"
              priority
            />
          </div>
        </div>

        {/* Gallery Tabs (Positioned Underneath Phone Mockup) */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mt-7 sm:mt-8">
          <button
            type="button"
            onClick={() => setActiveTabId("home-screen")}
            className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-sans cursor-pointer transition-all duration-200 active:scale-95 ${
              activeTabId === "home-screen"
                ? "bg-stone-950 text-white font-semibold shadow-xs"
                : "bg-white text-stone-600 hover:text-stone-950 border border-stone-200/80 hover:border-stone-300 font-medium shadow-2xs hover:bg-stone-50"
            }`}
          >
            <Home
              className={`w-3.5 h-3.5 transition-colors ${
                activeTabId === "home-screen"
                  ? "text-[#f26522]"
                  : "text-stone-400"
              }`}
            />
            <span>Home Screen</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTabId("custom-players")}
            className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-sans cursor-pointer transition-all duration-200 active:scale-95 ${
              activeTabId === "custom-players"
                ? "bg-stone-950 text-white font-semibold shadow-xs"
                : "bg-white text-stone-600 hover:text-stone-950 border border-stone-200/80 hover:border-stone-300 font-medium shadow-2xs hover:bg-stone-50"
            }`}
          >
            <Users
              className={`w-3.5 h-3.5 transition-colors ${
                activeTabId === "custom-players"
                  ? "text-[#f26522]"
                  : "text-stone-400"
              }`}
            />
            <span>Custom Players</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTabId("matchmaking")}
            className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-sans cursor-pointer transition-all duration-200 active:scale-95 ${
              activeTabId === "matchmaking"
                ? "bg-stone-950 text-white font-semibold shadow-xs"
                : "bg-white text-stone-600 hover:text-stone-950 border border-stone-200/80 hover:border-stone-300 font-medium shadow-2xs hover:bg-stone-50"
            }`}
          >
            <Shuffle
              className={`w-3.5 h-3.5 transition-colors ${
                activeTabId === "matchmaking"
                  ? "text-[#f26522]"
                  : "text-stone-400"
              }`}
            />
            <span>Matchmaking</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTabId("live-standings")}
            className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-sans cursor-pointer transition-all duration-200 active:scale-95 ${
              activeTabId === "live-standings"
                ? "bg-stone-950 text-white font-semibold shadow-xs"
                : "bg-white text-stone-600 hover:text-stone-950 border border-stone-200/80 hover:border-stone-300 font-medium shadow-2xs hover:bg-stone-50"
            }`}
          >
            <Trophy
              className={`w-3.5 h-3.5 transition-colors ${
                activeTabId === "live-standings"
                  ? "text-[#f26522]"
                  : "text-stone-400"
              }`}
            />
            <span>Live Standings</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default KickserveGallery;
