"use client";

import React, { useState } from "react";
import { BANK_ACCOUNTS, PHYSICAL_GIFT_ADDRESS } from "../constants/weddingData";
import { BotanicalDivider } from "./ornaments/BotanicalDivider";

export function WeddingGiftSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setToastMessage(`${label} berhasil disalin ke clipboard!`);

    setTimeout(() => {
      setCopiedId(null);
    }, 2500);

    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <section id="wedding-gift" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-[#2C2523] text-[#FFFDF9] px-5 py-3 rounded-full shadow-2xl border border-[#C5A059] flex items-center gap-2 animate-bounce">
          <span className="text-[#D4AF37]">✓</span>
          <span className="text-xs sm:text-sm font-serif">{toastMessage}</span>
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p
            className="text-xs sm:text-sm font-serif tracking-[0.3em] uppercase text-[#8C6D36] font-semibold mb-2"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Wedding Gift &amp; Blessings
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[#7C5E28] font-normal"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Tanda Kasih &amp; Doa Restu
          </h2>
          <BotanicalDivider className="my-4" />
          <p className="text-xs sm:text-sm font-serif text-[#7A6E68] max-w-lg mx-auto italic leading-relaxed">
            Doa restu Anda merupakan karunia terindah bagi kami. Namun jika memberi adalah ungkapan kasih Anda, kami menyediakan tanda kasih digital berikut:
          </p>
        </div>

        {/* Bank Account Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
          {BANK_ACCOUNTS.map((account) => {
            const isCopied = copiedId === account.bankName;

            return (
              <div
                key={account.bankName}
                className="relative border border-[#C5A059]/40 rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#FFFDF9] to-[#FAF6EE] shadow-[0_15px_40px_rgba(197,160,89,0.08)] text-center flex flex-col justify-between"
              >
                {/* Inner Border */}
                <div className="absolute inset-2 sm:inset-3 border border-[#E6CA85]/40 rounded-2xl pointer-events-none" />

                <div>
                  {/* Bank Header Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#8C6D36] text-[11px] font-serif uppercase tracking-widest font-semibold mb-4">
                    <span>💳</span> {account.bankName}
                  </div>

                  <p className="text-xs font-serif uppercase tracking-wider text-[#7A6E68]">
                    Nomor Rekening
                  </p>
                  <p className="text-2xl sm:text-3xl font-serif font-bold text-[#2C2523] my-2 tracking-wider">
                    {account.accountNumber}
                  </p>
                  <p className="text-xs sm:text-sm font-serif text-[#8C6D36] font-semibold tracking-wide">
                    a.n. {account.accountHolder}
                  </p>
                </div>

                {/* Copy Button */}
                <div className="mt-6 pt-4 border-t border-[#C5A059]/20">
                  <button
                    onClick={() =>
                      copyToClipboard(
                        account.accountNumber,
                        account.bankName,
                        `No. Rekening ${account.bankName}`
                      )
                    }
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl border border-[#C5A059] bg-[#FFFDF9] hover:bg-[#FAF6EE] text-[#7C5E28] text-xs font-serif uppercase tracking-widest font-semibold transition-all shadow-xs cursor-pointer"
                  >
                    {isCopied ? (
                      <>
                        <span className="text-emerald-600">✓</span>
                        <span className="text-emerald-700">Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4 text-[#C5A059]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        <span>Salin No. Rekening</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Physical Gift Mailing Address Card */}
        <div className="relative border border-[#C5A059]/40 rounded-3xl p-6 sm:p-8 bg-[#FFFDF9]/95 shadow-[0_10px_30px_rgba(197,160,89,0.06)] text-center max-w-xl mx-auto">
          <div className="absolute inset-2 sm:inset-3 border border-[#E6CA85]/40 rounded-2xl pointer-events-none" />

          <span className="text-2xl text-[#C5A059] mb-2 block">🎁</span>
          <h3
            className="text-xl sm:text-2xl font-serif font-bold text-[#2C2523] mb-1"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Kirim Kado Fisik
          </h3>
          <p className="text-xs sm:text-sm text-[#7A6E68] font-serif mb-4">
            Bagi yang ingin mengirimkan kado fisik ke kediaman mempelai:
          </p>

          <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#C5A059]/20 text-xs sm:text-sm font-serif text-[#5E524D] leading-relaxed mb-4 text-left">
            <p className="font-bold text-[#2C2523]">{PHYSICAL_GIFT_ADDRESS.recipient}</p>
            <p className="text-[#8C6D36] text-xs mt-0.5">{PHYSICAL_GIFT_ADDRESS.phone}</p>
            <p className="mt-2 text-[#7A6E68]">{PHYSICAL_GIFT_ADDRESS.address}</p>
          </div>

          <button
            onClick={() =>
              copyToClipboard(
                `${PHYSICAL_GIFT_ADDRESS.recipient}\n${PHYSICAL_GIFT_ADDRESS.phone}\n${PHYSICAL_GIFT_ADDRESS.address}`,
                "address",
                "Alamat Pengiriman"
              )
            }
            className="inline-flex items-center justify-center gap-2 py-2 px-6 rounded-full border border-[#C5A059] bg-[#FFFDF9] hover:bg-[#FAF6EE] text-[#7C5E28] text-xs font-serif uppercase tracking-widest font-semibold transition-all shadow-xs cursor-pointer"
          >
            {copiedId === "address" ? (
              <>
                <span className="text-emerald-600">✓</span>
                <span className="text-emerald-700">Alamat Tersalin!</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5 text-[#C5A059]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <span>Salin Alamat</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
