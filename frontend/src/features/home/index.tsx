import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ContactUsSection } from "./features/ContactUsSection";
import { EnvienLabsSection } from "./features/envien-labs";
import { FeaturedClientsSection } from "./features/featured-clients";
import { HeroSection } from "./features/hero-section";

export function HomePageFeature() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-stone-900 selection:bg-amber-500/20 selection:text-amber-900">
      {/* Sticky Header / Navigation */}
      <Header />

      {/* Main Content: Hero -> Featured Clients & Enterprise Systems -> Envien Studio Labs -> Contact */}
      <main className="flex-1">
        <HeroSection />
        {/* <FeaturedClientsSection />
        <EnvienLabsSection />
        <ContactUsSection /> */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePageFeature;
