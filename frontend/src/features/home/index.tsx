import React from "react";
import { HeroSection } from "./features/hero-section";
import { ProblemSolutionSection } from "./features/ProblemSolutionSection";
import { CaseStudiesSection } from "./features/case-studies";
import { ProcessSection } from "./features/ProcessSection";
import { PricingTiersSection } from "./features/PricingTiersSection";
import { AboutStudioSection } from "./features/AboutStudioSection";
import { FaqSection } from "./features/FaqSection";
import { CtaIntakeSection } from "./features/CtaIntakeSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function HomePageFeature() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Sticky Header / Navigation */}
      <Header />

      {/* Main Content: 9 Modular Sections */}
      <main className="flex-1">
        <HeroSection />

        {/* <ProblemSolutionSection /> */}
        <CaseStudiesSection />
        {/* <ProcessSection /> */}
        {/* <PricingTiersSection /> */}
        {/* <AboutStudioSection /> */}
        {/* <FaqSection /> */}
        <CtaIntakeSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePageFeature;
