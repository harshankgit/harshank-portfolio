import { profile } from "@/data/profile";
import Reveal from "./Reveal";
import Section from "./Section";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "./icons";

const cardClass =
  "flex items-center gap-3 rounded-lg border border-line bg-surface p-4 text-sm text-fg transition-colors hover:border-accent hover:text-accent";

export default function Contact() {
  return (
    <Section id="contact" index="06" title="Contact">
      <Reveal>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Open to Full Stack and MERN Stack Developer roles. The fastest way to reach me is email,
          and my full resume is available as a PDF download.
        </p>
      </Reveal>

      <Reveal delay={70}>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <a href={`mailto:${profile.email}`} className={cardClass}>
            <MailIcon className="h-5 w-5 shrink-0 text-accent" />
            <span className="break-all">{profile.email}</span>
          </a>

          <a href={`tel:${profile.phones[0].replace(/\s/g, "")}`} className={cardClass}>
            <PhoneIcon className="h-5 w-5 shrink-0 text-accent" />
            <span>{profile.phones[0]}</span>
          </a>

          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={cardClass}>
            <LinkedInIcon className="h-5 w-5 shrink-0 text-accent" />
            <span className="break-all">{profile.linkedinLabel}</span>
          </a>

          <a href={profile.github} target="_blank" rel="noopener noreferrer" className={cardClass}>
            <GitHubIcon className="h-5 w-5 shrink-0 text-accent" />
            <span className="break-all">{profile.githubLabel}</span>
          </a>
        </div>
      </Reveal>

      <Reveal delay={140}>
        <a
          href={profile.resumePath}
          download
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
        >
          <DownloadIcon />
          Download Resume (PDF)
        </a>
      </Reveal>
    </Section>
  );
}
