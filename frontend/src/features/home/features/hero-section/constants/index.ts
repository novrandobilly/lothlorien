export interface HeroPair {
  asset: string;
  outcome: string;
}

export const heroPairs: HeroPair[] = [
  {
    asset: "master spreadsheet",
    outcome: "a real-time dashboard",
  },
  {
    asset: "consulting framework",
    outcome: "a dedicated client portal",
  },
  {
    asset: "scoring methodology",
    outcome: "an interactive web engine",
  },
  {
    asset: "manual admin workflow",
    outcome: "a custom business system",
  },
];

// Choose from: "emerald" | "gradient" | "highlight"
export const ACTIVE_OUTCOME_STYLE: "emerald" | "gradient" | "highlight" = "gradient";

export const OUTCOME_STYLES = {
  emerald:
    "text-emerald-400 border-b border-emerald-400/50 pb-0.5 inline-block font-serif italic",
  gradient:
    "text-[#e5c158] border-b border-[#c5a059]/70 pb-0.5 inline-block font-serif italic",
  highlight:
    "bg-amber-950/40 text-[#e5c158] px-2.5 py-0.5 rounded-md border border-amber-500/30 inline-block font-serif italic",
};
