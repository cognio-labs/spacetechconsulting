import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import { ArrowRight, Eye, Award, Users, Lightbulb, Shield } from "lucide-react";

// Design read: B2B professional-services about-page for ANZ enterprise property
// decision-makers. Premium SaaS / trust-first language.
// Dials: DESIGN_VARIANCE: 8 | MOTION_INTENSITY: 6 | VISUAL_DENSITY: 4

export const Route = createFileRoute("/mission-vision-values")({
  head: () => ({
    meta: [
      { title: "Mission, Vision & Values - SpaceTech Consulting" },
      {
        name: "description",
        content:
          "SpaceTech Consulting delivers enterprise-grade Yardi operations for ANZ property firms. Predictable, proactive, and built to last.",
      },
      { property: "og:title", content: "Mission, Vision & Values - SpaceTech Consulting" },
      {
        property: "og:description",
        content: "Become ANZ's trusted Yardi platform partner. Bringing out the best in Yardi.",
      },
    ],
  }),
  component: MissionVisionValues,
});

const ease = [0.16, 1, 0.3, 1] as const;

function MissionVisionValues() {
  const reduce = useReducedMotion();

  const up = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.65, delay, ease },
        };

  return (
    <Layout>
      {/* ─────────────────────────────────────────────────────────────
          HERO  –  Asymmetric split (text left / quote right)
          Eyebrow count: 1 of 2 allowed across 5 sections
      ───────────────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center min-h-[100dvh] px-6 overflow-hidden"
        style={{ background: "#0F172A" }}
      >
        {/* Radial glows */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 8% 30%, rgba(37,99,235,0.24) 0%, transparent 68%), radial-gradient(ellipse 55% 50% at 92% 78%, rgba(6,182,212,0.14) 0%, transparent 65%)",
          }}
        />
        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            opacity: 0.22,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full pt-24 pb-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 xl:gap-20 items-center">
          {/* Left: headline block */}
          <div className="min-w-0">
            {/* Eyebrow 1/2 */}
            <motion.span
              {...(reduce
                ? {}
                : {
                    initial: { opacity: 0, y: -14 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, ease },
                  })}
              className="inline-block px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-[0.18em]"
              style={{
                background: "rgba(37,99,235,0.18)",
                border: "1px solid rgba(37,99,235,0.36)",
                color: "#93C5FD",
              }}
            >
              SpaceTech Consulting
            </motion.span>

            <motion.h1
              {...(reduce
                ? {}
                : {
                    initial: { opacity: 0, y: 28 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.7, delay: 0.1, ease },
                  })}
              className="mt-6 text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.0] text-white"
            >
              Mission,
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #60A5FA 0%, #06B6D4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Vision & Values.
              </span>
            </motion.h1>

            <motion.p
              {...(reduce
                ? {}
                : {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.7, delay: 0.2, ease },
                  })}
              className="mt-6 text-lg text-slate-400 leading-relaxed max-w-[44ch]"
            >
              The principles behind every engagement, every decision, and every outcome we deliver for ANZ property firms.
            </motion.p>

            <motion.div
              {...(reduce
                ? {}
                : {
                    initial: { opacity: 0, y: 16 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.6, delay: 0.3, ease },
                  })}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="https://cal.com/spacetech/30min"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white text-sm transition-all duration-200 hover:-translate-y-[2px] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #1D4ED8, #2563EB)",
                  boxShadow: "0 8px 28px rgba(37,99,235,0.4)",
                }}
              >
                Book a Call <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-slate-300 text-sm transition-all duration-200 hover:text-white hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.14)" }}
              >
                Our Services
              </Link>
            </motion.div>
          </div>

          {/* Right: quote card */}
          <motion.div
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, x: 40 },
                  animate: { opacity: 1, x: 0 },
                  transition: { duration: 0.75, delay: 0.18, ease },
                })}
            className="min-w-0"
          >
            <div
              className="rounded-3xl p-8 md:p-10 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(145deg, rgba(37,99,235,0.16) 0%, rgba(6,182,212,0.08) 100%)",
                border: "1px solid rgba(6,182,212,0.22)",
                boxShadow:
                  "0 0 80px rgba(6,182,212,0.06), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="pointer-events-none absolute top-0 right-0 w-52 h-52 rounded-full blur-[70px] opacity-28"
                style={{
                  background: "radial-gradient(circle, #06B6D4, transparent)",
                  transform: "translate(30%, -30%)",
                }}
              />

              <div className="relative">
                {/* Opening quote glyph */}
                <div
                  className="font-black leading-none mb-3"
                  style={{
                    fontSize: "96px",
                    lineHeight: "0.7",
                    background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    opacity: 0.5,
                  }}
                >
                  &ldquo;
                </div>

                <blockquote
                  className="text-xl md:text-2xl font-black text-white leading-[1.2] italic mt-4 pb-1"
                >
                  Bringing out the best in Yardi
                </blockquote>
                <p className="mt-3 max-w-[38rem] text-sm md:text-base font-medium leading-relaxed text-slate-400">
                  Through platform ownership, operational excellence, and continuous improvement.
                </p>

                <div className="mt-7 pt-6 border-t border-white/10 flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full grid place-items-center shrink-0 text-white font-black text-sm"
                    style={{
                      background: "linear-gradient(135deg, #2563EB, #06B6D4)",
                    }}
                  >
                    S
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Sambhaji</div>
                    <div className="text-slate-500 text-xs">
                      Founder & CEO
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          VISION  –  Centered manifesto (no eyebrow)
      ───────────────────────────────────────────────────────────── */}
      <section
        className="py-24 md:py-32 px-6 relative overflow-hidden"
        style={{ background: "#0F172A" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(6,182,212,0.08) 0%, transparent 68%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div {...up()}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight">
              Become ANZ&rsquo;s trusted{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #60A5FA, #06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Yardi platform partner
              </span>{" "}
              - where property firms go to keep Yardi performing.
            </h2>

            <div
              className="mt-10 mx-auto max-w-lg rounded-3xl p-8 relative overflow-hidden"
              style={{
                background: "rgba(6,182,212,0.08)",
                border: "1px solid rgba(6,182,212,0.2)",
              }}
            >
              <div
                className="font-black text-left mb-3"
                style={{
                  fontSize: "80px",
                  lineHeight: "0.72",
                  background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  opacity: 0.5,
                }}
              >
                &ldquo;
              </div>
              <p className="text-2xl md:text-3xl font-black italic text-white leading-[1.15] pb-1">
                Bringing out the best in Yardi
              </p>
              <p className="mt-4 text-slate-400 text-sm font-semibold tracking-wide uppercase">
                Our guiding promise
              </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["ANZ-Focused", "Platform-First", "Always Performing"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-sm font-semibold text-slate-400"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.09)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          VALUES  –  Bento grid  (5 cells, 2+3, no eyebrow)
          Backgrounds: dark navy / white / gradient blue / white / dark indigo
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F1F5F9] px-6 py-24 transition-colors duration-300 dark:bg-[#07111F] md:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,235,0.24),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(6,182,212,0.18),transparent_34%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_28%,rgba(0,0,0,0.2))]" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div {...up()} className="mb-14 max-w-3xl rounded-3xl border border-slate-200/70 bg-white/74 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/12 dark:bg-white/[0.07] dark:shadow-[0_24px_90px_rgba(0,0,0,0.38)] md:p-8">
            <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight dark:text-white">
              Five Core Values
            </h2>
            <p className="mt-3 text-lg text-slate-600 max-w-[44ch] leading-relaxed dark:text-slate-200">
              The principles that shape how we show up for every client, every day.
            </p>
          </motion.div>

          {/* Row 1: Ownership (col-span-2) + Transparency (col-span-1) */}
          <div className="grid lg:grid-cols-3 gap-5 mb-5">
            {/* Ownership - dark, wide */}
            <motion.div
              {...up(0.05)}
              className="lg:col-span-2 relative rounded-3xl p-8 md:p-10 overflow-hidden group"
              style={{
                background: "linear-gradient(145deg, #0F172A 0%, #16243A 100%)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
                minHeight: "300px",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                  opacity: 0.28,
                }}
              />
              <div
                className="pointer-events-none absolute top-1/2 -translate-y-1/2 -right-20 w-80 h-80 rounded-full blur-[100px] opacity-0 group-hover:opacity-18 transition-opacity duration-700"
                style={{ background: "radial-gradient(circle, #2563EB, transparent)" }}
              />

              <div className="relative flex flex-col md:flex-row gap-7 h-full">
                <div className="shrink-0">
                  <div
                    className="w-16 h-16 rounded-2xl grid place-items-center"
                    style={{
                      background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                      boxShadow: "0 8px 28px rgba(37,99,235,0.48)",
                    }}
                  >
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                    Ownership
                  </h3>
                  <p className="text-slate-400 leading-relaxed max-w-lg">
                    We treat every client's Yardi platform as our own. Not tickets to close but outcomes to own.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Transparency - white */}
            <motion.div
              {...up(0.1)}
              className="relative rounded-3xl p-8 overflow-hidden group bg-white"
              style={{
                boxShadow: "0 4px 24px rgba(0,0,0,0.05), 0 0 0 1px rgba(6,182,212,0.1)",
                minHeight: "300px",
              }}
            >
              <div
                className="pointer-events-none absolute bottom-0 right-0 w-44 h-44 rounded-full blur-[55px] opacity-10"
                style={{
                  background: "#06B6D4",
                  transform: "translate(30%, 30%)",
                }}
              />
              <div className="relative flex flex-col h-full">
                <div
                  className="w-14 h-14 rounded-2xl grid place-items-center mb-6"
                  style={{
                    background: "linear-gradient(135deg, #06B6D4, #0891B2)",
                    boxShadow: "0 8px 24px rgba(6,182,212,0.36)",
                  }}
                >
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-black text-[#0F172A] mb-3">Transparency</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We say what the data shows, even when it's uncomfortable. Monthly engagement summary, honest SLA tracking.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Row 2: Excellence (gradient) + Partnership (white) + Innovation (dark indigo) */}
          <div className="grid lg:grid-cols-3 gap-5">
            {/* Excellence - full gradient */}
            <motion.div
              {...up(0.13)}
              className="relative rounded-3xl p-8 overflow-hidden group"
              style={{
                background:
                  "linear-gradient(145deg, #1D4ED8 0%, #0284C7 60%, #0891B2 100%)",
                boxShadow: "0 20px 56px rgba(37,99,235,0.28)",
                minHeight: "280px",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                  opacity: 0.4,
                }}
              />
              <div className="relative flex flex-col h-full">
                <div
                  className="w-14 h-14 rounded-2xl grid place-items-center mb-6"
                  style={{
                    background: "rgba(255,255,255,0.2)",
                    border: "1px solid rgba(255,255,255,0.22)",
                  }}
                >
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-black text-white mb-3">Excellence</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  50+ total Yardi experience. Named SMEs per module, and a continuous improvement loop that makes the platform measurably better every month.
                </p>
              </div>
            </motion.div>

            {/* Partnership - white */}
            <motion.div
              {...up(0.16)}
              className="relative rounded-3xl p-8 overflow-hidden group bg-white"
              style={{
                boxShadow: "0 4px 24px rgba(0,0,0,0.05), 0 0 0 1px rgba(37,99,235,0.1)",
                minHeight: "280px",
              }}
            >
              <div
                className="pointer-events-none absolute top-0 right-0 w-44 h-44 rounded-full blur-[55px] opacity-[0.07]"
                style={{
                  background: "#2563EB",
                  transform: "translate(30%, -30%)",
                }}
              />
              <div className="relative flex flex-col h-full">
                <div
                  className="w-14 h-14 rounded-2xl grid place-items-center mb-6"
                  style={{
                    background: "linear-gradient(135deg, #3B82F6, #2563EB)",
                    boxShadow: "0 8px 24px rgba(37,99,235,0.36)",
                  }}
                >
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-black text-[#0F172A] mb-3">Partnership</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We invest in client's platform, not just the contract. Sharing insights proactively and thinking 12 months ahead.
                </p>
              </div>
            </motion.div>

            {/* Innovation - dark indigo */}
            <motion.div
              {...up(0.19)}
              className="relative rounded-3xl p-8 overflow-hidden group"
              style={{
                background: "linear-gradient(145deg, #1E1B4B 0%, #312E81 100%)",
                boxShadow: "0 20px 56px rgba(79,70,229,0.2)",
                minHeight: "280px",
              }}
            >
              <div
                className="pointer-events-none absolute -top-12 -right-12 w-44 h-44 rounded-full blur-[60px] opacity-0 group-hover:opacity-22 transition-opacity duration-700"
                style={{ background: "radial-gradient(circle, #818CF8, transparent)" }}
              />
              <div className="relative flex flex-col h-full">
                <div
                  className="w-14 h-14 rounded-2xl grid place-items-center mb-6"
                  style={{
                    background: "linear-gradient(135deg, #6366F1, #4F46E5)",
                    boxShadow: "0 8px 24px rgba(99,102,241,0.42)",
                  }}
                >
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-black text-white mb-3">Innovation</h3>
                <p className="text-indigo-200 text-sm leading-relaxed">
                  V8 readiness, Yardi AI toolkit tracking, SpaceTech agentic AI. We bring new capability.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CTA BANNER  –  Centered, one intent (no eyebrow)
      ───────────────────────────────────────────────────────────── */}
      <section
        className="py-24 md:py-28 px-6 relative overflow-hidden"
        style={{ background: "#0F172A" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 55% at 28% 50%, rgba(37,99,235,0.19) 0%, transparent 62%), radial-gradient(ellipse 55% 50% at 72% 50%, rgba(6,182,212,0.12) 0%, transparent 60%), repeating-linear-gradient(45deg, rgba(255,255,255,0.011) 0px, rgba(255,255,255,0.011) 1px, transparent 1px, transparent 72px)",
          }}
        />
        <div
          className="pointer-events-none absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(37,99,235,0.5), rgba(6,182,212,0.5), transparent)",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <motion.div {...up()}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
              Experience Yardi at its{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #60A5FA, #06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                very best.
              </span>
            </h2>
            <p className="mt-5 text-lg text-slate-400 leading-relaxed max-w-[40ch] mx-auto">
              Let's talk about how SpaceTech's mission-driven approach can transform your platform performance.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <a
                href="https://cal.com/spacetech/30min"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-base transition-all duration-200 hover:-translate-y-[2px] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #1D4ED8, #2563EB)",
                  boxShadow: "0 8px 28px rgba(37,99,235,0.4)",
                }}
              >
                Book a Call <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-slate-300 text-base transition-all duration-200 hover:text-white hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.14)" }}
              >
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
