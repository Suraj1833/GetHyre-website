"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { AiTag } from "@/components/ui/Bits";

const jobs = [
  { role: "Data Analyst", company: "Fintech startup", meta: "Bengaluru · Full-time · 0-2 yrs", match: 92 },
  { role: "Business Analyst", company: "Consulting firm", meta: "Hybrid · Full-time · Fresher", match: 84 },
  { role: "Product Analyst", company: "E-commerce", meta: "Remote · Internship · Fresher", match: 71 },
  { role: "Operations Associate", company: "Logistics", meta: "Pune · Full-time · 0-1 yr", match: 63 },
];

function matchTone(match: number) {
  if (match >= 80) return { chip: "bg-good-soft text-good", bar: "bg-good" };
  return { chip: "bg-warn-soft text-[#b45309]", bar: "bg-warn" };
}

export function JobMatchList({ compact = false }: { compact?: boolean }) {
  return (
    <div className="rounded-2xl bg-white p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-ink">Jobs For You</p>
          <AiTag />
        </div>
        <p className="text-[11px] text-ink-muted">{jobs.length} matches</p>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {["Location", "Job type", "Experience", "Date posted"].map((filter) => (
          <span
            key={filter}
            className="rounded-full border border-zinc-200 px-2.5 py-1 text-[10px] font-medium text-ink-muted"
          >
            {filter}
          </span>
        ))}
      </div>

      <div className="mt-4 space-y-2.5">
        {jobs.slice(0, compact ? 3 : jobs.length).map((job, i) => {
          const tone = matchTone(job.match);
          return (
            <motion.div
              key={job.role}
              className="group rounded-xl border border-zinc-100 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_14px_30px_-20px_rgba(75,58,240,0.7)]"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.09 }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-ink">{job.role}</p>
                  <p className="truncate text-[11px] text-ink-muted">{job.company}</p>
                  <p className="mt-0.5 truncate text-[10px] text-zinc-400">{job.meta}</p>
                </div>
                <span
                  className={clsx(
                    "shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold",
                    tone.chip,
                  )}
                >
                  {job.match}%
                </span>
              </div>
              <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-zinc-100">
                <motion.div
                  className={clsx("h-full rounded-full", tone.bar)}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${job.match}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.09 }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
