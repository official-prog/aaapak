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

  const { error } = await supabase.from("consultations").insert({
    name:  d.name  || "",
    phone: d.phone || "",
    date:  d.date  || "",
    time:  d.time  || "",
  });

  if (error) {
    console.error("Supabase error:", error);
    return res.status(500).json({ error: error.message });
  }

  await resend.emails.send({
    from: "AAA PAK <onboarding@resend.dev>",
    to:   "official@creatiks.org",
    subject: `Consultation Booked — ${d.name || "Unknown"} (${d.date || ""} @ ${d.time || ""})`,
    html: `
      <h2>New Consultation Booking</h2>
      <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px">
        <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4">Name</td><td style="padding:8px">${d.name  || "—"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4">Phone</td><td style="padding:8px">${d.phone || "—"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4">Date</td><td style="padding:8px">${d.date  || "—"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4">Time</td><td style="padding:8px">${d.time  || "—"} EST</td></tr>
      </table>
    `,
  });

  return res.status(200).json({ ok: true });
}
