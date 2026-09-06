import Link from "next/link";
import { notFound } from "next/navigation";
import CaseStudySection from "../../components/CaseStudySection";
import { getSkill, getSkillSlugs } from "../../data/skills";
import Navbar from "../../components/Navbar";

export function generateStaticParams() {
  return getSkillSlugs().map((slug) => ({
    slug,
  }));
}

type SkillPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function SkillPage({ params }: SkillPageProps) {
  const { slug } = await params;
  const skill = getSkill(slug);

  if (!skill) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl py-20">
        <Link
          href="/#skills"
          className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
        >
          ← Back to skills
        </Link>

        <p className="mt-10 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Technical Skill
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight">
          {skill.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          {skill.summary}
        </p>

        {skill.caseStudies?.map((caseStudy, index) => (
          <CaseStudySection key={caseStudy.title} caseStudy={caseStudy} id={`case-study-${index}`} />
        ))}

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Technologies</h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {skill.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>


      </section>
    </main>
  );
}
