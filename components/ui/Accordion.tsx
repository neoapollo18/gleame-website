"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface AccordionProps {
  items: { title: string; content: string }[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-line">
      {items.map((item, index) => {
        const open = openIndex === index;
        const id = `faq-${index}`;
        return (
          <div key={item.title} className="border-b border-line">
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : index)}
                aria-expanded={open}
                aria-controls={id}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="text-[16px] font-medium tracking-[-0.01em] sm:text-[17px]">{item.title}</span>
                <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-box border border-line-strong">
                  <span className="absolute h-[1.5px] w-3 bg-ink" />
                  <span
                    className={cn(
                      "absolute h-3 w-[1.5px] bg-ink transition-transform duration-200",
                      open && "scale-y-0"
                    )}
                  />
                </span>
              </button>
            </h3>
            <div
              id={id}
              className={cn(
                "grid transition-[grid-template-rows] duration-200 ease-out",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-[720px] pb-6 text-[15px] leading-relaxed text-muted">{item.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
