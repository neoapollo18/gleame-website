import { Echo } from "@/components/art/Echo";
import { SplitHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { CheckIcon } from "@/components/mocks/primitives";
import { SHOPIFY_URL } from "@/lib/site";

const notes = ["Free to install", "Nothing goes live until you publish", "Free expert setup"];

export function FinalCTA({
  lead = "Your catalog already has the answers.",
  rest = "See your first quiz in about two minutes.",
}: {
  lead?: string;
  rest?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <Echo id="echo-cta" className="absolute -right-[34%] -top-[80px] z-[1] h-[420px] w-[420px] sm:-right-[10%] sm:h-[500px] sm:w-[500px] lg:-right-[2%] lg:top-1/2 lg:h-[820px] lg:w-[820px] lg:-translate-y-1/2" />
      <div className="frame frame-pad">
        <div className="relative z-[2] max-w-[680px] pb-20 pt-[260px] sm:pt-[340px] lg:pb-32 lg:pt-36">
          <SplitHeading
            className="text-[2.25rem] font-medium leading-[1.06] tracking-[-0.036em] sm:text-[3rem] lg:text-[3.375rem]"
            lead={lead}
            rest={rest}
          />
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={SHOPIFY_URL} external size="lg" arrow>
              Install on Shopify
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" size="lg" className="bg-white/80 backdrop-blur">
              Book a demo
            </ButtonLink>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[13.5px] text-ink-3">
            {notes.map((n) => (
              <li key={n} className="inline-flex items-center gap-1.5">
                <CheckIcon className="h-3.5 w-3.5 text-brand" />
                {n}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
