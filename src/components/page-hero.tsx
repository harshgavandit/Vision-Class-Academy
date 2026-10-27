import Link from "next/link";
import { Icon } from "./icon";
type Props = { eyebrow: string; title: string; description: string };
export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy py-12 sm:py-16">
      <Icon
        name="atom"
        className="absolute -right-12 -top-12 h-80 w-80 text-white/[.035]"
      />
      <div className="container-page relative">
        <nav
          aria-label="Breadcrumb"
          className="mb-7 flex items-center gap-2 text-xs text-slate-400"
        >
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-200">{eyebrow}</span>
        </nav>
        <p className="eyebrow !text-amber-300">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
          {description}
        </p>
      </div>
    </section>
  );
}
