import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import indApparel       from "@/assets/ind-apparel.png";
import indBakery        from "@/assets/ind-bakery.jpg";
import indRetail2       from "@/assets/ind-retail2.jpg";
import indShipping      from "@/assets/ind-shipping.png";
import indCandle        from "@/assets/ind-candle.png";
import indCandy         from "@/assets/ind-candy.jpg";
import indTea           from "@/assets/ind-tea.png";
import indChocolate     from "@/assets/ind-chocolate.png";
import indCoffee        from "@/assets/ind-coffee.jpg";
import indWindow        from "@/assets/ind-window.png";
import indBeverage      from "@/assets/ind-beverage.jpg";
import indCosmetics2    from "@/assets/ind-cosmetics2.png";
import indEcommerce2    from "@/assets/ind-ecommerce2.png";
import indElectronics   from "@/assets/ind-electronics.jpg";
import indFood2         from "@/assets/ind-food2.jpg";
import indGift          from "@/assets/ind-gift.png";
import indJewelry3      from "@/assets/ind-jewelry3.png";
import indPets          from "@/assets/ind-pets.png";
import indPharma        from "@/assets/ind-pharma.png";
import indPresentations from "@/assets/ind-presentations.png";
import indSoap          from "@/assets/ind-soap.png";
import indRestaurant2   from "@/assets/ind-restaurant2.jpg";
import indWholesale2    from "@/assets/ind-wholesale2.png";
import indArtcrafts2    from "@/assets/ind-artcrafts2.png";
import indMailer2       from "@/assets/ind-mailer2.png";
import indInserts2      from "@/assets/ind-inserts2.png";
import indIndustrial    from "@/assets/ind-industrial.jpg";
import indLuxury        from "@/assets/ind-luxury.png";

const industries = [
  { name: "Apparel",           image: indApparel },
  { name: "Bakery & Cake",     image: indBakery },
  { name: "Retail",            image: indRetail2 },
  { name: "Shipping",          image: indShipping },
  { name: "Candle",            image: indCandle },
  { name: "Candy & Sweets",    image: indCandy },
  { name: "Tea",               image: indTea },
  { name: "Chocolate",         image: indChocolate },
  { name: "Coffee",            image: indCoffee },
  { name: "Window",            image: indWindow },
  { name: "Beverage",          image: indBeverage },
  { name: "Cosmetics",         image: indCosmetics2 },
  { name: "E-Commerce",        image: indEcommerce2 },
  { name: "Electronics",       image: indElectronics },
  { name: "Food",              image: indFood2 },
  { name: "Gift",              image: indGift },
  { name: "Jewelry",           image: indJewelry3 },
  { name: "Pets",              image: indPets },
  { name: "Pharmaceutical",    image: indPharma },
  { name: "Presentations",     image: indPresentations },
  { name: "Soap",              image: indSoap },
  { name: "Restaurant",        image: indRestaurant2 },
  { name: "Wholesale",         image: indWholesale2 },
  { name: "Art & Crafts",      image: indArtcrafts2 },
  { name: "Mailer & Shipping", image: indMailer2 },
  { name: "Inserts",           image: indInserts2 },
  { name: "Industrial",        image: indIndustrial },
  { name: "Luxury Packaging",  image: indLuxury },
];

const SCROLL_AMOUNT = 600;
const AUTO_SPEED = 1; // px per tick

const IndustriesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const tick = () => {
      if (!isPaused.current && el) {
        el.scrollLeft += AUTO_SPEED;
        // loop back to start when reaching halfway (duplicate list)
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
    };

    timerRef.current = window.setInterval(tick, 16);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const scrollLeft = () => {
    isPaused.current = true;
    scrollRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
    setTimeout(() => { isPaused.current = false; }, 1000);
  };

  const scrollRight = () => {
    isPaused.current = true;
    scrollRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
    setTimeout(() => { isPaused.current = false; }, 1000);
  };

  return (
    <section id="industries" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
            Industries
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Industries We Serve</h2>
          <p className="mt-4 text-muted-foreground text-lg">Tailored packaging solutions for every sector across North America.</p>
        </div>
      </div>

      <div className="relative px-10">
        {/* Left arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-border shadow-md rounded-full flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors duration-200"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Scrollable track */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseEnter={() => { isPaused.current = true; }}
          onMouseLeave={() => { isPaused.current = false; }}
        >
          {[...industries, ...industries].map((ind, i) => (
            <div
              key={`${ind.name}-${i}`}
              className="flex-shrink-0 w-48 bg-secondary rounded-xl border border-border p-4 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-full h-40 flex items-center justify-center mb-3 overflow-hidden rounded-lg">
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-sm font-bold text-foreground leading-snug">{ind.name}</p>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-border shadow-md rounded-full flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors duration-200"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default IndustriesSection;
