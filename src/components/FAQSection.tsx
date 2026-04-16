import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is the minimum order quantity?",
    a: "Our minimum order quantity (MOQ) starts at just 100 units for most product types — including corrugated boxes, mailer boxes, folding cartons, and shopping bags. For specialty items like rigid boxes or custom pouches, the MOQ may start at 50 units. We designed our MOQs to be accessible for small businesses, startups, and growing brands, so you don't need to overcommit on inventory before testing the market. If you're unsure which quantity is right for you, our team is happy to guide you based on your budget and sales volume.",
  },
  {
    q: "How long does production take?",
    a: "Standard production time is 10–15 business days after your final artwork has been approved. This includes printing, cutting, folding, and quality inspection before shipment. If you need your order faster, we offer a Rush Production option that can be completed in 5–7 business days for an additional fee — ideal for product launches, seasonal campaigns, or trade shows. Shipping transit time is separate and depends on your location within the USA or Canada. We always recommend ordering early to avoid last-minute stress.",
  },
  {
    q: "Do you offer free samples?",
    a: "Yes! We offer free generic (unprinted) samples so you can physically evaluate the material quality, box structure, and finish before placing your order. These are shipped at no cost within North America. If you'd like a custom-printed sample with your actual artwork and branding, we can produce one for a small sample fee — which is fully credited back to your account when you place your full production order. Seeing and touching your packaging before committing to a large run is something we strongly encourage.",
  },
  {
    q: "What materials do you use?",
    a: "We use only responsibly sourced, high-quality materials across all our product lines. Our corrugated and kraft packaging is made from FSC-certified paperboard, ensuring sustainable forest management. Rigid boxes use premium greyboard with art paper lamination. We print using soy-based or water-based inks that are low in VOCs and safe for food-adjacent packaging. All our materials are recyclable, and many options — including kraft and corrugated — are biodegradable. We can also provide eco-certified material documentation upon request for brands with sustainability commitments.",
  },
  {
    q: "Do you ship to Canada?",
    a: "Absolutely. We proudly serve both the United States and Canada with standard and expedited shipping options. Our fulfillment centers are strategically located to minimize transit times for customers in Toronto, Vancouver, Montreal, Calgary, and beyond. Standard shipping typically takes 3–7 business days depending on your location. We also offer expedited 1–3 day delivery for urgent orders. All shipments are fully tracked, and you'll receive a tracking number as soon as your order leaves our facility.",
  },
  {
    q: "Can you help with packaging design?",
    a: "Yes — our in-house creative team offers full packaging design support at no extra cost for qualifying orders. Simply share your logo, brand colors, fonts, and any reference images or ideas, and our designers will create a professionally crafted dieline mockup for your review. We work with you through revisions until the design is exactly right. If you already have print-ready artwork, we'll perform a pre-press check to ensure color accuracy, bleed, and file specs are all production-ready. We support AI, PDF, and PSD file formats.",
  },
  {
    q: "What printing options are available?",
    a: "We offer a wide range of printing and finishing options to make your packaging stand out. Printing methods include CMYK offset printing, digital printing for short runs, and Pantone (PMS) color matching for precise brand consistency. Finishing options include gloss or matte lamination, soft-touch lamination, spot UV coating, embossing, debossing, foil stamping (gold, silver, holographic), and aqueous coating. These finishes not only enhance visual appeal but also improve durability and unboxing experience — a key factor in customer retention and social sharing.",
  },
  {
    q: "How do I place an order?",
    a: "Placing an order with AAA PAK is simple. Start by filling out our Get a Quote form on this page or emailing us at quote@aaapak.com with your product type, dimensions, quantity, and any design files you have. Our team will respond within 2 business hours with a detailed quote. Once you approve the quote and submit your artwork, we'll send a digital proof for your sign-off before production begins. We accept payment via credit card, wire transfer, and PayPal. For repeat customers, we offer net payment terms after the first order.",
  },
  {
    q: "Do you offer custom sizes and shapes?",
    a: "Yes — we specialize in fully custom packaging. You are not limited to standard sizes. We can manufacture boxes, bags, pouches, and cartons in any dimension you require, including non-standard shapes, window cutouts, magnetic closures, drawer-style openings, and more. Simply provide us with your desired dimensions (length × width × depth) or a product sample, and we'll engineer a dieline that fits perfectly. Custom structural design is included as part of our quoting process.",
  },
];


const FAQSection = () => (
  <section id="faq" className="py-20 md:py-28 bg-card">
    <div className="container max-w-3xl">
      <div className="text-center mb-14">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
          FAQ
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Everything you need to know about ordering custom packaging.
        </p>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-secondary rounded-xl border border-border px-6 data-[state=open]:shadow-sm"
          >
            <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
