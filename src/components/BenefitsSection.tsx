import { ArrowRight } from "lucide-react";
import featureImg from "@/assets/feature-highlight.jpg";
import { useState } from "react";
import QuoteFormDialog from "./QuoteFormDialog";

const reasons = [
  {
    stat: "30%",
    statSub: "lower cost",
    title: "Keep the Margin Your Broker Was Taking",
    desc: "We work directly with certified factories — you pay manufacturing cost, not an agency's 30–40% markup on top.",
  },
  {
    stat: "50",
    statSub: "unit MOQ",
    title: "Start from Just 50 Units",
    desc: "No forcing a 1,000-unit commitment. Test a new design, launch a small run, scale when you're ready.",
  },
  {
    stat: "1",
    statSub: "team",
    title: "One Team, Start to Finish",
    desc: "Design, sampling, production, and delivery — you deal with one person, not four vendors. Nothing falls through the gaps.",
  },
  {
    stat: "15d",
    statSub: "avg. delivery",
    title: "Delivered in 15 Business Days",
    desc: "10–15 days door-to-door across USA & Canada. Local brokers quote 4–8 weeks for the same order.",
  },
];

const BenefitsSection = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <section className="py-20 md:py-28 bg-secondary overflow-hidden">
        <div className="container">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
              Why AAA PAK
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Four Reasons 300+ Brands{" "}
              <span className="text-primary">Never Went Back</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Cheaper. Faster. Simpler. We built the supplier every brand wished existed.
            </p>
          </div>

          {/* 4 reason cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {reasons.map((r) => (
              <div key={r.title} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <div className="mb-4 pb-4 border-b border-border">
                  <p className="text-3xl font-extrabold text-primary leading-none">{r.stat}</p>
                  <p className="text-xs text-muted-foreground mt-1">{r.statSub}</p>
                </div>
                <h3 className="font-extrabold text-foreground text-sm leading-snug mb-2">{r.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>

          {/* Two-column split */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
                Stop Coordinating Four Vendors.<br />
                <span className="text-primary">We Handle All of It.</span>
              </h3>
              <p className="mt-4 text-muted-foreground text-lg max-w-md">
                One quote. One contact. One delivery. Your dedicated account manager knows your brand specs, your deadlines, and your budget — from the first call to the last shipment.
              </p>

              <button
                onClick={() => setQuoteOpen(true)}
                className="mt-8 inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right: image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={featureImg}
                  alt="AAA Pak factory production and custom packaging"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-primary text-white rounded-2xl px-5 py-4 shadow-xl">
                <p className="text-2xl font-extrabold leading-none">99%</p>
                <p className="text-xs text-white/80 mt-0.5">Satisfaction Rate</p>
              </div>
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-2xl px-5 py-4 shadow-xl">
                <p className="text-2xl font-extrabold text-primary leading-none">10K+</p>
                <p className="text-xs text-muted-foreground mt-0.5">Orders Shipped</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <QuoteFormDialog open={quoteOpen} onOpenChange={setQuoteOpen} productName="Custom Packaging" />
    </>
  );
};

export default BenefitsSection;
