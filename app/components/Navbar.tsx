export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between py-6">
      <a href="/" className="text-xl font-bold text-white">
        MC
      </a>

      <div className="flex items-center gap-6 text-sm text-slate-300">
        <a href="/#skills" className="transition hover:text-cyan-400">
          Skills
        </a>

        <a href="/#projects" className="transition hover:text-cyan-400">
          Projects
        </a>

        <a href="/#experience" className="transition hover:text-cyan-400">
          Experience
        </a>

        <a href="/#contact" className="rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300"> 
          Contact
        </a>
      </div>
    </nav>
  );
}