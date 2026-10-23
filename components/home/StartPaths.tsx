import { Section, SplitHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { CheckIcon } from "@/components/mocks/primitives";
import { SHOPIFY_URL } from "@/lib/site";

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-[15px] leading-snug">
      <CheckIcon className="mt-[3px] h-4 w-4 text-brand-pop" />
      <span className="text-ink-2">{children}</span>
    </li>
  );
}

export function StartPaths() {
  return (
    <Section tone="blush" id="get-started">
      <div className="py-20 sm:py-24 lg:py-28">
        <SplitHeading
          className="h-section max-w-[760px]"
          lead="Build it yourself, or have us build it."
          rest="Either way it's free to start, and you can change everything later."
        />

        <div className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-2">
          <div className="flex flex-col overflow-hidden rounded-[8px] border border-line-strong bg-white">
            <div className="border-b border-line bg-blush px-7 py-2.5 text-[13px] font-medium text-ink-3 lg:px-10">
              Free to install · self-serve
            </div>
            <div className="flex flex-1 flex-col p-7 lg:p-10">
            <h3 className="text-[1.5rem] font-medium tracking-[-0.025em]">Build it myself with AI</h3>
            <p className="mt-1.5 text-[15px] text-muted">Ready in about 2 minutes.</p>
            <ul className="mt-7 space-y-3.5">
              <Check>A complete quiz written from your catalog</Check>
              <Check>Edit every question, answer and match in the Studio</Check>
              <Check>Publish whenever you&apos;re ready</Check>
            </ul>
            <div className="mt-auto pt-10">
              <ButtonLink href={SHOPIFY_URL} external variant="secondary" size="lg" arrow className="w-full sm:w-auto">
                Install on Shopify
              </ButtonLink>
            </div>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-[8px] border-[1.5px] border-brand bg-white shadow-[0_24px_48px_-24px_rgba(91,14,134,0.45)]">
            <div className="bg-brand px-7 py-2.5 text-[13px] font-medium text-white lg:px-10">
              Free · done for you
            </div>
            <div className="flex flex-1 flex-col p-7 lg:p-10">
              <h3 className="text-[1.5rem] font-medium tracking-[-0.025em]">Set it up with an expert</h3>
              <p className="mt-1.5 text-[15px] text-muted">Our team does it with you.</p>
              <ul className="mt-7 space-y-3.5">
                <Check>We build, style and launch the quiz on your store</Check>
                <Check>A person tunes which products each answer leads to</Check>
                <Check>You can keep editing it after</Check>
              </ul>
              <div className="mt-auto flex flex-col gap-4 pt-10 sm:flex-row sm:items-center">
                <ButtonLink href="/contact" size="lg" arrow className="w-full sm:w-auto">
                  Get free expert setup
                </ButtonLink>
                <p className="text-[13px] leading-snug text-muted">
                  Switching from Octane AI, Quiz Kit, RevenueHunt or Quizell? We&apos;ll move it over.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
