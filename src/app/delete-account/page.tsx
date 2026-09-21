import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { DeleteAccountForm } from "@/components/sections/DeleteAccountForm";

export const metadata: Metadata = {
  title: "Delete your GetHyre.ai account",
  description:
    "Request deletion of your GetHyre.ai account and the data linked to it.",
};

const steps = [
  "Submit the form below using the email address you signed up with.",
  "We email that address to confirm it is you.",
  "After you confirm, we delete your account and data within 7 days.",
];

export default function DeleteAccountPage() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute -left-40 -top-20 h-[420px] w-[420px] rounded-full bg-brand-100/50 blur-3xl" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h1 className="text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              Delete your GetHyre.ai account
            </h1>
            <p className="mt-6 text-base leading-7 text-ink-muted">
              Use this page to request deletion of your GetHyre.ai account and
              the data linked to it.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-12">
              <h2 className="text-xl font-bold text-ink">How it works</h2>
              <ol className="mt-5 space-y-5">
                {steps.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 font-display text-xs font-bold text-brand-600">
                      {i + 1}
                    </span>
                    <p className="text-base leading-7 text-ink-muted">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 space-y-10">
              <div>
                <h2 className="text-xl font-bold text-ink">What we delete</h2>
                <p className="mt-3 text-base leading-7 text-ink-muted">
                  Your profile, uploaded resumes and the data extracted from
                  them, scores and results, mock interview data, career plans
                  and job match data.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-ink">
                  What we may keep
                </h2>
                <p className="mt-3 text-base leading-7 text-ink-muted">
                  We do not keep your personal data after deletion, except
                  limited records we need for security, fraud prevention or
                  legal compliance.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 rounded-2xl border border-warn/30 bg-warn-soft/50 px-5 py-4">
              <p className="text-sm font-semibold text-[#92400e]">
                Deletion is permanent and cannot be undone.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12 rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_25px_60px_-40px_rgba(11,11,18,0.5)] sm:p-8">
              <h2 className="text-xl font-bold text-ink">Request deletion</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Use the email address you signed up with.
              </p>
              <div className="mt-6">
                <DeleteAccountForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
