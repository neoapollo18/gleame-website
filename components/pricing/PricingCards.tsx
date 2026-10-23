"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";
import { SHOPIFY_URL } from "@/lib/site";

const plans = [
  { name: "Free", minSessions: 0, maxSessions: 2500, price: 0 },
  { name: "Starter", minSessions: 2500, maxSessions: 5000, price: 30 },
  { name: "Growth", minSessions: 5000, maxSessions: 25000, price: 149 },
  { name: "Scale", minSessions: 25000, maxSessions: Infinity, price: 399 },
];

function formatSessions(num: number): string {
  if (num >= 1000) return `${(num / 1000).toFixed(num % 1000 === 0 ? 0 : 1)}k`;
  return num.toString();
}

function rangeLabel(plan: (typeof plans)[number]) {
  if (plan.minSessions === 0) return "Under 2.5k sessions";
  if (plan.maxSessions === Infinity) return "25k+ sessions";
  return `${formatSessions(plan.minSessions)} to ${formatSessions(plan.maxSessions)} sessions`;
}

function getPlanForSessions(sessions: number) {
  return plans.find((p) => sessions >= p.minSessions && sessions < p.maxSessions) ?? plans[plans.length - 1];
}

// Non-linear slider: 0, 2.5k, 5k, 25k and 50k+ sit at even quarters.
const toPct = (v: number) => {
  if (v <= 2500) return (v / 2500) * 25;
  if (v <= 5000) return 25 + ((v - 2500) / 2500) * 25;
  if (v <= 25000) return 50 + ((v - 5000) / 20000) * 25;
  return 75 + (Math.min(v - 25000, 25000) / 25000) * 25;
};
const fromPct = (p: number) => {
  if (p <= 25) return (p / 25) * 2500;
  if (p <= 50) return 2500 + ((p - 25) / 25) * 2500;
  if (p <= 75) return 5000 + ((p - 50) / 25) * 20000;
  return 25000 + ((p - 75) / 25) * 25000;
};

export function PricingCards() {
  const [sessions, setSessions] = useState(10000);
  const current = getPlanForSessions(sessions);
  const pct = toPct(sessions);

  return (
    <div>
      <div className="grid overflow-hidden rounded-[8px] border border-line-strong bg-white lg:grid-cols-[1.4fr_1fr]">
        <div className="p-6 sm:p-8 lg:p-10">
          <label htmlFor="sessions" className="text-[14px] font-medium text-ink-3">
            Monthly store sessions
          </label>
          <p className="mt-2 font-mono text-[3rem] font-medium leading-none tracking-[-0.04em] tabular sm:text-[3.5rem]">
            {sessions >= 50000 ? "50k+" : formatSessions(sessions)}
          </p>

          <div className="relative mt-10">
            <div className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-wash-2" />
            <div className="absolute left-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-ink" style={{ width: `${pct}%` }} />
            <input
              id="sessions"
              type="range"
              min="0"
              max="100"
              step="0.5"
              value={pct}
              onChange={(e) => setSessions(Math.round(fromPct(parseFloat(e.target.value)) / 100) * 100)}
              className="pricing-range relative z-[1] h-6 w-full cursor-pointer appearance-none bg-transparent"
              aria-valuetext={`${formatSessions(sessions)} sessions per month`}
            />
          </div>
          <div className="mt-3 grid grid-cols-4 font-mono text-[11px] text-muted">
            <span>0</span>
            <span>2.5k</span>
            <span>5k</span>
            <span className="flex justify-between">
              25k<span>50k+</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-8 border-t border-line bg-wash p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
          <div>
            <p className="text-[14px] font-medium text-ink-3">{current.name}</p>
            <p className="mt-2 flex items-baseline gap-1">
              <span className="text-[3.5rem] font-medium leading-none tracking-[-0.045em] tabular">${current.price}</span>
              <span className="text-[15px] text-muted">/ month</span>
            </p>
            <p className="mt-3 text-[14px] text-muted">
              {rangeLabel(current)}
              {current.maxSessions === Infinity && ". Never more than $399."}
            </p>
          </div>
          <ButtonLink href={SHOPIFY_URL} external size="lg" arrow className="w-full sm:w-auto">
            {current.price === 0 ? "Install free" : "Start free trial"}
          </ButtonLink>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-[8px] border border-line bg-line lg:grid-cols-4">
        {plans.map((plan) => {
          const on = plan.name === current.name;
          return (
            <button
              key={plan.name}
              type="button"
              onClick={() => setSessions(plan.maxSessions === Infinity ? 30000 : Math.round((plan.minSessions + plan.maxSessions) / 2 / 100) * 100)}
              className={cn(
                "relative bg-white px-5 py-5 text-left transition-colors hover:bg-wash",
                on && "bg-wash"
              )}
              aria-pressed={on}
            >
              {on && <span className="absolute inset-x-0 top-0 h-[2px] bg-ink" />}
              <span className="block text-[14px] font-medium">{plan.name}</span>
              <span className="mt-1 block text-[22px] font-medium tracking-[-0.03em] tabular">
                {plan.price === 0 ? "$0" : `$${plan.price}`}
                <span className="text-[13px] font-normal text-muted"> / mo</span>
              </span>
              <span className="mt-1 block text-[12.5px] text-muted">{rangeLabel(plan)}</span>
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-[13.5px] text-muted">
        One approval in Shopify. Your plan follows your store&apos;s traffic: up when you grow, down when you slow.
      </p>

      <style jsx>{`
        .pricing-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 6px;
          background: #fff;
          border: 1.5px solid #0b0a0e;
          box-shadow: 0 2px 6px rgba(11, 10, 14, 0.18);
          cursor: grab;
        }
        .pricing-range::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 6px;
          background: #fff;
          border: 1.5px solid #0b0a0e;
          box-shadow: 0 2px 6px rgba(11, 10, 14, 0.18);
          cursor: grab;
        }
        .pricing-range::-webkit-slider-runnable-track {
          background: transparent;
        }
      `}</style>
    </div>
  );
}
