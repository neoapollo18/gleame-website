"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "Nail Care",
    example: "“Where are your nails headed this week?”",
    description:
      "Match shoppers to shades, finishes, and gel systems by occasion, skin tone, and vibe — with selfie shade detection as a wow moment.",
    color: "bg-rose-500",
    bgGradient: "from-rose-50 to-pink-50",
  },
  {
    name: "Hair Extensions",
    example: "“How much length are we adding?”",
    description:
      "Guide shoppers through length, texture, weight, and color matching — the picks where a wrong guess means an expensive return.",
    color: "bg-amber-600",
    bgGradient: "from-amber-50 to-orange-50",
  },
  {
    name: "Cosmetics",
    example: "“What finish makes you feel most you?”",
    description:
      "Shade-match foundation, lips, and cheeks from your real catalog, then let shoppers see products tried on in their results.",
    color: "bg-fuchsia-600",
    bgGradient: "from-fuchsia-50 to-purple-50",
  },
  {
    name: "Skincare",
    example: "“How does your skin feel by noon?”",
    description:
      "Build multi-product routines from concerns, skin type, and budget — a 3-step routine with an accessory slot, matched with reasons.",
    color: "bg-emerald-600",
    bgGradient: "from-emerald-50 to-teal-50",
  },
];

export function UseCases() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full text-xs font-medium tracking-wide uppercase mb-4"
          >
            Categories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-display-sm font-semibold text-gray-900 mb-4 tracking-tight"
          >
            Built for stores with too many good options
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 font-light"
          >
            When your catalog has dozens of shades, lengths, and finishes,
            shoppers freeze. Gleame turns the choice into a conversation.
          </motion.p>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${category.bgGradient} p-6 lg:p-8 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              {/* Decorative gradient blob */}
              <div
                className={`absolute -top-20 -right-20 w-40 h-40 rounded-full ${category.color} opacity-20 blur-2xl`}
              />

              <span
                className={`relative z-10 inline-block px-3 py-1 rounded-full text-sm font-medium text-white ${category.color} mb-4`}
              >
                {category.name}
              </span>

              <p className="relative z-10 text-gray-800 font-medium text-[15px] mb-2 italic">
                {category.example}
              </p>
              <p className="relative z-10 text-gray-600 font-light text-[15px] leading-relaxed">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
