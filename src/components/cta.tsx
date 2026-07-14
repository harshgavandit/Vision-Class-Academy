import Link from "next/link";
import { contactActions } from "@/data/contact";
export function ContactActions({compact=false}:{compact?:boolean}) { return <div className={`flex flex-wrap gap-3 ${compact ? "" : "mt-7"}`}><a className="btn-secondary" href={contactActions.phoneHref}>Call us</a><a className="btn-secondary" href={contactActions.emailHref}>Email us</a><Link className="btn-primary" href="/book-counselling">Book counselling</Link></div> }
export function WhatsAppFloat(){ return <a aria-label="Contact us on WhatsApp" className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white shadow-lg hover:bg-emerald-600" href={contactActions.whatsappHref}>WA</a> }
