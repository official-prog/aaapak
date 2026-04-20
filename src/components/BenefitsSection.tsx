import { ArrowRight } from "lucide-react";
import featureImg from "@/assets/feature-highlight.jpg";
import { useState } from "react";
import QuoteFormDialog from "./QuoteFormDialog";

const stats = [
  { value: "20–30%", label: "Cost savings vs. local suppliers", color: "text-primary" },
  { value: "10–15", label: "Business days avg. turnaround", color: "text-primary" },
  { value: "300+", label: "Brands served across USA & Canada", color: "text-primary" },
  { value: "100%", label: "Free sampling before you commit", color: "text-primary" },
];

const pillars = [
  {
    num: "01",
    title: "Factory-Direct Pricing",
    desc: "We cut out the middleman — you pay manufacturing cost, not agency markup.",
  },
  {
    num: "02",
    title: "Low Minimum Orders",
    desc: "Start from as few as 50 units. Scale up as your brand grows.",
  },
  {
    num: "03",
    title: "End-to-End Support",
    desc: "Design, sampling, production, and delivery — one team handles everything.",
  },
  {
    num: "04",
    title: "FSC & Eco Certified",
    desc: "Sustainable materials that meet USA & Canada retail compliance standards.",
  },
];

const BenefitsSection = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <section className="py-20 md:py-28 bg-secondary overflow-hidden">
        <div className="container">
          {/* Section label */}
          <div className="mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
              Why AAA Pak
            </span>
          </div>

          {/* Two-column split */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                The Smarter Way to Source<br />
                <span className="text-primary">Custom Packaging</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-md">
                We work directly with certified factories — so you get premium quality at a fraction of typical agency prices.
              </p>

              {/* Stats row */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="bg-card rounded-xl border border-border p-4">
                    <p className={`text-2xl font-extrabold ${s.color}`}>{s.value}</p>
                    <p className="text-xs text-muted-foreground mt-1 leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Pillars */}
              <div className="mt-8 space-y-4">
                {pillars.map((p) => (
                  <div key={p.num} className="flex gap-4 items-start">
                    <span className="text-xs font-bold text-primary/50 mt-1 w-6 shrink-0">{p.num}</span>
                    <div>
                      <p className="font-bold text-foreground text-sm">{p.title}</p>
                      <p className="text-sm text-muted-foreground">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

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
