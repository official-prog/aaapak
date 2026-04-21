import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteFormDialog from "@/components/QuoteFormDialog";
import ConsultationDialog from "@/components/ConsultationDialog";
import { ArrowRight, CheckCircle, Star, MapPin, Package, Leaf, Shield, CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { value: "100+", label: "Canadian Brands Served" },
  { value: "50", label: "Unit Minimum Order" },
  { value: "10–15", label: "Business Day Delivery" },
  { value: "48h", label: "Design Mockup" },
];

const products = [
  {
    name: "Custom Mailer Boxes",
    desc: "Branded e-commerce shipping boxes for Canadian DTC brands. Bilingual printing available.",
    moq: "From 50 units",
  },
  {
    name: "Corrugated Shipping Boxes",
    desc: "Heavy-duty shipping boxes for Canadian retail and wholesale fulfillment.",
    moq: "From 100 units",
  },
  {
    name: "Rigid Gift Boxes",
    desc: "Premium setup boxes for luxury brands shipping across Canada.",
    moq: "From 50 units",
  },
  {
    name: "Retail Packaging",
    desc: "Shelf-ready cartons compliant with Canadian retail standards.",
    moq: "From 100 units",
  },
  {
    name: "Eco-Friendly Kraft Packaging",
    desc: "FSC-certified sustainable packaging — increasingly required by Canadian retailers.",
    moq: "From 50 units",
  },
  {
    name: "Food Packaging",
    desc: "CFIA-compliant food-safe packaging for Canadian food and beverage brands.",
    moq: "Custom quote",
  },
];

const reasons = [
  {
    icon: <Package className="w-5 h-5" />,
    title: "Factory-Direct Canadian Pricing",
    desc: "Our direct factory model eliminates agency markups. Canadian brands typically save 20–30% versus domestic packaging brokers. CAD invoicing available.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "CFIA & Canadian Retail Compliance",
    desc: "All materials meet Canadian Food Inspection Agency (CFIA) standards where applicable. We produce to bilingual labeling requirements for federally regulated products.",
  },
  {
    icon: <Leaf className="w-5 h-5" />,
    title: "FSC-Certified Eco Options",
    desc: "Canadian retailers including Canadian Tire, Loblaws, and Indigo are demanding FSC certification. Our eco line meets these requirements out of the box.",
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "3D Design Mockup in 48 Hours",
    desc: "We create a detailed 3D render and digital proof of your packaging within 48 hours. Review and approve before production starts — no commitment required.",
  },
];

const provinces = [
  "Ontario", "British Columbia", "Alberta", "Quebec",
  "Manitoba", "Saskatchewan", "Nova Scotia", "New Brunswick",
  "Newfoundland", "PEI", "All Provinces & Territories",
];

const cities = [
  "Toronto", "Vancouver", "Calgary", "Edmonton",
  "Mississauga", "Montreal", "Ottawa", "Hamilton",
  "Brampton", "London ON", "Kelowna",
];

const faqs = [
  {
    q: "Do you ship custom packaging to Canada?",
    a: "Yes. We ship custom packaging door-to-door to all Canadian provinces and territories. Delivery takes 10–15 business days from artwork approval. Major hubs in Toronto, Vancouver, and Calgary receive priority routing.",
  },
  {
    q: "What is the minimum order quantity for Canadian orders?",
    a: "Our minimum order starts at 50 units for most products. There is no higher MOQ for Canadian orders versus USA orders.",
  },
  {
    q: "Is your packaging compliant with Canadian regulations?",
    a: "Yes. We produce packaging compliant with Canadian General Standards Board (CGSB), CFIA food packaging standards, and bilingual labeling requirements for federally regulated products.",
  },
  {
    q: "Do you offer bilingual (English/French) packaging for Quebec?",
    a: "Yes. We can print bilingual packaging to meet Quebec's Charter of the French Language (Bill 96) requirements. Provide French and English copy in your artwork brief.",
  },
  {
    q: "Are customs duties included for Canadian orders?",
    a: "Yes. Our all-in pricing for Canadian orders covers freight, customs clearance, and import duties. No surprise charges on delivery.",
  },
  {
    q: "Do you offer FSC-certified packaging for Canadian retailers?",
    a: "Yes. Our eco product line uses FSC-certified kraft and corrugated materials. We can provide FSC chain-of-custody documentation on request.",
  },
  {
    q: "Do you provide a design proof before production starts?",
    a: "Yes. We provide a detailed 3D mockup and digital proof within 48 hours of your brief. You approve the design before production begins — no commitments required.",
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

const CustomPackagingCanada = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Custom Packaging Canada | Ontario, BC, Alberta | Low MOQ | AAA PAK</title>
        <meta
          name="description"
          content="Custom packaging supplier for Canadian businesses. Corrugated, mailer, rigid and retail packaging from 50 units. Delivery to Ontario, BC, Alberta, Quebec and all provinces. 3D design mockup in 48h."
        />
        <link rel="canonical" href="https://www.aaapak.com/custom-packaging-canada" />
        <meta property="og:title" content="Custom Packaging Canada | AAA PAK" />
        <meta property="og:description" content="Factory-direct custom packaging for Canadian brands. 50-unit MOQ, bilingual printing, CFIA-compliant materials. 3D design mockup in 48 hours." />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container max-w-4xl mx-auto text-center px-4">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-5 tracking-wide uppercase">
              Factory-Direct · All Provinces · Bilingual Printing
            </span>
            <h1 className="text-4xl md:text-5xl font-black leading-tight text-foreground mb-6">
              Custom Packaging Supplier for{" "}
              <span className="text-primary">Canadian Businesses</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Premium custom packaging delivered across Canada — Ontario, BC, Alberta, Quebec, and all provinces. Factory-direct pricing saves Canadian brands 20–30% versus local suppliers.
            </p>
            <ul className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              {[
                "50-unit minimum — no large volume lock-in",
                "Bilingual (English/French) printing available",
                "CFIA & FSC-certified options",
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
              <span>from 300+ brands across USA & Canada</span>
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
                Why Canadian Brands Choose <span className="text-primary">AAA PAK</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Compliant materials, bilingual printing, and a 3D design mockup in 48 hours — built for Canadian businesses.
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
                Packaging Products for <span className="text-primary">Canadian Markets</span>
              </h2>
              <p className="mt-4 text-muted-foreground">Custom sizes, bilingual print, and compliant materials — all in one supplier.</p>
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

        {/* Coverage */}
        <section className="py-16 bg-background">
          <div className="container max-w-3xl mx-auto text-center">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
              Delivery Across All Canadian Provinces
            </h2>
            <p className="text-muted-foreground mb-6">
              We ship door-to-door to every Canadian province and territory. Toronto, Vancouver, Calgary, and Montreal receive priority routing with the fastest transit times.
            </p>
            <div className="mb-8">
              <p className="text-sm font-semibold text-foreground mb-3">Major Cities Served</p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {cities.map((c) => (
                  <span key={c} className="px-3 py-1.5 rounded-full text-xs font-medium border bg-card border-border text-muted-foreground">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground mb-3">All Provinces</p>
              <div className="flex flex-wrap justify-center gap-2">
                {provinces.map((p) => (
                  <span
                    key={p}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                      p === "All Provinces & Territories"
                        ? "bg-primary text-white border-primary"
                        : "bg-card border-border text-muted-foreground"
                    }`}
                  >
                    {p}
                  </span>
                ))}
              </div>
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
              "We cut packaging costs by 28% without sacrificing quality. AAA Pak's factory-direct model is the real deal — no middlemen, no surprises. Our rigid boxes look higher-end than boxes that cost us twice as much before."
            </blockquote>
            <div className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-extrabold text-sm">
                LB
              </div>
              <div className="text-left">
                <p className="text-white font-bold">Sarah Mitchell</p>
                <p className="text-white/70 text-sm">Brand Manager, Luxe Beauty Co. — Ontario, Canada</p>
              </div>
              <div className="ml-6 text-right hidden sm:block">
                <p className="text-2xl font-extrabold text-white">28%</p>
                <p className="text-white/70 text-xs">packaging cost reduction</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-background">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">
              Custom Packaging Canada — FAQ
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
            <p className="text-muted-foreground mb-4 text-sm font-medium uppercase tracking-wide">Related Pages</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/custom-packaging-usa" className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:border-primary/40 transition-colors">
                Custom Packaging USA →
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
              Get a Quote for Custom Packaging in Canada
            </h2>
            <p className="text-muted-foreground mb-8">
              Free quote in 24 hours. 3D design mockup delivered within 48 hours.
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
      <QuoteFormDialog open={quoteOpen} onOpenChange={setQuoteOpen} productName="Custom Packaging Canada" />
      <ConsultationDialog open={consultOpen} onOpenChange={setConsultOpen} />
    </>
  );
};

export default CustomPackagingCanada;
