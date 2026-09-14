import clsx from "clsx";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
      {children}
    </span>
  );
}

export function BetaBadge({ className }: { className?: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-700",
        className,
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-70" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
      </span>
      Private Beta
    </span>
  );
}

export function AiTag({ className }: { className?: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 rounded-md bg-brand-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-600",
        className,
      )}
    >
      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden>
        <path d="M12 2l1.8 5.4L19 9l-5.2 1.6L12 16l-1.8-5.4L5 9l5.2-1.6L12 2zM18 15l.9 2.6L21 18.5l-2.1.9L18 22l-.9-2.6L15 18.5l2.1-.9L18 15z" />
      </svg>
      AI
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="max-w-3xl text-3xl font-extrabold leading-[1.15] text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {body ? (
        <p className="max-w-2xl text-base leading-7 text-ink-muted sm:text-lg">{body}</p>
      ) : null}
    </div>
  );
}

export function StatusPill({
  status,
  children,
}: {
  status: "good" | "warn" | "bad";
  children: React.ReactNode;
}) {
  const styles = {
    good: "bg-good-soft text-good",
    warn: "bg-warn-soft text-[#b45309]",
    bad: "bg-bad-soft text-bad",
  }[status];

  return (
    <span
      className={clsx(
        "inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-[11px] font-semibold",
        styles,
      )}
    >
      {children}
    </span>
  );
}
