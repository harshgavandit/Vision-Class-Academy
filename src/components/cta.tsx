import Link from "next/link";
import { contactActions } from "@/data/contact";
import { Icon } from "./icon";
export function ContactActions({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-3 ${compact ? "" : "mt-7"}`}>
      <Link className="btn-primary" href="/book-counselling">
        Book counselling
        <Icon name="arrow" className="h-4 w-4" />
      </Link>
      {contactActions.hasPhone && (
        <a className="btn-secondary" href={contactActions.phoneHref}>
          <Icon name="phone" className="h-4 w-4" />
          Call us
        </a>
      )}
      {contactActions.hasEmail && (
        <a className="btn-secondary" href={contactActions.emailHref}>
          <Icon name="mail" className="h-4 w-4" />
          Email us
        </a>
      )}
      {contactActions.hasWhatsApp && (
        <a
          className="btn-secondary"
          href={contactActions.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="chat" className="h-4 w-4" />
          WhatsApp
        </a>
      )}
      {contactActions.directionsHref && (
        <a
          className="btn-secondary"
          href={contactActions.directionsHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="pin" className="h-4 w-4" />
          View location
        </a>
      )}
    </div>
  );
}
export function WhatsAppFloat() {
  return (
    <a
      aria-label={
        contactActions.hasWhatsApp
          ? "Contact us on WhatsApp"
          : "Contact the academy"
      }
      className="contact-float"
      href={contactActions.whatsappHref}
      {...(contactActions.hasWhatsApp
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      <Icon name="chat" className="h-6 w-6" />
      <span className="sr-only">Contact the academy</span>
    </a>
  );
}
export function AdmissionCta() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="admission-cta">
          <div className="relative z-10 max-w-2xl">
            <p className="eyebrow !text-blue-200">Your next step</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              A good decision starts with
              <br className="hidden sm:block" /> a conversation.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
              Bring your questions. Explore your options. Let’s talk about the
              right learning path for you.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/book-counselling" className="btn-gold">
                Book a counselling meeting
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
              >
                Get in touch
                <Icon name="chat" className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-5 text-xs text-slate-400">
              Face-to-face, phone & online counselling options
            </p>
          </div>
          <Icon
            name="cap"
            className="absolute -right-8 bottom-0 h-64 w-64 -rotate-12 text-white/[.05] sm:right-8 sm:h-80 sm:w-80"
          />
        </div>
      </div>
    </section>
  );
}
