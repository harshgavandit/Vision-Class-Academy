"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { CourseExplanation } from "@/components/course-explanation";
import { CourseSidebar } from "@/components/course-sidebar";
import type { Course } from "@/data/courses";

export function CourseExplorer({ courses }: { courses: readonly Course[] }) {
  const [selectedSlug, setSelectedSlug] = useState(courses[0]?.slug);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();
  const selectedCourse =
    courses.find((course) => course.slug === selectedSlug) ?? courses[0];

  function navigateTabs(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % courses.length;
    else if (event.key === "ArrowLeft")
      next = (index - 1 + courses.length) % courses.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = courses.length - 1;
    else return;
    event.preventDefault();
    setSelectedSlug(courses[next].slug);
    tabs.current[next]?.focus();
  }

  if (!selectedCourse)
    return (
      <p className="card text-sm text-slate-600">
        Course details will be available here once confirmed.
      </p>
    );

  return (
    <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_320px]">
      <div className="min-w-0 rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div
          role="tablist"
          aria-label="Choose a course to read its overview"
          className="grid grid-cols-2 gap-2 border-b border-slate-100 p-4 sm:grid-cols-4 sm:p-5"
        >
          {courses.map((course, index) => (
            <button
              key={course.slug}
              ref={(element) => {
                tabs.current[index] = element;
              }}
              type="button"
              role="tab"
              id={`${id}-tab-${course.slug}`}
              aria-controls={`${id}-panel-${course.slug}`}
              aria-selected={selectedCourse.slug === course.slug}
              tabIndex={selectedCourse.slug === course.slug ? 0 : -1}
              onClick={() => setSelectedSlug(course.slug)}
              onKeyDown={(event) => navigateTabs(event, index)}
              className={`flex min-h-12 items-center justify-center rounded-lg px-3 py-3 text-center text-xs font-bold leading-5 transition sm:text-sm ${selectedCourse.slug === course.slug ? "bg-blue-700 text-white shadow-sm" : "bg-slate-900 text-white hover:bg-slate-700"}`}
            >
              {course.title}
            </button>
          ))}
        </div>
        {courses.map((course) => (
          <div
            key={course.slug}
            id={`${id}-panel-${course.slug}`}
            role="tabpanel"
            aria-labelledby={`${id}-tab-${course.slug}`}
            hidden={selectedCourse.slug !== course.slug}
            tabIndex={0}
            className="rounded-b-2xl p-5 sm:p-8"
          >
            <CourseExplanation course={course} />
          </div>
        ))}
      </div>
      <CourseSidebar
        key={selectedCourse.slug}
        course={selectedCourse}
        showDetailsLink
      />
    </div>
  );
}
