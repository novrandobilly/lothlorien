import React from "react";
import { LothlorienButton } from "@/components/ui/LothlorienButton";
import { Sparkles, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-3xl w-full text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold tracking-wide uppercase">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Lothlorien Sanctuary</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-stone-900">
          Crafting ideas into enduring digital experiences.
        </h1>

        <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
          Welcome to my digital space. Lothlorien is the home for my personal brand,
          writing, software experiments, and creative endeavors.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <LothlorienButton
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Explore Projects
          </LothlorienButton>

          <LothlorienButton variant="gold" size="lg">
            About Me
          </LothlorienButton>
        </div>
      </div>
    </main>
  );
}
