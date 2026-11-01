# Harshank Kanungo — Portfolio

Personal portfolio site for **Harshank Kanungo**, Full Stack Developer (MERN Stack).

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4.
Fully static, no backend, deploys to Vercel in one click.

---

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npx tsc --noEmit` | Type-check without emitting files |

---

## Deploy to Vercel

### Option A — Git (recommended)

1. Create a new repository on GitHub, e.g. `harshankgit/portfolio`.
2. Push this folder:

   ```bash
   git remote add origin https://github.com/harshankgit/portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. Go to https://vercel.com/new, import the repository, and click **Deploy**.
   No environment variables and no build settings are needed — Vercel detects
   Next.js automatically.

Every later `git push` redeploys the site.

### Option B — Vercel CLI

```bash
npx vercel          # preview deployment
npx vercel --prod   # production deployment
```

### After the first deploy — update the site URL

`src/app/layout.tsx` contains a placeholder domain used for canonical URLs and
social share previews:

```ts
const SITE_URL = "https://harshank-kanungo.vercel.app";
```

Replace it with the real deployed URL, then commit and push. Until this is
correct, link previews on LinkedIn and WhatsApp will point at the wrong address.

---

## Editing content

**All text lives in one file: [`src/data/profile.ts`](src/data/profile.ts).**

No copy is hardcoded inside components, so you never have to touch JSX to
update the site. That file exports:

| Export | Contents |
| --- | --- |
| `profile` | Name, role, location, email, phone numbers, LinkedIn, GitHub, summary |
| `stats` | The three figures shown under the hero |
| `skills` | Six skill groups and their items |
| `experience` | Employment history, newest first |
| `projects` | The five featured projects |
| `education` | Degrees and schools |
| `certifications` | Certificate list |
| `navLinks` | Navigation items (label + anchor id) |

Change a value there and it updates everywhere it appears.

### Adding a project

Append an object to the `projects` array:

```ts
{
  name: "Project Name",
  subtitle: "One-line description",
  meta: "Independent Project",        // or a client/company label
  featured: true,
  stack: ["React.js", "Node.js", "MongoDB"],
  live: "https://example.vercel.app", // optional — omit to hide the Live Demo link
  bullets: [
    "What you built and how.",
    "Another concrete responsibility.",
  ],
}
```

### Replacing the resume

Overwrite `public/Harshank-Kanungo-Full-Stack-Developer.pdf`, keeping the same
filename. The hero, the contact section and the nav all link to it through
`profile.resumePath`.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx      Metadata, fonts, JSON-LD Person schema
│   ├── page.tsx        Composes every section in order
│   └── globals.css     Design tokens + scroll-reveal animation
├── components/
│   ├── Nav.tsx         Sticky nav, scrollspy, mobile menu   (client)
│   ├── Reveal.tsx      IntersectionObserver fade-in wrapper (client)
│   ├── Section.tsx     Shared section shell
│   ├── Hero.tsx        About.tsx     Skills.tsx
│   ├── Experience.tsx  Projects.tsx  Education.tsx
│   ├── Contact.tsx     Footer.tsx
│   └── icons.tsx       Inline SVG icons (no icon library)
└── data/
    └── profile.ts      ← single source of truth for all content
```

Only `Nav.tsx` and `Reveal.tsx` are client components. Everything else renders
on the server, so the shipped JavaScript stays minimal.

---

## Design system

Tokens are declared in `src/app/globals.css` inside Tailwind v4's `@theme`
block, which turns each one into a utility class (`bg-surface`, `text-accent`,
`border-line`, and so on).

| Token | Value | Use |
| --- | --- | --- |
| `--color-ink` | `#070b14` | Page background |
| `--color-surface` | `#0d1322` | Cards |
| `--color-raised` | `#121a2c` | Chips, hover states |
| `--color-line` | `#1d2840` | Borders and dividers |
| `--color-fg` | `#e6edf7` | Body text |
| `--color-muted` | `#8ea0bd` | Secondary text |
| `--color-accent` | `#60a5fa` | Links, highlights, buttons |

To re-theme the entire site, edit these seven values.

---

## Accessibility and SEO

- Skip-to-content link for keyboard users
- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) and ordered
  heading levels
- `aria-expanded` / `aria-controls` on the mobile menu toggle, `aria-current` on
  the active nav link
- Visible `:focus-visible` outlines throughout
- Animations fully disabled under `prefers-reduced-motion: reduce`
- Open Graph and Twitter card metadata, plus a JSON-LD `Person` schema

---

## Notes

`npm audit` reports high-severity advisories in `eslint-config-next` →
`fast-glob` → `micromatch` → `braces`. These are **development-only**
dependencies and none of them are bundled into the deployed site. Running
`npm audit fix --force` would downgrade ESLint to a version incompatible with
Next.js 16, so the advisories are intentionally left in place.
