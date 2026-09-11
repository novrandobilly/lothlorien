import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BagelsCaseStudy } from "./features/BagelsCaseStudy";

export function BagelsPageFeature() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090b10] text-[#f5f2eb] selection:bg-amber-400/20 selection:text-amber-200">
      {/* Navigation */}
      <Header />

      {/* Main Content: Case Study Container */}
      <main className="flex-1">
        <BagelsCaseStudy />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default BagelsPageFeature;
export * from "./constants";
export * from "./features/BagelsCaseStudy";
