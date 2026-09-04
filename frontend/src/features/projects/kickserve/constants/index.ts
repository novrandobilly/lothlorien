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
    "A lightweight session manager built for racquet sports (Tennis, Padel, Badminton).",
  launchUrl: "https://kickserve.envienstudio.com",
  buttonText: "Launch Kickserve",
  whatCanYouManage: [
    {
      title: "Up to 32 Players",
      description:
        "Easily register players and handle substitutions mid-session.",
    },
    {
      title: "Americano Rotations",
      description: "Generate balanced rounds with automated pairings.",
    },
    {
      title: "Smart No-Repeat Scheduling",
      description:
        "Deterministic pairing algorithm to make equal playtime among the players.",
    },
    {
      title: "Live Standings & Differentials",
      description:
        "Calculate total points, win/loss stats, and podium rankings in real time, automatically.",
    },
    {
      title: "One-Tap Share",
      description: "Share with the world of how fun your session was!",
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
