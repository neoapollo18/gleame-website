import { cn } from "@/lib/utils";
import { G_BOTTOM, G_TOP } from "@/components/brand/Logo";

const CX = 269;
const CY = 275;
const RINGS = 16;

// Purple at the core, warming to pink and coral at the edge.
const STOPS = ["#5B0E86", "#8A2BC2", "#C13CC0", "#EE5BA6", "#FF8A73", "#FFB59C"];

function mix(a: string, b: string, t: number) {
  const pa = [1, 3, 5].map((i) => parseInt(a.slice(i, i + 2), 16));
  const pb = [1, 3, 5].map((i) => parseInt(b.slice(i, i + 2), 16));
  return `#${pa.map((v, i) => Math.round(v + (pb[i] - v) * t).toString(16).padStart(2, "0")).join("")}`;
}

function colorAt(t: number) {
  const x = t * (STOPS.length - 1);
  const i = Math.min(Math.floor(x), STOPS.length - 2);
  return mix(STOPS[i], STOPS[i + 1], x - i);
}

const rings = Array.from({ length: RINGS }, (_, i) => {
  const t = i / (RINGS - 1);
  return {
    scale: 0.56 + t * 1.12,
    rotate: -t * 18,
    color: colorAt(t),
    opacity: 0.08 + 0.82 * Math.pow(1 - t, 1.3),
    enter: `${i * 45}ms`,
    pulse: `${(1.4 + i * 0.16).toFixed(2)}s`,
  };
});

/** The Gleame G, echoed outward in fine lines. Used as the hero art. */
/** `id` must be unique per instance on a page: gradients in a hidden copy
 *  would otherwise shadow the visible one. */
export function Echo({ className, id = "echo" }: { className?: string; id?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none select-none", className)}>
      <svg viewBox="-300 -300 1140 1140" className="h-full w-full">
        <defs>
          <linearGradient id={`${id}-fill`} x1="21" y1="60" x2="517" y2="500" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#3A0656" />
            <stop offset="0.45" stopColor="#8A2BC2" />
            <stop offset="0.8" stopColor="#E0509F" />
            <stop offset="1" stopColor="#FF8A73" />
          </linearGradient>
          <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#E05BC4" stopOpacity="0.22" />
            <stop offset="0.6" stopColor="#8A2BC2" stopOpacity="0.06" />
            <stop offset="1" stopColor="#8A2BC2" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx={CX} cy={CY} r="430" fill={`url(#${id}-glow)`} />

        <g className="echo-rings">
        {rings.map((r, i) => (
          <g
            key={i}
            transform={`translate(${CX} ${CY}) rotate(${r.rotate}) scale(${r.scale}) translate(${-CX} ${-CY})`}
            className="echo-ring"
            style={{ ["--o" as string]: r.opacity, ["--in" as string]: r.enter, ["--pulse" as string]: r.pulse, opacity: r.opacity }}
            fill="none"
            stroke={r.color}
            strokeWidth="1.3"
          >
            <path d={G_TOP} vectorEffect="non-scaling-stroke" />
            <path d={G_BOTTOM} vectorEffect="non-scaling-stroke" />
          </g>
        ))}
        </g>

        <g className="echo-core">
          <g transform={`translate(${CX} ${CY}) scale(0.46) translate(${-CX} ${-CY})`}>
            <path d={G_TOP} fill={`url(#${id}-fill)`} />
            <path d={G_BOTTOM} fill={`url(#${id}-fill)`} />
          </g>
        </g>
      </svg>
    </div>
  );
}
