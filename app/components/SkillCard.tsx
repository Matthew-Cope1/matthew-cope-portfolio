import Link from "next/link";

type SkillCardProps = {
  title: string;
  description: string;
  technologies: string[];
  href: string;
};

export default function SkillCard({
  title,
  description,
  technologies,
  href,
}: SkillCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-400"
    >
      <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-400">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-400">{description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
          >
            {technology}
          </span>
        ))}
      </div>

      <p className="mt-6 text-sm font-semibold text-cyan-400">
        Explore this skill →
      </p>
    </Link>
  );
}