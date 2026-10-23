import { Section, SplitHeading } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/Button";
import { Stars } from "@/components/home/Hero";
import { RATING, REVIEWS_URL } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";

// From the Shopify App Store listing. Keep wording verbatim apart from punctuation.
const featured = {
  quote:
    "The Gleame team is the Dream Team. They didn't just take the technology they built and implement it, they helped us identify what was working vs what wasn't, using a data-driven approach to creating tailored tools for our customers.",
  store: "ORLY",
  meta: "United States · 4 months using the app",
};

const reviews = [
  {
    quote:
      "We had a great experience working with the Gleame team to build an AI-powered shade matching tool for our hair extensions. They were incredibly responsive and patient throughout the process and took the time to understand our products, our customers and what we were trying to accomplish.",
    store: "Locks & Mane",
    meta: "Canada · 4 months using the app",
  },
  {
    quote:
      "Aaron is incredibly professional and knowledgeable on how to create a custom quiz for our AlkaGlam products. We had a discovery call, he implemented what we needed while exceeding our expectations. Communication was clear which is a huge plus. The quiz is intuitive, clean, and everything we needed.",
    store: "AlkaGlam",
    meta: "United States · 19 days using the app",
  },
];

export function Reviews() {
  return (
    <Section id="reviews">
      <div className="flex flex-col gap-6 pt-20 sm:pt-24 lg:flex-row lg:items-end lg:justify-between lg:pt-28">
        <SplitHeading
          className="h-section max-w-[760px]"
          lead={`Rated ${RATING.score} by the brands using it.`}
          rest={`${RATING.count} reviews on the Shopify App Store, from nail color to hair extensions.`}
        />
        <TextLink href={REVIEWS_URL} external className="shrink-0 text-[15px]">
          Read every review
        </TextLink>
      </div>

      <div className="-mx-5 mt-14 grid gap-px border-t border-line bg-line sm:-mx-8 lg:-mx-14 lg:mt-16 lg:grid-cols-[1.35fr_1fr]">
        <Reveal as="figure" variant="fade" className="relative flex flex-col justify-between gap-10 overflow-hidden bg-brand-800 px-5 py-10 text-white sm:px-8 lg:px-14 lg:py-14">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full" style={{ background: "radial-gradient(circle, rgba(224,80,159,0.35), transparent 70%)" }} />
          <blockquote className="relative text-pretty text-[1.375rem] font-normal leading-[1.38] tracking-[-0.022em] text-white sm:text-[1.625rem] lg:text-[1.8125rem]">
            &ldquo;{featured.quote}&rdquo;
          </blockquote>
          <figcaption className="relative flex items-center justify-between gap-4 border-t border-white/15 pt-5">
            <div>
              <p className="text-[15px] font-medium">{featured.store}</p>
              <p className="mt-0.5 text-[13px] text-white/60">{featured.meta}</p>
            </div>
            <Stars className="h-4 w-4" />
          </figcaption>
        </Reveal>
        <div className="grid gap-px bg-line">
          {reviews.map((r, i) => (
            <Reveal as="figure" delay={120 + i * 100} key={r.store} className="flex flex-col justify-between gap-6 bg-white px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
              <blockquote className="text-pretty text-[15px] leading-relaxed text-ink-2">&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[14px] font-medium">{r.store}</p>
                  <p className="mt-0.5 text-[12.5px] text-muted">{r.meta}</p>
                </div>
                <Stars className="h-3 w-3" />
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
