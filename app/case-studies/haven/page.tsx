"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const stats = [
  {
    value: "+106%",
    label: "Lift in Conversion Rate",
  },
  {
    value: "+111%",
    label: "Revenue Per Visitor",
  },
  {
    value: "+120%",
    label: "Profit Per Visitor",
  },
];

const sections = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "solution", label: "Solution" },
  { id: "results", label: "Results" },
  { id: "takeaways", label: "Takeaways" },
];

export default function HavenCaseStudy() {
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
                Haven
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-300 font-light leading-relaxed mb-10"
              >
                Haven achieved a 106% lift in conversion rate, 111% lift in
                revenue per visitor, and 120% lift in profit per visitor after
                implementing Gleame on their product page.
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
                  src="/havencasestudy.png"
                  alt="Haven skincare products"
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
                    Haven is a fast-growing skincare brand specializing in
                    barrier-supporting serums and moisturizers. Their customers
                    weren&apos;t short on interest &mdash; but they were short on proof.
                  </p>
                  <p>
                    Skincare buyers wanted to know: &ldquo;Will this actually work on my
                    skin?&rdquo; Generic before/afters and typical PDP content weren&apos;t
                    answering that question clearly enough.
                  </p>
                  <p>
                    Haven needed a way to show believable, personalized outcomes
                    without redesigning their PDP or complicating the buying journey.
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
                    Haven&apos;s PDP traffic was strong, but their conversion rate
                    stalled due to a predictable set of hesitation patterns:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc marker:text-gray-300">
                    <li>
                      High PDP bounce from shoppers unsure if results would apply
                      to them
                    </li>
                    <li>
                      Visitors doubting whether the serum would work for their
                      specific redness, dryness, or sensitivity
                    </li>
                    <li>
                      Before/after photos that didn&apos;t meaningfully move conversion
                    </li>
                    <li>
                      No scalable way to demonstrate product efficacy without
                      breaking the brand aesthetic
                    </li>
                  </ul>
                  <p>
                    The bottleneck wasn&apos;t demand &mdash; <strong className="text-gray-700 font-medium">it
                    was uncertainty</strong>. Shoppers needed clearer, more personalized
                    proof before committing.
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
                    Haven implemented the Gleame AI Preview widget directly on
                    their PDP &mdash; no redesign, engineering cycles, or dev hours
                    required.
                  </p>
                  <p>Customers could:</p>
                  <ul className="space-y-2 pl-5 list-disc marker:text-gray-300">
                    <li>Upload a selfie</li>
                    <li>
                      See a personalized 30-day transformation using Haven&apos;s
                      barrier-supporting formulas
                    </li>
                    <li>
                      Visualize improvements in redness, texture, radiance, and
                      hydration
                    </li>
                    <li>
                      Experience a low-friction validation moment right before
                      purchase
                    </li>
                  </ul>
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
                    Haven&apos;s results were exceptionally strong across all
                    acquisition channels:
                  </p>
                  <ul className="space-y-3 pl-5 list-disc marker:text-gray-300">
                    <li>
                      <strong className="text-gray-700 font-medium">+106% Lift in Conversion Rate</strong><br />
                      <span className="text-sm">Doubled PDP performance from shoppers who engaged with the widget.</span>
                    </li>
                    <li>
                      <strong className="text-gray-700 font-medium">+111% Lift in Revenue Per Visitor</strong><br />
                      <span className="text-sm">Clearer pre-purchase confidence led to deeper cart engagement and higher order economics.</span>
                    </li>
                    <li>
                      <strong className="text-gray-700 font-medium">+120% Lift in Profit Per Visitor</strong><br />
                      <span className="text-sm">Higher-quality revenue driven by increased purchase likelihood and improved SKU certainty.</span>
                    </li>
                  </ul>
                </div>
                <motion.div
                  className="mt-6 rounded-xl overflow-hidden shadow-lg ring-1 ring-gray-900/5 max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Image
                    src="/haven-intelligems.png"
                    alt="Intelligems results showing CVR, RPV, and Profit metrics for Haven"
                    width={576}
                    height={384}
                    className="w-full h-auto"
                  />
                </motion.div>
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
                    Haven&apos;s shoppers didn&apos;t need more education &mdash; they needed
                    verification. Gleame delivered a personalized &ldquo;yes, this works
                    for me&rdquo; moment that overcame the core objections Haven
                    couldn&apos;t fix with copywriting alone:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc marker:text-gray-300">
                    <li>
                      It replaced skepticism with a visualized future outcome
                    </li>
                    <li>
                      It aligned perfectly with skincare buyer psychology (proof &gt; claims)
                    </li>
                    <li>
                      It answered the only question that mattered: &ldquo;Will Haven
                      improve my skin?&rdquo;
                    </li>
                    <li>
                      It did all of this without introducing friction, clutter, or
                      brand disruption
                    </li>
                  </ul>
                  <p>
                    When conversion lifts exceed 100%, it&apos;s rarely a gimmick &mdash;{" "}
                    <strong className="text-gray-700 font-medium">it&apos;s the removal of a structural purchase blocker</strong>.
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
                  Join brands like Haven and start converting more shoppers
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
