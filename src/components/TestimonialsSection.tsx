import { Star, Quote } from "lucide-react";

const brandLogos = [
  {
    name: "Luxe Beauty Co.",
    style: "font-serif italic font-bold text-rose-900 text-base tracking-tight",
    bg: "bg-rose-50 border-rose-100",
  },
  {
    name: "FRESHFOODS INC",
    style: "font-black text-xs tracking-[0.2em] uppercase text-emerald-800",
    bg: "bg-emerald-50 border-emerald-100",
  },
  {
    name: "Bloom Boutique",
    style: "font-light text-base tracking-widest text-violet-800",
    bg: "bg-violet-50 border-violet-100",
  },
  {
    name: "TECHGEAR PRO",
    style: "font-mono font-bold text-xs tracking-[0.15em] text-blue-900",
    bg: "bg-blue-50 border-blue-100",
  },
  {
    name: "MidWest Retail Group",
    style: "font-semibold text-sm tracking-wide text-slate-700",
    bg: "bg-slate-50 border-slate-200",
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Brand Manager",
    company: "Luxe Beauty Co.",
    logoStyle: "font-serif italic font-bold text-rose-900 text-sm tracking-tight",
    result: "28% cost saved",
    resultSub: "vs. previous supplier",
    text: "We cut packaging costs by 28% without sacrificing quality. AAA Pak's factory-direct model is the real deal — no middlemen, no surprises. Our rigid boxes look higher-end than boxes that cost us twice as much before.",
    stars: 5,
  },
  {
    name: "James Torres",
    role: "Operations Lead",
    company: "FreshFoods Inc.",
    logoStyle: "font-black text-[11px] tracking-[0.18em] uppercase text-emerald-800",
    result: "40% fewer returns",
    resultSub: "due to packaging damage",
    text: "Switched to AAA Pak's corrugated line after two bad suppliers. Product damage dropped 40% in 3 months. Their structural engineers actually solved our insert problem — something nobody else bothered to do.",
    stars: 5,
  },
  {
    name: "Lisa Kim",
    role: "Founder",
    company: "Bloom Boutique",
    logoStyle: "font-light text-sm tracking-widest text-violet-800",
    result: "3× more UGC",
    resultSub: "unboxing posts on social",
    text: "We tripled our unboxing content on Instagram within 60 days of switching. Customers literally film themselves opening our packages now. Free marketing, powered by great packaging.",
    stars: 5,
  },
  {
    name: "David Chen",
    role: "CEO",
    company: "TechGear Pro",
    logoStyle: "font-mono font-bold text-xs tracking-[0.15em] text-blue-900",
    result: "4.1→4.6 stars",
    resultSub: "Amazon rating in 90 days",
    text: "Our Amazon reviews went from 4.1 to 4.6 stars in 90 days. Customers kept praising the packaging — something they never mentioned before. That's what AAA Pak's quality does for your brand perception.",
    stars: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container">

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
          Real Results
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          Trusted by <span className="text-primary">300+ Brands</span> Across USA & Canada
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Hard numbers from real brands — not generic 5-star filler.
        </p>
      </div>

      {/* Brand logo strip */}
      <div className="bg-card border border-border rounded-2xl px-6 py-5 mb-12">
        <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-5">
          Brands that switched to AAA PAK
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-0 md:divide-x md:divide-border">
          {brandLogos.map((b) => (
            <div key={b.name} className={`px-6 py-3 rounded-lg md:rounded-none border md:border-0 ${b.bg} md:bg-transparent md:border-0`}>
              <span className={b.style}>{b.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured hero quote */}
      <div className="bg-primary rounded-2xl p-8 md:p-10 mb-10 relative overflow-hidden">
        <Quote className="absolute top-6 right-8 w-16 h-16 text-white/10" />
        <div className="relative max-w-3xl">
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-white text-white" />
            ))}
          </div>
          <p className="text-white text-xl md:text-2xl font-semibold leading-relaxed">
            "Switching to AAA Pak saved us $18,000 in our first year. Same product quality,
            direct factory pricing, and a team that actually answers the phone.
            I wish we found them three years earlier."
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <span className="text-white font-semibold text-sm tracking-wide">MRG</span>
            </div>
            <div>
              <p className="text-white font-bold">Michael R.</p>
              <p className="text-white/70 text-sm">Head of Supply Chain · <span className="font-semibold tracking-wide">MidWest Retail Group</span></p>
            </div>
            <div className="ml-auto text-right hidden sm:block shrink-0">
              <p className="text-2xl font-extrabold text-white">$18,000</p>
              <p className="text-white/70 text-xs">saved in year one</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4 result cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
          >
            {/* Result callout */}
            <div className="mb-4 pb-4 border-b border-border">
              <p className="text-2xl font-extrabold text-primary">{t.result}</p>
              <p className="text-xs text-muted-foreground">{t.resultSub}</p>
            </div>

            <div className="flex gap-1 mb-3">
              {Array.from({ length: t.stars }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
              ))}
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{t.text}"</p>

            <div className="mt-5 pt-4 border-t border-border">
              <span className={t.logoStyle}>{t.company}</span>
              <p className="text-xs text-muted-foreground mt-1">{t.name} · {t.role}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default TestimonialsSection;
