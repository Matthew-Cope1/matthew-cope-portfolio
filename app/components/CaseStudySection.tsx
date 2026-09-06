import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "../data/skills";
import CodeExample from "./CodeExample";

export default function CaseStudySection({ caseStudy, id }: { caseStudy: CaseStudy; id: string }) {
  return (
          <section className="mt-16 min-w-0" aria-labelledby={id}>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Featured Case Study
            </p>
            <h2 id={id} className="mt-4 text-3xl font-bold">
              {caseStudy.title}
            </h2>
            <p className="mt-6 max-w-3xl leading-8 text-slate-300">
              {caseStudy.overview}
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {caseStudy.decisions.map((decision) => (
                <article key={decision.title} className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                  <h3 className="text-xl font-semibold">{decision.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{decision.description}</p>
                </article>
              ))}
            </div>
            {caseStudy.chart && (
              <figure className="mt-8 overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
                <div className="bg-white p-4">
                  <Image
                    src={caseStudy.chart.src}
                    alt={caseStudy.chart.alt}
                    width={caseStudy.chart.width}
                    height={caseStudy.chart.height}
                    className="mx-auto h-auto w-full max-w-[488px]"
                    sizes="(max-width: 560px) 100vw, 488px"
                  />
                </div>
                <figcaption className="p-6 leading-7 text-slate-400">{caseStudy.chart.caption}</figcaption>
              </figure>
            )}
            {caseStudy.models && (
              <div className="mt-8 overflow-x-auto rounded-xl border border-slate-800">
                <table className="w-full text-left text-sm text-slate-300">
                  <caption className="p-6 text-left leading-7 text-slate-400">
                    {caseStudy.models.caption}
                  </caption>
                  <thead className="bg-slate-900">
                    <tr>
                      <th scope="col" className="p-4">Predictors</th>
                      <th scope="col" className="p-4">R²</th>
                      <th scope="col" className="p-4">Adjusted R²</th>
                    </tr>
                  </thead>
                  <tbody>
                    {caseStudy.models.rows.map((model) => (
                      <tr key={model.name} className="border-t border-slate-800">
                        <th scope="row" className="p-4 font-normal">{model.name}</th>
                        <td className="p-4 font-mono">{model.rSquared}</td>
                        <td className="p-4 font-mono">{model.adjusted}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {caseStudy.output && (
              <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold">Example input and output</h3>
                <p className="mt-3 leading-7 text-slate-400">
                  Expected checksum for the exact UTF-8 message below, with no trailing newline.
                </p>
                <dl className="mt-6 space-y-4">
                  <div>
                    <dt className="text-sm font-semibold text-cyan-400">Input</dt>
                    <dd className="mt-1 font-mono text-slate-300">{caseStudy.output.input}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-cyan-400">Algorithm</dt>
                    <dd className="mt-1 text-slate-300">{caseStudy.output.algorithm}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-cyan-400">Checksum</dt>
                    <dd className="mt-1 break-all font-mono text-sm leading-7 text-slate-300">{caseStudy.output.checksum}</dd>
                  </div>
                </dl>
              </section>
            )}
            {caseStudy.code?.map((example) => (
              <CodeExample key={example.filename} title={example.filename} caption={example.caption} content={example.content} />
            ))}
            {caseStudy.links?.map((link, index) => (
              <Link key={link.href} href={link.href} className={index === 0
                ? "mt-8 inline-flex min-h-11 items-center rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
                : "mt-4 inline-flex min-h-11 items-center rounded-lg border border-slate-700 px-6 py-3 font-semibold text-cyan-400 transition hover:border-cyan-400 hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 sm:ml-4"}>
                {link.label}
              </Link>
            ))}
          </section>
  );
}
