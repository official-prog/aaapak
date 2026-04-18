const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwkCprIKYTWJ-AI2m-vCO1CW73fn7cvZbULlvw4vXbY-7U1hdC_K3_XDlfCdi1N_Fa3/exec";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const d = req.body || {};
  const params = new URLSearchParams({
    type:       "Consultation",
    name:       String(d.name  || ""),
    email:      "",
    phone:      String(d.phone || ""),
    company:    "",
    product:    "",
    quantity:   "",
    timeFrame:  String(d.date  || ""),
    couponCode: String(d.time  || ""),
    message:    "Consultation booked: " + String(d.date || "") + " at " + String(d.time || "") + " EST",
    projectDescription: "",
  });
  fetch(`${SCRIPT_URL}?${params.toString()}`, { redirect: "follow" }).catch(() => {});
  return res.status(200).json({ ok: true });
}
