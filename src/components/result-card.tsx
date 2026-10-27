"use client";

import Image from "next/image";
import { useState } from "react";
import type { StudentResult, PublishedStudentResult } from "@/data/results";

type ResultMetric = { label: string; value: string };

function getVerifiedMetrics(result: PublishedStudentResult): ResultMetric[] {
  const metrics: ResultMetric[] = [];

  if (result.percentage !== undefined) {
    metrics.push({ label: "Percentage", value: `${result.percentage}%` });
  }
  if (result.percentile !== undefined) {
    metrics.push({ label: "Percentile", value: `${result.percentile}` });
  }
  if (result.marks !== undefined) {
    metrics.push({ label: "Marks", value: `${result.marks.scored} / ${result.marks.total}` });
  }
  if (result.rank !== undefined) {
    metrics.push({ label: result.rank.scope, value: `#${result.rank.value.toLocaleString("en-IN")}` });
  }

  return metrics;
}

function StudentPhotoPlaceholder({ preview }: { preview: boolean }) {
  return (
    <div className="relative flex h-full w-full items-end justify-center overflow-hidden bg-gradient-to-br from-[#102d55] to-[#1e518a]">
      <div aria-hidden="true" className="absolute -right-10 -top-16 h-56 w-56 rounded-full border-[30px] border-white/[0.045]" />
      <div aria-hidden="true" className="absolute bottom-0 left-0 h-1 w-full bg-amber-300" />
      <svg aria-hidden="true" viewBox="0 0 200 200" className="h-44 w-44 text-blue-200/40">
        <circle cx="100" cy="68" r="33" fill="currentColor" />
        <path d="M28 200v-28c0-38 31-65 72-65s72 27 72 65v28" fill="currentColor" />
      </svg>
      <span className="absolute bottom-9 left-0 w-full px-2 text-center text-[10px] font-semibold uppercase tracking-wider text-blue-50">
        {preview ? "[Verified photograph]" : "Photo not shared"}
      </span>
    </div>
  );
}

export function ResultCard({ result }: { result: StudentResult }) {
  const [photoFailed, setPhotoFailed] = useState(false);
  const preview = result.kind === "template";
  const metrics = result.kind === "verified"
    ? getVerifiedMetrics(result)
    : [result.primaryMetric, result.secondaryMetric];
  const photo = result.kind === "verified" ? result.photo : undefined;
  const primaryMetric = metrics[0];
  const secondaryMetrics = metrics.slice(1);

  return (
    <article className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-[0_12px_40px_-24px_rgba(15,41,81,0.4)] transition duration-300 motion-safe:hover:-translate-y-1 hover:shadow-[0_20px_45px_-24px_rgba(15,41,81,0.5)]">
      <div className="relative h-52 overflow-hidden bg-[#102d55]">
        {photo && !photoFailed ? (
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) 45vw, 360px"
            className="h-full w-full object-cover object-top transition duration-500 motion-safe:group-hover:scale-[1.03]"
            onError={() => setPhotoFailed(true)}
          />
        ) : <StudentPhotoPlaceholder preview={preview} />}
        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-2 p-3">
          <span className="rounded-md bg-[#102d55]/95 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
            {result.category}
          </span>
          <span aria-hidden="true" className="rounded-md bg-amber-300 px-2 py-1.5 text-[10px] font-extrabold tracking-wider text-[#102d55]">VSA</span>
        </div>
      </div>

      <div className="relative flex flex-1 flex-col px-4 pb-4 text-center sm:px-5">
        {primaryMetric && (
          <dl className="relative z-10 mx-auto -mt-7 w-full max-w-[250px] rounded-xl border-[3px] border-white bg-[#1267d6] px-3 py-2 text-white shadow-lg shadow-blue-900/10">
            <dt className="text-[9px] font-bold uppercase tracking-[0.16em] text-blue-100">{primaryMetric.label}</dt>
            <dd className={`mt-0.5 break-words font-extrabold leading-tight tracking-tight ${preview ? "text-lg" : "text-2xl"}`}>{primaryMetric.value}</dd>
          </dl>
        )}
        <h3 className="mt-4 break-words text-lg font-extrabold uppercase leading-6 tracking-wide text-[#102d55]">{result.studentName}</h3>
        <p className="mt-1.5 text-xs font-medium leading-5 text-slate-600">{result.exam}</p>
        <p className="mt-1 text-[11px] font-semibold text-slate-500">{result.academicYear}</p>
        {secondaryMetrics.length > 0 && (
          <dl className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-2 border-t border-slate-100 pt-3">
            {secondaryMetrics.map((metric, index) => (
              <div key={`${metric.label}-${index}`} className="flex min-w-0 flex-wrap justify-center gap-x-1 text-xs leading-5">
                <dt className="text-slate-500">{metric.label}:</dt>
                <dd className="break-words font-bold text-slate-800">{metric.value}</dd>
              </div>
            ))}
          </dl>
        )}
        <p className={`mt-3 rounded-md px-2 py-1.5 text-[9px] font-semibold leading-4 ${preview ? "border border-dashed border-slate-300 bg-slate-50 text-slate-500" : "bg-blue-50 text-blue-800"}`}>
          {preview ? "Layout preview · not a student result" : "Verified result · published with permission"}
        </p>
      </div>
    </article>
  );
}
