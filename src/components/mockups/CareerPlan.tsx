"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { AiTag, StatusPill } from "@/components/ui/Bits";

const weeks = [
  { week: "Week 1", focus: "SQL foundations: joins, aggregates", done: true },
  { week: "Week 2", focus: "Rebuild resume around analytics keywords", done: true },
  { week: "Week 3", focus: "Tableau dashboard project", done: false },
  { week: "Week 4", focus: "Mock interview: behavioural round", done: false },
];

export function CareerPlanCard() {
  const completed = weeks.filter((w) => w.done).length;

  return (
    <div className="rounded-2xl bg-white p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-ink">Career Plan</p>
            <AiTag />
          </div>
          <p className="mt-0.5 text-xs text-ink-muted">
            Data Analyst · 4 months · Beginner
          </p>
        </div>
        <span className="rounded-lg bg-brand-50 px-2.5 py-1 text-[11px] font-bold text-brand-700">
          {completed}/{weeks.length} done
        </span>
      </div>

      <div className="mt-4 space-y-2.5">
        {weeks.map((item, i) => (
          <motion.div
            key={item.week}
            className={clsx(
              "flex items-start gap-3 rounded-xl border p-3",
              item.done
                ? "border-good/20 bg-good-soft/40"
                : "border-zinc-100 bg-zinc-50/60",
            )}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.09 }}
          >
            <span
              className={clsx(
                "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-md",
                item.done ? "bg-good text-white" : "border border-zinc-300 bg-white",
              )}
            >
              {item.done ? (
                <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor" aria-hidden>
                  <path d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 111.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" />
                </svg>
              ) : null}
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold text-ink">{item.week}</p>
              <p className="text-[11px] leading-relaxed text-ink-muted">{item.focus}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const skills = [
  { skill: "SQL", required: "Advanced", current: "Beginner", gap: "High" as const },
  { skill: "Excel", required: "Advanced", current: "Intermediate", gap: "Medium" as const },
  { skill: "Tableau", required: "Intermediate", current: "Beginner", gap: "High" as const },
  { skill: "Python", required: "Intermediate", current: "Intermediate", gap: "Low" as const },
  { skill: "Statistics", required: "Intermediate", current: "Beginner", gap: "Medium" as const },
];

const gapTone = {
  High: "bad" as const,
  Medium: "warn" as const,
  Low: "good" as const,
};

export function SkillGapTable() {
  return (
    <div className="rounded-2xl bg-white p-5">
      <div className="flex items-center gap-2">
        <p className="text-sm font-semibold text-ink">Skill Gap Analysis</p>
        <AiTag />
      </div>
      <p className="mt-0.5 text-xs text-ink-muted">Target role: Data Analyst</p>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[340px] border-collapse text-left">
          <thead>
            <tr className="text-[10px] uppercase tracking-wide text-zinc-400">
              <th className="pb-2 font-semibold">Skill</th>
              <th className="pb-2 font-semibold">Required</th>
              <th className="pb-2 font-semibold">Current</th>
              <th className="pb-2 text-right font-semibold">Gap</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((row, i) => (
              <motion.tr
                key={row.skill}
                className="border-t border-zinc-100"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
              >
                <td className="py-2.5 text-[11px] font-semibold text-ink">{row.skill}</td>
                <td className="py-2.5 text-[11px] text-ink-muted">{row.required}</td>
                <td className="py-2.5 text-[11px] text-ink-muted">{row.current}</td>
                <td className="py-2.5 text-right">
                  <StatusPill status={gapTone[row.gap]}>{row.gap}</StatusPill>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 rounded-xl border border-brand-100 bg-brand-50/70 p-3">
        <p className="text-[11px] font-bold uppercase tracking-wide text-brand-700">
          Recommended next
        </p>
        <p className="mt-1 text-[11px] leading-relaxed text-ink-muted">
          Start with SQL. It carries the highest gap and appears in 9 of your 10 saved jobs.
        </p>
      </div>
    </div>
  );
}
