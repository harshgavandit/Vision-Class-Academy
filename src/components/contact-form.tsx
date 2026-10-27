"use client";

import { FormEvent, useId, useRef, useState } from "react";
import Link from "next/link";
import { courses } from "@/data/courses";
import { contactActions, contactMethods, counsellingTypes, currentClasses } from "@/data/contact";

type ContactFormProps = {
  booking?: boolean;
  deliveryAvailable?: boolean;
};

export function ContactForm({ booking = false, deliveryAvailable = false }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const submitted = useRef(false);
  const prefix = useId();
  const fieldClass = "mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20";
  const labelClass = "block text-sm font-semibold text-slate-700";

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!deliveryAvailable || submitted.current) return;

    const phone = form.elements.namedItem("phone") as HTMLInputElement;
    const validPhone = /^\+?[\d\s().-]+$/.test(phone.value.trim()) && /^\d{7,15}$/.test(phone.value.replace(/\D/g, ""));
    phone.setCustomValidity(validPhone ? "" : "Enter a phone number containing 7 to 15 digits.");
    for (const name of ["studentName", "parentName"]) {
      const input = form.elements.namedItem(name) as HTMLInputElement;
      input.setCustomValidity(input.value.trim() ? "" : "Please enter a name.");
    }
    if (!form.reportValidity()) return;

    const body = new FormData(form);
    submitted.current = true;
    setStatus("loading");
    try {
      const response = await fetch("/api/enquiry", { method: "POST", body });
      if (!response.ok) throw new Error("Enquiry delivery failed");
      form.reset();
      setStatus("success");
    } catch {
      submitted.current = false;
      setStatus("error");
    }
  }

  return (
    <div className="card border-t-4 border-t-blue-700">
      <p className="eyebrow">{booking ? "Plan your conversation" : "We’re here to help"}</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">{booking ? "Counselling enquiry" : "Send an enquiry"}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-600">{booking ? "Discuss your course, study goals and preferred counselling mode with the academy." : "Tell us about the student’s goals, course of interest and the best way to reach you."}</p>

      {!deliveryAvailable && (
        <div id={`${prefix}-preview-notice`} className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm font-bold text-slate-900">Form preview · Online submission is unavailable</p>
          <p className="mt-2 text-sm leading-7 text-slate-600">You can explore the fields below, but this preview does not send or save any details. Submission will be available once the academy’s enquiry service is connected. Please use sample information while previewing.</p>
          <p className="mt-2 text-sm leading-7 text-slate-600">{contactActions.hasPhone || contactActions.hasEmail || contactActions.hasWhatsApp ? "Please contact the academy directly to discuss admission or request a counselling meeting." : "The academy’s contact details will be published here once confirmed. Please check back for enquiry and admission availability."}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {contactActions.hasPhone && <a className="btn-primary" href={contactActions.phoneHref}>Call the academy</a>}
            {contactActions.hasWhatsApp && <a className="btn-secondary" href={contactActions.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp us</a>}
            {contactActions.hasEmail && <a className="btn-secondary" href={contactActions.emailHref}>Email the academy</a>}
          </div>
          <p className="mt-4 border-t border-amber-200 pt-4 text-xs leading-6 text-slate-500">Have the student’s current class, course of interest and questions ready when you get in touch.</p>
        </div>
      )}
        <form id="enquiry-fields" onSubmit={submit} className="mt-7" aria-busy={status === "loading"} aria-describedby={!deliveryAvailable ? `${prefix}-preview-notice` : undefined}>
          <input type="hidden" name="enquiryType" value={booking ? "counselling" : "general"} />
          <div className="hidden" aria-hidden="true"><label htmlFor={`${prefix}-website`}>Leave this field empty</label><input id={`${prefix}-website`} name="website" tabIndex={-1} autoComplete="off" maxLength={200} /></div>
          <fieldset disabled={status === "loading" || status === "success"} className="grid gap-5 sm:grid-cols-2 disabled:opacity-70">
            <legend className="sr-only">Student and contact details</legend>
            <label className={labelClass}>Student name <span aria-hidden="true">*</span><input required name="studentName" autoComplete="name" maxLength={100} className={fieldClass} onInput={event => event.currentTarget.setCustomValidity("")} /></label>
            <label className={labelClass}>Parent name <span aria-hidden="true">*</span><input required name="parentName" autoComplete="off" maxLength={100} className={fieldClass} onInput={event => event.currentTarget.setCustomValidity("")} /></label>
            <label className={labelClass}>Phone number <span aria-hidden="true">*</span><input required name="phone" type="tel" autoComplete="tel" inputMode="tel" maxLength={32} className={fieldClass} onInput={event => event.currentTarget.setCustomValidity("")} /></label>
            <label className={labelClass}>Email <span aria-hidden="true">*</span><input required name="email" type="email" autoComplete="email" maxLength={254} className={fieldClass} /></label>
            <label className={labelClass}>Current class <span aria-hidden="true">*</span><select required name="currentClass" defaultValue="" className={fieldClass}><option value="" disabled>Select current class</option>{currentClasses.map(value => <option key={value}>{value}</option>)}</select></label>
            <label className={labelClass}>Course of interest <span aria-hidden="true">*</span><select required name="course" defaultValue="" className={fieldClass}><option value="" disabled>Select a course</option>{courses.map(course => <option key={course.slug}>{course.title}</option>)}</select></label>
            {booking && <label className={labelClass}>Counselling type <span aria-hidden="true">*</span><select required name="counsellingType" defaultValue="" className={fieldClass}><option value="" disabled>Select meeting type</option>{counsellingTypes.map(value => <option key={value}>{value}</option>)}</select></label>}
            <label className={labelClass}>Preferred contact method <span aria-hidden="true">*</span><select required name="contactMethod" defaultValue="" className={fieldClass}><option value="" disabled>Select a contact method</option>{contactMethods.map(value => <option key={value}>{value}</option>)}</select></label>
            <label className={`${labelClass} sm:col-span-2`}>Message or questions<textarea name="message" rows={4} maxLength={2000} className={`${fieldClass} resize-y`} /></label>
            <p className="text-xs leading-6 text-slate-500 sm:col-span-2">Fields marked * are required for live enquiries. {deliveryAvailable ? "Your details are used to respond to your enquiry." : "Preview information remains in this form and is not submitted."} Please do not include sensitive personal information. Read our <Link className="font-semibold text-blue-700 underline underline-offset-4" href="/privacy-policy">privacy policy</Link>.</p>
            <div className="sm:col-span-2"><button type="submit" disabled={!deliveryAvailable || status === "loading" || status === "success"} aria-describedby={!deliveryAvailable ? `${prefix}-preview-notice` : undefined} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">{!deliveryAvailable ? "Submission unavailable · Preview only" : status === "loading" ? "Sending your enquiry…" : status === "success" ? "Enquiry sent" : "Send enquiry"}</button></div>
          </fieldset>
          <div aria-live="polite" aria-atomic="true">
            {status === "success" && <p role="status" className="mt-5 rounded-xl bg-emerald-50 p-4 text-sm leading-6 text-emerald-800">Thank you. Your enquiry has been received. The academy will respond using your selected contact method. This does not confirm a counselling appointment.</p>}
            {status === "error" && <p role="alert" className="mt-5 rounded-xl bg-red-50 p-4 text-sm leading-6 text-red-800">Your enquiry could not be sent. Your details are still in the form so you can try again. You can also contact the academy directly.</p>}
          </div>
        </form>
    </div>
  );
}
