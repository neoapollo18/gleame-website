"use client";

import { motion } from "framer-motion";
import { PricingCards } from "@/components/pricing/PricingCards";
import { Accordion } from "@/components/ui/Accordion";
import { CTA } from "@/components/home/CTA";

const faqs = [
  {
    title: "How long does it take to launch a quiz?",
    content:
      "About a minute for the first draft. The onboarding wizard syncs your Shopify catalog, asks for your category, brand voice, and accent color, and AI drafts the whole quiz — questions, answers, copy, styling, and recommendation logic. Most merchants fine-tune in Quiz Studio and publish the same day. No coding required.",
  },
  {
    title: "How does pricing work?",
    content:
      "Pricing follows your store's traffic with one approval. Free under 2,500 monthly store sessions, $30/mo from 2.5k to 5k, $149/mo from 5k to 25k, and $399/mo above 25k — never more than $399. The charge moves up when you grow and down when you slow, automatically. Everything is billed through Shopify.",
  },
  {
    title: "Will it ever recommend products I don't sell?",
    content:
      "No. Gleame is catalog-grounded: the AI recommender only ranks products from your synced Shopify catalog, following the recommendation logic you write in plain language (or let AI draft). You can add hard rules for guaranteed mappings, and your catalog stays in sync automatically via webhooks.",
  },
  {
    title: "Can I make the quiz match my brand?",
    content:
      "Yes. The quiz is a full-page section on your own domain and theme — no iframe. In Quiz Studio you control colors, radii, fonts, and weights, edit every slide, and shape the flow with conditional branching. Or ask the AI copilot to make the edits for you.",
  },
  {
    title: "Is the shopper photo step required? Is it secure?",
    content:
      "The selfie step is optional and always skippable — shoppers who skip it still get great matches from their answers. Photos are processed securely for shade detection and try-on imagery, never stored without consent, and we're GDPR and CCPA compliant.",
  },
  {
    title: "Do you offer a free trial?",
    content:
      "Yes! Every plan includes a 14-day free trial with full access, and stores under 2,500 monthly sessions stay free after that. Nothing touches your live storefront until you hit Publish, so you can build and preview risk-free.",
  },
];

export default function PricingPage() {
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
              Simple, transparent{" "}
              <span className="gradient-text">pricing</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg lg:text-xl text-gray-600"
            >
              One approval, traffic-based tiers. Free under 2,500 sessions —
              and never more than $399/mo.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-8 lg:py-6">
        <div className="container">
          <PricingCards />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-4">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Frequently asked questions
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about Gleame
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8"
            >
              <Accordion items={faqs} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </>
  );
}
