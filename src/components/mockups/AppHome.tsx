"use client";

import { motion } from "framer-motion";
import { AiTag } from "@/components/ui/Bits";

const tools = [
  { label: "Career Plan", meta: "Week 3 of 16" },
  { label: "Mock Interview", meta: "2 practised" },
  { label: "Resume", meta: "ATS 68" },
  { label: "Jobs", meta: "4 matches" },
];

export function AppHome() {
  return (
    <div className="rounded-2xl bg-white p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] text-ink-muted">Good morning</p>
          <p className="font-display text-base font-bold text-ink">Aarav</p>
        </div>
        <span className="brand-gradient flex h-9 w-9 items-center justify-center rounded-full font-display text-xs font-bold text-white">
          A
        </span>
      </div>

      <motion.div
        className="mt-4 rounded-xl border border-brand-100 bg-brand-50/70 p-3.5"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        <div className="flex items-center gap-2">
          <p className="text-[10px] font-bold uppercase tracking-wide text-brand-700">
            Next up
          </p>
          <AiTag />
        </div>
        <p className="mt-1.5 text-xs font-semibold text-ink">
          Practise 3 behavioural questions
        </p>
        <p className="mt-0.5 text-[11px] text-ink-muted">
          Data Analyst · about 12 minutes
        </p>
      </motion.div>

      <div className="mt-4 grid grid-cols-2 gap-2.5">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.label}
            className="rounded-xl border border-zinc-100 bg-zinc-50/60 p-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.25 + i * 0.07 }}
          >
            <p className="text-[11px] font-semibold text-ink">{tool.label}</p>
            <p className="mt-0.5 text-[10px] text-ink-muted">{tool.meta}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="brand-gradient mt-4 rounded-xl px-4 py-3 text-center text-xs font-semibold text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.55 }}
      >
        Continue where you left off
      </motion.div>
    </div>
  );
}
