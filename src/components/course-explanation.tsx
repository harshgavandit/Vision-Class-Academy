import type { Course } from "@/data/courses";

export function CourseExplanation({ course }: { course: Course }) {
  return (
    <div className="space-y-7">
      <section aria-labelledby={`${course.slug}-overview`}>
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-blue-700">
          {course.title}
        </p>
        <h2
          id={`${course.slug}-overview`}
          className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl"
        >
          Course Overview
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
          {course.explanation.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section aria-labelledby={`${course.slug}-highlights`}>
        <h3
          id={`${course.slug}-highlights`}
          className="text-lg font-bold text-navy sm:text-xl"
        >
          Key Highlights
        </h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600 marker:text-blue-700 sm:text-[15px]">
          {course.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby={`${course.slug}-audience`}>
        <h3
          id={`${course.slug}-audience`}
          className="text-lg font-bold text-navy sm:text-xl"
        >
          Who Should Enrol
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          This course may be useful for:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600 marker:text-blue-700 sm:text-[15px]">
          {course.explanation.whoShouldEnrol.map((student) => (
            <li key={student}>{student}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby={`${course.slug}-outcomes`}>
        <h3
          id={`${course.slug}-outcomes`}
          className="text-lg font-bold text-navy sm:text-xl"
        >
          Learning Outcomes
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Skills to work towards through study and practice:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600 marker:text-blue-700 sm:text-[15px]">
          {course.explanation.learningOutcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
