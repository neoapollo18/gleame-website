import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MenPen Case Study - 13% Lift in Conversion Rate",
  description:
    "How MenPen achieved a 13% increase in conversion rate and 9% lift in revenue per visitor using Gleame's AI virtual try-on on their Shopify store.",
  openGraph: {
    title: "MenPen Case Study | Gleame",
    description:
      "How MenPen achieved a 13% increase in conversion rate using Gleame's AI virtual try-on.",
    images: [{ url: "/menpencasestudy.png", alt: "MenPen Case Study" }],
  },
};

export default function MenPenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
