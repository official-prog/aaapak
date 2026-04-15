import { Button } from "@/components/ui/button";
import { Leaf, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container py-16">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-extrabold text-xs">AAA</span>
            </div>
            <span className="font-heading font-bold text-xl">AAAPAK</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            Premium custom packaging solutions for brands across USA & Canada. Quality you can feel, sustainability you can trust.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <Leaf className="w-4 h-4 text-primary" />
            <span className="text-xs opacity-70">FSC Certified · ISO 9001 · Carbon Neutral</span>
          </div>
        </div>

        {/* Links */}
        {[
          { title: "Products", links: ["Corrugated Boxes", "Mailer Bags", "Rigid Boxes", "Shopping Bags", "Folding Cartons"] },
          { title: "Company", links: ["About Us", "Sustainability", "Careers", "Blog", "Contact"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-heading font-bold text-sm mb-4 uppercase tracking-wider opacity-50">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div>
          <h4 className="font-heading font-bold text-sm mb-4 uppercase tracking-wider opacity-50">Stay Updated</h4>
          <p className="text-sm opacity-70 mb-4">Get packaging tips, trends, and exclusive offers.</p>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50" />
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg pl-10 pr-3 py-2.5 text-sm placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button size="sm">Subscribe</Button>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center">
        <p className="text-xs opacity-50">© 2026 AAAPAK. All rights reserved. Custom packaging for brands across USA & Canada.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
