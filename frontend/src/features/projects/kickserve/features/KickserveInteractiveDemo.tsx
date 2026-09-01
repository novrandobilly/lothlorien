"use client";

import React, { useState } from "react";
import {
  Trophy,
  RotateCcw,
  Sparkles,
  Share2,
  Check,
  Flame,
  Shuffle,
  Users,
} from "lucide-react";
import { LothlorienButton } from "@/components/ui/LothlorienButton";

interface Match {
  id: string;
  round: number;
  court: number;
  teamA: string[];
  teamB: string[];
  scoreA: number;
  scoreB: number;
}

const DEFAULT_PLAYERS_8 = [
  "Billy N.",
  "Sarah K.",
  "Michael T.",
  "Emma R.",
  "David L.",
  "Jessica W.",
  "Carlos M.",
  "Aria P.",
];

const DEFAULT_PLAYERS_4 = [
  "Billy N.",
  "Sarah K.",
  "Michael T.",
  "Emma R.",
];

export function KickserveInteractiveDemo() {
  const [sport, setSport] = useState<"Padel" | "Tennis" | "Badminton">("Padel");
  const [playerCount, setPlayerCount] = useState<4 | 8>(8);
  const [players, setPlayers] = useState<string[]>(DEFAULT_PLAYERS_8);
  const [matches, setMatches] = useState<Match[]>(() =>
    generateSchedule(DEFAULT_PLAYERS_8, 8)
  );
  const [copied, setCopied] = useState(false);

  function handlePlayerCountChange(count: 4 | 8) {
    setPlayerCount(count);
    const newPlayers = count === 4 ? DEFAULT_PLAYERS_4 : DEFAULT_PLAYERS_8;
    setPlayers(newPlayers);
    setMatches(generateSchedule(newPlayers, count));
  }

  function handleScoreChange(matchId: string, team: "A" | "B", delta: number) {
    setMatches((prev) =>
      prev.map((m) => {
        if (m.id !== matchId) return m;
        if (team === "A") {
          const next = Math.max(0, Math.min(32, m.scoreA + delta));
          return { ...m, scoreA: next };
        } else {
          const next = Math.max(0, Math.min(32, m.scoreB + delta));
          return { ...m, scoreB: next };
        }
      })
    );
  }

  function handleRegenerate() {
    setMatches(generateSchedule(players, playerCount));
  }

  // Calculate Standings
  const standings = players.map((player) => {
    let played = 0;
    let pointsWon = 0;
    let pointsLost = 0;

    matches.forEach((m) => {
      const inTeamA = m.teamA.includes(player);
      const inTeamB = m.teamB.includes(player);

      if (inTeamA || inTeamB) {
        if (m.scoreA > 0 || m.scoreB > 0) {
          played++;
          if (inTeamA) {
            pointsWon += m.scoreA;
            pointsLost += m.scoreB;
          } else {
            pointsWon += m.scoreB;
            pointsLost += m.scoreA;
          }
        }
      }
    });

    return {
      name: player,
      played,
      pointsWon,
      pointsLost,
      differential: pointsWon - pointsLost,
    };
  });

  // Sort standings: higher points won first, then differential
  standings.sort((a, b) => {
    if (b.pointsWon !== a.pointsWon) return b.pointsWon - a.pointsWon;
    return b.differential - a.differential;
  });

  function handleCopyWhatsApp() {
    const lines = [
      `🎾 *Kickserve ${sport} Americano Standings* 🏆`,
      `━━━━━━━━━━━━━━━━━━━━`,
      ...standings.map((s, idx) => {
        const medal = idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : `${idx + 1}.`;
        return `${medal} *${s.name}* — ${s.pointsWon} pts (${s.differential >= 0 ? "+" : ""}${s.differential} diff)`;
      }),
      `━━━━━━━━━━━━━━━━━━━━`,
      `Managed via Envien Studio Kickserve App`,
    ];
    navigator.clipboard.writeText(lines.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <section id="interactive-demo" className="py-20 bg-[#090b10] relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Live Court Simulator
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-100 mb-3">
            Experience Kickserve in Action
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-sans">
            Test the Americano rotation matrix, adjust court scores in real time, and watch the leaderboard calculate instant standings.
          </p>
        </div>

        {/* Simulator Control Bar */}
        <div className="p-6 rounded-3xl bg-[#0e121b] border border-stone-800 shadow-xl mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Sport Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                Sport:
              </span>
              {(["Padel", "Tennis", "Badminton"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSport(s)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    sport === s
                      ? "bg-amber-500/20 text-amber-200 border border-amber-500/50 shadow-xs"
                      : "bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Player Count Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                Format:
              </span>
              <button
                onClick={() => handlePlayerCountChange(8)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                  playerCount === 8
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                    : "bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800"
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                8 Players (2 Courts)
              </button>
              <button
                onClick={() => handlePlayerCountChange(4)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                  playerCount === 4
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                    : "bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800"
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                4 Players (1 Court)
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleRegenerate}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-stone-800 text-stone-300 hover:text-amber-200 hover:bg-stone-700 transition-all border border-stone-700"
              >
                <Shuffle className="w-3.5 h-3.5" />
                Reshuffle
              </button>
              <button
                onClick={handleCopyWhatsApp}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-700 hover:bg-emerald-600 text-white transition-all shadow-xs"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-200" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    Share WhatsApp
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Dual Layout: Left Matches / Right Standings */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Matches Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-serif text-stone-200 flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400" />
                Active Rounds & Court Scoring
              </h3>
              <span className="text-xs text-stone-400 font-mono">
                Tap + / - to score
              </span>
            </div>

            {matches.map((m) => (
              <div
                key={m.id}
                className="p-5 rounded-2xl bg-linear-to-b from-[#0e121a] via-[#090c14] to-[#070910] border border-stone-800/90 hover:border-amber-500/30 transition-all shadow-md"
              >
                <div className="flex items-center justify-between text-xs text-stone-400 mb-3 border-b border-stone-800/80 pb-2">
                  <span className="font-semibold text-amber-200 uppercase tracking-wider">
                    Round {m.round} • Court {m.court}
                  </span>
                  <span className="text-stone-400">Americano 21 pts</span>
                </div>

                <div className="grid grid-cols-5 items-center gap-3">
                  {/* Team A */}
                  <div className="col-span-2 text-right">
                    <div className="text-sm font-medium text-stone-100 truncate">
                      {m.teamA[0]}
                    </div>
                    <div className="text-xs text-stone-400 truncate">
                      & {m.teamA[1]}
                    </div>
                  </div>

                  {/* Score Controls */}
                  <div className="col-span-1 flex flex-col items-center justify-center">
                    <div className="flex items-center gap-2 font-mono text-base sm:text-lg font-bold text-amber-200 bg-stone-900/90 px-3 py-1 rounded-xl border border-stone-700">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleScoreChange(m.id, "A", -1)}
                          className="w-5 h-5 flex items-center justify-center rounded text-stone-400 hover:text-white hover:bg-stone-800 text-xs"
                        >
                          -
                        </button>
                        <span>{m.scoreA}</span>
                        <button
                          onClick={() => handleScoreChange(m.id, "A", 1)}
                          className="w-5 h-5 flex items-center justify-center rounded text-stone-400 hover:text-white hover:bg-stone-800 text-xs"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-stone-600">:</span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleScoreChange(m.id, "B", -1)}
                          className="w-5 h-5 flex items-center justify-center rounded text-stone-400 hover:text-white hover:bg-stone-800 text-xs"
                        >
                          -
                        </button>
                        <span>{m.scoreB}</span>
                        <button
                          onClick={() => handleScoreChange(m.id, "B", 1)}
                          className="w-5 h-5 flex items-center justify-center rounded text-stone-400 hover:text-white hover:bg-stone-800 text-xs"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Team B */}
                  <div className="col-span-2 text-left">
                    <div className="text-sm font-medium text-stone-100 truncate">
                      {m.teamB[0]}
                    </div>
                    <div className="text-xs text-stone-400 truncate">
                      & {m.teamB[1]}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Standings Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-3xl bg-linear-to-b from-[#101420] via-[#0b0e17] to-[#070910] border border-amber-500/30 shadow-2xl shadow-black/80 sticky top-24">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-800">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-amber-400" />
                  <h3 className="text-lg font-serif font-medium text-stone-100">
                    Live Leaderboard
                  </h3>
                </div>
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/60">
                  Auto-Sorted
                </span>
              </div>

              <div className="space-y-2">
                {standings.map((player, idx) => {
                  const isPodium = idx < 3;
                  const medal =
                    idx === 0
                      ? "🥇"
                      : idx === 1
                      ? "🥈"
                      : idx === 2
                      ? "🥉"
                      : `#${idx + 1}`;

                  return (
                    <div
                      key={player.name}
                      className={`flex items-center justify-between p-2.5 sm:p-3 rounded-xl transition-all ${
                        idx === 0
                          ? "bg-amber-500/15 border border-amber-400/40 text-amber-100 shadow-sm"
                          : isPodium
                          ? "bg-stone-800/40 border border-stone-700/60 text-stone-200"
                          : "bg-stone-900/40 border border-stone-800/40 text-stone-400"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs w-6 text-center">
                          {medal}
                        </span>
                        <div>
                          <div className="text-xs sm:text-sm font-medium text-stone-100">
                            {player.name}
                          </div>
                          <div className="text-[10px] text-stone-400">
                            {player.played} match{player.played === 1 ? "" : "es"}
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-sm font-mono font-bold text-amber-200">
                          {player.pointsWon}{" "}
                          <span className="text-[10px] font-sans font-normal text-stone-400">
                            pts
                          </span>
                        </div>
                        <div
                          className={`text-[10px] font-mono ${
                            player.differential > 0
                              ? "text-emerald-400"
                              : player.differential < 0
                              ? "text-red-400"
                              : "text-stone-500"
                          }`}
                        >
                          {player.differential > 0 ? "+" : ""}
                          {player.differential} diff
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom share action */}
              <div className="mt-6 pt-4 border-t border-stone-800/80">
                <button
                  onClick={handleCopyWhatsApp}
                  className="w-full py-2.5 px-4 rounded-xl bg-linear-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-stone-950" />
                      Summary Copied to Clipboard!
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4 text-stone-950" />
                      Copy WhatsApp Results
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helpers for tournament round generation
function generateSchedule(playerList: string[], count: number): Match[] {
  if (count === 4) {
    return [
      {
        id: "m-4-1",
        round: 1,
        court: 1,
        teamA: [playerList[0], playerList[1]],
        teamB: [playerList[2], playerList[3]],
        scoreA: 21,
        scoreB: 15,
      },
      {
        id: "m-4-2",
        round: 2,
        court: 1,
        teamA: [playerList[0], playerList[2]],
        teamB: [playerList[1], playerList[3]],
        scoreA: 18,
        scoreB: 21,
      },
      {
        id: "m-4-3",
        round: 3,
        court: 1,
        teamA: [playerList[0], playerList[3]],
        teamB: [playerList[1], playerList[2]],
        scoreA: 21,
        scoreB: 19,
      },
    ];
  }

  // 8 players: 2 courts, 3 sample active rounds
  return [
    {
      id: "m-8-1",
      round: 1,
      court: 1,
      teamA: [playerList[0], playerList[1]],
      teamB: [playerList[2], playerList[3]],
      scoreA: 21,
      scoreB: 14,
    },
    {
      id: "m-8-2",
      round: 1,
      court: 2,
      teamA: [playerList[4], playerList[5]],
      teamB: [playerList[6], playerList[7]],
      scoreA: 17,
      scoreB: 21,
    },
    {
      id: "m-8-3",
      round: 2,
      court: 1,
      teamA: [playerList[0], playerList[4]],
      teamB: [playerList[2], playerList[6]],
      scoreA: 21,
      scoreB: 19,
    },
    {
      id: "m-8-4",
      round: 2,
      court: 2,
      teamA: [playerList[1], playerList[5]],
      teamB: [playerList[3], playerList[7]],
      scoreA: 16,
      scoreB: 21,
    },
  ];
}
