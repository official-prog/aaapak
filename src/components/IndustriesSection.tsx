import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import indApparel       from "@/assets/ind-apparel.png";
import indAutomotive    from "@/assets/ind-automotive.png";
import indBakery        from "@/assets/ind-bakery.png";
import indBeverage      from "@/assets/ind-beverage.png";
import indCandle        from "@/assets/ind-candle.png";
import indCandy         from "@/assets/ind-candy.png";
import indCannabis      from "@/assets/ind-cannabis.png";
import indChocolate     from "@/assets/ind-chocolate.png";
import indCoffee        from "@/assets/ind-coffee.png";
import indCosmetics     from "@/assets/ind-cosmetics.png";
import indEcommerce     from "@/assets/ind-ecommerce.png";
import indElectronics   from "@/assets/ind-electronics.png";
import indFood          from "@/assets/ind-food.png";
import indGame          from "@/assets/ind-game.png";
import indGifts         from "@/assets/ind-gifts.png";
import indJewelry       from "@/assets/ind-jewelry.png";
import indPetFood       from "@/assets/ind-petfood.png";
import indPharma        from "@/assets/ind-pharma.png";
import indPresentation  from "@/assets/ind-presentation.png";
import indRetail        from "@/assets/ind-retail.png";
import indShipping      from "@/assets/ind-shipping.png";
import indSoap          from "@/assets/ind-soap.png";
import indStationary    from "@/assets/ind-stationary.png";
import indSustainable   from "@/assets/ind-sustainable.png";
import indTea           from "@/assets/ind-tea.png";
import indTobacco       from "@/assets/ind-tobacco.png";
import indToys          from "@/assets/ind-toys.png";
import indWindow        from "@/assets/ind-window.png";

const industries = [
  { name: "Apparel",        image: indApparel },
  { name: "Automotive",     image: indAutomotive },
  { name: "Bakery & Cakes", image: indBakery },
  { name: "Beverage",       image: indBeverage },
  { name: "Candle",         image: indCandle },
  { name: "Candy & Sweets", image: indCandy },
  { name: "Cannabis",       image: indCannabis },
  { name: "Chocolate",      image: indChocolate },
  { name: "Coffee",         image: indCoffee },
  { name: "Cosmetics",      image: indCosmetics },
  { name: "E-Commerce",     image: indEcommerce },
  { name: "Electronics",    image: indElectronics },
  { name: "Food",           image: indFood },
  { name: "Game",           image: indGame },
  { name: "Gifts",          image: indGifts },
  { name: "Jewelry",        image: indJewelry },
  { name: "Pet Food",       image: indPetFood },
  { name: "Pharmaceutical", image: indPharma },
  { name: "Presentation",   image: indPresentation },
  { name: "Retail",         image: indRetail },
  { name: "Shipping",       image: indShipping },
  { name: "Soap",           image: indSoap },
  { name: "Stationary",     image: indStationary },
  { name: "Sustainable",    image: indSustainable },
  { name: "Tea",            image: indTea },
  { name: "Tobacco",        image: indTobacco },
  { name: "Toys",           image: indToys },
  { name: "Window",         image: indWindow },
];

const SCROLL_AMOUNT = 480;

const IndustriesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const isPaused = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let last = performance.now();
    const step = (now: number) => {
      const dt = now - last;
      last = now;
      if (!isPaused.current && el) {
        el.scrollLeft += (dt / 16) * 0.8;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
          el.scrollLeft = 0;
        }
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  const scrollLeft = () => {
    isPaused.current = true;
    scrollRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
    setTimeout(() => { isPaused.current = false; }, 800);
  };
  const scrollRight = () => {
    isPaused.current = true;
    scrollRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
    setTimeout(() => { isPaused.current = false; }, 800);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    isPaused.current = true;
    startX.current = e.pageX;
    scrollStart.current = scrollRef.current?.scrollLeft ?? 0;
    if (scrollRef.current) scrollRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    scrollRef.current.scrollLeft = scrollStart.current - (e.pageX - startX.current);
  };

  const stopDrag = () => {
    isDragging.current = false;
    isPaused.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  const onTouchStart = () => { isPaused.current = true; };
  const onTouchEnd   = () => { setTimeout(() => { isPaused.current = false; }, 1200); };

  return (
    <section id="industries" className="py-20 md:py-28 bg-card overflow-hidden">
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
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white border border-border shadow-md rounded-full flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors duration-200"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Scrollable track */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto select-none scrollbar-hide"
          style={{ cursor: "grab", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {[...industries, ...industries].map((ind, i) => (
            <div
              key={`${ind.name}-${i}`}
              className="flex-shrink-0 w-36 md:w-44 bg-secondary rounded-xl border border-border p-3 text-center hover:shadow-md hover:border-primary/30 transition-all duration-200"
            >
              <div className="w-full h-32 md:h-36 flex items-center justify-center mb-2 overflow-hidden rounded-lg">
                <img
                  src={ind.image}
                  alt={ind.name}
                  loading="lazy"
                  width={176}
                  height={144}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
              <p className="text-xs md:text-sm font-bold text-foreground leading-snug">{ind.name}</p>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white border border-border shadow-md rounded-full flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors duration-200"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default IndustriesSection;
