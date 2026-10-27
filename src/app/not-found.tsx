import Link from "next/link";
import { Icon } from "@/components/icon";
export default function NotFound() {
  return (
    <section className="section">
      <div className="container-page max-w-2xl text-center">
        <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-50 text-blue-700">
          <Icon name="book" className="h-10 w-10" />
        </span>
        <p className="eyebrow mt-7">404 · Page not found</p>
        <h1 className="heading">Let’s get you back on course.</h1>
        <p className="copy mx-auto">
          This page may have moved or the link may be outdated. Your next step
          is still here.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            Return home
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <Link href="/courses" className="btn-secondary">
            Explore courses
          </Link>
        </div>
      </div>
    </section>
  );
}
