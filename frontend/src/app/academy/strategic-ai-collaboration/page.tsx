import type { Metadata } from "next";
import { StrategicAiCollaborationPageFeature } from "@/features/academy/strategic-ai-collaboration";

export const metadata: Metadata = {
  title: "Kerja Bareng AI, Siapa Takut? | Envien Studio Academy",
  description:
    "Workshop online 3 jam: selesaikan satu kerjaan nyatamu bareng AI dan pulang membawa Peta Personal. Oleh Envien, front-end engineer di Envien Studio.",
};

export default function StrategicAiCollaborationPage() {
  return <StrategicAiCollaborationPageFeature />;
}
