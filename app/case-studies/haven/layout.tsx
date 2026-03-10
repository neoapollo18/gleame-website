import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haven Case Study - 106% Lift in Conversion Rate",
  description:
    "How Haven achieved a 106% lift in conversion rate, 111% lift in revenue per visitor, and 120% lift in profit per visitor using Gleame's AI virtual try-on.",
  openGraph: {
    title: "Haven Case Study | Gleame",
    description:
      "How Haven achieved a 106% lift in conversion rate using Gleame's AI virtual try-on.",
    images: [{ url: "/havencasestudy.png", alt: "Haven Case Study" }],
  },
};

export default function HavenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
