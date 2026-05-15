import { lazy, Suspense, useState, useEffect } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import QuoteFormDialog from "@/components/QuoteFormDialog";

const BenefitsSection = lazy(() => import("@/components/BenefitsSection"));
const IndustriesSection = lazy(() => import("@/components/IndustriesSection"));
const VisualProofSection = lazy(() => import("@/components/VisualProofSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const POPUP_KEY = "aaapak_popup_session_v3";

const shouldShowPopup = () => {
  try {
    return !sessionStorage.getItem(POPUP_KEY);
  } catch {
    return true;
  }
};

const Index = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    if (!shouldShowPopup()) return;
    const timer = setTimeout(() => {
      try { sessionStorage.setItem(POPUP_KEY, "1"); } catch {}
      setPopupOpen(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.slice(1);
    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else if (attempts < 15) {
        attempts++;
        setTimeout(tryScroll, 100);
      }
    };
    tryScroll();
  }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title="Custom Packaging Boxes | AAA Pak, USA & Canada"
        description="AAA Pak offers premium custom packaging, corrugated boxes, mailer bags, rigid boxes, retail packaging & more. Free design support. Ships across USA & Canada."
        canonical="https://www.aaapak.com/"
      />
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <Suspense fallback={null}>
          <BenefitsSection />
          <VisualProofSection />
          <IndustriesSection />
          <FAQSection />
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <WhatsAppButton />
      <QuoteFormDialog open={popupOpen} onOpenChange={setPopupOpen} productName="Custom Packaging" />
    </div>
  );
};

export default Index;
