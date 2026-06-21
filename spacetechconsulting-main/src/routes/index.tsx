import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import {
  ArrowRight, Users, Clock, BarChart3, ShieldCheck, Lock,
  ChevronDown,
  Globe, FileCheck, Languages, Share2,
  Cpu, Settings2, Database, RefreshCcw, Rocket, Building2, CheckCircle2,
  Eye, UserCheck, Tags, LayoutDashboard, ClipboardCheck, Layers3, Workflow,
  Gauge, HeartPulse, Repeat2,
  ListChecks, Target, Shield,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { visiblePropertyTypes } from "@/data/propertyTypes";
import consultingTeamPhoto from "@/assets/about-team.jpg";
import dashboardThumbnailGallery from "@/assets/case-study/dashboard-thumbnail-gallery.svg";
import resolutionPerformanceOverTime from "@/assets/case-study/resolution-performance-over-time.svg";
import issueAnalysisKeyFindings from "@/assets/case-study/issue-analysis-key-findings.svg";

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
  { icon: BarChart3, value: "3,000+", label: "Platform Issues Managed" },
  { icon: ShieldCheck, value: "95%+ SLA Performance", label: "On owned ticket volume" },
];

const whyMetrics = [
  { value: "25+", target: 25, suffix: "+", label: "Years Technology Leadership", icon: Cpu },
  { value: "3,000+", target: 3000, suffix: "+", label: "Platform Issues Managed", icon: FileCheck, comma: true },
  { value: "50+", target: 50, suffix: "+", label: "Years Total Yardi Experience", icon: ShieldCheck },
  { value: "3", target: 3, suffix: "", label: "Global Delivery Regions", icon: Globe },
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
  "3,000+ Platform Issues Managed",
  "95%+ SLA Performance",
  "1000+ Active Business Users Supported",
  "Commercial & Residential Portfolios",
  "Named Functional & Technical SMEs",
  "Platform Health & Operational Visibility Improved",
];

const caseStudyIconStrip = [
  { icon: Eye, label: "Visibility" },
  { icon: UserCheck, label: "Ownership" },
  { icon: ShieldCheck, label: "Governance" },
  { icon: Gauge, label: "Performance" },
  { icon: HeartPulse, label: "Platform Health" },
  { icon: Repeat2, label: "Continuous Improvement" },
];

const caseStudyHeroMetrics = [
  { value: "3,000+", label: "Platform Issues Managed",          target: 3000, prefix: "",  suffix: "+",  comma: true  },
  { value: "95%+ SLA Performance", label: "On owned ticket volume", target: 95,   prefix: "",  suffix: "%+ SLA Performance", comma: false },
  { value: "18+",    label: "Recurring Issue Patterns Identified & Resolved", target: 18,   prefix: "",  suffix: "+",   comma: false },
  { value: "<100",   label: "Open backlog maintained",           target: 100,  prefix: "<", suffix: "",   comma: false },
];

const caseStudyChallenges = [
  "Limited operational reporting and insights",
  "Inconsistent ticket categorisation",
  "Lack of module ownership accountability",
  "Difficulty identifying recurring issues and root causes",
  "Reactive support model with limited governance visibility",
  "Knowledge retention and continuity risk",
];

const caseStudyBuildCards = [
  {
    icon: UserCheck,
    title: "SME Ownership",
    body: "Named primary and backup module experts with clear accountability across critical Yardi functions.",
  },
  {
    icon: Tags,
    title: "Categorisation",
    body: "A structured Jira operational taxonomy for components, categories, root causes, and reporting standards.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards",
    body: "Real-time operational visibility for ticket intake, closures, stale work, waiting-for-customer items, and SLA compliance.",
  },
  {
    icon: ClipboardCheck,
    title: "Governance",
    body: "Recurring continuous improvement reviews focused on root cause elimination and platform health.",
  },
];

const yardiModules = [
  "Voyager Property Management",
  "Lease Administration",
  "Commercial Cafe",
  "Voyager GL / Finance",
  "Accounts Receivable / Bank Book",
  "Deal Manager",
  "Capex / Construction Manager",
  "Procure to Pay",
  "Facility Manager",
  "Investment Manager",
  "Fixed Assets",
  "Reporting",
  "Security",
  "Integrations",
];

const categorisationFlow = [
  "Components",
  "Operational Categories",
  "Sub-Categories",
  "Root Cause Classification",
  "Reporting Standards",
];

const dashboardAchievements = [
  "Real-Time Executive Dashboards",
  "Operational Categorisation Framework",
  "Named SME Model",
  "Continuous Improvement Governance",
];

const governanceCards = [
  "Backlog reduction",
  "Root cause elimination",
  "Process optimization",
  "Knowledge management",
  "User enablement",
];

const businessOutcomes = [
  "Established enterprise-wide support categorisation and reporting standards",
  "Created real-time operational dashboards for leadership visibility",
  "Implemented named SME ownership across critical business functions",
  "3,000+ Platform Issues Managed",
  "95%+ SLA Performance on owned ticket volume",
  "18+ Recurring Issue Patterns Identified & Resolved",
  "Closures exceeded new ticket intake",
  "Improved platform health and support transparency",
  "Built a scalable operating model supporting hundreds of business users",
];

const dashboardScreenshots = [
  {
    title: "Dashboard Thumbnail Gallery",
    image: dashboardThumbnailGallery,
    alt: "Six executive dashboard thumbnails showing activity, stale tickets, created versus resolved tickets, tagging compliance, waiting on customer, and pending ticket views.",
  },
  {
    title: "Resolution Performance Over Time",
    image: resolutionPerformanceOverTime,
    alt: "Resolution performance chart showing average days to resolve and median days to resolve over nine months.",
  },
  {
    title: "Issue Analysis / Key Findings",
    image: issueAnalysisKeyFindings,
    alt: "Issue analysis dashboard showing recurring issue patterns by module and root cause finding cards.",
  },
] as const;

const services = [
  { num: "01", title: "Platform Support & Optimization", items: ["Application Help Desk (L1/L2/L3)", "System administration & maintenance", "Platform upgrades support & testing", "Issue tracking & SLA management", "Health checks & system audits", "Performance tuning & optimization"] },
  { num: "02", title: "Custom Development", items: ["Custom Reporting (YSR / Columnar)", "Custom Financials", "Custom Interfaces", "Workflow validations & automations", "Integrations & RPA"] },
  { num: "03", title: "Data Migration", items: ["Legacy system data migration (Yardi ETL)", "Data cleansing", "Data mapping", "Data load and validation"] },
  { num: "04", title: "Implementation & Consulting", items: ["Yardi Voyager / Elevate / Breeze Implementation", "Multi-module deployment & configuration", "Security model & role restructuring", "Go-live support & stabilization"] },
  { num: "05", title: "Training & Testing", items: ["Role-based training programs", "Knowledge base creation", "Process documentation", "Yardi product testing", "Test scenarios & test case creation"] },
  { num: "06", title: "Data & Analytics", items: ["BI integration / Yardi Data Connect", "Data visualization dashboards", "Executive reporting packages", "KPI tracking & monitoring", "Dashboard & analytics setup"] },
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

function AnimatedMetricValue({
  target, prefix = "", suffix, run, fallback, comma = false,
}: {
  target: number; prefix?: string; suffix: string; run: boolean; fallback: string; comma?: boolean;
}) {
  const [value, setValue] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!run) return;

    const duration = target > 500 ? 1900 : target > 50 ? 1500 : 1000;
    const startedAt = performance.now();
    const easeOut = (p: number) => 1 - Math.pow(1 - p, 3);

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      setValue(Math.round(target * easeOut(progress)));
      if (progress < 1) frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current); };
  }, [run, target]);

  if (!run) return <>{fallback}</>;
  const display = comma ? value.toLocaleString() : value;
  return <>{prefix}{display}{suffix}</>;
}

function CaseStudySection() {
  const [activeTab, setActiveTab] = useState<"challenge" | "approach" | "outcomes">("challenge");
  const heroMetricsRef = useRef<HTMLDivElement | null>(null);
  const [heroAnimated, setHeroAnimated] = useState(false);

  useEffect(() => {
    const node = heroMetricsRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHeroAnimated(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="case-study" className="relative overflow-hidden bg-[#F8FAFC] px-4 py-16 text-[#0F172A] sm:px-6 md:py-20">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#F8FAFC_0%,#FFFFFF_42%,#EFF6FF_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,235,0.08),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(6,182,212,0.08),transparent_28%)]" />

      <div className="relative mx-auto max-w-[96rem]">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="overflow-visible rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)]">

          {/* ── Hero ── */}
          <div className="grid bg-[#0F172A] lg:grid-cols-[1.08fr_0.92fr]">
            <div className="p-6 text-white sm:p-8 lg:p-10">
              <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-100">
                <Shield className="h-4 w-4" />
                Client Success Story
              </motion.span>
              <motion.h2 variants={fadeUp} className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Operational Excellence & Platform Visibility Transformation
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-lg font-semibold text-cyan-100">
                Leading ASX-Listed Property Group
              </motion.p>
              <motion.p variants={fadeUp} className="mt-5 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
                See how SpaceTech transforms support operations into measurable business outcomes through platform ownership, operational visibility, and continuous improvement.
              </motion.p>

              <motion.div ref={heroMetricsRef} variants={stagger} className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
                {caseStudyHeroMetrics.map((metric) => (
                  <motion.div key={metric.label} variants={fadeUp} whileHover={{ scale: 1.04, y: -2 }} className="cursor-default rounded-2xl border border-white/10 bg-white/[0.08] p-4 transition-colors hover:bg-white/[0.14]">
                    <div className="text-2xl font-extrabold text-white sm:text-3xl tabular-nums">
                      <AnimatedMetricValue
                        target={metric.target}
                        prefix={metric.prefix}
                        suffix={metric.suffix}
                        run={heroAnimated}
                        fallback={metric.value}
                        comma={metric.comma}
                      />
                    </div>
                    <p className="mt-2 text-xs font-semibold leading-snug text-slate-300">{metric.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="relative min-h-[320px] overflow-hidden border-t border-white/10 lg:border-l lg:border-t-0">
              <img src={consultingTeamPhoto} alt="Enterprise consulting team in a governance meeting" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                <p className="text-sm font-bold uppercase tracking-widest text-cyan-100">Enterprise Operating Model</p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-200">
                  Real-world governance, named ownership, and executive reporting for hundreds of property business users.
                </p>
              </div>
            </motion.div>
          </div>

          {/* ── Icon Strip ── */}
          <motion.div variants={stagger} className="grid grid-cols-2 border-b border-slate-200 bg-white sm:grid-cols-3 lg:grid-cols-6">
            {caseStudyIconStrip.map((item) => (
              <motion.div key={item.label} variants={fadeUp} whileHover={{ backgroundColor: "#EFF6FF" }} className="flex items-center gap-3 border-r border-slate-100 px-4 py-4 last:border-r-0 transition-colors">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#2563EB]">
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-extrabold text-slate-800">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Tab Navigation ── */}
          <div className="border-b border-slate-200 bg-slate-50 px-5 py-3">
            <div className="flex flex-wrap gap-2">
              {(["challenge", "approach", "outcomes"] as const).map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`rounded-full px-5 py-2 text-xs font-extrabold uppercase tracking-widest transition-all ${
                    activeTab === tab
                      ? "bg-[#0F172A] text-white shadow-md"
                      : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {tab}
                </motion.button>
              ))}
            </div>
          </div>

          {/* ── Tab Content ── */}
          <div className="p-5 sm:p-8 lg:p-10">
            <AnimatePresence mode="wait">

              {/* CHALLENGE */}
              {activeTab === "challenge" && (
                <motion.div key="challenge" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.28 }} className="space-y-8">
                  <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-widest text-[#2563EB]">The Challenge</span>
                      <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">Limited visibility. Limited accountability. Reactive support.</h3>
                      <p className="mt-4 leading-relaxed text-slate-700">
                        The client operated a complex Yardi ecosystem supporting commercial and residential property portfolios across hundreds of business users. Support requests were being addressed, but leadership lacked visibility into platform demand, recurring issues, ownership accountability, operational trends, and service performance.
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500">Key Challenges</span>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {caseStudyChallenges.map((challenge, i) => (
                          <motion.div
                            key={challenge}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.07 }}
                            whileHover={{ scale: 1.02, boxShadow: "0 4px 16px rgba(37,99,235,0.10)" }}
                            className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                          >
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2563EB]" />
                            <span className="text-sm font-semibold leading-relaxed text-slate-700">{challenge}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* APPROACH */}
              {activeTab === "approach" && (
                <motion.div key="approach" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.28 }} className="space-y-10">

                  {/* Build cards */}
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#2563EB]">What SpaceTech Built</span>
                    <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">Building a Data-Driven Yardi Support Operating Model</h3>
                    <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                      {caseStudyBuildCards.map((card, i) => (
                        <motion.div
                          key={card.title}
                          initial={{ opacity: 0, y: 24 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.09 }}
                          whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(15,23,42,0.14)" }}
                          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                        >
                          <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#0F172A] text-white">
                            <card.icon className="h-5 w-5" />
                          </div>
                          <h4 className="mt-4 text-lg font-extrabold">{card.title}</h4>
                          <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.body}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Module Ownership + Categorisation */}
                  <div className="grid gap-6 lg:grid-cols-2">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <div className="flex items-center gap-3">
                        <Layers3 className="h-5 w-5 text-[#2563EB]" />
                        <h4 className="text-lg font-extrabold">Module Ownership Model</h4>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        SpaceTech established named primary and backup SMEs across critical Yardi functions, creating clear ownership and accountability across every module aligned with client business processes.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {yardiModules.map((module, i) => (
                          <motion.span
                            key={module}
                            initial={{ opacity: 0, scale: 0.88 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.04 }}
                            className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700"
                          >
                            {module}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <div className="flex items-center gap-3">
                        <Workflow className="h-5 w-5 text-[#2563EB]" />
                        <h4 className="text-lg font-extrabold">Operational Categorisation Framework</h4>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        SpaceTech designed a structured Jira taxonomy spanning five layers. For the first time, leadership could understand what issues were occurring, which modules generated demand, and where improvement efforts should focus.
                      </p>
                      <div className="mt-4 grid gap-2">
                        {categorisationFlow.map((step, index) => (
                          <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + index * 0.07 }}
                            className="flex items-center gap-3 rounded-xl bg-white p-3 text-sm font-bold text-slate-700 shadow-sm"
                          >
                            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-50 text-xs text-[#2563EB]">{index + 1}</span>
                            {step}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Dashboard screenshots */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
                  >
                    <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-end lg:justify-between">
                      <div>
                        <div className="flex items-center gap-3">
                          <LayoutDashboard className="h-5 w-5 text-[#0EA5E9]" />
                          <h4 className="text-xl font-extrabold text-[#0F172A] sm:text-2xl">Executive Dashboards & Reporting</h4>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-extrabold text-emerald-700">
                            <ShieldCheck className="h-3.5 w-3.5" />
                            Real client data
                          </span>
                          <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-600">
                            <Lock className="h-3.5 w-3.5" />
                            Client names and ticket references anonymized
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mx-auto mt-6 grid w-full gap-6">
                      {dashboardScreenshots.map((screenshot, index) => (
                        <motion.figure
                          key={screenshot.title}
                          initial={{ opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + index * 0.08 }}
                          className="overflow-visible rounded-xl border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
                        >
                          <figcaption className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-sm font-extrabold text-[#0F172A] sm:px-5">
                            {screenshot.title}
                          </figcaption>
                          <img
                            src={screenshot.image}
                            alt={screenshot.alt}
                            loading="lazy"
                            width={3840}
                            height={2160}
                            className="block h-auto w-full bg-white"
                          />
                        </motion.figure>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* OUTCOMES */}
              {activeTab === "outcomes" && (
                <motion.div key="outcomes" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.28 }} className="space-y-8">
                  <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">

                    {/* Governance */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="rounded-2xl border border-slate-200 bg-blue-50 p-6">
                      <Target className="h-6 w-6 text-[#2563EB]" />
                      <h4 className="mt-4 text-xl font-extrabold">Continuous Improvement Governance</h4>
                      <p className="mt-3 text-sm leading-relaxed text-slate-700">
                        SpaceTech implemented recurring operational reviews focused on backlog reduction, root cause elimination, process optimization, knowledge management, and user enablement.
                      </p>
                      <div className="mt-5 grid gap-2">
                        {governanceCards.map((item, i) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + i * 0.08 }}
                            className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-700"
                          >
                            <ListChecks className="h-4 w-4 text-[#2563EB]" />
                            {item}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Business Outcomes */}
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                      <div className="flex items-center gap-3">
                        <ClipboardList className="h-6 w-6 text-[#2563EB]" />
                        <h4 className="text-xl font-extrabold">Business Outcomes</h4>
                      </div>
                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {businessOutcomes.map((outcome, i) => (
                          <motion.div
                            key={outcome}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + i * 0.06 }}
                            whileHover={{ scale: 1.02 }}
                            className="flex gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" />
                            <span className="text-sm font-semibold leading-relaxed text-slate-700">{outcome}</span>
                          </motion.div>
                        ))}
                      </div>
                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {dashboardAchievements.map((achievement, i) => (
                          <motion.div
                            key={achievement}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7 + i * 0.08 }}
                            className="rounded-xl bg-[#0F172A] px-4 py-3 text-center text-sm font-extrabold text-white"
                          >
                            {achievement}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Business Impact Navy Banner */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="overflow-hidden rounded-2xl bg-[#0F172A] p-6 text-white sm:p-8"
                  >
                    <p className="text-xs font-extrabold uppercase tracking-widest text-cyan-200">Business Impact</p>
                    <p className="mt-3 text-2xl font-extrabold uppercase tracking-wide sm:text-3xl">
                      From Ticket Management to Platform Ownership
                    </p>
                    <div className="mt-2 h-1 w-16 rounded-full bg-cyan-400" />
                    <p className="mt-5 max-w-5xl text-base leading-relaxed text-slate-200 sm:text-lg">
                      SpaceTech helped transform Yardi support operations from a reactive service model into a structured, measurable, and continuously improving operating model supporting hundreds of business users across a complex enterprise property environment.
                    </p>
                    <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-300">
                      Beyond resolving tickets faster, SpaceTech's root cause program targets the <span className="font-semibold text-white">source</span> of recurring issues — turning repeat problems into permanent fixes, so business teams spend less time raising the same ticket twice.
                    </p>
                  </motion.div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const whyMetricsRef = useRef<HTMLDivElement | null>(null);
  const [animateWhyMetrics, setAnimateWhyMetrics] = useState(false);

  useEffect(() => {
    const node = whyMetricsRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateWhyMetrics(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[100svh] lg:min-h-[78vh] flex items-center overflow-hidden bg-[#020B1F]">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-section-bg.png"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-[1.08] object-cover object-center brightness-[0.85] lg:scale-[1.12] lg:brightness-95"
        >
          <source src="/hero-bg-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(2,11,31,.35),rgba(2,11,31,.50))] lg:bg-gradient-to-r lg:from-[#020B1F]/88 lg:via-[#020B1F]/50 lg:to-[#020B1F]/10" />
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
      <section className="relative overflow-hidden bg-white px-6 py-12 md:py-16">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_60%,rgba(239,246,255,0.6)_100%)] dark:hidden" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.06),transparent_35%),radial-gradient(circle_at_85%_20%,rgba(6,182,212,0.07),transparent_35%)] dark:bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.18),transparent_35%),radial-gradient(circle_at_85%_20%,rgba(6,182,212,0.15),transparent_35%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent dark:via-blue-800" />

        <div className="relative mx-auto max-w-7xl">

          {/* ── Section Header ── */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mx-auto max-w-3xl text-center">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#2563EB] ring-1 ring-blue-100">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500" />
              Why SpaceTech
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-4 text-3xl font-extrabold leading-[1.1] text-[#0F172A] md:text-4xl">
              Enterprise Engineering DNA.
              <span className="block bg-gradient-to-r from-[#2563EB] to-[#0891B2] bg-clip-text text-transparent">
                Property Technology Expertise.
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
              Built on enterprise engineering principles, platform ownership, and continuous improvement — helping property organizations maximize the value of their Yardi investment.
            </motion.p>
          </motion.div>

          {/* ── Credibility Metrics Strip ── */}
          <motion.div ref={whyMetricsRef} initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {whyMetrics.map((metric) => (
              <motion.div key={metric.label} variants={fadeUp}
                className="group relative overflow-hidden rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-100 hover:shadow-md">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-cyan-50/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between gap-2">
                  <div>
                    <div className="text-2xl font-extrabold text-[#0F172A]">
                      <AnimatedMetricValue target={metric.target} suffix={metric.suffix} run={animateWhyMetrics} fallback={metric.value} comma={metric.comma} />
                    </div>
                    <p className="mt-1 text-sm font-medium leading-5 text-slate-500">{metric.label}</p>
                  </div>
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 text-white transition-transform duration-300 group-hover:scale-110">
                    <metric.icon className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Six Value Cards ── */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((card, i) => (
              <motion.article key={card.title} variants={fadeUp}
                className="group relative overflow-hidden rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-blue-100 hover:shadow-md">
                {/* Animated sweep border on hover */}
                <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#2563EB] via-cyan-500 to-blue-400 transition-transform duration-500 group-hover:scale-x-100" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-3xl font-black text-slate-100 transition-colors duration-300 group-hover:text-blue-50">
                      {i + 1 < 10 ? `0${i + 1}` : i + 1}
                    </span>
                    <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 text-white transition-transform duration-300 group-hover:scale-110">
                      <card.icon className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-base font-bold text-[#0F172A]">{card.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{card.body}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* ── Built From Real Enterprise Operations ── */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mt-4">
            <motion.article variants={fadeUp}
              className="relative overflow-hidden rounded-xl border border-blue-100 bg-blue-50/50 p-5 md:p-6 dark:border-blue-900/50 dark:bg-blue-950/30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(6,182,212,0.08),transparent_55%)]" />
              <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#2563EB] ring-1 ring-blue-100">
                    <Building2 className="h-3.5 w-3.5" />
                    Built From Real Enterprise Operations
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Our operating model has been shaped by supporting complex enterprise property environments every day. The result is a practical, proven approach focused on platform stability, accountability, and measurable outcomes.
                  </p>
                </div>
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/20">
                  <ShieldCheck className="h-6 w-6" />
                </div>
              </div>
            </motion.article>
          </motion.div>

          {/* ── Enterprise Proof Banner ── */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="mt-4 overflow-hidden rounded-xl border border-slate-100 shadow-sm">
            <motion.div variants={fadeUp} className="grid lg:grid-cols-[0.85fr_1.3fr]">
              <div className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1D4ED8] to-[#0891B2] p-6 text-white md:p-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_45%)]" />
                <div className="relative">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-cyan-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    Enterprise Proof
                  </span>
                  <h3 className="mt-3 text-xl font-extrabold uppercase leading-tight text-white">
                    Proven In Enterprise Property Operations
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-blue-100">
                    Supporting one of Australia's largest listed property groups.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
                    <ShieldCheck className="h-4 w-4 text-cyan-200" />
                    <span className="text-xs font-bold text-cyan-100">ASX-Listed Property Group</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-5 dark:bg-slate-900/80 md:p-6">
                <div className="grid gap-2 sm:grid-cols-2">
                  {proofPoints.map((point) => (
                    <div key={point} className="flex items-start gap-2 rounded-lg border border-slate-100 bg-slate-50 p-3 transition-all duration-200 hover:border-blue-100 hover:bg-blue-50/50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" />
                      <span className="text-sm font-semibold leading-6 text-slate-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Call To Action ── */}
          <motion.div id="book-call" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="mt-4 overflow-hidden rounded-xl border border-slate-100 bg-white/80 p-5 text-center shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5 md:p-7">
            <motion.div variants={fadeUp} className="mx-auto max-w-3xl">
              <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#2563EB] ring-1 ring-blue-100">
                Get Started
              </span>
              <h3 className="mt-4 text-2xl font-extrabold leading-tight text-[#0F172A] md:text-3xl">
                Ready to Maximize Your{" "}
                <span className="bg-gradient-to-r from-[#2563EB] to-[#0891B2] bg-clip-text text-transparent">
                  Yardi Investment?
                </span>
              </h3>
              <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Partner with SpaceTech to improve platform health, increase operational visibility, reduce recurring issues, and unlock greater value from your Yardi platform.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-5 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
              <a href="#book-call"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#0891B2] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.98] sm:w-auto">
                Book a Strategy Call <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a href="#services"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-[#0F172A] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-[#2563EB] active:scale-[0.98] dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:border-blue-400/40 sm:w-auto">
                Explore Yardi Services
              </a>
            </motion.div>

          </motion.div>

        </div>
      </section>

      <CaseStudySection />

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
      <section id="services" className="py-16 md:py-20 px-6">
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
