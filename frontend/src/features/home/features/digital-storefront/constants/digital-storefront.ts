export interface DigitalStorefrontProject {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: "active" | "coming_soon";
  statusBadge?: string;
  visualGradient?: string;
  imageSrc?: string;
  imageAlt?: string;
  demoUrl?: string;
  githubUrl?: string;
  categoryIcon?: string;
}

export const digitalStorefrontProjects: DigitalStorefrontProject[] = [
  {
    id: "kinetic-canvas",
    title: "Kinetic Canvas",
    description: "Interactive generative physics engine.",
    tags: ["WebGL", "Physics"],
    status: "active",
    statusBadge: "Live Demo",
    visualGradient:
      "from-emerald-600/30 via-teal-500/20 to-stone-900/80",
    demoUrl: "#",
    categoryIcon: "⚡",
  },
  {
    id: "zenith-motion-lab",
    title: "Zenith UI Engine",
    description: "Fluid gesture interaction laboratory.",
    tags: ["Framer Motion", "Micro-UX"],
    status: "active",
    statusBadge: "Live Demo",
    visualGradient:
      "from-orange-500/30 via-amber-500/20 to-stone-900/80",
    demoUrl: "#",
    categoryIcon: "✦",
  },
  {
    id: "chroma-ai-tokens",
    title: "Chroma AI",
    description: "AI algorithmic palette studio.",
    tags: ["Generative AI", "Tokens"],
    status: "coming_soon",
    statusBadge: "Coming Soon",
    visualGradient:
      "from-indigo-600/30 via-purple-500/20 to-stone-900/80",
    demoUrl: "#",
    categoryIcon: "🧪",
  },
];
