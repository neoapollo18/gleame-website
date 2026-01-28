"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CTA } from "@/components/home/CTA";

const features = [
  {
    id: "ai-previews",
    title: "AI Before & After Previews",
    description:
      "Generate photorealistic visualizations showing customers exactly how they'll look after using your products.",
    details: [
      "Advanced AI trained on millions of beauty transformations",
      "Instant preview generation in under 2 seconds",
      "Support for skincare, makeup, and haircare products",
      "Adjustable transformation intensity per product",
      "Natural-looking results that build customer confidence",
    ],
  },
  {
    id: "templates",
    title: "Customizable Templates",
    description:
      "Choose from high-converting templates and customize every aspect to match your brand perfectly.",
    details: [
      "Pre-built templates optimized for conversions",
      "Full customization of colors, fonts, and layouts",
      "Mobile-responsive designs out of the box",
      "A/B testing support for optimization",
      "No coding required for any customization",
    ],
  },
  {
    id: "privacy",
    title: "Privacy-First Design",
    description:
      "Customer photos are processed securely and never stored without consent. Enterprise-grade security built in.",
    details: [
      "Photos processed in real-time, not stored",
      "Full GDPR and CCPA compliance",
      "SOC 2 Type II certified infrastructure",
      "Optional consent collection features",
      "Complete data deletion on request",
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
              Powerful tools to{" "}
              <span className="gradient-text">transform</span> your store
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg lg:text-xl text-gray-600 mb-8"
            >
              Everything you need to give customers confidence and boost
              conversions with AI-powered virtual try-on.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link href="https://apps.shopify.com/glimpse-app?search_id=0a3368ea-475d-43f7-9c29-34c4325d4bd7&surface_detail=gleame&surface_inter_position=1&surface_intra_position=5&surface_type=search" className="btn btn-primary btn-lg">
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
