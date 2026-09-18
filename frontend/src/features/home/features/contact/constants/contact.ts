export interface SocialLink {
  name: string;
  url: string;
  iconName: "linkedin" | "github" | "instagram" | "whatsapp";
}

export const CONTACT_DETAILS = {
  name: "Novrando Billy",
  role: "Envien Studio",
  avatarSrc: "/envien-contact.webp",
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
