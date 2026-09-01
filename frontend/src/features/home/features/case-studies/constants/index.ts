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
      "App to manage tennis session and players freely (or padel, even badminton)",
    bullets: [
      "Up to 32 players",
      "Singles & Doubles Americano",
      "Smart, no-repeat scheduling",
      "Live standings as you play",
      "Share results instantly",
    ],
    url: `${process.env.NEXT_PUBLIC_LOTHLORIEN_BASE_URL}/project/kickserve`,
  },
  {
    title: "Bagels PreOrder App",
    description: "App to pre-order my bagels and salt bread",
    bullets: [
      "Smooth multi-step checkout flow",
      "Provide QRIS payment methods",
    ],
    url: `${process.env.NEXT_PUBLIC_LOTHLORIEN_BASE_URL}/project/bagels`,
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
