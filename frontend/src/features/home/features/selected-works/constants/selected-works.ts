import { StaticImageData } from "next/image";
import mnemosyneImg from "@/assets/experiences/mnemosyne.webp";
import edorasImg from "@/assets/experiences/edoras.webp";
import careerAccelerationImg from "@/assets/experiences/career-acceleration.webp";
import intiDinamisLogo from "@/assets/experiences/logo-intidinamis.svg";

export interface SelectedWorkItem {
  id: string;
  title: string;
  description: string;
  clientLogo?: StaticImageData | string;
  clientName?: string;
  url?: string;
  isExternal?: boolean;
  buttonText?: string;
  image?: StaticImageData | string;
  imageAlt?: string;
  isDisabled?: boolean;
}

/**
 * Main highlighted feature (Full-width top card)
 * 1. Online Assessment System (mnemosyne.webp)
 */
export const mainSelectedWork: SelectedWorkItem = {
  id: "online-assessment",
  title: "Psychological Assessment Engine",
  description: `I built this for Inti Dinamis to take paper-based psychological tests completely digital. 
                If a candidate’s internet drops mid-test, zero answers are lost. 
                Test results calculate into clean PDF reports the second they finish.`,
  clientLogo: intiDinamisLogo,
  clientName: "PT Inti Dinamis",
  // buttonText: "See case study",
  // url: "/projects/online-assessment",
  image: mnemosyneImg,
  imageAlt: "Online Assessment System - Offline-First Examination Platform",
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
    description: `A thoughtful web presence for Inti Dinamis training & consulting practice. 
    I focused on clear typography, intentional spacing, and making it effortless for corporate HR teams to get in touch.`,
    clientLogo: intiDinamisLogo,
    clientName: "PT Inti Dinamis",
    buttonText: "Visit Website",
    url: "https://intidinamis.com",
    image: edorasImg,
    imageAlt: "PT Inti Dinamis - Corporate Company Profile Website",
  },
  {
    id: "career-acceleration",
    title: "Online Class Landing Page",
    description: `A dedicated landing page for Inti Dinamis upcoming online classes. It lays out the curriculum clearly, keeps track of live schedules, and lets attendees sign up directly via WhatsApp.`,
    clientLogo: intiDinamisLogo,
    clientName: "PT Inti Dinamis",
    buttonText: "Coming Soon",
    image: careerAccelerationImg,
    imageAlt: "Executive Career Acceleration Online Class Landing Page",
    isDisabled: true,
  },
];
