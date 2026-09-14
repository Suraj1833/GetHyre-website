"use client";

import { PLAY_STORE_URL, resolveStoreUrl } from "@/lib/site";

export function StoreLink({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={PLAY_STORE_URL}
      className={className}
      rel="noopener noreferrer"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = resolveStoreUrl(window.navigator.userAgent);
      }}
    >
      {children}
    </a>
  );
}
