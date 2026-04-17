import { Button } from "@/components/ui/button";
import { Leaf, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import aaapakLogo from "@/assets/aaapak-logo.png";

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61580537678458&rdid=5v0t3ueaOkn1ZxDZ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Yy24mm3Ry%2F#",
    icon: <Facebook className="w-4 h-4" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/aaapackagingsolution?igsh=MTQ4MHB6MHR6cjJv",
    icon: <Instagram className="w-4 h-4" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/aaapak/?viewAsMember=true",
    icon: <Linkedin className="w-4 h-4" />,
  },
  {
    label: "Pinterest",
    href: "https://ca.pinterest.com/aaapackagingsolution/",
    icon: <PinterestIcon />,
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      await fetch("/api/submit-newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
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
          <div className="flex items-center gap-3 mt-5">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-full bg-primary-foreground/10 hover:bg-primary flex items-center justify-center transition-colors duration-200"
              >
                {s.icon}
              </a>
            ))}
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
