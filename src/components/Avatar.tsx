import Image from "next/image";
import { profile } from "@/data/profile";

export default function Avatar() {
  return (
    <div className="relative mx-auto h-44 w-44 sm:h-56 sm:w-56 lg:h-64 lg:w-64">
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-full bg-accent/20 blur-3xl"
      />
      <div className="relative h-full w-full rounded-full bg-gradient-to-br from-accent via-sky-300 to-indigo-500 p-[3px] shadow-2xl shadow-accent/20">
        <div className="relative h-full w-full overflow-hidden rounded-full bg-surface">
          {profile.photo ? (
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 256px, (min-width: 640px) 224px, 176px"
              className="object-cover"
            />
          ) : (
            <div
              role="img"
              aria-label={`${profile.name} monogram`}
              className="flex h-full w-full items-center justify-center bg-gradient-to-br from-raised to-ink"
            >
              <span className="bg-gradient-to-br from-fg to-accent bg-clip-text text-6xl font-semibold tracking-tight text-transparent sm:text-7xl">
                {profile.initials}
              </span>
            </div>
          )}
        </div>
      </div>
      <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-line bg-raised px-2.5 py-1 font-mono text-[11px] text-fg shadow-lg sm:bottom-5 sm:right-4">
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" aria-hidden="true" />
        Available
      </span>
    </div>
  );
}
