export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  whatYouGetTitle?: string;
  whatYouGet: string[];
  whyItMattersTitle?: string;
  whyItMatters: string[];
  tags?: string[];
  url?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "growth-conversion",
    number: "01",
    title: "Growth & Conversion",
    whatYouGetTitle: "What You Get",
    whatYouGet: [
      "Company profile websites",
      "High-converting landing pages",
      "Direct-checkout online stores",
    ],
    whyItMattersTitle: "Why It Matters",
    whyItMatters: ["Turn traffic into revenue", "Company credibility & trust"],
    tags: ["Landing Pages", "E-Commerce", "Lead Gen", "Conversion"],
  },
  {
    id: "operations-internal-tools",
    number: "02",
    title: "Operations & Internal Tools",
    whatYouGetTitle: "What You Get",
    whatYouGet: [
      "Real-time inventory trackers",
      "Automated scoring platforms",
      "Custom invoicing dashboards",
      "Internal team portals",
    ],
    whyItMattersTitle: "Why It Matters",
    whyItMatters: [
      "Eliminate costly operational chaos",
      "Total daily peace-of-mind",
    ],
    tags: ["Internal Tools", "Dashboards", "Automation", "Workflows"],
  },
  {
    id: "mvp-development",
    number: "03",
    title: "MVP Development",
    whatYouGetTitle: "What You Get",
    whatYouGet: [
      "Early-stage SaaS apps",
      "Functional prototype platforms",
      "Niche marketplace portals",
      "Proof-of-concept web apps",
    ],
    whyItMattersTitle: "Why It Matters",
    whyItMatters: [
      "Launch fast, validate early",
      "Unstoppable founder momentum",
    ],
    tags: ["MVP", "SaaS", "Prototypes", "Fast Delivery"],
  },
];
