import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { BetaBadge } from "@/components/ui/Bits";
import { footerColumns } from "@/lib/site";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/gethyre-ai/",
    external: true,
  },
  { label: "X", href: "#", external: false },
  { label: "Instagram", href: "#", external: false },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50/60">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              AI career preparation for students and early-career job seekers in
              India. Currently in private beta.
            </p>
            <BetaBadge className="mt-4" />
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-bold uppercase tracking-wide text-ink">
                {column.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-muted transition-colors hover:text-brand-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-zinc-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} GetHyre.ai. All rights reserved.
          </p>
          <div className="flex gap-5">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-xs text-ink-muted transition-colors hover:text-brand-600"
                rel="noopener noreferrer"
                {...(social.external ? { target: "_blank" } : {})}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
