"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const useCases = [
  {
    title: "Skincare",
    subtitle: "Anti-aging & Treatments",
    description:
      "Show customers the potential results of serums, creams, and treatments over time.",
    gradient: "from-pink-400 to-rose-500",
    bgGradient: "from-pink-50 to-rose-50",
  },
  {
    title: "Makeup",
    subtitle: "Foundation & Lip Colors",
    description:
      "Let shoppers find their perfect shade match with realistic virtual try-on.",
    gradient: "from-primary-400 to-primary-600",
    bgGradient: "from-primary-50 to-violet-50",
  },
  {
    title: "Haircare",
    subtitle: "Hair Color & Treatments",
    description:
      "Visualize hair color changes and treatment results before committing.",
    gradient: "from-amber-400 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50",
  },
];

export function UseCases() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full text-xs font-medium tracking-wide uppercase mb-4"
          >
            Use Cases
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-display-sm font-semibold text-gray-900 mb-4 tracking-tight"
          >
            Perfect for every beauty category
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 font-light"
          >
            From skincare to makeup, Gleame adapts to your products
          </motion.p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div
                className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${useCase.bgGradient} p-6 lg:p-8 border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                {/* Decorative gradient blob */}
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${useCase.gradient} opacity-20 blur-2xl group-hover:opacity-30 transition-opacity`}
                />

                {/* Badge */}
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${useCase.gradient} mb-6`}
                >
                  {useCase.title}
                </span>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {useCase.subtitle}
                </h3>
                <p className="text-gray-500 mb-6 font-light text-[15px]">{useCase.description}</p>

                <Link
                  href="/features"
                  className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
