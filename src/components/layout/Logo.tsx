import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/logo.png"
      alt="GetHyre logo"
      width={459}
      height={441}
      priority
      // object-contain keeps the mark's aspect ratio inside the square slot
      className={clsx("object-contain", className)}
    />
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
