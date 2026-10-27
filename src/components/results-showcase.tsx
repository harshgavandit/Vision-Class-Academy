import Link from "next/link";
import { ResultsFilter } from "@/components/results-filter";
import {
  getPublishableResults,
  resultCategories,
  resultTemplates,
} from "@/data/results";

type ResultsShowcaseProps = { compact?: boolean };

export function ResultsShowcase({ compact = false }: ResultsShowcaseProps) {
  const verifiedResults = getPublishableResults();
  const showingTemplates = verifiedResults.length === 0;
  const source = showingTemplates ? resultTemplates : verifiedResults;

  return (
    <section id="results" className={`section ${compact ? "bg-[#f1f6fd]" : "bg-white"}`} aria-labelledby="achievements-heading">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-2xl">
            <p className="eyebrow">Student achievements</p>
            <h2 id="achievements-heading" className="heading">Every achievement has a story.</h2>
            <p className="copy">
              {showingTemplates
                ? "A dedicated space to celebrate student effort. Verified student results and photographs will appear here when they are available with permission."
                : "Explore student achievements across school and entrance examinations, published after verification and with permission."}
            </p>
          </div>
          {compact && (
            <Link href="/results" className="inline-flex items-center gap-2 rounded-lg py-2 text-sm font-bold text-blue-700 hover:text-blue-900">
              Explore achievements <span aria-hidden="true">↗</span>
            </Link>
          )}
        </div>

        {showingTemplates && (
          <div className="mt-7 flex items-start gap-3 rounded-2xl border border-blue-100 bg-white/80 px-4 py-3.5 text-sm text-slate-600">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="9" /><path d="M12 11v6m0-10v1" />
            </svg>
            <p className="leading-6"><strong className="font-semibold text-slate-800">Result template previews.</strong> These cards demonstrate the presentation layout. They do not represent actual students, marks or ranks.</p>
          </div>
        )}

        <ResultsFilter compact={compact} showingTemplates={showingTemplates} categories={resultCategories} source={source} />
      </div>
    </section>
  );
}
