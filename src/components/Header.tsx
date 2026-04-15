import { useState } from "react";
import { Search, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Why AAAPAK", href: "#why-us" },
  { label: "Process", href: "#process" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      {/* Top bar */}
      <div className="bg-foreground text-primary-foreground">
        <div className="container flex items-center justify-between h-9 text-xs">
          <span className="hidden sm:inline">Custom Packaging for USA & Canada — Free Shipping on Orders $2,500+</span>
          <div className="flex items-center gap-4">
            <a href="tel:+18005551234" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="w-3 h-3" />
              1-800-555-1234
            </a>
            <span className="hidden md:inline opacity-60">Mon–Fri 9am–6pm EST</span>
          </div>
        </div>
      </div>

      <div className="container flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 shrink-0">
          <img src="/favicon.ico" alt="AAAPAK" className="w-10 h-10 rounded-lg bg-card object-contain p-1" />
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl text-foreground leading-none">AAAPAK</span>
            <span className="text-[10px] text-muted-foreground tracking-widest uppercase">Custom Packaging</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Button size="sm" className="hidden sm:inline-flex font-semibold">
            Get a Quote
          </Button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 px-4">
              <a href="tel:+18005551234" className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Phone className="w-4 h-4" /> 1-800-555-1234
              </a>
              <Button className="w-full font-semibold">Get a Quote</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
