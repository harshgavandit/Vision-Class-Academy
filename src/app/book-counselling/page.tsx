import { sharedOpenGraph } from "@/data/site-config";
import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { bookingUrl, counsellingTypes } from "@/data/contact";

export const metadata: Metadata = {
  title: "Book Counselling",
  description: "Explore face-to-face, phone or online counselling with Vision Science Academy and choose an available appointment through the academy’s booking calendar.",
  alternates: { canonical: "/book-counselling" },
  openGraph: { ...sharedOpenGraph, title: "Book Counselling | Vision Science Academy", description: "Discuss your course, preparation and academic goals with the academy.", url: "/book-counselling" },
};

export default function Booking() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20">
        <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full border-[52px] border-white/[0.035]" aria-hidden="true" />
        <div className="container-page relative">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-3 text-xs text-slate-300"><Link href="/" className="hover:text-white">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Book counselling</span></nav>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">For students &amp; parents</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">Find clarity.<br />Plan your next step.</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">A conversation about your goals, course choices and preparation. Students and parents are welcome to discuss their questions with the academy.</p>
          <div className="mt-7 flex flex-wrap gap-3">{counsellingTypes.map(type => <span key={type} className="rounded-full border border-white/20 px-4 py-2 text-xs font-medium text-slate-200">{type} counselling</span>)}</div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-page">
          <div className="mb-10 grid gap-5 sm:grid-cols-3">{[
            { number: "01", title: "Choose your course", description: "Think about the course and academic goals you’d like to discuss." },
            { number: "02", title: "Find a suitable time", description: "Use the appointment calendar when available, or contact the academy." },
            { number: "03", title: "Look for confirmation", description: "Your appointment is confirmed only when the booking provider confirms it." },
          ].map(step => <div className="rounded-2xl border border-slate-200 bg-white p-6" key={step.number}><span className="text-3xl font-bold tracking-tight text-blue-100">{step.number}</span><h2 className="mt-3 text-base font-bold text-slate-900">{step.title}</h2><p className="mt-2 text-sm leading-7 text-slate-600">{step.description}</p></div>)}</div>

          <div className="grid items-start gap-7 lg:grid-cols-2">
            <ContactForm booking deliveryAvailable={false} />
            <div className="card min-w-0 border-t-4 border-t-amber-400" id="appointment-calendar">
              <p className="eyebrow">Choose an available time</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">Appointment calendar</h2>
              {bookingUrl ? <>
                <p className="mt-3 text-sm leading-7 text-slate-600">Select an available appointment and complete the details requested by the booking provider. The enquiry form and calendar are separate; submitting an enquiry does not reserve a time.</p>
                <a className="mt-4 inline-flex text-sm font-bold text-blue-700 underline underline-offset-4" href={bookingUrl} target="_blank" rel="noopener noreferrer">Open booking calendar in a new tab <span aria-hidden="true" className="ml-1">↗</span></a>
                <iframe title="Vision Science Academy counselling appointment booking" src={bookingUrl} className="mt-6 h-[620px] w-full rounded-2xl border border-slate-200 bg-white sm:h-[700px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                <p className="mt-4 text-xs leading-6 text-slate-500">If the calendar does not load, use the link above. Availability, appointment details and confirmation are managed by the booking provider.</p>
              </> : <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 sm:p-8">
                <svg className="h-10 w-10 text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M16 3v4M8 3v4M3 11h18m-14 4h3m4 0h3m-10 3h3" /></svg>
                <p className="mt-5 text-lg font-bold text-slate-900">Online booking is coming soon.</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">The appointment calendar is not available yet. Visit our contact page for the academy’s available contact options and request a suitable counselling time directly.</p>
                <Link className="btn-primary mt-6" href="/contact">View contact options <span aria-hidden="true">↗</span></Link>
              </div>}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-7"><h2 className="text-base font-bold text-slate-900">Make the most of your conversation</h2><p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">Have the student’s current class, course of interest, contact details and questions ready. For online booking, provide student and parent details as requested by the appointment provider. Avoid sharing sensitive documents or identification details.</p></div>
        </div>
      </section>
    </>
  );
}
