import { Leaf, ShieldCheck, Award, Recycle, Globe, BadgeCheck } from "lucide-react";

const certifications = [
  {
    icon: Award,
    title: "FSC Certified",
    desc: "Responsibly sourced materials with full chain-of-custody.",
  },
  {
    icon: Leaf,
    title: "Biodegradable",
    desc: "100% biodegradable & compostable options across all product lines.",
  },
  {
    icon: Recycle,
    title: "100% Recyclable",
    desc: "Fully recyclable materials supporting circular economy standards.",
  },
  {
    icon: ShieldCheck,
    title: "ISO 9001",
    desc: "Quality management standards applied to every production run.",
  },
  {
    icon: Globe,
    title: "ASTM Compliant",
    desc: "ASTM D6400 certified compostable materials for food-grade packaging.",
  },
  {
    icon: BadgeCheck,
    title: "SGS Inspected",
    desc: "Third-party inspections ensure every batch meets global standards.",
  },
];

const CertificationsSection = () => (
  <section className="py-20 md:py-28 bg-foreground text-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
          Certifications
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-background">
          Built to <span className="text-primary">Industry Standards</span>
        </h2>
        <p className="mt-4 text-background/60 text-lg">
          Every product we ship meets rigorous international quality and sustainability certifications.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-background/10 rounded-2xl overflow-hidden border border-background/10">
        {certifications.map((c) => (
          <div
            key={c.title}
            className="flex flex-col items-center text-center gap-3 bg-foreground p-8 hover:bg-background/5 transition-colors duration-300"
          >
            <div className="w-14 h-14 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center mb-1">
              <c.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-background text-base">{c.title}</h3>
            <p className="text-sm text-background/50 leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
