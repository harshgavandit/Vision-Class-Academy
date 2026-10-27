import { sharedOpenGraph } from "@/data/site-config";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroSlider } from "@/components/hero-slider";
import { SectionHeading } from "@/components/section-heading";
import { ResultsShowcase } from "@/components/results-showcase";
import { CourseCard } from "@/components/course-card";
import { FacultyCard } from "@/components/faculty-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { GalleryGrid } from "@/components/gallery-grid";
import { FaqList } from "@/components/faq-list";
import { AdmissionCta } from "@/components/cta";
import { Icon } from "@/components/icon";
import { courses } from "@/data/courses";
import { faculty } from "@/data/faculty";
import { testimonials } from "@/data/testimonials";
import { admissionSteps, learningApproach } from "@/data/presentation";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { ...sharedOpenGraph,
    title: "Vision Science Academy | A clear path for your ambitions",
    description:
      "Explore Class 10, Class 11–12 Science, JEE, NEET and foundation courses. Start your next chapter with an informed counselling conversation.",
    url: "/",
  },
};
const featuredSlugs = [
  "class-11-science",
  "jee-main",
  "neet",
  "class-10",
  "foundation-course",
  "crash-course",
];
const featuredCourses = featuredSlugs.flatMap(
  (slug) => courses.find((course) => course.slug === slug) ?? [],
);

export default function Home() {
  return (
    <>
      <HeroSlider />
      <div className="border-b border-slate-200 bg-white">
        <div className="container-page grid grid-cols-2 divide-x divide-slate-100 sm:grid-cols-3 lg:grid-cols-6">
          {[
            ["Class 10", "/courses/class-10"],
            ["11th & 12th Science", "/courses/class-11-science"],
            ["JEE Main & Advanced", "/courses/jee-main"],
            ["NEET", "/courses/neet"],
            ["Foundation", "/courses/foundation-course"],
            ["Crash courses", "/courses/crash-course"],
          ].map(([title, href]) => (
            <Link key={href} href={href} className="pathway-link">
              <Icon name="book" className="h-4 w-4 shrink-0 text-blue-600" />
              {title}
            </Link>
          ))}
        </div>
      </div>
      <ResultsShowcase compact />
      <section className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative rounded-3xl bg-[#edf3fb] p-6 sm:p-10">
            <span className="absolute right-6 top-6 rounded-full bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-blue-700">
              The Vision approach
            </span>
            <Image
              src="/images/learning-lab.svg"
              alt="Illustration of books and science tools representing academic exploration"
              width={560}
              height={460}
              className="h-auto w-full"
            />
            <div className="relative -mt-6 flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                <Icon name="spark" className="h-6 w-6" />
              </span>
              <p className="text-sm font-bold leading-6 text-navy">
                More clarity today.
                <br />
                <span className="font-normal text-slate-500">
                  More direction for what comes next.
                </span>
              </p>
            </div>
          </div>
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              Welcome to Vision Science Academy
            </p>
            <h2 className="heading mt-4">
              Where your next
              <br className="hidden sm:block" /> chapter takes shape.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-500">
              Choosing a course is an important decision. Start by understanding
              your options, the subjects you want to explore and the preparation
              your goals call for.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-500">
              Explore programmes for school, science and competitive entrances.
              Then bring your questions to a counselling conversation with the
              academy.
            </p>
            <div className="my-7 grid gap-3 sm:grid-cols-2">
              {[
                "School & entrance pathways",
                "Student & parent counselling",
                "Course-specific guidance",
                "Clear admission conversations",
              ].map((text) => (
                <p
                  key={text}
                  className="flex items-start gap-2 text-sm font-semibold text-slate-700"
                >
                  <Icon
                    name="check"
                    className="h-4 w-4 shrink-0 text-blue-600"
                  />
                  {text}
                </p>
              ))}
            </div>
            <Link href="/about" className="btn-primary">
              Get to know the academy
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <section className="section bg-slate-50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Find your learning path"
            title="A programme for your next step."
            description="From school foundations to entrance preparation, explore what fits your academic goals."
            href="/courses"
            linkLabel="View all courses"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
          <p className="mt-7 text-center text-xs leading-6 text-slate-500">
            Course availability, batch timings and fees are confirmed directly
            with the academy.
          </p>
        </div>
      </section>
      <section className="section bg-navy">
        <div className="container-page">
          <SectionHeading
            eyebrow="Learning with direction"
            title="Small steps. A stronger foundation."
            description="Use your counselling meeting to understand how each part of preparation supports your goals."
            centered
            light
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {learningApproach.map((item, index) => (
              <article
                className="rounded-2xl border border-white/10 bg-white/[.03] p-6"
                key={item.title}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-9 text-center">
            <Link
              href="/methodology"
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-300"
            >
              Explore the teaching approach
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="The people behind the learning"
            title="Meet your future guides."
            description="Get to know the educators, their subjects and their approach before choosing your course."
            href="/faculty"
            linkLabel="Explore faculty"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {faculty.slice(0, 3).map((member) => (
              <FacultyCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-[#f1f6fd]">
        <div className="container-page">
          <SectionHeading
            eyebrow="Student & parent voices"
            title="The experiences that matter."
            description="A place for first-hand perspectives, shared with permission."
            href="/testimonials"
            linkLabel="Explore testimonials"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.slice(0, 2).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="A closer look"
            title="Picture the place you’ll learn."
            description="Explore our gallery space. Actual classroom photographs will appear once they are available and cleared for publication."
            href="/gallery"
            linkLabel="Visit the gallery"
          />
          <div className="mt-10">
            <GalleryGrid limit={3} showFilters={false} />
          </div>
        </div>
      </section>
      <section className="section border-y border-slate-100 bg-slate-50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Admissions, made clearer"
            title="From a question to a clear next step."
            centered
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {admissionSteps.map((step) => (
              <article
                key={step.number}
                className="relative rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-sm font-extrabold text-blue-700">
                  {step.number}
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section !pb-0">
        <div className="container-page grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              Questions, answered
            </p>
            <h2 className="heading">
              A little more clarity
              <br className="hidden sm:block" /> before you decide.
            </h2>
            <p className="mt-5 max-w-sm text-base leading-7 text-slate-500">
              Start with the common questions. For anything more specific, we’re
              a conversation away.
            </p>
            <Link
              href="/faq"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700"
            >
              View all FAQs
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="-mt-8">
            <FaqList />
          </div>
        </div>
      </section>
      <AdmissionCta />
    </>
  );
}
