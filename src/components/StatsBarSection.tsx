const items = [
  {
    num: "1",
    color: "text-orange-300",
    title: "Total Project Management",
    desc: "Comprehensive handling of every step, allowing you to stay focused on your core business while we bring your packaging vision to life.",
  },
  {
    num: "2",
    color: "text-teal-300",
    title: "Optimized Cost Efficiency",
    desc: "Intelligent, value-driven strategies designed to reduce expenses and maximize savings throughout the entire packaging process.",
  },
  {
    num: "3",
    color: "text-violet-300",
    title: "Exceptional Customer Experience",
    desc: "Create memorable unboxing moments that delight customers and strengthen long-term satisfaction.",
  },
  {
    num: "4",
    color: "text-green-300",
    title: "Enhanced Brand Visibility",
    desc: "Stand out on every shelf with distinctive, professional packaging that reinforces your brand identity and leaves a lasting impression.",
  },
];

const StatsBarSection = () => (
  <section className="py-10 md:py-20 bg-primary">
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 md:gap-10">
        {items.map((item) => (
          <div key={item.num} className="flex items-start gap-3 sm:gap-5">
            <span className={`text-3xl sm:text-5xl font-black leading-none shrink-0 ${item.color}`}>{item.num}</span>
            <div>
              <p className="text-white font-extrabold text-xs sm:text-base leading-snug mb-1 sm:mb-2">{item.title}</p>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed hidden sm:block">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBarSection;
