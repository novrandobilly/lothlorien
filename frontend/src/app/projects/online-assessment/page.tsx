import type { Metadata } from "next";
import { AssessmentPageFeature } from "@/features/projects/online-assessment";

export const metadata: Metadata = {
  title: "Online Assessment App Case Study | Envien Studio",
  description:
    "Zero-latency offline-first psychological testing platform with psychometric scoring and instant PDF reports by Novrando Billy (Envien Studio).",
};

export default function OnlineAssessmentPage() {
  return <AssessmentPageFeature />;
}
