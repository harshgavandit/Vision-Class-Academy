import Link from "next/link";
import { ContentImage } from "@/components/content-image";
import type { Course } from "@/data/courses";

const accents = {
  blue: "bg-blue-50 text-blue-800",
  gold: "bg-amber-50 text-amber-900",
  teal: "bg-teal-50 text-teal-800",
};

export function CourseCard({ course, headingLevel = 3 }: { course: Course; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white shadow-[0_8px_35px_-20px_#0b1f3a35] transition duration-300 motion-safe:hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5">
      <div className="relative aspect-[16/9] overflow-hidden bg-[#edf3fb]">
        <ContentImage
          src={course.image}
          alt={course.imageAlt}
          fallbackSrc="/images/learning-lab.svg"
          fallbackLabel={`${course.title} illustration unavailable`}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover transition duration-500 motion-safe:group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#0b1f3a] shadow-sm">
          {course.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-700">{course.eyebrow}</p>
        <Heading className="mt-2 text-2xl font-extrabold tracking-tight text-[#0b1f3a]">
          <Link href={`/courses/${course.slug}`} className="rounded-sm hover:text-blue-700">{course.title}</Link>
        </Heading>
        <p className="mt-3 text-sm leading-6 text-slate-600">{course.summary}</p>
        <ul className="my-5 space-y-2.5">
          {course.highlights.map((highlight) => (
            <li className="flex gap-2.5 text-sm leading-5 text-slate-600" key={highlight}>
              <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${accents[course.accent]}`} aria-hidden="true">
                <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3"><path d="m4 8 2.5 2.5L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              {highlight}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5">
          <Link href={`/courses/${course.slug}`} className="inline-flex items-center gap-2 rounded-sm text-sm font-bold text-blue-700 hover:text-blue-900" aria-label={`Explore ${course.title}`}>
            Explore course <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/book-counselling" className="rounded-lg bg-[#0b1f3a] px-3.5 py-2.5 text-xs font-bold text-white transition hover:bg-blue-700" aria-label={`Enquire about ${course.title} admission`}>
            Enquire now
          </Link>
        </div>
      </div>
    </article>
  );
}
