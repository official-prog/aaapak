import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuoteFormDialog from "./QuoteFormDialog";
import aaapakLogo from "@/assets/aaapak-logo.png";

const navLinks = [
  { label: "Products", href: "/#products" },
  { label: "Why AAA Pak", href: "/#why-us" },
  { label: "Industries", href: "/#industries" },
  { label: "Get In Touch", href: "/#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      {/* Top bar */}
      <div className="bg-foreground text-primary-foreground">
        <div className="container flex items-center justify-between h-9 text-xs">
          <span className="hidden sm:inline">Custom Packaging for USA & Canada</span>
          <div className="flex items-center gap-4">
            <a href="tel:+18882288165" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="w-3 h-3" />
              1888 228 8165
            </a>
            <span className="hidden md:inline opacity-60">Consult with our Experts · 9:30am – 5:00pm EST</span>
          </div>
        </div>
      </div>

      <div className="container flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img src={aaapakLogo} alt="AAA Pak" className="h-10 w-auto" />
        </a>

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

        <div className="flex items-center gap-3">
          <Button size="sm" className="hidden sm:inline-flex font-semibold" onClick={() => setQuoteOpen(true)}>
            Get a Quote
          </Button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
            aria-label="Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

    </header>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Slide-in drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-card shadow-2xl flex flex-col lg:hidden transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-border shrink-0">
          <img src={aaapakLogo} alt="AAA Pak" className="h-8 w-auto" />
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 px-4 py-4 flex-1">
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
        </nav>

        {/* Bottom actions */}
        <div className="px-5 pb-8 pt-4 border-t border-border shrink-0">
          <a href="tel:+18882288165" className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Phone className="w-4 h-4" /> 1888 228 8165
          </a>
          <Button className="w-full font-semibold" onClick={() => { setQuoteOpen(true); setMobileOpen(false); }}>
            Get a Quote
          </Button>
        </div>
      </div>
    <QuoteFormDialog open={quoteOpen} onOpenChange={setQuoteOpen} productName="Custom Packaging" />
    </>
  );
};

export default Header;
