import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Gleame team. Book a demo, ask about enterprise pricing, or get technical support for your AI virtual try-on widget.",
  openGraph: {
    title: "Contact | Gleame",
    description:
      "Get in touch with the Gleame team. Book a demo or ask about enterprise pricing.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
