import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import {
  ArrowRight,
  Target,
  Eye,
  Award,
  Users,
  Lightbulb,
  Quote,
  Shield,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/mission-vision-values")({
  head: () => ({
    meta: [
      { title: "Mission, Vision & Values — SpaceTech Consulting" },
      {
        name: "description",
        content:
          "SpaceTech Consulting's mission is delivering enterprise-grade Yardi operations for ANZ property firms — predictable, proactive, and built to last.",
      },
      {
        property: "og:title",
        content: "Mission, Vision & Values — SpaceTech Consulting",
      },
      {
        property: "og:description",
        content:
          "Become ANZ's trusted Yardi platform partner. Bringing out the best in Yardi.",
      },
    ],
  }),
  component: MissionVisionValues,
});

const values = [
  {
    icon: Shield,
    title: "Ownership",
    description:
      "We treat every client's Yardi platform as our own. Not tickets to close but outcomes to own.",
    color: "from-blue-500 to-blue-700",
    glow: "shadow-blue-200",
    bg: "bg-blue-50",
    border: "border-blue-100",
    accent: "text-[#2563EB]",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We say what the data shows, even when it's uncomfortable. Monthly engagement summary, honest SLA tracking.",
    color: "from-cyan-500 to-cyan-700",
    glow: "shadow-cyan-200",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    accent: "text-cyan-600",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "50+ total Yardi experience. Named SMEs per module, and a continuous improvement loop that makes the platform measurably better every month.",
    color: "from-indigo-500 to-indigo-700",
    glow: "shadow-indigo-200",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    accent: "text-indigo-600",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We invest in client's platform, not just the contract. Sharing insights proactively and thinking 12 months ahead.",
    color: "from-blue-600 to-cyan-600",
    glow: "shadow-blue-200",
    bg: "bg-blue-50",
    border: "border-blue-100",
    accent: "text-[#2563EB]",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "V8 readiness, Yardi AI toolkit tracking, SpaceTech agentic AI. We bring new capability.",
    color: "from-cyan-500 to-blue-500",
    glow: "shadow-cyan-200",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    accent: "text-cyan-600",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

function MissionVisionValues() {
  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 px-6 bg-[#0F172A] text-white overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 15% 50%, rgba(37,99,235,0.45), transparent 55%), radial-gradient(circle at 85% 20%, rgba(6,182,212,0.35), transparent 50%), radial-gradient(circle at 60% 90%, rgba(99,102,241,0.2), transparent 40%)",
          }}
        />
        {/* decorative rings */}
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full border border-white/5 opacity-60" />
        <div className="absolute top-16 right-16 w-56 h-56 rounded-full border border-white/5 opacity-40" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full border border-white/5 opacity-30 -translate-x-1/2 translate-y-1/2" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-cyan-300 text-xs font-bold tracking-widest uppercase backdrop-blur border border-white/10">
              <Sparkles className="w-3 h-3" /> Who We Are
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
          >
            Mission, Vision{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              & Values
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto"
          >
            The principles that guide every engagement, every decision, and every outcome we deliver for ANZ property firms.
          </motion.p>

          {/* quote pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/8 border border-white/12 backdrop-blur"
          >
            <Quote className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="text-cyan-200 font-semibold italic text-sm md:text-base">
              "Bringing out the best in Yardi"
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Mission + Vision split ── */}
      <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl bg-white border border-slate-100 p-8 md:p-10 shadow-elegant"
          >
            {/* decorative blob */}
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 opacity-70 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-gradient-to-tr from-indigo-50 to-blue-50 opacity-80 blur-xl -translate-x-1/2 translate-y-1/2" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
                <Target className="w-3.5 h-3.5 text-[#2563EB]" />
                <span className="text-[#2563EB] text-xs font-bold tracking-widest uppercase">Our Mission</span>
              </div>

              <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-[#0F172A] leading-tight">
                Delivering enterprise-grade Yardi operations for{" "}
                <span className="bg-gradient-to-r from-[#2563EB] to-cyan-500 bg-clip-text text-transparent">
                  ANZ property firms.
                </span>
              </h2>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                Predictable, proactive, and built to last.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                {["Predictable delivery every time", "Proactive platform management", "Built for long-term performance"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full gradient-primary grid place-items-center shrink-0 shadow-glow">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 8">
                        <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl bg-[#0F172A] border border-white/10 p-8 md:p-10 shadow-2xl text-white"
          >
            {/* glow layer */}
            <div
              className="absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(circle at 80% 20%, rgba(6,182,212,0.3), transparent 55%), radial-gradient(circle at 20% 80%, rgba(37,99,235,0.25), transparent 50%)",
              }}
            />
            <div className="absolute top-6 right-6 w-32 h-32 rounded-full border border-white/8" />
            <div className="absolute top-10 right-10 w-20 h-20 rounded-full border border-white/6" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur">
                <Eye className="w-3.5 h-3.5 text-cyan-300" />
                <span className="text-cyan-300 text-xs font-bold tracking-widest uppercase">Our Vision</span>
              </div>

              <h2 className="mt-6 text-3xl md:text-4xl font-extrabold leading-tight">
                Become ANZ's trusted{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Yardi platform partner
                </span>{" "}
                — where property firms go to keep Yardi performing.
              </h2>

              <div className="mt-8 p-5 rounded-2xl bg-white/8 border border-white/10 backdrop-blur">
                <Quote className="w-6 h-6 text-cyan-400 mb-3" />
                <p className="text-xl font-bold text-cyan-200 italic leading-relaxed">
                  "Bringing out the best in Yardi"
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["ANZ-focused", "Platform-first", "Always performing"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-slate-300 text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
                <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                <span className="text-[#2563EB] text-xs font-bold tracking-widest uppercase">Our Values</span>
              </span>
              <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#0F172A]">
                What We{" "}
                <span className="bg-gradient-to-r from-[#2563EB] to-cyan-500 bg-clip-text text-transparent">
                  Stand For
                </span>
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Five principles that shape how we show up for every client, every day.
              </p>
            </motion.div>
          </div>

          {/* top row: 3 cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {values.slice(0, 3).map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-3xl bg-white border ${v.border} p-7 shadow-elegant card-lift`}
              >
                <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full ${v.bg} opacity-60 blur-2xl`} />
                <div className="relative">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${v.color} grid place-items-center shadow-lg ${v.glow} mb-5`}>
                    <v.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className={`text-xl font-extrabold ${v.accent} mb-3`}>{v.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{v.description}</p>
                </div>
                {/* hover accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${v.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            ))}
          </div>

          {/* bottom row: 2 wider cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {values.slice(3).map((v, i) => (
              <motion.div
                key={v.title}
                custom={i + 3}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-3xl bg-white border ${v.border} p-7 md:p-8 shadow-elegant card-lift`}
              >
                <div className={`absolute -top-14 -right-14 w-48 h-48 rounded-full ${v.bg} opacity-50 blur-2xl`} />
                <div className="relative flex gap-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${v.color} grid place-items-center shadow-lg ${v.glow} shrink-0`}>
                    <v.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-extrabold ${v.accent} mb-2`}>{v.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{v.description}</p>
                  </div>
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${v.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Texture CTA banner ── */}
      <section className="py-16 md:py-20 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-[#0F172A]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 40%, rgba(37,99,235,0.4) 0%, transparent 50%), radial-gradient(circle at 75% 70%, rgba(6,182,212,0.3) 0%, transparent 45%), repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 60px)",
          }}
        />
        {/* animated rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full border border-white/5 animate-[spin_40s_linear_infinite]" />
          <div className="absolute w-[350px] h-[350px] rounded-full border border-white/5 animate-[spin_28s_linear_infinite_reverse]" />
        </div>

        <div className="relative max-w-3xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-6">
              <Sparkles className="w-3 h-3" /> Ready to Partner With Us?
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Experience Yardi at Its{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Very Best
              </span>
            </h2>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed">
              Let's discuss how SpaceTech's mission-driven approach can transform your Yardi platform performance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="https://cal.com/spacetech/30min"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl gradient-primary text-white font-bold shadow-glow hover:scale-105 transition-transform"
              >
                Book a Call <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white/10 border border-white/20 text-white font-bold hover:bg-white/15 transition-colors backdrop-blur"
              >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
