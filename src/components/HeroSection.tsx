import heroBanner from "@/assets/hero-banner.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarClock, Star } from "lucide-react";
import { useState } from "react";
import QuoteFormDialog from "./QuoteFormDialog";
import ConsultationDialog from "./ConsultationDialog";

const HeroSection = () => {
  const [quoteOpen, setQuoteOpen]             = useState(false);
  const [consultOpen, setConsultOpen]         = useState(false);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="relative overflow-hidden min-h-[620px] md:min-h-[700px] flex items-center">
        {/* Banner as full background */}
        <img
          src={heroBanner}
          alt="Custom packaging product range by AAA Pak"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Left gradient overlay for text readability */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(253,240,220,0.97) 0%, rgba(253,240,220,0.92) 35%, rgba(253,240,220,0.5) 60%, transparent 80%)' }} />

        {/* Text content - left side */}
        <div className="relative container py-12 md:py-16">
          <div className="max-w-lg animate-fade-in-up">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-5 tracking-wide uppercase">
              Factory-Direct · No Broker Markup · USA & Canada
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[52px] font-black leading-[1.08] text-foreground">
              Premium Custom Packaging.<br />
              <span className="text-primary">30% Below Market Price.</span><br />
              Delivered in 15 Days.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-md">
              One team. One contact. Everything from design to delivery, without the broker taking 30% off the top.
            </p>
            <ul className="mt-5 space-y-2">
              {[
                "3D design mockup ready in 48 hours",
                "From 50 units, scale up as you grow",
                "Door-to-door shipping, USA & Canada",
              ].map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-base text-muted-foreground">
                  <span className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-primary" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="font-semibold text-base px-8" onClick={() => setQuoteOpen(true)}>
                Get Free Quote in 24 Hours <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="font-semibold text-base bg-white/60 backdrop-blur-sm" onClick={scrollToProducts}>
                Browse Products
              </Button>
            </div>
            {/* Schedule CTA */}
            <div className="mt-5">
              <Button
                size="lg"
                variant="outline"
                className="font-semibold text-base bg-white/60 backdrop-blur-sm"
                onClick={() => setConsultOpen(true)}
              >
                <CalendarClock className="mr-2 w-4 h-4" />
                Schedule a Consultation
              </Button>
            </div>
            {/* Trust bar */}
            <div className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="font-semibold text-foreground">4.8/5</span>
              <span>from 300+ brands across USA & Canada</span>
            </div>
          </div>
        </div>
      </section>
      <QuoteFormDialog open={quoteOpen} onOpenChange={setQuoteOpen} productName="Custom Packaging" />
      <ConsultationDialog open={consultOpen} onOpenChange={setConsultOpen} />
    </>
  );
};

export default HeroSection;
