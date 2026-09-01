import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { LothlorienButton } from "@/components/ui/LothlorienButton";

interface CaseCardProps {
  title: string;
  description: string;
  bullets: string[];
  url: string;
  buttonText?: string;
}

export function CaseCard({
  title,
  description,
  bullets,
  url,
  buttonText = "Launch this app",
}: CaseCardProps) {
  const isExternal = url.startsWith("http://") || url.startsWith("https://");

  return (
    <div className="flex flex-col w-full h-full justify-between p-7 sm:p-8 rounded-3xl bg-linear-to-b from-[#0e121b] via-[#090c14] to-[#070910] border border-stone-700/70 hover:border-amber-500/50 shadow-2xl shadow-black/80 hover:shadow-[0_0_35px_-5px_rgba(212,175,55,0.2)]  transition-all duration-300 group ring-1 ring-white/5">
      <div>
        <h3 className="text-xl sm:text-2xl font-normal font-serif text-stone-100 mb-3 group-hover:text-amber-200 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-stone-400 mb-6 leading-relaxed font-sans">
          {description}
        </p>
        <ul className="space-y-2 mb-8 text-sm text-stone-400 font-sans">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="text-emerald-400 font-semibold text-xs mt-0.5">
                ◆
              </span>
              <span className="leading-relaxed text-stone-400 text-xs sm:text-sm">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={url}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="block w-full"
      >
        <LothlorienButton
          variant="outline"
          size="md"
          className="w-full justify-center text-xs sm:text-sm"
          rightIcon={<ExternalLink className="w-4 h-4" />}
        >
          {buttonText}
        </LothlorienButton>
      </Link>
    </div>
  );
}
