import { PenTool, Box, CheckCircle, Factory } from "lucide-react";

const steps = [
  { icon: PenTool, step: "01", title: "Design & Concept", desc: "Share your vision — our designers create custom mockups and 3D renders to bring your ideas to life." },
  { icon: Box, step: "02", title: "Sample & Prototype", desc: "Receive physical samples to review quality, fit, and finish before committing." },
  { icon: CheckCircle, step: "03", title: "Quality Assurance", desc: "Rigorous multi-point inspection ensures every detail meets our premium standards." },
  { icon: Factory, step: "04", title: "Production & Delivery", desc: "Scaled manufacturing with reliable shipping across USA & Canada in 10–15 days." },
];

const ProcessSection = () => (
  <section id="process" className="py-20 md:py-28 bg-card">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
          How It Works
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Our Simple 4-Step Process</h2>
        <p className="mt-4 text-muted-foreground text-lg">From idea to delivery — we make custom packaging effortless.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <div key={s.title} className="relative bg-secondary rounded-xl border border-border p-7 hover:shadow-lg transition-shadow duration-300">
            <span className="text-5xl font-extrabold text-primary/10 absolute top-4 right-5">{s.step}</span>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
