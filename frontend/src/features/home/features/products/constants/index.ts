import { StaticImageData } from "next/image";
import dsKickserveImg from "@/assets/digital-storefront/ds-kickserve.webp";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductItem {
  id: string;
  eyebrow: string;
  title: string;
  headline: string;
  description: string;
  specs: ProductSpec[];
  ctaText: string;
  ctaUrl: string;
  image: StaticImageData | string;
  imageAlt: string;
}

export const flagshipProduct: ProductItem = {
  id: "kickserve",
  eyebrow: "Kickserve App",
  title: "Kickserve",
  headline: "Streamlined tournament & match management for racquet sports.",
  description:
    "A lightweight, court-side session manager built for Tennis, Padel, and Badminton. Eliminate manual bracket drawing with automated Americano rotations and instant live differentials.",
  specs: [
    {
      label: "Built For",
      value: "Tennis • Padel • Badminton",
    },
    {
      label: "Key Features",
      value: "Up to 32 Players • Americano Rotations • Live Differential Standings",
    },
  ],
  ctaText: "Explore Kickserve",
  ctaUrl: "/projects/kickserve",
  image: dsKickserveImg,
  imageAlt: "Kickserve - Racket Sports Matchmaking and Scoring App",
};
