import { sharedOpenGraph } from "@/data/site-config";
import type { Metadata } from "next";
import Link from "next/link";
import { ResultsShowcase } from "@/components/results-showcase";

export const metadata: Metadata = {
  title: "Results & Achievements",
  description: "Explore verified student achievements across Class 10, Class 12 Science, JEE and NEET at Vision Science Academy. Results are shared only after verification and permission.",
  alternates: { canonical: "/results" },
  openGraph: { ...sharedOpenGraph,
    title: "Results & Achievements | Vision Science Academy",
    description: "Student achievement showcases for school, JEE and NEET examinations, with verified results published by permission.",
    url: "/results",
  },
};

export default function ResultsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#102d55] py-14 text-white sm:py-20">
        <div aria-hidden="true" className="absolute -right-20 -top-28 h-96 w-96 rounded-full border-[60px] border-white/[0.035]" />
        <div className="container-page relative">
          <nav aria-label="Breadcrumb" className="mb-8 text-xs text-blue-200">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Results & achievements</li>
            </ol>
          </nav>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">Effort. Progress. Achievement.</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">A place for every<br className="hidden sm:block" /> well-earned milestone.</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">School examinations, engineering entrances and medical aspirations. See how student achievements are presented, with clarity and care.</p>
        </div>
      </section>

      <ResultsShowcase />

      <section className="section bg-[#f1f6fd]">
        <div className="container-page flex flex-wrap items-center justify-between gap-7">
          <div className="max-w-2xl">
            <p className="eyebrow">Your next step</p>
            <h2 className="heading">Start with the right guidance.</h2>
            <p className="copy">Explore your course options and discuss a preparation plan that fits your academic goals.</p>
          </div>
          <Link href="/book-counselling" className="btn-primary">Book counselling <span aria-hidden="true" className="ml-3">↗</span></Link>
        </div>
      </section>
    </>
  );
}
