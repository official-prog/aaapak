import procDesign from "@/assets/proc-design.jpg";
import procPrototype from "@/assets/proc-prototype.jpg";
import procQa from "@/assets/proc-qa.jpg";
import procProduction from "@/assets/proc-production.png";

const steps = [
  {
    image: procDesign,
    step: "01",
    tag: "Design",
    title: "Structural Design & Development",
    desc: "Share your vision — dimensions, materials, print. Our designers create mockups and 3D renders within 48 hours.",
    stat: "48h",
    statLabel: "First mockup",
  },
  {
    image: procPrototype,
    step: "02",
    tag: "Sample",
    title: "Prototyping & Free Sampling",
    desc: "We ship physical samples to your door before production. Touch it, test it, approve it — zero risk.",
    stat: "Free",
    statLabel: "Sampling",
  },
  {
    image: procQa,
    step: "03",
    tag: "Artwork",
    title: "Creative Artwork & Branding",
    desc: "Our design team applies your brand identity — Pantone colors, CMYK, UV coatings, foil stamping.",
    stat: "100%",
    statLabel: "Brand match",
  },
  {
    image: procProduction,
    step: "04",
    tag: "Delivery",
    title: "Production & USA/Canada Delivery",
    desc: "Factory-direct production with full tracking. Door-to-door delivery in 10–15 business days.",
    stat: "15d",
    statLabel: "Avg. delivery",
  },
];

const ProcessSection = () => (
  <section id="process" className="py-20 md:py-28 bg-card">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
          How It Works
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          From Idea to Your Door in <span className="text-primary">4 Simple Steps</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          No confusing process. No hidden fees. Just great packaging, delivered fast.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
        {steps.map((s, i) => (
          <div key={s.step} className="relative group">
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-[88px] left-[calc(50%+40px)] right-0 h-0.5 bg-gradient-to-r from-primary/40 to-primary/10 z-10" />
            )}

            <div className="mx-2 bg-background rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Step badge */}
                <div className="absolute top-3 left-3 bg-primary text-white text-xs font-extrabold px-2.5 py-1 rounded-full">
                  {s.tag}
                </div>
                {/* Stat pill */}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 text-center shadow">
                  <p className="text-base font-extrabold text-primary leading-none">{s.stat}</p>
                  <p className="text-[10px] text-muted-foreground">{s.statLabel}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="text-4xl font-extrabold text-primary/10 float-right leading-none">{s.step}</span>
                <h3 className="font-bold text-foreground text-sm leading-snug mb-2">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
