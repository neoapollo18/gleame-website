"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const features = [
  {
    id: "preview",
    label: "AI Previews",
    tag: "See the Transformation",
    title: "Photorealistic before & after previews",
    description:
      "Shoppers upload a selfie and instantly see how your product transforms their look. Powered by AI trained on real beauty outcomes — no filters, no exaggeration.",
    video: "/BiotechBeautyDemo.mov",
  },
  {
    id: "install",
    label: "Add to Store",
    tag: "Easy Integration",
    title: "Add the widget to your product page",
    description:
      "Drop Gleame into any Shopify product page in minutes. No code, no dev cycles. It sits natively on your PDP and starts converting immediately.",
    video: "/Cursorful Add Widget (2).mp4",
  },
  {
    id: "configure",
    label: "Configure Style",
    tag: "Brand it Your Way",
    title: "Match it to your brand",
    description:
      "Customize colors, copy, layout, and behavior to fit your store perfectly. Gleame adapts to your brand — not the other way around.",
    video: "/configGleame.mp4",
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
            See how it works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 font-light"
          >
            Integrate in minutes. Launch AI previews that boost confidence and conversion.
          </motion.p>
        </div>

        {/* Tab buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="flex justify-center gap-2 mb-10"
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
            {/* Video */}
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-xl ring-1 ring-gray-900/5 aspect-video">
              <video
                key={features[active].video}
                src={features[active].video}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
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
