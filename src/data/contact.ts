import { siteConfig } from "./site-config";
export const contactActions = {
  phoneHref: siteConfig.phone.startsWith("[") ? "/contact#contact-form" : `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  emailHref: siteConfig.email.startsWith("[") ? "/contact#contact-form" : `mailto:${siteConfig.email}`,
  whatsappHref: siteConfig.whatsapp ? `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}` : "/contact#contact-form",
};
