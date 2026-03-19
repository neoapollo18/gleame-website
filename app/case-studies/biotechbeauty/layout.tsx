import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BioTech Beauty Case Study - 20% Lift in Conversion Rate",
  description:
    "How BioTech Beauty achieved a 20% lift in conversion rate and 22% increase in revenue per visitor using Gleame's AI virtual try-on across skincare and makeup products.",
  openGraph: {
    title: "BioTech Beauty Case Study | Gleame",
    description:
      "How BioTech Beauty achieved a 20% lift in conversion rate using Gleame's AI virtual try-on.",
    images: [{ url: "/biotechbeautycasetstudyhero.png", alt: "BioTech Beauty Case Study" }],
  },
};

export default function BioTechBeautyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
