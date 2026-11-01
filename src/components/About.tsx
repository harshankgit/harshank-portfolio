import { profile } from "@/data/profile";
import Reveal from "./Reveal";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="max-w-3xl space-y-4">
        {profile.summary.map((paragraph, i) => (
          <Reveal key={paragraph} delay={i * 70}>
            <p className="text-base leading-relaxed text-muted">{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
