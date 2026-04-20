import featureHighlight from "@/assets/feature-highlight.jpg";

const features = [
  { prefix: "UP TO", value: "30%", title: "Cost & production efficiency" },
  { prefix: "UP TO", value: "50%", title: "More sustainable packing material" },
  { prefix: "UP TO", value: "100%", title: "Reliable manufacturing & supply" },
  { prefix: "UP TO", value: "100%", title: "Strong brand presentation" },
];

const FeatureHighlightsSection = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container">
      <div className="grid gap-10 xl:grid-cols-[1.3fr_1fr] items-center">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-5">
            We deliver measurable packaging results that move your business forward.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Our process is built for efficiency, sustainability, and brand impact. These key performance areas are designed to help you save cost, reduce material waste, and strengthen your market presence.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={featureHighlight}
              alt="AAA Pak packaging solutions"
              loading="lazy"
              className="w-full h-56 object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-[32px] border border-border bg-card p-7 shadow-xl shadow-primary/5 hover:shadow-2xl transition-all duration-300">
              <div className="mb-4">
                <p className="text-sm md:text-base font-bold uppercase tracking-[0.32em] text-primary mb-2">{feature.prefix}</p>
                <p className="text-4xl md:text-5xl font-black text-foreground leading-none">{feature.value}</p>
              </div>
              <h3 className="text-base md:text-lg font-bold text-foreground leading-snug">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FeatureHighlightsSection;
