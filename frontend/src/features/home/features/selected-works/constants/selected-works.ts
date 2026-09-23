import { StaticImageData } from "next/image";
import mnemosyneImg from "@/assets/experiences/mnemosyne.webp";
import edorasImg from "@/assets/experiences/edoras.webp";
import careerAccelerationImg from "@/assets/experiences/career-acceleration.webp";
import intiDinamisLogo from "@/assets/experiences/logo-intidinamis.svg";

export interface SelectedWorkItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  badge?: string;
  clientLogo?: StaticImageData | string;
  clientName?: string;
  tags?: string[];
  url?: string;
  buttonText?: string;
  image?: StaticImageData | string;
  imageAlt?: string;
  placeholderBg?: string;
  accentColor?: string;
  isOngoing?: boolean;
  disabled?: boolean;
}

/**
 * Main highlighted feature (Full-width top card)
 * 1. Online Assessment System (mnemosyne.webp)
 */
export const mainSelectedWork: SelectedWorkItem = {
  id: "online-assessment",
  title: "Online Assessment System",
  subtitle: "Offline-First Examination Platform",
  description:
    "Zero-latency examination engine featuring local encrypted storage sync, offline test resilience, and automated tamper-proof PDF generation.",
  badge: "Case Study Available",
  clientLogo: intiDinamisLogo,
  clientName: "PT Inti Dinamis",
  buttonText: "See case study",
  url: "/projects/online-assessment",
  image: mnemosyneImg,
  imageAlt: "Online Assessment System - Offline-First Examination Platform",
  placeholderBg: "bg-white",
  accentColor: "#059669",
};

/**
 * Secondary highlighted features (2-column bottom grid)
 * 2. PT Inti Dinamis Company Profile (edoras.webp)
 * 3. Online Class Landing Page (career-acceleration.webp) - Ongoing Project / Disabled State
 */
export const secondarySelectedWorks: SelectedWorkItem[] = [
  {
    id: "inti-dinamis",
    title: "PT Inti Dinamis",
    subtitle: "Corporate Profile & Digital Presence",
    description:
      "Modern, responsive corporate profile website designed to elevate brand authority, present consulting services, and drive client acquisition.",
    badge: "Company Profile",
    clientLogo: intiDinamisLogo,
    clientName: "PT Inti Dinamis",
    buttonText: "See more",
    url: "#contact",
    image: edorasImg,
    imageAlt: "PT Inti Dinamis - Corporate Company Profile Website",
    placeholderBg: "bg-white",
    accentColor: "#dc2626",
  },
  {
    id: "career-acceleration",
    title: "Online Class Landing Page",
    subtitle: "Executive Career Acceleration Workshop",
    description:
      "High-converting promotional landing page engineered for executive webinars, featuring live countdowns, dynamic RSVP flows, and WhatsApp integration.",
    badge: "Ongoing Project",
    clientLogo: intiDinamisLogo,
    clientName: "PT Inti Dinamis",
    buttonText: "Ongoing Project",
    image: careerAccelerationImg,
    imageAlt: "Executive Career Acceleration Online Class Landing Page",
    placeholderBg: "bg-white",
    accentColor: "#f59e0b",
    isOngoing: true,
    disabled: true,
  },
];
