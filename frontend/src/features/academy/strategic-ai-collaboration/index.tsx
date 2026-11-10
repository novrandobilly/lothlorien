import React from "react";
import { letterFont, uiFont, SANS } from "./constants";
import { SalesHeader } from "./features/sales-header";
import { HeroSection } from "./features/hero-section";
import { StrugglesSection } from "./features/struggles";
import { BeforeAfterSection } from "./features/before-after";
import { WorkshopStepsSection } from "./features/workshop-steps";
import { AudienceFitSection } from "./features/audience-fit";
import { ClosingLetterSection } from "./features/closing-letter";
import { FaqSection } from "./features/faq";
import { EnrollmentSection } from "./features/enrollment";
import { SalesFooter } from "./features/sales-footer";
import { MobileCtaBar } from "./features/mobile-cta-bar";

export function StrategicAiCollaborationPageFeature() {
  return (
    <div
      lang="id"
      className={`${letterFont.variable} ${uiFont.variable} ${SANS} min-h-screen bg-[#FAF7F2] text-[#16130F] antialiased selection:bg-[#FBEADF] selection:text-[#16130F]`}
    >
      {/* Hero -> Letter -> Before/After -> 3 hours -> Who it's for -> Closing letter -> FAQ -> Enroll */}
      <SalesHeader />
      <main>
        <HeroSection />
        <StrugglesSection />
        <BeforeAfterSection />
        <WorkshopStepsSection />
        <AudienceFitSection />
        <ClosingLetterSection />
        <FaqSection />
        <EnrollmentSection />
      </main>
      <SalesFooter />
      <MobileCtaBar />
    </div>
  );
}

export default StrategicAiCollaborationPageFeature;
