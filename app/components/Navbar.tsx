import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="mx-auto flex max-w-6xl flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between"
    >
      <Link
        href="/"
        aria-label="Matthew Cope home"
        className="inline-flex min-h-11 min-w-11 items-center self-start rounded-lg text-xl font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
      >
        MC
      </Link>

      <div className="grid w-full grid-cols-2 gap-2 text-sm text-slate-300 sm:flex sm:w-auto sm:items-center sm:gap-3">
        <Link href="/#skills" className="inline-flex min-h-11 items-center justify-center rounded-lg px-3 py-2 transition hover:bg-slate-900 hover:text-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400">
          Skills
        </Link>

        <Link href="/#projects" className="inline-flex min-h-11 items-center justify-center rounded-lg px-3 py-2 transition hover:bg-slate-900 hover:text-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400">
          Projects
        </Link>

        <Link href="/#experience" className="inline-flex min-h-11 items-center justify-center rounded-lg px-3 py-2 transition hover:bg-slate-900 hover:text-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400">
          Experience
        </Link>

        <Link href="/#contact" className="inline-flex min-h-11 items-center justify-center rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400">
          Contact
        </Link>
      </div>
    </nav>
  );
}
