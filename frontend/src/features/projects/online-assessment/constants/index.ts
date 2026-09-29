import { StaticImageData } from "next/image";
import intiDinamisLogo from "@/assets/experiences/logo-intidinamis.svg";
import participantPovImg from "@/assets/projects/online-assessment/participant-pov.webp";
import adminDashboardPovImg from "@/assets/projects/online-assessment/admin-dashboard-pov.webp";
import participantDetailsPovImg from "@/assets/projects/online-assessment/participant-details-pov.webp";
import reportingPovImg from "@/assets/projects/online-assessment/reporting-pov.webp";

export interface GalleryItem {
  id: string;
  label: string;
  image: StaticImageData | string;
  alt: string;
}

export interface AssessmentTopic {
  title: string;
  content: string;
  bullets?: string[];
}

export interface OnlineAssessmentData {
  title: string;
  clientName: string;
  clientLogo: StaticImageData | string;
  description: string;
  ndaNotice: string;
  gallery: GalleryItem[];
  topics: AssessmentTopic[];
}

export const assessmentData: OnlineAssessmentData = {
  title: "Psychological Assessment Engine",
  clientName: "Inti Dinamis",
  clientLogo: intiDinamisLogo,
  description: `An enterprise-grade online assessment platform designed for corporate psychological evaluations, aptitude batteries, and standardized recruitment testing.`,
  ndaNotice:
    "Confidential Enterprise System — Deployed internally for PT Inti Dinamis. In compliance with client non-disclosure agreements and psychometric test integrity standards, live testing links are withheld. All previews shown are sanitized.",
  gallery: [
    {
      id: "participant-portal",
      label: "Participant Portal",
      image: participantPovImg,
      alt: "Participant Assessment Portal - Overview of assigned psychometric batteries and instructions",
    },
    {
      id: "participant-details",
      label: "Participant Details",
      image: participantDetailsPovImg,
      alt: "Participant Details & Scoring - Comprehensive module scoring, status indicators, and report export",
    },
    {
      id: "admin-dashboard",
      label: "Admin Dashboard",
      image: adminDashboardPovImg,
      alt: "Admin Participant Overview - Real-time tracking of participant progress and module completion status",
    },
    {
      id: "reporting-hub",
      label: "Batch Reporting",
      image: reportingPovImg,
      alt: "Batch Reporting & Export Hub - Cohort filtering by registration date and bulk report export",
    },
  ],
  topics: [
    {
      title: "1. What is this app?",
      content:
        "A specialized web assessment engine engineered for corporate psychological evaluations, aptitude batteries, and standardized recruitment testing. As a lightweight, browser-based platform, participants only need a laptop and a stable internet connection as the minimum requirements to complete their evaluations seamlessly.",
    },
    {
      title: "2. The Core Problem & Logistics",
      content:
        "Traditional paper testing required physical test booklets, manual administration, and days of psychologist calculation per cohort. Because assessment requests arrive almost daily, manual scoring created compounding backlogs and delayed turnaround times. Furthermore, client companies frequently evaluate staff located in distant branch offices, making physical on-site testing and booklet distribution costly and impractical.",
      bullets: [
        "Slow manual grading calculations",
        "Daily incoming test backlogs",
        "Distant branch office testing",
        "High physical booklet costs",
      ],
    },
    {
      title: "3. The Solution & Core Features",
      content:
        "The online assessment engine resolves these bottlenecks with an automated digital testing and evaluation pipeline. Real-time psychometric algorithms eliminate manual calculation backlogs upon test completion, while browser-based accessibility enables client branch offices to conduct assessments on demand without physical logistics.",
      bullets: [
        "Instant real-time automated scoring calculations",
        "Zero turnaround delays for daily requests",
        "Remote browser testing for branch offices",
        "Paperless system eliminating physical printing costs",
      ],
    },
    {
      title: "4. The Engineering & Tech Stack",
      content:
        "Engineered with a lightweight, client-focused architecture prioritizing instant candidate interactions, resilient data caching, and seamless backend synchronization.",
      bullets: [
        "React (Vite): Fast client-side SPA runtime",
        "TypeScript: Type-safe psychometric scoring algorithms",
        "Tailwind CSS: Clean, distraction-free examination UI",
        "TanStack Query: Resilient server state caching",
        "PocketBase: Lightweight real-time backend and auth",
      ],
    },
    {
      title: "5. Key Takeaways",
      content:
        "Although PT Inti Dinamis was the contracting client, the true end-users are the participants taking exams and the administrators logging in every day. Early assumptions about what seemed intuitive or aesthetic were often humbled by the daily realities of active users. Because administrators and participants interact with the system continuously, their practical feedback ultimately shaped the UX decisions—reinforcing that genuine usability comes from listening to the people using it day in and day out.",
    },
  ],
};
