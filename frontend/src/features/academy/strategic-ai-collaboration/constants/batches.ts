export type BatchStatus = "open" | "closed";

export interface WorkshopBatch {
  id: string;
  code: string;
  date: string;
  shortDate: string;
  time: string;
  // UTC, Google Calendar format (YYYYMMDDTHHMMSSZ). Used for the "save to calendar" link on the thank-you page.
  calendarStart: string;
  calendarEnd: string;
  capacity: number;
  price: string;
  originalPrice?: string;
  priceNote?: string;
  // Mayar checkout link for this batch. Leave empty until the product is live: the CTA then shows as not yet open.
  paymentUrl: string;
  status: BatchStatus;
}

// Static data until batches come from PocketBase.
export const workshopBatches: WorkshopBatch[] = [
  {
    id: "batch-01",
    code: "Batch 01",
    date: "Sabtu, 28 November 2026",
    shortDate: "28 Nov",
    time: "09.00-12.00 WIB",
    calendarStart: "20261128T020000Z",
    calendarEnd: "20261128T050000Z",
    capacity: 40,
    price: "Rp 125.000",
    paymentUrl: "https://envienstudio.myr.id/pl/strategic-ai-collaboration-batch-01",
    status: "open",
  },
];

export const openBatches = workshopBatches.filter((batch) => batch.status === "open");

// Every "Daftar" CTA goes straight to the Mayar checkout of the nearest open batch; falls back to the enrollment section until a batch has a payment link.
export const PRIMARY_CHECKOUT_HREF =
  openBatches.find((batch) => batch.paymentUrl !== "")?.paymentUrl || "#daftar";
