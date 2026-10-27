import { sharedOpenGraph } from "@/data/site-config";
import type { Metadata } from "next";
import { ContactActions } from "@/components/cta";
import { TestimonialCard } from "@/components/testimonial-card";
import { testimonials } from "@/data/testimonials";

const description = "Student and parent perspectives from Vision Science Academy, published after verification and consent.";
export const metadata: Metadata = {
  title: "Testimonials",
  description,
  alternates: { canonical: "/testimonials" },
  openGraph: { ...sharedOpenGraph, title: "Testimonials | Vision Science Academy", description, url: "/testimonials" },
};

export default function Testimonials() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#edf3fb] py-14 sm:py-20">
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border-[45px] border-white/60" aria-hidden="true" />
        <div className="container-page relative">
          <p className="eyebrow">Student &amp; parent voices</p>
          <h1 className="heading max-w-3xl">Every learning journey<br /><span className="text-blue-700">has a personal perspective.</span></h1>
          <p className="copy">Real experience, shared with permission. This space is reserved for verified perspectives from students and parents.</p>
        </div>
      </section>
      <section className="section">
        <div className="container-page">
          <div className="grid items-stretch gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => <TestimonialCard key={testimonial.id} testimonial={testimonial} />)}
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-500">The marked preview cards contain no published testimonial or endorsement. Verified accounts will be added with each contributor&apos;s consent.</p>
          <div className="mt-12 rounded-[1.5rem] border border-blue-100 bg-blue-50 p-7 sm:p-9">
            <h2 className="text-2xl font-extrabold text-[#0b1f3a]">Get to know the academy for yourself.</h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">Bring your questions about the course, learning environment and admission process to a counselling conversation.</p>
            <ContactActions />
          </div>
        </div>
      </section>
    </>
  );
}
