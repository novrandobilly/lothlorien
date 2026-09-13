"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, Layers } from "lucide-react";
import { FeaturedSystem } from "../constants";
import { useModal } from "@/context/ModalContext";
import { TransfezModalContent } from "./transfez-modal-content";

interface FeaturedCardProps {
  system: FeaturedSystem;
}

export function FeaturedCard({ system }: FeaturedCardProps) {
  const { openModal } = useModal();
  const Icon = system.icon;

  const handleOpenTransfez = () => {
    openModal({
      title: "Transfez — Corporate Works & Projects",
      content: <TransfezModalContent />,
      maxWidth: "xl",
    });
  };

  const getBadgeStyles = () => {
    switch (system.badgeType) {
      case "enterprise":
        return "bg-amber-500/10 text-amber-300 border-amber-500/30";
      case "case-study":
        return "bg-emerald-500/10 text-emerald-300 border-emerald-500/30";
      case "in-development":
        return "bg-stone-800 text-stone-400 border-stone-700";
    }
  };

  return (
    <div className="flex flex-col w-full h-full justify-between p-7 sm:p-8 rounded-3xl bg-linear-to-b from-[#0e121b] via-[#090c14] to-[#070910] border border-stone-700/70 hover:border-amber-500/50 shadow-2xl shadow-black/80 hover:shadow-[0_0_35px_-5px_rgba(212,175,55,0.2)] transition-all duration-300 group ring-1 ring-white/5">
      <div>
        {/* Top Meta Strip: Category & Status Badge */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="text-[11px] uppercase tracking-wider font-semibold text-stone-400 font-mono">
            {system.category}
          </span>

          <span
            className={`px-2.5 py-0.5 rounded-full text-xs font-medium border shrink-0 ${getBadgeStyles()}`}
          >
            {system.badge}
          </span>
        </div>

        {/* Title & Icon */}
        <div className="flex items-start gap-3.5 mb-2.5">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center shrink-0 text-amber-300 shadow-2xs mt-0.5">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-normal font-serif text-stone-100 group-hover:text-amber-200 transition-colors">
              {system.title}
            </h3>
            <p className="text-xs text-stone-400 mt-0.5 flex flex-wrap items-center gap-1.5 font-sans">
              <span className="text-stone-300">{system.client}</span>
              <span>&bull;</span>
              <span className="text-amber-400/90">{system.role}</span>
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-stone-400 mt-3 mb-6 leading-relaxed font-sans">
          {system.description}
        </p>

        {/* Highlights List */}
        <div className="mb-8">
          <span className="text-[11px] uppercase tracking-wider font-semibold text-stone-500 font-mono block mb-2.5">
            Key Architecture &amp; Delivery:
          </span>
          <ul className="space-y-2 text-sm text-stone-400 font-sans">
            {system.highlights.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-amber-400/90 font-semibold text-xs mt-0.5">
                  ◆
                </span>
                <span className="leading-relaxed text-stone-400 text-xs sm:text-sm">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Area */}
      <div className="pt-4 border-t border-stone-800/80">
        {system.isTransfez ? (
          <button
            type="button"
            onClick={handleOpenTransfez}
            className="inline-flex items-center justify-center gap-2 w-full text-xs sm:text-sm font-medium transition-all duration-150 rounded-full px-5 py-2.5 border border-amber-500/40 bg-stone-900/40 text-amber-200 hover:bg-amber-500/15 hover:border-amber-400/80 hover:text-amber-100 active:bg-amber-500/25 backdrop-blur-xs shadow-xs hover:shadow-[0_0_20px_-3px_rgba(212,175,55,0.25)] cursor-pointer"
          >
            <Layers className="w-4 h-4 text-amber-300 shrink-0" />
            <span>{system.buttonText || "Explore Corporate Works"}</span>
          </button>
        ) : system.status === "case-study" && system.url ? (
          <Link
            href={system.url}
            className="inline-flex items-center justify-center gap-2 w-full text-xs sm:text-sm font-medium transition-all duration-150 rounded-full px-5 py-2.5 border border-amber-500/35 bg-stone-900/30 text-amber-200/90 hover:bg-amber-500/10 hover:border-amber-400/65 hover:text-amber-100 active:bg-amber-500/20 backdrop-blur-xs shadow-xs hover:shadow-sm"
          >
            <span>{system.buttonText || "Read Case Study"}</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
        ) : (
          <div className="inline-flex items-center justify-center gap-2 w-full text-xs sm:text-sm font-medium rounded-full px-5 py-2.5 border border-stone-800 bg-stone-900/30 text-stone-500 cursor-not-allowed select-none">
            <Clock className="w-3.5 h-3.5 shrink-0" />
            <span>{system.buttonText || "Coming Soon"}</span>
          </div>
        )}
      </div>
    </div>
  );
}
