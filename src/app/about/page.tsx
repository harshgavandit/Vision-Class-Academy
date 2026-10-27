import { sharedOpenGraph } from "@/data/site-config";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { AdmissionCta } from "@/components/cta";
import { SectionHeading } from "@/components/section-heading";
import { Icon } from "@/components/icon";
import { learningApproach } from "@/data/presentation";
export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Vision Science Academy’s student-centred academic approach.",
  alternates: { canonical: "/about" },
  openGraph: { ...sharedOpenGraph,
    title: "About Vision Science Academy",
    description:
      "Explore the academy, its academic pathways and your next step.",
    url: "/about",
  },
};
export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About the academy"
        title="A clear vision for what comes next."
        description="School, science and entrance preparation. Explore the academy, ask your questions and make an informed choice."
      />
      <section className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div className="rounded-3xl bg-[#edf3fb] p-5 sm:p-9">
            <Image
              src="/images/learning-lab.svg"
              width={560}
              height={460}
              alt="Original academic illustration of science tools, books and a graduation cap"
              className="h-auto w-full"
            />
          </div>
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              Welcome to Vision Science Academy
            </p>
            <h2 className="heading">Your goals are a good place to start.</h2>
            <p className="mt-5 text-base leading-8 text-slate-500">
              Vision Science Academy is a coaching class for students exploring
              school and competitive entrance preparation, with programmes for
              Class 10, Class 11–12 Science, JEE, NEET, foundation and crash
              courses.
            </p>
            <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                Academy profile placeholder
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-500">
                [Verified academy history, leadership, mission and facilities to
                be added]
              </p>
            </div>
            <Link href="/book-counselling" className="btn-primary mt-7">
              Let’s discuss your next step
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <section className="section bg-slate-50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our starting point"
            title="Learning with purpose and perspective."
            centered
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {learningApproach.map((item) => (
              <article key={item.title} className="card">
                <Icon name={item.icon} className="h-8 w-8 text-blue-600" />
                <h3 className="mt-5 text-lg font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <AdmissionCta />
    </>
  );
}
