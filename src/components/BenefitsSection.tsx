import { ArrowRight, CalendarClock } from "lucide-react";
import featureImg from "@/assets/feature-highlight.jpg";
import { useState } from "react";
import QuoteFormDialog from "./QuoteFormDialog";
import ConsultationDialog from "./ConsultationDialog";

const reasons = [
  {
    stat: "01",
    statSub: "Cost Advantage",
    title: "Competitive Pricing Through Global Manufacturing",
    desc: "We help businesses source high-quality custom packaging at competitive costs through trusted overseas manufacturing partners and an optimized supply chain.",
  },
  {
    stat: "02",
    statSub: "Technical Prepress Review",
    title: "Print-Ready Files Before Production",
    desc: "Our team reviews artwork, die-lines, bleed, resolution, and color setup before production to help reduce file-related errors and support a smoother manufacturing process.",
  },
  {
    stat: "03",
    statSub: "Full-Service Packaging Management",
    title: "One Partner from Sampling to Delivery",
    desc: "We coordinate the full packaging process, including material sourcing, sampling, production follow-up, quality checks, logistics, and final delivery.",
  },
  {
    stat: "04",
    statSub: "Reliable Communication",
    title: "Clear Updates Throughout the Project",
    desc: "We keep clients informed during each stage of the project, from initial inquiry and sampling to production, shipping, and delivery.",
  },
  {
    stat: "05",
    statSub: "North America Focus, Global Support",
    title: "Built for Launch, Growth, and Scalable Production",
    desc: "Whether you are launching a new product or scaling your operations, we support brands, distributors, and retailers across Canada and the USA with global manufacturing access and a wide range of packaging solutions for every stage of growth.",
  },
];

const BenefitsSection = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);

  return (
    <>
      <section id="why-us" className="py-12 md:py-28 bg-secondary overflow-hidden scroll-mt-28">
        <div className="container">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3 tracking-wide">
              Why AAA Pak
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-foreground">
              Why <span className="text-primary">AAA Pak</span>
            </h2>
            <p className="mt-2 md:mt-4 text-muted-foreground text-base md:text-lg">
              End-to-end support from sourcing to delivery, backed by expertise and reliable communication.
            </p>
          </div>

          {/* 4 reason cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 mb-8 md:mb-16">
            {reasons.map((r) => (
              <div key={r.title} className="bg-card border border-border rounded-2xl p-4 sm:p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <div className="mb-4 pb-4 border-b border-border">
                  <p className="text-3xl font-extrabold text-primary leading-none">{r.stat}</p>
                  <p className="text-xs text-muted-foreground mt-1">{r.statSub}</p>
                </div>
                <h3 className="font-extrabold text-foreground text-sm leading-snug mb-2">{r.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 md:mb-16">
            <button
              onClick={() => setQuoteOpen(true)}
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/16477788860"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              <svg viewBox="0 0 32 32" className="w-4 h-4 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 1C7.716 1 1 7.716 1 16c0 2.628.687 5.098 1.886 7.244L1 31l7.978-1.862A14.94 14.94 0 0016 31c8.284 0 15-6.716 15-15S24.284 1 16 1zm0 27.333a12.29 12.29 0 01-6.27-1.716l-.449-.267-4.736 1.107 1.13-4.617-.293-.474A12.26 12.26 0 013.667 16C3.667 9.189 9.189 3.667 16 3.667S28.333 9.189 28.333 16 22.811 28.333 16 28.333zm6.73-9.188c-.369-.184-2.184-1.078-2.522-1.201-.338-.123-.584-.184-.83.184-.245.369-.952 1.201-1.167 1.447-.215.245-.43.276-.799.092-.369-.184-1.558-.574-2.968-1.83-1.097-.978-1.838-2.185-2.053-2.554-.215-.369-.023-.568.162-.752.166-.165.369-.43.553-.645.184-.215.245-.369.369-.614.123-.245.061-.46-.031-.644-.092-.184-.83-2.001-1.137-2.739-.299-.719-.604-.621-.83-.633l-.706-.012c-.245 0-.645.092-.983.46-.338.369-1.29 1.262-1.29 3.078s1.321 3.571 1.505 3.816c.184.245 2.6 3.969 6.302 5.565.881.38 1.568.607 2.104.777.884.281 1.689.241 2.326.146.709-.105 2.184-.893 2.492-1.756.307-.862.307-1.601.215-1.756-.092-.153-.338-.245-.706-.43z"/>
              </svg>
              Chat on WhatsApp
            </a>

            <button
              onClick={() => setConsultOpen(true)}
              className="inline-flex items-center gap-2 border border-border bg-card text-foreground font-semibold px-6 py-3 rounded-xl hover:border-primary/40 hover:shadow transition-all"
            >
              <CalendarClock className="w-4 h-4" />
              Schedule a Consultation
            </button>
          </div>

          {/* Two-column split */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
                21+ Industries.<br />
                <span className="text-primary">One Packaging Partner.</span>
              </h3>
              <p className="mt-3 md:mt-4 text-muted-foreground text-base md:text-lg max-w-md">
                From food and cosmetics to retail, apparel, e-commerce, and lifestyle brands, we create custom packaging solutions for businesses across USA &amp; Canada.
              </p>

              <button
                onClick={() => setQuoteOpen(true)}
                className="mt-5 md:mt-8 inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right: image */}
            <div className="relative pt-4 pb-6 sm:pt-5 sm:pb-8 px-4 sm:px-5 lg:pt-4 lg:pb-6 lg:px-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={featureImg}
                  alt="AAA Pak factory production and custom packaging"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating badges — visible from sm to avoid clipping on tiny screens */}
              <div className="absolute bottom-0 left-0 bg-primary text-white rounded-2xl px-4 py-3 shadow-xl hidden sm:block">
                <p className="text-xl font-extrabold leading-none">12+</p>
                <p className="text-xs text-white/80 mt-0.5">For Every Industry</p>
              </div>
              <div className="absolute top-0 right-0 bg-card border border-border rounded-2xl px-4 py-3 shadow-xl hidden sm:block">
                <p className="text-xl font-extrabold text-primary leading-none">20+</p>
                <p className="text-xs text-muted-foreground mt-0.5">Multiple Styles & Materials</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <QuoteFormDialog open={quoteOpen} onOpenChange={setQuoteOpen} productName="Custom Packaging" />
      <ConsultationDialog open={consultOpen} onOpenChange={setConsultOpen} />
    </>
  );
};

export default BenefitsSection;
