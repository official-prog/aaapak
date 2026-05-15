const brands = ["Revlon", "Native Pet", "Four Seasons", "Hims", "NBALab", "Paloma"];

const TrustBar = () => (
  <section className="py-8 border-b border-border bg-card">
    <div className="container">
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        <span className="text-sm font-semibold text-muted-foreground">Trusted by leading brands:</span>
        {brands.map((brand) => (
          <span key={brand} className="text-lg font-bold text-muted-foreground/40 tracking-wide uppercase">
            {brand}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
