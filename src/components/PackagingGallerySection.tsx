import workHero        from "@/assets/work-hero.jpg";
import workJewelry     from "@/assets/work-jewelry.png";
import workElite       from "@/assets/work-elite.png";
import workRound       from "@/assets/work-round.png";
import workCollapsible from "@/assets/work-collapsible.png";

const PackagingGallerySection = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
          Our Work
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          Packaging That <span className="text-primary">Stands Out</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Every box, bag, and insert is crafted to elevate your brand.
        </p>
      </div>

      {/* Row 1: hero wide + one card */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 h-72 rounded-2xl overflow-hidden relative group">
          <img src={workHero} alt="AAA Pak warehouse" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
            <p className="text-white font-bold text-xl">Premium Custom Packaging</p>
          </div>
        </div>
        <div className="col-span-1 h-72 rounded-2xl overflow-hidden group">
          <img src={workRound} alt="Premium round box" loading="lazy" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Row 2: 3 equal cards */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="h-64 rounded-2xl overflow-hidden group">
          <img src={workJewelry} alt="Jewelry packaging" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="h-64 rounded-2xl overflow-hidden group">
          <img src={workElite} alt="Elite luxury box set" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="h-64 rounded-2xl overflow-hidden group">
          <img src={workCollapsible} alt="Luxury collapsible box" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      </div>


    </div>
  </section>
);

export default PackagingGallerySection;
