const items = [
  {
    num: "1",
    color: "text-orange-500",
    title: "Total Project Management",
    desc: "Comprehensive handling of every step, allowing you to stay focused on your core business while we bring your packaging vision to life.",
  },
  {
    num: "2",
    color: "text-teal-500",
    title: "Optimized Cost Efficiency",
    desc: "Intelligent, value-driven strategies designed to reduce expenses and maximize savings throughout the entire packaging process.",
  },
  {
    num: "3",
    color: "text-violet-500",
    title: "Exceptional Customer Experience",
    desc: "Create memorable unboxing moments that delight customers and strengthen long-term satisfaction.",
  },
  {
    num: "4",
    color: "text-green-600",
    title: "Enhanced Brand Visibility",
    desc: "Stand out on every shelf with distinctive, professional packaging that reinforces your brand identity and leaves a lasting impression.",
  },
];

const SolutionsSection = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container">
      <div className="max-w-2xl mb-12">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
          Complete Solution
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          Complete 360° <span className="text-primary">Packaging Solutions</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          From the first idea to the final delivery, AAA Pak manages every part of your packaging project so nothing falls through the cracks.
        </p>
      </div>

      <div className="max-w-2xl space-y-0 divide-y divide-dashed divide-border">
        {items.map((item) => (
          <div key={item.num} className="flex items-start gap-5 py-7 first:pt-0 last:pb-0">
            <div className="w-14 h-14 bg-card rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-border">
              <span className={`text-2xl font-extrabold ${item.color}`}>{item.num}</span>
            </div>
            <div>
              <h3 className="font-extrabold text-foreground text-base mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsSection;
