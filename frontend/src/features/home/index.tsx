import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ContactUsSection } from "./features/ContactUsSection";
import { EnvienLabsSection } from "./features/envien-labs";
import { FeaturedClientsSection } from "./features/featured-clients";
import { HeroSection } from "./features/hero-section";

export function HomePageFeature() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090b10] text-[#f5f2eb] selection:bg-amber-400/20 selection:text-amber-200">
      {/* Sticky Header / Navigation */}
      <Header />

      {/* Main Content: Hero -> Featured Clients & Enterprise Systems -> Envien Studio Labs -> Contact */}
      <main className="flex-1">
        <HeroSection />
        <FeaturedClientsSection />
        <EnvienLabsSection />
        <ContactUsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePageFeature;
