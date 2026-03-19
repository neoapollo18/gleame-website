"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const stats = [
  {
    value: "+20%",
    label: "Lift in Conversion Rate",
  },
  {
    value: "+22%",
    label: "Revenue Per Visitor",
  },
  {
    value: "6,202",
    label: "Visitors Tested",
  },
];

const sections = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "solution", label: "Solution" },
  { id: "results", label: "Results" },
  { id: "takeaways", label: "Takeaways" },
];

export default function BioTechBeautyCaseStudy() {
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
                <Link href="https://biotechbeauty.com/" target="_blank" rel="noopener noreferrer" className="hover:underline decoration-white/30 underline-offset-4">BioTech Beauty</Link>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-300 font-light leading-relaxed mb-10"
              >
                BioTech Beauty achieved a 20% lift in conversion rate and a 22%
                increase in revenue per visitor after implementing Gleame across
                their skincare and makeup product pages. The test ran across
                6,202 visitors, confirming a meaningful performance lift.
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
                  src="/biotechbeautycasetstudyhero.png"
                  alt="BioTech Beauty products"
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
                    BioTech Beauty is a multi-category beauty brand offering both
                    skincare and color cosmetics. With a wide range of shades and
                    formulas, their catalog appeals to a broad audience &mdash; but
                    that breadth also created hesitation.
                  </p>
                  <p>
                    Shoppers browsing their PDP couldn&apos;t easily picture how a serum
                    would improve their skin over time, or whether a shade would
                    actually suit their complexion. BioTech Beauty needed a way to
                    make the product experience <strong className="text-gray-700 font-medium">personal and immediate</strong> without
                    slowing down the buying journey.
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
                    BioTech Beauty had strong PDP traffic but faced two distinct
                    conversion blockers across their product lines:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc marker:text-gray-300">
                    <li>
                      <strong className="text-gray-600 font-normal">Skincare:</strong> shoppers
                      couldn&apos;t visualize gradual results like reduced redness,
                      smoother texture, or improved hydration
                    </li>
                    <li>
                      <strong className="text-gray-600 font-normal">Makeup:</strong> customers
                      hesitated on shade selection &mdash; swatches alone weren&apos;t enough
                      to commit, especially for first-time buyers
                    </li>
                  </ul>
                  <p>
                    Static product imagery and generic before/afters weren&apos;t closing
                    the gap. <strong className="text-gray-700 font-medium">Shoppers needed to see themselves in the
                    product</strong> before they&apos;d buy.
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
                    BioTech Beauty implemented Gleame across both their skincare
                    and makeup PDPs, giving shoppers two types of AI-powered
                    previews:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc marker:text-gray-300">
                    <li>
                      Skincare results previews showing realistic improvements in
                      texture, tone, and clarity
                    </li>
                    <li>
                      Makeup shade try-ons letting shoppers see exactly how a color
                      looks on their face before purchasing
                    </li>
                    <li>
                      Both experiences were native to the PDP &mdash; no redirects,
                      no friction
                    </li>
                  </ul>
                  <p>
                    The implementation was seamless. No dev resources, no redesign.
                    Just a widget that made the product feel real before checkout.
                  </p>
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
                  <p>
                    Across 6,202 visitors, BioTech Beauty saw significant
                    improvements in both conversion and revenue:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc marker:text-gray-300">
                    <li>
                      <strong className="text-gray-700 font-medium">20% lift in conversion rate</strong> from
                      shoppers who engaged with the AI preview
                    </li>
                    <li>
                      <strong className="text-gray-700 font-medium">22% increase in revenue per visitor</strong> &mdash;
                      higher confidence led to larger carts and fewer abandoned sessions
                    </li>
                    <li>
                      Both skincare and makeup categories saw measurable improvement
                    </li>
                  </ul>
                </div>
              </motion.div>

              <hr className="border-gray-200 mb-14" />

              {/* Review */}
              <motion.div
                className="mb-14 border-l-4 border-primary pl-6 py-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 font-light leading-relaxed mb-3">
                  &ldquo;Such a helpful tool for showcasing before/afters on potential
                  customers! We&apos;ve implemented both skincare results and makeup
                  try-ons for a wide variety of shades, and the technology demonstrates
                  perfectly what our products will look like on our customers. The app
                  is incredibly easy to implement and the developers are super helpful
                  and responsive. Highly recommend!!&rdquo;
                </blockquote>
                <cite className="text-sm text-gray-400 not-italic font-medium">
                  &mdash; BioTech Beauty, Shopify App Store Review
                </cite>
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
                    BioTech Beauty proved that Gleame works across product
                    categories &mdash; not just skincare or just makeup, but both.
                    The common thread was the same: shoppers needed to see
                    themselves in the product before they&apos;d commit.
                  </p>
                  <p>
                    For skincare, the preview answered &ldquo;will this improve my
                    skin?&rdquo; For makeup, it answered &ldquo;will this shade suit
                    me?&rdquo; In both cases, Gleame replaced uncertainty with a
                    <strong className="text-gray-700 font-medium"> personalized, believable preview</strong> that moved
                    shoppers from browsing to buying.
                  </p>
                  <p>
                    A <strong className="text-gray-700 font-medium">20% conversion lift and 22% revenue increase</strong> across
                    6,202 visitors confirms that when shoppers can visualize their
                    outcome, they buy with confidence.
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
                  Join brands like BioTech Beauty and start converting more
                  shoppers with AI-powered try-on.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/contact"
                    className="btn btn-primary btn-lg"
                  >
                    Book Demo
                  </Link>
                  <Link
                    href="https://apps.shopify.com/gleame"
                    className="btn btn-secondary btn-lg"
                  >
                    Start free trial
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
