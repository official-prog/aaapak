import valEco from "@/assets/eco-conscious-practices-1.jpg";
import valInnovation from "@/assets/creative-innovation-2.jpg";
import valTailored from "@/assets/tailored-solutions-3.jpg";
import valSupport from "@/assets/dedicated-support-4.jpg";

const values = [
  { image: valEco,        title: "Eco Commitment",    desc: "100% recyclable and biodegradable materials sourced responsibly from FSC-certified suppliers." },
  { image: valInnovation, title: "Design Innovation", desc: "Cutting-edge structural and graphic designs that make your brand stand out on shelves." },
  { image: valTailored,   title: "Tailored Solutions", desc: "Custom packaging built to your exact specifications, any shape, size, or finish." },
  { image: valSupport,    title: "Dedicated Support", desc: "End-to-end guidance from concept to delivery. Your dedicated account manager, every step." },
];

const EcoValuesSection = () => (
  <section id="why-us" className="py-20 md:py-28 bg-eco-light">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
          Our Values
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Why Choose AAA Pak?</h2>
        <p className="mt-4 text-muted-foreground text-lg">Values that drive every package we create.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((v) => (
          <div
            key={v.title}
            className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
          >
            <div className="overflow-hidden">
              <img
                src={v.image}
                alt={v.title}
                loading="lazy"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="font-heading font-bold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EcoValuesSection;
