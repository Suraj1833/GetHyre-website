"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CountUp } from "@/components/ui/CountUp";

const SCORE = 72;

const quickActions = [
  { label: "Practice Interview", meta: "Practised 3 days ago" },
  { label: "Improve Skills", meta: "4 skill gaps found" },
];

const suggestions = [
  { title: "Add work responsibilities", meta: "Improves your resume score" },
  { title: "Practice an interview", meta: "Boosts your confidence score" },
];

const tabs = ["Home", "Resume", "Jobs", "Profile", "Plan"];

function Gauge() {
  const reduced = useReducedMotion();
  const angle = -90 + (SCORE / 100) * 180;

  return (
    <div className="relative mx-auto w-[150px]">
      <svg viewBox="0 0 120 70" className="w-full" aria-hidden>
        <defs>
          <linearGradient id="appGauge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f87171" />
            <stop offset="50%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#4ade80" />
          </linearGradient>
        </defs>
        <path
          d="M16 60 A 44 44 0 0 1 104 60"
          fill="none"
          stroke="url(#appGauge)"
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray="11 3.5"
        />
        <motion.g
          initial={reduced ? { rotate: angle } : { rotate: -90 }}
          whileInView={{ rotate: angle }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "60px 60px" }}
        >
          <line
            x1="60"
            y1="60"
            x2="60"
            y2="45"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </motion.g>
        <circle cx="60" cy="60" r="4.5" fill="#ffffff" />
      </svg>
      <p className="absolute inset-x-0 top-[26%] text-center font-display text-2xl font-extrabold leading-none text-white">
        <CountUp to={SCORE} />
      </p>
    </div>
  );
}

export function AppHome() {
  return (
    <div className="bg-white pb-0 pt-4">
      <div className="px-4">
        <p className="font-display text-sm font-extrabold tracking-tight text-brand-500">
          GetHyre<span className="text-brand-700">.ai</span>
        </p>
        <p className="mt-2 font-display text-base font-bold text-ink">
          Good evening, Aditi
        </p>

        <motion.div
          className="brand-gradient mt-3 rounded-2xl px-4 pb-3 pt-3 text-white"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <p className="text-center text-[10px] font-medium text-white/80">
            Your Employability Score
          </p>
          <Gauge />
          <p className="mt-1.5 text-center text-xs font-bold">Competitive</p>
          <p className="text-center text-[9px] text-white/70">Updated just now</p>
        </motion.div>

        <p className="mt-4 text-[11px] font-bold text-ink">Quick Actions</p>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {quickActions.map((action, i) => (
            <motion.div
              key={action.label}
              className="rounded-xl border border-zinc-200 p-2.5"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.35 + i * 0.08 }}
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-md bg-brand-50 text-[9px] font-bold text-brand-600">
                ✦
              </span>
              <p className="mt-1.5 text-[10px] font-semibold leading-tight text-ink">
                {action.label}
              </p>
              <p className="mt-0.5 text-[9px] leading-tight text-ink-muted">
                {action.meta}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="mt-4 text-[11px] font-bold text-ink">Suggested Improvements</p>
        <div className="mt-2 space-y-2">
          {suggestions.map((item, i) => (
            <motion.div
              key={item.title}
              className="flex items-center justify-between gap-2 rounded-xl border border-zinc-200 px-2.5 py-2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.5 + i * 0.08 }}
            >
              <div className="min-w-0">
                <p className="truncate text-[10px] font-semibold text-ink">
                  {item.title}
                </p>
                <p className="truncate text-[9px] text-ink-muted">{item.meta}</p>
              </div>
              <span className="shrink-0 text-[9px] font-bold tracking-wide text-brand-600">
                FIX IT
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-zinc-200 px-3 py-2.5">
        {tabs.map((tab) => (
          <span
            key={tab}
            className={
              tab === "Home"
                ? "text-[8px] font-bold uppercase tracking-wide text-brand-600"
                : "text-[8px] font-medium uppercase tracking-wide text-zinc-400"
            }
          >
            {tab}
          </span>
        ))}
      </div>
    </div>
  );
}
