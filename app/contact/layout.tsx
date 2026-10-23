import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to the Gleame team. Book a demo of the AI quiz maker, get free expert setup, or get help switching from another quiz app.",
  openGraph: {
    title: "Contact | Gleame",
    description:
      "Book a demo, get free expert setup, or get help switching quiz apps.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
