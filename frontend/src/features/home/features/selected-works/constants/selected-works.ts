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
  isExternal?: boolean;
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
  title: "Psychological Assessment Engine",
  subtitle: "Offline-First Examination Platform",
  description: `I built this for Inti Dinamis to take paper-based psychological tests completely digital. 
                If a candidate’s internet drops mid-test, zero answers are lost. 
                Test results calculate into clean PDF reports the second they finish.`,
  badge: "Web Application",
  clientLogo: intiDinamisLogo,
  clientName: "PT Inti Dinamis",
  // buttonText: "See case study",
  // url: "/projects/online-assessment",
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
    title: "Inti Dinamis Website",
    subtitle: "Corporate Profile & Digital Presence",
    description: `A thoughtful web presence for Inti Dinamis training & consulting practice. 
    We focused on clear typography, intentional spacing, and making it effortless for corporate HR teams to get in touch.`,
    badge: "Company Profile",
    clientLogo: intiDinamisLogo,
    clientName: "PT Inti Dinamis",
    buttonText: "Visit Website",
    url: "https://intidinamis.com",
    image: edorasImg,
    imageAlt: "PT Inti Dinamis - Corporate Company Profile Website",
    placeholderBg: "bg-white",
    accentColor: "#059669",
  },
  {
    id: "career-acceleration",
    title: "Online Class Landing Page",
    subtitle: "Executive Career Acceleration Workshop",
    description: `A dedicated landing page for Inti Dinamis upcoming online classes. It lays out the curriculum clearly, keeps track of live schedules, and lets attendees sign up directly via WhatsApp.`,
    badge: "Ongoing Project",
    clientLogo: intiDinamisLogo,
    clientName: "PT Inti Dinamis",
    buttonText: "Coming Soon",
    image: careerAccelerationImg,
    imageAlt: "Executive Career Acceleration Online Class Landing Page",
    placeholderBg: "bg-white",
    accentColor: "#f59e0b",
    isOngoing: true,
    disabled: true,
  },
];
