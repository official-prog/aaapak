import { Shield, Truck, Award, Clock, DollarSign, Palette } from "lucide-react";

const benefits = [
  { icon: Shield, title: "Premium Quality", desc: "Rigorous quality control at every stage of production." },
  { icon: Truck, title: "Nationwide Shipping", desc: "Reliable delivery across USA & Canada with tracking." },
  { icon: Award, title: "FSC Certified", desc: "Sustainably sourced materials with full chain-of-custody." },
  { icon: Clock, title: "Fast Turnaround", desc: "10–15 business day production with rush options available." },
  { icon: DollarSign, title: "Competitive Pricing", desc: "Factory-direct pricing with no middleman markups." },
  { icon: Palette, title: "Expert Design Support", desc: "Professional designers help bring your vision to life with custom packaging solutions." },
];

const BenefitsSection = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
          Why Choose Us
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          The AAA Pak Advantage
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Everything you need for exceptional custom packaging, under one roof.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b) => (
          <div key={b.title} className="flex gap-4 bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
              <b.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-foreground mb-1">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
