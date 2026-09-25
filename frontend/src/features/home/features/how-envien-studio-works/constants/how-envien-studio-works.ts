import React from "react";
import { UserCheck, Layers, Sparkles, MessageSquare } from "lucide-react";

export interface HowEnvienStudioWorksItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const howEnvienStudioWorksItems: HowEnvienStudioWorksItem[] = [
  {
    id: "direct-senior-execution",
    title: "Direct Senior Execution",
    description:
      "Work directly with me from the first sketch to final deployment.",
    icon: UserCheck,
  },
  {
    id: "built-to-last",
    title: "Built to Last",
    description:
      "Clean, maintainable code structured so your product can grow without a mess.",
    icon: Layers,
  },
  {
    id: "respect-details",
    title: "Respect for the Details",
    description:
      "Careful attention to the small interactions and edge cases that make an app feel right.",
    icon: Sparkles,
  },
  {
    id: "clear-communication",
    title: "Clear Communication",
    description: "Straightforward updates and open conversations.",
    icon: MessageSquare,
  },
];
