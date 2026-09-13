import { Building2, Globe, Sparkles } from "lucide-react";

export interface TransfezProjectItem {
  id: string;
  title: string;
  category: string;
  role: string;
  status: string;
  summary: string;
  contributions: string[];
  techStack: string[];
}

export interface FeaturedSystem {
  id: string;
  title: string;
  client: string;
  category: string;
  role: string;
  period: string;
  badge: string;
  badgeType: "enterprise" | "case-study" | "in-development";
  description: string;
  skills: string[];
  url?: string;
  buttonText?: string;
  status: "live" | "case-study" | "in-development";
  isTransfez?: boolean;
  subProjects?: TransfezProjectItem[];
}

export const transfezSubProjects: TransfezProjectItem[] = [
  {
    id: "cross-border-remittance",
    title: "Cross-Border Remittance (Mobile & Web)",
    category: "Consumer Financial Platform",
    role: "Frontend Architecture Lead",
    status: "Live in Production",
    summary:
      "International transfer engine facilitating fast multi-currency remittances with live FX rates.",
    contributions: [
      "Engineered real-time FX rate calculator and dynamic beneficiary verification",
      "Streamlined multi-step checkout to reduce transaction abandonment",
      "Implemented resilient state recovery and instant status updates",
    ],
    techStack: ["React Native", "Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
  },
  {
    id: "b2b-corporate-disbursements",
    title: "Corporate B2B Disbursements Portal",
    category: "Enterprise Financial Operations",
    role: "Lead Web Engineer",
    status: "Live in Production",
    summary:
      "Enterprise portal for high-volume payroll and treasury with multi-level maker-checker approvals.",
    contributions: [
      "Architected high-throughput batch upload & CSV validation table",
      "Designed secure multi-tier authorization and maker-checker workflows",
      "Built exportable financial reconciliation audits and instant payout checks",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TanStack Table"],
  },
  {
    id: "transfez-design-system",
    title: "Transfez Core Design System",
    category: "Design Engineering & Infrastructure",
    role: "Design System Maintainer",
    status: "Core Infrastructure",
    summary:
      "Centralized design tokens and reusable UI component primitives across iOS, Android, and Web.",
    contributions: [
      "Created tokenized typography, color, and spacing scales",
      "Developed 40+ accessible WCAG-compliant UI primitives",
      "Enforced strict TypeScript contracts across product teams",
    ],
    techStack: ["TypeScript", "Tailwind CSS", "Radix UI Primitives", "Storybook"],
  },
  {
    id: "kyc-verification-engine",
    title: "Automated KYC Verification Engine",
    category: "Compliance & Security",
    role: "Frontend Engineer",
    status: "Live in Production",
    summary:
      "Biometric liveness check and ID document OCR extraction for rapid regulatory onboarding.",
    contributions: [
      "Optimized responsive camera capture & ID document scanning",
      "Built resilient fallback paths for high-latency connections",
      "Enforced client-side payload encryption before verification dispatch",
    ],
    techStack: ["React Native", "Camera & WebRTC APIs", "TypeScript", "Tailwind CSS"],
  },
];

export const featuredSystems: FeaturedSystem[] = [
  {
    id: "transfez",
    title: "Transfez Platform",
    client: "Transfez • PT Indo Koala Remittance",
    category: "Fintech & Disbursements",
    role: "Senior Frontend Engineer",
    period: "2022-24",
    badge: "Enterprise Platform",
    badgeType: "enterprise",
    description: "Cross-border remittance & B2B corporate disbursements across Southeast Asia.",
    skills: [
      "Remittance Mobile & Web",
      "B2B Disbursements Portal",
      "Core Design System",
      "Biometric KYC Engine",
    ],
    buttonText: "Explore Projects (4)",
    status: "live",
    isTransfez: true,
    subProjects: transfezSubProjects,
  },
  {
    id: "online-assessment",
    title: "Online Assessment System",
    client: "Enterprise Evaluation Platform",
    category: "Offline-First Architecture",
    role: "Lead Frontend Architecture",
    period: "2023-24",
    badge: "Case Study Available",
    badgeType: "case-study",
    description: "Offline-first examination engine with instant zero-latency responses.",
    skills: [
      "Offline-First Engine",
      "Sub-ms Local Response",
      "Encrypted Storage Sync",
      "Certified PDF Export",
    ],
    url: "/projects/online-assessment",
    buttonText: "Read Case Study",
    status: "case-study",
  },
  {
    id: "inti-dinamis",
    title: "PT Inti Dinamis",
    client: "PT Inti Dinamis Perkasa",
    category: "Industrial Web Presence",
    role: "Corporate Web Engineering",
    period: "2024",
    badge: "In Development",
    badgeType: "in-development",
    description: "Industrial machinery showcase and digital catalog engineered for sub-second performance.",
    skills: [
      "Machinery Catalog",
      "Sub-Second Static Load",
      "Lead RFQ Pipeline",
      "Obsidian Brand Aesthetic",
    ],
    buttonText: "Coming Soon",
    status: "in-development",
  },
  {
    id: "landing-page",
    title: "Landing Page Framework",
    client: "Growth & Acquisition Systems",
    category: "Performance & Conversion",
    role: "Performance Engineer",
    period: "2024",
    badge: "In Development",
    badgeType: "in-development",
    description: "Conversion-focused landing page framework built for 95+ Core Web Vitals.",
    skills: [
      "95+ Core Web Vitals",
      "Conversion Funnel UI",
      "Fast Deployment",
      "Marketing Attribution",
    ],
    buttonText: "Coming Soon",
    status: "in-development",
  },
];
