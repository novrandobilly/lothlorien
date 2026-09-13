export interface LabProject {
  title: string;
  subtitle: string;
  period: string;
  tag: string;
  skills: string[];
  url: string;
  buttonText: string;
}

export const labProjects: LabProject[] = [
  {
    period: "2024",
    title: "Kickserve App",
    subtitle: "Racquet Match & Tournament Engine",
    tag: "Free Community Utility",
    skills: [
      "Americano & Round Robin",
      "Fair Court Rotation",
      "Live Standings & Podiums",
      "Instant One-Tap Share",
    ],
    url: "/projects/kickserve",
    buttonText: "Launch Kickserve",
  },
  {
    period: "2024",
    title: "Bagels PreOrder App",
    subtitle: "Artisan Bakery Batch Reservation",
    tag: "Self-Use Commerce Tool",
    skills: [
      "Batch Slot Allocation",
      "Indonesian QRIS Payment",
      "Automated WhatsApp Alerts",
      "Live Capacity Limits",
    ],
    url: "/projects/bagels",
    buttonText: "Launch Bagels PreOrder",
  },
];
