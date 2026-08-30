import React from "react";
import { ExternalLink } from "lucide-react";
import { LothlorienButton } from "@/components/ui/LothlorienButton";

interface CaseCardProps {
  title: string;
  description: string;
  bullets: string[];
  url: string;
}

export function CaseCard({ title, description, bullets, url }: CaseCardProps) {
  return (
    <div className="flex flex-col max-w-md justify-between p-10 sm:p-12 rounded-4xl bg-white/90 backdrop-blur-md border border-stone-200/90 hover:border-emerald-400/80 shadow-md hover:shadow-2xl hover:shadow-emerald-950/5 hover:-translate-y-1.5 transition-all duration-300 group">
      <div>
        <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4 group-hover:text-emerald-900 transition-colors">
          {title}
        </h3>
        <p className="text-base text-stone-600 mb-6 leading-relaxed font-sans">
          {description}
        </p>
        <ul className="space-y-3.5 mb-8 text-sm text-stone-600 font-sans">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="text-emerald-600 font-bold mt-1 text-xs">✓</span>
              <span className="leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <LothlorienButton
            variant="outline"
            size="lg"
            className="w-full justify-center group-hover:border-emerald-500 group-hover:bg-emerald-50/50 group-hover:text-emerald-900"
            rightIcon={<ExternalLink className="w-4.5 h-4.5" />}
          >
            Launch this app
          </LothlorienButton>
        </a>
      </div>
    </div>
  );
}
