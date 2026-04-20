const stats = [
  { value: "300+", label: "Brands Served" },
  { value: "10,000+", label: "Orders Shipped" },
  { value: "99%", label: "Satisfaction Rate" },
  { value: "15 Days", label: "Avg Turnaround" },
];

const StatsBarSection = () => (
  <section className="py-14 bg-primary">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-4xl md:text-5xl font-black text-white">{s.value}</p>
            <p className="text-sm font-semibold text-white/70 uppercase tracking-wide mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBarSection;
