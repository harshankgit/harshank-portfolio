import { profile } from "@/data/profile";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

const iconLink =
  "inline-flex h-10 w-10 items-center justify-center rounded-md text-muted transition-colors hover:bg-raised hover:text-accent";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line/70 px-6 py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-center text-sm text-muted sm:text-left">
          Built with Next.js, TypeScript and Tailwind CSS by {profile.name}.
        </p>
        <div className="flex items-center gap-1">
          <a href={`mailto:${profile.email}`} aria-label="Email" className={iconLink}>
            <MailIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={iconLink}
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={iconLink}
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
