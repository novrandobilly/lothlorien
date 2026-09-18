import { LucideIcon, FileText, RefreshCw, HelpCircle } from "lucide-react";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  name: string;
  icon: LucideIcon;
  questions: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    id: "process-delivery",
    name: "Process & Delivery",
    icon: FileText,
    questions: [
      {
        id: "project-timeline",
        question: "How long does a project actually take from start to finish?",
        answer:
          "Timelines depend on scope complexity: Growth & Conversion landing pages take 1–2 weeks, internal tools take 2–4 weeks, and functional MVPs typically take 3–6 weeks. You receive an exact milestone schedule before any work begins.",
      },
      {
        id: "figma-designs",
        question: "Do I need to have Figma designs ready before reaching out?",
        answer:
          "No. If you have designs ready, they can be implemented directly. If not, the project starts with wireframing and UI/UX design tailored to your brand and user flow before a single line of code is written.",
      },
      {
        id: "kickoff-requirements",
        question: "What do you need from my team before we kick off?",
        answer:
          "A clear breakdown of the business problem, access to any existing brand assets (logos, copy, typography), third-party accounts (domain, hosting, payment gateways), and one dedicated point of contact for timely feedback.",
      },
    ],
  },
  {
    id: "ownership-tech-stack",
    name: "Ownership & Tech Stack",
    icon: RefreshCw,
    questions: [
      {
        id: "code-ip-ownership",
        question: "Do I own 100% of the code and intellectual property?",
        answer:
          "Yes. Upon final payment, full intellectual property, design assets, and source code repositories are completely transferred to your organization with zero vendor lock-in.",
      },
      {
        id: "hosting-infrastructure",
        question:
          "Where will the web app be hosted, and who manages the infrastructure?",
        answer:
          "Everything is deployed on your own infrastructure (such as AWS, Supabase, Vercel, or a private VPS) so you retain full control. The initial environment setup, domain routing, and production deployment are handled entirely for you.",
      },
    ],
  },
  {
    id: "scope-pricing-post-launch",
    name: "Scope, Pricing, & Post-Launch",
    icon: HelpCircle,
    questions: [
      {
        id: "pricing-structure",
        question: "How is pricing structured, and are there any hidden fees?",
        answer:
          "Projects run on a transparent, fixed-scope flat fee rather than open-ended hourly billing. Any third-party costs (domain registration, transactional email APIs, payment gateway transaction fees) are paid directly to the providers under your accounts.",
      },
      {
        id: "midway-scope-changes",
        question: "What happens if I want to add new features midway?",
        answer:
          "Minor tweaks that fit within the sprint are accommodated naturally. Substantial feature additions are documented, estimated separately, and scheduled either as a secondary phase or an adjusted milestone to keep the launch date protected.",
      },
      {
        id: "post-launch-warranty",
        question: "What happens after launch if something breaks?",
        answer:
          "Every delivery includes a complimentary 14 to 30-day post-launch warranty to monitor production, squash unexpected bugs, and ensure seamless operation under real user traffic. Long-term maintenance retainers are also available.",
      },
    ],
  },
];
