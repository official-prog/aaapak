import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah Mitchell", role: "Brand Manager, Luxe Beauty Co.", text: "AAA Pak transformed our brand perception. The custom rigid boxes are stunning and our unboxing experience has become a viral moment on social media." },
  { name: "James Torres", role: "Operations Lead, FreshFoods Inc.", text: "Reliable, eco-friendly, and beautifully designed. Our corrugated shipping boxes reduced product damage by 40% while looking incredible." },
  { name: "Lisa Kim", role: "Founder, Bloom Boutique", text: "The custom mailer boxes are a hit! Perfect print quality, fast delivery, and they feel as premium as they look. Our customers love the unboxing." },
  { name: "David Chen", role: "CEO, TechGear Pro", text: "We switched to AAA Pak for our electronics packaging and saw a 25% increase in positive reviews mentioning packaging quality. Game changer." },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28 bg-eco-warm">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">What Our Clients Say</h2>
        <p className="mt-4 text-muted-foreground text-lg">Join 300+ brands that trust AAA Pak for their packaging needs.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-xl border border-border p-7 hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed flex-1">"{t.text}"</p>
            <div>
              <p className="font-heading font-bold text-sm text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
