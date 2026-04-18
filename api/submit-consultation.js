const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyu0wK3yvcgwtbHZwsdY_ouG5o1kTiey6PYEzZnxSNGONvUZdQv2WXfIXPAC89AJKc/exec";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const d = req.body || {};
  const params = new URLSearchParams({
    firstName:  String(d.name  || ""),
    lastName:   "CONSULTATION",
    email:      "",
    phone:      String(d.phone || ""),
    company:    "",
    product:    "",
    quantity:   "",
    timeFrame:  String(d.date  || ""),
    couponCode: String(d.time  || ""),
    message:    "Consultation: " + String(d.date || "") + " at " + String(d.time || "") + " EST",
    projectDescription: "",
  });
  fetch(`${SCRIPT_URL}?${params.toString()}`, { redirect: "follow" }).catch(() => {});
  return res.status(200).json({ ok: true });
}
