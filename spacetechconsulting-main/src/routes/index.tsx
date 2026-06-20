import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import {
  ArrowRight, Users, Clock, BarChart3, ShieldCheck, Lock,
  ChevronDown,
  Globe, FileCheck, Languages, Share2,
  Cpu, Settings2, Database, RefreshCcw, Rocket, Building2, CheckCircle2,
  Eye, UserCheck, Tags, LayoutDashboard, ClipboardCheck, Layers3, Workflow,
  Gauge, HeartPulse, Repeat2, LineChart, TrendingDown, ClipboardList,
  ListChecks, Target, Shield,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { visiblePropertyTypes } from "@/data/propertyTypes";
import heroSectionBg from "@/assets/hero-section-bg.png";
import consultingTeamPhoto from "@/assets/about-team.jpg";
import caseStudyDashboardGrid from "@/assets/case-study/case-study-page-3.png";
import caseStudyResolutionChart from "@/assets/case-study/case-study-page-4.png";

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
  { value: "25+", target: 25, suffix: "+", label: "Years Technology Leadership", icon: Cpu },
  { value: "2000+", target: 2000, suffix: "+", label: "Platform Requests Managed", icon: FileCheck },
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
  "2,000+ Platform Tickets Addressed",
  "95%+ SLA",
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
  { value: "2,000+", label: "Platform Issues Managed" },
  { value: "95%+", label: "SLA on owned ticket volume" },
  { value: "18", label: "Recurring issue patterns resolved" },
  { value: "<100", label: "Open backlog maintained" },
];

const caseStudyChallenges = [
  "Limited operational reporting and insights",
  "Inconsistent ticket categorisation",
  "Lack of module ownership accountability",
  "Difficulty identifying recurring issues and root causes",
  "Reactive support model with limited governance visibility",
  "Resource attrition impacting service continuity",
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

const dashboardCoverage = [
  "Ticket intake and closures",
  "Created vs resolved trends",
  "Stale ticket tracking",
  "Waiting-for-customer analysis",
  "SLA compliance",
  "Operational category reporting",
];

const dashboardAchievements = [
  "Named SME Model",
  "Operational Categorisation Framework",
  "Real-Time Executive Dashboards",
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
  "Managed more than 2,000 platform requests",
  "Delivered 95%+ SLA on owned ticket volume",
  "Identified and eliminated 18 recurring issue patterns through root-cause fixes",
  "Moved closures above new ticket intake",
  "Built a scalable operating model supporting hundreds of business users",
];

const ctaTrustIndicators = [
  "50+ Years Total Yardi Experience",
  "2,000+ Platform Requests Managed",
  "95%+ SLA Performance",
  "Australia • India • United States",
];

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

function AnimatedMetricValue({ target, suffix, run, fallback }: { target: number; suffix: string; run: boolean; fallback: string }) {
  const [value, setValue] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!run) return;

    const duration = target > 500 ? 1800 : 1400;
    const startedAt = performance.now();
    const easeOut = (progress: number) => 1 - Math.pow(1 - progress, 3);

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      setValue(Math.round(target * easeOut(progress)));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [run, target]);

  if (!run) return <>{fallback}</>;

  return <>{value}{suffix}</>;
}

function CaseStudySection() {
  return (
    <section id="case-study" className="relative overflow-hidden bg-[#F8FAFC] px-4 py-16 text-[#0F172A] sm:px-6 md:py-20">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#F8FAFC_0%,#FFFFFF_42%,#EFF6FF_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,235,0.08),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(6,182,212,0.08),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
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
                SpaceTech transformed support operations into measurable business outcomes through platform ownership, operational visibility, and continuous improvement.
              </motion.p>

              <motion.div variants={stagger} className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
                {caseStudyHeroMetrics.map((metric) => (
                  <motion.div key={metric.label} variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/[0.08] p-4">
                    <div className="text-2xl font-extrabold text-white sm:text-3xl">{metric.value}</div>
                    <p className="mt-2 text-xs font-semibold leading-snug text-slate-300">{metric.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="relative min-h-[320px] overflow-hidden border-t border-white/10 lg:border-l lg:border-t-0">
              <img src={consultingTeamPhoto} alt="Enterprise consulting team in a governance meeting" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                <p className="text-sm font-bold uppercase tracking-widest text-cyan-100">Enterprise operating model</p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-200">
                  Real-world governance, named ownership, and executive reporting for hundreds of property business users.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={stagger} className="grid grid-cols-2 border-b border-slate-200 bg-white sm:grid-cols-3 lg:grid-cols-6">
            {caseStudyIconStrip.map((item) => (
              <motion.div key={item.label} variants={fadeUp} className="flex items-center gap-3 border-r border-slate-100 px-4 py-4 last:border-r-0">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#2563EB]">
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-extrabold text-slate-800">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="border-b border-slate-200 bg-slate-50 px-5 py-3">
            <div className="flex flex-wrap gap-2">
              {["Challenge", "Approach", "Outcomes"].map((item) => (
                <span key={item} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-slate-700">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-12 p-5 sm:p-8 lg:p-10">
            <motion.div variants={stagger} className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <motion.div variants={fadeUp}>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#2563EB]">The Challenge</span>
                <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">Limited visibility. Limited accountability. Reactive support.</h3>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  The client operated a complex Yardi ecosystem supporting commercial and residential property portfolios across hundreds of business users. Leadership needed clearer visibility into demand, recurring issues, ownership accountability, operational trends, and service performance.
                </p>
              </motion.div>
              <motion.div variants={stagger} className="grid gap-3 sm:grid-cols-2"><h3>key challanges</h3>
                {caseStudyChallenges.map((challenge) => (
                  <motion.div key={challenge} variants={fadeUp} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2563EB]" />
                    <span className="text-sm font-semibold leading-relaxed text-slate-700">{challenge}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={stagger}>
              <div className="max-w-3xl">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#2563EB]">What SpaceTech Built</span>
                <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">A data-driven Yardi support operating model</h3>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {caseStudyBuildCards.map((card) => (
                  <motion.div key={card.title} variants={fadeUp} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#0F172A] text-white">
                      <card.icon className="h-5 w-5" />
                    </div>
                    <h4 className="mt-4 text-lg font-extrabold">{card.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.body}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={stagger} className="grid gap-6 lg:grid-cols-2">
              <motion.div variants={fadeUp} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-3">
                  <Layers3 className="h-5 w-5 text-[#2563EB]" />
                  <h4 className="text-lg font-extrabold">Module Ownership Model</h4>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {yardiModules.map((module) => (
                    <span key={module} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700">
                      {module}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-3">
                  <Workflow className="h-5 w-5 text-[#2563EB]" />
                  <h4 className="text-lg font-extrabold">Operational Categorisation Framework</h4>
                </div>
                <div className="mt-5 grid gap-3">
                  {categorisationFlow.map((step, index) => (
                    <div key={step} className="flex items-center gap-3 rounded-xl bg-white p-3 text-sm font-bold text-slate-700 shadow-sm">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-50 text-xs text-[#2563EB]">{index + 1}</span>
                      {step}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={stagger} className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr]">
              <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-200 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <LayoutDashboard className="h-5 w-5 text-[#2563EB]" />
                    <h4 className="text-lg font-extrabold">Executive Dashboards & Reporting</h4>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Operational dashboards made platform demand, stale work, SLA health, and customer-waiting items visible to leadership.
                  </p>
                </div>
                <img src={caseStudyDashboardGrid} alt="Case study dashboard examples showing Yardi support operations" className="w-full bg-slate-100" />
                <p className="border-t border-slate-200 px-5 py-3 text-xs font-semibold text-slate-500">
                  Dashboard examples from the case study PDF. Values shown in the source layout are illustrative for presentation.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-2xl border border-slate-200 bg-[#0F172A] p-5 text-white shadow-sm">
                <LineChart className="h-6 w-6 text-cyan-200" />
                <h4 className="mt-4 text-xl font-extrabold">Real client performance data</h4>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Resolution performance improved steadily over nine months. Average resolution time fell from approximately 33.5 days to 6.4 days, and median resolution time fell from approximately 23.7 days to 4.3 days.
                </p>
                <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-white">
                  <img src={caseStudyResolutionChart} alt="Real client data showing resolution time improvement over nine months" className="w-full" />
                </div>
                <div className="mt-5 grid gap-3">
                  {dashboardCoverage.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl bg-white/10 p-3 text-sm font-semibold text-slate-200">
                      <TrendingDown className="h-4 w-4 shrink-0 text-cyan-200" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={stagger} className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <motion.div variants={fadeUp} className="rounded-2xl border border-slate-200 bg-blue-50 p-6">
                <Target className="h-6 w-6 text-[#2563EB]" />
                <h4 className="mt-4 text-xl font-extrabold">Continuous Improvement Governance</h4>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  Recurring reviews shifted the function from ticket handling to platform ownership, with repeat problems turned into permanent fixes.
                </p>
                <div className="mt-5 grid gap-2">
                  {governanceCards.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-700">
                      <ListChecks className="h-4 w-4 text-[#2563EB]" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <ClipboardList className="h-6 w-6 text-[#2563EB]" />
                  <h4 className="text-xl font-extrabold">Business Outcomes</h4>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {businessOutcomes.map((outcome) => (
                    <div key={outcome} className="flex gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" />
                      <span className="text-sm font-semibold leading-relaxed text-slate-700">{outcome}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {dashboardAchievements.map((achievement) => (
                    <div key={achievement} className="rounded-xl bg-[#0F172A] px-4 py-3 text-sm font-extrabold text-white">
                      {achievement}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl bg-[#0F172A] p-6 text-white sm:p-8">
              <p className="text-xs font-extrabold uppercase tracking-widest text-cyan-200">From ticket management to platform ownership</p>
              <p className="mt-4 max-w-5xl text-xl font-extrabold leading-relaxed sm:text-2xl">
                SpaceTech helped transform Yardi support operations from a reactive service model into a structured, measurable, continuously improving operating model supporting hundreds of business users.
              </p>
              <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-300">
                The root cause program targets the source of recurring issues and turns repeat problems into permanent fixes.
              </p>
            </motion.div>
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
          src="/hero-section-video.mp4"
          poster={heroSectionBg}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full scale-[1.04] object-cover object-center brightness-[0.45] lg:brightness-100"
          aria-hidden="true"
        />
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
            <motion.span variants={fadeUp} className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#2563EB] ring-1 ring-blue-100">
              Why SpaceTech
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-5 text-4xl font-bold leading-[1.12] text-[#0F172A] md:text-5xl">
              Why <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">SpaceTech</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-3xl text-2xl font-semibold leading-[1.25] text-slate-950 md:text-3xl">
              Enterprise Engineering DNA.
              <span className="block bg-gradient-to-r from-[#2563EB] to-[#0891B2] bg-clip-text text-transparent">Property Technology Expertise.</span>
            </motion.p>
            <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-700 md:text-lg">
              Built on enterprise engineering principles, platform ownership, and continuous improvement — helping property organizations maximize the value of their Yardi investment.
            </motion.p>
          </motion.div>

          <motion.div ref={whyMetricsRef} initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyMetrics.map((metric) => (
              <motion.div key={metric.label} variants={fadeUp}
                className="group rounded-2xl border border-slate-100 bg-white p-5 text-[#0F172A] shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant-hover">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-3xl font-extrabold text-[#0F172A]">
                      <AnimatedMetricValue target={metric.target} suffix={metric.suffix} run={animateWhyMetrics} fallback={metric.value} />
                    </div>
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
                  <h3 className="mb-4 pr-12 text-xl font-bold text-[#0F172A]">{card.title}</h3>
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
                  <h3 className="mt-4 text-2xl font-bold uppercase tracking-wide text-[#0F172A]">
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
              <div className="relative overflow-hidden bg-[linear-gradient(135deg,#1E40AF_0%,#2563EB_50%,#06B6D4_100%)] p-8 text-white md:p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.26),transparent_34%),radial-gradient(circle_at_82%_80%,rgba(15,23,42,0.18),transparent_42%)]" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-white/25" />
                <div className="relative">
                  <span className="text-xs font-bold uppercase tracking-widest text-cyan-200">Enterprise Proof Banner</span>
                  <h3 className="mt-4 text-2xl font-bold uppercase leading-tight md:text-3xl">
                    Proven In Enterprise Property Operations
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-slate-300">
                    Supporting one of Australia's largest listed property groups.
                  </p>
                </div>
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

          <motion.div id="book-call" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="mt-6 overflow-hidden rounded-[2rem] border border-white/70 bg-white/86 p-6 text-center shadow-elegant backdrop-blur-xl md:p-10">
            <motion.div variants={fadeUp} className="mx-auto max-w-4xl">
              <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#2563EB] ring-1 ring-blue-100">
                Call To Action
              </span>
              <h3 className="mt-5 text-3xl font-bold leading-tight text-[#0F172A] md:text-5xl">
                Ready to Maximize Your <span className="text-gradient">Yardi Investment?</span>
              </h3>
              <p className="mx-auto mt-4 max-w-3xl text-base font-semibold leading-7 text-slate-800 md:text-lg">
                Supporting property organizations with platform ownership, operational excellence, governance, and continuous improvement.
              </p>
              <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
                Partner with SpaceTech to improve platform health, increase operational visibility, reduce recurring issues, and unlock greater value from your Yardi platform.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#book-call"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl gradient-primary px-7 py-4 font-bold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-hover active:scale-[0.98] sm:w-auto">
                Book a Strategy Call <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 font-bold text-[#0F172A] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2563EB] hover:text-[#2563EB] active:scale-[0.98] sm:w-auto">
                Explore Yardi Services
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {ctaTrustIndicators.map((indicator) => (
                <div key={indicator} className="flex items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-slate-50/90 px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-elegant">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#2563EB]" />
                  <span>{indicator}</span>
                </div>
              ))}
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
