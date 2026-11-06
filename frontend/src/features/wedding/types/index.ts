export interface CoupleProfile {
  role: "Groom" | "Bride";
  nickname: string;
  fullName: string;
  sonDaughterText: string;
  fatherName: string;
  motherName: string;
  bio: string;
  instagram?: string;
  image: string;
}

export interface EventDetail {
  id: string;
  title: string;
  subtitle: string;
  dateText: string;
  timeText: string;
  venueName: string;
  venueAddress: string;
  mapUrl: string;
  note?: string;
}

export interface StoryMilestone {
  period: string; // e.g. "November 2025"
  title: string;
  description: string;
  highlight?: string;
  image?: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  aspect?: "portrait" | "landscape" | "square";
}

export interface BankAccount {
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  logoPlaceholder?: string;
  qrCodeUrl?: string;
}

export interface WishItem {
  id: string;
  senderName: string;
  relationship: string;
  message: string;
  attendance: "attending" | "declined" | "uncertain";
  timestamp: string;
  likes: number;
}

export interface RsvpSubmission {
  guestName: string;
  phone?: string;
  attendance: "attending" | "declined";
  guestCount: number;
  message?: string;
}
