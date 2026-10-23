import type { Metadata } from "next";
import { Echo } from "@/components/art/Echo";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SplitHeading } from "@/components/ui/Section";
import { SubNav } from "@/components/features/SubNav";
import { FeatureRow } from "@/components/features/FeatureRow";
import { StudioMock } from "@/components/mocks/StudioMock";
import { AnalyticsMock } from "@/components/mocks/AnalyticsMock";
import { TryOnVignette } from "@/components/mocks/TryOnVignette";
import {
  BuildingVignette,
  BundleVignette,
  EmailVignette,
  InsightVignette,
  MatchRuleVignette,
  ReadyVignette,
  ResultsVignette,
  TemplateList,
} from "@/components/mocks/Vignettes";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SHOPIFY_URL } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Product",
  description:
    "How Gleame works: AI that writes your whole quiz from your Shopify catalog, a Studio for every detail, matching you can check before you publish, templates, lead capture, upsells, analytics and virtual try-on.",
  alternates: { canonical: "https://gleame.ai/features" },
};

const sections = [
  { id: "build", label: "Build with AI" },
  { id: "studio", label: "Studio" },
  { id: "matching", label: "Matching" },
  { id: "templates", label: "Templates" },
  { id: "leads", label: "Leads" },
  { id: "upsell", label: "Upsell" },
  { id: "analytics", label: "Analytics" },
  { id: "try-on", label: "Try-on" },
  { id: "switching", label: "Switching" },
];

const competitors = ["Octane AI", "Quiz Kit", "RevenueHunt", "Quizell"];

export default function FeaturesPage() {
  return (
    <>
      <section className="relative -mt-16 overflow-hidden border-b border-line">
        <Echo id="echo-features" className="absolute -right-[32%] top-0 z-[1] h-[440px] w-[440px] sm:-right-[10%] sm:h-[560px] sm:w-[560px] lg:right-0 lg:top-[10px] lg:h-[780px] lg:w-[780px]" />
        <div className="frame frame-pad">
          <div className="relative z-[2] max-w-[700px] pb-20 pt-[320px] sm:pt-[400px] lg:pb-24 lg:pt-[180px]">
            <SplitHeading
              as="h1"
              className="text-[2.25rem] font-medium leading-[1.06] tracking-[-0.036em] sm:text-[3rem] lg:text-[3.5rem]"
              lead="From catalog to cart."
              rest="AI writes the quiz. You perfect it. Analytics show what it sells."
            />
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href={SHOPIFY_URL} external size="lg" arrow>
                Install on Shopify
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" size="lg" className="bg-white/80 backdrop-blur">
                Book a demo
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <SubNav items={sections} />

      <FeatureRow
        id="build"
        lead="A whole quiz from one click."
        rest="Gleame reads your products, collections and theme, then writes the questions, the answers and which products each answer leads to."
        points={[
          "Pick goals first: grow your list, cut returns, learn about shoppers",
          "Choose exactly which products and collections the quiz covers",
          "A template chosen for your category and restyled to your theme",
          "About two minutes. Nothing goes live until you publish.",
        ]}
        visual={
          <div className="w-full max-w-[420px] space-y-3">
            <ReadyVignette />
            <BuildingVignette className="ml-auto w-[88%]" />
          </div>
        }
      />

      <Section id="studio" className="scroll-mt-28">
        <div className="grid gap-10 pt-16 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:pt-24">
          <SplitHeading
            className="text-[1.625rem] font-medium leading-[1.14] tracking-[-0.026em] sm:text-[2rem]"
            lead="Every detail, editable."
            rest="Screens, text and labels, images, style and the flow between questions, with a live preview on desktop and mobile."
          />
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-[6px] border border-line bg-line text-[14px]">
            {[
              ["Style", "Colors, radius, fonts, motion"],
              ["Text & labels", "Every word on every screen"],
              ["Flow map", "Questions and branches at a glance"],
              ["Build with AI", "Describe it, and undo it"],
            ].map(([t, d], i) => (
              <Reveal as="li" variant="fade" delay={i * 80} key={t} className="bg-white px-4 py-3">
                <p className="font-medium">{t}</p>
                <p className="mt-0.5 text-[13px] text-muted">{d}</p>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal variant="rise" className="pb-16 pt-10 sm:pb-20 lg:pb-24 lg:pt-12">
          <StudioMock />
        </Reveal>
      </Section>

      <FeatureRow
        id="matching"
        tone="wash"
        flip
        lead="Recommendations you can check."
        rest="Every answer leads to products from your catalog, through a rule written in plain words. Anything Gleame can't match is flagged before you publish."
        points={[
          "Mapped to your entire catalog, not a preset few",
          "Rules for every result, like “never show gift cards”",
          "Fix a match by editing the rule or asking in chat",
          "Your catalog stays in sync as products change",
        ]}
        visual={<MatchRuleVignette className="max-w-[400px]" />}
      />

      <FeatureRow
        id="templates"
        lead="Five starting points, restyled to your brand."
        rest="Gleame picks the template that fits what you sell and sets aside the ones that don't. Change it any time from the Studio."
        points={[
          "Match, Routine, Discover, Consult and Clean",
          "Takes your theme's fonts and colors by default",
          "Override any color, radius or font in Style",
          "Desktop and mobile previews side by side",
        ]}
        visual={<TemplateList className="max-w-[460px]" />}
      />

      <FeatureRow
        id="leads"
        tone="wash"
        flip
        lead="Capture email and SMS inside the quiz."
        rest="Shoppers trade an email for their matches. Their answers travel with the lead, so you can segment and follow up with what they told you."
        points={[
          "Email and SMS steps you can place anywhere in the flow",
          "Answers saved with every lead",
          "Leads tab in Analytics, from the first shopper",
          "Segment by answer for marketing that fits",
        ]}
        visual={
          <div className="w-full max-w-[340px] space-y-3">
            <EmailVignette className="max-w-none" />
            <InsightVignette className="ml-auto w-[88%]" />
          </div>
        }
      />

      <FeatureRow
        id="upsell"
        lead="Sell the set, not just the match."
        rest="Pair each match with what goes with it. Shoppers add everything in one tap, so the quiz lifts order value as well as conversion."
        points={[
          "Upsells and cross-sells on the results screen",
          "Routines and bundles built from your catalog",
          "Add all to cart in one tap",
          "See which products the quiz sells in Analytics",
        ]}
        visual={
          <div className="relative flex w-full max-w-[460px] items-center justify-center">
            <ResultsVignette className="max-w-[250px]" />
            <BundleVignette className="absolute -bottom-6 right-0 hidden w-[260px] sm:block" />
          </div>
        }
      />

      <section id="analytics" className="relative scroll-mt-28 overflow-hidden border-b border-white/10 bg-ink text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(60% 50% at 90% 0%, rgba(122,45,171,0.45), transparent 70%)" }}
        />
        <div className="frame frame-pad relative py-16 sm:border-white/10 sm:py-20 lg:py-24">
          <SplitHeading
            dark
            className="max-w-[820px] text-[1.625rem] font-medium leading-[1.14] tracking-[-0.026em] sm:text-[2rem]"
            lead="Analytics that tie answers to orders."
            rest="Overview, funnel, answers, products and leads. See where shoppers drop off, which answers buy, and the revenue the quiz brings in."
          />
          <Reveal variant="rise" className="mt-10 lg:mt-12">
            <AnalyticsMock />
          </Reveal>
        </div>
      </section>

      <FeatureRow
        id="try-on"
        tone="wash"
        flip
        lead="Let shoppers see it on themselves."
        rest="For beauty stores, add AI virtual try-on to the quiz. Shoppers see their match on their own photo, right next to Add to cart."
        points={[
          "An optional photo step that shoppers can always skip",
          "Try-on shown with their matches",
          "Makeup shades and skincare results over time",
          "Matches still work for shoppers who skip the photo",
        ]}
        visual={<TryOnVignette />}
      />

      <Section id="switching" className="scroll-mt-28">
        <div className="grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <SplitHeading
              className="text-[1.625rem] font-medium leading-[1.14] tracking-[-0.026em] sm:text-[2rem]"
              lead="Switching is part of setup."
              rest="Moving from another quiz app? Book a free expert setup and we'll rebuild your quiz on Gleame, mapped to your current catalog."
            />
            <div className="mt-8">
              <ButtonLink href="/contact" arrow>
                Get free expert setup
              </ButtonLink>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-[6px] border border-line bg-line">
            {competitors.map((c, i) => (
              <Reveal as="li" variant="fade" delay={i * 90} key={c} className="flex h-20 items-center justify-between bg-white px-5 text-[15px] font-medium">
                <span>{c}</span>
                <span className="font-mono text-[12px] text-muted" aria-hidden="true">
                  →
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
