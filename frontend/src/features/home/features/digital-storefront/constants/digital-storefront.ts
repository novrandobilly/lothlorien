import { StaticImageData } from "next/image";
import dsKickserveImg from "@/assets/digital-storefront/ds-kickserve.webp";

export interface DigitalStorefrontProject {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: "active" | "coming_soon";
  statusBadge?: string;
  visualGradient?: string;
  image?: StaticImageData | string;
  imageSrc?: string;
  imageAlt?: string;
  demoUrl?: string;
  buttonText?: string;
  githubUrl?: string;
  categoryIcon?: string;
}

export const digitalStorefrontProjects: DigitalStorefrontProject[] = [
  {
    id: "kickserve",
    title: "Kickserve",
    description: "A matchmaking and scoring app for racket sports.",
    tags: ["Matchmaking", "Racquet Sports"],
    status: "active",
    statusBadge: "Live App",
    image: dsKickserveImg,
    imageAlt: "Kickserve - Matchmaking and scoring app for racket sports",
    demoUrl: "/projects/kickserve",
    categoryIcon: "🎾",
  },
];
