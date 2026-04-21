import { useState, useEffect } from "react";
import { ArrowRight, X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuoteFormDialog from "./QuoteFormDialog";

const StickyQuoteCTA = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!dismissed && window.scrollY > 600) {
        setVisible(true);
      } else if (window.scrollY <= 600) {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (dismissed || !visible) return <QuoteFormDialog open={quoteOpen} onOpenChange={setQuoteOpen} productName="Custom Packaging" />;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border shadow-2xl py-3 px-4 animate-slide-up">
        <div className="container max-w-4xl mx-auto flex items-center gap-4 flex-wrap">
          {/* Trust pills */}
          <div className="hidden md:flex items-center gap-4 flex-1">
            {["3D Mockup", "Quote in 24h", "No Commitment"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                <CheckCircle className="w-3.5 h-3.5 text-primary" />
                {t}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3 flex-1 justify-end">
            <div className="hidden sm:block text-sm">
              <span className="font-semibold text-foreground">Ready to save 20–30%?</span>
              <span className="text-muted-foreground"> Free quote in 24 hours.</span>
            </div>
            <Button
              size="sm"
              className="font-semibold whitespace-nowrap shrink-0"
              onClick={() => setQuoteOpen(true)}
            >
              Get Free Quote <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
            </Button>
            <button
              onClick={() => { setDismissed(true); setVisible(false); }}
              className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <QuoteFormDialog open={quoteOpen} onOpenChange={setQuoteOpen} productName="Custom Packaging" />
    </>
  );
};

export default StickyQuoteCTA;
