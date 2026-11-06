"use client";

import React, { useState } from "react";
import { CoverPortal } from "./CoverPortal";
import { HeroSection } from "./HeroSection";
import { PreWedVerseSection } from "./PreWedVerseSection";
import { CoupleIntroSection } from "./CoupleIntroSection";
import { SaveTheDateCountdown } from "./SaveTheDateCountdown";
import { EventDetailsSection } from "./EventDetailsSection";
import { LoveStoryTimeline } from "./LoveStoryTimeline";
import { PhotoGallerySection } from "./PhotoGallerySection";
import { WeddingGiftSection } from "./WeddingGiftSection";
import { RsvpSection } from "./RsvpSection";
import { BestWishesSection } from "./BestWishesSection";
import { GandalfQuoteSection } from "./GandalfQuoteSection";
import { WeddingFooter } from "./WeddingFooter";
import { FloatingAudioPlayer } from "./FloatingAudioPlayer";
import { FloatingNavDock } from "./FloatingNavDock";

export function WeddingPageFeature() {
  const [isInvitationOpened, setIsInvitationOpened] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#FAF6EE] text-[#2C2523] selection:bg-[#C5A059]/20 selection:text-[#8C6D36] overflow-x-hidden">
      {/* Cover Envelope Portal Gate */}
      <CoverPortal
        isOpen={isInvitationOpened}
        onOpen={() => setIsInvitationOpened(true)}
      />

      {/* Main Wedding Content Container */}
      <div className="relative">
        <HeroSection />
        <PreWedVerseSection />
        <CoupleIntroSection />
        <SaveTheDateCountdown />
        <EventDetailsSection />
        <LoveStoryTimeline />
        <PhotoGallerySection />
        <WeddingGiftSection />
        <RsvpSection />
        <BestWishesSection />
        <GandalfQuoteSection />
        <WeddingFooter />
      </div>

      {/* Floating Utilities */}
      <FloatingAudioPlayer autoPlayTrigger={isInvitationOpened} />
      <FloatingNavDock />
    </main>
  );
}
