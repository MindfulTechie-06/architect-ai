import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { ServicesSection } from "@/components/ServicesSection";
import { HowItWorks } from "@/components/HowItWorks";
import { CaseStudies } from "@/components/CaseStudies";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <HowItWorks />
        <CaseStudies />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
