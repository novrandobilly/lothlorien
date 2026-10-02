import React from "react";

export function KickserveFeatures() {
  return (
    <div className="mb-10 sm:mb-12 p-6 sm:p-8 rounded-2xl bg-[#f4f3ee]/80 border border-stone-200/80">
      <div className="flex items-center gap-2 mb-6">
        <span className="w-2 h-2 rounded-full bg-[#f26522]" />
        <h2 className="text-lg sm:text-xl font-bold font-sans text-stone-950 tracking-tight">
          What Can You Manage?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
        {/* 1. Up to 32 Players */}
        <div className="group/item p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-stone-200/80 hover:border-stone-300 hover:shadow-xs transition-all duration-200">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f26522] shrink-0" />
            <h3 className="text-sm sm:text-base font-bold font-sans text-stone-950 tracking-tight">
              Up to 32 Players
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 font-sans leading-relaxed">
            Easily register players and handle substitutions mid-session.
          </p>
        </div>

        {/* 2. Americano Rotations */}
        <div className="group/item p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-stone-200/80 hover:border-stone-300 hover:shadow-xs transition-all duration-200">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f26522] shrink-0" />
            <h3 className="text-sm sm:text-base font-bold font-sans text-stone-950 tracking-tight">
              Americano Rotations
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 font-sans leading-relaxed">
            Generate balanced rounds with automated pairings.
          </p>
        </div>

        {/* 3. Smart No-Repeat Scheduling */}
        <div className="group/item p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-stone-200/80 hover:border-stone-300 hover:shadow-xs transition-all duration-200">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f26522] shrink-0" />
            <h3 className="text-sm sm:text-base font-bold font-sans text-stone-950 tracking-tight">
              Smart No-Repeat Scheduling
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 font-sans leading-relaxed">
            Deterministic pairing algorithm to make equal playtime among the players.
          </p>
        </div>

        {/* 4. Live Standings & Differentials */}
        <div className="group/item p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-stone-200/80 hover:border-stone-300 hover:shadow-xs transition-all duration-200">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f26522] shrink-0" />
            <h3 className="text-sm sm:text-base font-bold font-sans text-stone-950 tracking-tight">
              Live Standings & Differentials
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 font-sans leading-relaxed">
            Calculate total points, win/loss stats, and podium rankings in real time, automatically.
          </p>
        </div>

        {/* 5. One-Tap Share */}
        <div className="group/item p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-stone-200/80 hover:border-stone-300 hover:shadow-xs transition-all duration-200 sm:col-span-2">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f26522] shrink-0" />
            <h3 className="text-sm sm:text-base font-bold font-sans text-stone-950 tracking-tight">
              One-Tap Share
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 font-sans leading-relaxed">
            Share with the world of how fun your session was!
          </p>
        </div>
      </div>
    </div>
  );
}

export default KickserveFeatures;
