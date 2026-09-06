import type { ReactNode } from "react";

type CodeExampleProps = {
  title: ReactNode;
  caption: ReactNode;
  content: string;
  ariaLabel?: string;
  terminal?: boolean;
  heading?: boolean;
};

export default function CodeExample({ title, caption, content, ariaLabel, terminal = false, heading = false }: CodeExampleProps) {
  return (
    <figure className="mt-8 min-w-0 overflow-hidden rounded-xl border border-slate-800">
      <figcaption className={`${heading ? "" : "border-b border-slate-800 "}bg-slate-900 p-6`}>
        {heading ? <h3 className="text-xl font-semibold">{title}</h3> : <p className="break-words font-mono text-sm text-cyan-400">{title}</p>}
        <p className="mt-3 leading-7 text-slate-400">{caption}</p>
      </figcaption>
      <pre tabIndex={0} aria-label={ariaLabel ?? `Code excerpt from ${title}`} className="overflow-x-auto p-6 text-sm leading-7 text-slate-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-cyan-400">
        {terminal ? <samp>{content}</samp> : <code>{content}</code>}
      </pre>
    </figure>
  );
}
