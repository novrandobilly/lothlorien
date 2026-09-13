import React from "react";
import { StaticImageData } from "next/image";

// =========================================================================
// 1. IMPORT YOUR 6 IMAGES HERE WHEN READY:
// =========================================================================
// import card1Img from "@/assets/images/hero/card-1.png";
// import card2Img from "@/assets/images/hero/card-2.png";
// import card3Img from "@/assets/images/hero/card-3.png";
// import card4Img from "@/assets/images/hero/card-4.png";
// import card5Img from "@/assets/images/hero/card-5.png";
// import card6Img from "@/assets/images/hero/card-6.png";

export interface VisualCardConfig {
  id: string;
  heightRatio: 1 | 2;
  bgClass: string;
  image?: StaticImageData | string;
  alt?: string;
  borderClass?: string;
  isDark?: boolean;
  accentElement?: React.ReactNode;
}

/**
 * Column 1 Visual Cards (Ratios: 2, 2, 1)
 */
export const visualCardsColumn1: VisualCardConfig[] = [
  {
    id: "slot-1",
    alt: "Visual showcase 1",
    heightRatio: 2,
    bgClass: "bg-[#f3ebe1]",
    // image: card1Img,
  },
  {
    id: "slot-2",
    alt: "Visual showcase 2",
    heightRatio: 2,
    bgClass: "bg-[#121316]",
    isDark: true,
    // image: card2Img,
    accentElement: (
      <div className="absolute inset-x-6 top-1/2 h-px bg-white/10" />
    ),
  },
  {
    id: "slot-3",
    alt: "Visual showcase 3",
    heightRatio: 1,
    bgClass: "bg-[#0a0a0c]",
    isDark: true,
    // image: card3Img,
  },
];

/**
 * Column 2 Visual Cards (Ratios: 1, 2, 2)
 */
export const visualCardsColumn2: VisualCardConfig[] = [
  {
    id: "slot-4",
    alt: "Visual showcase 4",
    heightRatio: 1,
    bgClass: "bg-[#e4ece5]",
    // image: card4Img,
  },
  {
    id: "slot-5",
    alt: "Visual showcase 5",
    heightRatio: 2,
    bgClass: "bg-gradient-to-b from-[#328ebc] 50% to-[#e09819] 50%",
    isDark: true,
    // image: card5Img,
  },
  {
    id: "slot-6",
    alt: "Visual showcase 6",
    heightRatio: 2,
    bgClass: "bg-[#eae4dc]",
    // image: card6Img,
  },
];
