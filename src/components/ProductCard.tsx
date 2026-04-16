import { useState } from "react";
import { Button } from "@/components/ui/button";
import QuoteFormDialog from "./QuoteFormDialog";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
}

const ProductCard = ({ name, description, image }: ProductCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="group bg-card rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
        <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={name}
            loading="lazy"
            width={512}
            height={512}
            className="w-full h-full object-contain scale-[1.15] group-hover:scale-[1.2] transition-transform duration-500"
          />
        </div>
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-heading font-bold text-foreground">{name}</h3>
          <p className="mt-1 text-sm text-muted-foreground flex-1">{description}</p>
          <Button
            onClick={() => setOpen(true)}
            className="mt-3 w-full font-semibold"
            size="sm"
          >
            Get a Quote
          </Button>
        </div>
      </div>
      <QuoteFormDialog open={open} onOpenChange={setOpen} productName={name} />
    </>
  );
};

export default ProductCard;
