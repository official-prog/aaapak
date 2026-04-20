import { ArrowRight } from "lucide-react";
import svcCustomBoxes from "@/assets/svc-custom-boxes.png";
import svcEco from "@/assets/svc-eco.png";
import svcRetail from "@/assets/svc-retail.jpg";

const services = [
  {
    image: svcCustomBoxes,
    tag: "Most Popular",
    title: "Custom Boxes",
    desc: "Fully customized boxes in any shape, size, and print. From mailer boxes to rigid packaging — built to exact spec.",
    bullets: ["Any shape & size", "CMYK / Pantone / UV print", "From 50 units"],
  },
  {
    image: svcEco,
    tag: "Eco-Friendly",
    title: "Sustainable Packaging",
    desc: "100% recyclable and biodegradable options. FSC-certified materials for brands that care about the planet.",
    bullets: ["FSC certified materials", "Biodegradable & compostable", "Carbon-neutral shipping option"],
  },
  {
    image: svcRetail,
    tag: "Retail Ready",
    title: "Retail Packaging",
    desc: "Shelf-ready packaging that makes your brand stand out at point of sale. Custom cartons, displays, and POS.",
    bullets: ["Shelf-ready design", "POS displays & inserts", "Retail compliance standards"],
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28 bg-card">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
          What We Build
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          Your Best Solution for <span className="text-primary">Custom Packaging</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Factory-direct. Brand-first. No middlemen.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 group flex flex-col"
          >
            {/* Image with tag */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                {s.tag}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-extrabold text-xl text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>

              {/* Bullets */}
              <ul className="space-y-1.5 mb-6 flex-1">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-4 h-4 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <svg className="w-2.5 h-2.5 text-primary" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <a
                href="#products"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
              >
                See products <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
