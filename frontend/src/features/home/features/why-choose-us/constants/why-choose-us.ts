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
    title: "6+ Years Experience",
    description: "No juniors learning on your budget.",
    icon: Code2,
  },
  {
    id: "production-performance",
    title: "Enterprise Track Record",
    description: "Features engineered for zero downtime.",
    icon: Zap,
  },
  {
    id: "fintech-saas",
    title: "Fintech & SaaS",
    description: "Ironclad data protection and payment integrity.",
    icon: ShieldCheck,
  },
  {
    id: "cross-platform",
    title: "Web to Mobile",
    description: "Seamless responsive and React Native apps.",
    icon: Smartphone,
  },
];
