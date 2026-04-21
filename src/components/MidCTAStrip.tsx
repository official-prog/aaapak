import { useState } from "react";
import { ArrowRight, CalendarClock, CheckCircle, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuoteFormDialog from "./QuoteFormDialog";
import ConsultationDialog from "./ConsultationDialog";

const guarantees = [
  { icon: <CheckCircle className="w-4 h-4" />, text: "3D Design Mockup" },
  { icon: <Shield className="w-4 h-4" />, text: "No Commitment Required" },
  { icon: <Clock className="w-4 h-4" />, text: "Quote in 24 Hours" },
  { icon: <CheckCircle className="w-4 h-4" />, text: "Guaranteed Cost Savings" },
];

const MidCTAStrip = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);

  return (
    <>
      <section className="py-20 md:py-24 bg-primary overflow-hidden relative">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        <div className="container text-center relative">
          {/* Urgency pill */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white text-xs font-semibold mb-5 tracking-wide uppercase">
            Join 300+ Brands — Free Quote Today
          </span>

          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 max-w-2xl mx-auto">
            Get Your Custom Quote in 24 Hours —{" "}
            <span className="underline decoration-white/40">No Commitment Required</span>
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            3D design mockup in 48 hours. Guaranteed 20–30% savings vs. local suppliers — or we'll match any verified quote.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <Button
              size="lg"
              variant="secondary"
              className="font-semibold text-base px-8"
              onClick={() => setQuoteOpen(true)}
            >
              Get Free Quote in 24 Hours <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold text-base border-white/30 text-white hover:bg-white/10 hover:text-white"
              onClick={() => setConsultOpen(true)}
            >
              <CalendarClock className="mr-2 w-4 h-4" />
              Schedule a Consultation
            </Button>
          </div>

          {/* Guarantee badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {guarantees.map((g) => (
              <div key={g.text} className="flex items-center gap-2 text-white/90 text-sm font-medium">
                <span className="text-white/70">{g.icon}</span>
                {g.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteFormDialog open={quoteOpen} onOpenChange={setQuoteOpen} productName="Custom Packaging" />
      <ConsultationDialog open={consultOpen} onOpenChange={setConsultOpen} />
    </>
  );
};

export default MidCTAStrip;
