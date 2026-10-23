import { Echo } from "@/components/art/Echo";
import { ButtonLink } from "@/components/ui/Button";
import { CATALOG, ProductArt } from "@/components/mocks/primitives";
import { QuestionVignette } from "@/components/mocks/Vignettes";
import { RATING, REVIEWS_URL, SHOPIFY_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Stars({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <span className="inline-flex gap-[2px] text-accent-coral" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 12 12" className={className} fill="currentColor">
          <path d="M6 .8l1.55 3.3 3.6.42-2.66 2.47.7 3.56L6 8.77 2.81 10.55l.7-3.56L.85 4.52l3.6-.42L6 .8z" />
        </svg>
      ))}
    </span>
  );
}

function MatchCard({ className }: { className?: string }) {
  const p = CATALOG.cherry;
  return (
    <div className={cn("w-[236px] rounded-[12px] border border-line bg-white p-3 shadow-float", className)}>
      <div className="flex items-center gap-3">
        <ProductArt shade={p.shade} className="h-14 w-14 shrink-0 rounded-[8px]" />
        <div className="min-w-0">
          <span className="inline-flex rounded-full bg-ink px-1.5 py-[1px] text-[8.5px] font-semibold tracking-[0.12em] text-white">
            BEST MATCH
          </span>
          <p className="mt-1 truncate text-[13px] font-semibold">{p.name}</p>
          <p className="text-[11px] text-muted">Because you chose Clean & classic</p>
        </div>
      </div>
      <span className="mt-3 flex h-8 items-center justify-center rounded-[7px] bg-ink text-[11.5px] font-semibold text-white">
        Add to cart · {p.price}
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative -mt-16 overflow-hidden border-b border-line">
      {/* Phone and tablet: the art sits above the headline. */}
      <Echo id="echo-hero-sm" className="absolute -right-[30%] top-0 z-[1] h-[480px] w-[480px] sm:-right-[10%] sm:h-[620px] sm:w-[620px] lg:hidden" />

      <div className="frame frame-pad">
        <div className="relative z-[2] grid items-center gap-8 pb-20 pt-[360px] sm:pt-[460px] lg:grid-cols-[1.08fr_1fr] lg:pb-24 lg:pt-[150px]">
          <div>
            <h1 className="load-rise text-balance text-[2.375rem] font-medium leading-[1.06] tracking-[-0.038em] sm:text-[3.125rem] lg:text-[3.375rem] lg:leading-[1.04]">
              <span className="text-ink">Help every shopper find their match.</span>{" "}
              <span className="load-fade text-brand-pop" style={{ ["--d" as string]: "160ms" }}>
                Gleame turns your catalog into a product quiz, written by AI and
                matched to what you sell.
              </span>
            </h1>

            <div className="load-rise mt-10 flex flex-wrap items-center gap-3" style={{ ["--d" as string]: "220ms" }}>
              <ButtonLink href={SHOPIFY_URL} external size="lg" arrow>
                Install on Shopify
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" size="lg" className="bg-white/80 backdrop-blur">
                Book a demo
              </ButtonLink>
            </div>

            <a
              href={REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="load-rise mt-8 inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[13.5px] text-ink-3 transition-colors hover:text-ink"
              style={{ ["--d" as string]: "320ms" }}
            >
              <Stars />
              <span>
                <span className="font-medium text-ink">{RATING.score}</span> from {RATING.count} reviews on the Shopify App Store
              </span>
            </a>
          </div>

          <div className="relative hidden h-[600px] lg:block">
            <Echo id="echo-hero" className="absolute left-1/2 top-1/2 h-[980px] w-[980px] -translate-x-[44%] -translate-y-1/2" />
            <div className="load-float-l absolute left-[2%] top-[70px] z-[2]" style={{ ["--d" as string]: "450ms" }}>
              <div className="bob">
                <QuestionVignette className="w-[236px] -rotate-[2deg]" />
              </div>
            </div>
            <div className="load-float-u absolute bottom-[64px] right-0 z-[2]" style={{ ["--d" as string]: "650ms" }}>
              <div className="bob" style={{ ["--b" as string]: "-3.5s" }}>
                <MatchCard className="rotate-[1.5deg]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
