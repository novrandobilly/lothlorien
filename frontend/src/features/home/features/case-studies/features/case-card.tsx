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
    <div className="flex flex-col w-full h-full justify-between p-7 sm:p-8 rounded-3xl bg-[#111520]/85 backdrop-blur-md border border-stone-800/90 hover:border-amber-500/40 shadow-lg shadow-black/40 hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.15)] hover:-translate-y-1.5 transition-all duration-300 group">
      <div>
        <h3 className="text-xl sm:text-2xl font-normal font-serif text-stone-100 mb-3 group-hover:text-amber-200 transition-colors">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-stone-400 mb-6 leading-relaxed font-sans">
          {description}
        </p>
        <ul className="space-y-2 mb-8 text-sm text-stone-300 font-sans">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="text-emerald-400 font-semibold text-xs mt-0.5">◆</span>
              <span className="leading-relaxed text-stone-300 text-xs sm:text-sm">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <a href={url} target="_blank" rel="noopener noreferrer" className="block w-full">
        <LothlorienButton
          variant="outline"
          size="md"
          className="w-full justify-center text-xs sm:text-sm"
          rightIcon={<ExternalLink className="w-4 h-4" />}
        >
          Launch App
        </LothlorienButton>
      </a>
    </div>
  );
}
