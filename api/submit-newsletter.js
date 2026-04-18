const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw_Gs0Bsx4tYFZtE5LkhYLRFcVSH5lK66fV4YUndk-Jc8Fi1yb49zq9-Lvp9lpZcy8oeA/exec";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const d = req.body || {};

  const params = new URLSearchParams({
    firstName:          "Newsletter",
    lastName:           "Signup",
    email:              String(d.email || ""),
    phone:              "",
    company:            "",
    product:            "",
    quantity:           "",
    timeFrame:          "",
    couponCode:         "",
    message:            "Newsletter subscription",
    projectDescription: "",
  });

  res.status(200).json({ ok: true });
  await fetch(`${SCRIPT_URL}?${params.toString()}`, { redirect: "follow" }).catch(() => {});
}
