import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={className}
      aria-label="GetHyre.ai home"
    >
      <span className="flex items-center gap-2">
        <span className="brand-gradient flex h-8 w-8 items-center justify-center rounded-lg font-display text-sm font-extrabold text-white">
          G
        </span>
        <span className="font-display text-lg font-extrabold tracking-tight text-ink">
          GetHyre<span className="text-brand-500">.ai</span>
        </span>
      </span>
    </Link>
  );
}
