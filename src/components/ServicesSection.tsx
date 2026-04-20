import svcCustomBoxes from "@/assets/svc-custom-boxes.png";
import svcEco from "@/assets/svc-eco.png";
import svcRetail from "@/assets/svc-retail.jpg";

const services = [
  {
    image: svcCustomBoxes,
    title: "Custom Boxes",
    desc: "Fully customized boxes in any shape, size, and print. From mailer boxes to rigid packaging, built to your exact specifications.",
  },
  {
    image: svcEco,
    title: "Eco-Friendly Packaging",
    desc: "100% recyclable and biodegradable packaging solutions. FSC-certified materials that protect your products and the planet.",
  },
  {
    image: svcRetail,
    title: "Retail Packaging",
    desc: "Shelf-ready retail packaging that makes your brand stand out. Custom printed cartons, displays, and POS packaging.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28 bg-card">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
          Packaging Solutions
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
            className="bg-secondary rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-primary/20"
          >
            <div className="h-52 overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-7">
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
