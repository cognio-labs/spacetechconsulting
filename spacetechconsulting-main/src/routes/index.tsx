import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import {
  ArrowRight, Users, Clock, BarChart3, ShieldCheck, Target, Zap, Lock, Handshake,
  ChevronDown,
  Star, Quote, Globe, FileCheck, Languages, Share2, PlayCircle,
} from "lucide-react";
import { useState } from "react";
import { propertyTypes } from "@/data/propertyTypes";
import heroSectionBg from "@/assets/hero-section-bg.png";
import servicesDashboard from "@/assets/services-dashboard.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SpaceTech Consulting — Enterprise Yardi Platform Partner" },
      { name: "description", content: "Enterprise Yardi platform ownership, proactive support, implementation, integrations, automation, and data intelligence across Australia, India, and the USA." },
      { property: "og:title", content: "SpaceTech Consulting — Enterprise Yardi Platform Partner" },
      { property: "og:description", content: "Enterprise Yardi platform ownership, proactive support, implementation, integrations, automation, and data intelligence." },
    ],
  }),
  component: HomePage,
});

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.08 } } };

const stats = [
  { icon: Users, value: "3 regions", label: "Australia, India, and USA delivery coverage" },
  { icon: Clock, value: "24/7-ready", label: "Support model for critical platform operations" },
  { icon: BarChart3, value: "6 service lines", label: "Consulting, support, reporting, data, automation, integrations" },
  { icon: ShieldCheck, value: "SLA led", label: "Issue tracking, governance, testing, and release discipline" },
];

const advantages = [
  { icon: Target, title: "Platform Ownership Mindset", body: "We operate Yardi with a platform-owner mindset — identifying patterns, removing systemic friction, and improving operational stability rather than reacting to individual tickets." },
  { icon: Zap, title: "Deep Yardi Expertise", body: "Our team brings hands-on functional and technical experience across various Yardi modules and ecosystem integrations, developed through operating complex Yardi enterprise environments." },
  { icon: BarChart3, title: "Outcome Driven", body: "We measure success by operational efficiency and cost reduction, not just technical implementations or tickets resolved." },
  { icon: Handshake, title: "Long-Term Partner", body: "We build enduring partnerships by taking long-term accountability for the stability, evolution, and success of your Yardi platform." },
];

const services = [
  { num: "01", title: "Platform Support & Optimization", items: ["Application Help Desk (L1/L2/L3)","System administration & maintenance","Platform upgrades support & testing","Issue tracking & SLA management","Health checks & system audits","Performance tuning & optimization"] },
  { num: "02", title: "Custom Development", items: ["Custom Reporting (YSR / Columnar)","Custom Financials","Custom Interfaces","Workflow validations & automations","Integrations & RPA"] },
  { num: "03", title: "Data Migration", items: ["Legacy system data migration (Yardi ETL)","Data cleansing","Data mapping","Data load and validation"] },
  { num: "04", title: "Implementation & Consulting", items: ["Yardi Voyager / Elevate / Breeze Implementation","Multi-module deployment & configuration","Security model & role restructuring","Go-live support & stabilization"] },
  { num: "05", title: "Training & Testing", items: ["Role-based training programs","Knowledge base creation","Process documentation","Yardi product testing","Test scenarios & test case creation"] },
  { num: "06", title: "Data & Analytics", items: ["BI integration / Yardi Data Connect","Data visualization dashboards","Executive reporting packages","KPI tracking & monitoring","Dashboard & analytics setup"] },
];

const testimonials = [
  { quote: "SpaceTech transformed our Yardi implementation. Their deep expertise and responsive team helped us achieve 40% improvement in operational efficiency.", name: "Michael Chen", role: "CTO, Pacific Real Estate Group" },
  { quote: "The automation solutions they built saved us hundreds of hours monthly. Their understanding of real estate operations is unmatched.", name: "Sarah Johnson", role: "VP of Operations, Horizon Property Management" },
  { quote: "Outstanding data engineering work. They migrated our entire portfolio data seamlessly and built dashboards that give us real-time insights.", name: "David Williams", role: "Director of IT, Summit Investment Partners" },
];

const faqs = [
  { q: "What Yardi products do you support?", a: "We support the full Yardi suite including Voyager (Commercial, Residential, Affordable, Military), Elevate, Breeze, RentCafe, Yardi Data Connect, and the surrounding integrations and reporting ecosystem." },
  { q: "Can SpaceTech manage an existing Yardi environment?", a: "Yes. We take ownership of existing Yardi environments — stabilizing operations, improving governance, and running the platform with SLA discipline." },
  { q: "Do you work with teams outside Australia?", a: "Yes. We operate across Australia, India, and the USA with a follow-the-sun delivery model and English-speaking teams." },
  { q: "Can you help with reporting and data quality?", a: "Yes. We deliver custom reporting (YSR / Columnar), BI integration via Yardi Data Connect, executive dashboards, and end-to-end data quality programs." },
];

const policies = [
  { icon: Lock, title: "Privacy", body: "We collect only the contact and project details needed to respond to enquiries, schedule calls, and deliver consulting services." },
  { icon: FileCheck, title: "Client Confidentiality", body: "Project data, reports, environments, credentials, and business processes are treated as confidential engagement materials." },
  { icon: Languages, title: "Language & Currency", body: "Engagements can be scoped for English-speaking teams across AUD, USD, and INR commercial contexts." },
  { icon: Share2, title: "Social Accessibility", body: "Connect with SpaceTech through LinkedIn, email, phone, WhatsApp, or a scheduled discovery call." },
];

function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[100svh] lg:min-h-[78vh] flex items-center overflow-hidden bg-[#020B1F]">
        <video
          className="absolute inset-0 h-full w-full scale-[1.04] object-cover object-center brightness-[0.45] lg:brightness-100"
          poster={heroSectionBg}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/hero-section-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.65))] lg:bg-gradient-to-r lg:from-[#020B1F]/98 lg:via-[#020B1F]/76 lg:to-[#020B1F]/16" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_44%,rgba(88,225,255,0.13),transparent_30%),radial-gradient(circle_at_78%_54%,rgba(0,174,239,0.14),transparent_38%)]" />
        <div className="absolute bottom-0 right-0 h-24 w-72 bg-gradient-to-l from-[#020B1F] via-[#020B1F]/80 to-transparent sm:h-32 sm:w-96" />

        <div className="relative max-w-[86rem] mx-auto w-full px-6 py-12 pt-[90px] sm:px-6 md:py-24">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-full lg:max-w-4xl">
            <motion.span variants={fadeUp} className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-300/25 bg-[#020B1F]/55 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.12)] backdrop-blur-xl sm:px-4 sm:text-xs sm:tracking-widest">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" /> Your Trusted Yardi Platform Partner
            </motion.span>
            <motion.h1 variants={fadeUp} className="mt-6 text-[clamp(2.5rem,8vw,4rem)] lg:text-7xl font-extrabold text-white leading-[0.95] lg:leading-[1.02] tracking-[-0.03em] drop-shadow-[0_18px_38px_rgba(0,0,0,0.45)]">
              Your Trusted Yardi Platform Partner
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-200 to-white bg-clip-text text-transparent">SpaceTech Consulting</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-7 max-w-full text-base leading-[1.8] text-white/85 md:text-xl lg:max-w-3xl lg:leading-relaxed">
              Enterprise Yardi platform ownership, proactive support, implementation, integrations, automation, and data intelligence for real estate teams across Australia, India, and the USA.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex w-full max-w-[360px] flex-col gap-3 md:max-w-none md:flex-row md:flex-wrap md:gap-4">
              <Link to="/contact#send-us-a-message-form"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 font-bold text-[#0F172A] shadow-[0_18px_42px_rgba(255,255,255,0.16)] transition-transform hover:-translate-y-1 md:w-auto">
                Book a Strategy Call <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/18 bg-white/8 px-7 py-4 font-bold text-white shadow-[0_18px_42px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-transform hover:-translate-y-1 hover:bg-white/12 md:w-auto">
                View Capabilities
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-300 md:mt-12 md:gap-6">
              <span className="font-semibold text-cyan-300">Global Presence:</span>
              {["Australia", "India", "USA"].map((r) => (
                <span key={r} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> {r}</span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 px-6 pt-8 pb-10 md:pt-10 md:pb-14">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <motion.div key={s.value} variants={fadeUp}
              className="bg-white rounded-2xl p-6 shadow-elegant card-lift border border-slate-100">
              <div className="w-12 h-12 rounded-2xl gradient-primary grid place-items-center shadow-glow mb-4">
                <s.icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-2xl font-extrabold text-[#0F172A]">{s.value}</div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ADVANTAGE */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto">
            <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold tracking-widest uppercase">The SpaceTech Advantage</motion.span>
            <motion.h2 variants={fadeUp} className="mt-5 text-3xl md:text-5xl font-extrabold text-[#0F172A]">
              Why Choose <span className="text-gradient">SpaceTech Consulting?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-lg text-slate-600">
              We're not just consultants — we're your strategic technology partner for the long haul.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {advantages.map((a) => (
              <motion.div key={a.title} variants={fadeUp}
                className="relative group bg-white rounded-2xl p-6 shadow-elegant card-lift border border-slate-100 overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 opacity-50 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl gradient-primary grid place-items-center shadow-glow mb-5">
                    <a.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0F172A] mb-3">{a.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{a.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-16 md:py-20 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto">
            <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold tracking-widest uppercase">Who We Serve</motion.span>
            <motion.h2 variants={fadeUp} className="mt-5 text-3xl md:text-5xl font-extrabold text-[#0F172A]">Yardi Expertise Across <span className="text-gradient">Property Types</span></motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-lg text-slate-600">
              Every property type runs Yardi differently. We've operated inside these environments at enterprise scale, and we bring that hands-on knowledge to every engagement.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {propertyTypes.map((p) => (
            <motion.div key={p.title} variants={fadeUp}
                className="group relative rounded-3xl overflow-hidden shadow-elegant card-lift bg-white">
              <Link to="/who-we-serve/$slug" params={{ slug: p.slug }} className="block h-full">
                <div className="relative h-56 overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" width={1024} height={768}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl glass-dark grid place-items-center">
                      <p.icon className="w-5 h-5 text-cyan-300" />
                    </div>
                    <h3 className="text-xl font-extrabold text-white drop-shadow-lg">{p.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-slate-600 leading-relaxed">{p.body}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#2563EB]">Explore detail <ArrowRight className="w-4 h-4" /></span>
                </div>
              </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white border-2 border-slate-200 text-[#0F172A] font-bold hover:border-[#2563EB] hover:text-[#2563EB] transition-colors">
              See How We Help <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold text-[#0F172A]">Full-Spectrum <span className="text-gradient">Yardi Services</span></motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-lg text-slate-600">From implementation to optimization — we cover the complete Yardi lifecycle</motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <motion.div key={s.num} variants={fadeUp}
                className="group relative bg-white rounded-2xl p-6 shadow-elegant card-lift border border-slate-100 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-[#2563EB] font-extrabold text-lg mb-5">{s.num}</div>
                  <h3 className="text-xl font-extrabold text-[#0F172A] mb-5">{s.title}</h3>
                  <ul className="space-y-2.5">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-sm text-slate-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl gradient-primary text-white font-bold shadow-glow hover:scale-105 transition-transform">
              Discuss Your Requirements <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* BRAND INTRO */}
      <section className="py-16 md:py-20 px-6 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-40"
             style={{ background: "radial-gradient(circle at 30% 50%, rgba(37,99,235,0.4), transparent 50%), radial-gradient(circle at 70% 80%, rgba(6,182,212,0.3), transparent 50%)" }} />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-cyan-300 text-xs font-bold tracking-widest uppercase">Brand Introduction</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold">Built Around Property Technology Outcomes</h2>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              SpaceTech Consulting combines real estate process understanding with Yardi platform execution. Our logo highlights connected buildings, cloud-ready operations, and a service model focused on dependable client outcomes.
            </p>
            <button className="mt-8 inline-flex items-center gap-3 text-cyan-300 hover:text-cyan-200 font-semibold">
              <PlayCircle className="w-6 h-6" /> Intro video placeholder ready for your final video asset
            </button>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-3xl blur-2xl" />
            <img src={servicesDashboard} alt="SpaceTech Yardi services meeting" loading="lazy" width={1536} height={960}
              className="relative rounded-3xl shadow-2xl w-full" />
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto">
            <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold tracking-widest uppercase">Client Success Stories</motion.span>
            <motion.h2 variants={fadeUp} className="mt-5 text-3xl md:text-5xl font-extrabold text-[#0F172A]">What Our Clients Say</motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-lg text-slate-600">Trusted by leading real estate organizations across the globe.</motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="mt-10 grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeUp}
                className="bg-white rounded-3xl p-8 shadow-elegant card-lift border border-slate-100 relative">
                <Quote className="w-10 h-10 text-blue-100 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />)}
                </div>
                <p className="text-slate-700 leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                  <div className="w-11 h-11 rounded-full gradient-primary grid place-items-center text-white font-bold">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-bold text-[#0F172A]">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/20">
          <div className="absolute inset-0 bg-[#0F172A]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.78),rgba(6,182,212,0.25)_48%,rgba(255,255,255,0.08))]" />
          <div className="absolute inset-0 opacity-40"
               style={{ background: "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.22), transparent 32%), radial-gradient(circle at 80% 20%, rgba(6,182,212,0.5), transparent 46%)" }} />
          <div className="relative p-12 md:p-20 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold">Let's Optimize Your Yardi Platform</h2>
            <p className="mt-5 text-lg text-blue-100 max-w-2xl mx-auto">
              Ready to transform your Yardi ecosystem? Let's discuss how we can help you.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link to="/contact#send-us-a-message-form"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white text-[#0F172A] font-bold hover:scale-105 transition-transform">
                Book a Strategy Call <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl glass-dark text-white font-bold hover:bg-white/20">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold tracking-widest uppercase">About SpaceTech</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#0F172A]">Your Strategic Yardi Partner</h2>
          <p className="mt-6 text-lg text-slate-600">
            SpaceTech Consulting is a global consulting firm delivering comprehensive Yardi services across platform ownership, implementation, data migration, integrations, and customizations.
          </p>
          <p className="mt-4 text-lg text-slate-600">
            With presence across Australia, India, and the USA, we provide 24/7 support and scalable delivery to meet your project needs.
          </p>
          <div className="mt-8 flex justify-center gap-8 text-sm font-semibold">
            <span className="flex items-center gap-2 text-slate-700"><Globe className="w-4 h-4 text-[#2563EB]" /> Global Presence</span>
            <span className="flex items-center gap-2 text-slate-700"><Users className="w-4 h-4 text-[#2563EB]" /> Yardi Expertise</span>
          </div>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl gradient-primary text-white font-bold shadow-glow hover:scale-105 transition-transform">
            Learn More About Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold tracking-widest uppercase">FAQs</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#0F172A]">Questions Before We Start</h2>
            <p className="mt-5 text-lg text-slate-600">Clear answers for real estate teams evaluating a Yardi consulting partner.</p>
          </div>
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-elegant border border-slate-100 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left">
                  <span className="font-bold text-[#0F172A]">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#2563EB] transition-transform shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${openFaq === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-slate-600 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POLICIES */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-slate-50 to-blue-50/40 dark:bg-[#020B1F] dark:from-[#0B1329] dark:to-[#020B1F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold tracking-widest uppercase">Legal & Access</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#0F172A]">Policies, Regions, and Access</h2>
            <p className="mt-5 text-lg text-slate-600">Practical governance for clients working across countries, systems, and teams.</p>
          </div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {policies.map((p) => (
              <motion.div key={p.title} variants={fadeUp}
                className="bg-white rounded-3xl p-7 shadow-elegant card-lift border border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-[#2563EB] grid place-items-center mb-4">
                  <p.icon className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-[#0F172A] mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
