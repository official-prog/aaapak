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

const IndustriesSection = () => (
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

    <div className="relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee gap-4 w-max hover:[animation-play-state:paused]">
        {[...industries, ...industries].map((ind, i) => (
          <div
            key={`${ind.name}-${i}`}
            className="flex-shrink-0 w-36 md:w-44 bg-secondary rounded-xl border border-border p-3 text-center group"
          >
            <div className="w-full h-32 md:h-36 flex items-center justify-center mb-2 overflow-hidden rounded-lg">
              <img
                src={ind.image}
                alt={ind.name}
                loading="lazy"
                width={176}
                height={144}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs md:text-sm font-bold text-foreground leading-snug">{ind.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
