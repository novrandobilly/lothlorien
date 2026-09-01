import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { KickserveManualCard } from "./features/KickserveManualCard";

export function KickservePageFeature() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090b10] text-[#f5f2eb] selection:bg-amber-400/20 selection:text-amber-200">
      {/* Navigation */}
      <Header />

      {/* Main Content: Big Simple Manual Card Container */}
      <main className="flex-1">
        <KickserveManualCard />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default KickservePageFeature;
