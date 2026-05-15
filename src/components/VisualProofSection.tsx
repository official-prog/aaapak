import consultation from "@/assets/vp-consultation.png";
import actualProducts from "@/assets/vp-actual-products.png";
import printingPress from "@/assets/vp-printing-press.jpg";
import shippingNew from "@/assets/vp-shipping-new.png";

const steps = [
  {
    step: "01",
    label: "Consultation",
    desc: "Share your requirements and we'll guide you through material, size, and design options.",
    img: consultation,
    alt: "AAA Pak team consultation on custom packaging",
  },
  {
    step: "02",
    label: "Sampling",
    desc: "We produce physical samples for your review and approval before full production.",
    img: actualProducts,
    alt: "AAA Pak custom packaging sample review",
  },
  {
    step: "03",
    label: "Production",
    desc: "Your packaging is manufactured with quality checks at every stage of the process.",
    img: printingPress,
    alt: "AAA Pak offset printing press machine",
  },
  {
    step: "04",
    label: "Shipping",
    desc: "We handle logistics and delivery directly to your warehouse or fulfillment center.",
    img: shippingNew,
    alt: "AAA Pak warehouse shipping and fulfilment",
  },
];

const VisualProofSection = () => (
  <section id="visual-proof" className="py-20 md:py-28 bg-secondary overflow-hidden">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
          Simple Order Process
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          From Concept to <span className="text-primary">Unboxing</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          A simple and reliable order process for custom packaging.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
        {steps.map((s) => (
          <div
            key={s.label}
            className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
          >
            {/* Image */}
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img
                src={s.img}
                alt={s.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card body */}
            <div className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-extrabold text-primary leading-none">{s.step}</span>
                <h3 className="font-extrabold text-foreground text-base">{s.label}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VisualProofSection;
