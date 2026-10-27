import { siteConfig } from "./site-config";

export const currentClasses = ["Class 10", "Class 11", "Class 12", "Other"] as const;
export const contactMethods = ["Phone", "WhatsApp", "Email"] as const;
export const counsellingTypes = ["Face-to-face", "Phone", "Online"] as const;

const isProvided = (value: string) => Boolean(value.trim()) && !value.includes("[");
function phoneContact(number: string) {
  const digits = number.replace(/\D/g, "");
  if (!isProvided(number) || !/^\+?[\d\s().-]+$/.test(number.trim()) || !/^\d{7,15}$/.test(digits)) {
    return null;
  }
  return {
    number,
    href: `tel:${number.trim().startsWith("+") ? "+" : ""}${digits}`,
  };
}

const primaryPhone = phoneContact(siteConfig.phone);
export const contactPhones = [primaryPhone, phoneContact(siteConfig.secondaryPhone)]
  .filter((phone) => phone !== null);
const whatsappDigits = siteConfig.whatsapp.replace(/\D/g, "");
const hasPhone = primaryPhone !== null;
const hasEmail = isProvided(siteConfig.email) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(siteConfig.email.trim());
const hasWhatsApp = isProvided(siteConfig.whatsapp) && /^\d{7,15}$/.test(whatsappDigits);

function secureExternalUrl(value: string): string {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !url.username && !url.password ? url.toString() : "";
  } catch {
    return "";
  }
}

export const hasAddress = isProvided(siteConfig.address);
export const bookingUrl = secureExternalUrl(siteConfig.bookingUrl);
export const mapEmbedUrl = secureExternalUrl(siteConfig.mapEmbedUrl);

export const contactActions = {
  hasPhone,
  hasEmail,
  hasWhatsApp,
  phoneHref: primaryPhone?.href || "/contact",
  emailHref: hasEmail ? `mailto:${siteConfig.email.trim()}` : "/contact",
  whatsappHref: hasWhatsApp ? `https://wa.me/${whatsappDigits}` : "/contact",
  directionsHref: hasAddress ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}` : "",
};
