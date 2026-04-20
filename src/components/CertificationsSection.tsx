import { Leaf, ShieldCheck, Award, Recycle, Globe, BadgeCheck } from "lucide-react";

const certifications = [
  {
    icon: Award,
    title: "FSC Certified",
    desc: "Forest Stewardship Council chain-of-custody certified for responsibly sourced materials.",
  },
  {
    icon: Leaf,
    title: "Biodegradable Materials",
    desc: "100% biodegradable and compostable packaging options available across all product lines.",
  },
  {
    icon: Recycle,
    title: "100% Recyclable",
    desc: "All packaging materials are fully recyclable, supporting circular economy standards.",
  },
  {
    icon: ShieldCheck,
    title: "ISO 9001 Quality",
    desc: "ISO 9001 quality management standards applied to every production run.",
  },
  {
    icon: Globe,
    title: "ASTM Compliant",
    desc: "ASTM D6400 certified compostable materials for food-grade and retail packaging.",
  },
  {
    icon: BadgeCheck,
    title: "SGS Inspected",
    desc: "Third-party SGS quality inspections ensure every batch meets international standards.",
  },
];

const CertificationsSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
          Certifications
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          Built to <span className="text-primary">Industry Standards</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Every product we ship meets rigorous international quality and sustainability certifications.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((c) => (
          <div
            key={c.title}
            className="flex gap-4 bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
              <c.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-foreground mb-1">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
