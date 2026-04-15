import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-28 bg-secondary">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Info */}
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Ready to Create Your <span className="text-primary">Custom Packaging</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Tell us about your project and get a free quote within 24 hours. Our packaging experts are here to help.
          </p>
          <div className="space-y-5">
            {[
              { icon: Phone, label: "1-800-555-1234", sub: "Mon–Fri 9am–6pm EST" },
              { icon: Mail, label: "quote@aaapak.com", sub: "We reply within 2 hours" },
              { icon: MapPin, label: "Toronto, ON & New York, NY", sub: "Serving all of USA & Canada" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
          <h3 className="font-heading font-bold text-xl text-foreground mb-6">Request a Free Quote</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Full Name" required />
              <Input type="email" placeholder="Email Address" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Company Name" />
              <Input placeholder="Phone Number" />
            </div>
            <Input placeholder="Product Type (e.g. Mailer Boxes, Rigid Boxes)" />
            <Textarea placeholder="Tell us about your project — quantity, size, materials, timeline..." className="min-h-[120px]" />
            <Button className="w-full font-semibold text-base h-12">
              Submit Quote Request
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              No obligation. Free quote within 24 hours. Your info is safe with us.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
