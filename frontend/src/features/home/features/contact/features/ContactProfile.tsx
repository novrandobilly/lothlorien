import React from "react";
import Image from "next/image";
import { User } from "lucide-react";

interface ContactProfileProps {
  avatarSrc?: string;
  name?: string;
  role?: string;
  className?: string;
}

export function ContactProfile({
  avatarSrc = "/envien-contact.webp",
  name = "Novrando Billy",
  role = "Envien Studio",
  className = "",
}: ContactProfileProps) {
  return (
    <div
      className={`flex flex-col items-center md:items-start shrink-0 ${className}`}
    >
      {/* Avatar Container with Active Status Indicator */}
      <div className="relative group/avatar cursor-pointer">
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border border-stone-200/80 bg-white shadow-2xs relative transition-all duration-300 group-hover:shadow-xs group-hover:border-stone-300">
          {avatarSrc ? (
            <Image
              src={avatarSrc}
              alt={name}
              fill
              sizes="(max-width: 640px) 112px, 128px"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-stone-100 text-stone-400">
              <User className="w-12 h-12 stroke-[1.2]" />
            </div>
          )}
        </div>

        {/* Pulsing Active Indicator Dot */}
        <span
          className="absolute -bottom-1 -right-1 flex h-4 w-4"
          title="Active & responding"
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white shadow-xs" />
        </span>
      </div>

      {/* Name and Studio Tag */}
      <div className="mt-3.5 text-center md:text-left flex flex-col items-center md:items-center">
        <div className="text-base sm:text-lg font-bold font-sans text-stone-950 leading-snug">
          {name}
        </div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mt-1.5 rounded-full bg-white border border-stone-200/80 text-xs font-semibold uppercase tracking-wider text-stone-400 font-sans">
          <span>{role}</span>
        </div>
      </div>
    </div>
  );
}
