"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

type State = "idle" | "loading" | "done" | "error";

export function WaitlistForm({
  variant = "light",
  showGoal = false,
}: {
  variant?: "light" | "dark";
  showGoal?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState("");
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");

  const dark = variant === "dark";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setState("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, goal }),
      });
      if (!res.ok) throw new Error("Request failed");
      setState("done");
    } catch {
      setState("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-md">
      <AnimatePresence mode="wait">
        {state === "done" ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className={clsx(
              "rounded-2xl border p-5",
              dark
                ? "border-white/20 bg-white/10 text-white"
                : "border-good/30 bg-good-soft/50 text-ink",
            )}>
            <p className="font-display text-base font-bold">
              You&apos;re on the list.
            </p>
            <p
              className={clsx(
                "mt-1.5 text-sm leading-relaxed",
                dark ? "text-white/75" : "text-ink-muted",
              )}>
              We&apos;ll email <span className="font-semibold">{email}</span> as
              soon as your beta invite is ready. Invites go out in small
              batches, so hang tight.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-3"
            noValidate>
            {showGoal ? (
              <div>
                <label
                  htmlFor="goal"
                  className={clsx(
                    "mb-1.5 block text-xs font-semibold",
                    dark ? "text-white/80" : "text-ink",
                  )}>
                  What role are you targeting? (optional)
                </label>
                <input
                  id="goal"
                  type="text"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="e.g. Data Analyst"
                  className={clsx(
                    "w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all",
                    dark
                      ? "border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-white/50"
                      : "border-zinc-200 bg-white text-ink placeholder:text-zinc-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-100",
                  )}
                />
              </div>
            ) : null}

            <div>
              {showGoal ? (
                <label
                  htmlFor="email"
                  className={clsx(
                    "mb-1.5 block text-xs font-semibold",
                    dark ? "text-white/80" : "text-ink",
                  )}>
                  Email address
                </label>
              ) : (
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
              )}
              <div
                className={clsx(
                  showGoal ? "" : "flex flex-col gap-3 sm:flex-row",
                )}>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (state === "error") setState("idle");
                  }}
                  placeholder="you@college.edu"
                  aria-invalid={state === "error"}
                  className={clsx(
                    "w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all",
                    dark
                      ? "border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-white/50"
                      : "border-zinc-200 bg-white text-ink placeholder:text-zinc-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-100",
                  )}
                />
                {!showGoal ? (
                  <button
                    type="submit"
                    disabled={state === "loading"}
                    className={clsx(
                      "shrink-0 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60",
                      dark
                        ? "bg-white text-brand-700 hover:bg-white/90"
                        : "bg-brand-500 text-white hover:bg-brand-600",
                    )}>
                    {state === "loading" ? "Joining…" : "Join waitlist"}
                  </button>
                ) : null}
              </div>
            </div>

            {showGoal ? (
              <button
                type="submit"
                disabled={state === "loading"}
                className={clsx(
                  "mt-1 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60",
                  dark
                    ? "bg-white text-brand-700 hover:bg-white/90"
                    : "bg-brand-500 text-white hover:bg-brand-600",
                )}>
                {state === "loading" ? "Joining…" : "Join the waitlist"}
              </button>
            ) : null}

            {state === "error" ? (
              <p
                role="alert"
                className={clsx(
                  "text-xs",
                  dark ? "text-rose-200" : "text-bad",
                )}>
                {message}
              </p>
            ) : (
              <p
                className={clsx(
                  "text-xs",
                  dark ? "text-white/60" : "text-zinc-500",
                )}>
                No spam. We email you once, when your invite is ready.
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
