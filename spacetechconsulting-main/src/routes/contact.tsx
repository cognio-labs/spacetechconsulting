import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import { Phone, Mail, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { contactDetails } from "@/data/contactDetails";

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
        throw new Error(result.error || "Contact submission failed");
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
    } catch (error) {
      if (error && error instanceof Error) {
        setError(error.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
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
          <p className="mx-auto mt-3 max-w-[18rem] text-base text-slate-300 sm:max-w-sm md:max-w-none">
            Have questions about our Yardi solutions? We're here to help.
          </p>
        </div>
      </section>

      <section className="py-6 md:py-8 px-4 sm:px-6 bg-gradient-to-b from-slate-50 to-white dark:bg-[#020B1F] dark:from-[#0B1329] dark:to-[#020B1F]">
        <div className="mr-auto grid w-full max-w-[min(358px,calc(100vw-2rem))] min-w-0 gap-5 items-start sm:mx-auto sm:max-w-[calc(100vw-2rem)] lg:max-w-6xl lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div className="min-w-0">
            <div className="w-full max-w-full min-w-0 overflow-hidden bg-white rounded-2xl p-5 shadow-elegant border border-slate-100">
              <h2 className="text-xl md:text-2xl font-extrabold text-[#0F172A]">Contact Information</h2>
              <p className="mt-1 break-words text-sm text-slate-900">Reach out to discuss your Yardi platform, support, reporting, or implementation needs.</p>
              <div className="mt-4 grid gap-2.5">
                {[
                  { icon: Phone, title: "Phone (USA)", text: contactDetails.phoneUsa.label, href: contactDetails.phoneUsa.href },
                  { icon: Phone, title: "Phone (Australia)", text: contactDetails.phoneAustralia.label, href: contactDetails.phoneAustralia.href },
                  { icon: Phone, title: "Phone (India)", text: contactDetails.phoneIndia.label, href: contactDetails.phoneIndia.href },
                  { icon: Mail, title: "Email", text: contactDetails.email.label, href: contactDetails.email.href },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3">
                    <div className="flex items-center gap-3">
                      <div className="grid h-9 w-9 place-items-center rounded-xl bg-blue-50 text-[#2563EB]">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-bold text-[#0F172A]">{item.title}</h3>
                        {item.href ? (
                          <a href={item.href} className="break-words text-sm font-medium text-slate-900 hover:text-[#2563EB]">{item.text}</a>
                        ) : (
                          <p className="break-words text-sm text-slate-900">{item.text}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {contactDetails.regions.map((region) => (
                  <span key={region} className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-[#2563EB]">{region}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div id="send-us-a-message-form"
            className="w-full max-w-full min-w-0 overflow-hidden bg-white rounded-2xl p-5 md:p-6 shadow-elegant border border-slate-100">
            <h2 className="text-xl md:text-2xl font-extrabold text-[#0F172A]">Send us a message</h2>
            <p className="mt-1 break-words text-sm text-slate-900">Tell us about your Yardi platform, reporting, support, or implementation needs.</p>
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
                    <span className="mb-1.5 block text-sm font-semibold text-slate-900 antialiased">First Name</span>
                    <input required value={form.firstName} onChange={(e) => updateField("firstName", e.target.value)} placeholder="John" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/40 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-500/10 outline-none appearance-none transition-all duration-200 text-slate-900 placeholder-slate-400 text-sm" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold text-slate-900 antialiased">Last Name</span>
                    <input required value={form.lastName} onChange={(e) => updateField("lastName", e.target.value)} placeholder="Doe" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/40 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-500/10 outline-none appearance-none transition-all duration-200 text-slate-900 placeholder-slate-400 text-sm" />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-slate-900 antialiased">Email</span>
                  <input required type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="john@company.com" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/40 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-500/10 outline-none appearance-none transition-all duration-200 text-slate-900 placeholder-slate-400 text-sm" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-slate-900 antialiased">Phone Number</span>
                  <input value={form.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="+1 (555) 000-0000" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/40 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-500/10 outline-none appearance-none transition-all duration-200 text-slate-900 placeholder-slate-400 text-sm" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-slate-900 antialiased">Service Interested In</span>
                  <select required value={form.service} onChange={(e) => updateField("service", e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:border-[#2563EB] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-200 text-slate-900 text-sm">
                    <option value="">Select a service</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-slate-900 antialiased">Message</span>
                  <textarea required rows={3} value={form.message} onChange={(e) => updateField("message", e.target.value)} placeholder="Tell us about your project and how we can help..." className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-500/10 outline-none resize-none appearance-none transition-all duration-200 text-slate-900 placeholder-slate-400 text-sm" />
                </label>
                {error && <p className="text-sm font-semibold text-red-600" role="alert">{error}</p>}
                <button disabled={submitting} type="submit" className="w-full inline-flex items-center justify-center gap-2 px-7 py-3 rounded-2xl gradient-primary text-white font-bold shadow-glow hover:shadow-glow-hover active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:hover:translate-y-0 select-none">
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
