import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { KickserveManualCard } from "./features/KickserveManualCard";

export function KickservePageFeature() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-stone-900 selection:bg-amber-500/20 selection:text-amber-900 relative overflow-hidden">
      {/* Subtle ambient warm background glow matching homepage */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-80 -right-20 w-96 h-96 bg-[#f26522]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Sticky Header / Navigation */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <KickserveManualCard />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default KickservePageFeature;

