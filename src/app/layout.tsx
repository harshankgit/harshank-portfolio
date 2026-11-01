import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Update this to the real domain after the first Vercel deploy.
 * It drives canonical URLs and absolute Open Graph image paths.
 */
const SITE_URL = "https://harshank-kanungo.vercel.app";

const description =
  "Harshank Kanungo — Full Stack Developer with 3+ years of experience building scalable web applications with the MERN stack: MongoDB, Express.js, React.js, Node.js, Next.js, TypeScript and REST APIs.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} — ${profile.role} (MERN Stack)`,
    template: `%s | ${profile.name}`,
  },
  description,
  keywords: [
    "Harshank Kanungo",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React.js Developer",
    "Node.js Developer",
    "Express.js",
    "MongoDB",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Redux",
    "REST API",
    "Frontend Developer",
    "Gurugram",
    "India",
  ],
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: `${profile.name} — Portfolio`,
    title: `${profile.name} — ${profile.role} (MERN Stack)`,
    description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

/** Structured data so search engines read the profile as a Person entity. */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  telephone: profile.phones[0],
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: [
    "MERN Stack",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Redux",
    "REST APIs",
    "Python",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Medicaps University, Indore",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        {children}
        <script
          type="application/ld+json"
          // Static, build-time constant — no user input is interpolated here.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
