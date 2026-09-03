import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function CppSkillPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl py-20">
        <Link
          href="/"
          className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
        >
          ← Back to home
        </Link>

        <p className="mt-10 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Technical Skill
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight">
          C++ Development
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          I use C++ to build object-oriented applications, implement data
          structures, create interactive graphics, and solve problems that
          require careful control over application logic and program state.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Object-Oriented Design</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Separating application responsibilities into reusable classes,
              header files, and implementation files.
            </p>
          </article>

          <article className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Application Logic</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Managing collisions, movement, changing state, validation, and
              unexpected execution paths.
            </p>
          </article>

          <article className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Graphics Programming</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Working with reusable meshes, transformations, textures,
              lighting, and interactive camera controls.
            </p>
          </article>
        </div>

        <section className="mt-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Featured Project
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Breakout-Style 2D Application
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-400">
            This project demonstrates class-based design, multi-object
            collision detection, randomized behavior, multi-ball interaction,
            and debugging logic that prevents objects from becoming stuck.
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-slate-800">
            <div className="border-b border-slate-800 bg-slate-900 px-5 py-3">
              <p className="font-mono text-sm text-slate-400">
                Breakout code example
              </p>
            </div>

            <pre className="overflow-x-auto bg-slate-950 p-6 text-sm leading-7 text-slate-300">
              <code>
                {
                  "// We will add a real code example from the Breakout project here."
                }
              </code>
            </pre>
          </div>
        </section>
      </section>
    </main>
  );
}