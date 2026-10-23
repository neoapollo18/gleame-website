import { cn } from "@/lib/utils";

/** Sample catalog for a fictional lacquer brand, used across the mocks. */
export const CATALOG = {
  cherry: { name: "Cherry Lacquer", shade: "#8E1B2C", price: "$18" },
  ballet: { name: "Ballet Slipper", shade: "#E8C3BE", price: "$16" },
  espresso: { name: "Espresso", shade: "#3B2620", price: "$18" },
  sage: { name: "Sage Chrome", shade: "#9AA88B", price: "$20" },
  linen: { name: "Nude Linen", shade: "#D7B79F", price: "$16" },
  plum: { name: "Plum Velvet", shade: "#5B1E46", price: "$18" },
  coral: { name: "Coral Hour", shade: "#E0705A", price: "$16" },
  midnight: { name: "Midnight Ink", shade: "#1E1C2E", price: "$18" },
} as const;

export type ProductKey = keyof typeof CATALOG;

/** A product shot drawn in CSS: a lacquer bottle on a soft backdrop. */
export function ProductArt({
  shade,
  className,
  backdrop = "#F3EEEA",
  size = "md",
}: {
  shade: string;
  className?: string;
  backdrop?: string;
  size?: "sm" | "md" | "lg";
}) {
  const s = {
    sm: { cap: "h-[22%] w-[18%]", body: "h-[38%] w-[34%]" },
    md: { cap: "h-[22%] w-[17%]", body: "h-[40%] w-[34%]" },
    lg: { cap: "h-[20%] w-[15%]", body: "h-[38%] w-[30%]" },
  }[size];
  return (
    <div
      className={cn("relative flex flex-col items-center justify-center overflow-hidden", className)}
      style={{ background: backdrop }}
    >
      <div
        className="absolute inset-x-0 bottom-0 h-[34%]"
        style={{ background: "linear-gradient(to top, rgba(11,10,14,0.06), transparent)" }}
      />
      <div className={cn("relative z-[1] rounded-t-[3px] bg-[#16141A]", s.cap)} />
      <div
        className={cn("relative z-[1] -mt-px rounded-[22%_22%_18%_18%/14%_14%_12%_12%]", s.body)}
        style={{
          background: `linear-gradient(100deg, ${shade} 0%, ${shade} 55%, rgba(255,255,255,0.18) 56%, ${shade} 64%, ${shade} 100%)`,
          boxShadow: `inset 0 -6px 10px rgba(0,0,0,0.18), inset 0 2px 0 rgba(255,255,255,0.25), 0 8px 14px -8px ${shade}`,
        }}
      />
    </div>
  );
}

export function Dot({ tone }: { tone: "green" | "amber" | "gray" | "brand" }) {
  return (
    <span
      className={cn(
        "inline-block h-1.5 w-1.5 shrink-0 rounded-full",
        tone === "green" && "bg-signal-green",
        tone === "amber" && "bg-[#C98A00]",
        tone === "gray" && "bg-line-strong",
        tone === "brand" && "bg-brand"
      )}
    />
  );
}

export function Badge({
  children,
  tone = "gray",
  className,
}: {
  children: React.ReactNode;
  tone?: "gray" | "green" | "amber" | "red" | "brand" | "ink";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-[4px] px-1.5 py-[1px] text-[11px] font-medium leading-[18px]",
        tone === "gray" && "bg-wash-2 text-ink-3",
        tone === "green" && "bg-signal-greenbg text-signal-green",
        tone === "amber" && "bg-signal-amberbg text-signal-amber",
        tone === "red" && "bg-signal-redbg text-signal-red",
        tone === "brand" && "bg-brand-100 text-brand",
        tone === "ink" && "bg-ink text-white",
        className
      )}
    >
      {children}
    </span>
  );
}

export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={cn("h-3.5 w-3.5 shrink-0", className)} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M3.5 8.5l3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SparkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={cn("h-3.5 w-3.5 shrink-0", className)} fill="currentColor" aria-hidden="true">
      <path d="M8 1.5l1.3 3.7 3.7 1.3-3.7 1.3L8 11.5 6.7 7.8 3 6.5l3.7-1.3L8 1.5zM12.5 10l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6.6-1.4z" />
    </svg>
  );
}

/** Thin window chrome used to frame mocks. */
export function Window({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: React.ReactNode;
}) {
  return (
    <div className={cn("overflow-hidden rounded-[8px] border border-line-strong bg-white shadow-card", className)}>
      {title !== undefined && (
        <div className="flex h-8 items-center gap-2 border-b border-line bg-wash px-3">
          <span className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
          </span>
          <span className="mx-auto truncate font-mono text-[10.5px] text-muted">{title}</span>
          <span className="w-8" />
        </div>
      )}
      {children}
    </div>
  );
}
