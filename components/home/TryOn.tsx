"use client";

import { motion } from "framer-motion";
import { Camera, ShieldCheck, Sparkles } from "lucide-react";

const points = [
  {
    icon: Camera,
    title: "Selfie shade detection",
    description:
      "An optional photo step reads undertones and skin tone to sharpen shade matches.",
  },
  {
    icon: Sparkles,
    title: "Try-on in the results",
    description:
      "Matched products appear tried on the shopper's own photo — a “see it on you” moment right where the buying decision happens.",
  },
  {
    icon: ShieldCheck,
    title: "Always skippable",
    description:
      "The photo step is never required. Shoppers who skip it still get great matches from their answers.",
  },
];

export function TryOn() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-gray-900 via-gray-900 to-primary-900 p-8 lg:p-14 overflow-hidden relative">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-white/10 text-primary-200 rounded-full text-xs font-medium tracking-wide uppercase mb-4"
            >
              The wow moment
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-semibold text-white mb-4 tracking-tight max-w-xl"
            >
              “See it on you” moments, inside the quiz
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-white/60 font-light mb-10 max-w-2xl"
            >
              For beauty catalogs, Gleame adds AI selfie try-on to the quiz
              journey — so shoppers don&apos;t just get told their match, they
              see it.
            </motion.p>

            <div className="grid sm:grid-cols-3 gap-6 lg:gap-10">
              {points.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                    <point.icon className="w-5 h-5 text-primary-200" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{point.title}</h3>
                  <p className="text-white/50 text-sm font-light leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
