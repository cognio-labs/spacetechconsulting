import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import servicesDashboard from "@/assets/services-dashboard.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Full-Spectrum Yardi Services | SpaceTech Consulting" },
      { name: "description", content: "From implementation to optimization — we cover the complete Yardi lifecycle: support, custom development, data migration, training, and analytics." },
      { property: "og:title", content: "Full-Spectrum Yardi Services | SpaceTech Consulting" },
      { property: "og:description", content: "Six service lines covering the complete Yardi lifecycle." },
    ],
  }),
  component: Services,
});

const services = [
  { id: "yardi-consulting", num: "01", title: "Yardi Consulting", items: ["Yardi Voyager / Elevate / Breeze Implementation","Multi-module deployment & configuration","Security model & role restructuring","Go-live support & stabilization"] },
  { id: "reporting-bi", num: "02", title: "Reporting & BI", items: ["Custom Reporting (YSR / Columnar)","BI integration / Yardi Data Connect","Executive reporting packages","Dashboard & analytics setup"] },
  { id: "system-integrations", num: "03", title: "System Integrations", items: ["Custom Interfaces","API and data integrations","SharePoint ecosystem support","Integration testing and monitoring"] },
  { id: "automation", num: "04", title: "Automation", items: ["Workflow validations & automations","Integrations & RPA","Automated invoicing","Automated bank reconciliation"] },
  { id: "managed-support", num: "05", title: "Managed Support", items: ["Application Help Desk (L1/L2/L3)","System administration & maintenance","Platform upgrades support & testing","Issue tracking & SLA management"] },
  { id: "data-migration", num: "06", title: "Data Migration", items: ["Legacy system data migration (Yardi ETL)","Data cleansing","Data mapping","Data load and validation"] },
];

function Services() {
  return (
    <Layout>
      <section className="relative py-16 md:py-20 px-6 overflow-hidden bg-[#020617] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#020617_0%,#0F172A_48%,#073B4C_100%)]" />
        <div className="absolute inset-0 opacity-70"
          style={{ background: "radial-gradient(circle at 18% 28%, rgba(88,225,255,0.18), transparent 42%), radial-gradient(circle at 82% 64%, rgba(37,99,235,0.28), transparent 48%)" }} />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-cyan-300 text-xs font-bold tracking-widest uppercase">Services</span>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05]">Full-Spectrum <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Yardi Services</span></h1>
            <p className="mt-6 text-lg text-slate-300">From implementation to optimization — we cover the complete Yardi lifecycle with six dedicated service lines.</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-400/22 via-blue-500/18 to-white/8 blur-2xl" />
            <img src={servicesDashboard} alt="SpaceTech Yardi services meeting" loading="lazy" width={1536} height={960} className="relative rounded-3xl border border-white/10 shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div id={s.id} key={s.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="group relative scroll-mt-28 bg-white rounded-2xl p-6 shadow-elegant card-lift border border-slate-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-[#2563EB] font-extrabold text-lg mb-5">{s.num}</div>
                <h3 className="text-xl font-extrabold text-[#0F172A] mb-5">{s.title}</h3>
                <ul className="space-y-2.5">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm text-slate-900">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl gradient-primary text-white font-bold shadow-glow hover:scale-105 transition-transform">
            Discuss Your Requirements <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
