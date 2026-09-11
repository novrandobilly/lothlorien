import React from "react";
import { TennisIcon, BagelIcon, AssessmentIcon } from "../icons";

export interface Project {
  title: string;
  description: string;
  bullets: string[];
  url: string;
  buttonText?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export const projects: Project[] = [
  {
    title: "Kickserve App",
    description:
      "App to manage tennis session and players freely (or padel, even badminton)",
    bullets: [
      "Up to 32 players",
      "Singles & Doubles Americano",
      "Smart, no-repeat scheduling",
      "Live standings as you play",
      "Share results instantly",
    ],
    url: "/projects/kickserve",
    buttonText: "Open Kickserve",
    icon: TennisIcon,
  },
  {
    title: "Bagels PreOrder App",
    description: "App to pre-order my bagels and salt bread",
    bullets: [
      "Smooth multi-step checkout flow",
      "Provide QRIS payment methods",
      "Live batch slot reservation",
      "Automated order confirmation",
    ],
    url: "/projects/bagels",
    buttonText: "Open Bagels PreOrder",
    icon: BagelIcon,
  },
  {
    title: "Online Assessment",
    description:
      "Take assessments and view results anywhere, even with poor connection",
    bullets: [
      "Full offline support and automatic sync",
      "Instant response with zero latency",
      "Secure local data encryption",
      "Auto-retries on unstable connection",
      "Export and share PDF results instantly",
    ],
    url: "/projects/online-assessment",
    buttonText: "Open Online Assessment",
    icon: AssessmentIcon,
  },
];

