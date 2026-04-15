import heroImg from "@/assets/hero-packaging.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-secondary">
    <div className="container grid md:grid-cols-2 gap-8 items-center py-16 md:py-24 lg:py-32">
      <div className="max-w-xl animate-fade-in-up">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-5 tracking-wide uppercase">
          #1 Custom Packaging in North America
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black leading-[1.1] text-foreground text-balance">
          Create Custom Boxes & Packaging of Your Dreams
        </h1>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-md">
          Order personalized, high-quality custom printed packaging and branded boxes your customers will love — all in one place.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button size="lg" className="font-semibold text-base px-8">
            Request a Quote <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="font-semibold text-base">
            Browse Products
          </Button>
        </div>
        {/* Trust bar */}
        <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>
          <span className="font-semibold text-foreground">4.8/5</span>
          <span>from 3,000+ brands across USA & Canada</span>
        </div>
      </div>

      <div className="relative flex justify-center" style={{ animationDelay: "0.2s" }}>
        <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={heroImg}
            alt="Collection of custom packaging boxes including kraft mailers, rigid boxes, and printed cartons by AAAPAK"
            width={1280}
            height={800}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
