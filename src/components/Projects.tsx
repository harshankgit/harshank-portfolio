import { projects } from "@/data/profile";
import Reveal from "./Reveal";
import Section from "./Section";
import { ExternalLinkIcon } from "./icons";

export default function Projects() {
  return (
    <Section id="projects" index="04" title="Projects">
      <div className="space-y-5">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 50}>
            <article className="rounded-lg border border-line bg-surface p-5 transition-colors hover:border-accent-soft sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                <div>
                  <h3 className="text-lg font-semibold text-fg sm:text-xl">{project.name}</h3>
                  <p className="mt-0.5 text-sm text-accent">{project.subtitle}</p>
                </div>
                <span className="rounded border border-line bg-raised px-2 py-1 font-mono text-[0.6875rem] text-muted">
                  {project.meta}
                </span>
              </div>

              <ul className="mt-4 space-y-2">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <span aria-hidden="true" className="mt-[0.4375rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-line/70 pt-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-line bg-raised px-2 py-0.5 font-mono text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center gap-1.5 py-1 text-sm font-medium text-accent hover:underline"
                  >
                    Live Demo
                    <ExternalLinkIcon className="h-3.5 w-3.5 shrink-0" />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
