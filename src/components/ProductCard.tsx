import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import QuoteFormDialog from "./QuoteFormDialog";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  href?: string;
  internalHref?: string;
}

const ProductCard = ({ name, description, image, href, internalHref }: ProductCardProps) => {
  const [open, setOpen] = useState(false);

  const cardContent = (
    <div className="group bg-card rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer">
      <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          width={512}
          height={512}
          className="w-full h-full object-contain scale-100 group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-heading font-bold text-foreground">{name}</h3>
        <p className="mt-1 text-sm text-muted-foreground flex-1">{description}</p>
        <div className="mt-3 w-full font-semibold text-sm text-center py-2 px-3 rounded-md bg-primary text-primary-foreground">
          {href ? "Visit Website" : internalHref ? "Learn More" : "Get a Quote"}
        </div>
      </div>
    </div>
  );

  if (internalHref) {
    return (
      <Link to={internalHref} className="block">
        {cardContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {cardContent}
      </a>
    );
  }

  return (
    <>
      <div onClick={() => setOpen(true)}>
        {cardContent}
      </div>
      <QuoteFormDialog open={open} onOpenChange={setOpen} productName={name} />
    </>
  );
};

export default ProductCard;
