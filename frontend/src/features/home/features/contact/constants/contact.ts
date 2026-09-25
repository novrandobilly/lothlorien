export interface SocialLink {
  name: string;
  url: string;
  iconName: "linkedin" | "github" | "instagram" | "whatsapp";
}

export const CONTACT_DETAILS = {
  name: "Stanislaus Billy",
  role: "Founder",
  avatarSrc: "/envien-contact.webp",
  // aboutParagraphs: [
  //   `Hi, I’m Billy. Welcome to Envien Studio.`,
  //   `I built Envien Studio on the principle that technology only matters when it genuinely solves human problems. Listening comes first, understanding your core friction before writing a line of architecture.`,
  //   `Whether partnering with aspiring teams or building platforms to help fellow creators share and sell their work, my hope is for Envien Studio to be a lasting blessing and catalyst for growth.`,
  //   `If you have a vision to bring to life, let’s talk.`,
  // ],
  aboutParagraphs: [
    `Hi, I’m Billy. Welcome to Envien Studio.`,
    `I built Envien Studio on a simple conviction: technology creates meaningful value only when it genuinely solves human problems. That is why listening sits at the foundation of everything I build, taking the time to understand the real friction you and your users face before architecting a solution.`,
    `Beyond custom engineering, I hold deep respect for proactive creators who pour their energy into making great things. Bringing ideas to life is demanding enough. Distributing and selling them shouldn't be a barrier. Part of Envien Studio’s mission is creating platforms where creators can share, market, and monetize their work effortlessly.`,
    `Ultimately, my hope is that Envien Studio serves as a genuine blessing and an engine of growth for the people and teams we partner with.`,
    `If you have an idea to explore or a product challenge to solve, my door is always open.`,
  ],
  title: "Send a Letter!",
  subtitle:
    "Got questions, feedback, or just want to say hi? Drop a message in my mailbox.",
  email: "novrandobilly@gmail.com",
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/novrandobilly/",
    iconName: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/novrandobilly",
    iconName: "github",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/envien.billy/",
    iconName: "instagram",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/+6282130006695",
    iconName: "whatsapp",
  },
];
