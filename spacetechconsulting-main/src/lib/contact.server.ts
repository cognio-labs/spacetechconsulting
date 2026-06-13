import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";
import { z } from "zod";

export const serviceOptions = [
  "Reporting & Business Intelligence",
  "System Integrations",
  "Automation & Workflows",
  "Managed BAU Support",
  "Data Migration",
] as const;

const contactSchema = z.object({
  firstName: z.string().trim().min(1).max(80),
  lastName: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().max(40).optional().default(""),
  service: z.enum(serviceOptions),
  message: z.string().trim().min(10).max(3000),
  website: z.string().trim().max(0).optional().default(""),
});

type ContactLead = z.infer<typeof contactSchema>;

const ipHits = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

function sanitize(value: string) {
  return value.replace(/[<>]/g, "").replace(/\s+/g, " ").trim();
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  const current = ipHits.get(ip);

  if (!current || current.resetAt <= now) {
    ipHits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (current.count >= RATE_LIMIT_MAX) {
    return false;
  }

  current.count += 1;
  return true;
}

function normalizeLead(data: ContactLead) {
  return {
    ...data,
    firstName: sanitize(data.firstName),
    lastName: sanitize(data.lastName),
    email: sanitize(data.email).toLowerCase(),
    phone: sanitize(data.phone),
    service: data.service,
    message: data.message.replace(/[<>]/g, "").trim(),
  };
}

async function storeLead(data: ReturnType<typeof normalizeLead>, submittedAt: string) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.warn("Supabase lead storage is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.");
    return;
  }

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false },
  });

  const { error } = await supabase.from("contact_leads").insert({
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    phone: data.phone || null,
    service: data.service,
    message: data.message,
    created_at: submittedAt,
  });

  if (error) {
    throw new Error(`Lead storage failed: ${error.message}`);
  }
}

async function sendNotification(data: ReturnType<typeof normalizeLead>, submittedAt: string) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const receiver = process.env.CONTACT_RECEIVER || process.env.CONTACT_TO_EMAIL || user;

  if (!host || !user || !pass || !receiver) {
    throw new Error("SMTP email settings are not configured.");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const text = [
    "New Contact Form Submission",
    "",
    "Name:",
    `${data.firstName} ${data.lastName}`,
    "",
    "Email:",
    data.email,
    "",
    "Phone:",
    data.phone || "Not provided",
    "",
    "Service:",
    data.service,
    "",
    "Message:",
    data.message,
    "",
    "Submitted At:",
    submittedAt,
  ].join("\n");

  await transporter.sendMail({
    from: `"SpaceTech Consulting" <${user}>`,
    to: receiver,
    replyTo: data.email,
    subject: "🚀 New SpaceTech Consulting Lead",
    text,
  });
}

export async function handleContactSubmission(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";

  if (!checkRateLimit(ip)) {
    return Response.json({ success: false }, { status: 429 });
  }

  try {
    const parsed = contactSchema.parse(await request.json());

    if (parsed.website) {
      return Response.json({ success: true });
    }

    const data = normalizeLead(parsed);
    const submittedAt = new Date().toISOString();

    await storeLead(data, submittedAt);
    await sendNotification(data, submittedAt);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact submission failed", error);
    return Response.json({ success: false }, { status: 400 });
  }
}
