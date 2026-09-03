type ExperienceItemProps = {
  dates: string;
  title: string;
  organization: string;
  description: string;
};

export default function ExperienceItem({
  dates,
  title,
  organization,
  description,
}: ExperienceItemProps) {
  return (
    <article className="grid gap-4 border-t border-slate-800 py-8 md:grid-cols-[180px_1fr] md:gap-10">
      <p className="font-mono text-sm text-cyan-400">{dates}</p>

      <div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>

        <p className="mt-1 text-sm font-medium text-slate-300">
          {organization}
        </p>

        <p className="mt-4 max-w-3xl leading-7 text-slate-400">
          {description}
        </p>
      </div>
    </article>
  );
}