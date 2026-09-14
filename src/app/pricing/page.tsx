import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, BetaBadge, StatusPill } from "@/components/ui/Bits";
import { Accordion, type FaqItem } from "@/components/ui/Accordion";
import { WaitlistCta } from "@/components/sections/WaitlistCta";
import { plans } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "GetHyre is free to start, with 5 resume generations, 3 mock interviews, job match scoring and your Employability Score. Pro is ₹299/month for unlimited use.",
};

const comparison = [
  { feature: "Employability Score", free: "Included", pro: "Included" },
  { feature: "Resume generations", free: "5 / month", pro: "Unlimited" },
  { feature: "AI mock interviews", free: "3 / month", pro: "Unlimited" },
  { feature: "Job match scoring", free: "Included", pro: "Included" },
  { feature: "ATS score & fix list", free: "Included", pro: "Included" },
  { feature: "Advanced AI skill insights", free: "Not included", pro: "Included" },
  { feature: "Career Planner", free: "Not included", pro: "Included" },
  { feature: "Usage meter", free: "Always visible", pro: "Always visible" },
];

const faqs: FaqItem[] = [
  {
    q: "What happens when I hit a limit on the Free plan?",
    a: "You'll see it coming. A usage meter shows how many resume generations and mock interviews you have left at all times, so nothing is silently deducted and you're never cut off mid-task without warning. When you run out, you can wait for the next month or upgrade to Pro.",
  },
  {
    q: "Is there a free trial of Pro?",
    a: "The Free plan is permanent rather than a trial. You can use the Employability Score, job match scoring and the ATS checker indefinitely without paying. Pro removes the caps on resume generations and mock interviews and unlocks the Career Planner.",
  },
  {
    q: "How does billing work?",
    a: "Pro is ₹299 per month. Billing details will be confirmed when we open the beta to paid plans, and waitlist members will be told before anything is charged.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Pro is month to month with no lock-in, and cancelling drops you back to the Free plan rather than deleting your account or your saved resumes.",
  },
  {
    q: "Do I need a credit card to join?",
    a: "No. Joining the waitlist and using the Free plan need no payment details at all.",
  },
  {
    q: "When does the beta open?",
    a: "GetHyre is in private beta and invites go out in small batches. Join the waitlist and we'll email you when your seat is ready. We'd rather onboard slowly than ship something half-working.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute -right-40 -top-32 h-[460px] w-[460px] rounded-full bg-brand-100/50 blur-3xl" />
        <Container className="relative">
          <Reveal>
            <div className="flex flex-col items-center text-center">
              <BetaBadge />
              <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.1] text-ink sm:text-5xl">
                Start free. Pay only when you&apos;re in the thick of it.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-muted">
                No hidden usage limits and no silent credit deduction. A visible
                meter always shows what&apos;s left before you run out.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-zinc-200 bg-white p-8">
                <p className="font-display text-xl font-bold text-ink">{plans.free.name}</p>
                <p className="mt-1.5 text-sm text-ink-muted">{plans.free.tagline}</p>
                <p className="mt-6 font-display text-5xl font-extrabold text-ink">
                  {plans.free.price}
                  <span className="text-base font-semibold text-zinc-400">
                    {plans.free.cadence}
                  </span>
                </p>
                <ul className="mt-7 space-y-3.5">
                  {plans.free.features.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-ink-muted">
                      <span className="mt-0.5 shrink-0 text-good">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button href="/waitlist" variant="secondary" size="lg" className="mt-8 w-full">
                  Join the waitlist
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="brand-gradient relative h-full overflow-hidden rounded-3xl p-8 text-white">
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-display text-xl font-bold">{plans.pro.name}</p>
                    <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wide">
                      Most useful
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-white/75">{plans.pro.tagline}</p>
                  <p className="mt-6 font-display text-5xl font-extrabold">
                    {plans.pro.price}
                    <span className="text-base font-semibold text-white/60">
                      {plans.pro.cadence}
                    </span>
                  </p>
                  <ul className="mt-7 space-y-3.5">
                    {plans.pro.features.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-white/85">
                        <span className="mt-0.5 shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="/waitlist"
                    variant="inverse"
                    size="lg"
                    className="mt-8 w-full"
                  >
                    Join the waitlist
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Comparison table */}
      <section className="border-t border-zinc-100 py-20">
        <Container>
          <Reveal>
            <SectionHeading title="Compare the plans" />
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mx-auto mt-10 max-w-3xl overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-zinc-200">
                    <th className="pb-4 text-xs font-bold uppercase tracking-wide text-zinc-400">
                      Feature
                    </th>
                    <th className="pb-4 text-center text-xs font-bold uppercase tracking-wide text-zinc-400">
                      Free
                    </th>
                    <th className="pb-4 text-center text-xs font-bold uppercase tracking-wide text-brand-600">
                      Pro
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.feature} className="border-b border-zinc-100">
                      <td className="py-4 text-sm font-medium text-ink">{row.feature}</td>
                      <td className="py-4 text-center text-sm text-ink-muted">{row.free}</td>
                      <td className="py-4 text-center text-sm font-semibold text-brand-700">
                        {row.pro}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-2xl border border-brand-100 bg-brand-50/60 p-5">
              <StatusPill status="good">No surprises</StatusPill>
              <p className="text-sm leading-relaxed text-ink-muted">
                You always see what&apos;s left before you run out. We don&apos;t
                deduct credits silently or stop a task halfway because a hidden
                limit was reached.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-zinc-100 py-20">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Questions worth answering upfront" />
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mx-auto mt-10 max-w-3xl">
              <Accordion items={faqs} />
            </div>
          </Reveal>
        </Container>
      </section>

      <WaitlistCta />
    </>
  );
}
