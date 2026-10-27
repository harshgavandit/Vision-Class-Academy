"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { heroSlides } from "@/data/presentation";
import { Icon } from "./icon";

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const slide = heroSlides[active];
  const move = (direction: number) =>
    setActive((active + direction + heroSlides.length) % heroSlides.length);
  return (
    <section
      className="hero-section"
      aria-roledescription="carousel"
      aria-label="Discover Vision Science Academy"
      onKeyDown={(event) => {
        if (event.target !== event.currentTarget) return;
        if (event.key === "ArrowRight") move(1);
        if (event.key === "ArrowLeft") move(-1);
      }}
      tabIndex={0}
    >
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />
      <div className="container-page relative z-10 grid gap-10 pb-12 pt-14 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-8 lg:pb-16 lg:pt-16">
        <div className="min-w-0">
          <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-[10px] font-bold tracking-wide text-slate-200 sm:text-xs">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
            {slide.tag}
          </p>
          <div
            aria-live="polite"
            aria-atomic="true"
            className="hero-copy"
            key={slide.id}
          >
            <h1 className="text-[clamp(2.7rem,5.2vw,4.65rem)] font-extrabold leading-[1.08] tracking-[-2px] text-white">
              {slide.title}
              <br />
              <span className="text-amber-300">{slide.accent}</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-slate-300 sm:text-lg">
              {slide.description}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={slide.href} className="btn-gold">
              {slide.label}
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link
              href={
                slide.href === "/book-counselling"
                  ? "/about"
                  : "/book-counselling"
              }
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
            >
              {slide.href === "/book-counselling"
                ? "Meet the academy"
                : "Book counselling"}
              <Icon name="calendar" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-300">
            <span className="inline-flex items-center gap-1.5">
              <Icon name="check" className="h-4 w-4 text-amber-300" />
              School & science
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="check" className="h-4 w-4 text-amber-300" />
              JEE & NEET
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="check" className="h-4 w-4 text-amber-300" />
              Foundation courses
            </span>
          </div>
        </div>
        <div className="hero-art relative mx-auto w-full max-w-[510px]">
          <div className="absolute inset-7 rounded-full border border-blue-300/15 bg-blue-400/5" />
          <Image
            src={slide.image}
            alt="Original illustration of science books, an atom, a microscope and a graduation cap"
            width={560}
            height={460}
            priority
            className="relative z-10 h-auto w-full"
          />
          <div className="hero-note absolute bottom-5 left-2 z-20 flex max-w-[calc(100%-8px)] items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:bottom-8 sm:left-0">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
              <Icon name="cap" className="h-6 w-6" />
            </span>
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Make room for possibility
              </p>
              <p className="mt-1 text-xs font-bold text-navy sm:text-sm">
                {slide.subject}
              </p>
            </div>
          </div>
          <span className="absolute right-0 top-4 z-20 rounded-2xl border border-white/20 bg-white/10 p-3 text-amber-300 backdrop-blur">
            <Icon name="spark" className="h-7 w-7" />
          </span>
        </div>
        <div className="flex items-center gap-4 lg:col-span-2">
          <div className="flex gap-2" aria-label="Choose a banner">
            {heroSlides.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={"Show banner " + (index + 1) + ": " + item.title}
                aria-current={active === index ? "true" : undefined}
                onClick={() => setActive(index)}
                className={"hero-dot " + (active === index ? "is-active" : "")}
              >
                <span />
              </button>
            ))}
          </div>
          <span className="text-[10px] font-semibold tracking-widest text-slate-400">
            0{active + 1} / 0{heroSlides.length}
          </span>
          <div className="ml-auto flex gap-2">
            <button
              type="button"
              aria-label="Previous banner"
              className="hero-arrow"
              onClick={() => move(-1)}
            >
              <Icon name="arrow" className="h-4 w-4 rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Next banner"
              className="hero-arrow"
              onClick={() => move(1)}
            >
              <Icon name="arrow" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
