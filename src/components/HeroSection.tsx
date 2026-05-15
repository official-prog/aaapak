import heroBanner from "@/assets/hero-banner.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarClock, Star } from "lucide-react";
import { useState } from "react";
import QuoteFormDialog from "./QuoteFormDialog";
import ConsultationDialog from "./ConsultationDialog";

const WhatsAppSVG = () => (
  <svg viewBox="0 0 32 32" className="w-3.5 h-3.5 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 1C7.716 1 1 7.716 1 16c0 2.628.687 5.098 1.886 7.244L1 31l7.978-1.862A14.94 14.94 0 0016 31c8.284 0 15-6.716 15-15S24.284 1 16 1zm0 27.333a12.29 12.29 0 01-6.27-1.716l-.449-.267-4.736 1.107 1.13-4.617-.293-.474A12.26 12.26 0 013.667 16C3.667 9.189 9.189 3.667 16 3.667S28.333 9.189 28.333 16 22.811 28.333 16 28.333zm6.73-9.188c-.369-.184-2.184-1.078-2.522-1.201-.338-.123-.584-.184-.83.184-.245.369-.952 1.201-1.167 1.447-.215.245-.43.276-.799.092-.369-.184-1.558-.574-2.968-1.83-1.097-.978-1.838-2.185-2.053-2.554-.215-.369-.023-.568.162-.752.166-.165.369-.43.553-.645.184-.215.245-.369.369-.614.123-.245.061-.46-.031-.644-.092-.184-.83-2.001-1.137-2.739-.299-.719-.604-.621-.83-.633l-.706-.012c-.245 0-.645.092-.983.46-.338.369-1.29 1.262-1.29 3.078s1.321 3.571 1.505 3.816c.184.245 2.6 3.969 6.302 5.565.881.38 1.568.607 2.104.777.884.281 1.689.241 2.326.146.709-.105 2.184-.893 2.492-1.756.307-.862.307-1.601.215-1.756-.092-.153-.338-.245-.706-.43z"/>
  </svg>
);

const HeroSection = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);

  return (
    <>
      <section className="relative w-full overflow-hidden">
        <div className="relative min-h-[500px] sm:min-h-[560px] md:min-h-0 md:h-auto">

          {/* Banner image */}
          <img
            src={heroBanner}
            alt="Custom packaging product range by AAA Pak"
            className="absolute inset-0 w-full h-full object-cover object-right md:static md:inset-auto md:w-full md:h-auto md:object-contain"
            loading="eager"
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.97) 45%, rgba(255,255,255,0.80) 62%, rgba(255,255,255,0.2) 82%, transparent 100%)",
            }}
          />

          {/* Content overlay */}
          <div className="absolute inset-0 flex items-center pt-16 pb-6 sm:pt-20 sm:pb-8 md:pt-16 md:pb-8">
            <div className="container">
              <div className="w-[78%] sm:w-auto sm:max-w-[420px] md:max-w-[500px]">

                <span className="inline-block px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-semibold mb-2 sm:mb-3 tracking-wide uppercase">
                  Factory-Direct · USA & Canada
                </span>

                <h1 className="font-black text-foreground">
                  <span className="block text-xl sm:text-2xl md:text-3xl lg:text-[2.4rem] leading-tight">
                    Custom Packaging Sourcing
                  </span>
                  <span className="block text-xl sm:text-2xl md:text-3xl lg:text-[2.4rem] leading-tight text-primary mt-0.5 sm:mt-1 md:mt-2">
                    with Reliable Production Support
                  </span>
                </h1>

                <p className="mt-2 text-[11px] sm:text-sm md:text-base font-semibold text-foreground/80 leading-snug">
                  End-to-end custom packaging solutions supported by technical expertise, reliable production support, and optimized shipping.
                </p>

                <p className="mt-1 md:mt-2 text-xs text-muted-foreground max-w-sm hidden sm:block">
                  We help brands, distributors, and retailers source custom packaging through trusted manufacturing partners, cost-efficient overseas production, and clear support from concept to unboxing.
                </p>

                {/* CTAs */}
                <div className="mt-3 md:mt-4 space-y-2">
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 font-semibold text-[11px] sm:text-sm h-8 sm:h-9 md:h-10 px-3 md:px-5"
                      onClick={() => setQuoteOpen(true)}
                    >
                      Get a Free Quote <ArrowRight className="ml-1 w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 font-semibold text-[11px] sm:text-sm h-8 sm:h-9 md:h-10 px-3 md:px-5 bg-[#25D366] hover:bg-[#20b858] text-white border-0"
                      asChild
                    >
                      <a href="https://wa.me/16477788860" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5">
                        <WhatsAppSVG />
                        <span>WhatsApp</span>
                      </a>
                    </Button>
                  </div>

                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full font-semibold text-[11px] sm:text-sm h-8 sm:h-9 md:h-10 bg-white/80 px-3 md:px-5"
                    onClick={() => setConsultOpen(true)}
                  >
                    <CalendarClock className="mr-1.5 w-3.5 h-3.5 shrink-0" />
                    Schedule a Consultation
                  </Button>
                </div>

                {/* Rating */}
                <div className="mt-2.5 md:mt-4 flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="font-bold text-xs text-foreground">4.8/5</span>
                  <span className="text-[10px] sm:text-xs text-muted-foreground hidden sm:inline">· Trusted by 300+ brands</span>
                </div>

              </div>
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
