"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Mark } from "@/components/brand/Logo";
import { Badge, CATALOG, CheckIcon, Dot, ProductArt, SparkIcon } from "./primitives";
import { MiniLineChart } from "./AnalyticsMock";

type Mode = "build" | "matches" | "live";

const MODES: { id: Mode; label: string }[] = [
  { id: "build", label: "Build" },
  { id: "matches", label: "Check matches" },
  { id: "live", label: "Live" },
];

const SCREENS = [
  "Which look feels most like you?",
  "Gold or silver on you?",
  "Where are your nails headed?",
  "How long should a mani last?",
];

type Suggestion = "friendly" | "budget" | "premium" | "trim";

const SUGGESTIONS: { id: Suggestion; text: string; icon: string }[] = [
  { id: "friendly", text: "Rewrite the questions so they sound like a friendly expert, not a survey.", icon: "M3 4h10v6H7l-3 2.5V10H3z" },
  { id: "budget", text: "Add a budget question and use it to choose which products we recommend.", icon: "M3 5h10M3 8h7M3 11h4" },
  { id: "premium", text: "Make it feel more premium: softer colors, more white space, an elegant font.", icon: "M4 12l5-5 2 2-5 5H4v-2zM10 6l1.5-1.5 2 2L12 8" },
  { id: "trim", text: "Cut the quiz down to the questions that matter most for matching.", icon: "M3 4h10M3 8h10M3 12h6" },
];

/* ------------------------------------------------------------------ */

export function StudioMock({ className }: { className?: string }) {
  const [mode, setMode] = useState<Mode>("build");
  const [panel, setPanel] = useState<"edit" | "ai">("edit");
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [applied, setApplied] = useState<Set<Suggestion>>(new Set());
  const [lastChange, setLastChange] = useState<Suggestion | null>(null);
  const [fix, setFix] = useState<"idle" | "asked" | "done">("idle");
  const timers = useRef<number[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const apply = (id: Suggestion) => {
    setApplied((prev) => new Set(prev).add(id));
    setLastChange(id);
  };
  const undo = () => {
    if (!lastChange) return;
    setApplied((prev) => {
      const next = new Set(prev);
      next.delete(lastChange);
      return next;
    });
    setLastChange(null);
  };

  const runFix = () => {
    if (fix !== "idle") return;
    setFix("asked");
    timers.current.push(window.setTimeout(() => setFix("done"), 900));
  };

  const premium = applied.has("premium");
  const screens = [
    ...SCREENS.slice(0, applied.has("trim") ? 3 : 4),
    ...(applied.has("budget") ? ["What feels right to spend?"] : []),
  ];

  return (
    <div
      className={cn(
        "overflow-hidden rounded-[10px] border border-line-strong bg-white text-ink shadow-float",
        className
      )}
    >
      {/* App bar */}
      <div className="flex h-10 items-center gap-2 border-b border-line bg-wash px-3">
        <Mark className="h-[18px] w-[18px]" />
        <span className="text-[12.5px] font-medium">Studio</span>
        <span className="ml-auto font-mono text-[10.5px] text-muted-2">ostra-lacquer.myshopify.com</span>
      </div>

      {/* Toolbar */}
      <div className="grid h-12 grid-cols-[1fr_auto_1fr] items-center gap-2 border-b border-line px-3">
        <div className="hidden min-w-0 items-center gap-2 md:flex">
          <span className="truncate text-[13px] font-medium">Find your shade</span>
          <Badge tone="green">Live</Badge>
        </div>
        <div className="col-start-2 flex rounded-[6px] border border-line-strong bg-white p-[2px] text-[12.5px]" role="tablist" aria-label="Studio mode">
          {MODES.map((m) => (
            <button
              key={m.id}
              role="tab"
              aria-selected={mode === m.id}
              onClick={() => setMode(m.id)}
              className={cn(
                "h-7 rounded-[4px] px-2.5 font-medium transition-colors sm:px-3",
                mode === m.id ? "bg-wash-2 text-ink shadow-inset" : "text-ink-3 hover:text-ink"
              )}
            >
              {m.label}
            </button>
          ))}
        </div>
        <div className="hidden items-center justify-end gap-1.5 md:flex">
          <span className="hidden h-7 items-center rounded-[5px] border border-line-strong px-2.5 text-[12px] font-medium lg:inline-flex">
            View on my store
          </span>
          <span className="inline-flex h-7 items-center rounded-[5px] bg-ink px-2.5 text-[12px] font-medium text-white">
            Publish
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="grid h-[520px] sm:h-[560px] md:grid-cols-[180px_minmax(0,1fr)] lg:grid-cols-[188px_minmax(0,1fr)_268px]">
        <Rail mode={mode} screens={screens} fixed={fix === "done"} />

        <div className="relative min-w-0 overflow-hidden border-line md:border-l lg:border-r">
          {mode === "build" && (
            <BuildCanvas
              device={device}
              setDevice={setDevice}
              applied={applied}
              count={screens.length}
            />
          )}
          {mode === "matches" && <MatchesCanvas fix={fix} onFix={runFix} />}
          {mode === "live" && <LiveCanvas />}
        </div>

        <div className="hidden min-w-0 flex-col overflow-hidden lg:flex">
          {mode === "build" && (
            <BuildPanel
              panel={panel}
              setPanel={setPanel}
              premium={premium}
              applied={applied}
              lastChange={lastChange}
              onApply={apply}
              onUndo={undo}
            />
          )}
          {mode === "matches" && <ChatPanel fix={fix} onFix={runFix} onReset={() => setFix("idle")} />}
          {mode === "live" && <PublishPanel />}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Left rail                                                            */

function RailItem({
  children,
  active,
  num,
  dot,
  muted,
}: {
  children: React.ReactNode;
  active?: boolean;
  num?: React.ReactNode;
  dot?: "green" | "amber";
  muted?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex h-7 items-center gap-2 rounded-[5px] px-2 text-[12px]",
        active ? "bg-wash-2 font-medium text-ink shadow-inset" : muted ? "text-muted-2" : "text-ink-3"
      )}
    >
      {num !== undefined && (
        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] bg-wash-2 font-mono text-[9.5px] text-muted">
          {num}
        </span>
      )}
      <span className="min-w-0 flex-1 truncate">{children}</span>
      {dot && <Dot tone={dot} />}
    </div>
  );
}

function RailGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-3">
      <p className="mb-1 px-2 text-[11px] font-medium text-muted">{title}</p>
      <div className="space-y-px">{children}</div>
    </div>
  );
}

function Rail({ mode, screens, fixed }: { mode: Mode; screens: string[]; fixed: boolean }) {
  return (
    <aside className="hidden flex-col overflow-hidden p-2 md:flex">
      {mode === "build" ? (
        <>
          <RailGroup title="Design">
            <RailItem active>Style</RailItem>
            <RailItem>Text & labels</RailItem>
            <RailItem>Templates</RailItem>
            <RailItem>Images</RailItem>
          </RailGroup>
          <RailGroup title="Screens">
            <RailItem>Intro</RailItem>
            {screens.map((s, i) => (
              <RailItem key={s} num={i + 1}>
                {s}
              </RailItem>
            ))}
            <RailItem>Email capture</RailItem>
            <RailItem>Results</RailItem>
          </RailGroup>
          <RailGroup title="Settings">
            <RailItem>Matching</RailItem>
            <RailItem>Upsell & cross-sell</RailItem>
          </RailGroup>
        </>
      ) : (
        <>
          <div className="mb-3">
            <RailItem active>Overview</RailItem>
          </div>
          <RailGroup title="Screens">
            <RailItem muted>Intro</RailItem>
            {screens.map((s, i) => (
              <RailItem key={s} num={i + 1} dot={mode === "matches" && i === 1 && !fixed ? "amber" : "green"}>
                {s}
              </RailItem>
            ))}
            <RailItem muted>Email capture</RailItem>
            <RailItem muted>Results</RailItem>
          </RailGroup>
        </>
      )}
      <div className="mt-auto border-t border-line pt-2">
        <RailItem>Flow map</RailItem>
      </div>
    </aside>
  );
}

/* ------------------------------------------------------------------ */
/* Build                                                                */

function BuildCanvas({
  device,
  setDevice,
  applied,
  count,
}: {
  device: "desktop" | "mobile";
  setDevice: (d: "desktop" | "mobile") => void;
  applied: Set<Suggestion>;
  count: number;
}) {
  const premium = applied.has("premium");
  const friendly = applied.has("friendly");
  const accent = premium ? "#7A6152" : "#8E1B2C";
  const bg = premium ? "#FAF8F5" : "#FBF0EB";

  return (
    <div className="dots relative flex h-full flex-col items-center overflow-hidden px-4 pb-14 pt-5 transition-colors duration-500 sm:pt-7" style={{ backgroundColor: bg }}>
      <div
        className={cn(
          "w-full transition-[max-width] duration-500 ease-out",
          device === "desktop" ? "max-w-[460px]" : "max-w-[232px]"
        )}
      >
        {/* Hero art */}
        <div
          className={cn(
            "grid overflow-hidden border transition-all duration-500",
            premium ? "rounded-[4px] border-[#E4DCD3]" : "rounded-[12px] border-ink shadow-[3px_3px_0_#0B0A0E]",
            device === "desktop" ? "h-[150px] grid-cols-5 sm:h-[170px]" : "h-[120px] grid-cols-3"
          )}
        >
          {(["cherry", "ballet", "espresso", "coral", "plum"] as const)
            .slice(0, device === "desktop" ? 5 : 3)
            .map((k, i) => (
              <ProductArt
                key={k}
                shade={CATALOG[k].shade}
                backdrop={premium ? ["#F2EEE9", "#EDE7E0", "#F2EEE9", "#EDE7E0", "#F2EEE9"][i] : ["#F6DCD6", "#F9E6E1", "#F3D3CC", "#F9E6E1", "#F6DCD6"][i]}
                className="h-full"
                size="sm"
              />
            ))}
        </div>

        <div className="mt-5 text-center">
          <h4
            className={cn(
              "text-balance leading-[1.05] tracking-[-0.03em] text-[#1C1410] transition-all duration-500",
              device === "desktop" ? "text-[30px] sm:text-[34px]" : "text-[24px]",
              premium ? "font-serif font-normal tracking-[-0.01em]" : "font-semibold"
            )}
          >
            {friendly ? "Let's find the shade that's " : "Find the shade that's "}
            <span
              className="px-0.5"
              style={{
                color: premium ? accent : undefined,
                backgroundImage: premium ? "none" : `linear-gradient(transparent 58%, ${accent}38 58%)`,
              }}
            >
              yours
            </span>
          </h4>
          <p className={cn("mx-auto mt-2.5 max-w-[340px] text-[12.5px] leading-relaxed text-[#6E625C]", device === "mobile" && "text-[11.5px]")}>
            {friendly
              ? "Tell me a little about your style and I'll pick shades from our collection that suit you."
              : "Answer a few quick questions and we'll match you to shades from our collection."}
          </p>
          <span
            className={cn(
              "mt-4 inline-flex h-9 items-center px-6 text-[13px] font-semibold text-white transition-all duration-500",
              premium ? "rounded-[3px]" : "rounded-[10px] border border-ink shadow-[2px_2px_0_#0B0A0E]"
            )}
            style={{ background: premium ? "#1C1410" : accent }}
          >
            Start quiz
          </span>
          <div className="mt-3.5 flex flex-wrap justify-center gap-x-3 gap-y-1 text-[11px] text-[#7D716B]">
            <span className="inline-flex items-center gap-1">
              <CheckIcon className="h-3 w-3" />
              {count} quick questions
            </span>
            <span className="inline-flex items-center gap-1">
              <CheckIcon className="h-3 w-3" />
              Takes a minute
            </span>
            {device === "desktop" && (
              <span className="inline-flex items-center gap-1">
                <CheckIcon className="h-3 w-3" />
                Matched to your style
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 rounded-full bg-ink p-[3px] text-[11.5px] font-medium shadow-card">
        {(["desktop", "mobile"] as const).map((d) => (
          <button
            key={d}
            onClick={() => setDevice(d)}
            aria-pressed={device === d}
            className={cn(
              "h-6 rounded-full px-3 capitalize transition-colors",
              device === d ? "bg-white/15 text-white" : "text-white/55 hover:text-white"
            )}
          >
            {d}
          </button>
        ))}
      </div>
    </div>
  );
}

function Field({ label, value, swatch, tag }: { label: string; value: string; swatch?: string; tag: "Yours" | "Template" }) {
  return (
    <div>
      <p className="mb-1 text-[11.5px] font-medium text-ink">{label}</p>
      <div className="flex items-center gap-1.5">
        {swatch && (
          <span className="h-7 w-7 shrink-0 rounded-[5px] border border-line-strong p-[3px]">
            <span className="block h-full w-full rounded-[3px] transition-colors duration-500" style={{ background: swatch }} />
          </span>
        )}
        <span className="flex h-7 min-w-0 flex-1 items-center rounded-[5px] border border-line-strong px-2 font-mono text-[11px] text-ink-3">
          {value}
        </span>
        <Badge tone={tag === "Yours" ? "brand" : "gray"}>{tag}</Badge>
      </div>
    </div>
  );
}

function BuildPanel({
  panel,
  setPanel,
  premium,
  applied,
  lastChange,
  onApply,
  onUndo,
}: {
  panel: "edit" | "ai";
  setPanel: (p: "edit" | "ai") => void;
  premium: boolean;
  applied: Set<Suggestion>;
  lastChange: Suggestion | null;
  onApply: (s: Suggestion) => void;
  onUndo: () => void;
}) {
  return (
    <>
      <div className="grid grid-cols-2 gap-1 border-b border-line p-1.5 text-[12px] font-medium">
        {(["edit", "ai"] as const).map((p) => (
          <button
            key={p}
            onClick={() => setPanel(p)}
            aria-pressed={panel === p}
            className={cn(
              "h-7 rounded-[5px] transition-colors",
              panel === p ? "bg-wash-2 text-ink shadow-inset" : "text-ink-3 hover:text-ink"
            )}
          >
            {p === "edit" ? "Edit" : "Build with AI"}
          </button>
        ))}
      </div>

      {panel === "edit" ? (
        <div className="flex-1 space-y-3.5 overflow-hidden p-3.5">
          <p className="text-[13px] font-semibold">Style</p>
          <div>
            <p className="text-[11.5px] font-medium">Template</p>
            <p className="mt-0.5 text-[11px] leading-snug text-muted">
              {premium ? "Clean · Swiss minimal: monochrome type, generous space" : "Match · Counter style: pill buttons, elevated cards, blush neutrals"}
            </p>
            <span className="mt-1.5 inline-flex h-6 items-center rounded-[5px] border border-line-strong px-2 text-[11px] font-medium">
              Change in Templates
            </span>
          </div>
          <Field label="Accent color" value={premium ? "#7a6152" : "#8e1b2c"} swatch={premium ? "#7A6152" : "#8E1B2C"} tag="Yours" />
          <Field label="Background color" value={premium ? "#faf8f5" : "#fbf0eb"} swatch={premium ? "#FAF8F5" : "#FBF0EB"} tag="Template" />
          <Field label="Button color" value={premium ? "#1c1410" : "#8e1b2c"} swatch={premium ? "#1C1410" : "#8E1B2C"} tag={premium ? "Template" : "Yours"} />
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="mb-1 text-[11.5px] font-medium">Button radius</p>
              <span className="flex h-7 items-center rounded-[5px] border border-line-strong px-2 font-mono text-[11px] text-ink-3">
                {premium ? "3" : "10"} px
              </span>
            </div>
            <div>
              <p className="mb-1 text-[11.5px] font-medium">Heading font</p>
              <span className="flex h-7 items-center truncate rounded-[5px] border border-line-strong px-2 text-[11px] text-ink-3">
                {premium ? "Serif display" : "Match your theme"}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-1 flex-col overflow-hidden bg-[#F7F5F1]">
          <div className="flex-1 overflow-hidden px-3 pt-5">
            <div className="text-center">
              <Mark className="mx-auto h-7 w-7" />
              <p className="mt-2.5 text-[15px] font-semibold tracking-[-0.01em]">What should we change?</p>
              <p className="mx-auto mt-1 max-w-[220px] text-[11.5px] leading-snug text-muted">
                Ask in your own words. Questions, answers, wording, logic, style and matching.
              </p>
            </div>
            <p className="mb-1.5 mt-4 text-[11px] font-medium text-muted">Try something like</p>
            <div className="space-y-1.5">
              {SUGGESTIONS.map((s) => {
                const done = applied.has(s.id);
                return (
                  <button
                    key={s.id}
                    onClick={() => !done && onApply(s.id)}
                    disabled={done}
                    className={cn(
                      "flex w-full items-start gap-2 rounded-[7px] border bg-white px-2.5 py-2 text-left text-[11.5px] leading-snug transition-colors",
                      done ? "border-brand-200 bg-brand-50 text-ink-3" : "border-line-strong text-ink hover:border-ink/40"
                    )}
                  >
                    <svg viewBox="0 0 16 16" className="mt-[1px] h-3.5 w-3.5 shrink-0 text-ink-3" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
                      <path d={s.icon} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="flex-1">{s.text}</span>
                    {done && <CheckIcon className="mt-[1px] text-brand" />}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="p-2.5">
            {lastChange && (
              <div className="mb-2 flex items-center gap-2 rounded-[6px] bg-ink px-2.5 py-1.5 text-[11px] text-white">
                <SparkIcon className="text-brand-300" />
                <span className="flex-1">Changed. Look at the preview.</span>
                <button onClick={onUndo} className="font-medium underline underline-offset-2">
                  Undo
                </button>
              </div>
            )}
            <div className="flex items-end rounded-[10px] border border-line-strong bg-white p-2 pl-2.5">
              <span className="flex-1 pb-0.5 text-[11.5px] text-muted-2">Describe any change, big or small…</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-wash-2 text-muted">↑</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Check matches                                                        */

const MATCHES: { q: string; rows: { a: string; rule: string; n: number | "fixable" }[] }[] = [
  {
    q: "Which look feels most like you?",
    rows: [
      { a: "Soft & natural", rule: "Lean toward sheer, buildable shades like Ballet Slipper and Nude Linen", n: 4 },
      { a: "Clean & classic", rule: "Lean toward timeless reds and neutrals like Cherry Lacquer", n: 5 },
      { a: "Bold & bright", rule: "Lean toward saturated color like Coral Hour and Sage Chrome", n: 3 },
      { a: "Dark & moody", rule: "Lean toward deep shades like Espresso and Midnight Ink", n: 3 },
    ],
  },
  {
    q: "Gold or silver on you?",
    rows: [
      { a: "Gold, always", rule: "Lean toward warm undertones", n: 9 },
      { a: "Silver, always", rule: "Lean toward icy chrome finishes", n: "fixable" },
      { a: "Both, depends on the day", rule: "Show warm and cool shades side by side", n: 14 },
    ],
  },
  {
    q: "Where are your nails headed?",
    rows: [
      { a: "Everyday", rule: "Recommend long-wear neutrals and a top coat", n: 6 },
      { a: "A big event", rule: "Recommend Cherry Lacquer, Plum Velvet and the gel kit", n: 3 },
    ],
  },
];

function MatchesCanvas({ fix, onFix }: { fix: "idle" | "asked" | "done"; onFix: () => void }) {
  const done = fix === "done";
  return (
    <div className="relative h-full overflow-hidden bg-[#FAFAFB] px-3 pt-4 sm:px-6 sm:pt-5">
      <div
        className={cn(
          "flex items-start gap-2.5 rounded-[7px] border px-3 py-2.5 text-[12px] transition-colors duration-300",
          done ? "border-[#BFE3CC] bg-signal-greenbg" : "border-[#F0D58A] bg-signal-amberbg"
        )}
      >
        <span className={cn("mt-[1px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white", done ? "bg-signal-green" : "bg-[#C98A00]")}>
          {done ? "✓" : "!"}
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-ink">{done ? "Every answer leads to products" : "1 answer needs a look"}</p>
          <p className="mt-0.5 text-ink-3">
            {done ? "Ready to publish whenever you are." : "Gleame couldn't match it to your catalog. You can still publish."}
          </p>
        </div>
        {!done && (
          <button
            onClick={onFix}
            className="shrink-0 rounded-[5px] border border-line-strong bg-white px-2 py-1 text-[11.5px] font-medium hover:border-ink/40"
          >
            {fix === "asked" ? "Fixing…" : "Fix with AI"}
          </button>
        )}
      </div>

      <div className="mt-3 space-y-2.5">
        {MATCHES.map((block, bi) => (
          <div key={block.q} className="overflow-hidden rounded-[7px] border border-line bg-white">
            <div className="flex items-center gap-2 border-b border-line bg-wash px-3 py-2">
              <span className="flex h-4 w-4 items-center justify-center rounded-[3px] border border-line-strong bg-white font-mono text-[9.5px] text-muted">
                {bi + 1}
              </span>
              <span className="flex-1 truncate text-[12px] font-semibold">{block.q}</span>
              <span className="text-[11.5px] font-medium text-brand">Edit</span>
            </div>
            {block.rows.map((r) => {
              const fixable = r.n === "fixable";
              const rule = fixable && done ? "Lean toward cool undertones like Midnight Ink and Sage Chrome" : r.rule;
              return (
                <div
                  key={r.a}
                  className={cn(
                    "grid grid-cols-[92px_1fr_auto] items-center gap-3 border-b border-line px-3 py-2 text-[11.5px] last:border-0 sm:grid-cols-[120px_1fr_auto]",
                    fixable && !done && "bg-[#FFFBEF]",
                    fixable && done && "bg-signal-greenbg/50"
                  )}
                >
                  <span className="font-medium text-ink">{r.a}</span>
                  <span className="min-w-0 truncate text-ink-3 sm:whitespace-normal sm:leading-snug">{rule}</span>
                  <span className={cn("whitespace-nowrap text-right tabular", fixable && !done ? "font-medium text-signal-amber" : "text-muted")}>
                    {fixable ? (done ? "3 products" : "No match") : `${r.n} products`}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FAFAFB] to-transparent" />
    </div>
  );
}

function ChatPanel({ fix, onFix, onReset }: { fix: "idle" | "asked" | "done"; onFix: () => void; onReset: () => void }) {
  return (
    <>
      <div className="border-b border-line px-3.5 py-2.5">
        <p className="text-center text-[12.5px] font-semibold">Chat</p>
      </div>
      <p className="border-b border-line px-3.5 py-2 text-[11px] leading-snug text-muted">
        Every change has an Undo. Talking about <span className="font-medium text-ink">the whole quiz</span>
      </p>
      <div className="flex flex-1 flex-col justify-end gap-2.5 overflow-hidden p-3">
        {fix === "idle" ? (
          <div className="my-auto text-center">
            <p className="text-[13px] font-semibold">Anything off?</p>
            <p className="mx-auto mt-1 max-w-[210px] text-[11.5px] leading-snug text-muted">
              Tell Gleame what to change: a sentence, or a rule for every result like &ldquo;never show gift cards.&rdquo;
            </p>
            <button
              onClick={onFix}
              className="mt-4 w-full rounded-[7px] border border-line-strong bg-white px-2.5 py-2 text-left text-[11.5px] leading-snug hover:border-ink/40"
            >
              &ldquo;Silver, always&rdquo; should lead to our cool shades
            </button>
          </div>
        ) : (
          <>
            <div className="ml-auto max-w-[88%] rounded-[10px] rounded-br-[3px] bg-ink px-2.5 py-2 text-[11.5px] leading-snug text-white">
              &ldquo;Silver, always&rdquo; should lead to our cool shades
            </div>
            {fix === "asked" ? (
              <div className="flex items-center gap-1.5 text-[11.5px] text-muted">
                <Mark className="h-4 w-4" />
                <span className="inline-flex gap-0.5">
                  <span className="h-1 w-1 animate-pulse rounded-full bg-muted" />
                  <span className="h-1 w-1 animate-pulse rounded-full bg-muted [animation-delay:150ms]" />
                  <span className="h-1 w-1 animate-pulse rounded-full bg-muted [animation-delay:300ms]" />
                </span>
              </div>
            ) : (
              <div className="max-w-[92%] rounded-[10px] rounded-bl-[3px] border border-line bg-white px-2.5 py-2 text-[11.5px] leading-snug">
                <p>
                  Done. &ldquo;Silver, always&rdquo; now leans toward cool undertones:
                </p>
                <div className="mt-2 flex gap-1.5">
                  {(["midnight", "sage", "plum"] as const).map((k) => (
                    <div key={k} className="w-1/3">
                      <ProductArt shade={CATALOG[k].shade} className="aspect-square rounded-[5px]" size="sm" />
                      <p className="mt-1 truncate text-[10px] text-muted">{CATALOG[k].name}</p>
                    </div>
                  ))}
                </div>
                <button onClick={onReset} className="mt-2 text-[11px] font-medium text-brand">
                  Undo
                </button>
              </div>
            )}
          </>
        )}
      </div>
      <div className="flex gap-1.5 border-t border-line p-2.5">
        <span className="flex h-9 flex-1 items-center rounded-[7px] border border-line-strong px-2.5 text-[11px] text-muted-2">
          Tell Gleame what to change…
        </span>
        <span className="flex h-9 items-center rounded-[7px] bg-wash-2 px-2.5 text-[11px] text-muted">Send</span>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Live                                                                 */

const LIVE_KPIS = [
  { label: "Shoppers who started", value: "1,284", delta: "+18%", sub: "from 3,910 page views", up: true },
  { label: "Reached their matches", value: "81%", delta: "+4 pts", sub: "1,040 shoppers", up: true },
  { label: "Added to cart", value: "27%", delta: "+6 pts", sub: "of shoppers who saw matches", up: true },
  { label: "Quiz revenue", value: "$9,412", delta: "", sub: "312 orders", up: true },
];

function LiveCanvas() {
  return (
    <div className="h-full overflow-hidden bg-[#F3F2F5] p-3 sm:p-5">
      <div className="flex flex-wrap items-center gap-2 rounded-[7px] border border-line bg-white px-3 py-2 text-[12px]">
        <Dot tone="green" />
        <span className="font-medium">Live on your store</span>
        <span className="truncate font-mono text-[11px] text-muted">ostra.co/pages/find-your-shade</span>
        <span className="ml-auto hidden text-[11.5px] font-medium text-brand sm:inline">Open</span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {LIVE_KPIS.map((k) => (
          <div key={k.label} className="rounded-[7px] border border-line bg-white p-3">
            <p className="truncate text-[11px] text-ink-3">{k.label}</p>
            <div className="mt-1 flex items-center gap-1.5">
              <span className="text-[20px] font-semibold tracking-[-0.02em] tabular sm:text-[22px]">{k.value}</span>
              {k.delta && <Badge tone="green">{k.delta}</Badge>}
            </div>
            <p className="mt-0.5 truncate text-[10.5px] text-muted">{k.sub}</p>
          </div>
        ))}
      </div>
      <div className="mt-2 rounded-[7px] border border-line bg-white p-3">
        <div className="flex items-center justify-between">
          <p className="text-[11.5px] font-semibold">Shoppers per day</p>
          <div className="flex gap-3 text-[10px] text-muted">
            <span className="inline-flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-[2px] bg-brand" />Started</span>
            <span className="inline-flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-[2px] bg-brand-300" />Reached matches</span>
          </div>
        </div>
        <MiniLineChart className="mt-2 h-[120px] sm:h-[150px]" />
      </div>
    </div>
  );
}

function PublishPanel() {
  const checks = [
    "Every answer leads to products",
    "Every screen can be reached",
    "Email step sits before results",
    "Fonts match your theme",
  ];
  const versions = [
    { v: "Version 12", t: "Published today, 2:14 PM", live: true },
    { v: "Version 11", t: "Yesterday, 6:02 PM" },
    { v: "Version 10", t: "Oct 19, 11:40 AM" },
  ];
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div className="border-b border-line p-3.5">
        <p className="text-[13px] font-semibold">Publish</p>
        <p className="mt-0.5 text-[11.5px] text-muted">Your draft and your live quiz match.</p>
        <span className="mt-3 flex h-8 items-center justify-center rounded-[6px] bg-wash-2 text-[12px] font-medium text-muted">
          Up to date
        </span>
      </div>
      <div className="border-b border-line p-3.5">
        <p className="mb-2 text-[11.5px] font-medium">Checks before going live</p>
        <ul className="space-y-1.5">
          {checks.map((c) => (
            <li key={c} className="flex items-center gap-2 text-[11.5px] text-ink-3">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-signal-greenbg text-signal-green">
                <CheckIcon className="h-2.5 w-2.5" />
              </span>
              {c}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-3.5">
        <p className="mb-2 text-[11.5px] font-medium">Versions</p>
        <ul className="space-y-px">
          {versions.map((v) => (
            <li key={v.v} className="flex items-center gap-2 rounded-[5px] px-1.5 py-1.5 text-[11.5px]">
              <Dot tone={v.live ? "green" : "gray"} />
              <span className="font-medium">{v.v}</span>
              <span className="ml-auto truncate text-[10.5px] text-muted">{v.t}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
