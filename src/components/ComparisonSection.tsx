import { Check, X } from "lucide-react";
import { useState } from "react";
import QuoteFormDialog from "./QuoteFormDialog";
import { ArrowRight } from "lucide-react";

const rows = [
  {
    label: "Pricing model",
    aaa: "Factory-direct, you pay cost price",
    dist: "Catalog pricing, markups applied",
  },
  {
    label: "Minimum order",
    aaa: "From 100 units, varies by product",
    dist: "500–2,000+ units",
  },
  {
    label: "3D design mockup included",
    aaa: true,
    dist: false,
  },
  {
    label: "Custom design & artwork",
    aaa: true,
    dist: "Extra charge",
  },
  {
    label: "Turnaround time",
    aaa: "15–25 business days",
    dist: "4–8 weeks",
  },
  {
    label: "Dedicated account manager",
    aaa: true,
    dist: "Shared support only",
  },
  {
    label: "Structural engineering",
    aaa: true,
    dist: false,
  },
  {
    label: "Physical sample available",
    aaa: true,
    dist: false,
  },
  {
    label: "Quality inspection",
    aaa: "Strict QC before shipment",
    dist: "Varies by factory",
  },
  {
    label: "USA & Canada delivery",
    aaa: true,
    dist: "Varies by supplier",
  },
  {
    label: "In-house printing",
    aaa: true,
    dist: false,
  },
  {
    label: "Get free quote",
    aaa: true,
    dist: false,
  },
];

type CellValue = boolean | string;

const Cell = ({ value, highlight }: { value: CellValue; highlight?: boolean }) => {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full ${highlight ? "bg-white/20" : "bg-primary/10"}`}>
          <Check className={`w-4 h-4 ${highlight ? "text-white" : "text-primary"}`} />
        </span>
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex justify-center">
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-50">
          <X className="w-4 h-4 text-red-400" />
        </span>
      </div>
    );
  }
  return (
    <p className={`text-sm text-center leading-snug ${highlight ? "text-white font-medium" : "text-muted-foreground"}`}>
      {value}
    </p>
  );
};

const ComparisonSection = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
              Side by Side
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              What You Get With AAA Pak{" "}
              <span className="text-primary">vs. Other Packaging Companies</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Many companies offer custom boxes. See how the service, support, and features compare.
            </p>
          </div>

          {/* Table, desktop */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-border shadow-lg">
            {/* Header row */}
            <div className="grid grid-cols-3 bg-foreground items-stretch">
              <div className="p-5 flex flex-col items-center justify-center">
                <p className="text-white/80 font-bold text-center">Features</p>
                <p className="text-white/40 text-xs mt-0.5 text-center">What We Offer</p>
              </div>
              <div className="p-5 bg-primary flex flex-col items-center justify-center gap-1.5">
                <span className="bg-white text-primary text-[10px] font-extrabold px-3 py-1 rounded-full shadow border border-primary/20 uppercase tracking-wide whitespace-nowrap">
                  Best Choice
                </span>
                <p className="text-white font-extrabold text-center text-lg">AAA Pak</p>
                <p className="text-white/70 text-xs text-center">Factory-Direct</p>
              </div>
              <div className="p-5 flex flex-col justify-center">
                <p className="text-white/80 font-bold text-center">Other Packaging Companies</p>
                <p className="text-white/40 text-xs text-center mt-0.5">Standard Suppliers</p>
              </div>
            </div>

            {/* Data rows */}
            {rows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-background"}`}
              >
                <div className="p-4 flex items-center">
                  <p className="text-sm font-semibold text-foreground">{row.label}</p>
                </div>
                <div className="p-4 bg-primary/5 border-x border-primary/20 flex items-center justify-center">
                  <Cell value={row.aaa} />
                </div>
                <div className="p-4 flex items-center justify-center">
                  <Cell value={row.dist} />
                </div>
              </div>
            ))}

            {/* Footer CTA row */}
            <div className="grid grid-cols-3 border-t border-border bg-card">
              <div className="p-5" />
              <div className="p-5 bg-primary flex items-center justify-center">
                <button
                  onClick={() => setQuoteOpen(true)}
                  className="inline-flex items-center gap-2 bg-white text-primary font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-white/90 transition-colors"
                >
                  Get Free Quote <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="p-5 flex items-center justify-center">
                <p className="text-xs text-muted-foreground text-center">Catalog pricing<br/>Limited service</p>
              </div>
            </div>
          </div>

          {/* Mobile: stacked cards */}
          <div className="md:hidden space-y-4">
            {/* AAA Pak highlight card */}
            <div className="bg-primary rounded-2xl p-6 relative overflow-hidden">
              <span className="absolute top-3 right-3 bg-white text-primary text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wide">
                Best Choice
              </span>
              <p className="text-white font-extrabold text-xl mb-1">AAA Pak</p>
              <p className="text-white/70 text-xs mb-5">Factory-Direct Supplier</p>
              <div className="space-y-3">
                {rows.map((row) => (
                  <div key={row.label} className="flex items-start justify-between gap-3">
                    <p className="text-white/80 text-sm shrink-0">{row.label}</p>
                    <div className="text-right">
                      {row.aaa === true ? (
                        <Check className="w-4 h-4 text-white ml-auto" />
                      ) : (
                        <p className="text-white text-sm font-medium">{row.aaa as string}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setQuoteOpen(true)}
                className="mt-6 w-full bg-white text-primary font-bold py-3 rounded-xl text-sm hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
              >
                Get Free Quote <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Competitor summary */}
            <div className="bg-card border border-border rounded-2xl p-5">
              <p className="font-bold text-foreground mb-4">vs. Other Options</p>
              <div className="p-3 bg-muted rounded-xl border border-border">
                <p className="text-sm font-bold text-foreground mb-1">Other Packaging Companies</p>
                <p className="text-xs text-muted-foreground">Catalog pricing · 500+ unit MOQ · 4–8 week turnaround · No 3D mockup · No structural engineering</p>
              </div>
            </div>
          </div>

          {/* Bottom proof line */}
          <p className="text-center text-sm text-muted-foreground mt-10">
            Brands across USA & Canada choose AAA Pak for a complete, managed packaging experience.{" "}
            <button onClick={() => setQuoteOpen(true)} className="text-primary font-semibold hover:underline">
              Get a quote today →
            </button>
          </p>
        </div>
      </section>

      <QuoteFormDialog open={quoteOpen} onOpenChange={setQuoteOpen} productName="Custom Packaging" />
    </>
  );
};

export default ComparisonSection;
