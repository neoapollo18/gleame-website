import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Traffic-based pricing for Gleame's AI Find My Fit quiz. Free under 2,500 monthly sessions, never more than $399/mo. 14-day free trial, billed through Shopify.",
  openGraph: {
    title: "Pricing | Gleame",
    description:
      "Traffic-based pricing for Gleame's AI Find My Fit quiz. Free under 2,500 monthly sessions, never more than $399/mo.",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
