import React from "react";
import { HeroSection } from "./features/hero-section";
import { ProblemSolutionSection } from "./features/ProblemSolutionSection";
import { CaseStudiesSection } from "./features/case-studies";
import { ExperiencesSection } from "./features/experiences";
import { ProcessSection } from "./features/ProcessSection";
import { PricingTiersSection } from "./features/PricingTiersSection";
import { FaqSection } from "./features/FaqSection";
import { ContactUsSection } from "./features/ContactUsSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CoreTechnicalSection } from "./features/CoreTechnicalSection";

export function HomePageFeature() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090b10] text-[#f5f2eb] selection:bg-amber-400/20 selection:text-amber-200">
      {/* Sticky Header / Navigation */}
      <Header />

      {/* Main Content: 9 Modular Sections */}
      <main className="flex-1">
        <HeroSection />

        {/* <ProblemSolutionSection /> */}
        <CaseStudiesSection />
        <ExperiencesSection />
        {/* <ProcessSection /> */}
        {/* <PricingTiersSection /> */}
        {/* <FaqSection /> */}
        {/* <CoreTechnicalSection /> */}
        <ContactUsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePageFeature;
