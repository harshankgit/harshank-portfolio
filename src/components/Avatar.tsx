import Image from "next/image";
import { profile } from "@/data/profile";

export default function Avatar() {
  return (
    <div className="relative mx-auto aspect-[5/6] w-60 sm:w-72 lg:w-80">
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-[2.5rem] bg-accent/20 blur-3xl"
      />
      <div className="relative h-full w-full rounded-3xl bg-gradient-to-br from-accent via-sky-300 to-indigo-500 p-[3px] shadow-2xl shadow-accent/20">
        <div className="relative h-full w-full overflow-hidden rounded-[calc(1.5rem-3px)] bg-surface">
          {profile.photo ? (
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 320px, (min-width: 640px) 288px, 240px"
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
      <span className="absolute -bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-line bg-raised/95 px-4 py-1.5 font-mono text-xs text-fg shadow-lg backdrop-blur">
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" aria-hidden="true" />
        Available
      </span>
    </div>
  );
}
