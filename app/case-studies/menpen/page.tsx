"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const stats = [
  {
    value: "+13%",
    label: "Conversion Rate",
    sublabel: "Validated across 8,343 visitors",
  },
  {
    value: "+9%",
    label: "Revenue Per Visitor",
    sublabel: null,
  },
  {
    value: "+174",
    label: "Orders/Month",
    sublabel: null,
  },
];

const sections = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "solution", label: "Solution" },
  { id: "results", label: "Results" },
  { id: "takeaways", label: "Takeaways" },
];

export default function MenPenCaseStudy() {
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
                <Link href="https://themenpens.com/" target="_blank" rel="noopener noreferrer" className="hover:underline decoration-white/30 underline-offset-4">Men Pen</Link>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-300 font-light leading-relaxed mb-10"
              >
                MenPen achieved a 13% increase in conversion rate and a 9% lift
                in revenue per visitor after implementing Gleame. The test ran
                for 10 days across 8,343 visitors and 364 orders, confirming a
                statistically meaningful performance lift.
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
                  src="/menpencasestudy.png"
                  alt="MenPen product lineup"
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
                <p className="text-gray-500 font-light leading-relaxed text-[16px]">
                  MenPen is a fast-growing men&apos;s grooming brand known for its
                  viral eyebrow-filler pen. With strong TikTok traffic and
                  rapidly scaling DTC growth, MenPen needed a way to increase
                  first-time buyer confidence and reduce hesitation on their PDP.
                  Visitors liked the idea &mdash; but they couldn&apos;t visualize
                  whether the shade, density, or finish would actually look
                  natural on them.
                </p>
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
                    MenPen&apos;s product page had high traffic but conversion was
                    bottlenecked by uncertainty. Shoppers were curious but
                    hesitant &mdash; they didn&apos;t know how the pen would look on
                    their specific brows. Would it look natural? Would the shade
                    match? Would the result be too strong or too subtle?
                  </p>
                  <p>
                    This uncertainty created a bottleneck: shoppers believed the
                    product worked, but <strong className="text-gray-700 font-medium">they couldn&apos;t trust it would work
                    for their specific face</strong>.
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
                    MenPen implemented Gleame directly into their PDP, giving
                    shoppers a fast, realistic, and shade-accurate preview of how
                    the Men Pen would look on their own brows.
                  </p>
                  <p>This instantly removed hesitation:</p>
                  <div className="flex gap-8 items-start">
                    <div className="flex-1 space-y-4">
                      <ul className="space-y-2 pl-5 list-disc marker:text-gray-300">
                        <li>
                          Visitors uploaded a selfie and saw fuller, cleaner brows
                          in seconds
                        </li>
                        <li>
                          They compared shades and visualized the finishing effect
                        </li>
                        <li>
                          They gained confidence that the results would match their
                          expectations
                        </li>
                      </ul>
                      <p>
                        No friction. No instructions. Just a native-feeling PDP
                        enhancement that clarified the value instantly.
                      </p>
                    </div>
                    <div className="hidden md:block flex-shrink-0 w-[280px] rounded-xl overflow-hidden shadow-lg ring-1 ring-gray-900/5">
                      <Image
                        src="/menpen-widget-BFOXhBJM.png"
                        alt="MenPen Gleame widget showing before and after preview"
                        width={280}
                        height={360}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
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
                <p className="text-gray-500 font-light leading-relaxed text-[16px] mb-6">
                  Over a 10-day controlled test (8,343 visitors, 364 orders),
                  Gleame delivered a <strong className="text-gray-700 font-medium">13.22% lift in conversion rate</strong> and a <strong className="text-gray-700 font-medium">9.17%
                  lift in revenue per visitor</strong>. These improvements were validated
                  using Intelligems and project meaningful monthly incremental
                  revenue for MenPen.
                </p>
                <div className="rounded-xl overflow-hidden shadow-lg ring-1 ring-gray-900/5 max-w-xl">
                  <Image
                    src="/menpen-intelligems-Dod4iKZE.png"
                    alt="Intelligems results showing CVR, RPV, and AOV metrics for MenPen"
                    width={576}
                    height={384}
                    className="w-full h-auto"
                  />
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
                    MenPen shoppers weren&apos;t skeptical of the product &mdash; they
                    were skeptical of how the results would look on{" "}
                    <em>them</em>. That uncertainty suppressed conversion,
                    especially from cold traffic and first-time buyers.
                  </p>
                  <p>
                    Gleame eliminated this friction in less than a second.
                    Shoppers uploaded a selfie and immediately understood the
                    value: cleaner, sharper brows that still looked natural. The
                    transformation didn&apos;t feel exaggerated &mdash; it felt
                    believable.
                  </p>
                  <p>
                    That <strong className="text-gray-700 font-medium">&ldquo;Oh &mdash; this actually looks good on me&rdquo;</strong> moment was
                    the unlock. With hesitation removed, Gleame helped unlock a
                    <strong className="text-gray-700 font-medium"> 13% conversion lift</strong> validated by testing, RPV increased, and
                    MenPen generated <strong className="text-gray-700 font-medium">hundreds of incremental orders each month</strong>{" "}
                    from the same traffic.
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
                  Join brands like MenPen and start converting more shoppers
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
