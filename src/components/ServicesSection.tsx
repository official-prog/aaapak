import { Box, Leaf, ShoppingBag } from "lucide-react";

const services = [
  {
    icon: Box,
    title: "Custom Boxes",
    desc: "Fully customized boxes in any shape, size, and print. From mailer boxes to rigid packaging — built to your exact specifications.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Packaging",
    desc: "100% recyclable and biodegradable packaging solutions. FSC-certified materials that protect your products and the planet.",
  },
  {
    icon: ShoppingBag,
    title: "Retail Packaging",
    desc: "Shelf-ready retail packaging that makes your brand stand out. Custom printed cartons, displays, and POS packaging.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28 bg-card">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
          Our Services
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          Your Best Solution for <span className="text-primary">Custom Packaging</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Never worry about going to multiple sources to get your dream packaging.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-secondary rounded-xl p-8 hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-primary/20"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center mb-6 transition-colors duration-300">
              <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
