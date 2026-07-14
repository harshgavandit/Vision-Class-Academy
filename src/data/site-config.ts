export const siteConfig = {
  name: "Vision Science Academy",
  shortName: "VSA",
  description: "Supportive coaching for Class 10, Class 11–12 Science, JEE and NEET aspirants.",
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "[Phone number required]",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "[Email address required]",
  address: process.env.NEXT_PUBLIC_CLASS_ADDRESS || "[Class address required]",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "",
  mapEmbedUrl: process.env.NEXT_PUBLIC_MAP_EMBED_URL || "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
};
