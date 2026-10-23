import { cn } from "@/lib/utils";

/** The two strokes of the G, in a 518 x 530 box. */
export const G_TOP =
  "M270.314 21.0001V21.3223C132.622 21.3223 21 134.639 21 274.421C21 373.976 63.8516 451.773 146.184 493.102C136.046 487.808 140.348 490.009 131.677 483.036C95.6525 454.069 73.3975 410.683 73.3975 353.101C73.3975 238.649 161.317 145.689 270.222 144.641V144.632H365.396C432.655 144.632 487.18 89.2798 487.18 21.0001H270.314Z";
export const G_BOTTOM =
  "M143.264 490.907C161.826 494.411 179.736 492.577 197.451 489.147C227.389 483.351 254.31 469.192 279.928 450.049C322.499 418.236 353.942 370.527 362.189 319.712L245.748 320.816C245.34 320.82 244.969 320.658 244.696 320.392C244.156 319.976 243.945 319.226 244.23 318.568L260.097 281.892L260.103 281.878L260.113 281.851C260.132 281.805 260.161 281.735 260.196 281.648C260.269 281.47 260.374 281.206 260.514 280.868C260.792 280.19 261.2 279.207 261.716 277.988C262.748 275.548 264.217 272.153 265.964 268.333C269.449 260.715 274.077 251.33 278.575 244.466C279.888 242.463 281.471 240.299 283.21 238.07C298.966 217.878 324.122 208.61 349.256 208.61C349.323 208.61 349.396 208.602 349.461 208.61L517.133 208.625V278.334C517.133 321.827 506.415 364.629 485.955 402.843L484.308 405.919C473.542 426.026 459.96 444.444 443.988 460.594C397.154 507.947 332.574 533.89 266.751 526.843C245.836 524.604 226.787 521.983 215.711 519.085C197.963 514.44 159.247 497.551 142.338 490.907C140.985 490.488 141.95 490.659 143.264 490.907Z";

/** The black app mark: the Gleame G on a black tile. */
export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-8 w-8 shrink-0", className)}
      role="img"
      aria-label="Gleame"
    >
      <defs>
        <linearGradient id="gm-a" x1="489.18" y1="274.26" x2="19" y2="274.26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FAFAFA" />
          <stop offset="0.74" stopColor="#7A2DAB" />
          <stop offset="1" stopColor="#5B0E86" />
        </linearGradient>
        <linearGradient id="gm-b" x1="517.13" y1="368.3" x2="141.68" y2="368.3" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="0.57" stopColor="#6A1A99" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="#0B0A0E" />
      <g transform="translate(12.2 11.2) scale(0.075)">
        <path
          d={G_TOP}
          fill="url(#gm-a)"
        />
        <path
          d={G_BOTTOM}
          fill="url(#gm-b)"
        />
      </g>
    </svg>
  );
}

export function Logo({ className, markClassName }: { className?: string; markClassName?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <Mark className={cn("h-7 w-7", markClassName)} />
      <span className="translate-y-[1px] text-[1.1875rem] font-semibold leading-none tracking-[-0.03em] text-ink">Gleame</span>
    </span>
  );
}
