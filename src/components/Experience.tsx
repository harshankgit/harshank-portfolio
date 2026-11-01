import { experience } from "@/data/profile";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" index="03" title="Experience">
      <ol className="relative space-y-8 border-l border-line pl-6 sm:pl-8">
        {experience.map((job, i) => (
          <li key={`${job.company}-${job.dates}`} className="relative">
            {/* Timeline node */}
            <span
              aria-hidden="true"
              className={`absolute top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-ink -left-[1.8125rem] sm:-left-[2.3125rem] ${
                job.current ? "bg-accent" : "bg-line"
              }`}
            />
            <Reveal delay={i * 60}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-fg">{job.role}</h3>
                <span className="font-mono text-xs text-muted">{job.dates}</span>
              </div>
              <p className="mt-1 text-sm text-accent">
                {job.company}
                <span className="text-muted"> · {job.location}</span>
                {job.current && (
                  <span className="ml-2 rounded border border-accent-soft bg-accent-soft/40 px-1.5 py-0.5 font-mono text-[0.6875rem] text-accent">
                    Current
                  </span>
                )}
              </p>
              <ul className="mt-3 space-y-2">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <span aria-hidden="true" className="mt-[0.4375rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
