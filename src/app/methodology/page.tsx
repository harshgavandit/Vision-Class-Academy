import { sharedOpenGraph } from "@/data/site-config";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { AdmissionCta } from "@/components/cta";
import { learningApproach } from "@/data/presentation";
import { Icon } from "@/components/icon";
export const metadata: Metadata = {
  title: "Teaching Methodology",
  description:
    "Learn how Vision Science Academy supports concept-building, practice and revision.",
  alternates: { canonical: "/methodology" },
  openGraph: { ...sharedOpenGraph,
    title: "Teaching Methodology | Vision Science Academy",
    description:
      "Explore the questions to ask about concepts, practice, revision and academic guidance.",
    url: "/methodology",
  },
};
export default function Methodology() {
  return (
    <>
      <PageHero
        eyebrow="Teaching methodology"
        title="Understand. Practise. Find your direction."
        description="Explore how to approach your preparation, then discuss the exact teaching process and academic routines with the academy."
      />
      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2">
            {learningApproach.map((item, index) => (
              <article
                key={item.title}
                className="group card !p-8 transition hover:border-blue-200"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon name={item.icon} className="h-7 w-7" />
                  </span>
                  <span className="text-4xl font-extrabold text-slate-100">
                    0{index + 1}
                  </span>
                </div>
                <h2 className="mt-7 text-xl font-extrabold text-navy">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-8 text-slate-500">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Teaching process placeholder
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              [Verified lesson format, assessment frequency, doubt-session
              details and parent communication schedule to be added]
            </p>
          </div>
        </div>
      </section>
      <AdmissionCta />
    </>
  );
}
