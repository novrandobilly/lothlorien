import React from "react";
import { Code2, Zap, ShieldCheck, Smartphone } from "lucide-react";

export interface HowEnvienStudioWorksItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const howEnvienStudioWorksItems: HowEnvienStudioWorksItem[] = [
  {
    id: "senior-craft",
    title: "Direct Senior Execution",
    description:
      "Work directly with me from the first sketch to final deployment.",
    icon: Code2,
  },
  {
    id: "production-performance",
    title: "Built to Last",
    description:
      "Clean, maintainable code structured so your product can grow without a mess",
    icon: Zap,
  },
  {
    id: "fintech-saas",
    title: "Respect for the Details",
    description:
      "Careful attention to the small interactions and edge cases that make an app feel right.",
    icon: ShieldCheck,
  },
  {
    id: "cross-platform",
    title: "Clear Communication",
    description: "Straightforward updates and open conversations",
    icon: Smartphone,
  },
];
