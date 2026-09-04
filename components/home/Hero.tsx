"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Star } from "lucide-react";

const chips = [
  { label: "🎉 Party night", selected: true },
  { label: "💼 Office polish", selected: false },
  { label: "💍 Big event", selected: false },
  { label: "🏖️ Vacation mode", selected: false },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary-100 to-primary-200 blur-3xl opacity-60" />
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary-50 to-primary-100 blur-3xl opacity-50" />
        <div className="absolute -bottom-20 right-1/3 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-coral/10 to-coral/20 blur-3xl opacity-40" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-180px)] py-16 lg:py-24">
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-coral font-medium italic tracking-widest uppercase text-xs mb-4">
                Quiz-First Guided Selling for Shopify
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-display-lg font-semibold text-gray-900 mb-6 tracking-tight"
            >
              A Find My Fit quiz,{" "}
              <span className="gradient-text">built from your catalog</span> in
              a minute
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-500 mb-8 leading-relaxed font-light"
            >
              Shoppers answer a few fun, on-brand questions and get matched to
              the right products from your actual catalog. Turn browsers into
              confident buyers — and cut returns from wrong picks, shades, and
              sizes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Link href="/contact" className="btn btn-primary btn-lg group">
                Book Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="https://apps.shopify.com/gleame"
                className="btn btn-ghost btn-lg group"
              >
                Start free trial
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
                <span className="ml-2 text-sm font-medium text-gray-600">
                  5.0/5
                </span>
              </div>
              <div className="hidden sm:block w-px h-5 bg-gray-200" />
              <p className="text-sm text-gray-500">
                Powering quizzes for ORLY, Locks &amp; Mane, and more
              </p>
            </motion.div>
          </div>

          {/* Right Visual - Quiz phone mockup with floating results card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end lg:pr-16"
          >
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-[300px] sm:w-[330px] rounded-[2.5rem] bg-gray-900 p-2.5 shadow-2xl">
                <div className="rounded-[2rem] bg-white overflow-hidden">
                  {/* Storefront header */}
                  <div className="px-5 pt-5 pb-3 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-900">
                        Your Store
                      </span>
                      <span className="text-[10px] text-gray-400">
                        Find My Fit
                      </span>
                    </div>
                  </div>

                  {/* Quiz content */}
                  <div className="px-5 py-6">
                    {/* Progress */}
                    <div className="flex items-center gap-1.5 mb-5">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className={`h-1 flex-1 rounded-full ${
                            i < 2 ? "bg-primary" : "bg-gray-100"
                          }`}
                        />
                      ))}
                    </div>

                    <p className="text-[10px] font-medium uppercase tracking-widest text-primary mb-2">
                      Question 2 of 5
                    </p>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-snug">
                      Where are your nails headed this week?
                    </h3>

                    <div className="grid grid-cols-2 gap-2.5 mb-5">
                      {chips.map((chip) => (
                        <div
                          key={chip.label}
                          className={`rounded-xl px-3 py-3 text-[13px] font-medium text-center border ${
                            chip.selected
                              ? "bg-primary-50 border-primary text-primary-700"
                              : "bg-white border-gray-200 text-gray-600"
                          }`}
                        >
                          {chip.label}
                        </div>
                      ))}
                    </div>

                    <div className="rounded-xl bg-primary text-white text-center text-sm font-medium py-3">
                      Next
                    </div>
                    <p className="text-center text-[11px] text-gray-400 mt-3">
                      Takes under a minute ✨
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating results card */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:block absolute -left-36 bottom-16 w-[210px] rounded-2xl bg-white shadow-xl ring-1 ring-gray-900/5 p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                    Your match
                  </span>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 rounded-full px-2 py-0.5">
                    98% fit
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-300 via-fuchsia-300 to-primary-300" />
                  <div>
                    <p className="text-[13px] font-semibold text-gray-900 leading-tight">
                      Chrome Party Gel
                    </p>
                    <p className="text-[11px] text-gray-400">Shade 014</p>
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 leading-snug mb-3">
                  Matched because you picked party night and bold finishes.
                </p>
                <div className="rounded-lg bg-gray-900 text-white text-[11px] font-medium text-center py-2">
                  Add to cart
                </div>
              </motion.div>

              {/* Floating try-on chip */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:flex absolute -right-14 top-14 rounded-full bg-white shadow-lg ring-1 ring-gray-900/5 px-4 py-2.5 items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-[12px] font-medium text-gray-700">
                  See it on you
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
