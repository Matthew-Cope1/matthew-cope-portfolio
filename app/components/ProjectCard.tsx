type ProjectCardProps = {
  title: string;
  technology: string;
  description: string;
  highlights: string[];
};

export default function ProjectCard({
  title,
  technology,
  description,
  highlights,
}: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
        {technology}
      </p>

      <h3 className="mt-3 text-2xl font-semibold text-white">{title}</h3>

      <p className="mt-4 leading-7 text-slate-400">{description}</p>

      <ul className="mt-6 space-y-3">
        {highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3 text-sm text-slate-300">
            <span className="text-cyan-400">✓</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}