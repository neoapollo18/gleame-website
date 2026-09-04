"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CTA } from "@/components/home/CTA";

const features = [
  {
    id: "quiz",
    title: "The Find My Fit Quiz",
    description:
      "A full-page quiz on your storefront — your domain, your theme, no iframe. Mobile-first, fast, and animated, with questions written in your brand's voice.",
    details: [
      "Playful answers as chips, image cards, and swatches",
      "Multi-select questions and conditional branching",
      "Optional, always-skippable selfie step for shade detection",
      "Ranked matches with \"why this matched\" reasons and add to cart",
      "Multi-product results — e.g. a 3-product routine with an accessory slot",
    ],
  },
  {
    id: "studio",
    title: "Quiz Studio",
    description:
      "A full-screen editor built for iterating fast. See your real storefront quiz update live as you edit — on mobile and desktop.",
    details: [
      "Slide tree with per-slide editors",
      "Live preview of the actual storefront quiz",
      "Theme editor: colors, radii, fonts, and weights",
      "Visual flow map of your branching logic",
      "AI chat copilot: \"make question 2 more playful\", \"add a budget question\"",
    ],
  },
  {
    id: "logic",
    title: "Catalog-Grounded Recommendations",
    description:
      "Write your recommendation logic in plain language — a few words per answer — and Gleame compiles it into the ranking rulebook the AI recommender follows at runtime.",
    details: [
      "An LLM ranker scores your real products against shopper answers",
      "Plain-language notes per answer, or AI-drafted from your catalog",
      "Optional hard rules for guaranteed answer-to-product mappings",
      "Only ever recommends products you actually sell",
      "Catalog stays in sync automatically via Shopify webhooks",
    ],
  },
  {
    id: "analytics",
    title: "Analytics & Revenue Attribution",
    description:
      "See exactly how the quiz performs — from first view to purchase — and the revenue it drives.",
    details: [
      "Full quiz funnel: views, starts, photo step, results, product clicks, add to cart",
      "Mobile vs desktop split",
      "Quiz sessions linked to actual orders via cart tracking",
      "Revenue attribution you can put in front of your CFO",
    ],
  },
  {
    id: "tryon",
    title: "\"See It On You\" Try-On Moments",
    description:
      "For beauty catalogs, AI selfie try-on lives inside the quiz results — shoppers don't just get told their match, they see it on themselves.",
    details: [
      "AI-generated try-on imagery in the results page",
      "Selfie shade detection sharpens matches",
      "Photo step is always skippable — answers alone still match well",
      "Product-page try-on widgets available for select brands",
    ],
  },
  {
    id: "publish",
    title: "Draft, Version, Publish",
    description:
      "Experiment freely. Everything edits a draft with version history, and nothing touches your live storefront until you hit Publish.",
    details: [
      "Draft workspace separate from the live quiz",
      "Version history for every change",
      "Pre-publish checklist catches broken branches and gaps",
      "One-click publish to your storefront",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-white" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary-100 blur-3xl opacity-50" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-primary-50 blur-3xl opacity-50" />
        </div>

        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-display-lg font-extrabold text-gray-900 mb-6"
            >
              Guided selling that{" "}
              <span className="gradient-text">knows your catalog</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg lg:text-xl text-gray-600 mb-8"
            >
              Everything you need to build a Find My Fit quiz that turns
              browsers into confident buyers — drafted by AI in about a minute,
              fine-tuned by you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link href="https://apps.shopify.com/gleame" className="btn btn-primary btn-lg">
                Start free trial
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Detail Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="space-y-24 lg:space-y-32">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    {feature.description}
                  </p>
                  <ul className="space-y-4">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-primary-100 to-primary-50 p-1">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 to-transparent" />
                    <div className="relative h-full rounded-[22px] bg-white/60 backdrop-blur-sm" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </>
  );
}
