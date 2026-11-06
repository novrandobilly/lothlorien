"use client";

import React, { useState } from "react";
import { BotanicalDivider } from "./ornaments/BotanicalDivider";

export function RsvpSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    attendance: "attending",
    guestCount: 1,
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      attendance: "attending",
      guestCount: 1,
      notes: "",
    });
  };

  return (
    <section id="wedding-rsvp" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-2xl mx-auto">
        <div className="relative border border-[#C5A059]/40 rounded-3xl p-6 sm:p-10 md:p-12 bg-[#FFFDF9]/95 shadow-[0_20px_50px_rgba(197,160,89,0.1)] text-center">
          {/* Inner Border */}
          <div className="absolute inset-2 sm:inset-3 border border-[#E6CA85]/40 rounded-2xl pointer-events-none" />

          {/* Section Header */}
          <p
            className="text-xs sm:text-sm font-serif tracking-[0.3em] uppercase text-[#8C6D36] font-semibold mb-2"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Reservation
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[#7C5E28] font-normal"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Konfirmasi Kehadiran (RSVP)
          </h2>
          <BotanicalDivider className="my-4" />
          <p className="text-xs sm:text-sm font-serif text-[#7A6E68] max-w-md mx-auto italic mb-8">
            Mohon konfirmasikan kehadiran Anda sebelum tanggal 20 November 2026 demi kenyamanan bersama.
          </p>

          {isSubmitted ? (
            /* Success State */
            <div className="py-8 px-4 rounded-2xl bg-[#FAF6EE] border border-[#C5A059]/30 text-center animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl mx-auto mb-4 border border-emerald-300">
                ✓
              </div>
              <h3
                className="text-xl sm:text-2xl font-serif font-bold text-[#2C2523] mb-2"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                Terima Kasih, {formData.name}!
              </h3>
              <p className="text-xs sm:text-sm font-serif text-[#5E524D] max-w-sm mx-auto mb-2 leading-relaxed">
                {formData.attendance === "attending"
                  ? `Konfirmasi kehadiran Anda (${formData.guestCount} orang) telah berhasil tercatat. Kami sangat menantikan kehadiran Anda!`
                  : "Terima kasih atas konfirmasinya. Doa dan perhatian Anda sangat berarti bagi kami berdua."}
              </p>
              <button
                onClick={handleReset}
                className="mt-4 text-xs font-serif text-[#8C6D36] underline hover:text-[#7C5E28] cursor-pointer"
              >
                Ubah atau kirim konfirmasi lain
              </button>
            </div>
          ) : (
            /* Form Input */
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-serif uppercase tracking-wider text-[#7C5E28] font-semibold mb-1.5">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Budi Santoso"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#C5A059]/40 bg-[#FAF6EE]/50 focus:bg-[#FFFDF9] focus:outline-none focus:border-[#C5A059] text-sm font-serif text-[#2C2523] transition-colors"
                />
              </div>

              {/* Phone / WA */}
              <div>
                <label className="block text-xs font-serif uppercase tracking-wider text-[#7C5E28] font-semibold mb-1.5">
                  Nomor WhatsApp / Telepon
                </label>
                <input
                  type="tel"
                  placeholder="0812-xxxx-xxxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#C5A059]/40 bg-[#FAF6EE]/50 focus:bg-[#FFFDF9] focus:outline-none focus:border-[#C5A059] text-sm font-serif text-[#2C2523] transition-colors"
                />
              </div>

              {/* Attendance Radio Options */}
              <div>
                <label className="block text-xs font-serif uppercase tracking-wider text-[#7C5E28] font-semibold mb-2">
                  Konfirmasi Kehadiran *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                      formData.attendance === "attending"
                        ? "border-[#C5A059] bg-[#FAF6EE] shadow-xs"
                        : "border-[#C5A059]/25 bg-[#FFFDF9]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="attending"
                      checked={formData.attendance === "attending"}
                      onChange={() => setFormData({ ...formData, attendance: "attending" })}
                      className="accent-[#C5A059]"
                    />
                    <div className="text-xs font-serif">
                      <p className="font-bold text-[#2C2523]">Ya, Saya akan Hadir</p>
                      <p className="text-[#7A6E68]">Joyfully attend</p>
                    </div>
                  </label>

                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                      formData.attendance === "declined"
                        ? "border-[#C5A059] bg-[#FAF6EE] shadow-xs"
                        : "border-[#C5A059]/25 bg-[#FFFDF9]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="declined"
                      checked={formData.attendance === "declined"}
                      onChange={() => setFormData({ ...formData, attendance: "declined" })}
                      className="accent-[#C5A059]"
                    />
                    <div className="text-xs font-serif">
                      <p className="font-bold text-[#2C2523]">Maaf, Berhalangan</p>
                      <p className="text-[#7A6E68]">Regretfully decline</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Guest Count (if attending) */}
              {formData.attendance === "attending" && (
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#7C5E28] font-semibold mb-1.5">
                    Jumlah Tamu Hadir
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) =>
                      setFormData({ ...formData, guestCount: parseInt(e.target.value, 10) })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-[#C5A059]/40 bg-[#FAF6EE]/50 focus:bg-[#FFFDF9] focus:outline-none focus:border-[#C5A059] text-sm font-serif text-[#2C2523] transition-colors cursor-pointer"
                  >
                    <option value={1}>1 Orang</option>
                    <option value={2}>2 Orang</option>
                    <option value={3}>3 Orang</option>
                    <option value={4}>4 Orang</option>
                  </select>
                </div>
              )}

              {/* Notes */}
              <div>
                <label className="block text-xs font-serif uppercase tracking-wider text-[#7C5E28] font-semibold mb-1.5">
                  Catatan / Pantangan Makanan (Opsional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Contoh: Vegetarian, alergi seafood, dll."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#C5A059]/40 bg-[#FAF6EE]/50 focus:bg-[#FFFDF9] focus:outline-none focus:border-[#C5A059] text-sm font-serif text-[#2C2523] transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#A07830] text-[#FFFDF9] font-serif uppercase tracking-widest text-xs font-semibold shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? "Mengirim Konfirmasi..." : "Kirim Konfirmasi Kehadiran"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
