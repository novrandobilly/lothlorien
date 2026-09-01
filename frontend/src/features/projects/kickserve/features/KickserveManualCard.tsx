"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Users,
  Shuffle,
  Trophy,
  Wifi,
  Battery,
  Plus,
  Flame,
  Share2,
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

      {/* Authentic Parchment / Paper Manual Card Container */}
      <div className="rounded-3xl bg-linear-to-b from-[#fbf8f1] via-[#f7f2e7] to-[#f2ebdc] border border-[#dccfb4] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.75),0_0_0_1px_rgba(0,0,0,0.05)] ring-1 ring-amber-900/10 p-7 sm:p-10 md:p-12 text-stone-900">
        {/* 1. Header & Title */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-900/10 border border-amber-900/20 text-amber-950 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <span>{kickserveData.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal font-serif text-stone-900 tracking-tight leading-tight">
            {kickserveData.title}
          </h1>
        </div>

        {/* 2. Description */}
        <p className="text-base sm:text-lg text-stone-700 font-sans leading-relaxed mb-8">
          {kickserveData.description}
        </p>

        {/* 3. "What can you manage?" session */}
        <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-[#f0e7d5]/85 border border-[#dfd3bd] shadow-xs">
          <h2 className="text-xl sm:text-2xl font-serif text-stone-900 mb-6">
            What can you manage?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {kickserveData.whatCanYouManage.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3.5">
                <span className="text-amber-800 font-bold text-sm mt-0.5 shrink-0">
                  ◆
                </span>
                <div>
                  <h3 className="text-base font-serif font-medium text-stone-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-stone-700 leading-relaxed mt-1 font-sans">
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
              className="px-8 py-3.5 text-sm sm:text-base font-semibold shadow-lg shadow-amber-900/25 cursor-pointer text-stone-950"
              rightIcon={<ExternalLink className="w-4.5 h-4.5" />}
            >
              {kickserveData.buttonText}
            </LothlorienButton>
          </Link>
        </div>

        {/* 5. Line Divider */}
        <div className="border-t border-[#d8ccb4] my-10 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-[#ede3ce] text-xs font-mono uppercase tracking-widest text-stone-700 border border-[#d8ccb4] rounded-full py-0.5 shadow-2xs">
            App Gallery
          </div>
        </div>

        {/* 6. App Gallery (Portrait PWA Phone Mockup + Tabs Underneath) */}
        <div className="mt-8 flex flex-col items-center">
          {/* Portrait PWA Smartphone Mockup Frame */}
          <div className="w-full max-w-72.5 sm:max-w-77.5 rounded-[38px] p-3 sm:p-3.5 bg-stone-950 border-2 border-stone-800 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] ring-1 ring-black/10">
            {/* Dynamic Island / Speaker Notch */}
            <div className="w-22 h-3.5 bg-stone-950 rounded-full mx-auto mb-2.5" />

            {/* Smartphone Screen Viewport */}
            <div className="w-full rounded-[28px] overflow-hidden bg-[#0a0805] border border-stone-800/90 flex flex-col min-h-112.5 sm:min-h-120 justify-between p-4 font-sans text-xs">
              {/* Status Bar */}
              <div className="flex items-center justify-between text-[10px] text-stone-400 px-1 mb-3">
                <span className="font-mono font-medium text-stone-300">
                  9:41
                </span>
                <div className="flex items-center gap-1.5 text-stone-400">
                  <Wifi className="w-3 h-3" />
                  <Battery className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* App PWA Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-stone-800/80 mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="font-serif font-bold text-stone-100 text-sm tracking-tight">
                    Kickserve
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-stone-900 text-amber-300/90 border border-stone-800">
                  PWA
                </span>
              </div>

              {/* Dynamic Screen Content Based on Active Tab */}
              <div className="flex-1 flex flex-col justify-center">
                {activeTabId === "custom-players" && (
                  <div className="space-y-2 py-1">
                    {/* Add Player Bar */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-stone-900 border border-stone-800 text-[11px]">
                      <span className="text-stone-400 font-sans">
                        + Add player name...
                      </span>
                      <div className="w-5 h-5 rounded-lg bg-amber-600 text-stone-950 font-bold flex items-center justify-center">
                        <Plus className="w-3 h-3" />
                      </div>
                    </div>

                    {/* Player Chips / List */}
                    <div className="space-y-1.5 max-h-65 overflow-hidden">
                      {[
                        { name: "Billy N.", seed: "#1 Seed", court: "Court 1" },
                        { name: "Sarah K.", seed: "#2 Seed", court: "Court 1" },
                        {
                          name: "Michael T.",
                          seed: "#3 Seed",
                          court: "Court 2",
                        },
                        { name: "Emma R.", seed: "#4 Seed", court: "Court 2" },
                        { name: "David L.", seed: "#5 Seed", court: "Court 3" },
                        {
                          name: "Jessica W.",
                          seed: "#6 Seed",
                          court: "Court 3",
                        },
                      ].map((p, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-2 rounded-xl bg-[#14100b] border border-stone-800 text-stone-200"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-mono text-[9px] font-bold">
                              {p.name.charAt(0)}
                            </div>
                            <span className="font-medium text-[11px] text-stone-100">
                              {p.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[9px] text-stone-400 font-mono">
                              {p.seed}
                            </span>
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-stone-900 text-amber-200 font-mono border border-stone-800">
                              {p.court}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="text-center pt-1">
                      <span className="text-[10px] text-stone-500 font-mono">
                        12 of 32 Players Active
                      </span>
                    </div>
                  </div>
                )}

                {activeTabId === "matchmaking" && (
                  <div className="space-y-2.5 py-1">
                    {/* Round Header */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-amber-500/10 border border-amber-500/20">
                      <div className="flex items-center gap-1.5 text-amber-300 font-semibold text-[11px]">
                        <Flame className="w-3.5 h-3.5" />
                        <span>Round 1 of 5</span>
                      </div>
                      <span className="text-[10px] font-mono text-stone-400">
                        Americano 21 pts
                      </span>
                    </div>

                    {/* Court 1 */}
                    <div className="p-2.5 rounded-xl bg-[#14100b] border border-stone-800 space-y-1.5">
                      <div className="flex items-center justify-between text-[10px] text-stone-400">
                        <span className="font-mono text-amber-300 font-semibold">
                          COURT 1
                        </span>
                        <span className="font-mono text-amber-200 font-bold">
                          21 - 16
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-stone-200">
                        <span className="truncate">
                          Billy N. &amp; Sarah K.
                        </span>
                        <span className="text-stone-500 text-[10px] px-1">
                          vs
                        </span>
                        <span className="truncate">Michael &amp; Emma R.</span>
                      </div>
                    </div>

                    {/* Court 2 */}
                    <div className="p-2.5 rounded-xl bg-[#14100b] border border-stone-800 space-y-1.5">
                      <div className="flex items-center justify-between text-[10px] text-stone-400">
                        <span className="font-mono text-amber-300 font-semibold">
                          COURT 2
                        </span>
                        <span className="font-mono text-amber-200 font-bold">
                          19 - 21
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-stone-200">
                        <span className="truncate">David L. &amp; Jessica</span>
                        <span className="text-stone-500 text-[10px] px-1">
                          vs
                        </span>
                        <span className="truncate">
                          Carlos M. &amp; Aria P.
                        </span>
                      </div>
                    </div>

                    <div className="text-center pt-1">
                      <span className="text-[10px] text-stone-500 font-mono">
                        Zero Repeat Partners Verified
                      </span>
                    </div>
                  </div>
                )}

                {activeTabId === "live-standings" && (
                  <div className="space-y-2 py-1">
                    {/* Podium Top 3 */}
                    <div className="grid grid-cols-3 gap-1 text-center mb-1">
                      <div className="p-1.5 rounded-xl bg-stone-900 border border-stone-800">
                        <span className="text-xs">🥈</span>
                        <div className="text-[10px] font-medium text-stone-200 truncate mt-0.5">
                          Sarah K.
                        </div>
                        <div className="text-[9px] font-mono text-amber-300 font-bold">
                          39 pts
                        </div>
                      </div>
                      <div className="p-1.5 rounded-xl bg-amber-500/15 border border-amber-500/30">
                        <span className="text-sm">🥇</span>
                        <div className="text-[10px] font-bold text-amber-200 truncate mt-0.5">
                          Billy N.
                        </div>
                        <div className="text-[9px] font-mono text-amber-200 font-bold">
                          42 pts
                        </div>
                      </div>
                      <div className="p-1.5 rounded-xl bg-stone-900 border border-stone-800">
                        <span className="text-xs">🥉</span>
                        <div className="text-[10px] font-medium text-stone-200 truncate mt-0.5">
                          Michael
                        </div>
                        <div className="text-[9px] font-mono text-amber-300 font-bold">
                          36 pts
                        </div>
                      </div>
                    </div>

                    {/* Quick Standings Rows */}
                    <div className="space-y-1">
                      {[
                        { rank: "4", name: "Emma R.", pts: "34", diff: "+6" },
                        { rank: "5", name: "Carlos M.", pts: "31", diff: "+2" },
                      ].map((r, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-1.5 px-2 rounded-lg bg-[#14100b] border border-stone-800 text-[10px]"
                        >
                          <span className="font-mono text-stone-400">
                            {r.rank}. {r.name}
                          </span>
                          <div className="flex items-center gap-2 font-mono">
                            <span className="text-amber-200 font-bold">
                              {r.pts} pts
                            </span>
                            <span className="text-stone-400">{r.diff}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* WhatsApp Export Action */}
                    <div className="pt-1">
                      <div className="w-full py-1.5 px-3 rounded-lg bg-[#1a140d] border border-amber-500/30 text-amber-200 font-medium text-[10px] flex items-center justify-center gap-1.5 shadow-xs">
                        <Share2 className="w-3 h-3 text-amber-300" />
                        <span>Share Results to WhatsApp</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Home Indicator Bar */}
              <div className="w-22 h-1 bg-stone-700 rounded-full mx-auto mt-3" />
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
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-stone-900 text-amber-100 border border-stone-900 shadow-md scale-102"
                      : "bg-[#ede3ce] text-stone-700 border border-[#d5c7ab] hover:bg-[#e4dac0] hover:text-stone-900 shadow-2xs"
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 ${isActive ? "text-amber-300" : "text-stone-600"}`}
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
