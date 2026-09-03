export default function Footer() {
  return (
    <footer
      id="contact"
      className="mt-20 border-t border-slate-800 bg-slate-900 px-6"
    >
      <div className="mx-auto max-w-6xl py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Contact
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white">
          Let&apos;s discuss how I can contribute to your technical team.
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-slate-400">
          I am pursuing software engineering and computer science opportunities
          where I can apply my development skills, systems experience, and
          mission-focused approach.
        </p>

        <a
          href="mailto:mtcope95@gmail.com"
          className="mt-8 inline-block rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Email Matthew
        </a>

        <div className="mt-16 flex flex-col gap-2 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:justify-between">
          <p>Matthew T. Cope</p>
          <p>Warner Robins, Georgia</p>
        </div>
      </div>
    </footer>
  );
}