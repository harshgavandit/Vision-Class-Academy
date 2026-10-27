import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/cta";
import { SiteInsights } from "@/components/site-insights";
import { siteConfig } from "@/data/site-config";
import { contactActions, hasAddress } from "@/data/contact";
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.name + " | Coaching for Science, JEE & NEET",
    template: "%s | " + siteConfig.name,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "en_IN",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Vision Science Academy — a clear path for your ambitions",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    ...(hasAddress ? { address: siteConfig.address } : {}),
    ...(contactActions.hasPhone ? { telephone: siteConfig.phone } : {}),
    ...(contactActions.hasEmail ? { email: siteConfig.email } : {}),
  };
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only z-50 rounded-lg bg-white p-4 font-bold text-blue-700 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFloat />
        {process.env.VERCEL === "1" && <SiteInsights />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
