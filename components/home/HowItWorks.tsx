import { Section, SplitHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { AskVignette, BuildingVignette, LiveVignette, SyncVignette } from "@/components/mocks/Vignettes";

const steps = [
  {
    title: "We read your store",
    body: "Your products, collections and the look of your theme. Choose which products the quiz covers.",
    visual: <SyncVignette />,
  },
  {
    title: "AI writes your quiz",
    body: "Questions, answers and which products each answer leads to. About two minutes, and nothing goes live.",
    visual: <BuildingVignette />,
  },
  {
    title: "You make it yours",
    body: "Change anything in the Studio. Click to edit, or describe the change in a sentence.",
    visual: <AskVignette />,
  },
  {
    title: "Check and go live",
    body: "Review every answer's matches, then publish to a page on your store.",
    visual: <LiveVignette />,
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <div className="pt-20 sm:pt-24 lg:pt-28">
        <SplitHeading
          className="h-section max-w-[800px]"
          lead="Live in minutes."
          rest="Install from the Shopify App Store and Gleame writes the first draft. You decide every word and every match."
        />
      </div>

      <ol className="-mx-5 mt-14 grid gap-px border-t border-line bg-line sm:-mx-8 sm:grid-cols-2 lg:-mx-14 lg:mt-16 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal as="li" delay={i * 90} key={s.title} className="flex flex-col bg-white">
            <div className="px-5 pb-6 pt-8 sm:min-h-[232px] sm:px-8 lg:min-h-[236px] lg:px-7 lg:pt-10">
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-[4px] bg-brand font-mono text-[11px] text-white">
                  {i + 1}
                </span>
                <span className="h-px flex-1 bg-line" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-[17px] font-medium tracking-[-0.015em]">{s.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{s.body}</p>
            </div>
            <div className="dots mt-auto flex min-h-[260px] items-center border-t border-line bg-wash px-5 py-8 sm:px-8 lg:px-6">
              <div className="rv-child w-full">{s.visual}</div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
