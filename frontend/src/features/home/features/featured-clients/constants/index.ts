import { AssessmentIcon } from "@/features/home/icons";
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
  period?: string;
  badge: string;
  badgeType: "enterprise" | "case-study" | "in-development";
  description: string;
  highlights: string[];
  url?: string;
  buttonText?: string;
  status: "live" | "case-study" | "in-development";
  icon: React.ComponentType<{ className?: string }>;
  isTransfez?: boolean;
  subProjects?: TransfezProjectItem[];
}

export const transfezSubProjects: TransfezProjectItem[] = [
  {
    id: "cross-border-remittance",
    title: "Cross-Border Remittance (Mobile & Web)",
    category: "Core Consumer Financial Platform",
    role: "Frontend Architecture & Flow Lead",
    status: "Live in Production",
    summary:
      "Customer-facing international transfer engine facilitating fast, compliant multi-currency remittances with live FX rates and real-time transaction tracking.",
    contributions: [
      "Engineered real-time FX rate calculator and dynamic beneficiary verification flows",
      "Streamlined multi-step checkout to significantly reduce transaction abandonment",
      "Implemented resilient state recovery and real-time transaction status updates",
    ],
    techStack: ["React Native", "Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
  },
  {
    id: "b2b-corporate-disbursements",
    title: "Corporate B2B Disbursements & Treasury Portal",
    category: "Enterprise Financial Operations",
    role: "Lead Web Engineer",
    status: "Live in Production",
    summary:
      "Enterprise portal for high-volume corporate payroll, cross-border vendor disbursements, and treasury management with multi-level maker-checker approval matrices.",
    contributions: [
      "Architected high-throughput batch upload & CSV validation table handling thousands of rows",
      "Designed secure multi-tier authorization and maker-checker approval workflows",
      "Built exportable financial reconciliation audits and instant payout verification",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TanStack Table"],
  },
  {
    id: "transfez-design-system",
    title: "Transfez Core Design System & UI Architecture",
    category: "Design Engineering & Infrastructure",
    role: "Design System Maintainer",
    status: "Core Infrastructure",
    summary:
      "Centralized design tokens, reusable accessible component libraries, and UI design patterns unified across iOS, Android, and Web platforms.",
    contributions: [
      "Created tokenized typography, color, spacing scales, and dark/light mode themes",
      "Developed 40+ accessible, WCAG-compliant UI primitives for rapid feature shipping",
      "Enforced strict TypeScript contracts to ensure design token consistency across teams",
    ],
    techStack: ["TypeScript", "Tailwind CSS", "Radix UI Primitives", "Storybook"],
  },
  {
    id: "kyc-verification-engine",
    title: "Automated KYC & Identity Verification Engine",
    category: "Compliance & Security",
    role: "Frontend Engineer",
    status: "Live in Production",
    summary:
      "Frictionless biometric liveness check, national ID OCR extraction, and regulatory anti-money laundering (AML) compliance flow for rapid customer onboarding.",
    contributions: [
      "Optimized responsive camera capture & ID document scanning with instant edge guidance",
      "Built dynamic fallback paths for degraded or high-latency network connections",
      "Enforced strict client-side payload encryption before dispatching to verification vaults",
    ],
    techStack: ["React Native", "Camera & WebRTC APIs", "TypeScript", "Tailwind CSS"],
  },
];

export const featuredSystems: FeaturedSystem[] = [
  {
    id: "transfez",
    title: "Transfez Platform & Ecosystem",
    client: "Transfez (PT Indo Koala Remittance)",
    category: "Cross-Border Fintech & Disbursements",
    role: "Senior Frontend Engineer",
    period: "September 2022 - Present",
    badge: "Enterprise Platform",
    badgeType: "enterprise",
    description:
      "High-concurrency fintech mobile and web platforms powering international cross-border remittances and corporate disbursements across Southeast Asia.",
    highlights: [
      "Cross-border remittance mobile & web consumer platforms",
      "Enterprise B2B bulk disbursements and treasury portal",
      "Unified design system and shared component architecture",
      "Automated biometric KYC & identity verification engine",
    ],
    buttonText: "Explore Transfez Projects (4)",
    status: "live",
    icon: Building2,
    isTransfez: true,
    subProjects: transfezSubProjects,
  },
  {
    id: "online-assessment",
    title: "Online Assessment System",
    client: "Enterprise Evaluation Platform",
    category: "Offline-First Enterprise Architecture",
    role: "Lead Frontend Architecture",
    badge: "Case Study Available",
    badgeType: "case-study",
    description:
      "Mission-critical examination platform engineered for seamless exam delivery and evaluation, fully functional even under unstable or zero connectivity.",
    highlights: [
      "100% offline-first engine with background conflict-free sync",
      "Sub-millisecond local response with zero test latency",
      "Encrypted local data storage & session integrity",
      "Real-time analytics and certified instant PDF export",
    ],
    url: "/projects/online-assessment",
    buttonText: "Read Case Study",
    status: "case-study",
    icon: AssessmentIcon,
  },
  {
    id: "inti-dinamis",
    title: "PT Inti Dinamis",
    client: "PT Inti Dinamis Perkasa",
    category: "Corporate Digital Presence",
    role: "Corporate Web Engineering",
    badge: "In Development",
    badgeType: "in-development",
    description:
      "Comprehensive corporate brand identity and modern web portal engineered for PT Inti Dinamis to present industrial solutions, machinery capabilities, and client credentials.",
    highlights: [
      "Tailored corporate storytelling and interactive services catalog",
      "Modern static architecture optimized for sub-second performance",
      "Responsive obsidian aesthetic crafted for industrial prestige",
      "Integrated client RFQ and direct lead capture pipeline",
    ],
    buttonText: "Case Study Coming Soon",
    status: "in-development",
    icon: Globe,
  },
  {
    id: "landing-page",
    title: "High-Converting Landing Pages",
    client: "Growth & Acquisition Systems",
    category: "Conversion Engineering & Web Vitals",
    role: "Performance & UI/UX Architecture",
    badge: "In Development",
    badgeType: "in-development",
    description:
      "Custom-crafted, conversion-focused landing page framework built for rapid marketing deployment, 95+ Core Web Vitals, and seamless campaign attribution.",
    highlights: [
      "Conversion-optimized visual hierarchy and persuasive layout",
      "Sub-second load speeds with optimized asset delivery pipelines",
      "Dynamic marketing attribution, UTM tracking, and event hooks",
      "Accessible, micro-animated component interactions",
    ],
    buttonText: "Preview Coming Soon",
    status: "in-development",
    icon: Sparkles,
  },
];
