import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { CONTACT_EMAIL, SHOPIFY_URL } from "@/lib/site";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/features", label: "Overview" },
      { href: "/features#studio", label: "Quiz Studio" },
      { href: "/features#matching", label: "Matching" },
      { href: "/features#templates", label: "Templates" },
      { href: "/features#analytics", label: "Analytics" },
      { href: "/features#try-on", label: "Virtual try-on" },
    ],
  },
  {
    title: "Quizzes",
    links: [
      { href: "/#quiz-types", label: "Product finder" },
      { href: "/#quiz-types", label: "Skincare routine" },
      { href: "/#quiz-types", label: "Shade and size match" },
      { href: "/#quiz-types", label: "Gift finder" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/pricing", label: "Pricing" },
      { href: "/contact", label: "Book a demo" },
      { href: "/contact", label: "Free expert setup" },
      { href: `mailto:${CONTACT_EMAIL}`, label: "Email us" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/security", label: "Security" },
    ],
  },
];

const socials = [
  { name: "LinkedIn", href: "https://linkedin.com/company/gleameapp" },
  { name: "Instagram", href: "https://instagram.com/imaarontang" },
  { name: "Shopify App Store", href: SHOPIFY_URL },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="frame">
        <div className="grid grid-cols-2 gap-px bg-line md:grid-cols-6">
          <div className="col-span-2 bg-white p-6 sm:p-8 lg:px-14 lg:py-10">
            <Link href="/" aria-label="Gleame home" className="inline-flex">
              <Logo />
            </Link>
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-muted">
              The AI quiz maker for Shopify. Built from your catalog, matched to
              products you sell.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title} className="bg-white p-6 sm:p-8 lg:px-8 lg:py-10">
              <h4 className="text-[13px] font-medium text-ink">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13.5px] text-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="frame-pad flex flex-col gap-3 border-t border-line py-6 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Gleame Inc. Los Angeles, CA.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-ink"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
