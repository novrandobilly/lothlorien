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
    "text-emerald-700 border-b-2 border-emerald-600/60 pb-0.5 inline-block font-sans font-bold italic",
  gradient:
    "text-amber-700 border-b-2 border-amber-600/60 pb-0.5 inline-block font-sans font-bold italic",
  highlight:
    "bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-md border border-amber-300 inline-block font-sans font-bold italic",
};

export * from "./visual-cards";

