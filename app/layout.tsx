import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
    default: "Gleame - AI Find My Fit Quiz for Shopify Beauty Brands",
    template: "%s | Gleame",
  },
  description:
    "Gleame builds your product-matching quiz from your real catalog in about a minute — and it only ever recommends products you actually sell. Turn browsers into confident buyers, lift conversion, and cut returns.",
  keywords: [
    "product quiz",
    "shopify quiz app",
    "product recommendation quiz",
    "guided selling",
    "find my fit quiz",
    "shade finder quiz",
    "quiz builder shopify",
    "beauty quiz",
    "skincare quiz",
    "nail care quiz",
    "hair extensions quiz",
    "AI product recommendations",
    "shopify conversion rate optimization",
    "reduce returns ecommerce",
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
    title: "Gleame - AI Find My Fit Quiz for Shopify Beauty Brands",
    description:
      "Your product-matching quiz, built from your real catalog in about a minute. Turn browsers into confident buyers and cut returns.",
    images: [
      {
        url: "/Gleame.jpg",
        alt: "Gleame - AI Find My Fit Quiz for Shopify Beauty Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gleame - AI Find My Fit Quiz for Shopify Beauty Brands",
    description:
      "Your product-matching quiz, built from your real catalog in about a minute. Turn browsers into confident buyers and cut returns.",
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
      "AI-built Find My Fit quiz for Shopify beauty and wellness brands. Matches shoppers to the right products from the store's real catalog to lift conversion and cut returns.",
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
        <Analytics />
      </body>
    </html>
  );
}
