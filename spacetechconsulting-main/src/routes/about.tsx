import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import { ArrowRight, Globe, Users, Clock, Award, ShieldCheck, BarChart3, Layers3, BrainCircuit, Cloud, Bot, Building2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import aboutTeam from "@/assets/about-section.jpeg";

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
  { value: "50+", target: 50, suffix: "+", label: "Years of Total Yardi Experience", icon: Award },
  { value: "3,000+", target: 3000, suffix: "+", label: "Platform Issues Managed", icon: Users },
  { value: "24/7", target: 24, suffix: "/7", label: "Global Support Coverage", icon: Clock },
  { value: "3", target: 3, suffix: "", label: "Regions of Global Delivery", icon: Globe },
];

const regions = [
  { name: "Australia", desc: "ANZ delivery hub, real estate platform ownership." },
  { name: "India", desc: "Engineering, custom development, and 24/7 support." },
  { name: "USA", desc: "Client partnership, advisory, and program leadership." },
];

const principles = [
  { icon: ShieldCheck, title: "Governed Delivery", text: "Clear intake, prioritization, testing, release notes, and handover discipline for every engagement." },
  { icon: BarChart3, title: "Measurable Outcomes", text: "We connect configuration, reporting, and support work to operating performance and executive visibility." },
  { icon: Layers3, title: "Full Platform Context", text: "Our team looks across modules, integrations, data quality, and user workflows before recommending changes." },
];

const founderHighlights = [
  { icon: Award, label: "25+ Years Experience" },
  { icon: BrainCircuit, label: "Enterprise Technology Leadership" },
  { icon: Cloud, label: "Cloud, Data & AI" },
  { icon: Bot, label: "Intelligent Automation & RPA" },
  { icon: Building2, label: "Yardi Property Technology" },
];

function CountUpValue({ target, suffix, run, fallback }: { target: number; suffix: string; run: boolean; fallback: string }) {
  const [value, setValue] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!run) return;

    const duration = 2200;
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

  if (!run) return <>{fallback === "24/7" ? "0/7" : "0"}</>;

  return <>{value.toLocaleString()}{suffix}</>;
}

function About() {
  const statsRef = useRef<HTMLElement | null>(null);
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateStats(true);
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
      <section className="relative py-16 md:py-20 px-6 bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-50"
          style={{ background: "radial-gradient(circle at 20% 30%, rgba(37,99,235,0.4), transparent 50%), radial-gradient(circle at 80% 70%, rgba(6,182,212,0.3), transparent 50%)" }} />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-cyan-300 text-xs font-bold tracking-widest uppercase">About SpaceTech</span>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05]">Your Strategic <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Yardi Partner</span></h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              SpaceTech Consulting combines deep Yardi expertise with enterprise engineering leadership to deliver operational excellence, platform reliability, and measurable business outcomes across complex property technology environments.
            </p>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Built on real enterprise operating principles, SpaceTech brings platform ownership, continuous improvement, and disciplined execution to complex property technology environments. Through our teams across Australia, India, and the United States, we provide scalable delivery, 24/7 support coverage, and trusted long-term partnership for property organizations.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-3xl blur-2xl" />
            <img src={aboutTeam} alt="SpaceTech team" loading="lazy" width={1280} height={896}
              className="relative rounded-3xl shadow-2xl" />
          </motion.div>
        </div>
      </section>

      <section ref={statsRef} className="py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5">
          {counters.map((c, i) => (
            <motion.div key={c.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="bg-white rounded-3xl p-7 shadow-elegant card-lift border border-slate-100 text-center">
              <div className="w-12 h-12 rounded-2xl gradient-primary grid place-items-center shadow-glow mx-auto mb-4">
                <c.icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-4xl font-extrabold text-gradient">
                <CountUpValue target={c.target} suffix={c.suffix} run={animateStats} fallback={c.value} />
              </div>
              <div className="mt-2 text-sm text-slate-900 font-medium">{c.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16 md:pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-8 shadow-elegant md:p-10">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 -translate-y-20 translate-x-16" />
            <div className="relative">
              <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#2563EB]">Meet Our Founder</span>
              <h2 className="mt-6 text-4xl font-extrabold text-[#0F172A]">Sambhaji</h2>
              <p className="mt-2 text-xl font-bold text-gradient">Founder & CEO</p>
              <div className="mt-7 grid gap-3">
                {founderHighlights.map((item) => (
                  <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-[#2563EB] shadow-sm">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-slate-800">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.article initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="rounded-3xl border border-slate-100 bg-white p-8 shadow-elegant md:p-10">
            <h3 className="text-3xl font-extrabold text-[#0F172A]">Enterprise Engineering Leadership for Property Technology</h3>
            <div className="mt-5 space-y-4 text-base leading-8 text-slate-900">
              <p>
                Sambhaji is a technology executive who has spent his career leading enterprise transformations and engineering organizations across highly regulated industries, including Fortune 100 financial services.
              </p>
              <p>
                He has modernized mission-critical platforms processing millions of transactions, led large-scale cloud transformation initiatives, and delivered AI, machine learning, and RPA-driven automation programs — improving operational efficiency and reducing costs by double digits.
              </p>
              <p>
                He founded SpaceTech Consulting to bring that same engineering discipline, platform ownership, and automation-first mindset to the property technology sector.
              </p>
              <p>
                Under his leadership, SpaceTech delivers Yardi managed services, platform optimization, integrations, reporting, and operational support for One of Australia's largest listed property groups, helping improve platform health, reduce support backlog, accelerate issue resolution, and drive continuous improvement across commercial and residential portfolios.
              </p>
              <p>
                His focus is helping property organizations maximize the value of their Yardi investment through platform ownership, continuous improvement, operational excellence, and technology-driven innovation.
              </p>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="px-6 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-stretch">
          <div className="rounded-3xl bg-white p-8 md:p-10 shadow-elegant border border-slate-100">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold tracking-widest uppercase">Our Mission</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#0F172A]">Bringing out the best in Yardi</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-900">
              We empower real estate organizations with technology solutions that drive operational excellence, unlock data insights, and accelerate business growth.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-900">
              We bridge the gap between property management needs and technology capabilities, delivering solutions that are practical, scalable, and aligned with strategic objectives.
            </p>
          </div>
          <div className="grid gap-5">
            {principles.map((item) => (
              <div key={item.title} className="rounded-3xl bg-white p-7 shadow-elegant border border-slate-100 card-lift">
                <div className="flex gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl gradient-primary text-white shadow-glow">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-[#0F172A]">{item.title}</h3>
                    <p className="mt-2 text-slate-900">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-slate-50 to-white dark:bg-[#020B1F] dark:from-[#0B1329] dark:to-[#020B1F]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold tracking-widest uppercase">Global Presence</span>
            <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-[#0F172A]">Three Regions, <span className="text-gradient">One Team</span></h2>
            <p className="mt-5 text-slate-900">Follow-the-sun delivery across Australia, India, and the USA.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {regions.map((r, i) => (
              <motion.div key={r.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative bg-white rounded-3xl p-8 shadow-elegant card-lift border border-slate-100 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 opacity-60 dark:from-blue-500/10 dark:to-cyan-500/10 dark:opacity-20" />
                <div className="relative">
                  <Globe className="w-10 h-10 text-[#2563EB] mb-4" />
                  <h3 className="text-2xl font-extrabold text-[#0F172A]">{r.name}</h3>
                  <p className="mt-3 text-slate-900">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-10 rounded-3xl border border-slate-100 bg-white p-8 shadow-elegant">
            <Award className="mx-auto h-10 w-10 text-[#2563EB]" />
            <h2 className="mt-5 text-4xl font-extrabold text-[#0F172A]">Yardi Specialization</h2>
            <p className="mt-4 text-lg text-slate-900">
              Our team brings deep expertise across Voyager, Elevate, RENTCafe, and Yardi Investment Management for commercial and residential.
            </p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl gradient-primary text-white font-bold shadow-glow hover:scale-105 transition-transform">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
