import { sharedOpenGraph } from "@/data/site-config";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CourseCard } from "@/components/course-card";
import { CourseExplanation } from "@/components/course-explanation";
import { CourseSidebar } from "@/components/course-sidebar";
import { ContactActions } from "@/components/cta";
import { courses } from "@/data/courses";

type CoursePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);
  if (!course) return { title: "Course not found" };
  return {
    title: course.title,
    description: course.summary,
    alternates: { canonical: `/courses/${course.slug}` },
    openGraph: {
      ...sharedOpenGraph,
      title: `${course.title} | Vision Science Academy`,
      description: course.summary,
      url: `/courses/${course.slug}`,
    },
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);
  if (!course) return notFound();
  const relatedCourses = courses.filter(
    (item) => item.slug !== slug && item.category === course.category,
  );

  return (
    <>
      <section className="overflow-hidden border-b border-slate-200 bg-[#edf3fb] py-12 sm:py-16">
        <div className="container-page">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 text-sm font-semibold text-slate-600"
          >
            <Link href="/courses" className="text-blue-700 hover:underline">
              All courses
            </Link>
            <span className="mx-3" aria-hidden="true">
              /
            </span>
            <span aria-current="page">{course.title}</span>
          </nav>
          <div className="max-w-3xl">
            <p className="eyebrow">{course.category}</p>
            <h1 className="heading">{course.title}</h1>
            <p className="mt-4 text-sm font-bold text-blue-700">
              {course.audience}
            </p>
            <p className="copy">{course.summary}</p>
            <Link href="/book-counselling" className="btn-primary mt-7">
              Discuss this course{" "}
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-page grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="rounded-[1.25rem] border border-slate-200 bg-white p-7 sm:p-9">
            <CourseExplanation course={course} />
            <Link
              href="/methodology"
              className="mt-8 inline-flex text-sm font-bold text-blue-700 hover:text-blue-900"
            >
              Learn about our teaching approach{" "}
              <span className="ml-2" aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>
          <CourseSidebar course={course} />
        </div>
      </section>
      {relatedCourses.length > 0 && (
        <section className="section border-t border-slate-200 bg-white">
          <div className="container-page">
            <p className="eyebrow">Explore further</p>
            <h2 className="heading">Related learning paths</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedCourses.map((item) => (
                <CourseCard key={item.slug} course={item} />
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="border-t border-slate-200 bg-blue-50 py-10">
        <div className="container-page">
          <h2 className="text-xl font-extrabold text-[#0b1f3a]">
            Have a question about {course.title}?
          </h2>
          <ContactActions />
        </div>
      </section>
    </>
  );
}
