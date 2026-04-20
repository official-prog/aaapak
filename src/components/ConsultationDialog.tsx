import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, CalendarClock } from "lucide-react";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DAY   = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function getWeekdays(count: number) {
  const days: Date[] = [];
  const d = new Date();
  d.setDate(d.getDate() + 1);
  while (days.length < count) {
    if (d.getDay() !== 0 && d.getDay() !== 6) days.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }
  return days;
}

const ConsultationDialog = ({ open, onOpenChange }: Props) => {
  const [name, setName]           = useState("");
  const [phone, setPhone]         = useState("");
  const [selected, setSelected]   = useState<Date | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const dates = getWeekdays(14);

  useEffect(() => {
    if (!open) {
      setName(""); setPhone(""); setSelected(null);
      setSubmitted(false); setLoading(false);
    }
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) return;
    setLoading(true);
    const dateStr = `${DAY[selected.getDay()]} ${MONTH[selected.getMonth()]} ${selected.getDate()}, ${selected.getFullYear()}`;
    await fetch("/api/submit-consultation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, date: dateStr, time: "9:30 AM – 5:00 PM" }),
    }).catch(() => {});
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 gap-0 max-w-[560px] w-[calc(100vw-32px)] overflow-hidden rounded-2xl">

        {submitted ? (
          <div className="text-center py-12 px-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-extrabold text-foreground mb-2">Consultation Booked!</h3>
            <p className="text-muted-foreground mb-6">
              We'll call you on{" "}
              <strong>
                {selected && `${DAY[selected.getDay()]}, ${MONTH[selected.getMonth()]} ${selected.getDate()}`}
              </strong>{" "}
              during business hours.
            </p>
            <Button className="w-full font-semibold" onClick={() => onOpenChange(false)}>Close</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Header */}
            <div className="flex items-center gap-4 px-6 pt-6 pb-5">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <CalendarClock className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-foreground">Consult with our Experts</h2>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Mon–Fri · 9:30 AM – 5:00 PM EST · Toll free: 1 888 228 8165
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 space-y-5">
              {/* Name + Phone row */}
              <div className="grid grid-cols-2 gap-3">
                <Input
                  placeholder="Your Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 rounded-xl border-border/70 bg-secondary/30 text-base"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-12 rounded-xl border-border/70 bg-secondary/30 text-base"
                />
              </div>

              {/* Date grid */}
              <div className="space-y-2">
                <p className="text-base font-bold text-foreground">Select Date</p>
                <div className="grid grid-cols-4 gap-2">
                  {dates.map((d) => {
                    const active = selected?.toDateString() === d.toDateString();
                    return (
                      <button
                        key={d.toDateString()}
                        type="button"
                        onClick={() => setSelected(d)}
                        className={`flex flex-col items-center py-3 rounded-xl border text-center transition-all duration-150 ${
                          active
                            ? "bg-primary text-white border-primary shadow-sm"
                            : "bg-white text-foreground border-border hover:border-primary/40 hover:bg-primary/5"
                        }`}
                      >
                        <span className={`text-xs font-medium ${active ? "text-white/80" : "text-muted-foreground"}`}>
                          {DAY[d.getDay()]}
                        </span>
                        <span className="text-sm font-semibold mt-0.5">
                          {MONTH[d.getMonth()]} {d.getDate()}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full h-12 font-semibold text-base rounded-xl"
                disabled={loading || !selected}
              >
                {loading ? "Booking..." : "Confirm Consultation"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationDialog;
