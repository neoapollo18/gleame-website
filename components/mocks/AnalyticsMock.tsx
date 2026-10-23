"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge, CATALOG, ProductArt } from "./primitives";
import { CountUp } from "@/components/motion/CountUp";

const STARTED = [22, 30, 26, 34, 41, 38, 29, 33, 45, 52, 48, 44, 39, 47, 58, 63, 55, 49, 61, 70, 66, 58, 64, 77, 83, 74, 69, 80, 88, 84];
const REACHED = STARTED.map((v, i) => Math.round(v * (0.74 + ((i * 37) % 11) / 100)));

function toPath(series: number[], w: number, h: number, max: number) {
  const step = w / (series.length - 1);
  return series
    .map((v, i) => `${i === 0 ? "M" : "L"}${(i * step).toFixed(1)} ${(h - (v / max) * h).toFixed(1)}`)
    .join("");
}

export function MiniLineChart({ className, dark = false }: { className?: string; dark?: boolean }) {
  const w = 600;
  const h = 160;
  const max = 100;
  const started = toPath(STARTED, w, h, max);
  const reached = toPath(REACHED, w, h, max);
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className={cn("w-full", className)} aria-hidden="true">
      {[0.25, 0.5, 0.75].map((g) => (
        <line
          key={g}
          x1="0"
          x2={w}
          y1={h * g}
          y2={h * g}
          stroke={dark ? "rgba(255,255,255,0.08)" : "#ECEAF0"}
          vectorEffect="non-scaling-stroke"
        />
      ))}
      <path d={`${started}L${w} ${h}L0 ${h}Z`} fill="#5B0E86" fillOpacity={dark ? 0.25 : 0.07} />
      <path d={reached} fill="none" stroke="#C29BDD" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      <path d={started} fill="none" stroke={dark ? "#B07FD3" : "#5B0E86"} strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
    </svg>
  );
}

const TABS = ["Overview", "Funnel", "Answers", "Products", "Leads"] as const;
type Tab = (typeof TABS)[number];

const KPIS = [
  { label: "Shoppers who started", to: 1284, prefix: "", suffix: "", delta: "+18%", sub: "from 3,910 page views" },
  { label: "Reached their matches", to: 81, prefix: "", suffix: "%", delta: "+4 pts", sub: "1,040 shoppers" },
  { label: "Added to cart", to: 27, prefix: "", suffix: "%", delta: "+6 pts", sub: "281 of 1,040 who saw matches" },
  { label: "Quiz revenue", to: 9412, prefix: "$", suffix: "", delta: "", sub: "312 orders" },
];

export function AnalyticsMock({ className }: { className?: string }) {
  const [tab, setTab] = useState<Tab>("Overview");
  return (
    <div className={cn("overflow-hidden rounded-[10px] border border-white/10 bg-[#EFEEF2] p-2 text-ink shadow-float sm:p-3", className)}>
      <div
        className="no-scrollbar flex gap-1 overflow-x-auto rounded-[8px] border border-line bg-white p-1 text-[12px] font-medium"
        role="tablist"
        aria-label="Analytics view"
      >
        {TABS.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={cn(
              "h-7 flex-1 whitespace-nowrap rounded-[5px] px-3 transition-colors",
              tab === t ? "bg-wash-2 text-ink shadow-inset" : "text-ink-3 hover:text-ink"
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-2 min-h-[380px] sm:mt-3">
        {tab === "Overview" && <Overview />}
        {tab === "Funnel" && <Funnel />}
        {tab === "Answers" && <Answers />}
        {tab === "Products" && <Products />}
        {tab === "Leads" && <Leads />}
      </div>
      <p className="mt-2 flex items-center justify-end gap-1.5 px-1 text-[11px] text-muted sm:mt-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-line-strong" aria-hidden="true" />
        Sample data from a demo store
      </p>
    </div>
  );
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("rounded-[8px] border border-line bg-white p-3 sm:p-4", className)}>{children}</div>;
}

function Overview() {
  return (
    <div className="space-y-2 sm:space-y-3">
      <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
        {KPIS.map((k) => (
          <Card key={k.label}>
            <p className="truncate text-[11.5px] text-ink-3">{k.label}</p>
            <div className="mt-1 flex items-center gap-1.5">
              <span className="text-[22px] font-semibold tracking-[-0.025em] tabular sm:text-[26px]">
                <CountUp to={k.to} prefix={k.prefix} suffix={k.suffix} />
              </span>
              {k.delta && <Badge tone="green">{k.delta}</Badge>}
            </div>
            <p className="mt-0.5 truncate text-[11px] text-muted">{k.sub}</p>
          </Card>
        ))}
      </div>
      <div className="grid gap-2 sm:gap-3 lg:grid-cols-[1.6fr_1fr]">
        <Card>
          <p className="text-[12.5px] font-semibold">Shoppers per day</p>
          <MiniLineChart className="rv-draw mt-3 h-[150px]" />
          <div className="mt-2 flex justify-between font-mono text-[10px] text-muted">
            <span>Sep 23</span>
            <span>Oct 8</span>
            <span>Oct 23</span>
          </div>
        </Card>
        <Card>
          <p className="text-[12.5px] font-semibold">What to look at</p>
          <ul className="mt-2.5 divide-y divide-line text-[12px]">
            <li className="flex gap-2 py-2">
              <span className="flex-1 text-ink-3">81% of shoppers who start the quiz reach their matches.</span>
              <span className="font-medium text-brand">Funnel</span>
            </li>
            <li className="flex gap-2 py-2">
              <span className="flex-1 text-ink-3">&ldquo;Dark & moody&rdquo; shoppers add to cart most often.</span>
              <span className="font-medium text-brand">Answers</span>
            </li>
            <li className="flex gap-2 py-2">
              <span className="flex-1 text-ink-3">Cherry Lacquer is the most recommended product.</span>
              <span className="font-medium text-brand">Products</span>
            </li>
          </ul>
        </Card>
      </div>
      <div className="rounded-[8px] bg-brand-50 px-3 py-2.5 text-[12px] text-ink-3 sm:px-4">
        <span className="font-semibold text-ink">Typical quiz shopper:</span> on a phone (72%), busiest around 8 PM your time.
      </div>
    </div>
  );
}

function Funnel() {
  const steps = [
    { label: "Saw the quiz", n: 3910, pct: 100 },
    { label: "Started", n: 1284, pct: 33 },
    { label: "Answered every question", n: 1102, pct: 28 },
    { label: "Reached their matches", n: 1040, pct: 27 },
    { label: "Added to cart", n: 281, pct: 7 },
  ];
  return (
    <Card className="h-full">
      <p className="text-[12.5px] font-semibold">From first view to cart</p>
      <div className="mt-4 space-y-3">
        {steps.map((s) => (
          <div key={s.label} className="grid grid-cols-[minmax(0,140px)_1fr_auto] items-center gap-3 text-[12px] sm:grid-cols-[180px_1fr_auto]">
            <span className="truncate text-ink-3">{s.label}</span>
            <div className="h-6 overflow-hidden rounded-[4px] bg-wash-2">
              <div className="rv-grow h-full rounded-[4px] bg-brand" style={{ width: `${Math.max(s.pct, 3)}%`, opacity: 0.35 + s.pct / 160 }} />
            </div>
            <span className="w-14 text-right font-mono text-[11px] tabular text-ink">{s.n.toLocaleString()}</span>
          </div>
        ))}
      </div>
      <p className="mt-5 border-t border-line pt-3 text-[12px] text-muted">
        Biggest drop: between seeing the quiz and starting it. Try a shorter intro.
      </p>
    </Card>
  );
}

function Answers() {
  const qs = [
    {
      q: "Which look feels most like you?",
      a: [
        { l: "Clean & classic", p: 38 },
        { l: "Soft & natural", p: 29 },
        { l: "Dark & moody", p: 21 },
        { l: "Bold & bright", p: 12 },
      ],
    },
    {
      q: "Gold or silver on you?",
      a: [
        { l: "Gold, always", p: 46 },
        { l: "Both, depends on the day", p: 32 },
        { l: "Silver, always", p: 22 },
      ],
    },
  ];
  return (
    <div className="grid gap-2 sm:gap-3 md:grid-cols-2">
      {qs.map((q) => (
        <Card key={q.q}>
          <p className="text-[12.5px] font-semibold">{q.q}</p>
          <div className="mt-3.5 space-y-2.5">
            {q.a.map((a) => (
              <div key={a.l} className="grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1 text-[12px]">
                <span className="text-ink-3">{a.l}</span>
                <span className="font-mono text-[11px] tabular">{a.p}%</span>
                <div className="col-span-2 h-1.5 overflow-hidden rounded-full bg-wash-2">
                  <div className="rv-grow h-full rounded-full bg-ink" style={{ width: `${a.p}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}

function Products() {
  const rows = [
    { k: "cherry" as const, shown: 612, carts: 104 },
    { k: "ballet" as const, shown: 498, carts: 71 },
    { k: "espresso" as const, shown: 341, carts: 66 },
    { k: "linen" as const, shown: 322, carts: 38 },
    { k: "midnight" as const, shown: 210, carts: 31 },
  ];
  return (
    <Card className="p-0 sm:p-0">
      <div className="grid grid-cols-[1fr_70px_70px] gap-3 border-b border-line px-3 py-2 text-[11px] font-medium text-muted sm:grid-cols-[1fr_90px_90px] sm:px-4">
        <span>Product</span>
        <span className="text-right">Shown</span>
        <span className="text-right">Added</span>
      </div>
      {rows.map((r) => (
        <div key={r.k} className="grid grid-cols-[1fr_70px_70px] items-center gap-3 border-b border-line px-3 py-2 text-[12px] last:border-0 sm:grid-cols-[1fr_90px_90px] sm:px-4">
          <span className="flex min-w-0 items-center gap-2.5">
            <ProductArt shade={CATALOG[r.k].shade} className="h-8 w-8 shrink-0 rounded-[5px]" size="sm" />
            <span className="truncate font-medium">{CATALOG[r.k].name}</span>
          </span>
          <span className="text-right font-mono text-[11px] tabular text-ink-3">{r.shown}</span>
          <span className="text-right font-mono text-[11px] tabular">{r.carts}</span>
        </div>
      ))}
    </Card>
  );
}

function Leads() {
  const rows = [
    { e: "m•••••@gmail.com", a: "Clean & classic · Gold", t: "2m ago" },
    { e: "j••••@icloud.com", a: "Dark & moody · Silver", t: "14m ago" },
    { e: "s••••••@outlook.com", a: "Soft & natural · Both", t: "41m ago" },
    { e: "a•••@gmail.com", a: "Bold & bright · Gold", t: "1h ago" },
    { e: "k••••••@yahoo.com", a: "Clean & classic · Both", t: "2h ago" },
  ];
  return (
    <Card className="p-0 sm:p-0">
      <div className="flex items-center justify-between border-b border-line px-3 py-2.5 sm:px-4">
        <p className="text-[12.5px] font-semibold">
          418 emails <span className="font-normal text-muted">captured this month</span>
        </p>
        <Badge tone="brand">Answers synced</Badge>
      </div>
      {rows.map((r) => (
        <div key={r.e} className="grid grid-cols-[1fr_auto] items-center gap-x-3 border-b border-line px-3 py-2 text-[12px] last:border-0 sm:grid-cols-[200px_1fr_auto] sm:px-4">
          <span className="truncate font-mono text-[11.5px]">{r.e}</span>
          <span className="order-3 col-span-2 truncate text-[11.5px] text-muted sm:order-none sm:col-span-1">{r.a}</span>
          <span className="text-right text-[11px] text-muted-2">{r.t}</span>
        </div>
      ))}
    </Card>
  );
}
