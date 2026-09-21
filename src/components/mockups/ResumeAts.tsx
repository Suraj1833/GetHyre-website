"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { CountUp } from "@/components/ui/CountUp";
import { StatusPill, AiTag } from "@/components/ui/Bits";

const checks = [
  { label: "Keywords", status: "warn" as const, note: "Needs Work", detail: "6 of 12 JD keywords missing" },
  { label: "Formatting", status: "good" as const, note: "Good", detail: "Parses cleanly in ATS" },
  { label: "Length", status: "good" as const, note: "Good", detail: "1 page, 412 words" },
  { label: "Skills Match", status: "warn" as const, note: "Needs Work", detail: "SQL and Tableau not found" },
  { label: "Contact Info", status: "bad" as const, note: "Missing", detail: "No LinkedIn URL detected" },
];

export function AtsScoreCard({ children }: { children?: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-ink">ATS Score</p>
            <AiTag />
          </div>
          <p className="mt-0.5 text-xs text-ink-muted">
            Data Analyst · Bengaluru
          </p>
        </div>
        <div className="text-right">
          <p className="font-display text-3xl font-extrabold text-ink">
            <CountUp to={68} />
            <span className="text-lg text-zinc-300">/100</span>
          </p>
          <StatusPill status="warn">Needs Work</StatusPill>
        </div>
      </div>

      <div className="mt-4 space-y-2.5">
        {checks.map((check, i) => (
          <motion.div
            key={check.label}
            className="flex items-center justify-between gap-3 rounded-xl border border-zinc-100 bg-zinc-50/60 px-3 py-2.5"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
          >
            <div className="min-w-0">
              <p className="text-xs font-semibold text-ink">{check.label}</p>
              <p className="truncate text-[11px] text-ink-muted">{check.detail}</p>
            </div>
            <StatusPill status={check.status}>{check.note}</StatusPill>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-brand-100 bg-brand-50/70 p-3">
        <p className="text-[11px] font-bold uppercase tracking-wide text-brand-700">
          How to improve
        </p>
        <ul className="mt-2 space-y-1.5 text-[11px] text-ink-muted">
          <li>· Add &quot;SQL&quot; and &quot;Tableau&quot; to your skills section</li>
          <li>· Add your LinkedIn profile URL to contact info</li>
        </ul>
      </div>

      {children ? <div className="mt-2.5">{children}</div> : null}
    </div>
  );
}

export function SuggestedEditCard({ embedded = false }: { embedded?: boolean }) {
  return (
    <motion.div
      className={clsx(
        "w-full",
        embedded
          ? "rounded-xl border border-zinc-100 bg-zinc-50/60 p-3"
          : "rounded-2xl border border-zinc-200 bg-white p-4 shadow-[0_20px_45px_-25px_rgba(11,11,18,0.5)]",
      )}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <div className="flex items-center gap-2">
        <AiTag />
        <p className="text-[11px] font-semibold text-ink">Suggested rewrite</p>
      </div>
      <p className="mt-2.5 rounded-lg bg-bad-soft/50 px-3 py-2 text-[11px] leading-relaxed text-ink-muted line-through decoration-bad/40">
        Worked on a dashboard project for college fest data.
      </p>
      <p className="mt-2 rounded-lg bg-good-soft/60 px-3 py-2 text-[11px] leading-relaxed text-ink">
        Built a Tableau dashboard analysing 8,000+ event registrations, cutting
        manual reporting time by 60% for a 12-person organising team.
      </p>
      <div className="mt-3 flex gap-2">
        <button className="flex-1 rounded-lg bg-brand-500 px-3 py-2 text-[11px] font-semibold text-white transition-colors hover:bg-brand-600">
          Keep
        </button>
        <button className="flex-1 rounded-lg border border-zinc-200 px-3 py-2 text-[11px] font-semibold text-ink-muted transition-colors hover:bg-zinc-50">
          Skip
        </button>
      </div>
      <p className="mt-2.5 text-center text-[10px] text-zinc-400">
        Nothing is overwritten until you choose.
      </p>
    </motion.div>
  );
}

export function MatchScoreChip() {
  return (
    <motion.div
      className="inline-flex items-center gap-2.5 rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-[0_18px_40px_-22px_rgba(11,11,18,0.5)]"
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.35 }}
    >
      <div className="brand-gradient flex h-10 w-10 items-center justify-center rounded-xl font-display text-sm font-bold text-white">
        <CountUp to={82} suffix="%" />
      </div>
      <div>
        <p className="text-[11px] font-semibold text-ink">Resume Match</p>
        <p className="text-[10px] text-ink-muted">vs. this job description</p>
      </div>
    </motion.div>
  );
}
