"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { StoreLink } from "@/components/layout/StoreLink";
import { productLinks } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeAll = () => {
    setProductOpen(false);
    setMobileOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const initial = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(initial);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setProductOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openProduct = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProductOpen(true);
  };

  const scheduleCloseProduct = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setProductOpen(false), 120);
  };

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-zinc-200/80 bg-white/85 backdrop-blur-md"
          : "border-b border-transparent bg-white/0",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            <div
              className="relative"
              onMouseEnter={openProduct}
              onMouseLeave={scheduleCloseProduct}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
                aria-expanded={productOpen}
                aria-haspopup="true"
                onClick={() => setProductOpen((v) => !v)}
              >
                Product
                <motion.svg
                  viewBox="0 0 20 20"
                  className="h-3.5 w-3.5"
                  fill="currentColor"
                  animate={{ rotate: productOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  aria-hidden
                >
                  <path d="M5.5 7.5L10 12l4.5-4.5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {productOpen ? (
                  <motion.div
                    className="absolute left-1/2 top-full w-[540px] -translate-x-1/2 pt-3"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className="grid grid-cols-2 gap-1 rounded-2xl border border-zinc-200 bg-white p-3 shadow-[0_24px_60px_-25px_rgba(11,11,18,0.4)]">
                      {productLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={closeAll}
                          className="group rounded-xl p-3 transition-colors hover:bg-brand-50/70"
                        >
                          <p className="text-sm font-semibold text-ink group-hover:text-brand-700">
                            {link.label}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                            {link.blurb}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            <Link
              href="/pricing"
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              About
            </Link>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <StoreLink className="rounded-full px-4 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink">
              Log in
            </StoreLink>
            <Button href="/waitlist">Join Waitlist</Button>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-ink md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            <span className="flex flex-col gap-1.5">
              <motion.span
                className="block h-0.5 w-5 rounded-full bg-current"
                animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-0.5 w-5 rounded-full bg-current"
                animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </span>
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className="overflow-hidden border-t border-zinc-200 bg-white md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Container className="py-4">
              <p className="px-1 pb-2 text-[11px] font-bold uppercase tracking-wide text-zinc-400">
                Product
              </p>
              <div className="flex flex-col">
                {productLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeAll}
                    className="rounded-lg px-1 py-2.5 text-sm font-medium text-ink"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-3 flex flex-col border-t border-zinc-100 pt-3">
                <Link
                  href="/pricing"
                  onClick={closeAll}
                  className="rounded-lg px-1 py-2.5 text-sm font-medium text-ink"
                >
                  Pricing
                </Link>
                <Link
                  href="/about"
                  onClick={closeAll}
                  className="rounded-lg px-1 py-2.5 text-sm font-medium text-ink"
                >
                  About
                </Link>
                <StoreLink className="rounded-lg px-1 py-2.5 text-sm font-medium text-ink">
                  Log in
                </StoreLink>
              </div>
              <Button href="/waitlist" onClick={closeAll} className="mt-4 w-full" size="lg">
                Join Waitlist
              </Button>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
