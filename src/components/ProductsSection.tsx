import ProductCard from "./ProductCard";
import corrugated from "@/assets/product-corrugated.png";
import mailer from "@/assets/product-mailer.png";
import rigid from "@/assets/product-rigid.png";
import shoppingBag from "@/assets/product-shopping-bag.png";
import pouch from "@/assets/product-pouch.png";
import paperBag from "@/assets/product-paper-bag.jpg";
import foldingCarton from "@/assets/product-folding-carton.png";
import display from "@/assets/product-display.png";
import inserts from "@/assets/product-inserts.jpg";
import restaurants from "@/assets/product-restaurants.png";
import qualityTesting from "@/assets/product-quality-testing.jpg";

const products = [
  { name: "Corrugated Boxes", description: "Durable custom shipping & storage solutions", image: corrugated },
  { name: "Mailer Shipping Bag", description: "Branded e-commerce mailers your customers love", image: mailer },
  { name: "Rigid Boxes", description: "Premium luxury presentation packaging", image: rigid },
  { name: "Reusable Shopping Bag", description: "Custom printed retail carry bags", image: shoppingBag },
  { name: "Pouches", description: "Flexible stand-up pouches for every product", image: pouch },
  { name: "Paper Bags", description: "Eco-friendly kraft paper bags", image: paperBag },
  { name: "Folding Cartons", description: "Custom printed carton packaging", image: foldingCarton },
  { name: "Displays", description: "Point-of-sale display stands & packaging", image: display },
  { name: "Restaurants", description: "Custom packaging solutions for restaurants", image: restaurants },
  { name: "Inserts", description: "Custom box inserts for protection & presentation", image: inserts },
  {
    name: "Explore Our Full Catalog, Everything You Need, One Click Away",
    description: "Explore our full product range, specs, and custom options on our website.",
    image: qualityTesting,
    href: "https://aaapak.com/all-products/",
  },
];

const ProductsSection = () => (
  <section id="products" className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
          Our Products
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Complete Packaging Solutions</h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Premium custom packaging for every industry and brand need.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.name} name={p.name} description={p.description} image={p.image} href={p.href} />
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
