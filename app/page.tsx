import { Hero } from "@/components/home/Hero";
import { LogoCloud } from "@/components/home/LogoCloud";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Features } from "@/components/home/Features";
import { TryOn } from "@/components/home/TryOn";
import { Testimonials } from "@/components/home/Testimonials";
import { UseCases } from "@/components/home/UseCases";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <HowItWorks />
      <Features />
      <TryOn />
      <UseCases />
      <Testimonials />
      <CTA />
    </>
  );
}
