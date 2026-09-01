export interface GalleryTab {
  id: string;
  label: string;
  title: string;
  description: string;
  highlights: string[];
  placeholderLabel: string;
}

export interface KickserveData {
  title: string;
  badge: string;
  description: string;
  launchUrl: string;
  buttonText: string;
  whatCanYouManage: {
    title: string;
    description: string;
  }[];
  galleryTabs: GalleryTab[];
}

export const kickserveData: KickserveData = {
  title: "Kickserve App",
  badge: "Sports Tournament Manager",
  description:
    "An intuitive, zero-friction tournament and match management app for racquet sports (Tennis, Padel, Badminton). Built to handle social Americano rotations, eliminate manual spreadsheet calculations, and provide court-side live standings on any device.",
  launchUrl: "https://kickserve.envienstudio.com",
  buttonText: "Launch Kickserve",
  whatCanYouManage: [
    {
      title: "Up to 32 Players",
      description: "Quick player addition, seed rankings, and seamless mid-session substitutions.",
    },
    {
      title: "Singles & Doubles Americano",
      description: "Automated round-by-round partner and opponent rotations for balanced social play.",
    },
    {
      title: "Smart No-Repeat Scheduling",
      description: "Permutation algorithm ensuring everyone partners with different players before repeats.",
    },
    {
      title: "Live Standings & Differentials",
      description: "Real-time leaderboard updating instantly as scores are entered on each court.",
    },
    {
      title: "Instant Result Sharing",
      description: "One-tap export formatted specifically for WhatsApp group chats and social feeds.",
    },
  ],
  galleryTabs: [
    {
      id: "custom-players",
      label: "Custom Players",
      title: "Player Roster & Court Allocation",
      description:
        "Easily add, rename, and manage up to 32 players court-side. Save frequently playing groups to localStorage with zero sign-up required.",
      highlights: [
        "Quick-add player names with instant validation",
        "Drag-and-drop seeding & court distribution",
        "Late arrival and drop-in substitution support",
      ],
      placeholderLabel: "Custom Players Roster Interface Preview",
    },
    {
      id: "matchmaking",
      label: "Matchmaking",
      title: "Smart Americano Matchmaking Matrix",
      description:
        "Generates balanced round-by-round court pairings. Ensures dynamic partner rotations while minimizing repeat matchups across multiple courts.",
      highlights: [
        "Dynamic multi-court allocation (1 to 8 courts)",
        "Zero-repeat partner permutation matrix",
        "Simple quick-touch score inputs (+ / - buttons)",
      ],
      placeholderLabel: "Matchmaking & Court Schedule Preview",
    },
    {
      id: "live-standings",
      label: "Live Standings",
      title: "Real-Time Leaderboard & Shareable Summary",
      description:
        "Tracks total points, win/loss differential (+/-), and podium positions as matches finish. Generates formatted summaries for instant WhatsApp sharing.",
      highlights: [
        "Auto-sorting podium leaderboard (1st, 2nd, 3rd)",
        "Live point differential calculation for tie-breaking",
        "One-click formatted WhatsApp text & graphic export",
      ],
      placeholderLabel: "Live Standings & Leaderboard Preview",
    },
  ],
};
