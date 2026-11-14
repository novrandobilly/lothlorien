export interface EnrollmentContent {
  title: string;
  lead: string;
  bring: { label: string; items: string[] };
  cardEyebrow: string;
  ctaPrefix: string;
  notOpenLabel: string;
  footnote: string;
}

export const enrollmentContent: EnrollmentContent = {
  title: "Amankan kursimu",
  lead: "Satu batch, maksimal 25 orang, supaya latihannya tetap personal dan semua tugas sempat dibahas.",
  bring: {
    label: "Yang perlu kamu siapkan",
    items: [
      "Laptop atau komputer dengan Zoom terpasang",
      "Satu tugas nyata dari pekerjaanmu",
      "Aplikasi AI chat yang biasa kamu pakai",
    ],
  },
  cardEyebrow: "Batch yang sedang dibuka",
  ctaPrefix: "Daftar & bayar",
  notOpenLabel: "Pendaftaran segera dibuka",
  footnote:
    "Kamu akan diarahkan ke halaman pembayaran Mayar. Setelah pembayaran berhasil, link Zoom dikirim otomatis ke email kamu.",
};
