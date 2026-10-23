import { Section, SplitHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

const types = [
  {
    name: "Product finder",
    q: "What are you shopping for today?",
    a: ["Something for me", "A gift", "Restocking"],
    body: "Narrow a big catalog to the few products that fit.",
  },
  {
    name: "Skincare quiz",
    q: "How does your skin feel by noon?",
    a: ["Tight", "Comfortable", "Shiny"],
    body: "Match concerns and skin type to the right formulas.",
  },
  {
    name: "Shade match",
    q: "Gold or silver on you?",
    a: ["Gold", "Silver", "Both"],
    body: "Undertone and finish questions for color you can't swatch online.",
  },
  {
    name: "Sizing quiz",
    q: "How do you like it to fit?",
    a: ["Snug", "True to size", "Relaxed"],
    body: "Pin down fit before checkout, not after the return.",
  },
  {
    name: "Gift finder",
    q: "Who are we shopping for?",
    a: ["Partner", "Friend", "Parent"],
    body: "Help shoppers who don't know your products buy with confidence.",
  },
  {
    name: "Routine builder",
    q: "How many steps feel right?",
    a: ["Just one", "Three", "The full ritual"],
    body: "Recommend products that work together, as a set.",
  },
];

export function QuizTypes() {
  return (
    <Section id="quiz-types">
      <div className="pt-20 sm:pt-24 lg:pt-28">
        <SplitHeading
          className="h-section max-w-[800px]"
          lead="Any quiz your store needs."
          rest="Gleame reads what you sell and picks the format that fits, mapped to your entire catalog, not a preset few."
        />
      </div>

      <ul className="-mx-5 mt-14 grid gap-px border-t border-line bg-line sm:-mx-8 sm:grid-cols-2 lg:-mx-14 lg:mt-16 lg:grid-cols-3">
        {types.map((t, i) => (
          <Reveal as="li" delay={(i % 3) * 90} key={t.name} className="group flex flex-col bg-white px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
            <h3 className="text-[17px] font-medium tracking-[-0.015em]">{t.name}</h3>
            <p className="mb-6 mt-1.5 text-[14.5px] leading-relaxed text-muted">{t.body}</p>
            <div className="mt-auto rounded-[8px] border border-line bg-wash p-4 transition-colors group-hover:border-line-strong">
              <p className="text-[14px] font-medium tracking-[-0.01em]">{t.q}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {t.a.map((a, i) => (
                  <span
                    key={a}
                    className={
                      i === 0
                        ? "rounded-full border border-brand-pop bg-brand-pop px-3 py-1 text-[12px] font-medium text-white"
                        : "rounded-full border border-line-strong bg-white px-3 py-1 text-[12px] text-ink-3"
                    }
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
