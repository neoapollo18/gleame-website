"use client";

import { motion } from "framer-motion";

const brands = [
  "Glossier",
  "Fenty Beauty",
  "The Ordinary",
  "Charlotte Tilbury",
  "Drunk Elephant",
  "Tatcha",
];

export function LogoCloud() {
  return (
    <section className="py-16 bg-gray-50/50 border-y border-gray-100">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-medium text-gray-400 mb-8 uppercase tracking-wider"
        >
          Trusted by leading beauty brands
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
        >
          {brands.map((brand, index) => (
            <motion.span
              key={brand}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="text-lg font-medium text-gray-300 hover:text-gray-400 transition-colors cursor-default tracking-tight"
            >
              {brand}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
