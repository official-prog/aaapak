import ProductCard from "./ProductCard";
import corrugated from "@/assets/cat-corrugated.jpg";
import mailer from "@/assets/cat-mailer.jpg";
import rigid from "@/assets/cat-rigid.jpg";
import shoppingBag from "@/assets/cat-shopping-bag.jpg";
import pouch from "@/assets/cat-pouches.jpg";
import paperBag from "@/assets/cat-paper-bag.jpg";
import foldingCarton from "@/assets/cat-folding-carton.jpg";
import display from "@/assets/cat-display.jpg";
import inserts from "@/assets/cat-inserts.jpg";
import restaurants from "@/assets/cat-restaurants.jpg";
import qualityTesting from "@/assets/product-quality-testing.jpg";

const products = [
  { id: "product-corrugated-boxes", name: "Custom Corrugated Boxes", description: "Sturdy and durable packaging", image: corrugated },
  { id: "product-paper-bags", name: "Custom Paper Bags", description: "Recyclable and biodegradable", image: paperBag },
  { id: "product-mailer-boxes", name: "Custom Mailer Boxes", description: "Smart, secure, and stylish custom mailer bags", image: mailer },
  { id: "product-folding-cartons", name: "Custom Folding Cartons", description: "Premium and luxurious packaging", image: foldingCarton },
  { id: "product-rigid-boxes", name: "Custom Rigid Boxes", description: "Lightweight and tear-resistant", image: rigid },
  { id: "product-displays", name: "Custom Displays", description: "Cost-effective and waterproof", image: display },
  { id: "product-shopping-bags", name: "Custom Reusable Shopping Bag", description: "Eco-friendly tote bags that carry your brand further", image: shoppingBag },
  { id: "product-food-packaging", name: "Custom Food & Restaurant Packaging", description: "Give your customers more than just food, give them a complete experience", image: restaurants },
  { id: "product-pouches", name: "Custom Pouches", description: "Durable, lightweight, and fully customizable", image: pouch },
  { id: "product-inserts", name: "Custom Inserts", description: "Precision inserts for perfect protection", image: inserts },
  {
    id: "product-catalog",
    name: "Explore Our Full Catalog, Everything You Need, One Click Away",
    description: "Explore our full product range, specs, and custom options on our website.",
    image: qualityTesting,
    href: "https://aaapak.com/all-products/",
  },
];

const ProductsSection = () => (
  <section id="products" className="py-20 md:py-28 bg-background scroll-mt-28">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
          Our Products
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Explore Our Packaging Solutions</h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Premium custom packaging for every industry and brand need.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        {products.map((p) => (
          <div key={p.name} id={p.id} className="scroll-mt-32">
            <ProductCard name={p.name} description={p.description} image={p.image} href={p.href} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
