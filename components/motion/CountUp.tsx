"use client";

import { useEffect, useRef, useState } from "react";

const fmt = (n: number) => Math.round(n).toLocaleString("en-US");

/**
 * Counts to `to` the first time it scrolls into view. Renders the final value
 * on the server, so it reads correctly without JS or with reduced motion.
 */
export function CountUp({
  to,
  from = 0,
  prefix = "",
  suffix = "",
  duration = 1100,
  className,
}: {
  to: number;
  from?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el || !document.documentElement.classList.contains("rv")) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        setValue(from);
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          setValue(from + (to - from) * (1 - Math.pow(1 - p, 4)));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { rootMargin: "0px 0px -7% 0px" }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, from, duration]);

  const final = `${prefix}${fmt(to)}${suffix}`;
  return (
    <span
      ref={ref}
      className={className}
      style={{ display: "inline-block", minWidth: `${final.length - 0.4}ch`, fontVariantNumeric: "tabular-nums" }}
    >
      <span className="sr-only">{final}</span>
      <span aria-hidden="true">
        {prefix}
        {fmt(value)}
        {suffix}
      </span>
    </span>
  );
}
