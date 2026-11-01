import type { ReactNode } from "react";
import Reveal from "./Reveal";

/**
 * Shared section shell: top hairline, consistent vertical rhythm,
 * centered max-width container, and a monospace index beside the title.
 */
export default function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line/70 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <Reveal>
          <h2 className="flex items-baseline gap-3 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
            <span className="font-mono text-sm font-normal text-accent">{index}</span>
            {title}
          </h2>
        </Reveal>
        <div className="mt-8 sm:mt-10">{children}</div>
      </div>
    </section>
  );
}
