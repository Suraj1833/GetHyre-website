import clsx from "clsx";

export function PhoneFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "relative mx-auto w-full max-w-[320px] rounded-[2.5rem] border border-zinc-200 bg-white p-2.5 shadow-[0_30px_70px_-30px_rgba(11,11,18,0.45)]",
        className,
      )}
    >
      <div className="overflow-hidden rounded-[2rem] bg-zinc-50">{children}</div>
    </div>
  );
}

export function BrowserFrame({
  children,
  className,
  label = "gethyre.ai",
}: {
  children: React.ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={clsx(
        "overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_30px_70px_-35px_rgba(11,11,18,0.45)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-zinc-100 bg-zinc-50/80 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
        <span className="ml-3 truncate rounded-md bg-white px-3 py-1 text-[11px] text-zinc-400 ring-1 ring-zinc-200">
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}
