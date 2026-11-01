import { skills } from "@/data/profile";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" index="02" title="Technical Skills">
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 60}>
            <div className="h-full rounded-lg border border-line bg-surface p-5">
              <h3 className="font-mono text-xs uppercase tracking-wider text-accent">{group.group}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-line bg-raised px-2.5 py-1 text-sm text-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
