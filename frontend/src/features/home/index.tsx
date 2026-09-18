import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "./features/hero-section";
import { WhyChooseUsSection } from "./features/why-choose-us";
import { SelectedWorksSection } from "./features/selected-works";

export function HomePageFeature() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-stone-900 selection:bg-amber-500/20 selection:text-amber-900">
      {/* Sticky Header / Navigation */}
      <Header />

      {/* Main Content: Hero -> Why Choose Us -> Selected Works */}
      <main className="flex-1">
        <HeroSection />
        <SelectedWorksSection />
        <WhyChooseUsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePageFeature;
