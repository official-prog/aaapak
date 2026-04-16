import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PRODUCTS = [
  "Corrugated Boxes",
  "Mailer Shipping Bag",
  "Rigid Boxes",
  "Reusable Shopping Bag",
  "Pouches",
  "Paper Bags",
  "Folding Cartons",
  "Displays",
  "Restaurants",
  "Inserts",
];

interface QuoteFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productName: string;
}

const QuoteFormDialog = ({ open, onOpenChange, productName }: QuoteFormDialogProps) => {
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    if (!open) setQuantity("");
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground">
            Get a Quote: Custom Packaging
          </DialogTitle>
        </DialogHeader>
        <form className="space-y-4 mt-2" onSubmit={(e) => { e.preventDefault(); onOpenChange(false); }}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="First Name" required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Last Name" required />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Email" required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="Phone Number" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="company">Company Name</Label>
              <Input id="company" placeholder="Company Name" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="quantity">Quantity</Label>
              <Select onValueChange={setQuantity}>
                <SelectTrigger id="quantity">
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
                />
              )}
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="product">Product</Label>
            <Select defaultValue={productName && PRODUCTS.includes(productName) ? productName : undefined}>
              <SelectTrigger id="product">
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
              <Label htmlFor="timeframe">Time Frame</Label>
              <Select>
                <SelectTrigger id="timeframe">
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
              <Label htmlFor="coupon">Coupon Code</Label>
              <Input id="coupon" placeholder="Coupon Code" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="description">Please describe your project</Label>
            <Textarea id="description" placeholder="Tell us about your project requirements..." className="min-h-[100px]" />
          </div>
          <Button type="submit" className="w-full font-semibold text-base h-12">
            SUBMIT
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteFormDialog;
