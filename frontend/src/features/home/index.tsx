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
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-emerald-100 selection:text-emerald-900">
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
