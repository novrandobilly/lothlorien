import {
  CoupleProfile,
  EventDetail,
  StoryMilestone,
  GalleryPhoto,
  BankAccount,
  WishItem,
} from "../types";

export const WEDDING_CONFIG = {
  coupleNames: "Billy & Gita",
  groomNickname: "Billy",
  brideNickname: "Gita",
  weddingDateISO: "2026-12-05T10:00:00+07:00", // Saturday, December 5, 2026, 10:00 WIB
  weddingDateDisplay: "Saturday, 05 December 2026",
  weddingDateShort: "05.12.2026",
  receptionDateDisplay: "Saturday, 05 December 2026",
  calendarEvent: {
    title: "The Wedding of Billy & Gita",
    description:
      "Holy Matrimony & Wedding Reception of Novrando Billy and Gita. We joyfully look forward to celebrating with you!",
    location: "Cathedral of St. Mary & Grand Ballroom, Jakarta",
    startDate: "20261205T030000Z", // 10:00 WIB is 03:00 UTC
    endDate: "20261205T140000Z",   // 21:00 WIB is 14:00 UTC
  },
  music: {
    title: "Canon in D - Romantic Acoustic Violin & Piano",
    artist: "Wedding Symphony Orchestra",
    src: "https://actions.google.com/sounds/v1/ambiences/outdoor_ambience.ogg", // high-reliability streamable ambient / peaceful audio
  },
};

export const BIBLE_VERSE = {
  verse: "Colossians 3:14 & 1 Corinthians 13:4, 7",
  quoteEn:
    "And over all these virtues put on love, which binds them all together in perfect unity. Love is patient, love is kind. It always protects, always trusts, always hopes, always perseveres.",
  quoteId:
    "Dan di atas semuanya itu: kenakanlah kasih, sebagai pengikat yang mempersatukan dan menyempurnakan. Kasih itu sabar; kasih itu murah hati. Ia menutupi segala sesuatu, percaya segala sesuatu, mengharapkan segala sesuatu, sabar menanggung segala sesuatu.",
};

export const GANDALF_QUOTE = {
  text: "And so do all who live to see such times, but it is not for them to decide. All we have to decide is what to do with the time that is given to us. And that is an encouragement thought.",
  speaker: "Gandalf the Grey",
  source: "J.R.R. Tolkien — The Lord of the Rings: The Fellowship of the Ring",
};

export const GROOM_PROFILE: CoupleProfile = {
  role: "Groom",
  nickname: "Billy",
  fullName: "Novrando Billy, S.Kom.",
  sonDaughterText: "The beloved son of",
  fatherName: "Mr. Johannes Billy",
  motherName: "Mrs. Christina Billy",
  bio: "A visionary creator, software craftsman, and gentle spirit who found in Gita the melody his heart was always listening for.",
  instagram: "https://instagram.com",
  image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
};

export const BRIDE_PROFILE: CoupleProfile = {
  role: "Bride",
  nickname: "Gita",
  fullName: "Gita Anandita, B.A.",
  sonDaughterText: "The beloved daughter of",
  fatherName: "Mr. Hendra Anandita",
  motherName: "Mrs. Maria Anandita",
  bio: "A radiant artist, loving daughter, and warm beacon of grace whose heart discovered in Billy a home of boundless love and peace.",
  instagram: "https://instagram.com",
  image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
};

export const EVENTS_DATA: EventDetail[] = [
  {
    id: "holy-matrimony",
    title: "Holy Matrimony",
    subtitle: "Pemberkatan Pernikahan Kudus",
    dateText: "Saturday, 05 December 2026",
    timeText: "10:00 – 12:00 WIB",
    venueName: "Gereja Katedral Jakarta (The Sanctuary)",
    venueAddress: "Jl. Katedral No. 7-8, Pasar Baru, Sawah Besar, Jakarta Pusat, DKI Jakarta 10710",
    mapUrl: "https://maps.google.com/?q=Jakarta+Cathedral",
    note: "Due to sacred sanctuary protocols, guests are requested to be seated 15 minutes before the service commences.",
  },
  {
    id: "wedding-reception",
    title: "Wedding Reception",
    subtitle: "Resepsi Pernikahan",
    dateText: "Saturday, 05 December 2026",
    timeText: "18:30 – 21:30 WIB",
    venueName: "The Grand Glass Pavilion & Ballroom",
    venueAddress: "Jl. Senopati Raya No. 42, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12190",
    mapUrl: "https://maps.google.com/?q=Senopati+Jakarta",
    note: "Dress Code: Formal Elegance — Earthy Champagne, Sage Green, and Dusty Rose accents.",
  },
];

export const LOVE_STORY_MILESTONES: StoryMilestone[] = [
  {
    period: "November 2025",
    title: "The First Glance & Serendipity",
    description:
      "A chance conversation in a quiet coffee sanctuary during an autumn drizzle turned into hours of shared laughter, mutual curiosity, and an instant recognition of something rare and timeless.",
    highlight: "Where two separate journeys softly converged.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
  },
  {
    period: "May 2026",
    title: "Walking Hand in Hand",
    description:
      "Through shared dreams, late night conversations, and countless road trips, our love grew rooted in prayer, deep respect, and gentle patience. We realized that home was never a place, but being together.",
    highlight: "Rooted in kindness, understanding, and faith.",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80",
  },
  {
    period: "September 2026",
    title: "The Promise (She Said Yes)",
    description:
      "Overlooking the evening glow of the misty hills, with trembling hands and a heart full of devotion, Billy asked Gita to spend all her tomorrows with him. With tears of joy, she said Yes.",
    highlight: "A covenant inscribed with eternal promises.",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
  },
  {
    period: "December 2026",
    title: "Two Hearts United in Holy Matrimony",
    description:
      "Surrounded by our dearest parents, family, and lifelong companions, we stand before the Lord to pledge our unconditional love, beginning our sacred journey as husband and wife.",
    highlight: "What God has joined together, let no one separate.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
  },
  {
    period: "September 2027",
    title: "Building Our Forever",
    description:
      "Stepping forward with faith into our second year of marriage, nurturing our home, embarking on new adventures, and choosing each other every single dawn.",
    highlight: "The best chapters are yet unwritten.",
    image: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "gal-1",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
    alt: "Billy and Gita romantic portrait in sunlit garden",
    caption: "In your eyes, I found my quiet sanctuary.",
    aspect: "portrait",
  },
  {
    id: "gal-2",
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85",
    alt: "Elegantly styled pre-wedding bridal bouquet and gold rings",
    caption: "Symbols of an unbroken covenant.",
    aspect: "landscape",
  },
  {
    id: "gal-3",
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
    alt: "Holding hands walking along classical archway",
    caption: "Walking through every season, hand in hand.",
    aspect: "portrait",
  },
  {
    id: "gal-4",
    url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=85",
    alt: "Romantic stroll beneath canopy of green boughs",
    caption: "Every pathway is beautiful when walked with you.",
    aspect: "landscape",
  },
  {
    id: "gal-5",
    url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=85",
    alt: "Intimate close-up moment filled with warmth",
    caption: "You are the poetry my soul always wished to write.",
    aspect: "square",
  },
  {
    id: "gal-6",
    url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=85",
    alt: "Golden hour glow across classical botanical pavilion",
    caption: "Golden hour promises for a lifetime together.",
    aspect: "portrait",
  },
  {
    id: "gal-7",
    url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85",
    alt: "Bridal lace and groom's suit in harmonious elegance",
    caption: "Grace woven into every thread of our vows.",
    aspect: "landscape",
  },
  {
    id: "gal-8",
    url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=85",
    alt: "Sunset embrace overlooking peaceful waters",
    caption: "Under the watchful sky, forever begins.",
    aspect: "portrait",
  },
];

export const BANK_ACCOUNTS: BankAccount[] = [
  {
    bankName: "Bank BCA",
    accountNumber: "8730123456",
    accountHolder: "NOVRANDO BILLY",
    logoPlaceholder: "BCA",
  },
  {
    bankName: "Bank Mandiri",
    accountNumber: "1330098765432",
    accountHolder: "GITA ANANDITA",
    logoPlaceholder: "MANDIRI",
  },
];

export const PHYSICAL_GIFT_ADDRESS = {
  recipient: "Billy & Gita (Wedding Gift)",
  phone: "+62 812-3456-7890",
  address: "Cluster Lothlorien Residence No. 7, Jl. Pinus Elok, Kebayoran Baru, Jakarta Selatan 12190",
};

export const INITIAL_WISHES: WishItem[] = [
  {
    id: "wish-1",
    senderName: "Nathan & Amanda",
    relationship: "Sahabat Billy",
    message:
      "Happy wedding Billy & Gita! May your marriage be filled with endless joy, laughter, mutual patience, and God's abundant grace. Cannot wait to celebrate with you both!",
    attendance: "attending",
    timestamp: "2 hours ago",
    likes: 12,
  },
  {
    id: "wish-2",
    senderName: "Clarissa Dewi",
    relationship: "Sepupu Gita",
    message:
      "Selamat menempuh hidup baru Kak Gita & Kak Billy! Bahagia selalu sampai kakek nenek, rukun selalu dan senantiasa dalam lindungan kasih Tuhan Yesus.",
    attendance: "attending",
    timestamp: "5 hours ago",
    likes: 8,
  },
  {
    id: "wish-3",
    senderName: "Bpk. & Ibu Hermawan",
    relationship: "Keluarga Besar",
    message:
      "Turut berbahagia atas pernikahan Billy & Gita. Kiranya ikatan pernikahan kudus ini menjadi berkat bagi sesama dan keluarga. Amin.",
    attendance: "attending",
    timestamp: "1 day ago",
    likes: 15,
  },
  {
    id: "wish-4",
    senderName: "David Jonathan",
    relationship: "Colleague",
    message:
      "Huge congratulations brother Billy! Super thrilled for you and Gita. Wishing you a lifetime of love, health, adventure, and prosperity!",
    attendance: "attending",
    timestamp: "1 day ago",
    likes: 6,
  },
];
