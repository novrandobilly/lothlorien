import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, FlaskConical } from "lucide-react";
import { LabProject } from "../constants";

interface LabCardProps {
  project: LabProject;
}

export function LabCard({ project }: LabCardProps) {
  const Icon = project.icon;
  const isExternal =
    project.url.startsWith("http://") || project.url.startsWith("https://");

  return (
    <div className="flex flex-col w-full h-full justify-between p-7 sm:p-8 rounded-3xl bg-linear-to-b from-[#0c1018] via-[#090c13] to-[#07090f] border border-stone-800 hover:border-emerald-500/40 shadow-2xl shadow-black/80 hover:shadow-[0_0_35px_-5px_rgba(16,185,129,0.15)] transition-all duration-300 group ring-1 ring-white/5">
      <div>
        {/* Top Tag & Labs Badge */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
            <FlaskConical className="w-3.5 h-3.5 text-emerald-400" />
            <span>{project.tag}</span>
          </span>

          <span className="text-[11px] uppercase tracking-wider font-semibold text-stone-500 font-mono">
            Labs Product
          </span>
        </div>

        {/* Title & Icon */}
        <div className="flex items-center gap-3.5 mb-2">
          {Icon && (
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center shrink-0 text-emerald-300 shadow-2xs">
              <Icon className="w-5 h-5" />
            </div>
          )}
          <div>
            <h3 className="text-xl sm:text-2xl font-normal font-serif text-stone-100 group-hover:text-emerald-200 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-stone-400 font-sans">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-stone-400 my-4 leading-relaxed font-sans">
          {project.description}
        </p>

        {/* Bullets */}
        <div className="mb-8">
          <ul className="space-y-2 text-sm text-stone-400 font-sans">
            {project.bullets.map((bullet, idx) => (
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
      </div>

      {/* Action Button */}
      <div className="pt-4 border-t border-stone-800/80">
        <Link
          href={project.url}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="inline-flex items-center justify-center gap-2 w-full text-xs sm:text-sm font-medium transition-all duration-150 rounded-full px-5 py-2.5 border border-emerald-500/35 bg-stone-900/30 text-emerald-200 hover:bg-emerald-500/15 hover:border-emerald-400/60 hover:text-emerald-100 active:bg-emerald-500/25 backdrop-blur-xs shadow-xs hover:shadow-[0_0_20px_-3px_rgba(16,185,129,0.2)] cursor-pointer"
        >
          <span>{project.buttonText}</span>
          {isExternal ? (
            <ExternalLink className="w-4 h-4 shrink-0" />
          ) : (
            <ArrowRight className="w-4 h-4 shrink-0" />
          )}
        </Link>
      </div>
    </div>
  );
}
