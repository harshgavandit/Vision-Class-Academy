import Link from "next/link";
import { Brand } from "./brand";
import { Icon } from "./icon";
import { siteConfig } from "@/data/site-config";
import { contactActions, contactPhones } from "@/data/contact";

export function Footer() {
  return (
    <footer className="bg-navy pb-7 pt-16 text-slate-300">
      <div className="container-page grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" aria-label="Vision Science Academy home">
            <Brand light />
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-7 text-slate-400">
            A clear direction for school, science and entrance preparation.
            Start with your goals. Find your next step.
          </p>
          <Link
            href="/book-counselling"
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-300"
          >
            Let’s talk about your future
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
        <div>
          <h2 className="text-sm font-bold text-white">Explore the academy</h2>
          <div className="footer-links">
            <Link href="/about">About us</Link>
            <Link href="/methodology">Teaching methodology</Link>
            <Link href="/faculty">Our faculty</Link>
            <Link href="/gallery">Classroom gallery</Link>
            <Link href="/testimonials">Student & parent voices</Link>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold text-white">Find your path</h2>
          <div className="footer-links">
            <Link href="/courses">All courses</Link>
            <Link href="/courses/jee-main">JEE preparation</Link>
            <Link href="/courses/neet">NEET preparation</Link>
            <Link href="/results">Results & achievements</Link>
            <Link href="/faq">Frequently asked questions</Link>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold text-white">We’re here to help</h2>
          <div className="footer-links">
            {!siteConfig.address.startsWith("[") && (
              <p className="flex gap-3 leading-6">
                <Icon
                  name="pin"
                  className="mt-1 h-4 w-4 shrink-0 text-amber-300"
                />
                {siteConfig.address}
              </p>
            )}
            {contactPhones.map((phone) => (
              <a
                key={phone.href}
                href={phone.href}
                className="flex items-center gap-3"
              >
                <Icon name="phone" className="h-4 w-4 text-amber-300" />
                {phone.number}
              </a>
            ))}
            {contactActions.hasEmail && (
              <a
                href={contactActions.emailHref}
                className="flex items-center gap-3 break-all"
              >
                <Icon name="mail" className="h-4 w-4 shrink-0 text-amber-300" />
                {siteConfig.email}
              </a>
            )}
            <Link href="/contact">Contact & location</Link>
            <Link href="/book-counselling">Book counselling</Link>
          </div>
        </div>
      </div>
      <div className="container-page mt-12">
        <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white">
              Terms & conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
