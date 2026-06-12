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
  { num: "01", title: "Platform Support & Optimization", items: ["Application Help Desk (L1/L2/L3)","System administration & maintenance","Platform upgrades support & testing","Issue tracking & SLA management","Health checks & system audits","Performance tuning & optimization"] },
  { num: "02", title: "Custom Development", items: ["Custom Reporting (YSR / Columnar)","Custom Financials","Custom Interfaces","Workflow validations & automations","Integrations & RPA"] },
  { num: "03", title: "Data Migration", items: ["Legacy system data migration (Yardi ETL)","Data cleansing","Data mapping","Data load and validation"] },
  { num: "04", title: "Implementation & Consulting", items: ["Yardi Voyager / Elevate / Breeze Implementation","Multi-module deployment & configuration","Security model & role restructuring","Go-live support & stabilization"] },
  { num: "05", title: "Training & Testing", items: ["Role-based training programs","Knowledge base creation","Process documentation","Yardi product testing","Test scenarios & test case creation"] },
  { num: "06", title: "Data & Analytics", items: ["BI integration / Yardi Data Connect","Data visualization dashboards","Executive reporting packages","KPI tracking & monitoring","Dashboard & analytics setup"] },
];

function Services() {
  return (
    <Layout>
      <section className="relative py-24 px-6 overflow-hidden bg-[#0F172A] text-white">
        <div className="absolute inset-0 opacity-50"
          style={{ background: "radial-gradient(circle at 20% 30%, rgba(37,99,235,0.4), transparent 50%), radial-gradient(circle at 80% 70%, rgba(6,182,212,0.3), transparent 50%)" }} />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-cyan-300 text-xs font-bold tracking-widest uppercase">Services</span>
            <h1 className="mt-5 text-5xl md:text-7xl font-extrabold leading-[1.05]">Full-Spectrum <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Yardi Services</span></h1>
            <p className="mt-6 text-lg text-slate-300">From implementation to optimization — we cover the complete Yardi lifecycle with six dedicated service lines.</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-3xl blur-2xl" />
            <img src={servicesDashboard} alt="Yardi analytics" loading="lazy" width={1280} height={896} className="relative rounded-3xl shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="group relative bg-white rounded-3xl p-8 shadow-elegant card-lift border border-slate-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-[#2563EB] font-extrabold text-lg mb-5">{s.num}</div>
                <h3 className="text-xl font-extrabold text-[#0F172A] mb-5">{s.title}</h3>
                <ul className="space-y-2.5">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm text-slate-600">
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
