"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Star } from "lucide-react";

const reviews = [
  {
    quote: "the technology demonstrates perfectly what our products will look like on our customers",
    brand: "BiotechBeauty",
  },
  {
    quote: "This has helped increase sales revenue for our brand",
    brand: "Wett Skincare",
  },
  {
    quote: "Made a huge difference in our conversion rates. Worth every penny.",
    brand: "Haven",
  },
  {
    quote: "Our conversions literally went from 3% to 6% — DOUBLED, insane stuff.",
    brand: "HoliCow",
  },
  {
    quote: "Gleame was a game-changer for us. Conversion jumped almost overnight.",
    brand: "MenPen",
  },
];

export default function ContactPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* Hero + Calendly Section */}
      <section className="relative pt-16 pb-8 lg:pt-20 lg:pb-12 overflow-hidden bg-white">
        <div className="container relative">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            {/* Left - Text */}
            <div className="pt-4 lg:pt-8">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block text-primary font-medium text-sm mb-4 tracking-wide uppercase"
              >
                Book a Demo
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-display-sm font-semibold text-gray-900 mb-5 tracking-tight"
              >
                See what Gleame can do for your brand
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-500 font-light leading-relaxed mb-8"
              >
                Sit down with our team and see how AI-powered before &amp; after
                previews can increase your conversions, reduce hesitation, and
                drive more revenue from the same traffic.
              </motion.p>

              {/* Trust points */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-3 mb-8"
              >
                {[
                  "Proven lifts in conversion rate",
                  "Live on your store in under 15 minutes",
                  "No code or dev resources required",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 text-sm">{point}</span>
                  </div>
                ))}
              </motion.div>

              {/* Rating */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="flex items-center gap-2"
              >
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500 font-light">
                  5.0/5 on the Shopify App Store
                </span>
              </motion.div>
            </div>

            {/* Right - Calendly embed */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden"
            >
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/aaron-gleame/gleame-discovery-call?hide_gdpr_banner=1&background_color=ffffff&text_color=1a1a1a&primary_color=7C3AED"
                style={{ minWidth: "320px", height: "660px" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Review Marquee */}
      <section className="py-10 border-y border-gray-100 bg-gray-50/50 overflow-hidden">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50/50 to-transparent z-10 pointer-events-none" />

          <div className="flex animate-scroll">
            {[...reviews, ...reviews].map((review, i) => (
              <div
                key={`${review.brand}-${i}`}
                className="flex-shrink-0 mx-4 bg-white rounded-xl border border-gray-200 px-6 py-4 w-[340px]"
              >
                <div className="flex items-center gap-0.5 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm font-light leading-relaxed mb-2">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <p className="text-xs text-gray-400 font-medium">{review.brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact options */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-gray-900 mb-8 tracking-tight text-center"
            >
              Other ways to reach us
            </motion.h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-primary-200 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Email us
                </h3>
                <p className="text-gray-500 text-sm font-light mb-3">
                  We respond within 24 hours.
                </p>
                <a href="mailto:aaron@gleame.ai" className="text-primary text-sm font-medium hover:underline">
                  aaron@gleame.ai
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-primary-200 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Technical support
                </h3>
                <p className="text-gray-500 text-sm font-light">
                  Need help with setup, your catalog sync, or your quiz? We&apos;re here to help.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
