import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book a Yardi Strategy Call | SpaceTech Consulting" },
      { name: "description", content: "Connect with SpaceTech Consulting through LinkedIn, email, phone, WhatsApp, or a scheduled discovery call. Offices in Australia, India, and the USA." },
      { property: "og:title", content: "Contact SpaceTech Consulting" },
      { property: "og:description", content: "Book a strategy call with our Yardi platform team." },
    ],
  }),
  component: Contact,
});

const serviceOptions = [
  "Reporting & Business Intelligence",
  "System Integrations",
  "Automation & Workflows",
  "Managed BAU Support",
  "Data Migration",
];

function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    website: "",
  });

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json().catch(() => ({ success: false }));
      if (!response.ok || !result.success) {
        throw new Error("Contact submission failed");
      }
      setSent(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        website: "",
      });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="relative px-6 pb-8 pt-24 md:pb-10 md:pt-28 bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-50"
          style={{ background: "radial-gradient(circle at 30% 30%, rgba(37,99,235,0.4), transparent 50%), radial-gradient(circle at 70% 70%, rgba(6,182,212,0.3), transparent 50%)" }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-cyan-300 text-xs font-bold tracking-widest uppercase">Contact</span>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold">Contact <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Us</span></h1>
          <p className="mt-3 text-base text-slate-300">
            Have questions about our Yardi solutions? We're here to help.
          </p>
        </div>
      </section>

      <section className="py-6 md:py-8 px-4 sm:px-6 bg-gradient-to-b from-slate-50 to-white dark:bg-[#020B1F] dark:from-[#0B1329] dark:to-[#020B1F]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-5 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="bg-white rounded-2xl p-5 shadow-elegant border border-slate-100">
              <h2 className="text-xl md:text-2xl font-extrabold text-[#0F172A]">Contact Information</h2>
              <p className="mt-1 text-sm text-slate-600">Reach out to discuss your Yardi platform, support, reporting, or implementation needs.</p>
              <div className="mt-4 grid gap-2.5">
                {[
                  { icon: Phone, title: "Phone (USA)", text: "+1 (415) 870-8418" },
                  { icon: Phone, title: "Phone (Australia)", text: "+61 468040481" },
                  { icon: MapPin, title: "Phone (India)", text: "India office: phone coming soon" },
                  { icon: Mail, title: "Email", text: "info@spacetechconsulting.com" },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3">
                    <div className="flex items-center gap-3">
                      <div className="grid h-9 w-9 place-items-center rounded-xl bg-blue-50 text-[#2563EB]">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[#0F172A]">{item.title}</h3>
                        <p className="text-sm text-slate-600">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Australia", "India", "USA"].map((region) => (
                  <span key={region} className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-[#2563EB]">{region}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div id="send-us-a-message-form" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-white rounded-2xl p-5 md:p-6 shadow-elegant border border-slate-100">
            <h2 className="text-xl md:text-2xl font-extrabold text-[#0F172A]">Send us a message</h2>
            <p className="mt-1 text-sm text-slate-500">Tell us about your Yardi platform, reporting, support, or implementation needs.</p>
            {sent ? (
              <div className="mt-5 p-5 rounded-2xl bg-green-50 border border-green-200 text-green-800" role="status" aria-live="polite">
                <p className="font-bold">Message sent successfully.</p>
                <p className="mt-1">We will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={(e) => updateField("website", e.target.value)}
                  className="hidden"
                  aria-hidden="true"
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold text-slate-700">First Name</span>
                    <input required value={form.firstName} onChange={(e) => updateField("firstName", e.target.value)} placeholder="John" className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-blue-50/45 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold text-slate-700">Last Name</span>
                    <input required value={form.lastName} onChange={(e) => updateField("lastName", e.target.value)} placeholder="Doe" className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-blue-50/45 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none" />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-slate-700">Email</span>
                  <input required type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="john@company.com" className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-blue-50/45 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-slate-700">Phone Number</span>
                  <input value={form.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="+1 (555) 000-0000" className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-blue-50/45 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-slate-700">Service Interested In</span>
                  <select required value={form.service} onChange={(e) => updateField("service", e.target.value)} className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none">
                    <option value="">Select a service</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-slate-700">Message</span>
                  <textarea required rows={3} value={form.message} onChange={(e) => updateField("message", e.target.value)} placeholder="Tell us about your project and how we can help..." className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none resize-none" />
                </label>
                {error && <p className="text-sm font-semibold text-red-600" role="alert">{error}</p>}
                <button disabled={submitting} type="submit" className="w-full inline-flex items-center justify-center gap-2 px-7 py-3 rounded-2xl gradient-primary text-white font-bold shadow-glow transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0">
                  {submitting ? "Sending..." : "Send Message"} <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
