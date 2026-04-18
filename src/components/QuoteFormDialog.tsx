import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

const PRODUCTS = [
  "Corrugated",
  "Folding Carton",
  "Rigid Boxes",
  "Displays",
  "Mailer Bags",
  "Paper Bags",
  "Pouches",
  "Reusable Bags",
];

interface QuoteFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productName: string;
}

const QuoteFormDialog = ({ open, onOpenChange, productName }: QuoteFormDialogProps) => {
  const [quantity, setQuantity]     = useState("");
  const [exactQty, setExactQty]     = useState("");
  const [product, setProduct]       = useState("");
  const [timeframe, setTimeframe]   = useState("");
  const [submitted, setSubmitted]   = useState(false);
  const [loading, setLoading]       = useState(false);

  useEffect(() => {
    if (!open) {
      setQuantity("");
      setExactQty("");
      setProduct("");
      setTimeframe("");
      setSubmitted(false);
      setLoading(false);
    }
    if (open && productName && PRODUCTS.includes(productName)) {
      setProduct(productName);
    }
  }, [open, productName]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const g = (id: string) =>
      (form.querySelector(`#dlg-${id}`) as HTMLInputElement | HTMLTextAreaElement)?.value || "";

    await fetch("/api/submit-quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName:          g("firstName"),
        lastName:           g("lastName"),
        email:              g("email"),
        phone:              g("phone"),
        company:            g("company"),
        product:            product,
        quantity:           quantity === "500+" ? exactQty || "500+" : quantity,
        timeFrame:          timeframe,
        couponCode:         g("coupon"),
        message:            "",
        projectDescription: g("description"),
      }),
    }).catch(() => {});

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground">
            Get a Quote: Custom Packaging
          </DialogTitle>
        </DialogHeader>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-extrabold text-foreground mb-2">Quote Submitted!</h3>
            <p className="text-muted-foreground mb-6">
              Our packaging experts will get back to you within <strong>24 hours</strong>.
            </p>
            <Button className="w-full font-semibold" onClick={() => onOpenChange(false)}>Close</Button>
          </div>
        ) : (
          <form className="space-y-4 mt-2" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="dlg-firstName">First Name</Label>
                <Input id="dlg-firstName" placeholder="First Name" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="dlg-lastName">Last Name</Label>
                <Input id="dlg-lastName" placeholder="Last Name" required />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="dlg-email">Email</Label>
                <Input id="dlg-email" type="email" placeholder="Email" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="dlg-phone">Phone Number</Label>
                <Input id="dlg-phone" type="tel" placeholder="Phone Number" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="dlg-company">Company Name</Label>
                <Input id="dlg-company" placeholder="Company Name" />
              </div>
              <div className="space-y-1.5">
                <Label>Quantity</Label>
                <Select onValueChange={setQuantity} value={quantity}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select quantity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-50">0 – 50</SelectItem>
                    <SelectItem value="50-100">50 – 100</SelectItem>
                    <SelectItem value="100-500">100 – 500</SelectItem>
                    <SelectItem value="500+">500+</SelectItem>
                  </SelectContent>
                </Select>
                {quantity === "500+" && (
                  <Input
                    className="mt-2"
                    type="number"
                    placeholder="Enter exact quantity"
                    min={500}
                    value={exactQty}
                    onChange={(e) => setExactQty(e.target.value)}
                  />
                )}
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>Product</Label>
              <Select onValueChange={setProduct} value={product}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a product" />
                </SelectTrigger>
                <SelectContent>
                  {PRODUCTS.map((p) => (
                    <SelectItem key={p} value={p}>{p}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label>Time Frame</Label>
                <Select onValueChange={setTimeframe} value={timeframe}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time frame" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-2weeks">1 – 2 Weeks</SelectItem>
                    <SelectItem value="2-4weeks">2 – 4 Weeks</SelectItem>
                    <SelectItem value="1-2months">1 – 2 Months</SelectItem>
                    <SelectItem value="2-3months">2 – 3 Months</SelectItem>
                    <SelectItem value="3-6months">3 – 6 Months</SelectItem>
                    <SelectItem value="6months+">6 Months+</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="dlg-coupon">Coupon Code</Label>
                <Input id="dlg-coupon" placeholder="Coupon Code" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="dlg-description">Please describe your project</Label>
              <Textarea id="dlg-description" placeholder="Tell us about your project requirements..." className="min-h-[100px]" />
            </div>
            <Button type="submit" className="w-full font-semibold text-base h-12" disabled={loading}>
              {loading ? "Submitting..." : "SUBMIT"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default QuoteFormDialog;
