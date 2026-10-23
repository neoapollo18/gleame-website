"use client";

import { useEffect } from "react";
import { Section, SplitHeading } from "@/components/ui/Section";
import { Stars } from "@/components/home/Hero";
import { CONTACT_EMAIL, RATING, REVIEWS_URL } from "@/lib/site";

const options = [
  {
    title: "See a demo",
    body: "A walkthrough of the Studio on a quiz built for a store like yours.",
  },
  {
    title: "Free expert setup",
    body: "We build, style and launch the quiz on your store. A person tunes every match.",
  },
  {
    title: "Switch from another app",
    body: "Moving from Octane AI, Quiz Kit, RevenueHunt or Quizell? We'll rebuild it on Gleame.",
  },
];

export default function ContactPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Section frameClassName="!px-0">
        <div className="grid lg:grid-cols-[1fr_1.1fr]">
          <div className="frame-pad flex flex-col py-16 sm:py-20 lg:py-24">
            <SplitHeading
              as="h1"
              className="text-[2.25rem] font-medium leading-[1.06] tracking-[-0.036em] sm:text-[3rem]"
              lead="Talk to the team."
              rest="Book a call for a demo, a free expert setup, or help switching apps."
            />

            <ol className="mt-12 border-t border-line">
              {options.map((o, i) => (
                <li key={o.title} className="grid grid-cols-[32px_1fr] gap-x-3 border-b border-line py-5">
                  <span className="font-mono text-[12px] leading-[22px] text-muted">0{i + 1}</span>
                  <div>
                    <p className="text-[16px] font-medium tracking-[-0.01em]">{o.title}</p>
                    <p className="mt-1 text-[14.5px] leading-relaxed text-muted">{o.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 grid gap-px overflow-hidden rounded-[6px] border border-line bg-line sm:grid-cols-2">
              <a href={`mailto:${CONTACT_EMAIL}`} className="group bg-white px-5 py-4 transition-colors hover:bg-wash">
                <p className="text-[13px] text-muted">Email</p>
                <p className="mt-0.5 text-[15px] font-medium group-hover:text-brand">{CONTACT_EMAIL}</p>
              </a>
              <a href={REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="group bg-white px-5 py-4 transition-colors hover:bg-wash">
                <p className="text-[13px] text-muted">Shopify App Store</p>
                <p className="mt-1 flex items-center gap-2 text-[15px] font-medium group-hover:text-brand">
                  <Stars className="h-3 w-3" /> {RATING.score} from {RATING.count} reviews
                </p>
              </a>
            </div>

            <figure className="mt-auto pt-14">
              <blockquote className="text-pretty text-[17px] leading-relaxed text-ink-2">
                &ldquo;They were incredibly responsive and patient throughout the process and took the time to
                understand our products, our customers and what we were trying to accomplish.&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-[13.5px] text-muted">Locks & Mane · Canada</figcaption>
            </figure>
          </div>

          <div className="dots border-t border-line bg-wash p-3 sm:p-6 lg:border-l lg:border-t-0 lg:p-10">
            <div className="overflow-hidden rounded-[8px] border border-line-strong bg-white shadow-card">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/aaron-gleame/gleame-discovery-call?hide_gdpr_banner=1&background_color=ffffff&text_color=0b0a0e&primary_color=5b0e86"
                style={{ minWidth: "300px", height: "700px" }}
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
