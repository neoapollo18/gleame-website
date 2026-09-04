"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, GitBranch, Sparkles, WandSparkles } from "lucide-react";

function QuizVisual() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-primary-50 via-white to-primary-100 flex items-center justify-center gap-6 p-6">
      {/* Question card */}
      <div className="w-[240px] rounded-2xl bg-white shadow-xl ring-1 ring-gray-900/5 p-5">
        <div className="flex items-center gap-1 mb-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full ${i < 3 ? "bg-primary" : "bg-gray-100"}`}
            />
          ))}
        </div>
        <p className="text-sm font-semibold text-gray-900 mb-3 leading-snug">
          How would you describe your skin most days?
        </p>
        <div className="space-y-2">
          {[
            { label: "Dry & tight", selected: false },
            { label: "Shiny by noon", selected: true },
            { label: "A bit of both", selected: false },
          ].map((opt) => (
            <div
              key={opt.label}
              className={`rounded-lg px-3 py-2 text-xs font-medium border ${
                opt.selected
                  ? "bg-primary-50 border-primary text-primary-700"
                  : "border-gray-200 text-gray-600"
              }`}
            >
              {opt.label}
            </div>
          ))}
        </div>
      </div>
      {/* Branch hint */}
      <div className="hidden md:flex flex-col gap-3">
        <div className="rounded-xl bg-white/80 backdrop-blur shadow-md ring-1 ring-gray-900/5 px-4 py-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-primary mb-1">
            Conditional branch
          </p>
          <p className="text-[11px] text-gray-500 leading-snug">
            &ldquo;Shiny by noon&rdquo; → ask about pore concerns
          </p>
        </div>
        <div className="rounded-xl bg-white/80 backdrop-blur shadow-md ring-1 ring-gray-900/5 px-4 py-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-primary mb-1">
            Optional photo step
          </p>
          <p className="text-[11px] text-gray-500 leading-snug">
            Selfie shade detection — always skippable
          </p>
        </div>
      </div>
    </div>
  );
}

function StudioVisual() {
  return (
    <div className="h-full w-full bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-[520px] rounded-xl bg-gray-800 ring-1 ring-white/10 p-3 flex gap-3">
        {/* Slide tree */}
        <div className="w-24 shrink-0 space-y-1.5">
          <p className="text-[9px] font-semibold uppercase tracking-wider text-gray-400 mb-2">
            Slides
          </p>
          {["Welcome", "Occasion", "Shade vibe", "Photo", "Results"].map((slide, i) => (
            <div
              key={slide}
              className={`rounded-md px-2 py-1.5 text-[10px] font-medium ${
                i === 1 ? "bg-primary text-white" : "bg-gray-700 text-gray-300"
              }`}
            >
              {slide}
            </div>
          ))}
        </div>
        {/* Live phone preview */}
        <div className="flex-1 rounded-lg bg-white p-3">
          <p className="text-[9px] font-semibold uppercase tracking-wider text-gray-400 mb-2">
            Live preview
          </p>
          <p className="text-xs font-semibold text-gray-900 mb-2">
            What&apos;s the occasion? 🎉
          </p>
          <div className="grid grid-cols-2 gap-1.5">
            {["Everyday", "Date night", "Wedding", "Just because"].map((c) => (
              <div
                key={c}
                className="rounded-md border border-gray-200 px-2 py-1.5 text-[9px] text-gray-600 text-center"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
        {/* AI copilot */}
        <div className="w-36 shrink-0 flex flex-col justify-between">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-wider text-gray-400 mb-2">
              AI copilot
            </p>
            <div className="rounded-lg bg-gray-700 px-2.5 py-2 text-[10px] text-gray-200 mb-1.5">
              Add a budget question
            </div>
            <div className="rounded-lg bg-primary/20 border border-primary/40 px-2.5 py-2 text-[10px] text-primary-200">
              Done — added after &ldquo;Shade vibe&rdquo; ✨
            </div>
          </div>
          <div className="rounded-md bg-gray-700 px-2 py-1.5 text-[9px] text-gray-400 text-center">
            Draft · Publish when ready
          </div>
        </div>
      </div>
    </div>
  );
}

function LogicVisual() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-gray-50 to-primary-50 flex items-center justify-center gap-5 p-6">
      {/* Plain-language notes */}
      <div className="w-[250px] rounded-2xl bg-white shadow-xl ring-1 ring-gray-900/5 p-5">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-primary mb-3">
          Your logic, in plain words
        </p>
        <div className="space-y-2.5">
          {[
            { answer: "Party", note: "glitter, chrome, bold reds" },
            { answer: "Office", note: "sheer nudes, soft pinks" },
            { answer: "Big event", note: "classic reds, french tips" },
          ].map((row) => (
            <div key={row.answer} className="flex items-start gap-2">
              <span className="shrink-0 rounded-md bg-primary-50 text-primary-700 text-[10px] font-semibold px-2 py-0.5">
                {row.answer}
              </span>
              <span className="text-[11px] text-gray-500 leading-snug">{row.note}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Ranked output */}
      <div className="hidden md:block w-[220px] rounded-2xl bg-white shadow-xl ring-1 ring-gray-900/5 p-5">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-primary mb-3">
          Ranked from your catalog
        </p>
        <div className="space-y-2">
          {[
            { name: "Chrome Party Gel", fit: "98%" },
            { name: "Ruby Bold Lacquer", fit: "94%" },
            { name: "Glitter Top Coat", fit: "91%" },
          ].map((p, i) => (
            <div key={p.name} className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-gray-400 w-3">{i + 1}</span>
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-rose-300 to-primary-300" />
              <span className="text-[11px] font-medium text-gray-700 flex-1 leading-tight">
                {p.name}
              </span>
              <span className="text-[10px] font-bold text-emerald-600">{p.fit}</span>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-gray-400 mt-3 leading-snug">
          Only ever products you actually sell.
        </p>
      </div>
    </div>
  );
}

function AnalyticsVisual() {
  const funnel = [
    { label: "Quiz views", pct: 100 },
    { label: "Starts", pct: 78 },
    { label: "Results seen", pct: 61 },
    { label: "Product clicks", pct: 44 },
    { label: "Add to cart", pct: 28 },
  ];
  return (
    <div className="h-full w-full bg-gradient-to-br from-white to-gray-50 flex items-center justify-center gap-6 p-6">
      <div className="w-[280px] rounded-2xl bg-white shadow-xl ring-1 ring-gray-900/5 p-5">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-primary mb-3">
          Quiz funnel
        </p>
        <div className="space-y-2">
          {funnel.map((row, i) => (
            <div key={row.label} className="flex items-center gap-2">
              <span className="text-[10px] text-gray-500 w-20 shrink-0">{row.label}</span>
              <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${row.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
                />
              </div>
              <span className="text-[10px] font-semibold text-gray-600 w-8 text-right">
                {row.pct}%
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:flex flex-col gap-3">
        <div className="rounded-xl bg-white shadow-md ring-1 ring-gray-900/5 px-4 py-3">
          <p className="text-[10px] text-gray-400 mb-0.5">Quiz-attributed revenue</p>
          <p className="text-lg font-bold text-gray-900">$18,240</p>
          <p className="text-[10px] font-medium text-emerald-600">Linked to real orders</p>
        </div>
        <div className="rounded-xl bg-white shadow-md ring-1 ring-gray-900/5 px-4 py-3">
          <p className="text-[10px] text-gray-400 mb-0.5">Mobile vs desktop</p>
          <p className="text-lg font-bold text-gray-900">74% / 26%</p>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    id: "quiz",
    label: "Find My Fit Quiz",
    icon: Sparkles,
    tag: "The Shopper Experience",
    title: "A full-page quiz on your domain, in your theme",
    description:
      "Mobile-first, fast, and animated — no iframe. Playful answers as chips, image cards, and swatches, with multi-select and conditional branching. An optional selfie step powers shade detection and \"see it on you\" moments in the results.",
    visual: <QuizVisual />,
  },
  {
    id: "studio",
    label: "Quiz Studio",
    icon: WandSparkles,
    tag: "The Editing Experience",
    title: "A full-screen studio with an AI copilot",
    description:
      "A slide tree, live preview of your real storefront quiz on mobile and desktop, per-slide editors, and a theme editor for colors, radii, and fonts. Or just tell the AI chat copilot what you want: \"make question 2 more playful\", \"add a budget question\".",
    visual: <StudioVisual />,
  },
  {
    id: "logic",
    label: "Recommendation Logic",
    icon: GitBranch,
    tag: "Catalog-Grounded Matching",
    title: "Plain words in, the right products out",
    description:
      "Write a few words per answer — \"Party: glitter, chrome, bold reds\" — or let AI draft them from your catalog. Gleame compiles them into the ranking rulebook the AI recommender follows, with optional hard rules for guaranteed mappings. Your catalog stays in sync automatically.",
    visual: <LogicVisual />,
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
    tag: "Proof It's Working",
    title: "Funnel, splits, and revenue attribution",
    description:
      "Track views, starts, the photo step, results, product clicks, and add to cart — split by mobile and desktop. Quiz sessions are linked to actual orders via cart tracking, so you see the revenue your quiz drives.",
    visual: <AnalyticsVisual />,
  },
];

export function Features() {
  const [active, setActive] = useState(0);

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-display-sm font-semibold text-gray-900 mb-4 tracking-tight"
          >
            Everything a great quiz needs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 font-light"
          >
            On-brand for shoppers, effortless for you, and grounded in the
            products you actually sell.
          </motion.p>
        </div>

        {/* Tab buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setActive(index)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === index
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
              }`}
            >
              {feature.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 lg:gap-14 items-center">
            {/* Visual */}
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-xl ring-1 ring-gray-900/5 aspect-video">
              <motion.div
                key={features[active].id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                {features[active].visual}
              </motion.div>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center py-4">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="inline-block text-primary font-medium text-sm mb-3 tracking-wide">
                  {features[active].tag}
                </span>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight leading-snug">
                  {features[active].title}
                </h3>
                <p className="text-gray-500 font-light leading-relaxed text-[15px]">
                  {features[active].description}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
