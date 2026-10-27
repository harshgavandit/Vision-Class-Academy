import { sharedOpenGraph } from "@/data/site-config";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Vision Science Academy.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    ...sharedOpenGraph,
    title: "Privacy Policy | Vision Science Academy",
    description: "Privacy policy for Vision Science Academy.",
    url: "/privacy-policy",
  },
};
export default function Privacy() {
  return (
    <section className="section">
      <article className="container-page max-w-3xl prose prose-slate">
        <p className="eyebrow">Privacy policy</p>
        <h1>Privacy Policy</h1>
        <p>Last updated: [Date required]</p>
        <h2>Information we collect</h2>
        <p>
          When you submit an enquiry or booking request, we may collect the
          student and parent names, contact details, class, course interest,
          preferred contact method and message.
        </p>
        <h2>How we use information</h2>
        <p>
          We use this information only to respond to enquiries, provide
          counselling information and manage requested appointments.
        </p>
        <h2>Third parties</h2>
        <p>
          Appointment scheduling is handled by the configured external booking
          provider. Its privacy policy applies to information provided within
          that service.
        </p>
        <h2>Website analytics and performance</h2>
        <p>
          We use Vercel Web Analytics to understand page visits and Vercel Speed
          Insights to measure loading and responsiveness. Query strings and URL
          fragments are removed before page data is sent. Information entered in
          the enquiry form is not included in analytics events.
        </p>
        <h2>Contact</h2>
        <p>
          For privacy questions, contact the academy using the details on the
          Contact page.
        </p>
      </article>
    </section>
  );
}
