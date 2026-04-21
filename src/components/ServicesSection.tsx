import { useState } from "react";
import { ArrowRight, Sprout, TrendingUp, Leaf } from "lucide-react";
import QuoteFormDialog from "./QuoteFormDialog";

const personas = [
  {
    icon: <Sprout className="w-6 h-6" />,
    badge: "50 unit MOQ",
    title: "Just Starting Out",
    body: "From 50 units with full 3D mockup included. Test a design before you commit to volume.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    badge: "500–10,000+ units",
    title: "Ready to Scale",
    body: "High-volume runs with dedicated account management, full QC inspection, and consistent delivery.",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    badge: "FSC · ASTM · Recyclable",
    title: "Eco-First Brands",
    body: "FSC-certified, biodegradable, and compostable options across every product line. Carbon-neutral shipping available.",
  },
];

const ServicesSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="services" className="py-20 md:py-28 bg-card">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
              Who We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Built for Every Stage of{" "}
              <span className="text-primary">Your Brand</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Whether you're launching or scaling, we have the right packaging solution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {personas.map((p) => (
              <div
                key={p.title}
                className="bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 flex flex-col p-7"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                  {p.icon}
                </div>

                {/* Badge */}
                <span className="inline-block self-start px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-bold tracking-wide mb-4">
                  {p.badge}
                </span>

                <h3 className="font-extrabold text-xl text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{p.body}</p>

                <button
                  onClick={() => setOpen(true)}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                >
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteFormDialog open={open} onOpenChange={setOpen} productName="Custom Packaging" />
    </>
  );
};

export default ServicesSection;
