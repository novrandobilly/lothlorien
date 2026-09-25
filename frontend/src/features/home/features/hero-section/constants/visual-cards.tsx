import React from "react";
import { StaticImageData } from "next/image";
import vcMenomsyneImg from "@/assets/hero-visual-card/vc-menomsyne.webp";
import vcKickserveImg from "@/assets/hero-visual-card/vc-kickserve.webp";
import vcIntiDinamisImg from "@/assets/hero-visual-card/vc-intidinamis.webp";

export interface VisualCardConfig {
  id: string;
  colSpan?: 1 | 2;
  aspectRatio?:
    | "landscape"
    | "portrait"
    | "square"
    | "16/10"
    | "16/9"
    | "7/8"
    | "3/4"
    | "4/3"
    | "1/1";
  heightRatio?: 1 | 2;
  bgClass: string;
  image?: StaticImageData | string;
  alt?: string;
  label?: string;
  borderClass?: string;
  objectPosition?: string;
  isDark?: boolean;
  accentElement?: React.ReactNode;
}

/**
 * Unified Visual Cards Bento:
 * - 1 Full Landscape Web App (colSpan: 2, aspect-[16/10])
 * - 2 Supporting Showcase Cards (colSpan: 1, aspect-[3/4])
 */
export const visualCards: VisualCardConfig[] = [
  {
    id: "hero-landscape",
    alt: "Online Assessment Examination Platform",
    label: "Web Application",
    colSpan: 2,
    aspectRatio: "16/10",
    bgClass: "bg-stone-100",
    image: vcMenomsyneImg,
  },
  {
    id: "kickserve-card",
    alt: "Kickserve Padel Tournament Platform",
    label: "Matchmaking Platform",
    colSpan: 1,
    aspectRatio: "3/4",
    bgClass: "bg-stone-100",
    image: vcKickserveImg,
  },
  {
    id: "intidinamis-card",
    alt: "PT Inti Dinamis Corporate Profile",
    label: "Company Profile",
    colSpan: 1,
    aspectRatio: "3/4",
    bgClass: "bg-stone-100",
    image: vcIntiDinamisImg,
  },
];

/**
 * Backward-compatible column exports
 */
export const visualCardsColumn1: VisualCardConfig[] = [
  visualCards[0],
  visualCards[1],
];

export const visualCardsColumn2: VisualCardConfig[] = [visualCards[2]];
