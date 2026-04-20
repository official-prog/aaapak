import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteFormDialog from "@/components/QuoteFormDialog";
import ConsultationDialog from "@/components/ConsultationDialog";
import { ArrowRight, CheckCircle, Star, MapPin, Package, Truck, Shield, CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { value: "300+", label: "USA Brands Served" },
  { value: "50", label: "Unit Minimum Order" },
  { value: "10–15", label: "Business Day Delivery" },
  { value: "Free", label: "Physical Samples" },
];

const products = [
  {
    name: "Custom Mailer Boxes",
    desc: "Branded direct-to-consumer shipping boxes for e-commerce brands. Self-locking, no tape needed.",
    moq: "From 50 units",
  },
  {
    name: "Corrugated Shipping Boxes",
    desc: "Single, double, and triple-wall corrugated boxes for retail and wholesale distribution.",
    moq: "From 100 units",
  },
  {
    name: "Rigid Gift Boxes",
    desc: "Luxury set-up boxes with magnetic closures and custom inserts for premium unboxing.",
    moq: "From 50 units",
  },
  {
    name: "Retail Display Packaging",
    desc: "Shelf-ready cartons and POS displays for Target, Walmart, and independent retail.",
    moq: "From 100 units",
  },
  {
    name: "Eco-Friendly Kraft Boxes",
    desc: "100% recyclable FSC-certified packaging for sustainability-focused USA brands.",
    moq: "From 50 units",
  },
  {
    name: "Custom Inserts & Dividers",
    desc: "Die-cut foam, cardboard, and molded inserts for fragile product protection.",
    moq: "Custom quote",
  },
];

const reasons = [
  {
    icon: <Package className="w-5 h-5" />,
    title: "Factory-Direct — No Middleman Markup",
    desc: "You pay what a certified factory charges, not what a local packaging broker marks up. Our direct model delivers 20–30% savings versus typical USA suppliers.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "USA-Compliant Materials & Inks",
    desc: "All substrates and inks meet FDA, ASTM, and US retail compliance standards. Approved for food-adjacent use, Amazon FBA, and major retail chains.",
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "Free Physical Samples Before You Commit",
    desc: "We ship a physical sample to any US address before production starts. Approve the real thing — not a digital mock-up — before spending a dollar on your order.",
  },
  {
    icon: <Truck className="w-5 h-5" />,
    title: "Door-to-Door USA Delivery",
    desc: "All-in pricing covers freight, customs clearance, and delivery to your US address. No surprise import fees. Full tracking from factory to your door.",
  },
];

const usStates = [
  "California", "New York", "Texas", "Florida", "Illinois",
  "Pennsylvania", "Ohio", "Georgia", "Michigan", "Washington",
  "Arizona", "Massachusetts", "Colorado", "Virginia", "Minnesota",
  "All 50 States",
];

const faqs = [
  {
    q: "What is the minimum order quantity for custom packaging in the USA?",
    a: "Our minimum order quantity starts at 50 units for most packaging types — mailer boxes, rigid boxes, and custom folding cartons. Corrugated shipping boxes start from 100 units.",
  },
  {
    q: "How long does custom packaging delivery take to the USA?",
    a: "Standard production and delivery to all US states takes 10–15 business days from artwork approval. Rush options are available for select product types.",
  },
  {
    q: "Do you offer free samples before I place a USA order?",
    a: "Yes. We ship free physical samples to any US address before you commit to a production order. You approve the physical sample — not a digital proof — before we begin manufacturing.",
  },
  {
    q: "Can you match Pantone or brand-specific colors?",
    a: "Yes. We produce to PMS (Pantone Matching System) specifications, CMYK, and custom color profiles. We achieve Delta E ≤2 color accuracy as standard.",
  },
  {
    q: "Does your packaging meet Amazon FBA requirements?",
    a: "Yes. We regularly produce packaging for Amazon FBA sellers. Our corrugated boxes meet ISTA-6A testing standards and Amazon's packaging prep guidelines.",
  },
  {
    q: "Are customs and import duties included in your USA pricing?",
    a: "Yes. Our all-in pricing for USA orders includes freight, customs clearance, and import duties. There are no surprise fees on delivery — the price you quote is the price you pay.",
  },
  {
    q: "What printing options are available for USA custom packaging?",
    a: "We offer flexographic printing (1–6 colors), CMYK offset litho, UV spot coating, matte/gloss lamination, embossing, debossing, and hot foil stamping.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const CustomPackagingUSA = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Custom Packaging Boxes USA | Low MOQ, Factory-Direct | AAA PAK</title>
        <meta
          name="description"
          content="Custom packaging boxes for USA businesses. Corrugated, mailer, rigid, and retail packaging from 50 units. 10–15 day delivery to all 50 states. Free samples. Factory-direct pricing."
        />
        <link rel="canonical" href="https://www.aaapak.com/custom-packaging-usa" />
        <meta property="og:title" content="Custom Packaging Boxes USA | AAA PAK" />
        <meta property="og:description" content="Factory-direct custom packaging for USA brands. 50-unit MOQ, free samples, 10–15 day delivery across all 50 states." />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container max-w-4xl mx-auto text-center px-4">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-5 tracking-wide uppercase">
              Factory-Direct · All 50 States · Low MOQ
            </span>
            <h1 className="text-4xl md:text-5xl font-black leading-tight text-foreground mb-6">
              Custom Packaging Boxes for{" "}
              <span className="text-primary">USA Businesses</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Save 20–30% on branded packaging with factory-direct pricing — no middlemen, no surprise fees. Free samples shipped to your US address before you commit.
            </p>
            <ul className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              {[
                "50-unit minimum order",
                "10–15 business day delivery",
                "All-in USA pricing — no hidden import fees",
              ].map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="font-semibold px-8" onClick={() => setQuoteOpen(true)}>
                Get Free Quote in 24 Hours <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => setConsultOpen(true)}>
                <CalendarClock className="mr-2 w-4 h-4" />
                Schedule a Consultation
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-2 justify-center text-sm text-muted-foreground">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
              <span className="font-semibold text-foreground">4.8/5</span>
              <span>from 300+ USA brands</span>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-primary">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-extrabold text-white">{s.value}</p>
                  <p className="text-white/70 text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                Why USA Brands Choose <span className="text-primary">AAA PAK</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Factory pricing, US compliance, and zero-risk sampling — all in one supplier.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {reasons.map((r) => (
                <div key={r.title} className="flex gap-4 p-6 bg-card border border-border rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    {r.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{r.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                Custom Packaging Products for <span className="text-primary">USA Businesses</span>
              </h2>
              <p className="mt-4 text-muted-foreground">All products fully customizable — size, print, finish, and insert.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map((p) => (
                <div key={p.name} className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="font-bold text-foreground mb-2">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
                  <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {p.moq}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button onClick={() => setQuoteOpen(true)} className="font-semibold px-8">
                Get a Custom Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* States served */}
        <section className="py-16 bg-background">
          <div className="container max-w-3xl mx-auto text-center">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
              Delivering Custom Packaging Across All 50 US States
            </h2>
            <p className="text-muted-foreground mb-8">
              We ship door-to-door to every US state. Major fulfillment centers in California, Texas, New York, and Illinois receive same-region priority routing.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {usStates.map((s) => (
                <span
                  key={s}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                    s === "All 50 States"
                      ? "bg-primary text-white border-primary"
                      : "bg-card border-border text-muted-foreground"
                  }`}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-primary">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-white text-white" />
              ))}
            </div>
            <blockquote className="text-white text-xl md:text-2xl font-semibold leading-relaxed mb-8">
              "Switching to AAA Pak saved us $18,000 in our first year. Same product quality, direct factory pricing, and a team that actually answers the phone. I wish we found them three years earlier."
            </blockquote>
            <div className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-extrabold text-sm">
                MR
              </div>
              <div className="text-left">
                <p className="text-white font-bold">Michael R.</p>
                <p className="text-white/70 text-sm">Head of Supply Chain, MidWest Retail Group — Illinois</p>
              </div>
              <div className="ml-6 text-right hidden sm:block">
                <p className="text-2xl font-extrabold text-white">$18K</p>
                <p className="text-white/70 text-xs">saved in year one</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-background">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">
              Custom Packaging USA — Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((f) => (
                <div key={f.q} className="border border-border rounded-2xl p-6">
                  <h3 className="font-bold text-foreground mb-2">{f.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-12 bg-secondary">
          <div className="container max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground mb-4 text-sm font-medium uppercase tracking-wide">Also Available</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/custom-packaging-canada" className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:border-primary/40 transition-colors">
                Custom Packaging Canada →
              </Link>
              <Link to="/corrugated-boxes" className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:border-primary/40 transition-colors">
                Corrugated Boxes →
              </Link>
              <Link to="/food-packaging" className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:border-primary/40 transition-colors">
                Food Packaging →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-card border-t border-border">
          <div className="container max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-foreground mb-4">
              Ready to Cut Your USA Packaging Costs?
            </h2>
            <p className="text-muted-foreground mb-8">
              Get a free, no-obligation quote in 24 hours. Free samples shipped to any US address.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="font-semibold px-8" onClick={() => setQuoteOpen(true)}>
                Get Free Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => setConsultOpen(true)}>
                <CalendarClock className="mr-2 w-4 h-4" />
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <QuoteFormDialog open={quoteOpen} onOpenChange={setQuoteOpen} productName="Custom Packaging USA" />
      <ConsultationDialog open={consultOpen} onOpenChange={setConsultOpen} />
    </>
  );
};

export default CustomPackagingUSA;
