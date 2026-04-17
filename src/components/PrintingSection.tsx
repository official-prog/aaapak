import printingDigital from "@/assets/printing-digital.jpg";
import printingOffset from "@/assets/printing-offset.jpg";
import printingOilInk from "@/assets/printing-oil-ink.jpg";
import printingPantoneMetallic from "@/assets/printing-pantone-metallic.jpg";
import printingPantone from "@/assets/printing-pantone.jpg";
import printingSoyInk from "@/assets/printing-soy-ink.jpg";
import printingUV from "@/assets/printing-uv.png";
import printingWaterInk from "@/assets/printing-water-ink.jpg";
import printingFlexo from "@/assets/printing-flexo.png";

const techniques = [
  {
    image: printingDigital,
    title: "Digital Print",
    desc: "A modern printing solution that applies artwork directly from digital files without plates. Perfect for low-to-medium quantities, offering quick turnaround times and flexible customization.",
  },
  {
    image: printingOffset,
    title: "Offset Print",
    desc: "Offset printing delivers sharp, accurate, and vibrant results by transferring ink from plates onto paper. Ideal for high-volume production where consistent quality and smooth gradients are essential.",
  },
  {
    image: printingOilInk,
    title: "Oil-Based Ink",
    desc: "A traditional ink type known for strong color density and reliable performance. Suitable for projects requiring deep, intense shades and consistent print results.",
  },
  {
    image: printingPantoneMetallic,
    title: "Pantone Metallic",
    desc: "A specialty Pantone system that adds metallic tones and a subtle reflective sheen. Perfect for luxury packaging that demands a distinctive, high-end appearance.",
  },
  {
    image: printingPantone,
    title: "Pantone",
    desc: "Pantone printing ensures exact color matching using standardized formulas. Ideal for brands requiring precise and uniform colors across all packaging materials.",
  },
  {
    image: printingSoyInk,
    title: "Soy / Vegetable Ink",
    desc: "Made from renewable vegetable oils, this ink provides rich, natural color while being gentle on the environment. It supports clean printing results with improved recyclability.",
  },
  {
    image: printingUV,
    title: "UV Print",
    desc: "A premium printing technique where ultraviolet light instantly cures the ink. This method enhances color depth, clarity, and durability, giving your packaging a clean, glossy finish.",
  },
  {
    image: printingWaterInk,
    title: "Water-Based Ink",
    desc: "Eco-conscious ink made from water and safe pigments. It produces clean, vibrant colors while reducing environmental impact, making it an excellent choice for sustainable packaging.",
  },
  {
    image: printingFlexo,
    title: "Flexographic Print",
    desc: "A fast, high-volume printing method using flexible plates to deliver durable, consistent results on packaging materials. Ideal for corrugated, kraft, and paper-based packaging.",
  },
];

const PrintingSection = () => (
  <section className="py-20 md:py-28 bg-card">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
          Printing Capabilities
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          Advanced <span className="text-primary">Printing Techniques</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          State-of-the-art printing methods to bring your brand to life with precision and quality.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {techniques.map((t) => (
          <div
            key={t.title}
            className="group rounded-2xl border border-border overflow-hidden bg-background hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="h-52 overflow-hidden">
              <img
                src={t.image}
                alt={t.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-foreground text-base mb-2">{t.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PrintingSection;
