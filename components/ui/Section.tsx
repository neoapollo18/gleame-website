import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

/**
 * A full-bleed band with a rule underneath and the framed page column inside.
 * Stacking these is what draws the page's grid of guide lines.
 */
export function Section({
  id,
  children,
  className,
  frameClassName,
  tone = "white",
  rule = true,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  frameClassName?: string;
  tone?: "white" | "wash" | "blush" | "dark";
  rule?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        tone === "wash" && "bg-wash",
        tone === "blush" && "bg-blush",
        tone === "dark" && "bg-ink text-white",
        rule && (tone === "dark" ? "border-b border-white/10" : "border-b border-line"),
        className
      )}
    >
      <div
        className={cn(
          "frame frame-pad",
          tone === "dark" && "sm:border-white/10",
          frameClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}

/** Two-tone heading: the first clause in ink, the rest in muted. */
export function SplitHeading({
  lead,
  rest,
  as: Tag = "h2",
  className,
  dark = false,
}: {
  lead: React.ReactNode;
  rest?: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
  dark?: boolean;
}) {
  const restTone = dark ? "text-[#D9B3F2]" : "text-brand-pop";

  // Page titles sit above the fold, so they animate on load rather than on scroll.
  if (Tag === "h1") {
    return (
      <h1 className={cn("load-rise text-balance", className)}>
        <span className={dark ? "text-white" : "text-ink"}>{lead}</span>
        {rest && (
          <>
            {" "}
            <span className={cn("load-fade", restTone)} style={{ ["--d" as string]: "160ms" }}>
              {rest}
            </span>
          </>
        )}
      </h1>
    );
  }

  return (
    <Reveal as={Tag} className={cn("text-balance", className)}>
      <span className={dark ? "text-white" : "text-ink"}>{lead}</span>
      {rest && (
        <>
          {" "}
          <span className={cn("rv-rest", restTone)}>{rest}</span>
        </>
      )}
    </Reveal>
  );
}
