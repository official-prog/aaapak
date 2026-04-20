import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteFormDialog from "@/components/QuoteFormDialog";
import ConsultationDialog from "@/components/ConsultationDialog";
import { ArrowRight, CheckCircle, Star, Shield, Leaf, CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { value: "50", label: "Unit Minimum" },
  { value: "FDA", label: "Compliant Materials" },
  { value: "FSC", label: "Certified Eco Options" },
  { value: "Free", label: "Physical Samples" },
];

const products = [
  {
    name: "Custom Food Shipping Boxes",
    desc: "Corrugated outer shippers for CPG brands, meal kit companies, and food distributors. Moisture-resistant options available.",
    moq: "From 100 units",
  },
  {
    name: "Retail Food Cartons",
    desc: "Folding cartons for grocery, natural food retail, and specialty food brands. Custom sizing and CMYK print.",
    moq: "From 50 units",
  },
  {
    name: "Bakery & Confectionery Boxes",
    desc: "Windowed cartons, cake boxes, and pastry packaging. Food-safe board and PE coatings available.",
    moq: "From 50 units",
  },
  {
    name: "Frozen Food Packaging",
    desc: "Moisture-barrier corrugated and folding cartons rated for freezer storage and cold chain distribution.",
    moq: "From 100 units",
  },
  {
    name: "Beverage Packaging",
    desc: "Carrier cartons, sleeve packaging, and shipper boxes for bottles, cans, and pouches.",
    moq: "From 100 units",
  },
  {
    name: "Subscription & Meal Kit Boxes",
    desc: "Insulated corrugated boxes with ice pack inserts for meal kit and subscription food brands.",
    moq: "From 50 units",
  },
];

const compliance = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: "FDA-Compliant Materials",
    desc: "We use FDA-approved food-contact substrates, inks, and coatings. Suitable for direct food-contact and food-adjacent applications.",
  },
  {
    icon: <Leaf className="w-5 h-5" />,
    title: "FSC-Certified Board",
    desc: "Our food packaging uses Forest Stewardship Council (FSC) certified board. Required by Whole Foods, Target, and major natural food retailers.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "CFIA Compliant for Canada",
    desc: "Canadian Food Inspection Agency (CFIA) compliant materials for brands selling across Canada. Bilingual labeling available.",
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "BPA-Free & Food-Safe Inks",
    desc: "All inks used on food packaging are BPA-free and food-safe. Suitable for organic and natural food brands with strict ingredient standards.",
  },
];

const industries = [
  { name: "CPG & Grocery Brands", desc: "Custom retail cartons and shipping cases for grocery distribution nationwide." },
  { name: "Meal Kit Companies", desc: "Insulated corrugated boxes with custom branding for HelloFresh-style subscription businesses." },
  { name: "Bakeries & Patisseries", desc: "Windowed boxes, cake boxes, and retail cartons with food-safe board." },
  { name: "Health Food & Supplements", desc: "Folding cartons and shipping boxes for supplement and health food brands." },
  { name: "Specialty & Artisan Food", desc: "Premium kraft and custom cartons for artisan food, charcuterie, and gourmet brands." },
  { name: "Beverage Brands", desc: "Carrier cartons, six-pack boxes, and DTC shipping cases for beverage companies." },
];

const faqs = [
  {
    q: "Is your food packaging FDA-compliant?",
    a: "Yes. We use FDA-approved food-contact substrates, water-based inks, and food-safe coatings. We can provide documentation confirming FDA compliance for your specific packaging on request.",
  },
  {
    q: "Can you make food packaging that's directly in contact with food?",
    a: "Yes. We produce food-contact-safe packaging using virgin kraft board, PE-coated board, and FDA-approved direct food contact substrates. Please specify food contact requirements when requesting a quote.",
  },
  {
    q: "Do you offer moisture-resistant food packaging?",
    a: "Yes. We offer PE (polyethylene) coated corrugated and folding carton board for moisture-resistant food packaging. This is essential for frozen food, bakery, and refrigerated products.",
  },
  {
    q: "What's the minimum order for custom food packaging?",
    a: "Retail food cartons and bakery boxes start from 50 units. Corrugated food shippers start from 100 units.",
  },
  {
    q: "Can I get bilingual (English/French) printing for Canadian food compliance?",
    a: "Yes. We produce bilingual food packaging for Canadian brands to meet CFIA and Quebec labeling requirements. Provide bilingual copy in your artwork and we'll handle the layout.",
  },
  {
    q: "Are your materials FSC-certified for retailers like Whole Foods?",
    a: "Yes. Our eco-food packaging line uses FSC chain-of-custody certified board. We can provide FSC documentation for supplier compliance purposes on request.",
  },
  {
    q: "Can you produce insulated boxes for meal kit and frozen food brands?",
    a: "Yes. We produce custom insulated corrugated boxes using recyclable liner insulation for meal kit brands. These meet cold-chain requirements for 2-hour and 4-hour temperature maintenance.",
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

const FoodPackaging = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Food Packaging Supplier USA & Canada | FDA-Compliant | AAA PAK</title>
        <meta
          name="description"
          content="Custom food packaging supplier for USA and Canada. FDA-compliant, FSC-certified, BPA-free. Retail cartons, shipping boxes, meal kit packaging from 50 units. Free samples."
        />
        <link rel="canonical" href="https://www.aaapak.com/food-packaging" />
        <meta property="og:title" content="Food Packaging Supplier USA & Canada | AAA PAK" />
        <meta property="og:description" content="FDA-compliant custom food packaging from 50 units. Retail cartons, shipping boxes, meal kit packaging. FSC-certified. Delivery across USA and Canada." />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container max-w-4xl mx-auto text-center px-4">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-5 tracking-wide uppercase">
              FDA-Compliant · FSC-Certified · USA & Canada
            </span>
            <h1 className="text-4xl md:text-5xl font-black leading-tight text-foreground mb-6">
              Custom Food Packaging Supplier —{" "}
              <span className="text-primary">USA & Canada</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              FDA-compliant, food-safe packaging for CPG brands, meal kits, bakeries, and food distributors. Factory-direct pricing from 50 units — delivered across USA and Canada.
            </p>
            <ul className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              {[
                "FDA & CFIA-compliant materials",
                "FSC-certified eco options for major retailers",
                "Free physical samples shipped before ordering",
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

        {/* Compliance */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                Food Safety & <span className="text-primary">Compliance Standards</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Our food packaging meets the strictest USA and Canadian food safety requirements.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {compliance.map((c) => (
                <div key={c.title} className="flex gap-4 p-6 bg-card border border-border rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{c.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
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
                Food Packaging <span className="text-primary">Products</span>
              </h2>
              <p className="mt-4 text-muted-foreground">Custom sizes, food-safe materials, and full-color branding on every format.</p>
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

        {/* Industries */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                Food Sectors We <span className="text-primary">Specialize In</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {industries.map((ind) => (
                <div key={ind.name} className="flex gap-3 p-5 bg-card border border-border rounded-2xl">
                  <Leaf className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-foreground text-sm mb-1">{ind.name}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{ind.desc}</p>
                  </div>
                </div>
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
              "Switched to AAA Pak's corrugated line after two bad suppliers. Product damage dropped 40% in 3 months. Their structural engineers actually solved our insert problem — something nobody else bothered to do."
            </blockquote>
            <div className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-extrabold text-sm">
                FF
              </div>
              <div className="text-left">
                <p className="text-white font-bold">James Torres</p>
                <p className="text-white/70 text-sm">Operations Lead, FreshFoods Inc.</p>
              </div>
              <div className="ml-6 text-right hidden sm:block">
                <p className="text-2xl font-extrabold text-white">40%</p>
                <p className="text-white/70 text-xs">fewer damaged shipments</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-background">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">
              Food Packaging Supplier — FAQ
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
              <Link to="/custom-packaging-canada" className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:border-primary/40 transition-colors">
                Custom Packaging Canada →
              </Link>
              <Link to="/corrugated-boxes" className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:border-primary/40 transition-colors">
                Corrugated Boxes →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-card border-t border-border">
          <div className="container max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-foreground mb-4">
              Get a Quote on Food-Safe Custom Packaging
            </h2>
            <p className="text-muted-foreground mb-8">
              Free quote in 24 hours. Specify food contact requirements, preferred materials, and we'll handle compliance documentation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="font-semibold px-8" onClick={() => setQuoteOpen(true)}>
                Get Free Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => setConsultOpen(true)}>
                <CalendarClock className="mr-2 w-4 h-4" />
                Talk to a Packaging Specialist
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <QuoteFormDialog open={quoteOpen} onOpenChange={setQuoteOpen} productName="Food Packaging" />
      <ConsultationDialog open={consultOpen} onOpenChange={setConsultOpen} />
    </>
  );
};

export default FoodPackaging;
