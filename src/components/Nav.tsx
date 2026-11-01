"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/profile";
import { CloseIcon, DownloadIcon, MenuIcon } from "./icons";

const sectionIds = navLinks.map((l) => l.href.slice(1));

export default function Nav() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Scrollspy: highlight the section currently nearest the top of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (inView[0]) setActive(inView[0].target.id);
      },
      { rootMargin: "-88px 0px -55% 0px", threshold: 0 },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? "border-b border-line/70 bg-ink/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-4 px-6"
      >
        <a
          href="#top"
          className="inline-flex h-10 items-center font-mono text-sm font-medium tracking-tight text-fg hover:text-accent"
        >
          harshank
          <span className="text-accent">.dev</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`rounded-md px-3 py-2 text-sm transition-colors ${
                    isActive ? "text-accent" : "text-muted hover:text-fg"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumePath}
            download
            className="hidden items-center gap-2 rounded-md border border-line bg-raised px-3 py-2 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent sm:inline-flex"
          >
            <DownloadIcon />
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-raised text-fg lg:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-line/70 bg-ink/95 backdrop-blur-md lg:hidden">
          <ul className="mx-auto flex w-full max-w-5xl flex-col px-6 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm text-muted hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumePath}
                download
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex items-center gap-2 py-2.5 text-sm font-medium text-accent"
              >
                <DownloadIcon />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
