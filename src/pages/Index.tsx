import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import KeywordsSection from "@/components/KeywordsSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import EcoValuesSection from "@/components/EcoValuesSection";
import ProcessSection from "@/components/ProcessSection";
import BenefitsSection from "@/components/BenefitsSection";
import FeatureHighlightsSection from "@/components/FeatureHighlightsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import IndustriesSection from "@/components/IndustriesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      <HeroSection />
      <KeywordsSection />
      <FeatureHighlightsSection />
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
    <WhatsAppButton />
  </div>
);

export default Index;
