import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { KickserveHero } from "./features/KickserveHero";
import { KickserveInteractiveDemo } from "./features/KickserveInteractiveDemo";
import { KickserveOverview } from "./features/KickserveOverview";
import { KickserveFeatures } from "./features/KickserveFeatures";
import { KickserveArchitecture } from "./features/KickserveArchitecture";

export function KickservePageFeature() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090b10] text-[#f5f2eb] selection:bg-amber-400/20 selection:text-amber-200">
      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <KickserveHero />
        <KickserveInteractiveDemo />
        <KickserveOverview />
        <KickserveFeatures />
        <KickserveArchitecture />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default KickservePageFeature;
