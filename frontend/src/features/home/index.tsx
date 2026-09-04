import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CaseStudiesSection } from "./features/case-studies";
import { ContactUsSection } from "./features/ContactUsSection";
import { ExperiencesSection } from "./features/experiences";
import { HeroSection } from "./features/hero-section";

export function HomePageFeature() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090b10] text-[#f5f2eb] selection:bg-amber-400/20 selection:text-amber-200">
      {/* Sticky Header / Navigation */}
      <Header />

      {/* Main Content: 9 Modular Sections */}
      <main className="flex-1">
        <HeroSection />
        <CaseStudiesSection />
        <ExperiencesSection />
        <ContactUsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePageFeature;
