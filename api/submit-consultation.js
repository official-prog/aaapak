const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw_Gs0Bsx4tYFZtE5LkhYLRFcVSH5lK66fV4YUndk-Jc8Fi1yb49zq9-Lvp9lpZcy8oeA/exec";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const d = req.body || {};
  const params = new URLSearchParams({
    firstName:          d.name  || "",
    lastName:           "CONSULTATION",
    email:              "",
    phone:              d.phone || "",
    company:            "",
    product:            "",
    quantity:           "",
    timeFrame:          d.date  || "",
    couponCode:         d.time  || "",
    message:            "Consultation booked: " + (d.date || "") + " at " + (d.time || "") + " EST",
    projectDescription: "",
  });

  try {
    await fetch(`${SCRIPT_URL}?${params.toString()}`, { redirect: "follow" });
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
