import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import { ArrowRight, Globe, Users, Clock, Award, ShieldCheck, BarChart3, Layers3 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
  { value: "10+", target: 10, suffix: "+", label: "Years of Yardi Experience", icon: Award },
  { value: "50+", target: 50, suffix: "+", label: "Enterprise Clients Served", icon: Users },
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

  return <>{value}{suffix}</>;
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
              <div className="mt-2 text-sm text-slate-600 font-medium">{c.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-stretch">
          <div className="rounded-3xl bg-white p-8 md:p-10 shadow-elegant border border-slate-100">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold tracking-widest uppercase">Our Mission</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#0F172A]">Bringing out the best in Yardi</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              We empower real estate organizations with technology solutions that drive operational excellence, unlock data insights, and accelerate business growth.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
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
                    <p className="mt-2 text-slate-600">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold tracking-widest uppercase">Global Presence</span>
            <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-[#0F172A]">Three Regions, <span className="text-gradient">One Team</span></h2>
            <p className="mt-5 text-slate-600">Follow-the-sun delivery across Australia, India, and the USA.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
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

      <section className="py-14 md:py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-10 rounded-3xl border border-slate-100 bg-white p-8 shadow-elegant">
            <Award className="mx-auto h-10 w-10 text-[#2563EB]" />
            <h2 className="mt-5 text-4xl font-extrabold text-[#0F172A]">Yardi Specialization</h2>
            <p className="mt-4 text-lg text-slate-600">
              Our team brings deep expertise across Voyager, RENTCafe, Yardi Investment Management, and specialized modules for commercial, residential, and affordable housing.
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
