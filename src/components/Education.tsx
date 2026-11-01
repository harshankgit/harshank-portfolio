import { certifications, education } from "@/data/profile";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" index="05" title="Education & Certifications">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-accent">Education</h3>
          <ul className="mt-4 space-y-4">
            {education.map((item, i) => (
              <Reveal key={item.degree} delay={i * 60}>
                <li className="rounded-lg border border-line bg-surface p-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <h4 className="font-medium text-fg">{item.degree}</h4>
                    <span className="font-mono text-xs text-muted">{item.dates}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{item.school}</p>
                  <p className="mt-1 text-sm text-accent">{item.detail}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-accent">Certifications</h3>
          <ul className="mt-4 space-y-3">
            {certifications.map((cert, i) => (
              <Reveal key={cert} delay={i * 60}>
                <li className="flex gap-2.5 rounded-lg border border-line bg-surface p-4 text-sm leading-relaxed text-muted">
                  <span aria-hidden="true" className="mt-[0.4375rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {cert}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
