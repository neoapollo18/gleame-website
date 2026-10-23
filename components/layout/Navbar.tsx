"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { SHOPIFY_URL } from "@/lib/site";

const navLinks = [
  { href: "/features", label: "Product" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#reviews", label: "Customers" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-200",
        scrolled || open
          ? "border-line bg-white/85 backdrop-blur-md backdrop-saturate-150"
          : "border-line/70 bg-transparent"
      )}
    >
      <nav className="frame frame-pad flex h-16 items-center justify-between gap-6 sm:border-x-transparent">
        <Link href="/" aria-label="Gleame home" className="flex shrink-0 items-center">
          <Logo />
        </Link>

        <div className="hidden flex-1 items-center gap-7 lg:flex lg:pl-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[14px] font-medium tracking-[-0.01em] transition-colors",
                pathname === link.href ? "text-ink" : "text-ink-3 hover:text-ink"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href="/contact" variant="secondary" size="sm" className="h-9 bg-white/70">
            Book a demo
          </ButtonLink>
          <ButtonLink href={SHOPIFY_URL} external size="sm" arrow className="h-9">
            Install on Shopify
          </ButtonLink>
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-box text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M4.5 4.5l11 11M15.5 4.5l-11 11" />
            ) : (
              <path d="M3 6.5h14M3 13.5h14" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <div className="frame frame-pad py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-line py-3.5 text-[15px] font-medium text-ink last:border-0"
              >
                {link.label}
                <span className="text-muted-2" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-2 pb-2 pt-4">
              <ButtonLink href="/contact" variant="secondary">
                Book a demo
              </ButtonLink>
              <ButtonLink href={SHOPIFY_URL} external>
                Install
              </ButtonLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
