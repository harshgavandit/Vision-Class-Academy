import { sharedOpenGraph } from "@/data/site-config";
import type { Metadata } from "next";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { AdmissionCta } from "@/components/cta";
export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about courses and counselling.",
  alternates: { canonical: "/faq" },
  openGraph: { ...sharedOpenGraph,
    title: "Frequently Asked Questions | Vision Science Academy",
    description:
      "Helpful answers about courses, counselling, timings and admissions.",
    url: "/faq",
  },
};
export default function Faq() {
  return (
    <>
      <PageHero
        eyebrow="Frequently asked questions"
        title="A little clarity goes a long way."
        description="Helpful answers before you choose your course or book a counselling conversation."
      />
      <section className="section">
        <div className="container-page max-w-3xl">
          <h2 className="sr-only">Questions about courses and counselling</h2>
          <FaqList />
        </div>
      </section>
      <AdmissionCta />
    </>
  );
}
