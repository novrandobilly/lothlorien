import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AssessmentCaseStudy } from "./features/AssessmentCaseStudy";

export function AssessmentPageFeature() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090b10] text-[#f5f2eb] selection:bg-cyan-400/20 selection:text-cyan-200">
      {/* Navigation */}
      <Header />

      {/* Main Content: Case Study Container */}
      <main className="flex-1">
        <AssessmentCaseStudy />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AssessmentPageFeature;
export * from "./constants";
export * from "./features/AssessmentCaseStudy";
