import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteFormDialog from "@/components/QuoteFormDialog";
import ConsultationDialog from "@/components/ConsultationDialog";
import { ArrowRight, CheckCircle, Star, Package, Shield, CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { value: "100", label: "Unit Minimum" },
  { value: "15–25", label: "Business Day Delivery" },
  { value: "DIRECT", label: "Factory Pricing" },
  { value: "48–72h", label: "Design Mockup" },
];

const boxStyles = [
  {
    name: "RSC, Regular Slotted Container",
    desc: "The industry standard. Four equal-length flaps fold to form top and bottom. Best for general shipping and storage. Cost-effective for high volumes.",
    uses: "E-commerce, retail distribution, wholesale",
  },
  {
    name: "Die-Cut Custom Boxes",
    desc: "Precisely cut to any shape. Includes auto-bottom, snap-lock bottom, and fully enclosed styles. Ideal for branded unboxing experiences.",
    uses: "Subscription boxes, beauty, consumer goods",
  },
  {
    name: "Mailer Boxes (Tuck-Top)",
    desc: "Self-locking tuck-top design, no tape required. Custom printed inside and outside. The go-to for DTC e-commerce brands.",
    uses: "DTC e-commerce, subscription boxes, gift packaging",
  },
  {
    name: "Full Overlap (FOL)",
    desc: "All flaps overlap to cover the entire top and bottom. Maximum stacking strength for heavy products.",
    uses: "Electronics, heavy industrial parts, auto components",
  },
  {
    name: "Telescoping Boxes",
    desc: "Separate lid and base. Adjustable depth. Easy access and a premium unboxing feel without rigid box pricing.",
    uses: "Apparel, shoes, gifts, cosmetics",
  },
  {
    name: "Partition & Divider Inserts",
    desc: "Corrugated cell dividers and inserts for bottles, jars, and fragile items. Custom-engineered to product dimensions.",
    uses: "Wine, spirits, skincare, ceramics",
  },
];

const flutes = [
  {
    type: "A-Flute",
    thickness: "5mm",
    desc: "Largest flute. Maximum cushioning for fragile items. Good for heavy or delicate products.",
    best: "Glassware, electronics, artwork",
  },
  {
    type: "B-Flute",
    thickness: "3mm",
    desc: "High flat-crush resistance. Good print surface. Industry standard for retail display packaging.",
    best: "Retail shelf boxes, canned goods, point-of-sale",
  },
  {
    type: "C-Flute",
    thickness: "4mm",
    desc: "Most commonly used corrugated. Balanced cushioning and stacking strength. Versatile for shipping and storage.",
    best: "General shipping, glass, furniture",
  },
  {
    type: "E-Flute",
    thickness: "1.5mm",
    desc: "Very thin. Smooth print surface. Used where presentation matters as much as protection.",
    best: "Cosmetics, food, premium retail packaging",
  },
  {
    type: "Double Wall",
    thickness: "7–8mm",
    desc: "Two flute layers. Very high burst and compression strength. For heavy, dense, or high-value products.",
    best: "Electronics, industrial, appliances",
  },
];

const industries = [
  { name: "E-Commerce & DTC", desc: "Mailer boxes and shipping cartons for Amazon FBA, Shopify, and DTC brands." },
  { name: "Food & Beverage", desc: "Eco-friendly corrugated for CPG brands, meal kits, and retail food distribution." },
  { name: "Electronics", desc: "Double-wall boxes with custom foam inserts for safe electronics shipping." },
  { name: "Beauty & Cosmetics", desc: "E-flute outer cartons and custom inserts for fragile glass and premium packaging." },
  { name: "Health & Wellness", desc: "Corrugated shippers for supplements, medical devices, and wellness products." },
  { name: "Industrial & B2B", desc: "Heavy-duty double and triple-wall corrugated for industrial parts and equipment." },
];

const faqs = [
  {
    q: "What is the minimum order quantity for custom corrugated boxes?",
    a: "Our minimum order for custom corrugated boxes starts at 100 units for RSC and standard styles. Die-cut and mailer box styles start from 50 units.",
  },
  {
    q: "What flute type should I use for my product?",
    a: "For general e-commerce shipping, C-flute is the most versatile choice. For premium retail packaging where print quality matters, B or E-flute is better. For heavy or fragile items, A-flute or double-wall C-flute provides superior protection. We can recommend the right spec for your product weight and fragility.",
  },
  {
    q: "Can you print full color on corrugated boxes?",
    a: "Yes. We offer flexographic printing (1–6 spot colors) directly on corrugated, and litho-laminate for photographic-quality printing. Matte and gloss UV coating available on litho-laminate.",
  },
  {
    q: "Do your corrugated boxes meet Amazon FBA requirements?",
    a: "Yes. We produce corrugated boxes to ISTA-6A testing standards. Our boxes meet Amazon's packaging requirements for FBA prep including burst strength, edge crush test (ECT), and box certification.",
  },
  {
    q: "How long does production and delivery take?",
    a: "Standard production and delivery to USA and Canada takes 15–25 business days from artwork approval. Timing varies by order size and product type. Rush production is available for select styles.",
  },
  {
    q: "Can you match my brand's Pantone color on corrugated?",
    a: "Yes. We match Pantone colors on flexographic printing. For precise color matching on corrugated, litho-laminate is recommended for complex artwork or photographic images.",
  },
  {
    q: "What is ECT (Edge Crush Test) and do I need to specify it?",
    a: "ECT measures stacking strength, how much vertical load a corrugated box can handle before crushing. Common specs are 32 ECT (general shipping), 44 ECT (heavier loads), and 51 ECT (heavy industrial). We'll recommend the right spec based on your product weight and shipping stack height.",
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

const CorrugatedBoxes = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Custom Corrugated Boxes | Wholesale Pricing from 100 Units | AAA Pak</title>
        <meta
          name="description"
          content="Custom corrugated boxes for USA and Canada businesses. RSC, die-cut, mailer boxes, and more. All flute types. 100-unit MOQ. CMYK and Pantone printing. 3D design mockup. 15–25 business day delivery."
        />
        <link rel="canonical" href="https://www.aaapak.com/corrugated-boxes" />
        <meta property="og:title" content="Custom Corrugated Boxes | AAA Pak" />
        <meta property="og:description" content="Factory-direct custom corrugated boxes from 100 units. All styles, all flute types, full-color printing. USA & Canada delivery in 15–25 business days." />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container max-w-4xl mx-auto text-center px-4">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-5 tracking-wide uppercase">
              All Styles · All Flutes · USA & Canada
            </span>
            <h1 className="text-4xl md:text-5xl font-black leading-tight text-foreground mb-6">
              Custom Corrugated Boxes
              <span className="text-primary">Wholesale Pricing from 100 Units</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Factory-direct corrugated packaging for e-commerce, retail, and industrial brands. RSC, die-cut, mailer boxes, and custom inserts, any flute, any print, any size.
            </p>
            <ul className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              {[
                "CMYK, Pantone & litho-laminate printing",
                "Amazon FBA-compliant corrugated",
                "Free structural samples before you order",
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

        {/* Box styles */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                Corrugated Box <span className="text-primary">Styles & Formats</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Every style available from 100 units. Custom dimensions and print on all formats.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {boxStyles.map((b) => (
                <div key={b.name} className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="font-bold text-foreground mb-2">{b.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{b.desc}</p>
                  <p className="text-xs text-primary font-medium">Best for: {b.uses}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flute guide */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                Corrugated <span className="text-primary">Flute Type Guide</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Flute type determines wall thickness, cushioning, and print quality. We'll recommend the right spec for your product.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-card border border-border">
                    <th className="text-left p-4 font-bold text-foreground text-sm">Flute Type</th>
                    <th className="text-left p-4 font-bold text-foreground text-sm">Thickness</th>
                    <th className="text-left p-4 font-bold text-foreground text-sm">Properties</th>
                    <th className="text-left p-4 font-bold text-foreground text-sm">Best Uses</th>
                  </tr>
                </thead>
                <tbody>
                  {flutes.map((f, i) => (
                    <tr key={f.type} className={`border border-border ${i % 2 === 0 ? "bg-background" : "bg-card"}`}>
                      <td className="p-4 font-semibold text-primary text-sm">{f.type}</td>
                      <td className="p-4 text-sm text-foreground">{f.thickness}</td>
                      <td className="p-4 text-sm text-muted-foreground">{f.desc}</td>
                      <td className="p-4 text-sm text-foreground">{f.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                Industries We Serve with <span className="text-primary">Corrugated Packaging</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {industries.map((ind) => (
                <div key={ind.name} className="flex gap-3 p-5 bg-card border border-border rounded-2xl">
                  <Package className="w-5 h-5 text-primary shrink-0 mt-0.5" />
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
              "Switched to AAA Pak's corrugated line after two bad suppliers. Product damage dropped 40% in 3 months. Their structural engineers actually solved our insert problem, something nobody else bothered to do."
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
                <p className="text-white/70 text-xs">fewer returns from damage</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-background">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">
              Custom Corrugated Boxes, FAQ
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
              Get a Quote on Custom Corrugated Boxes
            </h2>
            <p className="text-muted-foreground mb-8">
              Tell us your dimensions, flute type, and print requirements. Free quote in 24 hours. Free structural samples shipped before you order.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="font-semibold px-8" onClick={() => setQuoteOpen(true)}>
                Get Free Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => setConsultOpen(true)}>
                <CalendarClock className="mr-2 w-4 h-4" />
                Talk to a Packaging Expert
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <QuoteFormDialog open={quoteOpen} onOpenChange={setQuoteOpen} productName="Custom Corrugated Boxes" />
      <ConsultationDialog open={consultOpen} onOpenChange={setConsultOpen} />
    </>
  );
};

export default CorrugatedBoxes;
