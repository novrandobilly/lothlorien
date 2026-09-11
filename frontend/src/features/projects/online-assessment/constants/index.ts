import { CaseStudyData } from "../../types";

export const assessmentData: CaseStudyData = {
  title: "Online Assessment",
  badge: "Psychometrics & Offline-First PWA",
  description:
    "An offline-first psychological evaluation platform engineered for high-stakes test administration, zero-latency question transitions, and reliable result synchronization.",
  launchUrl: "https://psikotes.envienstudio.com",
  buttonText: "Launch Online Assessment",
  topics: [
    {
      title: "1. What is this app?",
      content:
        "A specialized web assessment tool designed for psychological evaluations, aptitude batteries (DISC, Kraepelin/Pauli speed math, Raven matrices), and standardized recruitment testing. It ensures candidates experience zero lag and zero distraction throughout their tests.",
    },
    {
      title: "2. The Core Problem",
      content:
        "Standard online test platforms depend on an active internet connection for every action. In remote test centers or locations with spotty Wi-Fi, connection drops cause lost answers, frozen countdown timers, submission crashes, and severe candidate distress.",
    },
    {
      title: "3. The Engineering Challenge",
      content:
        "Designing an offline-first architecture that runs entirely in-browser while preserving test integrity. It requires transactional local persistence to guarantee zero lost answers, drift-free monotonic countdown timers unaffected by OS tab throttling, and quiet background sync upon reconnection.",
    },
    {
      title: "4. The Tech Stack",
      content:
        "Engineered with a client-first, resilient architecture prioritizing zero-latency interaction and offline reliability.",
      bullets: [
        "Next.js (App Router) & React 19",
        "TypeScript & Tailwind CSS",
        "IndexedDB (idb/Dexie) & Service Workers",
        "Dedicated Web Workers for monotonic timing",
        "Client-side PDF & SVG visualization export",
      ],
    },
    {
      title: "5. Key Takeaways & What's Next",
      content:
        "Proved that web applications can achieve native-grade reliability for high-stakes examinations without server dependency during the test. Future iterations include biometric focus monitoring and dynamic adaptive question routing.",
    },
  ],
};
