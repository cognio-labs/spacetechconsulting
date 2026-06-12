import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, Send } from "lucide-react";
import { useState } from "react";

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

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="relative py-20 px-6 bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-50"
          style={{ background: "radial-gradient(circle at 30% 30%, rgba(37,99,235,0.4), transparent 50%), radial-gradient(circle at 70% 70%, rgba(6,182,212,0.3), transparent 50%)" }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-cyan-300 text-xs font-bold tracking-widest uppercase">Contact</span>
          <h1 className="mt-5 text-5xl md:text-6xl font-extrabold">Let's Talk <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Yardi</span></h1>
          <p className="mt-6 text-lg text-slate-300">
            Connect with SpaceTech through LinkedIn, email, phone, WhatsApp, or a scheduled discovery call.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-elegant border border-slate-100">
            <h2 className="text-2xl font-extrabold text-[#0F172A]">Send us a message</h2>
            <p className="mt-2 text-sm text-slate-500">We use submitted contact details only to respond to enquiries, schedule calls, and provide SpaceTech Consulting services.</p>
            {sent ? (
              <div className="mt-8 p-6 rounded-2xl bg-green-50 border border-green-200 text-green-800">
                Thanks — we'll be in touch shortly.
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input required placeholder="Full name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none" />
                  <input required type="email" placeholder="Work email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none" />
                </div>
                <input placeholder="Company" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none" />
                <textarea required rows={5} placeholder="How can we help?" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none resize-none" />
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl gradient-primary text-white font-bold shadow-glow hover:scale-[1.02] transition-transform">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="rounded-3xl overflow-hidden shadow-elegant border border-slate-100 h-64">
              <iframe
                title="Global Offices"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-170%2C-50%2C180%2C70&layer=mapnik"
                className="w-full h-full"
                loading="lazy"
              />
            </div>

            <div className="bg-white rounded-3xl p-7 shadow-elegant border border-slate-100">
              <h3 className="font-extrabold text-[#0F172A] mb-4">Office Information</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-[#2563EB]" /> +1 (415) 870-8418</li>
                <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-[#2563EB]" /> +61 468040481</li>
                <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-[#2563EB]" /> India office: phone coming soon</li>
                <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-[#2563EB]" /> info@spacetechconsulting.com</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] text-white rounded-3xl p-7 shadow-elegant">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-cyan-300" />
                <h3 className="font-extrabold">SLA & Support Availability</h3>
              </div>
              <p className="text-sm text-slate-300">24/7-ready support model for critical platform operations across Australia, India, and the USA — with issue tracking, governance, testing, and release discipline.</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a href="https://cal.com/spacetech/30min" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#0F172A] text-sm font-bold hover:scale-105 transition-transform">
                  <Calendar className="w-4 h-4" /> Book a Call
                </a>
                <a href="https://wa.me/14158708418" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-sm font-bold">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
