import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "inverse" | "outline-dark";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-ink-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]",
  secondary: "bg-white text-ink border border-line-strong hover:border-ink/40 hover:bg-wash",
  ghost: "text-ink hover:bg-wash",
  inverse: "bg-white text-ink hover:bg-brand-50",
  "outline-dark": "border border-white/25 text-white hover:border-white/60 hover:bg-white/5",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-[13px]",
  md: "h-10 px-4 text-[14px]",
  lg: "h-12 px-5 text-[15px]",
};

export function Chevron({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 10 10"
      aria-hidden="true"
      className={cn("h-2.5 w-2.5 overflow-visible", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path
        d="M0 5h7"
        className="opacity-0 transition-opacity duration-150 group-hover:opacity-100"
      />
      <path
        d="M3 1l4 4-4 4"
        className="transition-transform duration-150 group-hover:translate-x-[2px]"
      />
    </svg>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  external = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  external?: boolean;
  className?: string;
}) {
  const cls = cn(
    "group inline-flex shrink-0 items-center justify-center gap-2 rounded-box font-medium tracking-[-0.01em] transition-colors duration-150",
    variants[variant],
    sizes[size],
    className
  );
  const content = (
    <>
      {children}
      {arrow && <Chevron />}
    </>
  );
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  className,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  const cls = cn(
    "group inline-flex items-center gap-1.5 font-medium text-brand hover:text-brand-deep",
    className
  );
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
        <Chevron />
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      <Chevron />
    </Link>
  );
}
