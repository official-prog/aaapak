import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface QuoteFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productName: string;
}

const QuoteFormDialog = ({ open, onOpenChange, productName }: QuoteFormDialogProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-xl font-bold text-foreground">
          Get a Quote — {productName}
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
            <Input id="quantity" type="number" placeholder="Quantity" min={1} />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="timeframe">Time Frame</Label>
            <Input id="timeframe" placeholder="e.g. 2 weeks" />
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

export default QuoteFormDialog;
