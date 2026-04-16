import corrugated from "@/assets/product-corrugated.png";
import mailer from "@/assets/product-mailer.png";
import rigid from "@/assets/product-rigid.png";
import shoppingBag from "@/assets/product-shopping-bag.png";
import pouch from "@/assets/product-pouch.png";
import paperBag from "@/assets/product-paper-bag.png";
import foldingCarton from "@/assets/product-folding-carton.png";
import display from "@/assets/product-display.png";

const industries = [
  { name: "E-Commerce", image: mailer },
  { name: "Food & Beverage", image: pouch },
  { name: "Cosmetics & Beauty", image: rigid },
  { name: "Health & Wellness", image: foldingCarton },
  { name: "Gifting & Luxury", image: display },
  { name: "Fashion & Apparel", image: shoppingBag },
  { name: "Electronics", image: corrugated },
  { name: "Toys & Games", image: display },
  { name: "Books & Media", image: corrugated },
  { name: "Home & Garden", image: shoppingBag },
  { name: "Sports & Outdoors", image: pouch },
  { name: "Automotive", image: foldingCarton },
  { name: "Pet Supplies", image: paperBag },
  { name: "Office Supplies", image: mailer },
  { name: "Medical Devices", image: rigid },
  { name: "Pharmaceuticals", image: pouch },
  { name: "Wine & Spirits", image: rigid },
  { name: "Jewelry", image: display },
  { name: "Art & Crafts", image: paperBag },
  { name: "Industrial", image: corrugated },
  { name: "Retail", image: shoppingBag },
  { name: "Wholesale", image: foldingCarton },
];

const IndustriesSection = () => {
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

    {/* Infinite auto-scroll marquee */}
    <div className="overflow-hidden">
      <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused]">
        {[...industries, ...industries].map((ind, i) => (
          <div
            key={`${ind.name}-${i}`}
            className="flex-shrink-0 w-36 bg-secondary rounded-xl border border-border p-5 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer group"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-3 transition-colors overflow-hidden">
              <img
                src={ind.image}
                alt={ind.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-xs font-semibold text-foreground leading-snug">{ind.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default IndustriesSection;
