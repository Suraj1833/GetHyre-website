"use client";

import { useState } from "react";
import { submitDeletionRequest } from "@/lib/deleteAccount";

type State = "idle" | "loading" | "done" | "error";

const FIELD =
  "w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-ink outline-none transition-all placeholder:text-zinc-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-100";
const LABEL = "mb-1.5 block text-xs font-semibold text-ink";

const reasons = [
  "Found a job",
  "Not useful for me",
  "Privacy concerns",
  "Too expensive",
  "Other",
];

const returnOptions = ["Yes", "Maybe", "No"];

export function DeleteAccountForm() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [improvement, setImprovement] = useState("");
  const [wouldReturn, setWouldReturn] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [botField, setBotField] = useState("");
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");
  const [sentTo, setSentTo] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    if (!confirmed) {
      setState("error");
      setMessage("Please confirm you understand this is permanent.");
      return;
    }

    // Honeypot: only bots fill this, so show the success state and send nothing.
    if (botField) {
      setSentTo(email.trim().toLowerCase());
      setState("done");
      return;
    }

    setState("loading");
    try {
      await submitDeletionRequest({ email, reason, improvement, wouldReturn });
      setSentTo(email.trim().toLowerCase());
      setState("done");
    } catch {
      setState("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  if (state === "done") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-good/30 bg-good-soft/50 p-5"
      >
        <p className="font-display text-base font-bold text-ink">
          Request received.
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
          We will email you at{" "}
          <span className="font-semibold text-ink">{sentTo}</span> to confirm it
          is you before anything is deleted.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5" noValidate>
      <input
        type="text"
        name="botcheck"
        value={botField}
        onChange={(e) => setBotField(e.target.value)}
        className="absolute left-[-9999px] top-0 h-0 w-0 opacity-0"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
      />

      <div>
        <label htmlFor="delete-email" className={LABEL}>
          Email address
        </label>
        <input
          id="delete-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state === "error") setState("idle");
          }}
          placeholder="you@example.com"
          aria-invalid={state === "error"}
          className={FIELD}
        />
      </div>

      <div>
        <label htmlFor="delete-reason" className={LABEL}>
          Why are you deleting your account? (optional)
        </label>
        <select
          id="delete-reason"
          name="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className={FIELD}
        >
          <option value="">Prefer not to say</option>
          {reasons.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="delete-improvement" className={LABEL}>
          What could we have done better? (optional)
        </label>
        <textarea
          id="delete-improvement"
          name="improvement"
          rows={4}
          value={improvement}
          onChange={(e) => setImprovement(e.target.value)}
          className={`${FIELD} resize-y`}
        />
      </div>

      <div>
        <label htmlFor="delete-return" className={LABEL}>
          Would you consider coming back? (optional)
        </label>
        <select
          id="delete-return"
          name="would_return"
          value={wouldReturn}
          onChange={(e) => setWouldReturn(e.target.value)}
          className={FIELD}
        >
          <option value="">Prefer not to say</option>
          {returnOptions.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-3 rounded-xl border border-zinc-200 bg-zinc-50/60 p-4">
        <input
          id="delete-confirm"
          name="confirm"
          type="checkbox"
          checked={confirmed}
          onChange={(e) => {
            setConfirmed(e.target.checked);
            if (state === "error") setState("idle");
          }}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-zinc-300 text-brand-500 focus:ring-2 focus:ring-brand-400"
        />
        <label
          htmlFor="delete-confirm"
          className="text-sm leading-relaxed text-ink-muted"
        >
          I understand this permanently deletes my account and data.
        </label>
      </div>

      <button
        type="submit"
        disabled={state === "loading"}
        className="rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600 disabled:opacity-60"
      >
        {state === "loading" ? "Sending…" : "Request deletion"}
      </button>

      <p role="status" aria-live="polite" className="min-h-[1rem] text-xs">
        {state === "error" ? (
          <span className="text-bad">{message}</span>
        ) : (
          <span className="sr-only">Form ready.</span>
        )}
      </p>
    </form>
  );
}
