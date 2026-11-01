import { profile, stats } from "@/data/profile";
import Avatar from "./Avatar";
import Reveal from "./Reveal";
import { ArrowRightIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="relative px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 lg:grid-cols-[1fr_auto]">
        <Reveal className="order-first lg:order-last">
          <Avatar />
        </Reveal>
        <div className="text-center lg:text-left">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-raised px-3 py-1 font-mono text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Open to Full Stack / MERN roles
          </p>
        </Reveal>

        <Reveal delay={60}>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-fg sm:text-6xl">
            {profile.name}
          </h1>
        </Reveal>

        <Reveal delay={110}>
          <p className="mt-3 text-xl font-medium text-accent sm:text-2xl">{profile.role}</p>
          <p className="mt-2 font-mono text-sm text-muted">{profile.stackLine}</p>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg lg:mx-0">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={210}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
            >
              View Projects
              <ArrowRightIcon />
            </a>
            <a
              href={profile.resumePath}
              download
              className="inline-flex items-center gap-2 rounded-md border border-line bg-raised px-5 py-2.5 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
            >
              <DownloadIcon />
              Download Resume
            </a>
          </div>
        </Reveal>

        <Reveal delay={260}>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm text-muted lg:justify-start">
            <li className="inline-flex items-center gap-2 py-1.5">
              <MapPinIcon />
              {profile.location}
            </li>
            <li>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 py-1.5 hover:text-accent">
                <MailIcon />
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-1.5 hover:text-accent"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-1.5 hover:text-accent"
              >
                <GitHubIcon />
                GitHub
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={310}>
          <dl className="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-3 border-t border-line/70 pt-8 sm:gap-6 lg:mx-0">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-2xl font-semibold text-fg sm:text-3xl">{stat.value}</span>
                  <span className="mt-1 block text-xs leading-snug text-muted sm:text-sm">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
        </div>
      </div>
    </section>
  );
}
