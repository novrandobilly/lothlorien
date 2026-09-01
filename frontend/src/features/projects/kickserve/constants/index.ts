import { ProjectDetail } from "../../types";

export const kickserveDetail: ProjectDetail = {
  id: "kickserve",
  title: "Kickserve App",
  subtitle:
    "An intuitive, zero-friction tournament and match management platform engineered for court-side racquet sports (Tennis, Padel, Badminton).",
  category: "Web Application / Sports Management",
  timeline: "2025 – Present",
  role: "Lead Frontend Engineer & UX Architect",
  demoUrl: "https://kickserve.envienstudio.com",
  bullets: [
    "Up to 32 players supported simultaneously",
    "Singles & Doubles Americano / Mexicano formats",
    "Smart, zero-repeat pairing & scheduling algorithm",
    "Real-time court-side live standings and point differentials",
    "Instant WhatsApp & high-res result card sharing",
  ],
  techStack: [
    "Next.js (App Router)",
    "TypeScript",
    "Tailwind CSS",
    "Local-First State Sync",
    "Lucide Icons",
  ],
  metrics: [
    {
      label: "Player Capacity",
      value: "2 – 32",
      detail: "Doubles & Singles Americano",
    },
    {
      label: "Setup Time",
      value: "< 30s",
      detail: "No login or backend required",
    },
    {
      label: "Offline Reliability",
      value: "100%",
      detail: "Zero court-side network dropouts",
    },
    {
      label: "Pairing Optimization",
      value: "Zero-Repeat",
      detail: "Balanced partner rotation matrix",
    },
  ],
  overview: {
    background:
      "Racquet sports like Tennis, Padel, and Badminton are experiencing massive social growth. Weekly social tournaments ('Americano' format where partners rotate each round) are notoriously difficult to organize manually with clipboards or spreadsheets.",
    problem:
      "Most existing tournament software requires clunky player registration, mandatory accounts, stable internet connectivity, and complex manual schedule management that disrupts fast-paced 15-minute game rotations.",
    solution:
      "Kickserve provides a lightweight, instant-launch tournament companion. Organizers simply add player names, select courts and target points, and the smart scheduling matrix dynamically balances rounds, updates live standings, and exports beautiful shareable summary cards with zero lag.",
  },
  features: [
    {
      title: "Smart Americano Pairing Engine",
      description:
        "Mathematically balanced round generation that pairs every player with different partners while minimizing repeat matchups across multiple courts.",
      icon: "Cpu",
      highlights: [
        "Dynamic court allocation (1 to 8 courts)",
        "Even partner distribution matrix",
        "Seamless late-arrival & drop-in substitutions",
      ],
    },
    {
      title: "Court-Side Rapid Score Entry",
      description:
        "High-contrast, thumb-friendly point counters designed specifically for bright sunlight and quick inputs between sets.",
      icon: "Trophy",
      highlights: [
        "Big touch targets for mobile use",
        "Instant score validation",
        "Live aggregate points & tiebreaker calculations",
      ],
    },
    {
      title: "Live Standings & Power Ranking",
      description:
        "Instant recalculation of tournament standings, showing total points scored, point differential (+/-), win-loss record, and active streaks.",
      icon: "BarChart3",
      highlights: [
        "Real-time podium leaderboard",
        "Dynamic tie-break resolution",
        "Round-by-round point progression chart",
      ],
    },
    {
      title: "Instant Social & WhatsApp Share",
      description:
        "Export clean, beautifully formatted text summaries and high-res digital certificates ready to drop into WhatsApp community group chats.",
      icon: "Share2",
      highlights: [
        "Pre-formatted WhatsApp group markdown",
        "Clean graphic summary preview",
        "Podium honors for 1st, 2nd, and 3rd place",
      ],
    },
  ],
  architecture: [
    {
      title: "1. Round-Robin & Americano Schedule Matrix",
      description:
        "The scheduler implements a modified Berger / round-robin permutation algorithm. In each round `k`, player indices are rotated around a fixed pivot point, ensuring every player partners with everyone else exactly once before repeats occur.",
    },
    {
      title: "2. Offline-First Optimistic State Sync",
      description:
        "Tennis and padel courts often suffer from spotty cell coverage. Kickserve persists all active tournaments, player lists, and completed rounds into localStorage and IndexedDB with transaction-like rollback safety.",
    },
    {
      title: "3. Ergonomic UI for Outdoor & Court-Side Environments",
      description:
        "Designed with deep contrast ratios, accessible font scaling, and minimum 48px touch targets to accommodate organizers handling mobile devices while on the court.",
    },
  ],
};
