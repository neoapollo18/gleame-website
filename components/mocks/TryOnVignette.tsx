"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const SHADES = [
  { name: "Rouge 04", c: "#9E1B2B" },
  { name: "Rosewood", c: "#A4505A" },
  { name: "Petal", c: "#D58A8E" },
  { name: "Mocha", c: "#7A4536" },
  { name: "Plum", c: "#5B1E46" },
];

/** "See it on you": a line-drawn portrait crop whose lip color follows the swatch. */
export function TryOnVignette({ className }: { className?: string }) {
  const [i, setI] = useState(0);
  const shade = SHADES[i];
  return (
    <div className={cn("w-full max-w-[300px] overflow-hidden rounded-[10px] border border-line bg-white shadow-card", className)}>
      <div className="relative aspect-[4/3] overflow-hidden bg-[#E9D4C6]">
        <svg viewBox="0 0 300 225" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <defs>
            <radialGradient id="to-skin" cx="50%" cy="40%" r="75%">
              <stop offset="0" stopColor="#F1DDCF" />
              <stop offset="1" stopColor="#D9B8A4" />
            </radialGradient>
            <linearGradient id="to-gloss" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#fff" stopOpacity="0.45" />
              <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="300" height="225" fill="url(#to-skin)" />
          {/* nose shadow and philtrum */}
          <path d="M138 40 C 136 62, 128 78, 132 88 C 140 96, 160 96, 168 88 C 172 78, 164 62, 162 40" fill="none" stroke="#B88E78" strokeOpacity="0.45" strokeWidth="1.2" />
          <path d="M146 104 C 147 112, 147 118, 145 124 M154 104 C 153 112, 153 118, 155 124" fill="none" stroke="#B88E78" strokeOpacity="0.35" strokeWidth="1" />
          {/* lips */}
          <g transform="translate(70 118)" style={{ transition: "fill 400ms" }}>
            <path
              d="M0 38 C 30 22, 54 6, 76 14 C 79 15, 83 15, 86 14 C 108 6, 132 22, 160 38 C 120 44, 40 44, 0 38 Z"
              fill={shade.c}
              style={{ transition: "fill 400ms ease" }}
            />
            <path
              d="M0 38 C 40 46, 120 46, 160 38 C 140 70, 110 82, 80 82 C 50 82, 20 70, 0 38 Z"
              fill={shade.c}
              style={{ transition: "fill 400ms ease", filter: "brightness(1.08)" }}
            />
            <path d="M0 38 C 40 46, 120 46, 160 38 C 140 70, 110 82, 80 82 C 50 82, 20 70, 0 38 Z" fill="url(#to-gloss)" />
            <path d="M0 38 C 40 45, 120 45, 160 38" fill="none" stroke="#2A0E12" strokeOpacity="0.55" strokeWidth="1.4" />
          </g>
        </svg>
        <span className="absolute left-2.5 top-2.5 rounded-[4px] bg-white/85 px-1.5 py-[2px] text-[10px] font-medium text-ink backdrop-blur">
          Your photo
        </span>
        <span className="absolute bottom-2.5 right-2.5 rounded-[4px] bg-ink/80 px-1.5 py-[2px] font-mono text-[10px] text-white">
          {shade.name}
        </span>
      </div>
      <div className="flex items-center justify-between gap-2 p-3">
        <div className="flex gap-1.5" role="radiogroup" aria-label="Try a shade">
          {SHADES.map((s, idx) => (
            <button
              key={s.name}
              role="radio"
              aria-checked={idx === i}
              aria-label={s.name}
              onClick={() => setI(idx)}
              className={cn(
                "h-6 w-6 rounded-full transition-shadow",
                idx === i ? "ring-2 ring-ink ring-offset-2" : "hover:ring-1 hover:ring-line-strong hover:ring-offset-1"
              )}
              style={{ background: s.c }}
            />
          ))}
        </div>
        <span className="inline-flex h-7 items-center rounded-[5px] bg-ink px-2.5 text-[11px] font-medium text-white">
          Add to cart
        </span>
      </div>
    </div>
  );
}
