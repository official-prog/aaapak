import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuoteFormDialog from "./QuoteFormDialog";

const MidCTAStrip = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <section className="py-20 md:py-24 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Design Your Packaging?
          </h2>
          <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Get a free custom quote in 24 hours. No commitment required.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="font-semibold text-base px-8"
            onClick={() => setQuoteOpen(true)}
          >
            Get a Free Quote <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
      <QuoteFormDialog open={quoteOpen} onOpenChange={setQuoteOpen} productName="Custom Packaging" />
    </>
  );
};

export default MidCTAStrip;
