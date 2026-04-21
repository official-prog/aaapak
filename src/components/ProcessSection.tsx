import { FileText, Package, CheckCircle, Factory, Truck } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: <FileText className="w-6 h-6" />,
    tag: "Submit",
    title: "Submit Your Design Brief",
    desc: "Share your dimensions, materials, and brand specs. We create a 3D mockup within 48 hours.",
    stat: "48h",
    statLabel: "First mockup",
    color: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    num: "02",
    icon: <Package className="w-6 h-6" />,
    tag: "Mockup",
    title: "Receive Your 3D Design Mockup",
    desc: "We send a detailed 3D render and digital proof for your review — no commitment required.",
    stat: "48h",
    statLabel: "Mockup delivery",
    color: "bg-violet-50 text-violet-600 border-violet-100",
  },
  {
    num: "03",
    icon: <CheckCircle className="w-6 h-6" />,
    tag: "Approve",
    title: "Approve & Confirm",
    desc: "Touch it, test it, love it — then give us the green light. 100% satisfaction before we proceed.",
    stat: "100%",
    statLabel: "Your approval",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    num: "04",
    icon: <Factory className="w-6 h-6" />,
    tag: "Production",
    title: "Factory Production",
    desc: "Your order enters production at our certified facility. Full QC inspection before shipping.",
    stat: "QC",
    statLabel: "Every order",
    color: "bg-orange-50 text-orange-600 border-orange-100",
  },
  {
    num: "05",
    icon: <Truck className="w-6 h-6" />,
    tag: "Delivery",
    title: "Door-to-Door Delivery",
    desc: "Tracked freight to any USA or Canada address. Average total time: 10–15 business days.",
    stat: "10–15d",
    statLabel: "Avg. delivery",
    color: "bg-primary/5 text-primary border-primary/20",
  },
];

const ProcessSection = () => (
  <section id="process" className="py-20 md:py-28 bg-card">
    <div className="container">

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
          How It Works
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          From Idea to Your Door in <span className="text-primary">5 Simple Steps</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          No upfront costs. 3D mockup in 48 hours. Delivered in under 3 weeks.
        </p>
      </div>

      {/* Desktop: horizontal flow */}
      <div className="hidden lg:flex items-start gap-0 relative">
        {/* Background connecting line */}
        <div className="absolute top-11 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10" />

        {steps.map((s) => (
          <div key={s.num} className="flex-1 flex flex-col items-center text-center px-3 relative">
            {/* Icon circle */}
            <div className={`relative z-10 w-[88px] h-[88px] rounded-full border-2 flex flex-col items-center justify-center gap-0.5 bg-white shadow-md ${s.color}`}>
              {s.icon}
              <span className="text-[10px] font-extrabold leading-none opacity-60">{s.num}</span>
            </div>

            {/* Tag */}
            <span className="mt-3 inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
              {s.tag}
            </span>

            {/* Title */}
            <h3 className="mt-2 font-extrabold text-foreground text-sm leading-snug px-1">{s.title}</h3>

            {/* Description */}
            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed px-1">{s.desc}</p>

            {/* Stat badge */}
            <div className="mt-4 bg-background border border-border rounded-xl px-3 py-2 text-center shadow-sm">
              <p className="text-lg font-extrabold text-primary leading-none">{s.stat}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">{s.statLabel}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: vertical stack with left timeline */}
      <div className="lg:hidden relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/5" />

        <div className="space-y-8">
          {steps.map((s) => (
            <div key={s.num} className="relative flex gap-5">
              {/* Icon dot on timeline */}
              <div className={`absolute -left-8 w-9 h-9 rounded-full border-2 flex items-center justify-center bg-white shrink-0 shadow ${s.color}`}>
                <span className="w-4 h-4 flex items-center justify-center">{s.icon}</span>
              </div>

              {/* Content */}
              <div className="bg-background border border-border rounded-2xl p-5 flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary">{s.tag}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-base font-extrabold text-primary leading-none">{s.stat}</span>
                    <span className="text-[10px] text-muted-foreground">{s.statLabel}</span>
                  </div>
                </div>
                <h3 className="font-extrabold text-foreground text-sm mb-1">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default ProcessSection;
