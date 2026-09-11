import type { Metadata } from "next";
import { BagelsPageFeature } from "@/features/projects/bagels";

export const metadata: Metadata = {
  title: "Bagels PreOrder App Case Study | Envien Studio",
  description:
    "Artisanal bakery batch pre-order platform with live slot reservation and seamless QRIS checkout by Novrando Billy (Envien Studio).",
};

export default function BagelsPage() {
  return <BagelsPageFeature />;
}
