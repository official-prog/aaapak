import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuoteFormDialog from "./QuoteFormDialog";
import benefitsImg      from "@/assets/benefits-img.png";
import galleryShipping  from "@/assets/gallery-shipping.png";
import galleryPouches   from "@/assets/gallery-pouches.png";
import galleryInsert2   from "@/assets/gallery-insert2.png";

const items = [
  {
    image:   benefitsImg,
    label:   "Custom Mailer Bags",
    context: "1,200 units · Cosmetics brand, Los Angeles",
    product: "Mailer Bags",
  },
  {
    image:   galleryShipping,
    label:   "Poly Shipping Bags",
    context: "800 units · E-commerce brand, New York",
    product: "Mailer Bags",
  },
  {
    image:   galleryPouches,
    label:   "Stand-Up Pouches",
    context: "600 units · Food brand, Chicago",
    product: "Pouches",
  },
  {
    image:   galleryInsert2,
    label:   "Custom Box Inserts",
    context: "500 units · Retail brand, Toronto",
    product: "Rigid Boxes",
  },
];

const PackagingShowcaseSection = () => {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState("Custom Packaging");

  const openQuote = (p: string) => {
    setProduct(p);
    setOpen(true);
  };

  return (
    <>
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              What We've Built for{" "}
              <span className="text-primary">Brands Like Yours</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Real orders. Real brands. Factory-direct quality you can see.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {items.map((item) => (
              <div
                key={item.label}
                className="bg-card rounded-2xl border border-border overflow-hidden flex flex-col"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.label}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <div>
                    <p className="font-bold text-foreground text-sm">{item.label}</p>
                    <p className="text-[12px] text-muted-foreground mt-0.5">{item.context}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full font-semibold"
                    onClick={() => openQuote(item.product)}
                  >
                    Get a Quote for This <ArrowRight className="ml-2 w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <QuoteFormDialog open={open} onOpenChange={setOpen} productName={product} />
    </>
  );
};

export default PackagingShowcaseSection;
