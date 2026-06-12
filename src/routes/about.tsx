import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import { ArrowRight, Globe, Users, Clock, Award } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Your Strategic Yardi Partner | SpaceTech Consulting" },
      { name: "description", content: "SpaceTech Consulting is a global consulting firm delivering comprehensive Yardi services across Australia, India, and the USA." },
      { property: "og:title", content: "About SpaceTech Consulting — Your Strategic Yardi Partner" },
      { property: "og:description", content: "Global Yardi consulting firm with 24/7 support and scalable delivery." },
    ],
  }),
  component: About,
});

const counters = [
  { value: "10+", label: "Years of Yardi Experience", icon: Award },
  { value: "50+", label: "Enterprise Clients Served", icon: Users },
  { value: "24/7", label: "Global Support Coverage", icon: Clock },
  { value: "3", label: "Regions of Global Delivery", icon: Globe },
];

const regions = [
  { name: "Australia", desc: "ANZ delivery hub, real estate platform ownership." },
  { name: "India", desc: "Engineering, custom development, and 24/7 support." },
  { name: "USA", desc: "Client partnership, advisory, and program leadership." },
];

function About() {
  return (
    <Layout>
      <section className="relative py-24 px-6 bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-50"
          style={{ background: "radial-gradient(circle at 20% 30%, rgba(37,99,235,0.4), transparent 50%), radial-gradient(circle at 80% 70%, rgba(6,182,212,0.3), transparent 50%)" }} />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-cyan-300 text-xs font-bold tracking-widest uppercase">About SpaceTech</span>
            <h1 className="mt-5 text-5xl md:text-6xl font-extrabold leading-[1.05]">Your Strategic <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Yardi Partner</span></h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              SpaceTech Consulting is a global consulting firm delivering comprehensive Yardi services across platform ownership, implementation, data migration, integrations, and customizations.
            </p>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              With presence across Australia, India, and the USA, we provide 24/7 support and scalable delivery to meet your project needs.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-3xl blur-2xl" />
            <img src={aboutTeam} alt="SpaceTech team" loading="lazy" width={1280} height={896}
              className="relative rounded-3xl shadow-2xl" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5">
          {counters.map((c, i) => (
            <motion.div key={c.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="bg-white rounded-3xl p-7 shadow-elegant card-lift border border-slate-100 text-center">
              <div className="w-12 h-12 rounded-2xl gradient-primary grid place-items-center shadow-glow mx-auto mb-4">
                <c.icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-4xl font-extrabold text-gradient">{c.value}</div>
              <div className="mt-2 text-sm text-slate-600 font-medium">{c.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold tracking-widest uppercase">Global Presence</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#0F172A]">Three Regions, <span className="text-gradient">One Team</span></h2>
            <p className="mt-5 text-slate-600">Follow-the-sun delivery across Australia, India, and the USA.</p>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {regions.map((r, i) => (
              <motion.div key={r.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative bg-white rounded-3xl p-8 shadow-elegant card-lift border border-slate-100 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 opacity-60" />
                <div className="relative">
                  <Globe className="w-10 h-10 text-[#2563EB] mb-4" />
                  <h3 className="text-2xl font-extrabold text-[#0F172A]">{r.name}</h3>
                  <p className="mt-3 text-slate-600">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl gradient-primary text-white font-bold shadow-glow hover:scale-105 transition-transform">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
