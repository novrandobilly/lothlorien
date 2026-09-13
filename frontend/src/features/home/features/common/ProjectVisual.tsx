"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import {
  ShieldCheck,
  Gauge,
  WifiOff,
  Timer,
  ShoppingBag,
  CreditCard,
  Cpu,
  TrendingUp,
} from "lucide-react";
import liveStandingsImg from "@/assets/kickserve/live-standings.png";

export type ProjectVisualType =
  | "transfez"
  | "online-assessment"
  | "inti-dinamis"
  | "landing-page"
  | "kickserve"
  | "bagels";

interface ProjectVisualProps {
  type: ProjectVisualType;
  title: string;
  imageSrc?: StaticImageData | string;
  className?: string;
}

export function ProjectVisual({
  type,
  title,
  imageSrc,
  className = "",
}: ProjectVisualProps) {
  // If Kickserve and no custom image passed, use the real production screenshot
  const resolvedImage =
    imageSrc || (type === "kickserve" ? liveStandingsImg : undefined);

  return (
    <div
      className={`relative w-full h-48 sm:h-52 md:h-full min-h-[200px] rounded-2xl overflow-hidden bg-linear-to-br from-stone-50 via-white to-stone-100/90 border border-stone-200/90 group-hover:border-stone-300 shadow-xs transition-all duration-300 flex flex-col justify-between p-3.5 sm:p-4 select-none ${className}`}
    >
      {/* Background Accent Soft Ambient Glow */}
      <div
        className={`absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-500 blur-2xl -z-0 ${
          type === "transfez"
            ? "bg-radial from-amber-400/20 via-transparent to-transparent"
            : type === "online-assessment"
            ? "bg-radial from-cyan-400/20 via-transparent to-transparent"
            : type === "inti-dinamis"
            ? "bg-radial from-amber-500/15 via-transparent to-transparent"
            : type === "landing-page"
            ? "bg-radial from-violet-400/20 via-transparent to-transparent"
            : type === "kickserve"
            ? "bg-radial from-emerald-400/20 via-transparent to-transparent"
            : "bg-radial from-amber-400/20 via-transparent to-transparent"
        }`}
      />

      {/* Grid Blueprint Overlay Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none -z-0"
        style={{
          backgroundImage: `radial-gradient(circle, #000000 1px, transparent 1px)`,
          backgroundSize: "16px 16px",
        }}
      />

      {/* Real image preview if available */}
      {resolvedImage ? (
        <div className="relative w-full h-full rounded-xl overflow-hidden border border-stone-200/90 bg-white shadow-xs flex flex-col z-10">
          {/* Top simulated mini frame header */}
          <div className="h-6 bg-stone-100/90 border-b border-stone-200 px-2.5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-400" />
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <span className="text-[10px] font-mono text-stone-500 truncate max-w-[140px]">
              {title}
            </span>
            <span className="inline-flex items-center gap-1 text-[9px] font-mono text-emerald-700 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              LIVE
            </span>
          </div>

          {/* Screenshot with subtle hover zoom */}
          <div className="relative flex-1 w-full overflow-hidden bg-stone-100">
            <Image
              src={resolvedImage}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      ) : (
        /* Bespoke High-Fidelity Light UI Placeholder Wireframes */
        <div className="relative w-full h-full flex flex-col justify-between rounded-xl p-3 bg-white/95 border border-stone-200/90 shadow-xs backdrop-blur-xs z-10">
          {/* Top Bar */}
          <div className="flex items-center justify-between gap-2 border-b border-stone-200/90 pb-2 mb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-stone-300" />
              <span className="w-2 h-2 rounded-full bg-stone-300" />
              <span className="w-2 h-2 rounded-full bg-stone-300" />
            </div>
            <span className="text-[10px] font-mono text-stone-500 truncate">
              {type === "transfez" && "transfez.com/fx-portal"}
              {type === "online-assessment" && "exam.enterprise.internal"}
              {type === "inti-dinamis" && "intidinamis.co.id/catalog"}
              {type === "landing-page" && "vitals.performance.preview"}
              {type === "bagels" && "bagels.envienstudio.com"}
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-stone-100 text-stone-600 font-medium">
              MOCKUP
            </span>
          </div>

          {/* Center Visual Mockup Content */}
          <div className="flex-1 flex flex-col justify-center gap-2">
            {type === "transfez" && (
              <>
                <div className="flex items-center justify-between p-2 rounded-lg bg-amber-50/70 border border-amber-200/80">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-amber-900">
                      1,000 USD
                    </span>
                    <span className="text-[10px] text-stone-400">→</span>
                    <span className="text-xs font-mono font-bold text-emerald-700">
                      16,245,000 IDR
                    </span>
                  </div>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-medium">
                    Live FX
                  </span>
                </div>
                <div className="flex items-center justify-between px-2 py-1.5 rounded-md bg-stone-50 border border-stone-200 text-[11px] text-stone-700 font-sans">
                  <span className="flex items-center gap-1.5 text-stone-800">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                    B2B Treasury Batch #1042
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700 font-semibold">
                    Verified
                  </span>
                </div>
              </>
            )}

            {type === "online-assessment" && (
              <>
                <div className="flex items-center justify-between p-2 rounded-lg bg-cyan-50/70 border border-cyan-200/80">
                  <div className="flex items-center gap-1.5 text-xs font-sans text-cyan-900 font-medium">
                    <WifiOff className="w-3.5 h-3.5 text-cyan-600" />
                    <span>100% Offline Engine</span>
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-100 text-cyan-800 font-semibold flex items-center gap-1">
                    <Timer className="w-3 h-3" />
                    00:45:20
                  </span>
                </div>
                <div className="flex items-center justify-between gap-1 px-1 py-1">
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-mono border border-emerald-200">
                    Q1 ✓
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-mono border border-emerald-200">
                    Q2 ✓
                  </span>
                  <span className="px-2 py-0.5 rounded bg-cyan-100 text-cyan-900 text-[10px] font-mono border border-cyan-300 font-bold">
                    Q3 (Active)
                  </span>
                  <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-500 text-[10px] font-mono border border-stone-200">
                    Q4
                  </span>
                  <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-500 text-[10px] font-mono border border-stone-200">
                    Q5
                  </span>
                </div>
              </>
            )}

            {type === "inti-dinamis" && (
              <>
                <div className="flex items-center justify-between p-2 rounded-lg bg-amber-50/50 border border-amber-200/80">
                  <div className="flex items-center gap-1.5 text-xs font-sans text-stone-800 font-medium">
                    <Cpu className="w-3.5 h-3.5 text-amber-600" />
                    <span>Heavy Machinery Catalog</span>
                  </div>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-semibold">
                    Precision CNC
                  </span>
                </div>
                <div className="flex items-center justify-between px-2 py-1.5 rounded-md bg-stone-50 border border-stone-200 text-[11px] text-stone-600 font-sans">
                  <span>RFQ Pipeline</span>
                  <span className="text-[10px] font-mono text-amber-700 font-semibold">
                    Instant Quote
                  </span>
                </div>
              </>
            )}

            {type === "landing-page" && (
              <>
                <div className="flex items-center justify-between p-2 rounded-lg bg-violet-50/60 border border-violet-200/80">
                  <div className="flex items-center gap-1.5 text-xs font-sans text-violet-900 font-medium">
                    <Gauge className="w-3.5 h-3.5 text-violet-600" />
                    <span>Core Web Vitals</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold border border-emerald-300">
                    Score: 99/100
                  </span>
                </div>
                <div className="flex items-center justify-between px-2 py-1.5 rounded-md bg-stone-50 border border-stone-200 text-[11px] text-stone-700 font-sans">
                  <span className="flex items-center gap-1 text-stone-600">
                    <TrendingUp className="w-3 h-3 text-emerald-600" />
                    Conversion Engine
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700 font-semibold">
                    +34% Uplift
                  </span>
                </div>
              </>
            )}

            {type === "bagels" && (
              <>
                <div className="flex items-center justify-between p-2 rounded-lg bg-amber-50/70 border border-amber-200/80">
                  <div className="flex items-center gap-1.5 text-xs font-sans text-amber-950 font-medium">
                    <ShoppingBag className="w-3.5 h-3.5 text-amber-600" />
                    <span>Batch #14: Sourdough</span>
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 font-bold">
                    18/20 Claimed
                  </span>
                </div>
                <div className="flex items-center justify-between px-2 py-1.5 rounded-md bg-stone-50 border border-stone-200 text-[11px] text-stone-700 font-sans">
                  <span className="flex items-center gap-1 text-stone-600">
                    <CreditCard className="w-3 h-3 text-emerald-600" />
                    Indonesian QRIS
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700 font-semibold">
                    Instant Pay
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Bottom Micro Footer */}
          <div className="pt-2 border-t border-stone-200/90 flex items-center justify-between text-[10px] font-mono text-stone-500">
            <span className="flex items-center gap-1 text-stone-600">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Production Ready
            </span>
            <span className="text-stone-400">Envien Studio</span>
          </div>
        </div>
      )}
    </div>
  );
}
