"use client";

import { motion } from "framer-motion";
import { PricingCards } from "@/components/pricing/PricingCards";
import { Accordion } from "@/components/ui/Accordion";
import { CTA } from "@/components/home/CTA";

const faqs = [
  {
    title: "How long does setup take?",
    content:
      "Most stores are up and running within 15 minutes. Simply install the app from the Shopify App Store, configure your first product, add a widget to your product page, customize the widget to match your brand, and you're ready to go. No coding or technical expertise required. Our setup wizard guides you through every step.",
  },
  {
    title: "Is customer photo data secure?",
    content:
      "Absolutely. Photos are processed in real-time and automatically deleted after the preview is generated. We never store customer images without explicit consent and are fully GDPR and CCPA compliant. Your customers' privacy is our top priority.",
  },
  {
    title: "Can I customize the widget appearance?",
    content:
      "Yes! Every aspect of the widget is customizable—fonts, colors, button styles, layouts, and more. Match your brand perfectly without any coding.",
  },
  {
    title: "What products work best with Gleame?",
    content:
      "Gleame works great for skincare (moisturizers, brightening serums), makeup (blush, bronzer, lipstick, mascara), and haircare products. Any beauty product where customers want to visualize the results before purchasing. Our AI adapts to different product categories automatically.",
  },
  {
    title: "Do you offer a free trial?",
    content:
      "Yes! All plans include a 14-day free trial with full access to features. No credit card required to start. Experience the power of AI virtual try-on risk-free. If you're not seeing results, you can cancel anytime during the trial period.",
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
              Start free, scale as you grow. No hidden fees.
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
