import React from "react";
import { HeroSection } from "./features/hero-section";
import { ProblemSolutionSection } from "./features/ProblemSolutionSection";
import { CaseStudiesSection } from "./features/CaseStudiesSection";
import { ProcessSection } from "./features/ProcessSection";
import { PricingTiersSection } from "./features/PricingTiersSection";
import { AboutStudioSection } from "./features/AboutStudioSection";
import { FaqSection } from "./features/FaqSection";
import { CtaIntakeSection } from "./features/CtaIntakeSection";
import { LothlorienButton } from "@/components/ui/LothlorienButton";
import { ArrowUpRight } from "lucide-react";

export function HomePageFeature() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Sticky Header / Navigation */}
      <header className="sticky top-0 z-50 w-full bg-stone-50/85 backdrop-blur-md border-b border-stone-200/80">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2 font-bold text-lg text-stone-900 tracking-tight"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-black text-sm shadow-xs">
              L
            </div>
            <span>Lothlorien</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-stone-600">
            <a
              href="#work"
              className="hover:text-emerald-700 transition-colors"
            >
              Work
            </a>
            <a
              href="#process"
              className="hover:text-emerald-700 transition-colors"
            >
              Process
            </a>
            <a
              href="#services"
              className="hover:text-emerald-700 transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="hover:text-emerald-700 transition-colors"
            >
              About
            </a>
            <a href="#faq" className="hover:text-emerald-700 transition-colors">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact">
              <LothlorienButton
                variant="primary"
                size="sm"
                rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                Get in Touch
              </LothlorienButton>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content: 9 Modular Sections */}
      <main className="flex-1">
        <HeroSection />
        {/* <ProblemSolutionSection />
        <CaseStudiesSection />
        <ProcessSection />
        <PricingTiersSection />
        <AboutStudioSection />
        <FaqSection />
        <CtaIntakeSection /> */}
      </main>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-emerald-800 text-white flex items-center justify-center font-bold text-xs">
              L
            </div>
            <span className="font-semibold text-stone-200">
              Lothlorien Studio
            </span>
            <span>• Senior Frontend Engineering & UI Architecture</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#work" className="hover:text-stone-200 transition-colors">
              Selected Work
            </a>
            <a
              href="#services"
              className="hover:text-stone-200 transition-colors"
            >
              Tiers
            </a>
            <a
              href="#contact"
              className="hover:text-stone-200 transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="text-stone-500">
            © {new Date().getFullYear()} Lothlorien. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePageFeature;
