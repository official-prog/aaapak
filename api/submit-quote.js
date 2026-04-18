import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://fbsigsoxkjiaqbpxnqwz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZic2lnc294a2ppYXFicHhucXd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0NTUyOTksImV4cCI6MjA5MjAzMTI5OX0.OuyTHZieKcqmB4dvfHedf2HJGQKVPR47lOiG2FmOIc4"
);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const d = req.body || {};

  const { error } = await supabase.from("quote_requests").insert({
    first_name:          d.firstName          || "",
    last_name:           d.lastName           || "",
    email:               d.email              || "",
    phone:               d.phone              || "",
    company:             d.company            || "",
    product:             d.product            || "",
    quantity:            d.quantity           || "",
    time_frame:          d.timeFrame          || "",
    coupon_code:         d.couponCode         || "",
    message:             d.message            || "",
    project_description: d.projectDescription || "",
  });

  if (error) {
    console.error("Supabase error:", error);
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ ok: true });
}
