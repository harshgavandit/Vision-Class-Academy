"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Brand } from "./brand";
import { Icon } from "./icon";
import { contactActions } from "@/data/contact";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Courses", "/courses"],
  ["Results", "/results"],
  ["Faculty", "/faculty"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <>
      <div className="bg-navy text-white">
        <div className="container-page flex min-h-9 items-center justify-between gap-4 text-[11px] sm:text-xs">
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />A clear
            vision for your next chapter.
          </p>
          <div className="hidden items-center gap-5 sm:flex">
            {contactActions.hasPhone && (
              <a
                href={contactActions.phoneHref}
                className="flex items-center gap-1.5 hover:text-amber-300"
              >
                <Icon name="phone" className="h-3 w-3" />
                Call the academy
              </a>
            )}
            <Link
              href="/book-counselling"
              className="flex items-center gap-1.5 text-slate-200 hover:text-white"
            >
              Student & parent counselling
              <Icon name="arrow" className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="container-page flex h-[82px] items-center justify-between gap-5">
          <Link
            href="/"
            aria-label="Vision Science Academy home"
            onClick={() => setOpen(false)}
          >
            <Brand />
          </Link>
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 xl:flex"
          >
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                aria-current={
                  pathname === href ||
                  (href !== "/" && pathname.startsWith(href))
                    ? "page"
                    : undefined
                }
                className="nav-link"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/book-counselling"
              className="btn-primary hidden !px-4 !py-3 !text-xs sm:inline-flex"
            >
              Book counselling
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <button
              type="button"
              className="rounded-xl border border-slate-200 p-2.5 text-navy xl:hidden"
              aria-controls="mobile-navigation"
              aria-expanded={open}
              aria-label={open ? "Close navigation" : "Open navigation"}
              onClick={() => setOpen(!open)}
            >
              <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
            </button>
          </div>
        </div>
        {open && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="max-h-[calc(100dvh-82px)] overflow-y-auto border-t border-slate-100 bg-white px-5 pb-6 pt-3 shadow-xl xl:hidden"
          >
            <div className="mx-auto grid max-w-6xl gap-1">
              {links.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === href ? "page" : undefined}
                  className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/methodology"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700"
              >
                Teaching methodology
              </Link>
              <Link
                href="/book-counselling"
                onClick={() => setOpen(false)}
                className="btn-primary mt-3 sm:hidden"
              >
                Book counselling
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
