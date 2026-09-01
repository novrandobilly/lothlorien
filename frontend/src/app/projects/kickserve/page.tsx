import type { Metadata } from "next";
import { KickservePageFeature } from "@/features/projects/kickserve";

export const metadata: Metadata = {
  title: "Kickserve App Case Study | Envien Studio",
  description:
    "Tournament & match management platform for court-side racquet sports (Tennis, Padel, Badminton) by Novrando Billy (Envien Studio).",
};

export default function KickservePage() {
  return <KickservePageFeature />;
}
