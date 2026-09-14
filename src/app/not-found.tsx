import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { productLinks } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-40 -top-32 h-[460px] w-[460px] rounded-full bg-brand-100/50 blur-3xl" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="brand-gradient-text font-display text-7xl font-extrabold sm:text-8xl">
            404
          </p>
          <h1 className="mt-6 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            This page isn&apos;t in the plan.
          </h1>
          <p className="mt-4 text-base leading-7 text-ink-muted">
            The link may be broken or the page may have moved. Here&apos;s where
            most people are heading.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/" size="lg">
              Back to home
            </Button>
            <Button href="/waitlist" variant="secondary" size="lg">
              Join the waitlist
            </Button>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {productLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-xl border border-zinc-200 bg-white px-5 py-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_16px_35px_-22px_rgba(75,58,240,0.6)]"
              >
                <p className="text-sm font-semibold text-ink group-hover:text-brand-700">
                  {link.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
