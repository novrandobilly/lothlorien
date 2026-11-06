"use client";

import React, { useState } from "react";
import { INITIAL_WISHES } from "../constants/weddingData";
import { WishItem } from "../types";
import { BotanicalDivider } from "./ornaments/BotanicalDivider";

export function BestWishesSection() {
  const [wishes, setWishes] = useState<WishItem[]>(INITIAL_WISHES);
  const [formData, setFormData] = useState({
    senderName: "",
    relationship: "Teman Billy & Gita",
    message: "",
    attendance: "attending" as "attending" | "declined" | "uncertain",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.senderName.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);

    const newWish: WishItem = {
      id: `wish-${Date.now()}`,
      senderName: formData.senderName.trim(),
      relationship: formData.relationship,
      message: formData.message.trim(),
      attendance: formData.attendance,
      timestamp: "Baru saja",
      likes: 1,
    };

    setTimeout(() => {
      setWishes([newWish, ...wishes]);
      setFormData({
        senderName: "",
        relationship: "Teman Billy & Gita",
        message: "",
        attendance: "attending",
      });
      setIsSubmitting(false);
      setHasSubmitted(true);
      setTimeout(() => setHasSubmitted(false), 3000);
    }, 400);
  };

  const handleLike = (id: string) => {
    setWishes((prev) =>
      prev.map((item) => (item.id === id ? { ...item, likes: item.likes + 1 } : item))
    );
  };

  return (
    <section id="wedding-wishes" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p
            className="text-xs sm:text-sm font-serif tracking-[0.3em] uppercase text-[#8C6D36] font-semibold mb-2"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Prayers &amp; Wishes
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[#7C5E28] font-normal"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Untaian Doa &amp; Ucapan Restu
          </h2>
          <BotanicalDivider className="my-4" />
          <p className="text-xs sm:text-sm font-serif text-[#7A6E68] max-w-lg mx-auto italic">
            Tinggalkan pesan, doa tulus, dan harapan terbaik untuk menemani awal babak baru kehidupan kami.
          </p>
        </div>

        {/* Wish Submission Form */}
        <div className="relative border border-[#C5A059]/40 rounded-3xl p-6 sm:p-8 bg-[#FFFDF9]/95 shadow-[0_15px_40px_rgba(197,160,89,0.08)] mb-12">
          <div className="absolute inset-2 sm:inset-3 border border-[#E6CA85]/40 rounded-2xl pointer-events-none" />

          <h3
            className="text-lg sm:text-xl font-serif font-bold text-[#2C2523] mb-4 text-center"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Kirimkan Doa &amp; Ucapan
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-serif uppercase tracking-wider text-[#7C5E28] font-semibold mb-1">
                  Nama Anda *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nama lengkap atau panggilan"
                  value={formData.senderName}
                  onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#C5A059]/40 bg-[#FAF6EE]/50 focus:bg-[#FFFDF9] focus:outline-none focus:border-[#C5A059] text-xs sm:text-sm font-serif text-[#2C2523]"
                />
              </div>

              <div>
                <label className="block text-xs font-serif uppercase tracking-wider text-[#7C5E28] font-semibold mb-1">
                  Hubungan / Kerabat
                </label>
                <select
                  value={formData.relationship}
                  onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#C5A059]/40 bg-[#FAF6EE]/50 focus:bg-[#FFFDF9] focus:outline-none focus:border-[#C5A059] text-xs sm:text-sm font-serif text-[#2C2523] cursor-pointer"
                >
                  <option value="Teman Billy & Gita">Teman Billy &amp; Gita</option>
                  <option value="Sahabat Billy">Sahabat Billy</option>
                  <option value="Sahabat Gita">Sahabat Gita</option>
                  <option value="Keluarga Besar">Keluarga Besar</option>
                  <option value="Rekan Kerja">Rekan Kerja</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-serif uppercase tracking-wider text-[#7C5E28] font-semibold mb-1">
                Pesan &amp; Untaian Doa *
              </label>
              <textarea
                rows={3}
                required
                placeholder="Tuliskan ucapan selamat dan doa restu Anda di sini..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#C5A059]/40 bg-[#FAF6EE]/50 focus:bg-[#FFFDF9] focus:outline-none focus:border-[#C5A059] text-xs sm:text-sm font-serif text-[#2C2523]"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] text-[#7A6E68] font-serif italic">
                {hasSubmitted ? "✓ Ucapan Anda berhasil terkirim!" : "* Pesan akan langsung tampil di bawah"}
              </span>

              <button
                type="submit"
                disabled={isSubmitting}
                className="py-2.5 px-6 rounded-full bg-gradient-to-r from-[#C5A059] to-[#A07830] text-[#FFFDF9] font-serif uppercase tracking-widest text-xs font-semibold hover:shadow-md transition-all cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? "Mengirim..." : "Kirim Ucapan"}
              </button>
            </div>
          </form>
        </div>

        {/* Live Wishes Feed Stream */}
        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1">
          {wishes.map((item) => (
            <div
              key={item.id}
              className="relative p-5 rounded-2xl bg-[#FFFDF9] border border-[#C5A059]/30 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-[#C5A059]/15 flex items-center justify-center text-[#7C5E28] text-xs font-serif font-bold">
                    {item.senderName.charAt(0).toUpperCase()}
                  </span>
                  <div>
                    <h4 className="text-sm font-serif font-bold text-[#2C2523]">
                      {item.senderName}
                    </h4>
                    <p className="text-[10px] text-[#8C6D36] font-serif italic">
                      {item.relationship} · {item.timestamp}
                    </p>
                  </div>
                </div>

                {/* Heart / Like button */}
                <button
                  onClick={() => handleLike(item.id)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FAF6EE] hover:bg-[#F4EFEB] border border-[#C5A059]/30 text-xs font-serif text-[#C08081] transition-all cursor-pointer"
                  title="Beri like"
                >
                  <span>♥</span>
                  <span className="text-[11px] font-semibold text-[#8C6D36]">{item.likes}</span>
                </button>
              </div>

              <p className="text-xs sm:text-sm font-serif text-[#5E524D] leading-relaxed pl-10">
                &ldquo;{item.message}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
