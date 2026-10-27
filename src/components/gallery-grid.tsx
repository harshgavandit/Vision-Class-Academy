"use client";

import { useState } from "react";
import { ContentImage } from "@/components/content-image";
import { galleryImages, galleryPreviews, type GalleryPreview } from "@/data/gallery";

function GalleryIllustration({ scene }: { scene: GalleryPreview["scene"] }) {
  return (
    <svg viewBox="0 0 480 320" fill="none" className="h-full w-full" aria-hidden="true">
      <path fill="#eaf1fb" d="M0 0h480v320H0z" />
      <circle cx="410" cy="48" r="100" fill="#dce8f9" />
      <path d="M0 264h480v56H0z" fill="#d7e3f4" />
      {scene === "classroom" && <>
        <rect x="100" y="58" width="280" height="143" rx="10" fill="#0b1f3a" />
        <rect x="111" y="69" width="258" height="121" rx="4" fill="#16395c" />
        <path d="M145 105h103m-103 22h73m-73 23h142" stroke="#c6d8f2" strokeWidth="5" strokeLinecap="round" />
        <path d="m286 143 26-39 26 39h-52Z" stroke="#f5b942" strokeWidth="4" strokeLinejoin="round" />
        <path d="M58 236h151m61 0h151M80 245v48m107-48v48m105-48v48m107-48v48" stroke="#567398" strokeWidth="11" strokeLinecap="round" />
        <path d="M140 211h71m58 0h71" stroke="#9bb4d3" strokeWidth="8" strokeLinecap="round" />
      </>}
      {scene === "books" && <>
        <rect x="80" y="68" width="117" height="157" rx="8" fill="#fff" stroke="#cad9ed" strokeWidth="4" />
        <path d="M104 96h69m-69 22h53m-53 22h69" stroke="#a7bfdd" strokeWidth="5" strokeLinecap="round" />
        <path d="M105 203h160v31H105z" fill="#1267d6" />
        <path d="M119 174h137v29H119z" fill="#f5b942" />
        <path d="M110 146h126v28H110z" fill="#3b728f" />
        <path d="M65 239h350m-322 5v49m294-49v49" stroke="#567398" strokeWidth="10" strokeLinecap="round" />
        <path d="M333 233v-78l-35-43m35 43 32-43" stroke="#567398" strokeWidth="7" strokeLinecap="round" />
        <path d="m274 112 28-31 26 31h-54Z" fill="#1267d6" />
        <rect x="314" y="220" width="40" height="12" rx="6" fill="#1267d6" />
      </>}
      {scene === "facility" && <>
        <rect x="93" y="60" width="120" height="142" rx="7" fill="#fff" stroke="#cad9ed" strokeWidth="4" />
        <path d="M153 63v137M95 129h116" stroke="#cad9ed" strokeWidth="4" />
        <path d="M118 95h22m34 64h20" stroke="#dbe8fa" strokeWidth="9" strokeLinecap="round" />
        <rect x="255" y="77" width="113" height="61" rx="7" fill="#1267d6" />
        <path d="M278 99h67m-67 16h42" stroke="#d6e7ff" strokeWidth="5" strokeLinecap="round" />
        <rect x="181" y="199" width="218" height="58" rx="7" fill="#9cb4d2" />
        <rect x="170" y="190" width="240" height="14" rx="5" fill="#0b1f3a" />
        <path d="M107 248v-74m0 36-20-22m20 8 20-26" stroke="#488e83" strokeWidth="7" strokeLinecap="round" />
        <path d="M88 233h38l-5 31H93l-5-31Z" fill="#f5b942" />
      </>}
    </svg>
  );
}

export function GalleryGrid({ limit, showFilters = false }: { limit?: number; showFilters?: boolean }) {
  const [category, setCategory] = useState("All");
  const hasPhotos = galleryImages.length > 0;
  const items = hasPhotos ? galleryImages : galleryPreviews;
  const categories = ["All", ...Array.from(new Set(items.map((item) => item.category)))];
  const filteredItems = items.filter((item) => category === "All" || item.category === category);
  const visibleItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <div>
      {showFilters && <div className="mb-7 flex flex-wrap gap-2" role="group" aria-label="Filter gallery by category">
        {categories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} className={`rounded-full border px-5 py-2.5 text-sm font-bold transition ${category === item ? "border-[#0b1f3a] bg-[#0b1f3a] text-white" : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700"}`}>{item}</button>)}
      </div>}
      <p className="sr-only" role="status" aria-live="polite">Showing {visibleItems.length} {hasPhotos ? "photographs" : "illustrative layout previews"}{category === "All" ? "" : ` in ${category}`}.</p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item) => (
          <figure key={item.id} className="group overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white shadow-[0_8px_35px_-20px_#0b1f3a35]">
            <div className="relative aspect-[3/2] overflow-hidden bg-[#edf3fb]">
              {"src" in item ? <ContentImage src={item.src} alt={item.alt} fallbackLabel="Academy photograph unavailable" fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition duration-500 motion-safe:group-hover:scale-105" /> : <GalleryIllustration scene={item.scene} />}
              {!("src" in item) && <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">Illustration · Photo pending</span>}
            </div>
            <figcaption className="flex flex-wrap items-center justify-between gap-2 px-5 py-4">
              <p className="text-sm font-bold text-[#0b1f3a]">{item.title}</p>
              <span className="text-xs text-slate-500">{item.category}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      {!hasPhotos && <p className="mt-5 text-xs leading-6 text-slate-500">These original illustrations preview the gallery layout. Actual academy photographs will be added after verification and permission.</p>}
    </div>
  );
}
