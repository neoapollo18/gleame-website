"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    title: "AI Before & After Previews",
    description:
      "Generate photorealistic visualizations showing customers exactly how they'll look after using your products. Powered by advanced AI trained on beauty transformations.",
  },
  {
    title: "Customizable Templates",
    description:
      "Choose from high-converting templates and customize every aspect to match your brand. Adjust fonts, colors, layouts, and more with no coding required.",
  },
  {
    title: "Privacy-First Design",
    description:
      "Customer photos are processed securely and never stored without consent. Full GDPR compliance and enterprise-grade security built in.",
  },
];

export function Features() {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-display-sm font-semibold text-gray-900 mb-4 tracking-tight"
          >
            Everything you need to boost confidence & conversions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 font-light"
          >
            Powerful AI visualization tools designed specifically for beauty and
            cosmetics brands
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group p-6 lg:p-8 rounded-2xl border border-gray-200 bg-white hover:border-primary-200 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 mb-4 leading-relaxed font-light text-[15px]">
                {feature.description}
              </p>
              <Link
                href="/features"
                className="inline-flex items-center text-primary font-medium hover:text-primary-hover transition-colors"
              >
                Learn more
                <span className="ml-1 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
