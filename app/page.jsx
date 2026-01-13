import AboutUs from "@/components/AboutUs";
import BusinessFlowDiagram from "@/components/BusinessFlowDiagram";
import ClientsSection from "@/components/ClientsSection";
import Comparison from "@/components/Comparison";
import ComparisonSection from "@/components/ComparisonSection";
import ComparisonTable from "@/components/ComparisonTable";
import CompSection from "@/components/CompSection";
import FlowDiagram from "@/components/FlowDiagram";
import FlowSection from "@/components/FlowSection";
import FlowSection1 from "@/components/FlowSection1";
import FlowSection2 from "@/components/FlowSection2";
import Footer from "@/components/Footer";
import Footer1 from "@/components/Footer1";
import Hero from "@/components/hero/Hero";
import HeroSection from "@/components/HeroSection";
import HeroSection2 from "@/components/HeroSection2";
import LogoSection from "@/components/LogoSection";
import MT7FlowSection from "@/components/MT7FlowSection";
import Navbar from "@/components/Navbar";
import OurNetworkSection from "@/components/OurNetworkSection";
import Pricing from "@/components/Pricing";
import ProcessFlow from "@/components/ProcessFlow";
import ScrollToTop from "@/components/ScrollToTop";
import Services from "@/components/Services";
import Services2 from "@/components/Services2";
import Testimonials from "@/components/Testimonials";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      {/* <Hero />   */}
      {/* <HeroSection /> */}
      <HeroSection2 />
      {/* Logo Sections there are three files see which one is looking good*/}
      <LogoSection />
      <ClientsSection />
      {/* <OurNetworkSection /> */}
      {/* Flow Sections there are three files see which one is looking good*/}
      {/* <FlowSection2 /> */}
      <FlowSection1 />
      <FlowSection />
      {/* <BusinessFlowDiagram /> */}
      {/* <FlowDiagram /> */}

      {/* <MT7FlowSection />
      <ProcessFlow /> */}
      
      <AboutUs />
      <Services />
      
      {/* <Services2 /> */}
      <Pricing />

      
      {/* <ComparisonSection /> */}
      <Comparison />
      <ComparisonTable />
      <CompSection />

      <Testimonials />

      {/* Footers there are two files see which one is looking good*/}
      <Footer1 />
      {/* <Footer /> */}
      <ScrollToTop />
    </>
  );
};

export default page;
