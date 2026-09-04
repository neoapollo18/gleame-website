"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, Rocket, Sparkles, Store } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Store,
    title: "Tell Gleame what you sell",
    description:
      "The onboarding wizard syncs your Shopify catalog and asks for your category, brand voice, and accent color — prefilled from your store where possible.",
    visual: (
      <div className="bg-white rounded-xl border border-gray-200 p-4 w-full max-w-[240px] h-[150px] shadow-lg flex flex-col justify-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#96BF47]/15 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#96BF47]" fill="currentColor">
              <path d="M15.337 3.415c-.193-.016-.389.024-.553.128-.163.104-.282.261-.337.449l-1.13 3.882-3.964.011c-.2 0-.391.085-.527.233-.136.148-.203.347-.183.545.02.199.119.383.273.508l3.203 2.593-1.143 3.879c-.058.198-.03.41.078.585.107.175.28.298.475.34.195.041.398-.002.559-.12l3.255-2.39 3.254 2.39c.161.118.364.161.559.12.195-.042.368-.165.475-.34.108-.175.136-.387.078-.585l-1.143-3.879 3.203-2.593c.154-.125.253-.309.273-.508.02-.198-.047-.397-.183-.545-.136-.148-.327-.233-.527-.233l-3.964-.011-1.13-3.882c-.055-.188-.174-.345-.337-.449-.163-.104-.36-.144-.553-.128z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-800">Catalog synced</p>
            <p className="text-[10px] text-gray-400">312 products · 1,204 variants</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-[11px] text-gray-600">
          <span>Category</span>
          <span className="font-medium text-gray-800">Nail care</span>
        </div>
        <div className="flex items-center justify-between text-[11px] text-gray-600">
          <span>Accent color</span>
          <div className="w-5 h-5 rounded-md bg-primary shadow-inner" />
        </div>
      </div>
    ),
  },
  {
    number: "02",
    icon: Sparkles,
    title: "AI drafts your whole quiz",
    description:
      "In about a minute: questions, answers, copy, styling, and recommendation logic — all grounded in the catalog you actually sell.",
    visual: (
      <div className="bg-gray-900 rounded-xl p-4 w-full max-w-[240px] h-[150px] flex flex-col justify-center">
        <div className="flex items-center gap-2 text-white mb-3">
          <Sparkles className="w-4 h-4 text-primary-300" />
          <span className="font-medium text-xs">Drafting your quiz…</span>
        </div>
        <div className="space-y-2">
          {["Questions & answers", "Copy in your voice", "Recommendation logic"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.35 }}
              className="flex items-center gap-2 text-[11px] text-gray-300"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              {item}
            </motion.div>
          ))}
        </div>
        <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden mt-3">
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
          />
        </div>
      </div>
    ),
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Fine-tune in Quiz Studio",
    description:
      "A full-screen editor with a slide tree, live storefront preview, theme editor, visual flow map — and an AI copilot that makes edits for you.",
    visual: (
      <div className="bg-white rounded-xl border border-gray-200 p-3 w-full max-w-[240px] h-[150px] shadow-lg flex gap-2">
        <div className="w-16 flex flex-col gap-1.5">
          {["Intro", "Q1", "Q2", "Photo", "Results"].map((slide, i) => (
            <div
              key={slide}
              className={`rounded-md px-2 py-1 text-[9px] font-medium ${
                i === 2 ? "bg-primary-100 text-primary-700" : "bg-gray-100 text-gray-500"
              }`}
            >
              {slide}
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex-1 rounded-lg border border-gray-200 bg-gray-50 p-2">
            <div className="w-8 h-1 bg-primary-200 rounded mb-1.5" />
            <div className="w-full h-1.5 bg-gray-200 rounded mb-1" />
            <div className="w-3/4 h-1.5 bg-gray-200 rounded mb-2" />
            <div className="grid grid-cols-2 gap-1">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="h-4 rounded bg-white border border-gray-200" />
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-primary-50 border border-primary-100 px-2 py-1.5 text-[9px] text-primary-700">
            &ldquo;Make question 2 more playful&rdquo;
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "04",
    icon: Rocket,
    title: "Publish when you're ready",
    description:
      "Everything edits a draft with version history. Nothing touches your live storefront until you hit Publish — after a pre-flight checklist.",
    visual: (
      <div className="bg-white rounded-xl border border-gray-200 p-4 w-full max-w-[240px] h-[150px] shadow-lg flex flex-col justify-center gap-2">
        {["Catalog in sync", "All slides reachable", "Logic covers every answer"].map((item) => (
          <div key={item} className="flex items-center gap-2 text-[11px] text-gray-600">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            {item}
          </div>
        ))}
        <div className="mt-1 rounded-lg bg-primary text-white text-[11px] font-medium text-center py-2">
          Publish to storefront
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
            From catalog to live quiz in four steps
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 font-light"
          >
            AI does the heavy lifting. You stay in control of every question,
            answer, and match.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Step number */}
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-primary-200 flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-xl font-bold gradient-text">
                    {step.number}
                  </span>
                </div>

                {/* Visual */}
                <div className="mb-6 flex justify-center w-full">{step.visual}</div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 font-light text-[14px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
