import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export type LegalSection = {
  heading: string;
  body: string;
};

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="rounded-2xl border border-warn/30 bg-warn-soft/50 px-5 py-4">
              <p className="text-sm font-semibold text-[#92400e]">
                Placeholder document
              </p>
              <p className="mt-1 text-sm leading-relaxed text-[#92400e]/85">
                This page is structural only. It has not been reviewed by a
                lawyer and must be replaced with real legal text before launch.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-10 text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              {title}
            </h1>
            <p className="mt-3 text-sm text-zinc-500">Last updated: {updated}</p>
            <p className="mt-6 text-base leading-7 text-ink-muted">{intro}</p>
          </Reveal>

          <div className="mt-12 space-y-10">
            {sections.map((section, i) => (
              <Reveal key={section.heading} delay={0.04 * i}>
                <div>
                  <h2 className="text-xl font-bold text-ink">
                    {i + 1}. {section.heading}
                  </h2>
                  <p className="mt-3 text-base leading-7 text-ink-muted">
                    {section.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-14 rounded-2xl border border-zinc-200 bg-zinc-50/60 p-6">
              <p className="text-sm font-semibold text-ink">Questions?</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                Contact details will be published here before the public launch.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
