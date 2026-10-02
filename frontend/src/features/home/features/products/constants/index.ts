import { StaticImageData } from "next/image";
import dsKickserveImg from "@/assets/digital-storefront/ds-kickserve.webp";
import petlogsImg from "@/assets/digital-storefront/rakuppi/petlogs.webp";
import rakuppiLogo from "@/assets/digital-storefront/rakuppi/rakuppi-logo.svg";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductPartner {
  name: string;
  logo?: StaticImageData | string;
  url?: string;
  badgeText?: string;
}

export interface ProductItem {
  id: string;
  eyebrow: string;
  badgeType?: "in-house" | "partner";
  partner?: ProductPartner;
  title: string;
  headline: string;
  description: string;
  specs: ProductSpec[];
  ctaText: string;
  ctaUrl: string;
  isExternal?: boolean;
  image: StaticImageData | string;
  imageAlt: string;
}

export const productsData: ProductItem[] = [
  {
    id: "kickserve",
    eyebrow: "Studio Release",
    badgeType: "in-house",
    title: "Kickserve",
    headline: "Easy Matchmaking & Live Scoring for Racquet Sports.",
    description:
      "A lightweight, court-side session manager built for racquet sports. Eliminate manual drawing with automated Americano rotations and live standings.",
    specs: [
      {
        label: "Built For",
        value: "Tennis • Padel • Badminton • Table Tennis",
      },
      {
        label: "Key Features",
        value: "Up to 32 Players • Americano Rotations • Live Standings",
      },
    ],
    ctaText: "Explore Kickserve",
    ctaUrl: "/projects/kickserve",
    isExternal: false,
    image: dsKickserveImg,
    imageAlt: "Kickserve - Racquet Sports Matchmaking and Scoring App",
  },
  {
    id: "petlogs",
    eyebrow: "Indie Release",
    badgeType: "partner",
    partner: {
      name: "Rakuppi",
      logo: rakuppiLogo,
      url: "https://rakuppi.com",
      badgeText: "In Partnership with Rakuppi",
    },
    title: "Petlogs",
    headline: "Smart Activity Tracking & Daily Journal for Pet Owners.",
    description:
      "A dedicated companion PWA designed to log daily pet routines, track health milestones, and monitor your furry friends' wellbeing effortlessly.",
    specs: [
      {
        label: "Partner",
        value: "Rakuppi",
      },
      {
        label: "Built For",
        value: "Cats • Dogs • Pet Owners & Companions",
      },
      {
        label: "Key Features",
        value: "Daily Activity Logs • Health Milestones • Stats & Profile",
      },
    ],
    ctaText: "Explore Petlogs",
    ctaUrl: "https://rakuppi.com/petlogs/",
    isExternal: true,
    image: petlogsImg,
    imageAlt: "Petlogs - Smart Pet Activity Tracking and Daily Journal App",
  },
];

export const flagshipProduct: ProductItem = productsData[0];

