"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Such a helpful tool for showcasing before/afters on potential customers! We've implemented both skincare results and makeup try-ons for a wide variety of shades, and the technology demonstrates perfectly what our products will look like on our customers—both immediately and over time. The app is incredibly easy to implement and the developers are super helpful and responsive. Highly recommend!!",
    highlight:
      "the technology demonstrates perfectly what our products will look like on our customers—both immediately and over time.",
    brand: "BiotechBeauty",
    detail: "United States \u2022 3 months using the app",
  },
  {
    quote:
      "Amazing add-on feature. This has helped increase sales revenue for our brand by using the \u201Cart of the possible\u201D. Seamlessly installed and developed by and amazing team that wants to help make sure everything is working efficiently to help scale your business. Definitely have our buy-in!",
    highlight:
      "This has helped increase sales revenue for our brand",
    brand: "Wett Skincare",
    detail: "United States \u2022 4 months using the app",
  },
  {
    quote:
      "Great app. Made a huge difference in our conversion rates. Amazing support as well. Worth every penny for our store.",
    highlight:
      "Made a huge difference in our conversion rates.",
    brand: "Haven",
    detail: "United States \u2022 3 months using the app",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const renderQuote = (t: typeof testimonials[number]) => {
    const highlightIndex = t.quote.indexOf(t.highlight);
    const before = highlightIndex >= 0 ? t.quote.slice(0, highlightIndex) : t.quote;
    const after =
      highlightIndex >= 0 ? t.quote.slice(highlightIndex + t.highlight.length) : "";
    return (
      <>
        &ldquo;{before}
        {highlightIndex >= 0 && (
          <span className="text-primary font-medium">{t.highlight}</span>
        )}
        {after}&rdquo;
      </>
    );
  };

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial with side arrows */}
          <div className="relative flex items-center gap-4">
            {/* Left arrow */}
            <button
              onClick={prev}
              className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-300 transition-colors shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Card */}
            <div className="relative flex-1 bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 lg:p-12 border border-primary-100">
              {/* Quote icon */}
              <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Render all testimonials stacked; only active is visible. Tallest sets height. */}
              <div className="relative">
                {testimonials.map((t, index) => (
                  <div
                    key={t.brand}
                    className={index === current ? "relative" : "invisible absolute inset-0"}
                    aria-hidden={index !== current}
                  >
                    <motion.div
                      initial={false}
                      animate={{ opacity: index === current ? 1 : 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <blockquote className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8 pt-4 font-light">
                        {renderQuote(t)}
                      </blockquote>
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="font-semibold text-gray-900">{t.brand}</p>
                          <p className="text-gray-500 text-sm">{t.detail}</p>
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
                  </div>
                ))}
              </div>
            </div>

            {/* Right arrow */}
            <button
              onClick={next}
              className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-300 transition-colors shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
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
                5.0 on Shopify
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
