import { ContentImage } from "@/components/content-image";
import type { Faculty } from "@/data/faculty";

export function FacultyCard({ member, headingLevel = 3 }: { member: Faculty; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const showPhoto = member.verified && member.photo;

  return (
    <article className="group h-full overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white shadow-[0_8px_35px_-20px_#0b1f3a35] transition duration-300 motion-safe:hover:-translate-y-1 hover:border-blue-200">
      <div className="relative flex aspect-[5/4] items-center justify-center overflow-hidden bg-[#edf3fb]">
        <div className="absolute -right-12 -top-14 h-52 w-52 rounded-full border-[26px] border-white/50" aria-hidden="true" />
        <div className="absolute -bottom-14 -left-10 h-40 w-40 rounded-full border-[20px] border-blue-100/70" aria-hidden="true" />
        {showPhoto ? (
          <ContentImage src={showPhoto.src} alt={showPhoto.alt} fallbackLabel="Faculty photograph unavailable" fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover object-top" />
        ) : (
          <div className="relative flex flex-col items-center text-slate-500">
            <svg viewBox="0 0 96 96" fill="none" className="h-24 w-24 text-blue-300" aria-hidden="true">
              <circle cx="48" cy="31" r="16" stroke="currentColor" strokeWidth="2" />
              <path d="M17 80c2-17 13-27 31-27s29 10 31 27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="m25 18 23-9 23 9-23 9-23-9Zm46 0v15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
            <span className="mt-2 text-xs font-semibold">[Faculty photograph required]</span>
          </div>
        )}
        {!member.verified && <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">Profile preview</span>}
        <span className="absolute bottom-0 left-6 h-1 w-14 rounded-t-full bg-[#f5b942]" aria-hidden="true" />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-1.5">
          {member.subjects.map((subject) => <span key={subject} className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-800">{subject}</span>)}
        </div>
        <Heading className="mt-4 text-xl font-extrabold text-[#0b1f3a]">{member.name}</Heading>
        <p className="mt-1.5 text-sm leading-6 text-slate-600">{member.qualification}</p>
        <p className="mt-4 border-t border-slate-100 pt-4 text-sm font-semibold text-slate-600">{member.experience}</p>
        {member.introduction && member.verified && <p className="mt-3 text-sm leading-6 text-slate-600">{member.introduction}</p>}
        {!member.verified && <p className="mt-3 text-xs leading-5 text-slate-500">Name, photograph and credentials await verification.</p>}
      </div>
    </article>
  );
}
