"use client";

import { motion } from "framer-motion";
import { Download, Sliders, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Install the app",
    description:
      "Add Gleame to your Shopify store with one click. No coding or technical setup required.",
    visual: (
      <div className="bg-gray-900 rounded-xl p-4 w-full max-w-xs">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-3 text-white py-4">
            <span className="text-2xl">📦</span>
            <span className="font-medium">Installing Gleame...</span>
          </div>
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    icon: Sliders,
    title: "Customize & configure",
    description:
      "Match your brand with custom colors, fonts, and layouts. Set AI parameters for perfect results.",
    visual: (
      <div className="bg-white rounded-xl border border-gray-200 p-4 w-full max-w-xs shadow-lg">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Primary Color</span>
            <div className="w-8 h-8 rounded-lg bg-primary shadow-inner" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Button Style</span>
            <span className="text-sm font-medium text-gray-900 bg-gray-100 px-3 py-1 rounded-md">
              Rounded
            </span>
          </div>
          <div className="space-y-2">
            <span className="text-sm text-gray-600">AI Intensity</span>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-primary to-primary-light rounded-full" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Watch conversions grow",
    description:
      "See immediate results as shoppers gain confidence and complete their purchases.",
    visual: (
      <div className="bg-white rounded-xl border border-gray-200 p-4 w-full max-w-xs shadow-lg">
        <div className="flex items-end justify-between gap-2 h-32">
          {[40, 55, 45, 70, 85, 95].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${height}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`w-full rounded-t-md ${
                i === 5
                  ? "bg-gradient-to-t from-primary to-primary-light"
                  : "bg-gray-200"
              }`}
            />
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2 text-green-600">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-medium">Conversions ↑ 32%</span>
        </div>
      </div>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full text-xs font-medium tracking-wide uppercase mb-4"
          >
            How it works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-display-sm font-semibold text-gray-900 mb-4 tracking-tight"
          >
            Three steps to higher conversions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 font-light"
          >
            Get started in minutes, not days. Our streamlined process gets you
            live fast.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-full w-full h-0.5 bg-gradient-to-r from-primary-200 to-transparent -translate-x-1/2 z-0" />
              )}

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Step number */}
                <div className="w-16 h-16 rounded-2xl bg-white border-2 border-primary-200 flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-2xl font-bold gradient-text">
                    {step.number}
                  </span>
                </div>

                {/* Visual */}
                <div className="mb-6 flex justify-center">{step.visual}</div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 font-light text-[15px]">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
