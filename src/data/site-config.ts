export type SiteConfig = {
  name: string;
  shortName: string;
  description: string;
  phone: string;
  secondaryPhone: string;
  whatsapp: string;
  email: string;
  address: string;
  bookingUrl: string;
  mapEmbedUrl: string;
  siteUrl: string;
};
function siteUrl(value: string | undefined) {
  try {
    const url = new URL(value || "http://localhost:3000");
    return ["http:", "https:"].includes(url.protocol)
      ? url.origin
      : "http://localhost:3000";
  } catch {
    return "http://localhost:3000";
  }
}
export const siteConfig: SiteConfig = {
  name: "Vision Science Academy",
  shortName: "VSA",
  description:
    "Supportive coaching for Class 10, Class 11–12 Science, JEE and NEET aspirants.",
  phone:
    process.env.NEXT_PUBLIC_PHONE_NUMBER?.trim() || "+91 7208255534",
  secondaryPhone:
    process.env.NEXT_PUBLIC_SECONDARY_PHONE_NUMBER?.trim() || "+91 9137034745",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || "",
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "spsvisionscienceacademy@gmail.com",
  address:
    process.env.NEXT_PUBLIC_CLASS_ADDRESS?.trim() || "[Class address required]",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || "",
  mapEmbedUrl: process.env.NEXT_PUBLIC_MAP_EMBED_URL?.trim() || "",
  siteUrl: siteUrl(process.env.NEXT_PUBLIC_SITE_URL),
};

/** Shared social presentation; spread this into page-level Open Graph metadata. */
export const sharedOpenGraph = {
  type: "website" as const,
  siteName: siteConfig.name,
  locale: "en_IN",
  images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Vision Science Academy — a clear path for your ambitions" }],
};
