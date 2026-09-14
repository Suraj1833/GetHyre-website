import Link from "next/link";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost" | "inverse";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white shadow-[0_6px_20px_-8px_rgba(75,58,240,0.9)] hover:bg-brand-600 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-10px_rgba(75,58,240,0.95)]",
  secondary:
    "border border-zinc-200 bg-white text-ink hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-[0_10px_24px_-14px_rgba(11,11,18,0.45)]",
  ghost: "text-ink-muted hover:text-ink",
  inverse:
    "bg-white text-brand-700 shadow-[0_6px_20px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 hover:bg-brand-50",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type SharedProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type LinkButtonProps = SharedProps & {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedProps | "href">;

type NativeButtonProps = SharedProps & {
  href?: never;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps>;

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const classes = clsx(base, variants[variant], sizes[size], className);

  if (typeof rest.href === "string") {
    const { href, ...anchorProps } = rest as { href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>;

    if (href.startsWith("http")) {
      return (
        <a href={href} className={classes} rel="noopener noreferrer" {...anchorProps}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
