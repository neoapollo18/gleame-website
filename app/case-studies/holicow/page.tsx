"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const stats = [
  {
    value: "3% → 6%",
    label: "Conversion Rate",
  },
  {
    value: "16%",
    label: "Add-to-Cart Rate",
  },
  {
    value: "8,000+",
    label: "Visitors in Control Group",
  },
];

const sections = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "solution", label: "Solution" },
  { id: "results", label: "Results" },
  { id: "takeaways", label: "Takeaways" },
];

export default function HoliCowCaseStudy() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px]" />
        </div>

        <div className="container relative pt-8 pb-16 lg:pt-10 lg:pb-24">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/#case-studies"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Case Studies
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-display-lg font-semibold text-white mb-6 tracking-tight"
              >
                HoliCow
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-300 font-light leading-relaxed mb-10"
              >
                HoliCow doubled their conversion rate from 3% to 6% after
                implementing Gleame on their product page. With over 8,000
                visitors in the control group, the results were validated
                directly by the founder.
              </motion.p>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid grid-cols-3 gap-3"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-4 lg:p-5"
                  >
                    <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs lg:text-sm text-gray-400 font-light leading-snug">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/holicow-hero-ku12d_yK.png"
                  alt="HoliCow Tallow Balm product"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-[180px_1fr] gap-12 lg:gap-16 max-w-5xl mx-auto">
            {/* Sticky sidebar nav */}
            <nav className="hidden lg:block">
              <div className="sticky top-28">
                <ul className="space-y-2 border-l border-gray-200">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="block pl-4 py-1 text-sm text-gray-400 hover:text-gray-900 transition-colors border-l-2 border-transparent hover:border-primary -ml-px"
                      >
                        {section.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            {/* Main content */}
            <article className="max-w-none">
              {/* Overview */}
              <motion.div
                id="overview"
                className="mb-14"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                  Overview
                </h2>
                <div className="space-y-4 text-gray-500 font-light leading-relaxed text-[16px]">
                  <p>
                    HoliCow is a beef-tallow-based skincare brand focused on
                    restoring the skin&apos;s natural barrier using simple, ancestral
                    ingredients. Their products have strong demand among customers
                    dealing with redness, dryness, acne irritation, and sensitivity.
                  </p>
                  <p>
                    But despite strong traffic and product-market fit, many shoppers
                    still couldn&apos;t picture how tallow would actually improve their
                    skin &mdash; <strong className="text-gray-700 font-medium">keeping conversion stuck near ~3%</strong>. With Gleame,
                    HoliCow turned those abstract benefits into a personalized,
                    visual &ldquo;future skin&rdquo; moment that doubled their conversion rate.
                  </p>
                </div>
              </motion.div>

              <hr className="border-gray-200 mb-14" />

              {/* Challenge */}
              <motion.div
                id="challenge"
                className="mb-14"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                  Challenge
                </h2>
                <div className="space-y-4 text-gray-500 font-light leading-relaxed text-[16px]">
                  <p>
                    HoliCow had strong traffic, but shoppers hesitated at the final
                    step because <strong className="text-gray-700 font-medium">they couldn&apos;t visualize their results</strong> &mdash;
                    keeping PDP conversion stuck around ~3%.
                  </p>
                  <p>Key hesitation patterns:</p>
                  <ul className="space-y-2 pl-5 list-disc marker:text-gray-300">
                    <li>
                      <strong className="text-gray-600 font-normal">Moms:</strong> &ldquo;Will this actually soften my wrinkles?&rdquo;
                    </li>
                    <li>
                      <strong className="text-gray-600 font-normal">Teens / acne-prone:</strong> &ldquo;Will this calm my acne or make it worse?&rdquo;
                    </li>
                    <li>
                      <strong className="text-gray-600 font-normal">Everyone:</strong> &ldquo;Will this actually work for my skin?&rdquo;
                    </li>
                  </ul>
                  <p>
                    The problem wasn&apos;t traffic or product. <strong className="text-gray-700 font-medium">It was proof.</strong>
                  </p>
                </div>
              </motion.div>

              <hr className="border-gray-200 mb-14" />

              {/* Solution */}
              <motion.div
                id="solution"
                className="mb-14"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                  Solution
                </h2>
                <div className="space-y-4 text-gray-500 font-light leading-relaxed text-[16px]">
                  <p>
                    HoliCow placed Gleame AI Preview directly on their PDP.
                    Customers experienced:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc marker:text-gray-300">
                    <li>
                      Upload a selfie &rarr; instantly meet their &ldquo;future self&rdquo;
                    </li>
                    <li>Reduced redness</li>
                    <li>Softer fine lines</li>
                    <li>Hydrated, glassier skin</li>
                    <li>Smoother texture / fewer blemishes</li>
                  </ul>
                  <p>
                    Zero face reshaping or unrealistic filters. Results aligned
                    with actual tallow benefits.
                  </p>
                  <motion.div
                    className="mt-6 rounded-xl overflow-hidden shadow-lg ring-1 ring-gray-900/5 max-w-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <Image
                      src="/holicow-widget-AtWj2XAU.png"
                      alt="HoliCow Gleame widget showing before/after tallow transformation"
                      width={576}
                      height={384}
                      className="w-full h-auto"
                    />
                  </motion.div>
                </div>
              </motion.div>

              <hr className="border-gray-200 mb-14" />

              {/* Results */}
              <motion.div
                id="results"
                className="mb-14"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                  Results
                </h2>
                <div className="space-y-4 text-gray-500 font-light leading-relaxed text-[16px]">
                  <ul className="space-y-2 pl-5 list-disc marker:text-gray-300">
                    <li>
                      <strong className="text-gray-700 font-medium">Conversion rate doubled</strong> from 3% to 6%
                    </li>
                    <li>
                      Add-to-cart engagement was strong, with a <strong className="text-gray-700 font-medium">16% ATC rate</strong> among
                      shoppers interacting with the PDP
                    </li>
                    <li>Increased PDP engagement time</li>
                    <li>Fewer education-related support questions</li>
                    <li>Impact validated directly by the founder</li>
                  </ul>
                </div>
              </motion.div>

              <hr className="border-gray-200 mb-14" />

              {/* Takeaways */}
              <motion.div
                id="takeaways"
                className="mb-14"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                  Takeaways
                </h2>
                <div className="space-y-4 text-gray-500 font-light leading-relaxed text-[16px]">
                  <p>
                    Barrier-repair skincare sells transformation, but shoppers
                    often struggle to visualize results &mdash; especially when
                    benefits develop gradually. Gleame solved this instantly.
                  </p>
                  <p>
                    By showing each shopper a believable, non-exaggerated version
                    of healthier skin &mdash; softer lines, reduced redness, smoother
                    texture &mdash; Gleame eliminated uncertainty at the exact point
                    of hesitation. The preview looked real, aligned with tallow&apos;s
                    actual outcomes, and set the right expectation.
                  </p>
                  <p>
                    That clarity is what drove a <strong className="text-gray-700 font-medium">sustained 2&times; lift in
                    conversion</strong>.
                  </p>
                </div>
              </motion.div>

              <hr className="border-gray-200 mb-14" />

              {/* CTA */}
              <motion.div
                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 lg:p-10 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Ready to see similar results?
                </h3>
                <p className="text-gray-500 font-light mb-6 max-w-md mx-auto">
                  Join brands like HoliCow and start converting more shoppers
                  with AI-powered try-on.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="https://apps.shopify.com/glimpse-app?search_id=0a3368ea-475d-43f7-9c29-34c4325d4bd7&surface_detail=gleame&surface_inter_position=1&surface_intra_position=5&surface_type=search"
                    className="btn btn-primary btn-lg"
                  >
                    Start free trial
                  </Link>
                  <Link
                    href="https://calendly.com/aaron-gleame/gleame-discovery-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-lg"
                  >
                    Book Demo
                  </Link>
                </div>
              </motion.div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
