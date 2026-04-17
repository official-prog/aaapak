const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw_Gs0Bsx4tYFZtE5LkhYLRFcVSH5lK66fV4YUndk-Jc8Fi1yb49zq9-Lvp9lpZcy8oeA/exec";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const d = req.body || {};
  const params = new URLSearchParams({
    firstName:          d.firstName          || "",
    lastName:           d.lastName           || "",
    email:              d.email              || "",
    phone:              d.phone              || "",
    company:            d.company            || "",
    product:            d.product            || "",
    quantity:           d.quantity           || "",
    timeFrame:          d.timeFrame          || "",
    couponCode:         d.couponCode         || "",
    message:            d.message            || "",
    projectDescription: d.projectDescription || "",
  });

  try {
    await fetch(`${SCRIPT_URL}?${params.toString()}`, { redirect: "follow" });
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
