import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  "https://fbsigsoxkjiaqbpxnqwz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZic2lnc294a2ppYXFicHhucXd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0NTUyOTksImV4cCI6MjA5MjAzMTI5OX0.OuyTHZieKcqmB4dvfHedf2HJGQKVPR47lOiG2FmOIc4"
);

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const d = req.body || {};
  const name = `${d.firstName || ""} ${d.lastName || ""}`.trim();

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

  await resend.emails.send({
    from: "AAA PAK <onboarding@resend.dev>",
    to:   "aslam@aaapak.com",
    subject: `New Quote Request — ${name} (${d.company || "No Company"})`,
    html: `
      <h2>New Quote Request</h2>
      <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px">
        <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4">Name</td><td style="padding:8px">${name || "—"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4">Email</td><td style="padding:8px">${d.email || "—"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4">Phone</td><td style="padding:8px">${d.phone || "—"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4">Company</td><td style="padding:8px">${d.company || "—"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4">Product</td><td style="padding:8px">${d.product || "—"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4">Quantity</td><td style="padding:8px">${d.quantity || "—"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4">Time Frame</td><td style="padding:8px">${d.timeFrame || "—"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4">Coupon Code</td><td style="padding:8px">${d.couponCode || "—"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4">Message</td><td style="padding:8px">${d.message || "—"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4">Project Description</td><td style="padding:8px">${d.projectDescription || "—"}</td></tr>
      </table>
    `,
  });

  return res.status(200).json({ ok: true });
}
