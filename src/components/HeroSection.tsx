import heroBanner from "@/assets/hero-banner.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { useState } from "react";
import QuoteFormDialog from "./QuoteFormDialog";

const HeroSection = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="relative overflow-hidden min-h-[520px] md:min-h-[600px] flex items-center">
        {/* Banner as full background */}
        <img
          src={heroBanner}
          alt="Custom packaging product range by AAA Pak"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Left gradient overlay for text readability */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(253,240,220,0.97) 0%, rgba(253,240,220,0.92) 35%, rgba(253,240,220,0.5) 60%, transparent 80%)' }} />

        {/* Text content - left side */}
        <div className="relative container py-16 md:py-24">
          <div className="max-w-lg animate-fade-in-up">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-5 tracking-wide uppercase">
              #1 Custom Packaging in North America
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black leading-[1.1] text-foreground text-balance">
              Create Custom Boxes & Packaging of Your Dreams
            </h1>
            <div className="mt-4 mb-4">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-primary uppercase tracking-wide">
                ONE STOP PACKAGING SOLUTION
              </p>
            </div>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-md">
              Order personalized, high-quality custom printed packaging and branded boxes your customers will love, all in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="font-semibold text-base px-8" onClick={() => setQuoteOpen(true)}>
                Request a Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="font-semibold text-base bg-white/60 backdrop-blur-sm" onClick={scrollToProducts}>
                Browse Products
              </Button>
            </div>
            {/* Trust bar */}
            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
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
    </>
  );
};

export default HeroSection;
