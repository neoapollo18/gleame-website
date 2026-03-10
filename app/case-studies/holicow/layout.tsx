import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HoliCow Case Study - Conversion Rate Doubled from 3% to 6%",
  description:
    "How HoliCow doubled their conversion rate from 3% to 6% using Gleame's AI skin transformation previews on their tallow skincare product page.",
  openGraph: {
    title: "HoliCow Case Study | Gleame",
    description:
      "How HoliCow doubled their conversion rate using Gleame's AI skin transformation previews.",
    images: [{ url: "/holicow-hero-ku12d_yK.png", alt: "HoliCow Case Study" }],
  },
};

export default function HoliCowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
