import { ShoppingCart, UtensilsCrossed, Sparkles, Pill, Gift, Shirt } from "lucide-react";

const industries = [
  { icon: ShoppingCart, name: "E-Commerce" },
  { icon: UtensilsCrossed, name: "Food & Beverage" },
  { icon: Sparkles, name: "Cosmetics & Beauty" },
  { icon: Pill, name: "Health & Wellness" },
  { icon: Gift, name: "Gifting & Luxury" },
  { icon: Shirt, name: "Fashion & Apparel" },
];

const IndustriesSection = () => (
  <section id="industries" className="py-20 md:py-28 bg-card">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
          Industries
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Industries We Serve</h2>
        <p className="mt-4 text-muted-foreground text-lg">Tailored packaging solutions for every sector across North America.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
        {industries.map((ind) => (
          <div
            key={ind.name}
            className="bg-secondary rounded-xl border border-border p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer group"
          >
            <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-3 transition-colors">
              <ind.icon className="w-5 h-5 text-primary" />
            </div>
            <p className="text-sm font-semibold text-foreground">{ind.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
