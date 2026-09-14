"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { CountUp } from "@/components/ui/CountUp";
import { scoreBreakdown } from "@/lib/site";

const RADIUS = 78;
const CIRCUMFERENCE = Math.PI * RADIUS; // semicircle

export function ScoreGauge({ score = 72 }: { score?: number }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  const offset = CIRCUMFERENCE * (1 - score / 100);

  return (
    <div className="relative flex flex-col items-center">
      <svg
        ref={ref}
        viewBox="0 0 200 110"
        className="w-full max-w-[230px]"
        role="img"
        aria-label={`Employability score ${score} out of 100`}
      >
        <defs>
          <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#c4b5fd" />
          </linearGradient>
        </defs>
        <path
          d={`M ${100 - RADIUS} 100 A ${RADIUS} ${RADIUS} 0 0 1 ${100 + RADIUS} 100`}
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <motion.path
          d={`M ${100 - RADIUS} 100 A ${RADIUS} ${RADIUS} 0 0 1 ${100 + RADIUS} 100`}
          fill="none"
          stroke="url(#gaugeGrad)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          initial={reduced ? { strokeDashoffset: offset } : { strokeDashoffset: CIRCUMFERENCE }}
          animate={inView ? { strokeDashoffset: offset } : undefined}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="-mt-12 flex flex-col items-center">
        <span className="font-display text-5xl font-extrabold text-white">
          <CountUp to={score} />
        </span>
        <span className="text-xs font-medium text-white/70">out of 100</span>
      </div>
    </div>
  );
}

export function EmployabilityScoreCard({ score = 72 }: { score?: number }) {
  return (
    <div className="brand-gradient relative overflow-hidden rounded-3xl p-6 text-white shadow-[0_30px_70px_-25px_rgba(75,58,240,0.6)]">
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-white/80">Employability Score</p>
          <p className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            Competitive
          </p>
        </div>
        <span className="rounded-lg bg-white/15 px-2 py-1 text-[10px] font-bold uppercase tracking-wide">
          Updated today
        </span>
      </div>

      <div className="relative mt-2">
        <ScoreGauge score={score} />
      </div>

      <div className="relative mt-5 grid grid-cols-3 gap-2.5">
        {scoreBreakdown.map((item, i) => (
          <motion.div
            key={item.label}
            className="rounded-xl bg-white/12 px-3 py-2.5 backdrop-blur-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.5 + i * 0.07 }}
          >
            <p className="text-[10px] font-medium text-white/70">{item.label}</p>
            <p className="font-display text-lg font-bold">{item.value}</p>
            <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/20">
              <motion.div
                className="h-full rounded-full bg-white/90"
                initial={{ width: 0 }}
                whileInView={{ width: `${item.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 + i * 0.07 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
