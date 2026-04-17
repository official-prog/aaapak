import galleryShipping from "@/assets/gallery-shipping.png";
import galleryPouches from "@/assets/gallery-pouches.png";
import galleryInsert2 from "@/assets/gallery-insert2.png";
import indPouches from "@/assets/ind-pouches.png";
import benefitsImg from "@/assets/benefits-img.png";
import restaurantClearCup from "@/assets/restaurant-clear-cup.jpg";
import restaurantPaperBowl from "@/assets/restaurant-paper-bowl.jpg";
import restaurantPaperCup from "@/assets/restaurant-paper-cup.jpg";
import restaurantPaperFoodBag from "@/assets/restaurant-paper-food-bag.jpg";
import restaurantPaperFoodBox from "@/assets/restaurant-paper-food-box.jpg";

const items = [
  { image: benefitsImg,           label: "Mailer Bags",                    desc: "Gold & metallic bubble mailers" },
  { image: galleryShipping,       label: "Shipping Bags",                  desc: "Durable poly mailer solutions" },
  { image: galleryPouches,        label: "Stand-Up Pouches",               desc: "Custom printed flexible pouches" },
  { image: indPouches,            label: "Liquid Spout Dispensing Pouch",  desc: "High-barrier packaging for food & cosmetics" },
  { image: galleryInsert2,        label: "Box Inserts",                    desc: "Precision-cut cardboard inserts" },
];

const restaurantItems = [
  { image: restaurantClearCup,     label: "Clear Cup",       desc: "Transparent cups for cold beverages" },
  { image: restaurantPaperBowl,    label: "Paper Bowl",      desc: "Eco-friendly bowls for hot & cold food" },
  { image: restaurantPaperCup,     label: "Paper Cup",       desc: "Custom printed paper cups" },
  { image: restaurantPaperFoodBag, label: "Paper Food Bag",  desc: "Branded bags for takeaway orders" },
  { image: restaurantPaperFoodBox, label: "Paper Food Box",  desc: "Sturdy boxes for meals on the go" },
];

const PackagingShowcaseSection = () => (
  <section className="py-20 md:py-28 bg-card overflow-hidden">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
          Showcase
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          Crafted for <span className="text-primary">Every Need</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          From flexible pouches to protective inserts, we make it all.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="group relative rounded-2xl overflow-hidden bg-secondary border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="h-52 overflow-hidden">
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-foreground text-sm">{item.label}</h3>
              <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
            Restaurant
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {restaurantItems.map((item) => (
            <div
              key={item.label}
              className="group relative rounded-2xl overflow-hidden bg-secondary border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-foreground text-sm">{item.label}</h3>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PackagingShowcaseSection;
