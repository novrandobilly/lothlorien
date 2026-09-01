export interface GalleryTab {
  id: string;
  label: string;
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
    "A lightweight tournament and Americano session manager built for racquet sports (Tennis, Padel, Badminton). It eliminates manual spreadsheets by automating partner rotations, court allocations, and live court-side standings on any mobile device.",
  launchUrl: "https://kickserve.envienstudio.com",
  buttonText: "Launch Kickserve",
  whatCanYouManage: [
    {
      title: "Player Rosters (Up to 32)",
      description:
        "Easily register players, assign skill seeds, and handle substitutions mid-session.",
    },
    {
      title: "Americano & Mexicano Rotations",
      description:
        "Generate balanced rounds with automated partner and opponent pairings across all active courts.",
    },
    {
      title: "Smart No-Repeat Scheduling",
      description:
        "Deterministic pairing algorithm guarantees players do not partner with the same person twice.",
    },
    {
      title: "Live Standings & Differentials",
      description:
        "Enter match scores directly court-side to calculate total points, win/loss stats, and podium rankings in real time.",
    },
    {
      title: "One-Tap WhatsApp Share",
      description:
        "Export clean, formatted result summaries and podium standings directly to your community group chat.",
    },
  ],
  galleryTabs: [
    {
      id: "custom-players",
      label: "Custom Players",
      placeholderLabel: "Custom Players Roster",
    },
    {
      id: "matchmaking",
      label: "Matchmaking",
      placeholderLabel: "Court Matchmaking Matrix",
    },
    {
      id: "live-standings",
      label: "Live Standings",
      placeholderLabel: "Live Standings & Leaderboard",
    },
  ],
};
