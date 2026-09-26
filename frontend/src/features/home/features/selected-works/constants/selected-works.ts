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
  description: `Transform psychological assessment from paper-based testing into a fast, reliable digital experience, including automated scoring and professional reports.`,
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
    title: "Website of Inti Dinamis",
    description: `Turning Inti Dinamis training & consulting business into a professional digital experience designed not only to look credible, but to build trust, communicate value, and turn corporate HR visitors into potential clients.`,
    clientLogo: intiDinamisLogo,
    clientName: "PT Inti Dinamis",
    buttonText: "Visit Website",
    url: "https://intidinamis.com",
    image: edorasImg,
    imageAlt: "PT Inti Dinamis - Corporate Company Profile Website",
  },
  {
    id: "career-acceleration",
    title: "Landing Page of Online Class",
    description: `Driving registrations for upcoming online classes through a streamlined landing page featuring clear curriculum breakdowns, live schedule tracking, and direct WhatsApp sign-ups.`,
    clientLogo: intiDinamisLogo,
    clientName: "PT Inti Dinamis",
    buttonText: "Coming Soon",
    image: careerAccelerationImg,
    imageAlt: "Executive Career Acceleration Online Class Landing Page",
    isDisabled: true,
  },
];
