import { Hero } from "@/components/home/Hero";
import { LogoStrip } from "@/components/home/LogoStrip";
import { StudioSection } from "@/components/home/StudioSection";
import { Goals } from "@/components/home/Goals";
import { HowItWorks } from "@/components/home/HowItWorks";
import { AnalyticsBand } from "@/components/home/AnalyticsBand";
import { QuizTypes } from "@/components/home/QuizTypes";
import { StartPaths } from "@/components/home/StartPaths";
import { Reviews } from "@/components/home/Reviews";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <StudioSection />
      <Goals />
      <HowItWorks />
      <AnalyticsBand />
      <QuizTypes />
      <StartPaths />
      <Reviews />
      <FinalCTA />
    </>
  );
}
