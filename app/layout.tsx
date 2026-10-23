import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RATING } from "@/lib/site";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const title = "Gleame: AI Product Quiz Maker for Shopify";
const description =
  "Gleame turns your Shopify catalog into a product recommendation quiz. AI writes the questions, maps every answer to products you sell, and you launch in minutes. Product finders, skincare quizzes, shade and size matching, gift finders and routine builders.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | Gleame",
  },
  description,
  keywords: [
    "AI quiz maker",
    "product quiz",
    "product recommendation quiz",
    "shopify quiz app",
    "product finder quiz",
    "skincare quiz",
    "gift finder quiz",
    "sizing quiz",
    "shade finder quiz",
    "routine builder",
    "quiz funnel",
    "virtual try-on",
    "Octane AI alternative",
    "RevenueHunt alternative",
  ],
  authors: [{ name: "Gleame" }],
  creator: "Gleame",
  publisher: "Gleame",
  metadataBase: new URL("https://gleame.ai"),
  alternates: { canonical: "https://gleame.ai" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gleame.ai",
    siteName: "Gleame",
    title,
    description:
      "Help every shopper find their match. Gleame turns your catalog into a product quiz, written by AI and matched to products you sell.",
    images: [{ url: "/Gleame.jpg", alt: "Gleame" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Help every shopper find their match. Gleame turns your catalog into a product quiz, written by AI and matched to products you sell.",
    images: ["/Gleame.jpg"],
  },
  icons: { icon: "/favicon.ico" },
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

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Gleame AI: Product Quiz Maker",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Shopify",
    description,
    url: "https://gleame.ai",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: RATING.score,
      ratingCount: String(RATING.count),
      bestRating: "5",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Opt in to scroll animations before first paint, only when motion is welcome. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if('IntersectionObserver'in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('rv')}catch(e){}",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
