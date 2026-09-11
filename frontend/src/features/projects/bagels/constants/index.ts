import { CaseStudyData } from "../../types";

export const bagelsData: CaseStudyData = {
  title: "Bagels PreOrder App",
  badge: "Boutique Bakery Pre-Order & Checkout",
  description:
    "A streamlined pre-order web application tailored for artisanal bakery drops, featuring live batch slot reservation and seamless QRIS checkout.",
  launchUrl: "https://bagels.envienstudio.com",
  buttonText: "Launch Bagels PreOrder",
  topics: [
    {
      title: "1. What is this app?",
      content:
        "A boutique pre-order web application built for an artisanal micro-bakery. It allows customers to browse weekly limited bread batches (New York style bagels and Japanese shio pan), customize flavors and spreads, and complete orders with direct payment confirmation.",
    },
    {
      title: "2. The Core Problem",
      content:
        "Previously, batch orders were handled manually over WhatsApp DMs and static forms. This led to frequent inventory overselling during rush hours, tedious manual payment verification, and excessive back-and-forth communication for simple orders.",
    },
    {
      title: "3. The Engineering Challenge",
      content:
        "The primary challenge was managing strict batch inventory limits under flash-drop concurrency. When a batch opens and dozens of buyers check out at once, temporary reservation locks ensure inventory never oversells without creating a slow or clunky user experience on mobile browsers.",
    },
    {
      title: "4. The Tech Stack",
      content:
        "Built with a modern, lightweight frontend stack optimized for mobile performance and fast load times inside in-app web views (Instagram/TikTok).",
      bullets: [
        "Next.js (App Router) & React 19",
        "TypeScript & Tailwind CSS",
        "Zustand / React Hook Form",
        "Dynamic Indonesian QRIS payment integration",
        "Vercel Edge Network",
      ],
    },
    {
      title: "5. Key Takeaways & What's Next",
      content:
        "Automating the pre-order workflow cut manual order management time by over 90% and eliminated oversold batches entirely. Future iterations will explore automated delivery fee calculation and real-time baking queue notifications.",
    },
  ],
};
