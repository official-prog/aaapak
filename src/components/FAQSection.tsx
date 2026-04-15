import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is the minimum order quantity?",
    a: "Our minimum order quantity starts at just 100 units for most products, making it accessible for startups and established brands alike.",
  },
  {
    q: "How long does production take?",
    a: "Standard production takes 10–15 business days after artwork approval. Rush orders can be completed in 5–7 business days for an additional fee.",
  },
  {
    q: "Do you offer free samples?",
    a: "Yes! We provide free generic samples so you can feel the quality. Custom printed samples are available at a small fee, which is credited toward your first order.",
  },
  {
    q: "What materials do you use?",
    a: "We use FSC-certified kraft, corrugated cardboard, rigid chipboard, and eco-friendly inks. All materials are recyclable and many are biodegradable.",
  },
  {
    q: "Do you ship to Canada?",
    a: "Absolutely. We offer free shipping across the entire USA and Canada on orders over $2,500. Expedited shipping options are also available.",
  },
  {
    q: "Can you help with packaging design?",
    a: "Yes, our in-house design team provides free design support. Simply share your brand guidelines and ideas, and we'll create a custom packaging mockup for your approval.",
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
