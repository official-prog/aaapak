import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, CheckCircle, X, CalendarClock } from "lucide-react";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" className="w-4 h-4 fill-primary" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 1C7.716 1 1 7.716 1 16c0 2.628.687 5.098 1.886 7.244L1 31l7.978-1.862A14.94 14.94 0 0016 31c8.284 0 15-6.716 15-15S24.284 1 16 1zm0 27.333a12.29 12.29 0 01-6.27-1.716l-.449-.267-4.736 1.107 1.13-4.617-.293-.474A12.26 12.26 0 013.667 16C3.667 9.189 9.189 3.667 16 3.667S28.333 9.189 28.333 16 22.811 28.333 16 28.333zm6.73-9.188c-.369-.184-2.184-1.078-2.522-1.201-.338-.123-.584-.184-.83.184-.245.369-.952 1.201-1.167 1.447-.215.245-.43.276-.799.092-.369-.184-1.558-.574-2.968-1.83-1.097-.978-1.838-2.185-2.053-2.554-.215-.369-.023-.568.162-.752.166-.165.369-.43.553-.645.184-.215.245-.369.369-.614.123-.245.061-.46-.031-.644-.092-.184-.83-2.001-1.137-2.739-.299-.719-.604-.621-.83-.633l-.706-.012c-.245 0-.645.092-.983.46-.338.369-1.29 1.262-1.29 3.078s1.321 3.571 1.505 3.816c.184.245 2.6 3.969 6.302 5.565.881.38 1.568.607 2.104.777.884.281 1.689.241 2.326.146.709-.105 2.184-.893 2.492-1.756.307-.862.307-1.601.215-1.756-.092-.153-.338-.245-.706-.43z"/>
  </svg>
);
import { useState } from "react";

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
  const [consultName, setConsultName] = useState("");
  const [consultPhone, setConsultPhone] = useState("");

  const availableDates = getAvailableDates();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const g = (id: string) =>
      (document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement).value;
    fetch("/api/submit-quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName:          g("firstName"),
        lastName:           g("lastName"),
        email:              g("email"),
        phone:              g("phone"),
        company:            g("company"),
        product:            g("product"),
        quantity:           g("quantity"),
        timeFrame:          g("timeFrame"),
        couponCode:         g("couponCode"),
        message:            g("message"),
        projectDescription: g("projectDescription"),
      }),
    }).catch(() => {});
    setShowPopup(true);
    (e.target as HTMLFormElement).reset();
  };

  const handleConsultSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/submit-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:  consultName,
          phone: consultPhone,
          date:  selectedDate ? formatDate(selectedDate) : "",
          time:  selectedTime ?? "",
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        console.error("Consultation submit error:", err);
      }
    } catch (err) {
      console.error("Consultation fetch error:", err);
    }
    setConsultSubmitted(true);
  };

  const closeConsult = () => {
    setShowConsult(false);
    setConsultSubmitted(false);
    setSelectedDate(null);
    setSelectedTime(null);
    setConsultName("");
    setConsultPhone("");
  };

  return (
  <>
  {/* Quote Success Popup */}
  {showPopup && (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowPopup(false)}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-card rounded-2xl shadow-2xl p-6 sm:p-10 max-w-md w-full text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={() => setShowPopup(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
          <X className="w-5 h-5" />
        </button>
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mb-2">Quote Submitted!</h3>
        <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
          Thank you! Our packaging experts will get back to you within <span className="font-semibold text-foreground">24 hours</span> with a custom quote.
        </p>
        <div className="bg-secondary rounded-xl p-3 sm:p-4 text-xs sm:text-sm text-muted-foreground mb-4">
          📧 Confirmation will be sent to your email.<br />
          📞 Urgent? Call <span className="font-semibold text-foreground">1888 228 8165</span>
        </div>
        <Button className="w-full font-semibold" onClick={() => setShowPopup(false)}>Close</Button>
      </div>
    </div>
  )}

  {/* Consultation Scheduler Modal */}
  {showConsult && (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4" onClick={closeConsult}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-card rounded-2xl shadow-2xl p-5 sm:p-8 max-w-lg w-full max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={closeConsult} className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors">
          <X className="w-5 h-5" />
        </button>

        {consultSubmitted ? (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-extrabold text-foreground mb-2">Consultation Booked!</h3>
            <p className="text-muted-foreground mb-3 text-sm">Your call is scheduled for:</p>
            <div className="bg-primary/10 rounded-xl p-3 mb-4">
              <p className="font-bold text-foreground">{selectedDate && formatDate(selectedDate)}</p>
              <p className="text-primary font-semibold text-sm">{selectedTime} EST</p>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              📞 We'll call you at the number provided.<br />
              Toll free: <span className="font-semibold text-foreground">1 888 228 8165</span>
            </p>
            <Button className="w-full font-semibold" onClick={closeConsult}>Done</Button>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <CalendarClock className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-base text-foreground">Consult with our Experts</h3>
                <p className="text-xs text-muted-foreground">Mon–Fri · 9:30 AM – 5:00 PM EST</p>
              </div>
            </div>

            <form onSubmit={handleConsultSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <Input placeholder="Your Name" required value={consultName} onChange={(e) => setConsultName(e.target.value)} className="h-9 text-sm" />
                <Input placeholder="Phone Number" required value={consultPhone} onChange={(e) => setConsultPhone(e.target.value)} className="h-9 text-sm" />
              </div>

              <div>
                <p className="text-xs font-semibold text-foreground mb-2">Select Date</p>
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-1.5">
                  {availableDates.map((d) => (
                    <button
                      type="button"
                      key={d.toISOString()}
                      onClick={() => setSelectedDate(d)}
                      className={`text-[10px] py-1.5 px-1 rounded-lg border text-center transition-all ${
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

              {selectedDate && (
                <div>
                  <p className="text-xs font-semibold text-foreground mb-2">Select Time <span className="text-muted-foreground font-normal">(EST)</span></p>
                  <div className="grid grid-cols-4 gap-1.5">
                    {TIME_SLOTS.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`text-[10px] py-1.5 rounded-lg border transition-all ${
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

              <Button className="w-full font-semibold h-10" type="submit" disabled={!selectedDate || !selectedTime}>
                Confirm Consultation
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  )}

  <section id="contact" className="py-12 md:py-28 bg-secondary scroll-mt-28">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch">

        {/* Info */}
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3 tracking-wide uppercase">
            Get In Touch
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mb-3 md:mb-4">
            Ready to Create Your <span className="text-primary">Custom Packaging</span>?
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-5 md:mb-8 leading-relaxed">
            Tell us about your project and get a custom quote within 24 hours. Our packaging experts are here to help.
          </p>
          <div className="space-y-3 sm:space-y-5">
            {[
              { icon: Mail,   label: "quote@aaapak.com", sub: "We reply within 2 hours" },
              { icon: MapPin, label: "Toronto, ON",       sub: "Serving all of USA & Canada" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm md:text-base">{item.label}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{item.sub}</p>
                </div>
              </div>
            ))}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <WhatsAppIcon />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm md:text-base">+1 416 435 2256</p>
                <p className="text-xs md:text-sm text-muted-foreground">Chat with us on WhatsApp</p>
              </div>
            </div>
          </div>

          {/* Book Consultation */}
          <div className="mt-5 md:mt-8 p-4 sm:p-5 bg-card rounded-xl border border-border">
            <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1">Call us toll free</p>
            <p className="text-lg md:text-xl font-extrabold text-foreground mb-2">1 888 228 8165</p>
            <p className="text-xs md:text-sm text-muted-foreground mb-3">Book a free consultation with our packaging experts. Available Mon–Fri, 9:30 AM – 5:00 PM EST.</p>
            <Button variant="outline" className="w-full font-semibold gap-2 h-9 md:h-10 text-sm" onClick={() => setShowConsult(true)}>
              <CalendarClock className="w-4 h-4" />
              Schedule a Consultation
            </Button>
          </div>
        </div>

        {/* Form */}
        <div className="bg-card rounded-2xl border border-border p-4 sm:p-6 shadow-sm h-full flex flex-col">
          <h3 className="font-heading font-bold text-base sm:text-lg text-foreground mb-3 sm:mb-4">Request a Custom Quote</h3>
          <form className="flex flex-col flex-1 gap-2 sm:gap-3" onSubmit={handleSubmit}>
            {/* Always 2-column on mobile */}
            <div className="grid grid-cols-2 gap-2">
              <Input id="firstName" placeholder="First Name" required className="h-9 text-xs sm:text-sm" />
              <Input id="lastName"  placeholder="Last Name"  required className="h-9 text-xs sm:text-sm" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Input id="email" type="email" placeholder="Email" required className="h-9 text-xs sm:text-sm" />
              <Input id="phone" placeholder="Phone" className="h-9 text-xs sm:text-sm" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Input id="company" placeholder="Company" className="h-9 text-xs sm:text-sm" />
              <Input id="product" placeholder="Product Type" className="h-9 text-xs sm:text-sm" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Input id="quantity"  placeholder="Quantity" className="h-9 text-xs sm:text-sm" />
              <Input id="timeFrame" placeholder="Time Frame" className="h-9 text-xs sm:text-sm" />
            </div>
            <Input id="couponCode" placeholder="Coupon Code (optional)" className="h-9 text-xs sm:text-sm" />
            <Textarea id="message" placeholder="Message" className="min-h-[56px] sm:min-h-[72px] text-xs sm:text-sm resize-none" />
            <Textarea id="projectDescription" placeholder="Project description (size, materials, artwork, requirements…)" className="flex-1 min-h-[64px] sm:min-h-[80px] text-xs sm:text-sm resize-none" />
            <div>
              <Button className="w-full font-semibold h-10 text-sm" type="submit">
                Submit Quote Request
              </Button>
              <p className="text-[10px] sm:text-xs text-center text-muted-foreground mt-2">
                No obligation · Custom quote within 24 hours · Your info is safe with us.
              </p>
            </div>
          </form>
        </div>

      </div>
    </div>
  </section>
  </>
  );
};

export default ContactSection;
