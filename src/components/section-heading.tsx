import Link from "next/link";
import { Icon } from "./icon";
type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  centered?: boolean;
  light?: boolean;
};
export function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  linkLabel,
  centered = false,
  light = false,
}: Props) {
  return (
    <div
      className={`section-heading ${centered ? "mx-auto max-w-3xl text-center" : "flex flex-col justify-between gap-5 md:flex-row md:items-end"}`}
    >
      <div>
        <p className={`eyebrow ${light ? "!text-blue-200" : ""}`}>
          <span className="eyebrow-line" />
          {eyebrow}
        </p>
        <h2 className={`heading ${light ? "!text-white" : ""}`}>{title}</h2>
        {description && (
          <p
            className={`mt-4 max-w-2xl text-base leading-7 ${light ? "text-slate-300" : "text-slate-500"}`}
          >
            {description}
          </p>
        )}
      </div>
      {href && (
        <Link
          href={href}
          className={`inline-flex shrink-0 items-center gap-2 self-start text-sm font-bold ${light ? "text-amber-300" : "text-blue-700"} md:self-auto`}
        >
          {linkLabel}
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
