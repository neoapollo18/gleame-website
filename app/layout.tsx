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
    "Increase CVR and confidence with realistic AI before-and-after previews. Let shoppers visualize their transformation and test shades instantly.",
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
  ],
  authors: [{ name: "Gleame" }],
  creator: "Gleame",
  metadataBase: new URL("https://gleame.ai"), // Replace with your actual domain
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gleame.ai",
    siteName: "Gleame",
    title: "Gleame - AI Virtual Try-On for Beauty & Cosmetics",
    description:
      "Increase CVR and confidence with realistic AI before-and-after previews. Let shoppers visualize their transformation and test shades instantly.",
    images: [
      {
        url: "/Gleame.jpg",
        alt: "Gleame - AI Virtual Try-On",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gleame - AI Virtual Try-On for Beauty & Cosmetics",
    description:
      "Increase CVR and confidence with realistic AI before-and-after previews.",
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
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
