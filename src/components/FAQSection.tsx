import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReactNode } from "react";

const moqTable = (
  <div className="mt-3 overflow-x-auto rounded-lg border border-border">
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-primary/10">
          <th className="text-left px-4 py-3 font-semibold text-foreground">Product</th>
          <th className="text-left px-4 py-3 font-semibold text-foreground">Minimum Quantity</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["Folding Carton Boxes",        "1,000 boxes"],
          ["Corrugated Boxes",            "500 boxes"],
          ["Rigid Boxes",                 "500 boxes"],
          ["Paper Bags",                  "1,000 bags"],
          ["Gusset Bags",                 "10,000 bags"],
          ["Stand-up Pouches",            "10,000 pouches"],
          ["Kraft Pouches",               "10,000 pouches"],
          ["Floor Displays",              "100 displays"],
          ["Cardboard Inserts",           "1,000 inserts"],
          ["Molded Pulp Inserts",         "10,000 inserts"],
          ["Food Grade Paper Inserts",    "5,000 inserts"],
          ["Food Grade Boxes",            "5,000 boxes"],
          ["Cup Sleeves",                 "10,000 sleeves"],
          ["Labels & Stickers",           "1,000 labels"],
          ["Kraft Paper Mailers",         "10,000 mailers"],
          ["Poly Mailers",                "10,000 mailers"],
          ["Recycled Bubble Mailers",     "10,000 mailers"],
          ["Bubble Mailers",              "10,000 mailers"],
          ["Packing Tape",                "500 rolls"],
          ["Tissue Paper",                "10,000 sheets"],
          ["Food Grade Tissue Paper",     "10,000 sheets"],
        ].map(([product, qty], i) => (
          <tr key={product} className={i % 2 === 0 ? "bg-card" : "bg-secondary"}>
            <td className="px-4 py-2.5 text-foreground">{product}</td>
            <td className="px-4 py-2.5 font-medium text-primary">{qty}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "What is your required minimum order quantity (MOQ)?",
    a: moqTable,
  },
  {
    q: "How long does it take to complete an order?",
    a: "The turnaround for your packaging project depends on its complexity and specifications, which are assessed during your consultation. Since every order is unique, offering a firm completion date upfront isn't always possible. We suggest reviewing our typical turnaround timelines for a general idea of production time, noting that peak periods may affect these estimates.",
  },
  {
    q: "Can I increase or reduce my order quantity?",
    a: "Yes, you can increase or reduce your order quantity as long as the final proof has not been approved. Please contact your Product Specialist as early as possible to request a change in quantity. Your order will be reviewed again, and an updated quotation will be provided based on the revised volume. After the final proof is approved and production has started, no further changes to the order quantity can be made.",
  },
  {
    q: "Am I allowed to cancel my order?",
    a: "Yes, you may cancel your order if the final proof has not yet been approved. Please contact your Product Specialist to request a cancellation. Once the final proof is approved and the order enters mass production, it can no longer be changed or canceled.",
  },
  {
    q: "Will I get to review a preview of my design?",
    a: "Before we begin production, our Pre-Press Team checks your file for issues and sends you a proof for confirmation. If your artwork isn't print-ready, we'll notify you and help correct it before moving ahead.",
  },
  {
    q: "How can I track the progress of my order?",
    a: "For any order updates, you can either connect with your assigned Product Specialist directly or call our helpline. They'll provide up-to-date information on your order's status.",
  },
  {
    q: "Do you supply custom inserts?",
    a: "Yes, we provide fully customized inserts created by our experienced Structural Engineering Team to ensure a perfect fit for your packaging. For precise dimensions, you may send us a product sample or share a 3D CAD file for accurate fitting. Minimum order quantities apply for inserts ordered separately, but these can be adjusted when inserts are ordered together with boxes.",
  },
  {
    q: "Do you offer express or rush production services?",
    a: "Depending on our current production volume and scheduling, we may be able to fast-track your order. We recommend checking with a Product Specialist to see if expedited options are available at the time you order.",
  },
  {
    q: "What's the procedure for placing a repeat order?",
    a: "Placing a repeat order is very simple. You may contact your original Product Specialist or send your request to quote@aaapak.com or call +1 888 228 8165 (Monday to Friday, 9:30am to 5:00pm EST). A member of our team will assist you promptly with confirming and processing your reorder.",
  },
  {
    q: "How is the packaging order process structured?",
    a: "Although each project is unique, most follow a similar workflow: Consultation to review project needs, Quotation based on your specifications, Structural design and artwork setup, Sample creation and prototyping, Pre-press and final proof approval, Full production, Shipping and fulfillment. For specifics on your project's process, speak with your Product Specialist.",
  },
  {
    q: "Is it possible to modify my design after the order has been placed?",
    a: "Once the final proof is approved, design changes usually can't be made because production may have begun. However, if you notify your Product Specialist immediately, we'll do our best to halt production and accommodate your revision. If adjustments require restarting production, additional charges will apply, which will be added to your updated invoice.",
  },
  {
    q: "How can I request a price estimate for my packaging?",
    a: "You have multiple convenient ways to request a quote: Contact us directly via call, live chat, or email quote@aaapak.com during business hours; use our quote request form by completing the form on our website with your details; or request via product pages by adding products to your quote list, completing the specs, and submitting. To streamline your request, it's helpful to have your packaging type, quantity, size, and print details ready in advance. Response times are typically 1 to 2 business days, though it may extend to 2 to 4 days during peak seasons.",
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
