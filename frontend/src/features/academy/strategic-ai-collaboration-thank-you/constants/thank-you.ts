export interface ThankYouStep {
  title: string;
  text: string;
}

export interface ThankYouContent {
  eyebrow: string;
  title: string;
  lead: string;
  eventLabel: string;
  calendarLabel: string;
  calendarTitle: string;
  calendarDetails: string;
  stepsTitle: string;
  steps: ThankYouStep[];
  helpText: string;
  // WhatsApp or email link for buyers who need help. Leave empty to hide the help line.
  helpHref: string;
  helpLinkLabel: string;
  backLabel: string;
}

export const thankYouContent: ThankYouContent = {
  eyebrow: "Pembayaran berhasil",
  title: "Kursimu sudah aman. Sampai ketemu di Zoom!",
  lead: "Terima kasih sudah mendaftar Kerja Bareng AI, Siapa Takut? Ini langkah kecil yang perlu kamu lakukan sebelum hari-H.",
  eventLabel: "Jadwal workshop",
  calendarLabel: "Simpan ke Google Calendar",
  calendarTitle: "Workshop Kerja Bareng AI, Siapa Takut? (Envien Studio)",
  calendarDetails:
    "Workshop online 3 jam via Zoom. Link Zoom ada di email konfirmasi dari Mayar. Siapkan laptop dengan Zoom, satu tugas nyata dari pekerjaanmu, dan aplikasi AI chat yang biasa kamu pakai.",
  stepsTitle: "Yang perlu kamu lakukan sekarang",
  steps: [
    {
      title: "Cek email konfirmasi",
      text: "Link Zoom dan bukti pembayaran dikirim Mayar ke email yang kamu isi saat membayar. Kalau tidak ada di inbox, cek folder Spam atau Promosi.",
    },
    {
      title: "Simpan jadwalnya",
      text: "Masukkan workshop ke kalendermu supaya tidak bentrok dengan acara lain. Pakai tombol di atas.",
    },
    {
      title: "Tunggu undangan grup WhatsApp",
      text: "Paling lambat H-2, kamu dimasukkan ke grup peserta untuk pengingat dan lembar kerja. Pastikan nomor WhatsApp yang kamu isi aktif.",
    },
    {
      title: "Pilih satu tugas nyata",
      text: "Misalnya laporan, email penting, analisis, atau rencana kerja. Tugas inilah yang akan kita selesaikan bareng AI. Hindari data rahasia kantor.",
    },
  ],
  helpText: "Ada kendala dengan pembayaran atau email?",
  helpHref: "https://wa.me/6282130006695",
  helpLinkLabel: "Hubungi kami",
  backLabel: "Kembali ke halaman workshop",
};
