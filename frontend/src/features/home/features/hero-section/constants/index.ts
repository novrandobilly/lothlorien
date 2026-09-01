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
  emerald: "text-emerald-700 border-b-2 border-emerald-500 pb-0.5",
  gradient:
    "bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent border-b-2 border-emerald-500/70 pb-0.5 inline-block",
  highlight:
    "bg-emerald-50 text-emerald-900 px-2 py-0.5 rounded-md border border-emerald-100/80 shadow-2xs inline-block",
};
