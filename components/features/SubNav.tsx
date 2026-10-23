"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function SubNav({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const els = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-120px 0px -60% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <div className="sticky top-16 z-40 border-b border-line bg-white/90 backdrop-blur-md">
      <nav className="frame" aria-label="On this page">
        <ul className="no-scrollbar flex overflow-x-auto">
          {items.map((item) => (
            <li key={item.id} className="shrink-0">
              <a
                href={`#${item.id}`}
                className={cn(
                  "relative flex h-12 items-center px-4 text-[13.5px] font-medium transition-colors lg:px-5",
                  active === item.id ? "text-ink" : "text-muted hover:text-ink"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-4 bottom-[-1px] h-[2px] bg-ink transition-opacity lg:inset-x-5",
                    active === item.id ? "opacity-100" : "opacity-0"
                  )}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
