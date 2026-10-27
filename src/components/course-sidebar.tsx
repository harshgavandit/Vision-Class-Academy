import Link from "next/link";
import { ContentImage } from "@/components/content-image";
import { Icon } from "@/components/icon";
import { courseAdmissionPlaceholders, type Course } from "@/data/courses";

export function CourseSidebar({
  course,
  showDetailsLink = false,
}: {
  course: Course;
  showDetailsLink?: boolean;
}) {
  const admission = { ...courseAdmissionPlaceholders, ...course.admission };
  const details = [
    ["Duration", admission.duration],
    ["Batch timings", course.format],
    ["Fees", admission.fees],
    ["Batch size", admission.batchSize],
  ];

  return (
    <aside
      className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:sticky lg:top-28"
      aria-label={`${course.title} course information`}
    >
      <div className="relative aspect-[16/10] bg-blue-50">
        <ContentImage
          src={course.image}
          alt={course.imageAlt}
          fallbackSrc="/images/learning-lab.svg"
          fallbackLabel={`${course.title} illustration unavailable`}
          fill
          sizes="(max-width: 1023px) 100vw, 320px"
          className="object-cover"
        />
      </div>
      <div className="space-y-3 border-b border-slate-100 p-5">
        <Link href="/contact" className="btn-primary w-full">
          Contact now
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
        <Link
          href="/book-counselling"
          className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-bold text-blue-700 transition hover:border-blue-500 hover:bg-blue-50"
        >
          <Icon name="calendar" className="h-4 w-4" />
          Book counselling
        </Link>
      </div>
      <div className="p-5">
        <h2 className="text-base font-extrabold text-navy">
          This course includes
        </h2>
        <ul className="mt-4 space-y-3">
          {course.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-2.5 text-sm leading-6 text-slate-600"
            >
              <Icon
                name="check"
                className="mt-1 h-4 w-4 shrink-0 text-blue-700"
              />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-slate-100 px-5 pb-5 pt-4">
        <h2 className="text-sm font-bold text-navy">Confirm before joining</h2>
        <dl className="mt-3 divide-y divide-slate-100">
          {details.map(([label, value]) => (
            <div key={label} className="py-3">
              <dt className="text-xs font-semibold text-slate-500">{label}</dt>
              <dd className="mt-1 break-words text-sm leading-6 text-slate-700">
                {value}
              </dd>
            </div>
          ))}
        </dl>
        {showDetailsLink && (
          <Link
            href={`/courses/${course.slug}`}
            className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900"
          >
            Open course page
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        )}
      </div>
    </aside>
  );
}
