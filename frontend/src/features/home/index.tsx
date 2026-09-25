import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "./features/hero-section";
import { SelectedWorksSection } from "./features/selected-works";
import { DigitalStorefrontSection } from "./features/digital-storefront";
import { HowEnvienStudioWorksSection } from "./features/how-envien-studio-works";
import { ServicesSection } from "./features/services";
import { FaqSection } from "./features/faq";
import { TestimonialsSection } from "./features/testimonials";
import { ContactSection } from "./features/contact";

export function HomePageFeature() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-stone-900 selection:bg-amber-500/20 selection:text-amber-900">
      {/* Sticky Header / Navigation */}
      <Header />

      {/* Main Content: Hero -> Selected Works -> Digital Storefront -> How Envien Studio Works -> Services -> FAQ -> Testimonials -> Contact */}
      <main className="flex-1">
        <HeroSection />
        <SelectedWorksSection />
        <DigitalStorefrontSection />
        <HowEnvienStudioWorksSection />
        <ServicesSection />
        <FaqSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePageFeature;
