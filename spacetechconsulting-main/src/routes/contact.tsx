import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { submitContactForm } from "@/lib/api/contact.functions";

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
  });

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      await submitContactForm({ data: form });
      setSent(true);
    } catch {
      setError("Message send nahi ho paya. Thodi der baad try karein ya direct email karein.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="relative py-16 md:py-20 px-6 bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-50"
          style={{ background: "radial-gradient(circle at 30% 30%, rgba(37,99,235,0.4), transparent 50%), radial-gradient(circle at 70% 70%, rgba(6,182,212,0.3), transparent 50%)" }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-cyan-300 text-xs font-bold tracking-widest uppercase">Contact</span>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold">Contact <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Us</span></h1>
          <p className="mt-6 text-lg text-slate-300">
            Have questions about our Yardi solutions? We're here to help.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="bg-white rounded-3xl p-7 md:p-8 shadow-elegant border border-slate-100">
              <h2 className="text-3xl font-extrabold text-[#0F172A]">Contact Information</h2>
              <p className="mt-3 text-slate-600">Reach out to discuss how we can help optimize your Yardi platform and property technology stack.</p>
              <div className="mt-7 grid gap-4">
                {[
                  { icon: Phone, title: "Phone (USA)", text: "+1 (415) 870-8418" },
                  { icon: Phone, title: "Phone (Australia)", text: "+61 468040481" },
                  { icon: MapPin, title: "Phone (India)", text: "India office: phone coming soon" },
                  { icon: Mail, title: "Email", text: "info@spacetechconsulting.com" },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 md:p-5">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-[#2563EB]">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0F172A]">{item.title}</h3>
                        <p className="text-sm text-slate-600">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Australia", "India", "USA"].map((region) => (
                  <span key={region} className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-[#2563EB]">{region}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-white rounded-3xl p-7 md:p-10 shadow-elegant border border-slate-100 lg:sticky lg:top-28">
            <h2 className="text-3xl font-extrabold text-[#0F172A]">Send us a message</h2>
            <p className="mt-2 text-sm text-slate-500">Tell us about your Yardi platform, reporting, support, or implementation needs.</p>
            {sent ? (
              <div className="mt-8 p-6 rounded-2xl bg-green-50 border border-green-200 text-green-800">
                Thanks. Your message has been submitted and we'll be in touch shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">First Name</span>
                    <input required value={form.firstName} onChange={(e) => updateField("firstName", e.target.value)} placeholder="John" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-blue-50/45 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">Last Name</span>
                    <input required value={form.lastName} onChange={(e) => updateField("lastName", e.target.value)} placeholder="Doe" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-blue-50/45 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none" />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">Email</span>
                  <input required type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-blue-50/45 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">Phone Number</span>
                  <input required value={form.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-blue-50/45 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">Service Interested In</span>
                  <select required value={form.service} onChange={(e) => updateField("service", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none">
                    <option value="">Select a service</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">Message</span>
                  <textarea required rows={5} value={form.message} onChange={(e) => updateField("message", e.target.value)} placeholder="Tell us about your project and how we can help..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none resize-none" />
                </label>
                {error && <p className="text-sm font-semibold text-red-600">{error}</p>}
                <button disabled={submitting} type="submit" className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl gradient-primary text-white font-bold shadow-glow transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0">
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
