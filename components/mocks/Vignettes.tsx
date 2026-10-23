import { cn } from "@/lib/utils";
import { Mark } from "@/components/brand/Logo";
import { Badge, CATALOG, CheckIcon, Dot, ProductArt, SparkIcon, type ProductKey } from "./primitives";

/* Results screen: what the shopper sees at the end of the quiz. */
export function ResultsVignette({ className }: { className?: string }) {
  const picks: ProductKey[] = ["cherry", "ballet", "espresso", "sage"];
  return (
    <div className={cn("w-full max-w-[300px] overflow-hidden rounded-[22px] border-[5px] border-ink bg-white shadow-float", className)}>
      <div className="flex items-center justify-between px-4 pb-2 pt-3 text-[10px] font-semibold">
        <span>9:41</span>
        <span className="h-3.5 w-14 rounded-full bg-ink" />
        <span className="flex gap-0.5">
          <span className="h-2 w-3 rounded-[2px] bg-ink" />
        </span>
      </div>
      <div className="flex items-center justify-between border-b border-line px-4 pb-2.5">
        <span className="h-[1.5px] w-3.5 bg-ink shadow-[0_4px_0_#0B0A0E]" />
        <span className="text-[10.5px] font-semibold tracking-[0.22em]">OSTRA</span>
        <span className="h-3 w-3 rounded-[2px] border-[1.5px] border-ink" />
      </div>
      <div className="px-4 pb-4 pt-3">
        <p className="text-[10px] text-muted">Your matches</p>
        <p className="text-[19px] font-semibold tracking-[-0.025em]">Picked for you.</p>
        <div className="mt-2.5 grid grid-cols-2 gap-2">
          {picks.map((k, i) => (
            <div key={k}>
              <div className="relative">
                <ProductArt shade={CATALOG[k].shade} className="aspect-square rounded-[8px]" />
                {i === 0 && (
                  <span className="absolute left-1.5 top-1.5 rounded-full bg-ink px-1.5 py-[2px] text-[7.5px] font-semibold tracking-[0.12em] text-white">
                    BEST MATCH
                  </span>
                )}
              </div>
              <p className="mt-1 truncate text-[10.5px] font-medium">{CATALOG[k].name}</p>
            </div>
          ))}
        </div>
        <span className="mt-3 flex h-9 items-center justify-center rounded-full bg-ink text-[11.5px] font-semibold text-white">
          Add all to cart
        </span>
      </div>
    </div>
  );
}

/* A single question card, as it appears floating over the results. */
export function QuestionVignette({ className }: { className?: string }) {
  const opts = [
    { l: "Soft & natural", c: "#E8C3BE" },
    { l: "Clean & classic", c: "#D7B79F", on: true },
    { l: "Bold & bright", c: "#B4232F" },
    { l: "Dark & moody", c: "#2A2320" },
  ];
  return (
    <div className={cn("w-[216px] rounded-[12px] border border-line bg-white p-3.5 shadow-float", className)}>
      <p className="text-[10px] text-muted">Question 2 of 4</p>
      <div className="mt-1.5 h-[3px] rounded-full bg-wash-2">
        <div className="h-full w-1/2 rounded-full bg-ink" />
      </div>
      <p className="mt-2.5 text-[13px] font-semibold leading-snug">Which look feels most like you?</p>
      <div className="mt-2.5 space-y-1.5">
        {opts.map((o) => (
          <div
            key={o.l}
            className={cn(
              "flex h-8 items-center gap-2 rounded-[7px] border px-2 text-[11px]",
              o.on ? "border-[1.5px] border-ink font-medium" : "border-line"
            )}
          >
            <span className="h-3.5 w-3.5 rounded-full" style={{ background: o.c }} />
            <span className="flex-1">{o.l}</span>
            {o.on && (
              <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-ink text-white">
                <CheckIcon className="h-2.5 w-2.5" />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* Grow my email list */
export function EmailVignette({ className }: { className?: string }) {
  return (
    <div className={cn("w-full max-w-[280px] rounded-[10px] border border-line bg-white p-4 shadow-card", className)}>
      <p className="text-[13px] font-semibold">Email me my matches</p>
      <div className="mt-2.5 flex gap-1.5">
        <span className="flex h-9 flex-1 items-center rounded-[7px] border border-line-strong px-2.5 text-[11.5px] text-muted-2">
          you@example.com
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-[7px] bg-ink text-white">→</span>
      </div>
      <p className="mt-2 text-[10.5px] text-muted">Just your picks. No spam.</p>
      <div className="mt-3 flex items-center gap-2 border-t border-line pt-3 text-[11px]">
        <span className="flex h-4 w-4 items-center justify-center rounded-[4px] border border-ink bg-ink text-white">
          <CheckIcon className="h-2.5 w-2.5" />
        </span>
        <span className="text-ink-3">Text me restock alerts too</span>
      </div>
    </div>
  );
}

/* Cut returns */
export function FitVignette({ className }: { className?: string }) {
  const shades = ["#F1D9CC", "#E4BFA5", "#C99677", "#A8714F", "#7E4E33", "#553223"];
  return (
    <div className={cn("w-full max-w-[280px] rounded-[10px] border border-line bg-white p-4 shadow-card", className)}>
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-[10px] tracking-[0.08em] text-muted">SHADE</span>
        <span className="text-[12px] font-semibold">Light warm</span>
      </div>
      <div className="mt-2.5 flex justify-between">
        {shades.map((c, i) => (
          <span
            key={c}
            className={cn("h-7 w-7 rounded-full", i === 1 && "ring-2 ring-ink ring-offset-2")}
            style={{ background: c }}
          />
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
        <span className="font-mono text-[10px] tracking-[0.08em] text-muted">SIZE</span>
        <div className="flex gap-1">
          {["XS", "S", "M", "L"].map((s) => (
            <span
              key={s}
              className={cn(
                "flex h-7 w-8 items-center justify-center rounded-[5px] border text-[10.5px] font-medium",
                s === "M" ? "border-ink bg-ink text-white" : "border-line-strong"
              )}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Know your shoppers */
export function InsightVignette({ className }: { className?: string }) {
  const rows = [
    { l: "Dry", p: 46 },
    { l: "Normal", p: 32 },
    { l: "Oily", p: 22 },
  ];
  return (
    <div className={cn("w-full max-w-[280px] rounded-[10px] border border-line bg-white p-4 shadow-card", className)}>
      <div className="flex items-baseline justify-between">
        <span className="text-[13px] font-semibold">Skin type</span>
        <span className="font-mono text-[10px] tracking-[0.08em] text-muted">30 DAYS</span>
      </div>
      <div className="mt-3 space-y-2.5">
        {rows.map((r, i) => (
          <div key={r.l} className="grid grid-cols-[52px_1fr_34px] items-center gap-2 text-[11.5px]">
            <span className="text-ink-3">{r.l}</span>
            <span className="h-1.5 overflow-hidden rounded-full bg-wash-2">
              <span className="rv-grow block h-full rounded-full bg-ink" style={{ width: `${r.p * 1.6}%`, opacity: 1 - i * 0.25 }} />
            </span>
            <span className="text-right font-mono text-[11px] tabular">{r.p}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Sell more: upsell and cross-sell */
export function BundleVignette({ className }: { className?: string }) {
  const items: { k: ProductKey; role: string }[] = [
    { k: "cherry", role: "Your match" },
    { k: "linen", role: "Base coat" },
    { k: "midnight", role: "Top coat" },
  ];
  return (
    <div className={cn("w-full max-w-[300px] rounded-[10px] border border-line bg-white p-4 shadow-card", className)}>
      <p className="text-[13px] font-semibold">Complete the set</p>
      <div className="mt-3 space-y-2">
        {items.map((it, i) => (
          <div key={it.k} className="flex items-center gap-2.5">
            <ProductArt shade={CATALOG[it.k].shade} className="h-10 w-10 shrink-0 rounded-[6px]" size="sm" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11.5px] font-medium">{CATALOG[it.k].name}</p>
              <p className="text-[10.5px] text-muted">{it.role}</p>
            </div>
            <span className="font-mono text-[11px] tabular">{CATALOG[it.k].price}</span>
            {i > 0 && <Badge tone="brand">+ Added</Badge>}
          </div>
        ))}
      </div>
      <span className="mt-3.5 flex h-9 items-center justify-center rounded-[7px] bg-ink text-[11.5px] font-semibold text-white">
        Add all to cart · $52
      </span>
    </div>
  );
}

/* Onboarding: "Ready to build your quiz" */
export function ReadyVignette({ className }: { className?: string }) {
  const thumbs: ProductKey[] = ["cherry", "ballet", "espresso", "sage", "plum"];
  return (
    <div className={cn("w-full rounded-[10px] border border-line bg-white shadow-card", className)}>
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <span className="flex items-center gap-2 text-[12.5px] font-semibold">
          <Mark className="h-5 w-5" /> Gleame
        </span>
        <span className="font-mono text-[10.5px] text-muted">ostra-lacquer.myshopify.com</span>
      </div>
      <div className="px-4 py-3.5">
        <p className="text-[15px] font-semibold tracking-[-0.015em]">Ready to build your quiz</p>
        <p className="mt-1 text-[11.5px] leading-snug text-muted">
          We read your store. Check this looks right, then we&apos;ll write the whole quiz from your catalog.
        </p>
      </div>
      <div className="border-t border-line px-4 py-3">
        <div className="flex items-center justify-between text-[11.5px]">
          <span className="font-semibold">Products</span>
          <span className="font-medium text-brand">Change scope</span>
        </div>
        <p className="mt-1.5 text-[11.5px]">
          <span className="font-semibold">42 products</span> in 3 collections
        </p>
        <div className="mt-2 flex gap-1.5">
          {thumbs.map((k) => (
            <ProductArt key={k} shade={CATALOG[k].shade} className="h-9 w-9 rounded-[5px]" size="sm" />
          ))}
          <span className="flex h-9 w-9 items-center justify-center rounded-[5px] bg-wash-2 font-mono text-[10px] text-muted">+37</span>
        </div>
      </div>
      <div className="border-t border-line px-4 py-3">
        <div className="flex items-center justify-between text-[11.5px]">
          <span className="font-semibold">Template</span>
          <span className="font-medium text-brand">Change</span>
        </div>
        <div className="mt-2 flex items-center gap-2.5">
          <TemplateThumb kind="match" />
          <div>
            <p className="text-[11.5px]">
              <span className="font-semibold">Match</span> · Counter style
            </p>
            <p className="text-[10.5px] text-muted">Picked for: shade-based nail color</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 border-t border-line px-4 py-3">
        <span className="inline-flex h-8 items-center rounded-[6px] bg-ink px-3 text-[11.5px] font-semibold text-white">
          Build my quiz
        </span>
        <span className="text-[10.5px] text-muted">About a minute or two · Nothing goes live</span>
      </div>
    </div>
  );
}

/* Build progress, after "Build my quiz" */
export function BuildingVignette({ className }: { className?: string }) {
  const steps = [
    { l: "Read 42 products in 3 collections", done: true },
    { l: "Wrote 4 questions and 14 answers", done: true },
    { l: "Mapped every answer to products", done: true },
    { l: "Styling to match your theme", done: false },
  ];
  return (
    <div className={cn("w-full rounded-[10px] border border-line bg-white p-4 shadow-card", className)}>
      <div className="flex items-center gap-2">
        <SparkIcon className="text-brand" />
        <p className="text-[12.5px] font-semibold">Writing your quiz</p>
        <span className="ml-auto font-mono text-[10.5px] text-muted">01:12</span>
      </div>
      <div className="relative mt-3 h-[3px] overflow-hidden rounded-full bg-wash-2">
        <div className="rv-grow h-full w-[78%] rounded-full bg-brand" />
        <div className="absolute inset-y-0 left-0 w-[78%] overflow-hidden">
          <div className="h-full w-1/3 animate-scan bg-gradient-to-r from-transparent via-white/70 to-transparent" />
        </div>
      </div>
      <ul className="mt-3.5 space-y-2">
        {steps.map((s) => (
          <li key={s.l} className="flex items-center gap-2 text-[11.5px]">
            {s.done ? (
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-ink text-white">
                <CheckIcon className="h-2.5 w-2.5" />
              </span>
            ) : (
              <span className="h-4 w-4 rounded-full border-[1.5px] border-brand border-t-transparent motion-safe:animate-spin" />
            )}
            <span className={s.done ? "text-ink" : "text-muted"}>{s.l}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Catalog sync: "Reading your store" */
export function SyncVignette({ className }: { className?: string }) {
  const keys = Object.keys(CATALOG) as ProductKey[];
  return (
    <div className={cn("w-full rounded-[10px] border border-line bg-white p-4 shadow-card", className)}>
      <div className="flex items-center gap-2 text-[12px]">
        <Dot tone="green" />
        <span className="font-medium">Your store is ready</span>
        <span className="ml-auto font-mono text-[10.5px] text-muted">42 read</span>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-1.5">
        {keys.map((k) => (
          <ProductArt key={k} shade={CATALOG[k].shade} className="aspect-square rounded-[5px]" size="sm" />
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-px overflow-hidden rounded-[6px] border border-line bg-line text-center">
        {[
          ["42", "products"],
          ["3", "collections"],
          ["1", "theme"],
        ].map(([n, l]) => (
          <div key={l} className="bg-white py-1.5">
            <p className="font-mono text-[12px] font-medium tabular">{n}</p>
            <p className="text-[10px] text-muted">{l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Live on the storefront */
export function LiveVignette({ className }: { className?: string }) {
  return (
    <div className={cn("w-full rounded-[10px] border border-line bg-white p-4 shadow-card", className)}>
      <div className="flex items-center gap-2">
        <Badge tone="green">Live</Badge>
        <span className="truncate font-mono text-[10.5px] text-muted">ostra.co/pages/find-your-shade</span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-px overflow-hidden rounded-[6px] border border-line bg-line">
        <div className="bg-white p-2.5">
          <p className="text-[10px] text-muted">Started today</p>
          <p className="font-mono text-[15px] font-medium tabular">64</p>
        </div>
        <div className="bg-white p-2.5">
          <p className="text-[10px] text-muted">Added to cart</p>
          <p className="font-mono text-[15px] font-medium tabular">17</p>
        </div>
      </div>
      <div className="mt-3 flex gap-1.5">
        <span className="inline-flex h-7 flex-1 items-center justify-center rounded-[5px] border border-line-strong text-[11px] font-medium">
          View on my store
        </span>
        <span className="inline-flex h-7 flex-1 items-center justify-center rounded-[5px] bg-ink text-[11px] font-medium text-white">
          Publish
        </span>
      </div>
    </div>
  );
}

/* AI edit exchange */
export function AskVignette({ className }: { className?: string }) {
  return (
    <div className={cn("w-full rounded-[10px] border border-line bg-[#F7F5F1] p-3.5 shadow-card", className)}>
      <div className="ml-auto max-w-[85%] rounded-[10px] rounded-br-[3px] bg-ink px-3 py-2 text-[11.5px] leading-snug text-white">
        Add a budget question and use it to choose products
      </div>
      <div className="mt-2 flex items-start gap-2">
        <Mark className="mt-0.5 h-5 w-5" />
        <div className="rounded-[10px] rounded-bl-[3px] border border-line bg-white px-3 py-2 text-[11.5px] leading-snug">
          Added &ldquo;What feels right to spend?&rdquo; after question 3. Answers now filter results by price.
          <span className="mt-1.5 block text-[11px] font-medium text-brand">Undo</span>
        </div>
      </div>
      <div className="mt-2.5 flex items-center rounded-[9px] border border-line-strong bg-white px-2.5 py-2">
        <span className="flex-1 text-[11px] text-muted-2">Describe any change, big or small…</span>
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-wash-2 text-[10px] text-muted">↑</span>
      </div>
    </div>
  );
}

/* Template thumbnails, from the onboarding template picker. */
export function TemplateThumb({ kind, className }: { kind: "match" | "consult" | "routine" | "discover" | "clean"; className?: string }) {
  return (
    <span
      className={cn(
        "relative flex h-10 w-10 shrink-0 flex-col justify-between overflow-hidden rounded-[6px] border border-line p-1.5",
        kind === "match" && "bg-[#FBF0EB]",
        kind === "consult" && "bg-white",
        kind === "routine" && "bg-[#EEF0E8]",
        kind === "discover" && "bg-[#F3F3F3]",
        kind === "clean" && "bg-white",
        className
      )}
    >
      <span className={cn("text-[9px] font-semibold leading-none text-ink", kind === "consult" && "font-serif italic font-normal")}>Aa</span>
      {kind === "match" && (
        <span className="flex gap-[2px]">
          <span className="h-2 flex-1 rounded-full bg-[#E8C3BE]" />
          <span className="h-2 flex-1 rounded-full border border-ink bg-[#C98C8C]" />
          <span className="h-2 flex-1 rounded-full bg-[#E8C3BE]" />
        </span>
      )}
      {kind === "consult" && <span className="h-[2px] w-3/4 bg-line-strong" />}
      {kind === "routine" && <span className="h-1.5 w-full rounded-full bg-[#5E6E4B]" />}
      {kind === "discover" && (
        <span className="space-y-[2px]">
          <span className="block h-1 w-full rounded-[2px] border border-ink" />
          <span className="block h-1 w-full rounded-[2px] border border-ink bg-ink/30" />
        </span>
      )}
      {kind === "clean" && <span className="h-1.5 w-full bg-ink" />}
    </span>
  );
}

export const TEMPLATES = [
  { kind: "match" as const, name: "Match", q: "Which one is right for me?", d: "Soft modern beauty counter: pill buttons, elevated cards, blush neutrals.", n: "5 to 8 questions in phases" },
  { kind: "routine" as const, name: "Routine", q: "What should I use together?", d: "Calm apothecary: stone and sage, capsule answers, numbered steps.", n: "4 to 6 questions" },
  { kind: "discover" as const, name: "Discover", q: "What's my type?", d: "Playful pop: heavy rounded type, ink outlines, hard offset shadows.", n: "Personality style" },
  { kind: "consult" as const, name: "Consult", q: "Help me decide.", d: "Editorial and lifestyle-led, for brands with strong photography.", n: "Guided consultation" },
  { kind: "clean" as const, name: "Clean", q: "Any of the above, kept simple.", d: "Swiss minimal: monochrome grotesk, mono numerals, inverted selection.", n: "4 to 6 questions" },
];

export function TemplateList({ className, selected = "match" }: { className?: string; selected?: string }) {
  return (
    <div className={cn("w-full overflow-hidden rounded-[10px] border border-line bg-white shadow-card", className)}>
      {TEMPLATES.map((t) => (
        <div
          key={t.kind}
          className={cn(
            "flex items-start gap-3 border-b border-line px-3.5 py-3 last:border-0",
            t.kind === selected && "bg-wash"
          )}
        >
          <span
            className={cn(
              "mt-3 h-3.5 w-3.5 shrink-0 rounded-full border-[1.5px]",
              t.kind === selected ? "border-[4px] border-ink" : "border-line-strong"
            )}
          />
          <TemplateThumb kind={t.kind} />
          <div className="min-w-0">
            <p className="text-[12px]">
              <span className="font-semibold">{t.name}</span>
              <span className="text-ink-3"> · {t.q}</span>
            </p>
            <p className="mt-0.5 text-[11px] leading-snug text-muted">{t.d}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* Matching: one answer, its plain-language rule, the products it leads to. */
export function MatchRuleVignette({ className }: { className?: string }) {
  const picks: ProductKey[] = ["espresso", "midnight", "plum"];
  return (
    <div className={cn("w-full overflow-hidden rounded-[10px] border border-line bg-white shadow-card", className)}>
      <div className="flex items-center gap-2 border-b border-line bg-wash px-4 py-2.5">
        <span className="flex h-4 w-4 items-center justify-center rounded-[3px] border border-line-strong bg-white font-mono text-[9.5px] text-muted">1</span>
        <span className="flex-1 truncate text-[12px] font-semibold">Which look feels most like you?</span>
        <span className="text-[11.5px] font-medium text-brand">Edit</span>
      </div>
      <div className="px-4 py-3.5">
        <div className="flex items-center justify-between">
          <span className="text-[12.5px] font-semibold">Dark & moody</span>
          <Badge tone="green">3 products</Badge>
        </div>
        <p className="mt-2 rounded-[6px] border border-line bg-wash px-2.5 py-2 text-[11.5px] leading-snug text-ink-3">
          Lean toward deep shades like Espresso and Midnight Ink
        </p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {picks.map((k) => (
            <div key={k}>
              <ProductArt shade={CATALOG[k].shade} className="aspect-square rounded-[6px]" />
              <p className="mt-1 truncate text-[10.5px] font-medium">{CATALOG[k].name}</p>
              <p className="font-mono text-[10px] text-muted">{CATALOG[k].price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-line px-4 py-3">
        <p className="text-[11px] font-medium text-muted">Rules for every result</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {["Never show gift cards", "Show at most 4 products", "Always include a top coat"].map((r) => (
            <span key={r} className="rounded-full border border-line-strong bg-white px-2.5 py-1 text-[11px] text-ink-3">
              {r}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
