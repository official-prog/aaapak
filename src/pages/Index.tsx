import { lazy, Suspense, useState, useEffect } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyQuoteCTA from "@/components/StickyQuoteCTA";
import QuoteFormDialog from "@/components/QuoteFormDialog";

const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const BenefitsSection = lazy(() => import("@/components/BenefitsSection"));
const CertificationsSection = lazy(() => import("@/components/CertificationsSection"));
const StatsBarSection = lazy(() => import("@/components/StatsBarSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const IndustriesSection = lazy(() => import("@/components/IndustriesSection"));
const MidCTAStrip = lazy(() => import("@/components/MidCTAStrip"));
const PackagingShowcaseSection = lazy(() => import("@/components/PackagingShowcaseSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const POPUP_KEY = "aaapak_quote_popup_v2";

const shouldShowPopup = () => {
  try {
    const stored = localStorage.getItem(POPUP_KEY);
    if (!stored) return true;
    const lastShown = parseInt(stored, 10);
    return Date.now() - lastShown > 24 * 60 * 60 * 1000;
  } catch {
    return true;
  }
};

const Index = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    if (!shouldShowPopup()) return;
    const timer = setTimeout(() => {
      try { localStorage.setItem(POPUP_KEY, String(Date.now())); } catch {}
      setPopupOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title="Custom Packaging Boxes | AAA PAK — USA & Canada"
        description="AAA PAK offers premium custom packaging — corrugated boxes, mailer bags, rigid boxes, retail packaging & more. Free design support. Ships across USA & Canada."
        canonical="https://www.aaapak.com/"
      />
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <Suspense fallback={null}>
          <ServicesSection />
          <ProcessSection />
          <BenefitsSection />
          <CertificationsSection />
          <StatsBarSection />
          <TestimonialsSection />
          <IndustriesSection />
          <MidCTAStrip />
          <PackagingShowcaseSection />
          <FAQSection />
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <WhatsAppButton />
      <StickyQuoteCTA />
      <QuoteFormDialog open={popupOpen} onOpenChange={setPopupOpen} productName="Custom Packaging" />
    </div>
  );
};

export default Index;
