import Link from "next/link";
import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import {
  SectionHeading,
  BetaBadge,
  AiTag,
  Eyebrow,
} from "@/components/ui/Bits";
import { PhoneFrame, BrowserFrame } from "@/components/ui/DeviceFrame";
import { EmployabilityScoreCard } from "@/components/mockups/EmployabilityScore";
import {
  AtsScoreCard,
  SuggestedEditCard,
} from "@/components/mockups/ResumeAts";
import { JobMatchList } from "@/components/mockups/JobMatchList";
import { InterviewResultsCard } from "@/components/mockups/InterviewResults";
import { CareerPlanCard, SkillGapTable } from "@/components/mockups/CareerPlan";
import { WaitlistCta } from "@/components/sections/WaitlistCta";
import { plans, productLinks } from "@/lib/site";

const steps = [
  {
    title: "Add your resume and target role",
    body: "Upload an existing resume or build one from scratch. Tell us the role you're aiming for.",
  },
  {
    title: "Get your Employability Score",
    body: "One number out of 100, broken into Resume, Profile, Skills, Courses, Jobs and Interview — so you know exactly what's weak.",
  },
  {
    title: "Fix the weak parts",
    body: "AI rewrites your resume per job description, scores your mock interviews, and builds a week-by-week plan around your real skill gaps.",
  },
  {
    title: "Apply to jobs that actually fit",
    body: "Every listing in your feed carries a match score against your profile, so you stop spraying applications.",
  },
];

const features = [
  {
    href: "/resume-optimizer",
    label: "Resume Optimizer",
    title: "An ATS score, and the exact fixes to raise it",
    body: "See how your resume scores on Keywords, Formatting, Length, Skills Match and Contact Info — each flagged Good, Needs Work or Missing. AI rewrites content against any job description, and you keep or skip every single edit.",
    points: [
      "Resume Match % against any job description",
      "Keep or skip each AI suggestion — never a silent overwrite",
      "Full version history of every resume",
    ],
    visual: (
      <div className="relative">
        <BrowserFrame>
          <AtsScoreCard />
        </BrowserFrame>
        <div className="absolute -bottom-8 -right-2 w-56 sm:-right-8 sm:w-64">
          <SuggestedEditCard />
        </div>
      </div>
    ),
  },
  {
    href: "/job-match",
    label: "Job Match",
    title: "Stop guessing which jobs are worth applying to",
    body: "Your Jobs For You feed scores every listing against your profile. Green means you're a strong fit, amber means stretch. Filter by location, job type, experience and date posted.",
    points: [
      "AI match score on every listing",
      "Colour-coded so you can scan the feed in seconds",
      "Filters for location, job type, experience and recency",
    ],
    visual: (
      <PhoneFrame>
        <JobMatchList />
      </PhoneFrame>
    ),
  },
  {
    href: "/mock-interviews",
    label: "AI Mock Interviews",
    title: "Practise the interview before it costs you the offer",
    body: "Role-specific questions, answered by text or recording. You get an overall score plus a breakdown across Communication, Content, Confidence, Clarity and Relevance — with transcripts for every answer.",
    points: [
      "Text or recorded practice rounds",
      "Strengths and Improve summary after every session",
      "Question-by-question scores with full transcripts",
    ],
    visual: (
      <BrowserFrame>
        <InterviewResultsCard />
      </BrowserFrame>
    ),
  },
  {
    href: "/career-plan",
    label: "Career Plan",
    title: "A week-by-week plan built around your gaps",
    body: "Set your target role, timeline and current level. AI builds a plan across skills, resume and interview prep — informed by a skill gap table that shows required versus current level for every skill.",
    points: [
      "Timelines from 2 months to a year",
      "Skill gaps tagged High, Medium or Low",
      "Recommended courses mapped to the gaps that matter",
    ],
    visual: (
      <div className="space-y-5">
        <BrowserFrame label="app.gethyre.ai/career-plan">
          <CareerPlanCard />
        </BrowserFrame>
        <div className="rounded-2xl border border-zinc-200 shadow-[0_20px_45px_-30px_rgba(11,11,18,0.5)]">
          <SkillGapTable />
        </div>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-12 sm:pt-20">
        <div className="pointer-events-none absolute -right-40 -top-32 h-[520px] w-[520px] rounded-full bg-brand-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 top-40 h-[420px] w-[420px] rounded-full bg-violet-100/50 blur-3xl" />
        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <Reveal>
                <BetaBadge />
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl md:text-6xl">
                  Know how employable{" "}
                  <span className="brand-gradient-text">you actually are.</span>{" "}
                  Then fix it.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-xl text-lg leading-8 text-ink-muted">
                  GetHyre scores your job readiness out of 100, and shows you
                  exactly which part is holding you back. One dashboard tracks
                  it all, job matches with your resume tailored to every JD,
                  your ATS score, the skill gaps to close before you apply, mock
                  interviews to walk in ready, and a career plan if you&apos;re
                  starting from scratch
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Button href="/waitlist" size="lg">
                    Join the waitlist
                  </Button>
                  <Button href="/pricing" variant="secondary" size="lg">
                    See what&apos;s free
                  </Button>
                </div>
              </Reveal>
              {/* <Reveal delay={0.2}>
                <p className="mt-5 text-sm text-zinc-500">
                  Free tier, no card required. Pro is ₹299/month when you need
                  more.
                </p>
              </Reveal> */}
            </div>

            <Reveal delay={0.1}>
              <div className="relative">
                <div className="mx-auto max-w-sm">
                  <EmployabilityScoreCard />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* What you get / feature nav */}
      <section className="border-y border-zinc-100 bg-zinc-50/50 py-16">
        <Container>
          <Reveal>
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Four tools, one score
            </p>
          </Reveal>
          <RevealStagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {productLinks.map((link) => (
              <RevealItem key={link.href}>
                <Link
                  href={link.href}
                  className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_20px_45px_-25px_rgba(75,58,240,0.55)]">
                  <div className="flex items-center gap-2">
                    <p className="font-display text-base font-bold text-ink group-hover:text-brand-700">
                      {link.label}
                    </p>
                    <AiTag />
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                    {link.blurb}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-600">
                    Explore
                    <svg
                      viewBox="0 0 20 20"
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden>
                      <path
                        d="M4 10h11M11 6l4 4-4 4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      {/* Feature deep dives */}
      {features.map((feature, i) => (
        <section
          key={feature.href}
          className="border-b border-zinc-100 py-20 sm:py-24">
          <Container>
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
              <Reveal className={clsx("min-w-0", i % 2 === 1 && "lg:order-2")}>
                <Eyebrow>{feature.label}</Eyebrow>
                <h2 className="mt-5 text-3xl font-extrabold leading-[1.15] text-ink sm:text-4xl">
                  {feature.title}
                </h2>
                <p className="mt-5 text-base leading-7 text-ink-muted sm:text-lg">
                  {feature.body}
                </p>
                <ul className="mt-7 space-y-3.5">
                  {feature.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                        <svg
                          viewBox="0 0 20 20"
                          className="h-3 w-3"
                          fill="currentColor"
                          aria-hidden>
                          <path d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 111.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" />
                        </svg>
                      </span>
                      <span className="text-sm leading-relaxed text-ink-muted">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  href={feature.href}
                  variant="secondary"
                  className="mt-8">
                  More on {feature.label}
                </Button>
              </Reveal>

              <Reveal
                delay={0.1}
                className={clsx("min-w-0", i % 2 === 1 && "lg:order-1")}>
                {feature.visual}
              </Reveal>
            </div>
          </Container>
        </section>
      ))}

      {/* How it works */}
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="From no idea where you stand to a plan, in one sitting"
            />
          </Reveal>
          <RevealStagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <RevealItem key={step.title}>
                <div className="relative h-full rounded-2xl border border-zinc-200 bg-white p-6">
                  <span className="brand-gradient flex h-10 w-10 items-center justify-center rounded-xl font-display text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-base font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {step.body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      {/* Pricing preview */}
      <section className="border-t border-zinc-100 bg-zinc-50/50 py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Pricing"
              title="Start free. Upgrade only if you're in the thick of it."
              body="No hidden usage limits. A visible meter always shows what's left before you run out — nothing is silently deducted."
            />
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-zinc-200 bg-white p-7">
                <p className="font-display text-lg font-bold text-ink">
                  {plans.free.name}
                </p>
                <p className="mt-1 text-sm text-ink-muted">
                  {plans.free.tagline}
                </p>
                <p className="mt-5 font-display text-4xl font-extrabold text-ink">
                  {plans.free.price}
                  <span className="text-base font-semibold text-zinc-400">
                    {plans.free.cadence}
                  </span>
                </p>
                <ul className="mt-6 space-y-3">
                  {plans.free.features.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm text-ink-muted">
                      <span className="mt-0.5 text-good">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/waitlist"
                  variant="secondary"
                  className="mt-7 w-full">
                  Join the waitlist
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="brand-gradient relative h-full overflow-hidden rounded-3xl p-7 text-white">
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
                <div className="relative">
                  <p className="font-display text-lg font-bold">
                    {plans.pro.name}
                  </p>
                  <p className="mt-1 text-sm text-white/75">
                    {plans.pro.tagline}
                  </p>
                  <p className="mt-5 font-display text-4xl font-extrabold">
                    {plans.pro.price}
                    <span className="text-base font-semibold text-white/60">
                      {plans.pro.cadence}
                    </span>
                  </p>
                  <ul className="mt-6 space-y-3">
                    {plans.pro.features.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-sm text-white/85">
                        <span className="mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="/pricing"
                    variant="inverse"
                    className="mt-7 w-full">
                    Compare plans
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <WaitlistCta />
    </>
  );
}
