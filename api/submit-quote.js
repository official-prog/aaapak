const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwkCprIKYTWJ-AI2m-vCO1CW73fn7cvZbULlvw4vXbY-7U1hdC_K3_XDlfCdi1N_Fa3/exec";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const d = req.body || {};
  const params = new URLSearchParams({
    _type:              "quote",
    firstName:          String(d.firstName          || ""),
    lastName:           String(d.lastName           || ""),
    email:              String(d.email              || ""),
    phone:              String(d.phone              || ""),
    company:            String(d.company            || ""),
    product:            String(d.product            || ""),
    quantity:           String(d.quantity           || ""),
    timeFrame:          String(d.timeFrame          || ""),
    couponCode:         String(d.couponCode         || ""),
    message:            String(d.message            || ""),
    projectDescription: String(d.projectDescription || ""),
  });
  fetch(`${SCRIPT_URL}?${params.toString()}`, { redirect: "follow" }).catch(() => {});
  return res.status(200).json({ ok: true });
}
