"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const plans = [
  { name: "Free", minSessions: 0, maxSessions: 2500, price: 0 },
  { name: "Starter", minSessions: 2500, maxSessions: 5000, price: 30 },
  { name: "Growth", minSessions: 5000, maxSessions: 25000, price: 149 },
  { name: "Scale", minSessions: 25000, maxSessions: Infinity, price: 399 },
];

function formatSessions(num: number): string {
  if (num === Infinity) return "∞";
  if (num >= 25000 && num % 25000 === 0) return `${num / 1000}k`;
  if (num >= 1000) return `${num / 1000}k`;
  return num.toString();
}

function getPlanForSessions(sessions: number) {
  for (const plan of plans) {
    if (sessions >= plan.minSessions && sessions < plan.maxSessions) {
      return plan;
    }
  }
  return plans[plans.length - 1];
}

export function PricingCards() {
  const [sessions, setSessions] = useState(10000);
  const currentPlan = getPlanForSessions(sessions);

  // Non-linear slider: markers 0 (0%), 2.5k (25%), 5k (50%), 25k (75%), 50k+ (100%)
  const getSliderPercentage = (value: number): number => {
    if (value <= 2500) return (value / 2500) * 25;
    if (value <= 5000) return 25 + ((value - 2500) / 2500) * 25;
    if (value <= 25000) return 50 + ((value - 5000) / 20000) * 25;
    return 75 + (Math.min(value - 25000, 25000) / 25000) * 25;
  };
  const sliderPercentage = getSliderPercentage(sessions);

  return (
    <div className="max-w-3xl mx-auto">
      {/* Interactive Slider Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm mb-8"
      >
        <div className="text-center mb-8">
          <h3 className="text-lg font-medium text-gray-600 mb-2">
            Monthly Store Sessions
          </h3>
          <p className="text-5xl font-bold text-gray-900">
            {sessions >= 50000 ? "50k+" : formatSessions(sessions)}
          </p>
        </div>

        {/* Slider */}
        <div className="relative mb-8">
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={sliderPercentage}
            onChange={(e) => {
              const pct = parseFloat(e.target.value);
              let newSessions: number;
              if (pct <= 25) newSessions = (pct / 25) * 2500;
              else if (pct <= 50) newSessions = 2500 + ((pct - 25) / 25) * 2500;
              else if (pct <= 75) newSessions = 5000 + ((pct - 50) / 25) * 20000;
              else newSessions = 25000 + ((pct - 75) / 25) * 25000;
              setSessions(Math.round(newSessions / 100) * 100);
            }}
            className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer slider-thumb"
            style={{
              background: `linear-gradient(to right, #7c3aed 0%, #7c3aed ${sliderPercentage}%, #e5e7eb ${sliderPercentage}%, #e5e7eb 100%)`,
            }}
          />
          <div className="flex justify-between mt-3 text-xs text-gray-400">
            <span>0</span>
            <span>2.5k</span>
            <span>5k</span>
            <span>25k</span>
            <span>50k+</span>
          </div>
        </div>

        {/* Current Plan Display */}
        <motion.div
          key={currentPlan.name}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="bg-gradient-to-br from-primary-50 to-white rounded-xl border border-primary-200 p-6 text-center"
        >
          <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full mb-4">
            {currentPlan.name}
          </span>
          <div className="mb-2">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-2xl text-gray-500">$</span>
              <span className="text-6xl font-bold text-gray-900">
                {currentPlan.price}
              </span>
              <span className="text-xl text-gray-500">/mo</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            {currentPlan.maxSessions === Infinity
              ? "25k+ sessions/month — never more than $399"
              : `${
                  currentPlan.minSessions === 0
                    ? "Under 2.5k"
                    : `${formatSessions(currentPlan.minSessions)}–${formatSessions(currentPlan.maxSessions)}`
                } sessions/month`}
          </p>
        </motion.div>
      </motion.div>

      {/* All Tiers Reference */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bg-gray-50 rounded-xl p-6 mb-8"
      >
        <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
          One approval, four tiers
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`text-center p-3 rounded-lg transition-colors ${
                currentPlan.name === plan.name
                  ? "bg-primary-100 border border-primary-200"
                  : "bg-white border border-gray-200"
              }`}
            >
              <p
                className={`font-semibold text-sm ${
                  currentPlan.name === plan.name ? "text-primary" : "text-gray-900"
                }`}
              >
                {plan.name}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {plan.price === 0 ? "Free" : `$${plan.price}/mo`}
              </p>
              <p className="text-[11px] text-gray-400 mt-0.5">
                {plan.minSessions === 0
                  ? "< 2.5k sessions"
                  : plan.maxSessions === Infinity
                    ? "25k+ sessions"
                    : `${formatSessions(plan.minSessions)}–${formatSessions(plan.maxSessions)}`}
              </p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-5 text-center">
          Your charge follows your store&apos;s traffic automatically — up when
          you grow, down when you slow. Billed through Shopify.
        </p>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center"
      >
        <Link href="https://apps.shopify.com/gleame" className="btn btn-primary btn-lg">
          Start free trial
        </Link>
        <p className="text-sm text-gray-500 mt-4">
          14-day free trial • Free under 2,500 sessions • Never more than $399/mo
        </p>
      </motion.div>

      {/* Custom slider styles */}
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: white;
          border: 3px solid #7c3aed;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        }
        input[type="range"]::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: white;
          border: 3px solid #7c3aed;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
}
