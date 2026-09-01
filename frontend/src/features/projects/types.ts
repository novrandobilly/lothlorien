export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  timeline: string;
  role: string;
  demoUrl?: string;
  bullets: string[];
  techStack: string[];
  metrics: { label: string; value: string; detail: string }[];
  overview: {
    background: string;
    problem: string;
    solution: string;
  };
  features: {
    title: string;
    description: string;
    icon: string;
    highlights: string[];
  }[];
  architecture: {
    title: string;
    description: string;
    codeSnippet?: string;
  }[];
}
