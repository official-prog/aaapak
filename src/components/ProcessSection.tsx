import procDesign from "@/assets/proc-design.jpg";
import procPrototype from "@/assets/proc-prototype.jpg";
import procQa from "@/assets/proc-qa.jpg";
import procProduction from "@/assets/proc-production.png";

const steps = [
  { image: procDesign,     step: "01", title: "Structural Design and Development",    desc: "Share your vision. Our designers create custom mockups and 3D renders to bring your ideas to life." },
  { image: procPrototype,  step: "02", title: "Prototyping & Sample Creation",  desc: "Receive physical samples to review quality, fit, and finish before committing." },
  { image: procQa,         step: "03", title: "Creative Artwork & Branding",   desc: "Our design team transforms concepts into visually striking packaging artwork that captures your brand's essence and captivates your audience." },
  { image: procProduction, step: "04", title: "Production & Delivery", desc: "AAA Pak delivers eco-friendly, customized packaging that helps businesses go green, building a sustainable future, one package at a time." },
];

const ProcessSection = () => (
  <section id="process" className="py-20 md:py-28 bg-card">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
          Services
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Our Simple 4-Step Process</h2>
        <p className="mt-4 text-muted-foreground text-lg">From idea to delivery, we make custom packaging effortless.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <div key={s.title} className="relative bg-secondary rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
            <div className="h-44 overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 relative">
              <span className="text-5xl font-extrabold text-primary/10 absolute top-2 right-4">{s.step}</span>
              <h3 className="font-heading font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border z-10" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
