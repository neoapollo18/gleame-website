"use client";

import { useEffect, useRef, useState } from "react";

/* One observer for the whole page. Each element reveals once, then is dropped. */
const callbacks = new WeakMap<Element, () => void>();
let observer: IntersectionObserver | null = null;

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          callbacks.get(entry.target)?.();
          callbacks.delete(entry.target);
          observer?.unobserve(entry.target);
        }
      },
      // Fire just as the element clears the bottom edge, so it lands while in view.
      { rootMargin: "0px 0px -7% 0px", threshold: 0 }
    );
  }
  return observer;
}

export type RevealVariant = "up" | "rise" | "scale" | "left" | "right" | "fade";

type RevealProps = {
  as?: React.ElementType;
  variant?: RevealVariant;
  /** Delay in ms, for staggering siblings. */
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
} & Record<string, unknown>;

/**
 * Animates its element into place the first time it scrolls into view.
 * Hidden states only apply when <html> has the `rv` class (set before paint
 * when motion is allowed), so content is always visible without JS.
 */
export function Reveal({ as: Tag = "div", variant = "up", delay = 0, className, style, children, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!document.documentElement.classList.contains("rv")) {
      setShown(true);
      return;
    }
    const io = getObserver();
    callbacks.set(el, () => setShown(true));
    io.observe(el);
    return () => {
      callbacks.delete(el);
      io.unobserve(el);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      data-shown={shown ? "" : undefined}
      className={className}
      style={delay ? { ...style, ["--rd" as string]: `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
