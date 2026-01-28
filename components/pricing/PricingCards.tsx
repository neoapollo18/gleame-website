"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const plans = [
  { name: "Starter", minSessions: 0, maxSessions: 5000, price: 30 },
  { name: "Launch", minSessions: 5000, maxSessions: 25000, price: 149 },
  { name: "Growth", minSessions: 25000, maxSessions: 75000, price: 399 },
  { name: "Scale", minSessions: 75000, maxSessions: 200000, price: 799 },
  { name: "Premium", minSessions: 200000, maxSessions: 500000, price: 1499 },
  { name: "Enterprise", minSessions: 500000, maxSessions: 1000000, price: null },
];

function formatSessions(num: number): string {
  if (num >= 1000000) return "1M+";
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
  const [sessions, setSessions] = useState(25000);
  const currentPlan = getPlanForSessions(sessions);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSessions(parseInt(e.target.value));
  };

  // Calculate slider position percentage for the gradient
  const sliderPercentage = (sessions / 1000000) * 100;

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
          <h3 className="text-lg font-medium text-gray-600 mb-2">Monthly Sessions</h3>
          <p className="text-5xl font-bold text-gray-900">{formatSessions(sessions)}</p>
        </div>

        {/* Slider */}
        <div className="relative mb-8">
          <input
            type="range"
            min="0"
            max="1000000"
            step="1000"
            value={sessions}
            onChange={handleSliderChange}
            className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer slider-thumb"
            style={{
              background: `linear-gradient(to right, #7c3aed 0%, #7c3aed ${sliderPercentage}%, #e5e7eb ${sliderPercentage}%, #e5e7eb 100%)`
            }}
          />
          <div className="flex justify-between mt-3 text-xs text-gray-400">
            <span>0</span>
            <span>5k</span>
            <span>25k</span>
            <span>75k</span>
            <span>200k</span>
            <span>500k+</span>
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
            {currentPlan.price !== null ? (
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-2xl text-gray-500">$</span>
                <span className="text-6xl font-bold text-gray-900">{currentPlan.price}</span>
                <span className="text-xl text-gray-500">/mo</span>
              </div>
            ) : (
              <p className="text-4xl font-bold text-gray-900">Custom Pricing</p>
            )}
          </div>
          <p className="text-gray-500 text-sm">
            {currentPlan.minSessions === 500000 
              ? "500k+ sessions/month" 
              : `${formatSessions(currentPlan.minSessions)}-${formatSessions(currentPlan.maxSessions)} sessions/month`
            }
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
        <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">All Pricing Tiers</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`text-center p-3 rounded-lg transition-colors ${
                currentPlan.name === plan.name 
                  ? "bg-primary-100 border border-primary-200" 
                  : "bg-white border border-gray-200"
              }`}
            >
              <p className={`font-semibold text-sm ${currentPlan.name === plan.name ? "text-primary" : "text-gray-900"}`}>
                {plan.name}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {plan.price !== null ? `$${plan.price}/mo` : "Custom"}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center"
      >
        <Link
          href={currentPlan.price !== null 
            ? "https://apps.shopify.com/glimpse-app?search_id=0a3368ea-475d-43f7-9c29-34c4325d4bd7&surface_detail=gleame&surface_inter_position=1&surface_intra_position=5&surface_type=search" 
            : "/contact"
          }
          className="btn btn-primary btn-lg"
        >
          {currentPlan.price !== null ? "Start free trial" : "Contact sales"}
        </Link>
        <p className="text-sm text-gray-500 mt-4">
          14-day free trial • No credit card required
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
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
        }
        input[type="range"]::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: white;
          border: 3px solid #7c3aed;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
        }
      `}</style>
    </div>
  );
}
