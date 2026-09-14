import Link from "next/link";
import clsx from "clsx";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      aria-hidden
      focusable="false"
    >
      {/* open ring, gap at the top right */}
      <circle
        cx="32"
        cy="32"
        r="23"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray="110 45"
      />
      {/* road receding towards the horizon */}
      <path
        d="M15 53 C19.5 43 24 34 27.4 26 L31.8 26 C32.2 35 33.5 44 35.5 53 Z"
        fill="currentColor"
        opacity="0.18"
      />
      <path
        d="M15 53 C19.5 43 24 34 27.4 26M35.5 53 C33.5 44 32.2 35 31.8 26"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M26 50 L28 44M29 39.5 L29.8 34"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* arrow lifting away through the gap */}
      <path
        d="M29 41 C33 33 38.5 25.5 46.5 19.5"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M37.5 17 L48 15.5 L46.8 26"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* sparkles */}
      <path
        d="M24 21 L25.1 18.2 L26.2 21 L29 22.1 L26.2 23.2 L25.1 26 L24 23.2 L21.2 22.1 Z"
        fill="currentColor"
      />
      <path
        d="M32.2 14.4 L32.9 12.6 L33.6 14.4 L35.4 15.1 L33.6 15.8 L32.9 17.6 L32.2 15.8 L30.4 15.1 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Logo({
  className,
  withTagline = false,
}: {
  className?: string;
  withTagline?: boolean;
}) {
  return (
    <Link href="/" className={clsx("group inline-flex", className)} aria-label="GetHyre.ai home">
      <span className="flex items-center gap-2.5">
        <LogoMark className="h-11 w-11 shrink-0 text-[#17264a] transition-transform duration-200 group-hover:-translate-y-0.5" />
        <span className="flex flex-col leading-none">
          <span className="font-display text-xl font-extrabold tracking-tight text-[#17264a]">
            GetHyre<span className="text-brand-500">.ai</span>
          </span>
          {withTagline ? (
            <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.18em] text-zinc-400">
              AI-Driven Placement Solutions
            </span>
          ) : null}
        </span>
      </span>
    </Link>
  );
}
