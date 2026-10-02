import { StaticImageData } from "next/image";
import dsKickserveImg from "@/assets/digital-storefront/ds-kickserve.webp";
import petlogsImg from "@/assets/digital-storefront/rakuppi/petlogs.webp";

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
    description: "A matchmaking and scoring app for racquet sports.",
    tags: ["Matchmaking", "Racquet Sports"],
    status: "active",
    statusBadge: "Live App",
    image: dsKickserveImg,
    imageAlt: "Kickserve - Matchmaking and scoring app for racquet sports",
    demoUrl: "/projects/kickserve",
    categoryIcon: "🎾",
  },
  {
    id: "petlogs",
    title: "Petlogs",
    description: "Daily activity tracking and health journal for pet owners.",
    tags: ["Pet Journal", "PWA", "Rakuppi"],
    status: "active",
    statusBadge: "Live App",
    image: petlogsImg,
    imageAlt: "Petlogs - Smart pet activity tracker and daily journal",
    demoUrl: "https://rakuppi.com/petlogs/",
    categoryIcon: "🐾",
  },
];

