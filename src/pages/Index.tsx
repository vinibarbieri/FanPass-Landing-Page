
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import NftShowcase from "@/components/NftShowcase";
import CallToAction from "@/components/CallToAction";
import ClubPartners from "@/components/ClubPartners";
import StatsCounter from "@/components/StatsCounter";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  // Function to apply fade-in animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".animate-slide-up");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-background to-card">
      <Navbar />
      
      <HeroSection />
      
      <div id="benefits">
        <BenefitsSection />
      </div>

      <div id="showcase">
        <NftShowcase />
      </div>

      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      
      <StatsCounter />
      
      <ClubPartners />
      
      <CallToAction />
      
      <Footer />
      
      <Toaster />
    </main>
  );
};

export default Index;
