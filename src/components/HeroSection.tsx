import heroBanner from "@/assets/hero-banner.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Star } from "lucide-react";
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
            {/* Phone CTA */}
            <div className="mt-5">
              <a
                href="tel:18882288165"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/70 backdrop-blur-sm border border-primary/20 hover:bg-white/90 hover:border-primary/40 transition-all group"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </span>
                <span>
                  <span className="block text-base font-bold text-foreground tracking-wide">1888 228 8165</span>
                  <span className="block text-xs text-muted-foreground">Consult with our Experts · 9:30am – 5:00pm EST</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <QuoteFormDialog open={quoteOpen} onOpenChange={setQuoteOpen} productName="Custom Packaging" />
    </>
  );
};

export default HeroSection;
