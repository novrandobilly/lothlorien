import { TennisIcon, BagelIcon } from "@/features/home/icons";

export interface LabProject {
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  bullets: string[];
  url: string;
  buttonText: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const labProjects: LabProject[] = [
  {
    title: "Kickserve App",
    subtitle: "Racquet Sports Match & Tournament Engine",
    tag: "Free Utility • Community",
    description:
      "App to manage tennis sessions and players freely (or padel, even badminton) with zero friction.",
    bullets: [
      "Up to 32 players with fair court rotation",
      "Singles & Doubles Americano formats",
      "Smart, no-repeat match scheduling algorithm",
      "Live standings updated as matches progress",
      "Share results and leaderboards instantly",
    ],
    url: "/projects/kickserve",
    buttonText: "Launch Kickserve",
    icon: TennisIcon,
  },
  {
    title: "Bagels PreOrder App",
    subtitle: "Artisan Bakery Batch Reservation Tool",
    tag: "Self-Use • Commerce Tool",
    description:
      "Bespoke ordering engine built to manage pre-orders and batch bakes for artisan sourdough bagels and salt bread.",
    bullets: [
      "Smooth multi-step checkout flow with order summary",
      "Instant Indonesian QRIS payment integration",
      "Live batch slot reservation with capacity limits",
      "Automated WhatsApp order confirmation alerts",
    ],
    url: "/projects/bagels",
    buttonText: "Launch Bagels PreOrder",
    icon: BagelIcon,
  },
];
