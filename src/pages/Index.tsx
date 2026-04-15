import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import EcoValuesSection from "@/components/EcoValuesSection";
import ProcessSection from "@/components/ProcessSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import IndustriesSection from "@/components/IndustriesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <EcoValuesSection />
      <ProcessSection />
      <BenefitsSection />
      <TestimonialsSection />
      <IndustriesSection />
      <FAQSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
