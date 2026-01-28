"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Acne & Redness",
    description: "Show customers how skincare products can reduce redness and clear blemishes over time.",
    color: "bg-red-800",
    bgGradient: "from-red-50 to-rose-50",
  },
  {
    name: "Blush",
    description: "Let shoppers preview different blush shades and find their perfect flush of color.",
    color: "bg-pink-600",
    bgGradient: "from-pink-50 to-rose-50",
  },
  {
    name: "Brightening & Tone Boost",
    description: "Visualize how brightening serums and treatments can even out skin tone.",
    color: "bg-amber-500",
    bgGradient: "from-amber-50 to-yellow-50",
  },
  {
    name: "Bronzer",
    description: "Preview sun-kissed glow with different bronzer shades before purchase.",
    color: "bg-orange-700",
    bgGradient: "from-orange-50 to-amber-50",
  },
  {
    name: "Eyebrow",
    description: "Show customers how brow products can shape and define their look.",
    color: "bg-violet-800",
    bgGradient: "from-violet-50 to-purple-50",
  },
  {
    name: "Mascara",
    description: "Preview lash-enhancing looks with different mascara styles and volumes.",
    color: "bg-gray-800",
    bgGradient: "from-gray-50 to-slate-50",
  },
  {
    name: "Highlighter",
    description: "Let customers see how highlighters add radiance and dimension to their features.",
    color: "bg-yellow-500",
    bgGradient: "from-yellow-50 to-amber-50",
  },
  {
    name: "Lip Gloss",
    description: "Preview glossy lip looks with various shades and finishes.",
    color: "bg-pink-500",
    bgGradient: "from-pink-50 to-fuchsia-50",
  },
  {
    name: "Lip Hydration",
    description: "Show the moisturizing effects of lip balms and treatments.",
    color: "bg-rose-500",
    bgGradient: "from-rose-50 to-pink-50",
  },
  {
    name: "Lip Color",
    description: "Help shoppers find their perfect lipstick shade with virtual try-on.",
    color: "bg-red-600",
    bgGradient: "from-red-50 to-rose-50",
  },
  {
    name: "Skin Refinement",
    description: "Demonstrate how pore-minimizing and texture-smoothing products improve skin appearance.",
    color: "bg-cyan-600",
    bgGradient: "from-cyan-50 to-sky-50",
  },
  {
    name: "Hair Health",
    description: "Visualize hair treatment results and color changes before committing.",
    color: "bg-emerald-600",
    bgGradient: "from-emerald-50 to-green-50",
  },
];

export function UseCases() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleCategories = categories.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

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

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards */}
          <div className="overflow-hidden px-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {visibleCategories.map((category) => (
                  <div
                    key={category.name}
                    className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${category.bgGradient} p-6 lg:p-8 border border-gray-100 min-h-[180px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                  >
                    {/* Decorative gradient blob */}
                    <div
                      className={`absolute -top-20 -right-20 w-40 h-40 rounded-full ${category.color} opacity-20 blur-2xl`}
                    />

                    {/* Badge */}
                    <span
                      className={`relative z-10 inline-block px-3 py-1 rounded-full text-sm font-medium text-white ${category.color} mb-4`}
                    >
                      {category.name}
                    </span>

                    {/* Content */}
                    <p className="relative z-10 text-gray-600 font-light text-[15px] leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
