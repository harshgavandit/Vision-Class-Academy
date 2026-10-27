"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { ResultCard } from "@/components/result-card";
import type { ResultCategory, StudentResult } from "@/data/results";

type ResultsFilterProps = {
  compact: boolean;
  showingTemplates: boolean;
  categories: readonly ResultCategory[];
  source: readonly StudentResult[];
};

export function ResultsFilter({ compact, showingTemplates, categories, source }: ResultsFilterProps) {
  const [category, setCategory] = useState<ResultCategory | "All">("All");
  const [year, setYear] = useState("All years");
  const statusId = useId();
  const yearId = useId();
  const years = [...new Set(source.map((result) => result.academicYear))].sort().reverse();
  const filteredResults = source.filter((result) =>
    (category === "All" || result.category === category) &&
    (year === "All years" || result.academicYear === year),
  );
  const visibleResults = compact ? filteredResults.slice(0, 3) : filteredResults;

  return (
    <>
      <div className="mb-7 mt-7 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2" role="group" aria-label={showingTemplates ? "Filter result template previews by exam" : "Filter student results by exam"}>
          {(["All", ...categories] as const).map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              aria-controls={`${statusId}-cards`}
              onClick={() => setCategory(item)}
              className={`rounded-full border px-3.5 py-2.5 text-xs font-semibold transition sm:text-sm ${category === item
                ? "border-[#102d55] bg-[#102d55] text-white shadow-sm"
                : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-800"}`}
            >
              {item === "All" ? "All examinations" : item}
            </button>
          ))}
        </div>
        {(
          <div className="flex items-center gap-2">
            <label htmlFor={yearId} className="text-xs font-semibold text-slate-500">{showingTemplates ? "Year template" : "Academic year"}</label>
            <select id={yearId} value={year} onChange={(event) => setYear(event.target.value)} className="min-h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700">
              <option>All years</option>
              {years.map((academicYear) => <option key={academicYear}>{academicYear}</option>)}
            </select>
          </div>
        )}
      </div>

      <p role="status" aria-live="polite" aria-atomic="true" className="sr-only">
        {filteredResults.length} {showingTemplates ? "template previews" : "verified results"} found. {compact && filteredResults.length > 3 ? "Showing the first three." : ""}
      </p>
      <div id={`${statusId}-cards`} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleResults.map((result) => <ResultCard key={result.id} result={result} />)}
      </div>

      {filteredResults.length === 0 && (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-7 text-center sm:p-12">
          <h3 className="text-xl font-bold text-slate-900">No results for this selection yet.</h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">Try another examination or year to view the available results.</p>
          <button type="button" className="btn-secondary mt-5" onClick={() => { setCategory("All"); setYear("All years"); }}>Clear filters</button>
        </div>
      )}

      {compact && filteredResults.length > visibleResults.length && (
        <p className="mt-7 text-center text-sm text-slate-600">
          Showing {visibleResults.length} of {filteredResults.length} {showingTemplates ? "template previews" : "verified results"}.{" "}
          <Link href="/results" className="font-semibold text-blue-700 underline underline-offset-4">View the full showcase</Link>
        </p>
      )}
    </>
  );
}
