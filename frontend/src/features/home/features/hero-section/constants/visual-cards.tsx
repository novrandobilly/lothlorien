import React from "react";
import { StaticImageData } from "next/image";
import mnemosyneImg from "@/assets/experiences/mnemosyne.webp";
import edorasImg from "@/assets/experiences/edoras.webp";
import careerAccelerationImg from "@/assets/experiences/career-acceleration.webp";
import customPlayersImg from "@/assets/kickserve/custom-players.png";
import matchmakingImg from "@/assets/kickserve/match-making.png";
import liveStandingsImg from "@/assets/kickserve/live-standings.png";

export interface VisualCardConfig {
  id: string;
  heightRatio: 1 | 2;
  bgClass: string;
  image?: StaticImageData | string;
  alt?: string;
  label?: string;
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
    alt: "Online Assessment Examination Platform",
    label: "Web Application",
    heightRatio: 2,
    bgClass: "bg-stone-100",
    image: mnemosyneImg,
  },
  {
    id: "slot-2",
    alt: "PT Inti Dinamis Corporate Profile",
    label: "Company Profile",
    heightRatio: 2,
    bgClass: "bg-stone-100",
    image: edorasImg,
  },
  {
    id: "slot-3",
    alt: "Kickserve Tournament Matchmaking",
    label: "Matchmaking Engine",
    heightRatio: 1,
    bgClass: "bg-stone-900",
    isDark: true,
    image: matchmakingImg,
  },
];

/**
 * Column 2 Visual Cards (Ratios: 1, 2, 2)
 */
export const visualCardsColumn2: VisualCardConfig[] = [
  {
    id: "slot-4",
    alt: "Kickserve Player Roster System",
    label: "Roster Management",
    heightRatio: 1,
    bgClass: "bg-stone-100",
    image: customPlayersImg,
  },
  {
    id: "slot-5",
    alt: "Executive Career Acceleration Platform",
    label: "Interactive Platform",
    heightRatio: 2,
    bgClass: "bg-stone-100",
    image: careerAccelerationImg,
  },
  {
    id: "slot-6",
    alt: "Live Tournament Standings Leaderboard",
    label: "Live Standings",
    heightRatio: 2,
    bgClass: "bg-stone-100",
    image: liveStandingsImg,
  },
];
