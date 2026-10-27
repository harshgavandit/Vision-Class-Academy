import { sharedOpenGraph } from "@/data/site-config";
import type { Metadata } from "next";
import Link from "next/link";
import { ContactActions } from "@/components/cta";
import { FacultyCard } from "@/components/faculty-card";
import { faculty } from "@/data/faculty";

const description = "Meet the faculty at Vision Science Academy.";
export const metadata: Metadata = {
  title: "Faculty",
  description,
  alternates: { canonical: "/faculty" },
  openGraph: { ...sharedOpenGraph, title: "Faculty | Vision Science Academy", description, url: "/faculty" },
};

export default function Faculty() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#edf3fb] py-14 sm:py-20">
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border-[45px] border-white/60" aria-hidden="true" />
        <div className="container-page relative">
          <p className="eyebrow">The people behind the learning</p>
          <h1 className="heading max-w-3xl">Good guidance makes<br /><span className="text-blue-700">room for every question.</span></h1>
          <p className="copy">Meet the educators guiding the journey. Faculty names, photographs and credentials will be published once verified by the academy.</p>
          <Link href="/methodology" className="mt-6 inline-block text-sm font-bold text-blue-700">Explore our teaching methodology <span aria-hidden="true">→</span></Link>
        </div>
      </section>
      <section className="section">
        <div className="container-page">
          <div className="mb-7 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-amber-400 text-xs font-bold" aria-hidden="true">i</span><p>These are profile layout previews. They do not represent named faculty or verified qualifications.</p></div>
          <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {faculty.map((member) => <FacultyCard key={member.id} member={member} headingLevel={2} />)}
          </div>
          <div className="mt-12 rounded-[1.5rem] border border-blue-100 bg-blue-50 p-7 sm:p-9">
            <h2 className="text-2xl font-extrabold text-[#0b1f3a]">Find out who will guide your preparation.</h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">Ask about subject faculty, the teaching approach and how doubts are addressed when you speak with the academy.</p>
            <ContactActions />
          </div>
        </div>
      </section>
    </>
  );
}
