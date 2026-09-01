export interface Project {
  title: string;
  description: string;
  bullets: string[];
  url: string;
}

export const projects: Project[] = [
  {
    title: "Kickserve App",
    description:
      "Manage your session and players freely (Tennis, Padel, even Badminton)",
    bullets: [
      "Up to 32 players",
      "Singles & Doubles Americano",
      "Smart, no-repeat scheduling",
      "Live standings as you play",
      "Share results instantly",
    ],
    url: `${process.env.NEXT_PUBLIC_DEMO_URL_KICKSERVE}/project/kickserve`,
  },
  {
    title: "Bagels PreOrder App",
    description:
      "Pre-order bagels and schedule custom pickups at your favorite bakery",
    bullets: [
      "Smooth multi-step checkout flow",
      "Interactive time-slot selector",
      "Auto-saves progress on interrupt",
      "Strict validation avoids order errors",
      "Secure, offline-ready payment caches",
    ],
    url: `${process.env.NEXT_PUBLIC_DEMO_URL_KICKSERVE}/project/bagels`,
  },
  // {
  //   title: "Online Psychological Test",
  //   description:
  //     "Take assessments and view results anywhere, even with poor connection",
  //   bullets: [
  //     "Full offline support and automatic sync",
  //     "Instant response with zero latency",
  //     "Secure local data encryption",
  //     "Auto-retries on unstable connection",
  //     "Export and share PDF results instantly",
  //   ],
  //   url: `${process.env.NEXT_PUBLIC_DEMO_URL_KICKSERVE}/project/psikotes`,
  // },
];
