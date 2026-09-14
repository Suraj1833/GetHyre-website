import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { BetaBadge } from "@/components/ui/Bits";
import { WaitlistForm } from "@/components/sections/WaitlistForm";
import { EmployabilityScoreCard } from "@/components/mockups/EmployabilityScore";

export const metadata: Metadata = {
  title: "Join the waitlist",
  description:
    "GetHyre is in private beta. Join the waitlist and we'll email you when your invite is ready.",
};

const next = [
  {
    title: "You'll get one email",
    body: "A short confirmation that you're on the list. No drip campaign, no newsletter you didn't ask for.",
  },
  {
    title: "Invites go out in batches",
    body: "We're onboarding slowly so the product holds up. Your place in the queue depends on when you joined.",
  },
  {
    title: "You start on the Free plan",
    body: "Full access to build your first personalized dashboard. Includes employability score, job matching, resume optimizer, and mock interviews.",
  },
];

export default function WaitlistPage() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute -left-40 -top-20 h-[460px] w-[460px] rounded-full bg-brand-100/50 blur-3xl" />
      <Container className="relative">
        <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <BetaBadge />
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] text-ink sm:text-5xl">
                Join the{" "}
                <span className="brand-gradient-text">GetHyre beta.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-lg leading-8 text-ink-muted">
                We&apos;re opening seats in small batches. Leave your email and
                we&apos;ll send your invite when one is ready.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-9 rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_25px_60px_-40px_rgba(11,11,18,0.5)]">
                <WaitlistForm showGoal />
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10">
                <p className="text-xs font-bold uppercase tracking-wide text-zinc-400">
                  What happens next
                </p>
                <ol className="mt-5 space-y-5">
                  {next.map((item, i) => (
                    <li key={item.title} className="flex gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 font-display text-xs font-bold text-brand-600">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ink">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                          {item.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="mx-auto max-w-sm lg:sticky lg:top-24">
              <EmployabilityScoreCard />
              <p className="mt-5 text-center text-sm leading-relaxed text-ink-muted">
                This is the first thing you&apos;ll see after onboarding — your
                readiness, scored and broken down.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
