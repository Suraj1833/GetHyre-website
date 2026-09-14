"use client";

import { motion } from "framer-motion";
import { CountUp } from "@/components/ui/CountUp";
import { AiTag } from "@/components/ui/Bits";

const dimensions = [
  { label: "Communication", value: 82 },
  { label: "Content", value: 74 },
  { label: "Confidence", value: 69 },
  { label: "Clarity", value: 78 },
  { label: "Relevance", value: 85 },
];

export function InterviewResultsCard() {
  return (
    <div className="rounded-2xl bg-white p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-ink">Interview Results</p>
            <AiTag />
          </div>
          <p className="mt-0.5 text-xs text-ink-muted">
            Data Analyst · 8 questions · Recorded
          </p>
        </div>
        <div className="brand-gradient flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl text-white">
          <span className="font-display text-lg font-extrabold leading-none">
            <CountUp to={77} />
          </span>
          <span className="text-[9px] text-white/70">overall</span>
        </div>
      </div>

      <div className="mt-4 space-y-2.5">
        {dimensions.map((dim, i) => (
          <div key={dim.label}>
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-medium text-ink">{dim.label}</p>
              <p className="text-[11px] font-bold text-ink-muted">{dim.value}</p>
            </div>
            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-zinc-100">
              <motion.div
                className="brand-gradient h-full rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${dim.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.08 }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <div className="rounded-xl bg-good-soft/60 p-3">
          <p className="text-[10px] font-bold uppercase tracking-wide text-good">
            Strengths
          </p>
          <p className="mt-1 text-[11px] leading-relaxed text-ink-muted">
            Clear structure using STAR. Strong project specifics.
          </p>
        </div>
        <div className="rounded-xl bg-warn-soft/60 p-3">
          <p className="text-[10px] font-bold uppercase tracking-wide text-[#b45309]">
            Improve
          </p>
          <p className="mt-1 text-[11px] leading-relaxed text-ink-muted">
            Fewer filler words. Quantify results in answer 4.
          </p>
        </div>
      </div>
    </div>
  );
}

export function QuestionBreakdown() {
  const questions = [
    { q: "Tell me about yourself", score: 81 },
    { q: "Walk me through a data project", score: 74 },
    { q: "How do you handle messy data?", score: 68 },
  ];

  return (
    <motion.div
      className="w-full rounded-2xl border border-zinc-200 bg-white p-4 shadow-[0_20px_45px_-25px_rgba(11,11,18,0.5)]"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <p className="text-[11px] font-semibold text-ink">Question-by-question</p>
      <div className="mt-2.5 space-y-2">
        {questions.map((item) => (
          <div
            key={item.q}
            className="flex items-center justify-between gap-3 rounded-lg bg-zinc-50 px-3 py-2"
          >
            <p className="truncate text-[11px] text-ink-muted">{item.q}</p>
            <span className="shrink-0 text-[11px] font-bold text-ink">{item.score}</span>
          </div>
        ))}
      </div>
      <p className="mt-2.5 text-[10px] text-zinc-400">
        Full transcript saved for every answer.
      </p>
    </motion.div>
  );
}
