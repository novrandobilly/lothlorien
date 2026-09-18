import { StaticImageData } from "next/image";

export interface SelectedWorkItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  badge?: string;
  tags?: string[];
  url?: string;
  buttonText?: string;
  image?: StaticImageData | string;
  imageAlt?: string;
  placeholderBg?: string;
  accentColor?: string;
}

/**
 * Main highlighted feature (Full-width top card)
 */
export const mainSelectedWork: SelectedWorkItem = {
  id: "transfez",
  title: "Transfez Platform",
  subtitle: "Cross-Border Remittance & Enterprise Financial Operations",
  description:
    "High-throughput financial engine facilitating instant cross-border transfers, dynamic FX calculations, and enterprise B2B batch disbursement pipelines across Southeast Asia.",
  badge: "Enterprise Platform",
  tags: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
  buttonText: "See more",
  url: "#contact",
  placeholderBg: "bg-white",
  accentColor: "#f26522",
};

/**
 * Secondary highlighted features (2-column bottom grid)
 */
export const secondarySelectedWorks: SelectedWorkItem[] = [
  {
    id: "online-assessment",
    title: "Online Assessment System",
    subtitle: "Offline-First Examination Platform",
    description:
      "Zero-latency examination engine featuring local encrypted storage sync, offline test resilience, and automated tamper-proof PDF generation.",
    badge: "Case Study Available",
    tags: ["Offline-First", "IndexedDB", "Sub-ms Latency"],
    buttonText: "See more",
    url: "/projects/online-assessment",
    placeholderBg: "bg-white",
    accentColor: "#2563eb",
  },
  {
    id: "kickserve",
    title: "Kickserve App",
    subtitle: "Racquet Match & Tournament Engine",
    description:
      "Interactive tournament management system with Americano rotations, real-time standings, and instant one-tap WhatsApp schedule sharing.",
    badge: "Live Web App",
    tags: ["Tournament Engine", "Live Standings", "Round Robin"],
    buttonText: "See more",
    url: "/projects/kickserve",
    placeholderBg: "bg-white",
    accentColor: "#16a34a",
  },
];
