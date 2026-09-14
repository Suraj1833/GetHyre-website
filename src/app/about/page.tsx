import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { BetaBadge, SectionHeading } from "@/components/ui/Bits";
import { WaitlistCta } from "@/components/sections/WaitlistCta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why we're building GetHyre — AI career preparation for students and early-career job seekers in India. Currently in private beta.",
};

const principles = [
  {
    title: "Show the score, not a vibe",
    body: "Career advice is usually vague enough to be unfalsifiable. We'd rather give you a number, show you how it's calculated, and let you watch it move.",
  },
  {
    title: "AI suggests, you decide",
    body: "Every AI edit to your resume is presented next to your original for you to keep or skip. Your resume never changes without you choosing it.",
  },
  {
    title: "No hidden limits",
    body: "A visible usage meter shows what's left before you run out. No silent credit deduction, no task dying halfway through.",
  },
  {
    title: "Built for the Indian early-career market",
    body: "Students applying for their first roles have different problems from professionals managing a decade-long career. We're building for the first group.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="pointer-events-none absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full bg-brand-100/50 blur-3xl" />
        <Container className="relative">
          <Reveal>
            <div className="max-w-3xl">
              <BetaBadge />
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] text-ink sm:text-5xl">
                Most students don&apos;t fail interviews.{" "}
                <span className="brand-gradient-text">
                  They never find out what was wrong.
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-ink-muted">
                A rejection email tells you nothing. Neither does an ATS that
                silently drops your resume, or a job board that shows you two
                hundred listings with no sense of which ones you have a real
                chance at. The feedback loop that would let you improve simply
                doesn&apos;t exist.
              </p>
              <p className="mt-5 text-lg leading-8 text-ink-muted">
                GetHyre is our attempt at building that loop. One score that says
                where you stand, a breakdown that says which part is weak, and
                the tools to fix each part — resume, interviews, skills and job
                matching in one place, so the feedback you get is specific enough
                to act on this week.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-zinc-100 py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How we build"
              title="Four things we're not willing to compromise on"
            />
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
            {principles.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_20px_45px_-25px_rgba(75,58,240,0.55)]">
                  <h3 className="text-base font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-zinc-100 py-20">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl rounded-3xl border border-zinc-200 bg-zinc-50/60 p-8 text-center">
              <h2 className="font-display text-xl font-bold text-ink">
                Where we are right now
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                GetHyre is in private beta. We have no user counts, testimonials
                or company logos to show you, because we haven&apos;t earned them
                yet — and we&apos;d rather say that than invent them. If you want
                to be one of the first people to use it, the waitlist is open.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <WaitlistCta />
    </>
  );
}
