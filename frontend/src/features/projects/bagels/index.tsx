import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BagelsHero } from "./features/BagelsHero";
import { BagelsInteractiveDemo } from "./features/BagelsInteractiveDemo";
import { BagelsOverview } from "./features/BagelsOverview";
import { BagelsFeatures } from "./features/BagelsFeatures";
import { BagelsArchitecture } from "./features/BagelsArchitecture";

export function BagelsPageFeature() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090b10] text-[#f5f2eb] selection:bg-amber-400/20 selection:text-amber-200">
      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <BagelsHero />
        <BagelsInteractiveDemo />
        <BagelsOverview />
        <BagelsFeatures />
        <BagelsArchitecture />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default BagelsPageFeature;
