"use client";

import { motion } from "framer-motion";
import { CountUp } from "@/components/ui/CountUp";
import { AiTag } from "@/components/ui/Bits";

const SCORE = 72;

const today = [
  { title: "Tailor your resume to a JD", meta: "Raises your match score" },
  { title: "Practise AI mock interviews", meta: "Get scored on every answer" },
  { title: "Explore Jobs", meta: "See your match score on every listing" },
];

const stats = [
  { label: "Job Match", value: "91%", meta: "Best match for your profile" },
  { label: "Applications", value: "12", meta: "Sent this month" },
];

export function AppHome() {
  return (
    <div className="bg-white px-4 py-5">
      <div className="flex items-center justify-between">
        <p className="font-display text-sm font-extrabold tracking-tight text-[#17264a]">
          GetHyre<span className="text-brand-500">.ai</span>
        </p>
        <span className="brand-gradient flex h-7 w-7 items-center justify-center rounded-full font-display text-[10px] font-bold text-white">
          A
        </span>
      </div>

      <p className="mt-3 font-display text-base font-bold text-ink">
        Good morning, Aarav
      </p>

      <motion.div
        className="brand-gradient relative mt-3 overflow-hidden rounded-2xl p-4 text-white"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/15 blur-2xl" />
        <div className="relative">
          <div className="flex items-start justify-between gap-3">
            <p className="text-[11px] font-medium text-white/80">
              Your Employability Score
            </p>
            <span className="rounded-full bg-white/20 px-2 py-0.5 text-[9px] font-bold">
              +6 this week
            </span>
          </div>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="font-display text-4xl font-extrabold leading-none">
              <CountUp to={SCORE} />
            </span>
            <span className="text-xs font-semibold text-white/60">/ 100</span>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/25">
            <motion.div
              className="h-full rounded-full bg-white"
              initial={{ width: 0 }}
              whileInView={{ width: `${SCORE}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <p className="mt-2 text-[10px] text-white/70">
            Competitive for Data Analyst roles
          </p>
        </div>
      </motion.div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2.5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.3 + i * 0.09 }}
          >
            <p className="truncate text-[10px] font-medium text-ink-muted">
              {stat.label}
            </p>
            <p className="mt-0.5 font-display text-lg font-extrabold leading-none text-ink">
              {stat.value}
            </p>
            <p className="mt-1 text-[10px] leading-tight text-ink-muted">
              {stat.meta}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2">
        <p className="text-[11px] font-bold text-ink">Quick Actions</p>
        <AiTag />
      </div>

      <div className="mt-2 space-y-2">
        {today.map((item, i) => (
          <motion.div
            key={item.title}
            className="flex items-center justify-between gap-2 rounded-xl border border-zinc-200 px-3 py-2.5"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.45 + i * 0.09 }}
          >
            <div className="min-w-0">
              <p className="truncate text-[11px] font-semibold text-ink">
                {item.title}
              </p>
              <p className="truncate text-[10px] text-ink-muted">{item.meta}</p>
            </div>
            <svg
              viewBox="0 0 20 20"
              className="h-3.5 w-3.5 shrink-0 text-brand-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              aria-hidden
            >
              <path d="M7 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
