import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { Eyebrow, SectionHeading, BetaBadge } from "@/components/ui/Bits";
import { WaitlistCta } from "@/components/sections/WaitlistCta";

export type Benefit = {
  title: string;
  body: string;
};

export function FeatureHero({
  eyebrow,
  title,
  body,
  visual,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  visual: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-12 sm:pt-16">
      <div className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-brand-100/50 blur-3xl" />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] text-ink sm:text-5xl md:text-[3.4rem]">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-lg leading-8 text-ink-muted">{body}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="/waitlist" size="lg">
                  Join the waitlist
                </Button>
                <Button href="/pricing" variant="secondary" size="lg">
                  See pricing
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <BetaBadge className="mt-6" />
            </Reveal>
          </div>

          <Reveal delay={0.1} className="min-w-0">
            {visual}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function BenefitGrid({
  eyebrow,
  title,
  body,
  benefits,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  body?: string;
  benefits: Benefit[];
}) {
  return (
    <section className="border-t border-zinc-100 py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} body={body} />
        </Reveal>
        <RevealStagger
          className={clsx(
            "mt-12 grid gap-5 sm:grid-cols-2",
            benefits.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4",
          )}
        >
          {benefits.map((benefit, i) => (
            <RevealItem key={benefit.title}>
              <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_20px_45px_-25px_rgba(75,58,240,0.55)]">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 font-display text-sm font-bold text-brand-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-base font-bold text-ink">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{benefit.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}

export function SplitBlock({
  eyebrow,
  title,
  body,
  points,
  visual,
  reverse = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  body: string;
  points?: string[];
  visual: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <section className="border-t border-zinc-100 py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className={clsx("min-w-0", reverse && "lg:order-2")}>
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              body={body}
              align="left"
            />
            {points ? (
              <ul className="mt-7 space-y-3.5">
                {points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                      <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor" aria-hidden>
                        <path d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 111.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" />
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed text-ink-muted">{point}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </Reveal>
          <Reveal delay={0.1} className={clsx("min-w-0", reverse && "lg:order-1")}>
            {visual}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export { WaitlistCta };
