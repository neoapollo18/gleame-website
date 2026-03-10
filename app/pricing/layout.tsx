import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for Gleame's AI virtual try-on widget. Start with a 14-day free trial. Plans for every stage of growth.",
  openGraph: {
    title: "Pricing | Gleame",
    description:
      "Simple, transparent pricing for Gleame's AI virtual try-on widget. Start with a 14-day free trial.",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
