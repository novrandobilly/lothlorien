import type { Metadata } from "next";
import { StrategicAiCollaborationThankYouFeature } from "@/features/academy/strategic-ai-collaboration-thank-you";

// Only reached from the Mayar redirect after payment, so keep it out of search results.
export const metadata: Metadata = {
  title: "Pendaftaran berhasil | Kerja Bareng AI, Siapa Takut?",
  description: "Konfirmasi pendaftaran workshop Kerja Bareng AI, Siapa Takut?",
  robots: { index: false, follow: false },
};

export default function StrategicAiCollaborationThankYouPage() {
  return <StrategicAiCollaborationThankYouFeature />;
}
