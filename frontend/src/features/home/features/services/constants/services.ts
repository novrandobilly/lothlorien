import { CircleDollarSign, Settings, Trophy, LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  number: string;
  icon: LucideIcon;
  timeline: string;
  title: string;
  whatYouGetTitle?: string;
  whatYouGet: string[];
  bestForTitle?: string;
  bestFor: string[];
  ctaText: string;
  ctaUrl?: string;
  tags?: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "growth-conversion",
    number: "01",
    icon: CircleDollarSign,
    timeline: "1–2 Weeks",
    title: "Growth & Conversion",
    whatYouGetTitle: "What You Get",
    whatYouGet: [
      "Company profile website",
      "High-converting landing page",
      "Direct-checkout online store",
      "Lead capture funnel",
    ],
    bestForTitle: "Best For",
    bestFor: [
      "Company branding",
      "Product launches",
      "Turning visitors into revenue",
    ],
    ctaText: "Scope Growth Sprint",
    ctaUrl: "#contact",
    tags: ["Landing Pages", "E-Commerce", "Lead Gen", "Conversion"],
  },
  {
    id: "operations-internal-tools",
    number: "02",
    icon: Settings,
    timeline: "2–4 Weeks",
    title: "Operations & Internal Tools",
    whatYouGetTitle: "What You Get",
    whatYouGet: [
      "Real-time inventory tracker",
      "Automated scoring platform",
      "Custom invoicing dashboard",
      "Internal team portal",
    ],
    bestForTitle: "Best For",
    bestFor: [
      "Teams outgrowing spreadsheets",
      "Automating manual workflows",
      "Error-free operational control",
    ],
    ctaText: "Streamline Operations",
    ctaUrl: "#contact",
    tags: ["Internal Tools", "Dashboards", "Automation", "Workflows"],
  },
  {
    id: "mvp-development",
    number: "03",
    icon: Trophy,
    timeline: "3–6 Weeks",
    title: "MVP Development",
    whatYouGetTitle: "What You Get",
    whatYouGet: [
      "Early-stage SaaS app",
      "Functional prototype platform",
      "Niche marketplace portal",
      "Proof-of-concept web app",
    ],
    bestForTitle: "Best For",
    bestFor: [
      "Early-stage concept validation",
      "Pitching with working software",
      "Fast market feedback loops",
    ],
    ctaText: "Build Your MVP",
    ctaUrl: "#contact",
    tags: ["MVP", "SaaS", "Prototypes", "Fast Delivery"],
  },
];
