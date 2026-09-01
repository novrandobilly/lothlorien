export interface Experience {
  id: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

export const experiences: Experience[] = [
  {
    id: "transfez",
    company: "Transfez, Jakarta, Indonesia",
    period: "September 2022 - Present",
    description:
      "Senior Frontend Engineer. Handling mobile & web applications.",
    tags: ["Frontend"],
  },
  {
    id: "swadeli-designs",
    company: "Swadeli, Jakarta, Indonesia",
    period: "June 2022 - July 2022 (Contract)",
    description:
      "Redesigned UX flows for a mobile app and admin dashboard. Implemented responsive frontend for the admin dashboard.",
    tags: ["UIUX"],
  },
  // {
  //   id: "visionary-creations",
  //   company: "Visionary Creations Ltd, UK",
  //   period: "February 2022 - Present",
  //   description: "Principal Designer, Berlin, Crafting tomorrow's experiences",
  //   tags: ["Branding", "UIUX"],
  // },
];
