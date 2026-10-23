import Link from "next/link";
import { cn } from "@/lib/utils";
import { Section, SplitHeading } from "@/components/ui/Section";
import {
  BundleVignette,
  EmailVignette,
  FitVignette,
  InsightVignette,
  QuestionVignette,
  ResultsVignette,
} from "@/components/mocks/Vignettes";
import { TryOnVignette } from "@/components/mocks/TryOnVignette";
import { Reveal } from "@/components/motion/Reveal";

function CornerLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-box border border-line-strong text-brand transition-colors hover:border-brand hover:bg-brand hover:text-white"
    >
      <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M6 1.5v9M1.5 6h9" />
      </svg>
    </Link>
  );
}

function Card({
  title,
  body,
  href,
  children,
  className,
  stage = "h-[300px]",
  delay = 0,
}: {
  title: string;
  body: string;
  href: string;
  children: React.ReactNode;
  className?: string;
  stage?: string;
  delay?: number;
}) {
  return (
    <Reveal as="article" delay={delay} className={cn("flex flex-col overflow-hidden rounded-[8px] border border-line bg-white", className)}>
      <div className="flex items-start justify-between gap-4 p-6 lg:p-7">
        <div>
          <h3 className="h-card">{title}</h3>
          <p className="mt-2 max-w-[440px] text-[14.5px] leading-relaxed text-muted">{body}</p>
        </div>
        <CornerLink href={href} label={`More about ${title.toLowerCase()}`} />
      </div>
      <div className={cn("dots relative mt-auto flex items-center justify-center overflow-hidden border-t border-line bg-wash px-6", stage)}>
        <div className="rv-child flex w-full justify-center">{children}</div>
      </div>
    </Reveal>
  );
}

export function Goals() {
  return (
    <Section tone="wash" id="goals">
      <div className="py-20 sm:py-24 lg:py-28">
        <SplitHeading
          className="h-section max-w-[820px]"
          lead="Pick what the quiz should do."
          rest="Gleame shapes it to fit."
        />

        <div className="mt-12 grid gap-3 md:grid-cols-2 lg:mt-16 lg:grid-cols-6 lg:gap-4">
          <Card
            className="md:col-span-2 lg:col-span-4"
            title="Help shoppers choose"
            body="Every answer leads to real products from your catalog, so shoppers land on picks made for them and add them to cart."
            href="/features#matching"
            stage="h-[340px] lg:h-[380px]"
          >
            <div className="relative flex w-full max-w-[520px] items-center justify-center">
              <ResultsVignette className="translate-y-16 sm:-translate-x-14" />
              <QuestionVignette className="absolute right-0 top-6 hidden sm:block" />
            </div>
          </Card>
          <Card
            className="lg:col-span-2"
            title="Grow your email list"
            body="An email step that shoppers want to fill in. You choose where it goes."
            href="/features#leads"
            stage="h-[260px] lg:h-[380px]"
            delay={100}
          >
            <EmailVignette />
          </Card>

          <Card
            className="lg:col-span-2"
            title="Cut returns"
            body="A question that pins down fit: shade, size or skin type."
            href="/features#matching"
          >
            <FitVignette />
          </Card>
          <Card
            className="lg:col-span-2"
            title="Know your shoppers"
            body="Every answer shows up in Analytics, from the first shopper."
            href="/features#analytics"
            delay={100}
          >
            <InsightVignette />
          </Card>
          <Card
            className="lg:col-span-2"
            title="Sell more per order"
            body="Turn one match into a set with upsells and cross-sells."
            href="/features#upsell"
            delay={200}
          >
            <BundleVignette className="translate-y-4" />
          </Card>

          <Reveal as="article" className="grid overflow-hidden rounded-[8px] border border-line bg-white md:col-span-2 lg:col-span-6 lg:grid-cols-2">
            <div className="flex flex-col justify-between gap-6 p-6 lg:p-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="h-card">See it on you</h3>
                  <p className="mt-2 max-w-[440px] text-[14.5px] leading-relaxed text-muted">
                    For beauty stores, add AI virtual try-on to the results. Shoppers
                    see their match on their own photo, right where they decide to buy.
                  </p>
                </div>
                <CornerLink href="/features#try-on" label="More about virtual try-on" />
              </div>
              <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-[6px] border border-line bg-line text-[13px]">
                {["Optional photo step", "Shown with their matches", "Makeup shades", "Skincare results over time"].map((t) => (
                  <li key={t} className="bg-white px-3 py-2.5 text-ink-3">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="dots flex min-h-[320px] items-center justify-center border-t border-line bg-wash p-6 lg:border-l lg:border-t-0">
              <div className="rv-child flex w-full justify-center">
                <TryOnVignette />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
