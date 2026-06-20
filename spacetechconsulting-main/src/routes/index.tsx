import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import {
  ArrowRight, Users, Clock, BarChart3, ShieldCheck, Lock,
  ChevronDown,
  Globe, FileCheck, Languages, Share2,
  Cpu, Settings2, Database, RefreshCcw, Rocket, Building2, CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import { visiblePropertyTypes } from "@/data/propertyTypes";
import heroSectionBg from "@/assets/hero-section-bg.png";

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
  { icon: Users, value: "3 Regions", label: "Follow-the-sun coverage across Australia, India, and USA" },
  { icon: Clock, value: "24/7 coverage", label: "Support model for critical platform operations" },
  { icon: BarChart3, value: "2000+ Tickets", label: "Resolved across active engagements" },
  { icon: ShieldCheck, value: "95%+ SLA", label: "SLA on owned ticket volume" },
];

const whyMetrics = [
  { value: "25+", label: "Years Technology Leadership", icon: Cpu },
  { value: "2000+", label: "Platform Requests Managed", icon: FileCheck },
  { value: "50+", label: "Years Total Yardi Experience", icon: ShieldCheck },
  { value: "3", label: "Global Delivery Regions", icon: Globe },
];

const whyCards = [
  {
    icon: Cpu,
    title: "Enterprise Engineering",
    body: "Built by technology leaders with 25+ years of experience delivering enterprise transformation, cloud modernization, real-time platforms, data engineering, automation, and operational excellence across highly regulated industries.",
  },
  {
    icon: Settings2,
    title: "Platform Ownership",
    body: "We focus on platform health, operational efficiency, and business outcomes — not simply closing tickets.",
  },
  {
    icon: Database,
    title: "Deep Yardi Expertise",
    body: "Experience across Voyager, Elevate, Investment Management, Data Connect, Reporting, Integrations, and managed services.",
  },
  {
    icon: RefreshCcw,
    title: "Continuous Improvement",
    body: "Support should reduce future support demand through trend analysis, automation opportunities, knowledge sharing, and root-cause elimination.",
  },
  {
    icon: Globe,
    title: "Global Delivery",
    body: "Australia • India • United States. Local market understanding combined with scalable global capability.",
  },
  {
    icon: Rocket,
    title: "Future Ready",
    body: "Cloud, Data, AI, and Automation capabilities helping clients modernize and innovate beyond traditional support models.",
  },
];

const proofPoints = [
  "2,000+ Platform Tickets Addressed",
  "95%+ SLA",
  "1000+ Active Business Users Supported",
  "Commercial & Residential Portfolios",
  "Named Functional & Technical SMEs",
  "Platform Health & Operational Visibility Improved",
];

const services = [
  { num: "01", title: "Platform Support & Optimization", items: ["Application Help Desk (L1/L2/L3)","System administration & maintenance","Platform upgrades support & testing","Issue tracking & SLA management","Health checks & system audits","Performance tuning & optimization"] },
  { num: "02", title: "Custom Development", items: ["Custom Reporting (YSR / Columnar)","Custom Financials","Custom Interfaces","Workflow validations & automations","Integrations & RPA"] },
  { num: "03", title: "Data Migration", items: ["Legacy system data migration (Yardi ETL)","Data cleansing","Data mapping","Data load and validation"] },
  { num: "04", title: "Implementation & Consulting", items: ["Yardi Voyager / Elevate / Breeze Implementation","Multi-module deployment & configuration","Security model & role restructuring","Go-live support & stabilization"] },
  { num: "05", title: "Training & Testing", items: ["Role-based training programs","Knowledge base creation","Process documentation","Yardi product testing","Test scenarios & test case creation"] },
  { num: "06", title: "Data & Analytics", items: ["BI integration / Yardi Data Connect","Data visualization dashboards","Executive reporting packages","KPI tracking & monitoring","Dashboard & analytics setup"] },
];

const faqs = [
  { q: "What Yardi products do you support?", a: "We support the full Yardi suite across Lease Administration, Accounts Receivable, Bank Book, General Ledger, Fixed Assets, Procure to Pay (P2P), Construction Manager, Facility Manager, Deal Manager, and the surrounding integrations and reporting ecosystem." },
  { q: "Can SpaceTech manage an existing Yardi environment?", a: "Yes. We take ownership of existing Yardi environments — stabilizing operations, improving governance, and running the platform with SLA discipline." },
  { q: "Do you work with teams outside Australia?", a: "Yes. We operate across Australia, India, and the USA with a follow-the-sun delivery model and English-speaking teams." },
  { q: "Can you help with reporting and data quality?", a: "Yes. We deliver custom reporting (YSR / Columnar), BI integration via Yardi Data Connect, executive dashboards, and data quality programs covering cleansing, mapping, and validation." },
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
            <motion.h1 variants={fadeUp} className="mt-6 max-w-[62rem] text-[clamp(2.25rem,6.4vw,3.75rem)] font-extrabold leading-[1.05] text-white drop-shadow-[0_18px_38px_rgba(0,0,0,0.45)] lg:text-[4.25rem] xl:text-7xl">
              Your Trusted Yardi
              <span className="block">Platform Partner</span>
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-200 to-white bg-clip-text text-transparent">SpaceTech Consulting</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-7 max-w-full text-base leading-[1.8] text-white/85 md:text-xl lg:max-w-3xl lg:leading-relaxed">
              Enterprise Yardi platform ownership, proactive support, implementation, integrations, automation, and data intelligence for real estate teams across Australia, India, and the USA.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex w-full max-w-[360px] flex-col gap-3 md:max-w-none md:flex-row md:flex-wrap md:gap-4 select-none">
              <Link to="/contact#send-us-a-message-form"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 font-bold text-[#0F172A] shadow-[0_4px_12px_rgba(255,255,255,0.12),0_12px_32px_rgba(255,255,255,0.18)] ring-1 ring-black/5 hover:scale-105 active:scale-[0.98] transition-all duration-300 md:w-auto">
                Book a Strategy Call <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/18 bg-white/8 px-7 py-4 font-bold text-white shadow-[0_4px_12px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.2)] backdrop-blur-xl hover:scale-105 active:scale-[0.98] transition-all duration-300 hover:bg-white/12 md:w-auto">
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
              className="bg-white rounded-2xl p-6 shadow-elegant card-lift border border-slate-200/60">
              <div className="w-12 h-12 rounded-2xl gradient-primary grid place-items-center shadow-glow mb-4">
                <s.icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-2xl font-extrabold text-[#0F172A]">{s.value}</div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* WHY SPACETECH */}
      <section className="relative overflow-hidden bg-white px-6 py-12 text-[#0F172A] md:py-16">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_58%,rgba(239,246,255,0.7)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(37,99,235,0.08),transparent_28%),radial-gradient(circle_at_86%_22%,rgba(6,182,212,0.1),transparent_30%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mx-auto max-w-4xl text-center">
            <motion.span variants={fadeUp} className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#2563EB] ring-1 ring-blue-100">
              Why SpaceTech
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-4 text-4xl font-extrabold leading-[1.05] text-[#0F172A] md:text-6xl">
              Why <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">SpaceTech</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-2xl font-extrabold leading-tight text-[#0F172A] md:text-4xl">
              Enterprise Engineering DNA.
              <span className="block bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">Property Technology Expertise.</span>
            </motion.p>
            <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-700 md:text-lg">
              Built on enterprise engineering principles, platform ownership, and continuous improvement — helping property organizations maximize the value of their Yardi investment.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyMetrics.map((metric) => (
              <motion.div key={metric.label} variants={fadeUp}
                className="group rounded-2xl border border-slate-100 bg-white p-5 text-[#0F172A] shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant-hover">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-3xl font-extrabold text-[#0F172A]">{metric.value}</div>
                    <p className="mt-2 text-sm font-semibold leading-5 text-slate-700">{metric.label}</p>
                  </div>
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 text-[#2563EB] ring-1 ring-blue-100">
                    <metric.icon className="h-5 w-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((card, i) => (
              <motion.article key={card.title} variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-elegant card-lift">
                <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 -translate-y-16 translate-x-16 transition-transform duration-700 group-hover:scale-150" />
                <div className="relative">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-[#2563EB] shadow-sm">
                    {i + 1 < 10 ? `0${i + 1}` : i + 1}
                  </div>
                  <div className="absolute right-0 top-1 grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-[#2563EB] opacity-90">
                    <card.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-4 pr-12 text-xl font-extrabold text-[#0F172A]">{card.title}</h3>
                  <p className="text-sm leading-7 text-slate-700">{card.body}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="mt-5">
            <motion.article variants={fadeUp}
              className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 text-[#0F172A] shadow-elegant md:p-8">
              <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 -translate-y-20 translate-x-20" />
              <div className="relative flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#2563EB] ring-1 ring-blue-100">
                    <Building2 className="h-4 w-4" /> Special Feature
                  </div>
                  <h3 className="mt-4 text-2xl font-extrabold uppercase tracking-wide text-[#0F172A]">
                    Built From Real Enterprise Operations
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
                    Our operating model has been shaped by supporting complex enterprise property environments every day. The result is a practical, proven approach focused on platform stability, accountability, and measurable outcomes.
                  </p>
                </div>
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-[#2563EB] ring-1 ring-blue-100">
                  <ShieldCheck className="h-8 w-8" />
                </div>
              </div>
            </motion.article>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="mt-6 overflow-hidden rounded-[2rem] border border-slate-100 bg-white text-[#0F172A] shadow-elegant">
            <motion.div variants={fadeUp} className="grid gap-0 lg:grid-cols-[0.95fr_1.25fr]">
              <div className="bg-[#0F172A] p-8 text-white md:p-10">
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-200">Enterprise Proof Banner</span>
                <h3 className="mt-4 text-2xl font-extrabold uppercase leading-tight md:text-3xl">
                  Proven In Enterprise Property Operations
                </h3>
                <p className="mt-5 text-sm leading-7 text-slate-300">
                  Supporting one of Australia's largest listed property groups.
                </p>
              </div>
              <div className="grid gap-3 p-6 sm:grid-cols-2 md:p-8">
                {proofPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-slate-50 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2563EB]" />
                    <span className="text-sm font-semibold leading-6 text-slate-800">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="mt-8 text-center">
            <motion.div variants={fadeUp} className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/contact#send-us-a-message-form"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl gradient-primary px-7 py-4 font-bold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-hover active:scale-[0.98] sm:w-auto">
                Book a Strategy Call <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 font-bold text-[#0F172A] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2563EB] hover:text-[#2563EB] active:scale-[0.98] sm:w-auto">
                Explore Yardi Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-16 md:py-20 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto">
            <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold tracking-widest uppercase">Who We Serve</motion.span>
            <motion.h2 variants={fadeUp} className="mt-5 text-3xl md:text-5xl font-extrabold text-[#0F172A]">Yardi Expertise Across <span className="text-gradient">Property Types</span></motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-lg text-slate-900">
              Every property type runs Yardi differently. We've operated inside these environments at enterprise scale, and we bring that hands-on knowledge to every engagement.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visiblePropertyTypes.map((p) => (
            <motion.div key={p.title} variants={fadeUp}
                className="group relative rounded-3xl overflow-hidden shadow-elegant card-lift bg-white border border-slate-200/60">
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
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white border border-slate-200/80 text-[#0F172A] font-bold shadow-sm hover:border-[#2563EB] hover:text-[#2563EB] active:scale-[0.98] transition-all duration-300 select-none">
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
            <motion.p variants={fadeUp} className="mt-5 text-lg text-slate-900">From implementation to optimization — we cover the complete Yardi lifecycle</motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <motion.div key={s.num} variants={fadeUp}
                className="group relative bg-white rounded-2xl p-6 shadow-elegant card-lift border border-slate-200/60 overflow-hidden">
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
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl gradient-primary text-white font-bold shadow-glow hover:shadow-glow-hover active:scale-[0.98] transition-all duration-300 hover:-translate-y-0.5 select-none">
              Discuss Your Requirements <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
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
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white text-[#0F172A] font-bold shadow-elegant hover:scale-105 active:scale-[0.98] transition-all duration-300 select-none">
                Book a Strategy Call <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl glass-dark text-white font-bold hover:bg-white/20 active:scale-[0.98] transition-all duration-300 select-none">
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
          <p className="mt-6 text-lg text-slate-900">
            SpaceTech Consulting is a global consulting firm delivering comprehensive Yardi services across platform ownership, implementation, data migration, integrations, and customizations.
          </p>
          <p className="mt-4 text-lg text-slate-900">
            With presence across Australia, India, and the USA, we provide 24/7 support and scalable delivery to meet your project needs.
          </p>
          <div className="mt-8 flex justify-center gap-8 text-sm font-semibold">
            <span className="flex items-center gap-2 text-slate-700"><Globe className="w-4 h-4 text-[#2563EB]" /> Global Presence</span>
            <span className="flex items-center gap-2 text-slate-700"><Users className="w-4 h-4 text-[#2563EB]" /> Yardi Expertise</span>
          </div>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl gradient-primary text-white font-bold shadow-glow hover:shadow-glow-hover active:scale-[0.98] transition-all duration-300 hover:-translate-y-0.5 select-none">
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
            <p className="mt-5 text-lg text-slate-900">Clear answers for real estate teams evaluating a Yardi consulting partner.</p>
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
                    <p className="px-6 pb-5 text-slate-900 leading-relaxed">{f.a}</p>
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
            <p className="mt-5 text-lg text-slate-900">Practical governance for clients working across countries, systems, and teams.</p>
          </div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {policies.map((p) => (
              <motion.div key={p.title} variants={fadeUp}
                className="bg-white rounded-3xl p-7 shadow-elegant card-lift border border-slate-200/60">
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
