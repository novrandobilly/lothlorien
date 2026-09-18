import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "./features/hero-section";
import { WhyChooseUsSection } from "./features/why-choose-us";
import { SelectedWorksSection } from "./features/selected-works";
import { ServicesSection } from "./features/services";
import { FaqSection } from "./features/faq";
import { ContactSection } from "./features/contact";

export function HomePageFeature() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-stone-900 selection:bg-amber-500/20 selection:text-amber-900">
      {/* Sticky Header / Navigation */}
      <Header />

      {/* Main Content: Hero -> Selected Works -> Why Choose Us -> Services -> FAQ -> Contact */}
      <main className="flex-1">
        <HeroSection />
        <SelectedWorksSection />
        <WhyChooseUsSection />
        <ServicesSection />
        <FaqSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePageFeature;
