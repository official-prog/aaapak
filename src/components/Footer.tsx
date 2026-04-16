import { Button } from "@/components/ui/button";
import { Leaf, Mail } from "lucide-react";
import { useState } from "react";
import aaapakLogo from "@/assets/aaapak-logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, this would send the email to a server
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container py-16">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="mb-4">
            <img src={aaapakLogo} alt="AAA Pak" className="h-10 w-auto" />
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
          {
            title: "Products",
            links: [
              { label: "Corrugated Boxes", href: "#products" },
              { label: "Mailer Bags", href: "#products" },
              { label: "Rigid Boxes", href: "#products" },
              { label: "Shopping Bags", href: "#products" },
              { label: "Folding Cartons", href: "#products" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "About Us", href: "#why-us" },
              { label: "Sustainability", href: "#why-us" },
              { label: "Careers", href: "#contact" },
              { label: "Blog", href: "#services" },
              { label: "Contact", href: "#contact" },
            ],
          },
        ].map((col) => (
          <div key={col.title}>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {link.label}
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
          {isSubscribed ? (
            <div className="text-center py-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Mail className="w-4 h-4 text-green-600" />
              </div>
              <p className="text-xs opacity-70">Thanks for subscribing!</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50" />
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg pl-10 pr-3 py-2.5 text-sm placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button size="sm" type="submit">Subscribe</Button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center">
        <p className="text-xs opacity-50">© 2026 AAA PAK. All rights reserved. Custom packaging for brands across USA & Canada.</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
