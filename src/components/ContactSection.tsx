import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, CheckCircle, X, CalendarClock } from "lucide-react";
import { useState } from "react";

// Generate weekday dates for next 14 days
const getAvailableDates = () => {
  const dates: Date[] = [];
  const today = new Date();
  let d = new Date(today);
  d.setDate(d.getDate() + 1);
  while (dates.length < 14) {
    const day = d.getDay();
    if (day !== 0 && day !== 6) dates.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }
  return dates;
};

const TIME_SLOTS = [
  "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM",
  "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM",
];

const formatDate = (d: Date) =>
  d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });

const ContactSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showConsult, setShowConsult] = useState(false);
  const [consultSubmitted, setConsultSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const availableDates = getAvailableDates();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
    (e.target as HTMLFormElement).reset();
  };

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultSubmitted(true);
  };

  const closeConsult = () => {
    setShowConsult(false);
    setConsultSubmitted(false);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  return (
  <>
  {/* Quote Success Popup */}
  {showPopup && (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowPopup(false)}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-card rounded-2xl shadow-2xl p-10 max-w-md w-full text-center animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={() => setShowPopup(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
          <X className="w-5 h-5" />
        </button>
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-extrabold text-foreground mb-2">Quote Submitted!</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Thank you! Our packaging experts will get back to you within <span className="font-semibold text-foreground">24 hours</span> with a custom quote.
        </p>
        <div className="bg-secondary rounded-xl p-4 text-sm text-muted-foreground mb-6">
          📧 Confirmation will be sent to your email.<br />
          📞 Urgent? Call <span className="font-semibold text-foreground">1888 228 8165</span>
        </div>
        <Button className="w-full font-semibold" onClick={() => setShowPopup(false)}>Close</Button>
      </div>
    </div>
  )}

  {/* Consultation Scheduler Modal */}
  {showConsult && (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={closeConsult}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-card rounded-2xl shadow-2xl p-8 max-w-lg w-full animate-fade-in-up max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={closeConsult} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
          <X className="w-5 h-5" />
        </button>

        {consultSubmitted ? (
          <div className="text-center py-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-extrabold text-foreground mb-2">Consultation Booked!</h3>
            <p className="text-muted-foreground mb-4">
              Your call is scheduled for:
            </p>
            <div className="bg-primary/10 rounded-xl p-4 mb-6">
              <p className="font-bold text-foreground text-lg">{selectedDate && formatDate(selectedDate)}</p>
              <p className="text-primary font-semibold">{selectedTime} EST</p>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              📞 We'll call you at the number provided.<br />
              Toll free: <span className="font-semibold text-foreground">1 888 228 8165</span>
            </p>
            <Button className="w-full font-semibold" onClick={closeConsult}>Done</Button>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <CalendarClock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">Consult with our Experts</h3>
                <p className="text-xs text-muted-foreground">Mon–Fri · 9:30 AM – 5:00 PM EST · Toll free: 1 888 228 8165</p>
              </div>
            </div>

            <form onSubmit={handleConsultSubmit} className="space-y-5">
              {/* Name + Phone */}
              <div className="grid sm:grid-cols-2 gap-3">
                <Input placeholder="Your Name" required />
                <Input placeholder="Phone Number" required />
              </div>

              {/* Date picker */}
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Select Date</p>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {availableDates.map((d) => (
                    <button
                      type="button"
                      key={d.toISOString()}
                      onClick={() => setSelectedDate(d)}
                      className={`text-xs py-2 px-1 rounded-lg border text-center transition-all ${
                        selectedDate?.toDateString() === d.toDateString()
                          ? "bg-primary text-white border-primary font-semibold"
                          : "border-border hover:border-primary hover:text-primary"
                      }`}
                    >
                      <span className="block font-medium">{d.toLocaleDateString("en-US", { weekday: "short" })}</span>
                      <span className="block opacity-80">{d.toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time slots */}
              {selectedDate && (
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">Select Time <span className="text-muted-foreground font-normal">(EST)</span></p>
                  <div className="grid grid-cols-4 gap-2">
                    {TIME_SLOTS.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`text-xs py-2 rounded-lg border transition-all ${
                          selectedTime === t
                            ? "bg-primary text-white border-primary font-semibold"
                            : "border-border hover:border-primary hover:text-primary"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <Button
                className="w-full font-semibold h-11"
                type="submit"
                disabled={!selectedDate || !selectedTime}
              >
                Confirm Consultation
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  )}

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
            Tell us about your project and get a custom quote within 24 hours. Our packaging experts are here to help.
          </p>
          <div className="space-y-5">
            {[
              { icon: Phone, label: "1888 228 8165", sub: "Consult with our Experts · 9:30am – 5:00pm EST" },
              { icon: Mail, label: "quote@aaapak.com", sub: "We reply within 2 hours" },
              { icon: MapPin, label: "Toronto, ON", sub: "Serving all of USA & Canada" },
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

          {/* Book Consultation */}
          <div className="mt-8 p-5 bg-card rounded-xl border border-border">
            <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1">Call us toll free</p>
            <p className="text-xl font-extrabold text-foreground mb-3">1 888 228 8165</p>
            <p className="text-sm text-muted-foreground mb-4">Book a free consultation with our packaging experts. Available Mon–Fri, 9:30 AM – 5:00 PM EST.</p>
            <Button variant="outline" className="w-full font-semibold gap-2" onClick={() => setShowConsult(true)}>
              <CalendarClock className="w-4 h-4" />
              Schedule a Consultation
            </Button>
          </div>
        </div>

        {/* Form */}
        <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
          <h3 className="font-heading font-bold text-xl text-foreground mb-6">Request a Custom Quote</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
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
            <Button className="w-full font-semibold text-base h-12" type="submit">
              Submit Quote Request
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              No obligation. Custom quote within 24 hours. Your info is safe with us.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
  </>
  );
};

export default ContactSection;
