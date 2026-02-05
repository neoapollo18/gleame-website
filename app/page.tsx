import { Hero } from "@/components/home/Hero";
import { LogoCloud } from "@/components/home/LogoCloud";
import { Features } from "@/components/home/Features";
import { CaseStudies } from "@/components/home/CaseStudies";
import { Testimonials } from "@/components/home/Testimonials";
import { UseCases } from "@/components/home/UseCases";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Features />
      <CaseStudies />
      <UseCases />
      <Testimonials />
      <CTA />
    </>
  );
}
