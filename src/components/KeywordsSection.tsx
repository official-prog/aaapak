import { CheckCircle } from "lucide-react";

const KeywordsSection = () => {
  const keywords = [
    "Premium Quality Packaging",
    "Cost And Time Saving",
    "Global Supply Chain",
    "Minimum Order Quantity"
  ];

  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="container">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {keywords.map((keyword, index) => (
            <div key={index} className="flex items-center gap-2 text-sm md:text-base font-semibold text-foreground">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="uppercase tracking-wide">{keyword}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeywordsSection;