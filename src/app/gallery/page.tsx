import { sharedOpenGraph } from "@/data/site-config";
import type { Metadata } from "next";
import { ContactActions } from "@/components/cta";
import { GalleryGrid } from "@/components/gallery-grid";

const description = "Explore the classroom gallery and learn about visiting Vision Science Academy.";
export const metadata: Metadata = {
  title: "Classroom Gallery",
  description,
  alternates: { canonical: "/gallery" },
  openGraph: { ...sharedOpenGraph, title: "Classroom Gallery | Vision Science Academy", description, url: "/gallery" },
};

export default function Gallery() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#edf3fb] py-14 sm:py-20">
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border-[45px] border-white/60" aria-hidden="true" />
        <div className="container-page relative">
          <p className="eyebrow">A closer look</p>
          <h1 className="heading max-w-3xl">Get a feel for<br /><span className="text-blue-700">the learning environment.</span></h1>
          <p className="copy">Explore the gallery by category. Verified photographs of the academy will appear here once they are available and cleared for publication.</p>
        </div>
      </section>
      <section className="section">
        <div className="container-page">
          <GalleryGrid showFilters />
          <div className="mt-12 rounded-[1.5rem] border border-blue-100 bg-blue-50 p-7 sm:p-9">
            <h2 className="text-2xl font-extrabold text-[#0b1f3a]">Prefer to see the academy in person?</h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">Ask about a face-to-face counselling meeting and confirm the address and visiting arrangements with the academy.</p>
            <ContactActions />
          </div>
        </div>
      </section>
    </>
  );
}
