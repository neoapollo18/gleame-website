"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const metrics = [
  { value: "2M+", label: "Try-ons generated" },
  { value: "500+", label: "Brands trust us" },
  { value: "32%", label: "Avg. CVR increase" },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 lg:p-12 border border-primary-100 mb-16"
          >
            {/* Quote icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg">
              <Quote className="w-6 h-6 text-white" />
            </div>

            <blockquote className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8 pt-4 font-light">
              &ldquo;Gleame transformed our online experience. Customers love being
              able to see how products will look on them before buying.{" "}
              <span className="text-primary font-medium">
                Our conversion rate increased by 41% in the first month.
              </span>
              &rdquo;
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-lg">
                SK
              </div>
              <div>
                <p className="font-semibold text-gray-900">Sarah Kim</p>
                <p className="text-gray-500">
                  Head of E-Commerce, Luminous Beauty
                </p>
              </div>
              <div className="ml-auto flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Trust Metrics */}
          <div className="grid sm:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl lg:text-5xl font-semibold gradient-text mb-2">
                  {metric.value}
                </p>
                <p className="text-gray-500 font-light">{metric.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-12 border-t border-gray-100"
          >
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">
                4.9 on Shopify
              </span>
            </div>
            <div className="w-px h-6 bg-gray-200" />
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-[#96BF47]"
                fill="currentColor"
              >
                <path d="M15.337 3.415c-.193-.016-.389.024-.553.128-.163.104-.282.261-.337.449l-1.13 3.882-3.964.011c-.2 0-.391.085-.527.233-.136.148-.203.347-.183.545.02.199.119.383.273.508l3.203 2.593-1.143 3.879c-.058.198-.03.41.078.585.107.175.28.298.475.34.195.041.398-.002.559-.12l3.255-2.39 3.254 2.39c.161.118.364.161.559.12.195-.042.368-.165.475-.34.108-.175.136-.387.078-.585l-1.143-3.879 3.203-2.593c.154-.125.253-.309.273-.508.02-.198-.047-.397-.183-.545-.136-.148-.327-.233-.527-.233l-3.964-.011-1.13-3.882c-.055-.188-.174-.345-.337-.449-.163-.104-.36-.144-.553-.128z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">
                Shopify Partner
              </span>
            </div>
            <div className="w-px h-6 bg-gray-200" />
            <div className="flex items-center gap-2">
              <span className="text-lg">🏆</span>
              <span className="text-sm font-medium text-gray-700">
                Top Rated Beauty App 2026
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
