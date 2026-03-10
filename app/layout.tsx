import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Gleame - AI Virtual Try-On for Beauty & Cosmetics | Shopify App",
    template: "%s | Gleame",
  },
  description:
    "Boost Shopify conversions with Gleame's AI before-and-after previews. Shoppers upload a selfie and instantly see how your beauty products transform their look. Proven 13-106% CVR lifts.",
  keywords: [
    "virtual try-on",
    "AI beauty",
    "cosmetics",
    "shopify app",
    "before after",
    "shade matching",
    "makeup try on",
    "skincare visualization",
    "beauty ecommerce",
    "AR beauty",
    "shopify conversion rate optimization",
    "beauty product visualization",
    "AI skincare preview",
    "product page widget",
    "DTC beauty tools",
    "increase shopify conversions",
    "beauty brand CRO",
  ],
  authors: [{ name: "Gleame" }],
  creator: "Gleame",
  publisher: "Gleame",
  metadataBase: new URL("https://gleame.ai"),
  alternates: {
    canonical: "https://gleame.ai",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gleame.ai",
    siteName: "Gleame",
    title: "Gleame - AI Virtual Try-On for Beauty & Cosmetics",
    description:
      "Boost Shopify conversions with AI before-and-after previews. Proven 13-106% CVR lifts for beauty brands.",
    images: [
      {
        url: "/Gleame.jpg",
        alt: "Gleame - AI Virtual Try-On for Beauty & Cosmetics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gleame - AI Virtual Try-On for Beauty & Cosmetics",
    description:
      "Boost Shopify conversions with AI before-and-after previews. Proven 13-106% CVR lifts.",
    images: ["/gleamegradient.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Gleame",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "AI-powered virtual try-on widget for Shopify beauty and cosmetics brands. Increase conversions with realistic before-and-after previews.",
    url: "https://gleame.ai",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      ratingCount: "7",
      bestRating: "5",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "0",
      offerCount: "3",
    },
  };

  return (
    <html lang="en" className={plusJakarta.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
