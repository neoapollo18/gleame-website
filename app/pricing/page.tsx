import { PricingCards } from "@/components/pricing/PricingCards";
import { Accordion } from "@/components/ui/Accordion";
import { Section, SplitHeading } from "@/components/ui/Section";
import { FinalCTA } from "@/components/home/FinalCTA";

const included = [
  ["AI quiz builder", "The whole quiz written from your catalog"],
  ["Quiz Studio", "Every screen, style and word, plus Build with AI"],
  ["Check matches", "See and fix what every answer recommends"],
  ["All templates", "Match, Routine, Discover, Consult and Clean"],
  ["Email and SMS capture", "With answers saved to every lead"],
  ["Upsell and cross-sell", "Bundles and routines on the results screen"],
  ["Analytics", "Funnel, answers, products, leads and revenue"],
  ["Free expert setup", "Our team builds and launches it with you"],
];

const faqs = [
  {
    title: "How long does it take to launch a quiz?",
    content:
      "Minutes. Install from the Shopify App Store, tell Gleame what the quiz should do, choose which products it covers, and it writes the whole quiz in about two minutes: questions, answers and which products each answer leads to. Review the matches, make any changes in the Studio, then publish. No code required.",
  },
  {
    title: "How does pricing work?",
    content:
      "Pricing follows your store's traffic with one approval. Free under 2,500 monthly store sessions, $30/mo from 2.5k to 5k, $149/mo from 5k to 25k, and $399/mo above 25k, never more than $399. Your plan moves up when you grow and down when you slow, automatically, and everything is billed through Shopify.",
  },
  {
    title: "Will it ever recommend products I don't sell?",
    content:
      "No. Every answer leads to products from your synced Shopify catalog. In Check matches you can see exactly which products each answer recommends, and any answer Gleame can't match is flagged before you publish. You can also set rules for every result, like “never show gift cards.”",
  },
  {
    title: "Can I make the quiz match my brand?",
    content:
      "Yes. Start from one of five templates, then change colors, radius, fonts and every line of copy in the Studio. Or describe the change in a sentence, like “make it feel more premium,” and Gleame makes it. Every change has an Undo.",
  },
  {
    title: "Can you set it up for me?",
    content:
      "Yes, for free. Choose expert setup when you install, or book a call. Our team builds, styles and launches the quiz on your store, and a person tunes which products each answer leads to. You can keep editing it after.",
  },
  {
    title: "I already use another quiz app. Can I switch?",
    content:
      "Yes. If you're moving from Octane AI, Quiz Kit, RevenueHunt, Quizell or another app, book a free expert setup and we'll rebuild your quiz on Gleame, mapped to your current catalog.",
  },
  {
    title: "Is the photo step for try-on required?",
    content:
      "No. Virtual try-on is optional and the photo step can always be skipped. Shoppers who skip it still get matches from their answers. Photos are processed securely and never stored without consent.",
  },
  {
    title: "Do you offer a free trial?",
    content:
      "Yes. Every paid plan includes a 14-day free trial with full access, and stores under 2,500 monthly sessions stay free. Nothing goes live on your storefront until you publish, so you can build and preview without risk.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Section>
        <div className="pb-14 pt-20 sm:pt-24 lg:pb-16 lg:pt-28">
          <SplitHeading
            as="h1"
            className="max-w-[900px] text-[2.25rem] font-medium leading-[1.06] tracking-[-0.036em] sm:text-[3rem] lg:text-[3.5rem]"
            lead="Pricing that follows your traffic."
            rest="Free under 2,500 monthly sessions and never more than $399 a month. Every feature on every plan."
          />
        </div>
        <div className="pb-20 lg:pb-28">
          <PricingCards />
        </div>
      </Section>

      <Section tone="wash">
        <div className="grid gap-12 py-20 lg:grid-cols-[1fr_1.6fr] lg:py-28">
          <SplitHeading
            className="text-[1.625rem] font-medium leading-[1.14] tracking-[-0.026em] sm:text-[2rem]"
            lead="Every plan includes everything."
            rest="Plans differ by traffic, never by feature."
          />
          <ul className="grid gap-px overflow-hidden rounded-[8px] border border-line bg-line sm:grid-cols-2">
            {included.map(([t, d]) => (
              <li key={t} className="bg-white px-5 py-4">
                <p className="text-[15px] font-medium">{t}</p>
                <p className="mt-0.5 text-[13.5px] text-muted">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="faq" className="scroll-mt-20">
        <div className="grid gap-10 py-20 lg:grid-cols-[1fr_1.6fr] lg:py-28">
          <SplitHeading
            className="text-[1.625rem] font-medium leading-[1.14] tracking-[-0.026em] sm:text-[2rem]"
            lead="Questions, answered."
            rest="Anything else, we're one email away."
          />
          <Accordion items={faqs} />
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
