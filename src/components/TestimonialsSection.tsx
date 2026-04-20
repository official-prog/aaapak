import { Star, Quote } from "lucide-react";

const industries = [
  "Beauty & Cosmetics", "Food & Beverage", "E-Commerce", "Electronics",
  "Apparel & Fashion", "Health & Wellness", "Jewelry", "Pet Products",
  "Candles & Home", "Subscription Boxes",
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Brand Manager",
    company: "Luxe Beauty Co.",
    initials: "LB",
    color: "bg-pink-100 text-pink-700",
    result: "28% cost saved",
    resultSub: "vs. previous supplier",
    text: "We cut packaging costs by 28% without sacrificing quality. AAA Pak's factory-direct model is the real deal — no middlemen, no surprises. Our rigid boxes look higher-end than boxes that cost us twice as much before.",
    stars: 5,
  },
  {
    name: "James Torres",
    role: "Operations Lead",
    company: "FreshFoods Inc.",
    initials: "FF",
    color: "bg-green-100 text-green-700",
    result: "40% fewer returns",
    resultSub: "due to packaging damage",
    text: "Switched to AAA Pak's corrugated line after two bad suppliers. Product damage dropped 40% in 3 months. Their structural engineers actually solved our insert problem — something nobody else bothered to do.",
    stars: 5,
  },
  {
    name: "Lisa Kim",
    role: "Founder",
    company: "Bloom Boutique",
    initials: "BB",
    color: "bg-purple-100 text-purple-700",
    result: "3× more UGC",
    resultSub: "unboxing posts on social",
    text: "We tripled our unboxing content on Instagram within 60 days of switching. Customers literally film themselves opening our packages now. Free marketing, powered by great packaging.",
    stars: 5,
  },
  {
    name: "David Chen",
    role: "CEO",
    company: "TechGear Pro",
    initials: "TG",
    color: "bg-blue-100 text-blue-700",
    result: "25% better reviews",
    resultSub: "mentioning packaging quality",
    text: "Our Amazon reviews went from 4.1 to 4.6 stars in 90 days. Customers kept praising the packaging — something they never mentioned before. That's what AAA Pak's quality does for your brand perception.",
    stars: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container">

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
          Social Proof
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          Trusted by <span className="text-primary">300+ Brands</span> Across USA & Canada
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Real results from real brands — not generic reviews.
        </p>
      </div>

      {/* Industry trust bar */}
      <div className="flex flex-wrap justify-center gap-2 mb-14">
        {industries.map((ind) => (
          <span
            key={ind}
            className="px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium text-muted-foreground"
          >
            {ind}
          </span>
        ))}
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
            <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center text-white font-extrabold text-sm">
              MR
            </div>
            <div>
              <p className="text-white font-bold">Michael R.</p>
              <p className="text-white/70 text-sm">Head of Supply Chain, MidWest Retail Group</p>
            </div>
            <div className="ml-auto text-right hidden sm:block">
              <p className="text-2xl font-extrabold text-white">$18K</p>
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

            <div className="mt-5 flex items-center gap-3">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-extrabold shrink-0 ${t.color}`}>
                {t.initials}
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default TestimonialsSection;
