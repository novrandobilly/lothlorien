export interface ServiceItem {
  id: string;
  number: string;
  tag: string;
  title: string;
  description: string;
  formatTitle?: string;
  format: string[];
  ctaText?: string;
  ctaUrl?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "web-app-development",
    number: "01",
    tag: "Custom Engineering",
    title: "Web & Application Development",
    description:
      "I partner with founders and product teams to engineer resilient web apps, custom internal tools, and high-conversion platforms. You get direct senior architecture and clean code from day one, with zero agency handoffs.",
    formatTitle: "Format",
    format: [
      "Direct 1-on-1 senior collaboration",
      "Fixed sprint delivery (1–6 weeks)",
    ],
    ctaText: "Start a project",
    ctaUrl: "#contact",
  },
  {
    id: "envien-academy",
    number: "02",
    tag: "Interactive Masterclass",
    title: "Envien Academy",
    description:
      "A focused, 3–4 hour live workshop held once a month. We dive into practical engineering craft, product mindset, and developer independence beyond standard tutorials.",
    formatTitle: "Format",
    format: [
      "Live 3–4 hour interactive session",
      "Monthly recurring cohorts",
    ],
    ctaText: "Reserve your seat",
    ctaUrl: "#contact",
  },
  {
    id: "digital-products",
    number: "03",
    tag: "Independent Apps",
    title: "Digital Products",
    description:
      "Carefully crafted, standalone web apps built for practical everyday utility. Lightweight and reliable software designed to work quietly out of the box.",
    formatTitle: "Format",
    format: [
      "Instant access & hosted setup",
      "Lifetime product updates",
    ],
    ctaText: "Get access",
    ctaUrl: "#contact",
  },
  {
    id: "digital-product-marketplace",
    number: "04",
    tag: "Community & Distribution",
    title: "Digital Product Marketplace",
    description:
      "A curated storefront dedicated to showcasing and selling tools built by indie software engineers. Helping quiet engineering craft find its first audience and paying customers.",
    formatTitle: "Format",
    format: [
      "Curated builder showcase",
      "Direct payment & checkout integration",
    ],
    ctaText: "Explore marketplace",
    ctaUrl: "#contact",
  },
];
