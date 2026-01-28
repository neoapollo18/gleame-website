"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small brands getting started",
    price: 29,
    features: [
      "1,000 AI previews/month",
      "Basic templates",
      "Shade matching",
      "Email support",
      "Basic analytics",
    ],
    cta: "Start free trial",
    popular: false,
  },
  {
    name: "Growth",
    description: "For scaling brands ready to convert more",
    price: 79,
    features: [
      "10,000 AI previews/month",
      "All premium templates",
      "Advanced AI controls",
      "Analytics dashboard",
      "Priority support",
      "A/B testing",
      "Custom branding",
    ],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large brands",
    price: null,
    features: [
      "Unlimited AI previews",
      "Custom AI training",
      "White-label options",
      "Dedicated account manager",
      "SLA & priority support",
      "Custom integrations",
      "Advanced security",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

export function PricingCards() {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className={cn(
            "relative rounded-2xl border p-8",
            plan.popular
              ? "border-primary bg-gradient-to-b from-primary-50 to-white shadow-xl shadow-primary/10"
              : "border-gray-200 bg-white"
          )}
        >
          {plan.popular && (
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-medium rounded-full">
              Most Popular
            </span>
          )}

          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {plan.name}
            </h3>
            <p className="text-gray-500">{plan.description}</p>
          </div>

          <div className="mb-6">
            {plan.price !== null ? (
              <div className="flex items-baseline gap-1">
                <span className="text-lg text-gray-500">$</span>
                <span className="text-5xl font-extrabold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-500">/month</span>
              </div>
            ) : (
              <p className="text-4xl font-extrabold text-gray-900">Custom</p>
            )}
          </div>

          <ul className="space-y-4 mb-8">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <div
                  className={cn(
                    "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                    plan.popular ? "bg-primary/10" : "bg-gray-100"
                  )}
                >
                  <Check
                    className={cn(
                      "w-3 h-3",
                      plan.popular ? "text-primary" : "text-gray-600"
                    )}
                  />
                </div>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            href={plan.price !== null ? "/signup" : "/contact"}
            className={cn(
              "btn btn-lg w-full",
              plan.popular ? "btn-primary" : "btn-secondary"
            )}
          >
            {plan.cta}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
