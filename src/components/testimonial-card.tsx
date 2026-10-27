import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white p-6 shadow-[0_8px_35px_-20px_#0b1f3a35] sm:p-8">
      <div className="flex items-center justify-between gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700" aria-hidden="true">
          <svg viewBox="0 0 32 32" fill="none" className="h-6 w-6"><path d="M7 16h6v10H3V16c0-7 4-10 10-10v4c-4 0-6 2-6 6Zm16 0h6v10H19V16c0-7 4-10 10-10v4c-4 0-6 2-6 6Z" fill="currentColor" /></svg>
        </span>
        <span className="rounded-full border border-slate-200 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">{testimonial.verified ? `${testimonial.role} perspective` : "Testimonial preview"}</span>
      </div>
      {testimonial.verified ? (
        <blockquote className="my-6 flex-1 text-lg leading-8 text-[#0b1f3a]">“{testimonial.quote}”</blockquote>
      ) : (
        <div className="my-6 flex-1">
          <p className="text-lg font-bold leading-7 text-[#0b1f3a]">{testimonial.quote}</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">A {testimonial.role.toLowerCase()}&apos;s experience will appear here once it has been verified and shared with permission.</p>
        </div>
      )}
      <figcaption className="flex items-center gap-3 border-t border-slate-100 pt-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#edf3fb] text-blue-700" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5"><circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" /><path d="M5 21v-2a7 7 0 0 1 14 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </span>
        <div className="min-w-0">
          <p className="break-words text-sm font-bold text-[#0b1f3a]">{testimonial.author}</p>
          <p className="mt-0.5 text-xs text-slate-500">{[testimonial.role, testimonial.course, testimonial.academicYear].filter(Boolean).join(" · ")}</p>
        </div>
      </figcaption>
    </figure>
  );
}
