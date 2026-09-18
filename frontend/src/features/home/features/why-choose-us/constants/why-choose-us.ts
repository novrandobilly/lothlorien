import React from "react";
import { Code2, Zap, ShieldCheck, Smartphone } from "lucide-react";

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    id: "senior-craft",
    title: "Senior Frontend Craft",
    description:
      "6+ years of direct senior engineering without layers of delegation, ensuring robust architectures and clean code from day one.",
    icon: Code2,
  },
  {
    id: "production-performance",
    title: "Production-Grade Systems",
    description:
      "Engineered for sub-second speeds, 99.9% uptime, and high-concurrency throughput under mission-critical production loads.",
    icon: Zap,
  },
  {
    id: "fintech-saas",
    title: "Fintech & SaaS Precision",
    description:
      "Deep domain experience with cross-border remittances, maker-checker authorization, and strict compliance security standards.",
    icon: ShieldCheck,
  },
  {
    id: "cross-platform",
    title: "Cross-Platform Cohesion",
    description:
      "Unified design systems and shared TypeScript contracts connecting web platforms and mobile ecosystems smoothly.",
    icon: Smartphone,
  },
];
