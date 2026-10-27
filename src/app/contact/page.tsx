import { sharedOpenGraph } from "@/data/site-config";
import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { ContactActions } from "@/components/cta";
import { siteConfig } from "@/data/site-config";
import { contactActions, contactPhones, hasAddress, mapEmbedUrl } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Vision Science Academy by phone, WhatsApp, email or visit the academy to discuss courses and admission.",
  alternates: { canonical: "/contact" },
  openGraph: { ...sharedOpenGraph, title: "Contact Vision Science Academy", description: "Talk to the academy about courses, admission and counselling.", url: "/contact" },
};

export default function Contact() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20">
        <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full border-[48px] border-white/[0.035]" aria-hidden="true" />
        <div className="container-page relative">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-3 text-xs text-slate-300"><Link href="/" className="hover:text-white">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Contact</span></nav>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">Let’s talk about your next step</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">A good beginning starts with a conversation.</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">Have a question about a course or admission? Get in touch with Vision Science Academy and discuss what’s right for the student.</p>
          <div className="mt-8"><Link href="/book-counselling" className="btn-primary">Book counselling <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-page">
          <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-700">Call the academy</p>
              {contactPhones.length > 0 ? (
                <ul className="mt-3 space-y-2 text-lg font-bold text-slate-900">
                  {contactPhones.map((phone) => (
                    <li key={phone.href}><a href={phone.href} className="inline-flex min-h-11 items-center break-words hover:text-blue-700">{phone.number}</a></li>
                  ))}
                </ul>
              ) : <p className="mt-3 text-lg font-bold text-slate-900">Phone details coming soon</p>}
              <p className="mt-2 text-sm leading-6 text-slate-500">Discuss course options and admission queries.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6"><p className="text-xs font-bold uppercase tracking-wider text-blue-700">Write to us</p><p className="mt-3 text-lg font-bold text-slate-900">{contactActions.hasEmail ? <a href={contactActions.emailHref} className="break-all hover:text-blue-700">{siteConfig.email}</a> : "Email details coming soon"}</p><p className="mt-2 text-sm leading-6 text-slate-500">Share your questions and course of interest.</p></div>
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:col-span-2 lg:col-span-1"><p className="text-xs font-bold uppercase tracking-wider text-blue-700">Plan a conversation</p><Link href="/book-counselling" className="mt-3 inline-flex text-lg font-bold text-slate-900 hover:text-blue-700">Explore counselling <span aria-hidden="true" className="ml-2">↗</span></Link><p className="mt-2 text-sm leading-6 text-slate-500">Face-to-face, phone or online meeting options.</p></div>
          </div>

          <div className="grid items-start gap-7 lg:grid-cols-[1.1fr_.9fr]">
            <div id="contact-form" className="scroll-mt-28"><ContactForm deliveryAvailable={false} /></div>
            <aside className="card">
              <p className="eyebrow">Find us</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">Visit Vision Science Academy</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{hasAddress ? siteConfig.address : "The academy’s address and visiting details will be published once confirmed."}</p>
              {mapEmbedUrl ? <iframe title="Vision Science Academy location map" className="mt-6 h-72 w-full rounded-2xl border-0 bg-slate-100" src={mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /> : <div className="mt-6 flex min-h-48 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center"><svg className="h-9 w-9 text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg><p className="mt-3 text-sm font-semibold text-slate-700">Location map coming soon</p><p className="mt-2 text-xs leading-6 text-slate-500">Please confirm the location before planning a visit.</p></div>}
              {contactActions.directionsHref && <a href={contactActions.directionsHref} target="_blank" rel="noopener noreferrer" className="btn-secondary mt-5">View location &amp; directions <span aria-hidden="true">↗</span></a>}
              <p className="mt-5 text-xs leading-6 text-slate-500">Please arrange a counselling appointment before visiting for a course discussion.</p>
            </aside>
          </div>

          <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-7 sm:p-9"><h2 className="text-2xl font-bold tracking-tight text-slate-950">Still exploring your options?</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">Browse our courses, learn about our teaching approach or speak with the academy about your goals.</p><ContactActions /></div>
        </div>
      </section>
    </>
  );
}
