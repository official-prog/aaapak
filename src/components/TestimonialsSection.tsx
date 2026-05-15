import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Brand Manager",
    text: "Our packaging has very specific brand colors and we were worried about accuracy. AAA Pak matched our references exactly. The finished boxes looked precisely how we wanted, and our retail buyers noticed the difference right away.",
    stars: 5,
  },
  {
    name: "James T.",
    role: "Operations Lead",
    text: "We had a tight deadline for a product launch and AAA Pak delivered on time without any last-minute issues. That dependability is what made us place a second order immediately after receiving the first.",
    stars: 5,
  },
  {
    name: "Lisa K.",
    role: "Founder",
    text: "We sell through multiple retail channels and needed consistent packaging across all of them. AAA Pak kept our artwork and specs on file. Every reorder came out exactly matching the previous batch, with no variation between runs.",
    stars: 5,
  },
  {
    name: "David C.",
    role: "CEO",
    text: "The price quoted is the price we paid. No unexpected fees added at invoicing. We have worked with other suppliers where the final number always differed from the estimate, so the straightforward pricing here was a welcome change.",
    stars: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-12 md:py-28 bg-secondary">
    <div className="container">

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-6 md:mb-10">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3 tracking-wide uppercase">
          Client Feedback
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-foreground">
          What Our <span className="text-primary">Clients Say</span>
        </h2>
        <p className="mt-2 md:mt-4 text-muted-foreground text-base md:text-lg">
          Feedback from brands who have completed orders with AAA Pak.
        </p>
      </div>

      {/* Featured quote */}
      <div className="bg-primary rounded-2xl p-5 sm:p-8 md:p-10 mb-5 md:mb-10 relative overflow-hidden">
        <Quote className="absolute top-6 right-8 w-16 h-16 text-white/10" />
        <div className="relative max-w-3xl">
          <div className="flex gap-1 mb-3 md:mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-white text-white" />
            ))}
          </div>
          <p className="text-white text-sm sm:text-xl md:text-2xl font-semibold leading-relaxed">
            "We switched to AAA Pak after struggling with inconsistent quality from our previous supplier. Every batch since has come out exactly to spec. When you are managing packaging across multiple product lines, that consistency makes a real difference to your operations."
          </p>
          <div className="mt-4 md:mt-6 flex items-center gap-3 md:gap-4">
            <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <span className="text-white font-semibold text-xs md:text-sm">MR</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm md:text-base">Michael R.</p>
              <p className="text-white/70 text-xs md:text-sm">Head of Supply Chain</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4 testimonial cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-card rounded-2xl border border-border p-4 sm:p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
          >
            <div className="flex gap-1 mb-3 md:mb-4">
              {Array.from({ length: t.stars }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
              ))}
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">"{t.text}"</p>

            <div className="mt-4 pt-3 md:pt-4 border-t border-border">
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default TestimonialsSection;
