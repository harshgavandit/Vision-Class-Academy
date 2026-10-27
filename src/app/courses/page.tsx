import { sharedOpenGraph } from "@/data/site-config";
import type { Metadata } from "next";
import Link from "next/link";
import { CourseCard } from "@/components/course-card";
import { CourseExplorer } from "@/components/course-explorer";
import { ContactActions } from "@/components/cta";
import { courses } from "@/data/courses";

const description =
  "Explore Class 10, Class 11–12 Science, JEE, NEET, foundation and crash courses.";
export const metadata: Metadata = {
  title: "Courses",
  description,
  alternates: { canonical: "/courses" },
  openGraph: {
    ...sharedOpenGraph,
    title: "Courses | Vision Science Academy",
    description,
    url: "/courses",
  },
};

const categories = Array.from(
  new Set(courses.map((course) => course.category)),
);
const categoryId = (category: string) =>
  category
    .toLowerCase()
    .replace(/[^a-z]+/g, "-")
    .replace(/-$/, "");

export default function Courses() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#edf3fb] py-14 sm:py-20">
        <div
          className="absolute -right-20 -top-24 h-80 w-80 rounded-full border-[45px] border-white/60"
          aria-hidden="true"
        />
        <div className="container-page relative">
          <p className="eyebrow">Our programmes</p>
          <h1 className="heading max-w-3xl">
            One clear direction.
            <br />
            <span className="text-blue-700">Your next academic step.</span>
          </h1>
          <p className="copy">
            From school fundamentals to entrance preparation, explore a course
            that meets the student where they are. Confirm availability, timings
            and fees during counselling.
          </p>
          <a href="#course-explorer" className="btn-primary mt-7">
            Compare course details <span aria-hidden="true">↓</span>
          </a>
          <nav
            className="mt-6 flex flex-wrap gap-2"
            aria-label="Jump to course category"
          >
            {categories.map((category) => (
              <a
                key={category}
                href={`#${categoryId(category)}`}
                className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-[#0b1f3a] transition hover:border-blue-700 hover:text-blue-700"
              >
                {category}{" "}
                <span className="ml-1" aria-hidden="true">
                  ↓
                </span>
              </a>
            ))}
          </nav>
        </div>
      </section>
      <div className="section">
        <div className="container-page space-y-14 sm:space-y-20">
          <section
            id="course-explorer"
            className="scroll-mt-28"
            aria-labelledby="course-explorer-heading"
          >
            <div className="mb-8 max-w-3xl">
              <p className="eyebrow">Understand your options</p>
              <h2 id="course-explorer-heading" className="heading">
                What will you study, and who is it for?
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Choose a course below for a simple explanation of its focus, who
                it suits and the skills to work towards.
              </p>
            </div>
            <CourseExplorer courses={courses} />
          </section>
          {categories.map((category, index) => (
            <section
              key={category}
              id={categoryId(category)}
              className="scroll-mt-32"
              aria-labelledby={`${categoryId(category)}-title`}
            >
              <div className="mb-6 flex items-center gap-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xs font-extrabold text-blue-700 shadow-sm ring-1 ring-slate-200"
                  aria-hidden="true"
                >
                  0{index + 1}
                </span>
                <h2
                  id={`${categoryId(category)}-title`}
                  className="text-2xl font-extrabold tracking-tight text-[#0b1f3a] sm:text-3xl"
                >
                  {category}
                </h2>
                <span
                  className="hidden h-px flex-1 bg-slate-200 sm:block"
                  aria-hidden="true"
                />
              </div>
              <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
                {courses
                  .filter((course) => course.category === category)
                  .map((course) => (
                    <CourseCard key={course.slug} course={course} />
                  ))}
              </div>
            </section>
          ))}
          <section className="rounded-[1.5rem] border border-blue-100 bg-blue-50 p-7 sm:p-10">
            <p className="eyebrow">Let&apos;s make a plan</p>
            <h2 className="mt-3 text-2xl font-extrabold text-[#0b1f3a] sm:text-3xl">
              Unsure which course is the right fit?
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Discuss the student&apos;s current class, interests and
              preparation goals with the academy. Choose face-to-face, phone or
              online counselling.
            </p>
            <ContactActions />
            <Link
              href="/methodology"
              className="mt-5 inline-block text-sm font-bold text-blue-700"
            >
              Explore our teaching methodology <span aria-hidden="true">→</span>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
