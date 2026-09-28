import { StaticImageData } from "next/image";
import mnemosyneImg from "@/assets/experiences/mnemosyne.webp";
import visualCardImg from "@/assets/hero-visual-card/vc-menomsyne.webp";
import intiDinamisLogo from "@/assets/experiences/logo-intidinamis.svg";

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
  badge: string;
  clientName: string;
  clientLogo: StaticImageData | string;
  description: string;
  ndaNotice: string;
  gallery: GalleryItem[];
  topics: AssessmentTopic[];
}

export const assessmentData: OnlineAssessmentData = {
  title: "Psychological Assessment Engine",
  badge: "Psychometrics & Offline-First Engine",
  clientName: "PT Inti Dinamis",
  clientLogo: intiDinamisLogo,
  description:
    "An offline-first psychological evaluation engine engineered for high-stakes corporate testing, automated real-time scoring, instant psychogram generation, and zero data loss.",
  ndaNotice:
    "Confidential Enterprise System — Deployed internally for PT Inti Dinamis. In compliance with client non-disclosure agreements and psychometric test integrity standards, live testing links are withheld. All previews shown are sanitized.",
  gallery: [
    {
      id: "exam-runtime",
      label: "Exam Interface",
      image: mnemosyneImg,
      alt: "Candidate Examination Runtime - Clean, focused psychometric assessment interface",
    },
    {
      id: "overview-mockup",
      label: "System Overview",
      image: visualCardImg,
      alt: "Online Assessment System Overview Mockup",
    },
  ],
  topics: [
    {
      title: "1. What is this app?",
      content:
        "A specialized web assessment engine engineered for corporate psychological evaluations, aptitude batteries (DISC, Kraepelin/Pauli speed math, Raven matrices), and standardized recruitment testing. It ensures candidates experience zero latency and zero distraction throughout their examination.",
    },
    {
      title: "2. The Core Problem & Logistics",
      content:
        "Traditional paper testing requires physical test booklets, manual stopwatches, and 2–4 days of psychologist calculation per cohort. Meanwhile, standard online survey tools crash during intermittent Wi-Fi drops, causing lost answers, frozen countdown timers, and invalidating time-sensitive speed tests.",
      bullets: [
        "Severe manual grading bottlenecks: Psychologists previously spent days calculating complex multi-dimensional scoring grids.",
        "High recurring logistics costs: Printing thousands of physical test booklets and shipping confidential kits.",
        "Connection fragility: Generic web forms lose answers and corrupt speed-test timers when internet drops.",
      ],
    },
    {
      title: "3. Automated Scoring & Psychograms",
      content:
        "The core innovation is deterministic, real-time psychometric computation. The engine calculates multi-dimensional behavioral traits and pace curves instantly upon test completion, generating print-ready visual psychograms without manual calculation.",
      bullets: [
        "DISC Behavioral Profiling: Instant calculation of Dominance, Influence, Steadiness, and Compliance matrices across Graph 1, 2, and 3.",
        "Kraepelin & Pauli Speed Curves: Continuous pace analysis calculating work speed, accuracy rate, error distribution, and fatigue resistance curves.",
        "Raven Matrix Cognitive Norms: Automatic mapping of raw abstract reasoning scores to standardized cognitive percentiles.",
        "Instant Psychogram Export: Formats scores into clean vector radar charts, competency bars, and narrative summaries ready for immediate PDF export.",
      ],
    },
    {
      title: "4. The Engineering & Tech Stack",
      content:
        "Engineered with a client-first, resilient architecture prioritizing zero-latency interaction, offline durability, and tamper-resistant timing.",
      bullets: [
        "Next.js (App Router) & React 19: High-performance component model delivering instant hydration.",
        "TypeScript & Tailwind CSS: Type-safe scoring algorithms and an accessible, distraction-free UI.",
        "IndexedDB (Dexie) & Service Workers: Transactional local persistence guaranteeing zero lost answers during unexpected disconnections.",
        "Dedicated Web Workers: Monotonic background timing engine immune to OS battery throttles and tab sleep.",
        "Client-Side PDF & SVG Vector Export: Instant generation of print-ready psychologist psychogram reports.",
      ],
    },
    {
      title: "5. Operational Cost Reduction & Impact",
      content:
        "By replacing paper test kits and manual grading with automated algorithmic scoring, the platform transformed assessment operations for PT Inti Dinamis.",
      bullets: [
        "Instant Grading (0s): Slashed psychogram delivery turnaround from 2–4 days to immediate completion.",
        "~70% Operational Cost Reduction: Eliminated printing, physical kit logistics, and human grading overhead.",
        "100% Submission Resilience: Maintained a zero data-loss record across remote test centers with unstable internet.",
      ],
    },
  ],
};
