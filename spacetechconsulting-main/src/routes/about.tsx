import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock,
  Cloud,
  Code2,
  DatabaseZap,
  FileBarChart2,
  Globe2,
  Handshake,
  Layers3,
  Network,
  Quote,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import { createElement as h, useEffect, useState } from "react";
import { Layout } from "@/components/site/Layout";
import aboutTeam from "@/assets/about-section.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Yardi Platform Ownership & Governance | SpaceTech Consulting" },
      {
        name: "description",
        content:
          "SpaceTech Consulting combines deep Yardi expertise with enterprise engineering leadership to deliver operational excellence, platform reliability, and measurable outcomes.",
      },
      { name: "author", content: "SpaceTech Consulting" },
      {
        property: "og:title",
        content: "About Us — Yardi Platform Ownership & Governance | SpaceTech Consulting",
      },
      {
        property: "og:description",
        content:
          "SpaceTech Consulting combines deep Yardi expertise with enterprise engineering leadership.",
      },
      { property: "og:image", content: "https://www.spacetechconsulting.com/social-preview.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "SpaceTech Consulting enterprise Yardi platform partner social preview",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.spacetechconsulting.com/about" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "About Us — Yardi Platform Ownership & Governance | SpaceTech Consulting",
      },
      {
        name: "twitter:description",
        content:
          "SpaceTech Consulting combines deep Yardi expertise with enterprise engineering leadership.",
      },
      { name: "twitter:image", content: "https://www.spacetechconsulting.com/social-preview.jpg" },
      {
        name: "twitter:image:alt",
        content: "SpaceTech Consulting enterprise Yardi platform partner social preview",
      },
    ],
  }),
  component: About,
});

const stats = [
  { value: "50+", target: 50, suffix: "+", label: "Years Combined Experience", icon: Award },
  {
    value: "3,000+",
    target: 3000,
    suffix: "+",
    label: "Platform Issues Managed",
    icon: CheckCircle2,
  },
  { value: "24/7", target: 24, suffix: "/7", label: "Global Coverage", icon: Clock },
  { value: "3", target: 3, suffix: "", label: "Australia, India, USA", icon: Globe2 },
];
const founderBadges = [
  { icon: Award, text: "25+ Years Experience" },
  { icon: BrainCircuit, text: "Enterprise Technology Leadership" },
  { icon: Cloud, text: "Cloud Data and AI" },
  { icon: Bot, text: "Automation and RPA" },
  { icon: Building2, text: "Yardi Property Technology" },
];
const timeline = [
  "Led enterprise transformations across regulated industries",
  "Modernized mission-critical cloud and data platforms",
  "Built automation programs using AI ML and RPA",
  "Founded SpaceTech to bring engineering discipline to property technology",
];
const yteam = [
  {
    icon: BriefcaseBusiness,
    title: "Functional Expertise",
    text: "Configuration, process alignment, testing, and workflow support.",
  },
  {
    icon: Code2,
    title: "Technical Delivery",
    text: "Integrations, automation, enhancements, and engineering execution.",
  },
  {
    icon: FileBarChart2,
    title: "Reporting Analytics",
    text: "Dashboards, data quality insight, executive reporting, and KPI visibility.",
  },
  {
    icon: ShieldCheck,
    title: "Platform Ownership",
    text: "Administration, governance, release discipline, and improvement.",
  },
];
const why = [
  {
    icon: Building2,
    title: "Yardi Expertise",
    text: "Deep platform experience across modules, reporting, operations, and managed support.",
  },
  {
    icon: Globe2,
    title: "Global Support",
    text: "Australia, India, and USA coverage designed for responsiveness.",
  },
  {
    icon: Workflow,
    title: "Process Excellence",
    text: "Structured intake, triage, QA, release notes, and measurable improvement.",
  },
  {
    icon: Clock,
    title: "Fast Response Times",
    text: "24/7 coverage helps reduce wait time and unblock teams.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    text: "We work as an extension of business and technology teams.",
  },
  {
    icon: ShieldCheck,
    title: "Governance and Ownership",
    text: "Accountability across platform health, change control, data quality, and reporting.",
  },
];
const products = [
  {
    icon: Layers3,
    title: "Voyager",
    text: "Core workflows, configuration support, optimization, and issue resolution.",
  },
  {
    icon: BarChart3,
    title: "Elevate",
    text: "Commercial operations enablement, data alignment, adoption, and visibility.",
  },
  {
    icon: Users,
    title: "RENTCafe",
    text: "Resident and tenant-facing workflows, support, reporting, and experience improvement.",
  },
  {
    icon: DatabaseZap,
    title: "Investment Management",
    text: "Investor, portfolio, and performance workflows supported by disciplined data practices.",
  },
];
const regions = [
  {
    name: "Australia",
    badge: "CLIENT DELIVERY REGION",
    visual: "Sydney skyline",
    x: "82%",
    y: "80%",
    text: "Client delivery, regional operations, and local continuity.",
    features: ["Client Delivery", "Regional Operations", "Business Continuity"],
    iconTone: "from-[#0F172A] to-[#1D4ED8]",
  },
  {
    name: "India",
    badge: "ENGINEERING HUB",
    visual: "Monochrome city",
    x: "64%",
    y: "68%",
    text: "Engineering, reporting, automation, managed support, and extended coverage.",
    features: ["Engineering", "Automation", "Managed Support"],
    iconTone: "from-[#0F172A] to-[#0EA5E9]",
  },
  {
    name: "USA",
    badge: "STRATEGIC LEADERSHIP REGION",
    x: "24%",
    y: "72%",
    text: "Advisory, program coordination, partnership coverage, and client success.",
    features: ["Strategic Alignment", "Governance", "Platform Leadership"],
    iconTone: "from-[#1D4ED8] to-[#06B6D4]",
  },
];
const dashboardMetrics = [
  { title: "3 Regions", subtitle: "", icon: Globe2 },
  { title: "Follow-the-Sun Support", subtitle: "", icon: Clock },
  { title: "Continuous Coverage", subtitle: "", icon: ShieldCheck },
];
const dashboardNodes = [
  {
    key: "USA",
    label: "USA",
    title: "United States",
    subtitle: "Strategic Leadership & Platform Governance",
    cx: 175,
    cy: 285,
    glow: "#2563EB",
    core: "#1D4ED8",
    active: true,
  },
  {
    key: "India",
    label: "IND",
    title: "India",
    subtitle: "Engineering Excellence & Managed Support",
    cx: 510,
    cy: 285,
    glow: "#2563EB",
    core: "#1D4ED8",
    active: true,
  },
  {
    key: "Australia",
    label: "AUS",
    title: "Australia",
    subtitle: "Client Delivery & Regional Operations",
    cx: 655,
    cy: 375,
    glow: "#1D4ED8",
    core: "#1E40AF",
    active: true,
  },
];
const miniCityBars = [22, 34, 18, 46, 28, 40, 26, 30, 14, 36, 24, 20, 42, 28];
const dashboardRoute = [
  { d: "M175 285 C290 215 420 220 510 285", delay: 0 },
  { d: "M510 285 C565 315 615 348 655 375", delay: 1.2 },
];
const fade = { hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0 } };
const group = { visible: { transition: { staggerChildren: 0.08 } } };

function Counter(props: any) {
  const stat = props.stat;
  const [value, setValue] = useState(0);
  const Icon = stat.icon;
  useEffect(
    function () {
      const start = performance.now();
      let frame = 0;
      function tick(now: number) {
        const p = Math.min((now - start) / 1500, 1);
        setValue(Math.round(stat.target * (1 - Math.pow(1 - p, 3))));
        if (p !== 1) frame = requestAnimationFrame(tick);
      }
      frame = requestAnimationFrame(tick);
      return function () {
        cancelAnimationFrame(frame);
      };
    },
    [stat.target],
  );
  return h(
    motion.div,
    {
      variants: fade,
      whileHover: { y: -6 },
      className:
        "rounded-[22px] border border-slate-100 bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_18px_55px_rgba(0,0,0,0.35)] backdrop-blur-sm",
    },
    h(
      "div",
      {
        className:
          "mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1D4ED8] to-[#06B6D4] text-white shadow-[0_0_20px_rgba(37,99,235,0.2)] dark:from-blue-500 dark:via-blue-600 dark:to-cyan-500 dark:shadow-[0_0_20px_rgba(37,99,235,0.5)]",
      },
      h(Icon, { className: "h-5 w-5" }),
    ),
    h(
      "div",
      { className: "text-3xl font-extrabold text-[#0F172A] dark:text-white" },
      value.toLocaleString(),
      stat.suffix,
    ),
    h(
      "p",
      { className: "mt-2 text-sm font-semibold text-slate-600 dark:text-blue-200" },
      stat.label,
    ),
  );
}

function Card(props: any) {
  const Icon = props.item.icon;
  return h(
    motion.article,
    {
      variants: fade,
      whileHover: { y: -7 },
      className:
        "rounded-[24px] border border-slate-100 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.07)] backdrop-blur-sm transition-all hover:border-blue-500/40 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:shadow-[0_18px_55px_rgba(0,0,0,0.3)] dark:hover:bg-white/10",
    },
    h(
      "span",
      {
        className:
          "flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#1D4ED8] dark:bg-blue-500/20 dark:text-blue-300 shadow-sm dark:shadow-[0_0_20px_rgba(37,99,235,0.3)]",
      },
      h(Icon, { className: "h-6 w-6" }),
    ),
    h(
      "h3",
      { className: "mt-5 text-xl font-extrabold text-[#0F172A] dark:text-white" },
      props.item.title,
    ),
    h("p", { className: "mt-3 leading-7 text-slate-600 dark:text-slate-300" }, props.item.text),
  );
}

function Intro(props: any) {
  return h(
    motion.div,
    {
      variants: fade,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true },
      className: "mx-auto max-w-3xl text-center",
    },
    h(
      "span",
      {
        className:
          "inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.22em] text-[#1D4ED8] dark:border-blue-500/40 dark:bg-blue-500/15 dark:text-blue-300",
      },
      props.eyebrow,
    ),
    h(
      "h2",
      {
        className:
          "mt-5 text-3xl font-extrabold tracking-tight text-[#0F172A] dark:text-white md:text-5xl",
      },
      props.title,
    ),
    props.text
      ? h(
          "p",
          { className: "mt-5 text-lg leading-8 text-slate-700 dark:text-slate-350" },
          props.text,
        )
      : null,
  );
}

function Stats() {
  return h(
    motion.div,
    {
      variants: group,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true },
      className: "grid grid-cols-2 gap-4 lg:grid-cols-4",
    },
    stats.map(function (stat) {
      return h(Counter, { key: stat.label, stat: stat });
    }),
  );
}

function About() {
  return h(
    Layout,
    null,
    h(
      "main",
      {
        className:
          "bg-white text-[#0F172A] dark:bg-[#060D1F] dark:text-white transition-colors duration-300",
      },

      /* ── HERO SECTION ── */
      h(
        "section",
        { className: "relative overflow-hidden px-6 pb-12 pt-16" },
        /* Light mode background */
        h("div", {
          className:
            "absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(37,99,235,0.15),transparent_34%),linear-gradient(180deg,#F8FBFF_0%,#FFFFFF_76%)] dark:opacity-0 transition-opacity duration-300",
        }),
        /* Dark mode background */
        h("div", {
          className: "absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-300",
          style: {
            background:
              "radial-gradient(ellipse 80% 60% at 10% 10%, rgba(37,99,235,0.25) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(8,145,178,0.15) 0%, transparent 50%), linear-gradient(180deg, #060D1F 0%, #0A1628 60%, #060D1F 100%)",
          },
        }),
        /* subtle grid pattern overlay */
        h("div", {
          className: "absolute inset-0 opacity-[0.04]",
          style: {
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.8) 60px, rgba(255,255,255,0.8) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.8) 60px, rgba(255,255,255,0.8) 61px)",
          },
        }),
        h(
          "div",
          {
            className:
              "relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center",
          },
          h(
            motion.div,
            { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } },
            h(
              "span",
              {
                className:
                  "rounded-full border border-blue-100 bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.24em] text-[#1D4ED8] dark:border-blue-500/40 dark:bg-blue-500/15 dark:text-blue-300",
              },
              "About SpaceTech",
            ),
            h(
              "h1",
              {
                className:
                  "mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#0F172A] dark:text-white md:text-6xl",
              },
              "Your Strategic ",
              h(
                "span",
                {
                  className:
                    "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400",
                },
                "Yardi Partner",
              ),
            ),
            h(
              "p",
              {
                className:
                  "mt-6 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300 md:text-xl",
              },
              "SpaceTech Consulting combines deep Yardi expertise with enterprise engineering leadership to deliver operational excellence, platform reliability, and measurable business outcomes across complex property technology environments.",
            ),
            h(
              "p",
              {
                className:
                  "mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg",
              },
              "Built on real enterprise operating principles, SpaceTech brings continuous improvement and disciplined execution\u2014helping property organizations maximize the value of their Yardi investment through stronger governance, operational visibility, and accountability.",
            ),
            h(
              "div",
              { className: "mt-8 flex flex-col gap-3 sm:flex-row" },
              h(
                Link,
                {
                  to: "/contact",
                  className:
                    "inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0F172A] via-[#1D4ED8] to-[#0891B2] px-6 py-4 text-sm font-extrabold text-white shadow-lg dark:from-blue-600 dark:via-blue-500 dark:to-cyan-500 dark:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all hover:scale-[1.02]",
                },
                "Book a Strategy Call",
                h(ArrowRight, { className: "h-4 w-4" }),
              ),
              h(
                Link,
                {
                  to: "/contact",
                  className:
                    "inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-extrabold text-slate-900 hover:bg-slate-50 dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/15 backdrop-blur transition-all",
                },
                "Contact Our Team",
              ),
            ),
          ),
          h(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.96 },
              animate: { opacity: 1, scale: 1 },
              className: "relative",
            },
            h("div", {
              className:
                "absolute -inset-5 rounded-[32px] bg-gradient-to-br from-blue-200 via-cyan-100 to-white dark:from-blue-600/30 dark:via-cyan-500/20 dark:to-transparent blur-2xl",
            }),
            h(
              "div",
              {
                className:
                  "relative overflow-hidden rounded-[28px] border border-white bg-white shadow-[0_30px_90px_rgba(15,23,42,0.18)] dark:border-white/15 dark:bg-white/5 dark:shadow-[0_30px_90px_rgba(0,0,0,0.5)] backdrop-blur-sm",
              },
              h("img", {
                src: aboutTeam,
                alt: "Enterprise consulting team",
                className: "h-[420px] w-full object-cover",
              }),
              h(
                "div",
                {
                  className:
                    "absolute inset-x-0 bottom-0 grid gap-3 bg-gradient-to-t from-[#0F172A]/90 to-transparent p-6 text-white sm:grid-cols-2 dark:from-[#060D1F]/95",
                },
                [
                  "Yardi Advisory",
                  "Global Managed Support",
                  "Governed Delivery",
                  "Executive Visibility",
                ].map(function (b) {
                  return h(
                    "div",
                    {
                      key: b,
                      className:
                        "rounded-2xl border border-white/20 bg-white/15 px-4 py-3 text-sm font-bold backdrop-blur dark:bg-white/10",
                    },
                    b,
                  );
                }),
              ),
            ),
          ),
        ),
        h("div", { className: "relative mx-auto mt-10 max-w-7xl" }, h(Stats)),
      ),

      /* ── FOUNDER SECTION ── */
      h(
        "section",
        { className: "relative px-6 py-16 md:py-20" },
        h("div", {
          className: "absolute inset-0 bg-transparent dark:opacity-100",
          style: {
            background:
              "radial-gradient(ellipse 50% 60% at 90% 50%, rgba(37,99,235,0.10) 0%, transparent 60%)",
          },
        }),
        h(
          "div",
          { className: "relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr]" },
          h(
            motion.div,
            {
              variants: fade,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              className:
                "rounded-[28px] border border-blue-100 bg-gradient-to-b from-white to-blue-50 p-8 shadow-xl dark:border-blue-500/25 dark:from-blue-950/60 dark:to-slate-900/60 dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-sm",
            },
            h(
              "span",
              {
                className:
                  "rounded-full bg-blue-100 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.22em] text-[#1D4ED8] dark:bg-blue-500/20 dark:text-blue-300",
              },
              "Meet Our Founder",
            ),
            h(
              "h2",
              { className: "mt-8 text-4xl font-extrabold text-[#0F172A] dark:text-white" },
              "Sambhaji",
            ),
            h(
              "p",
              { className: "mt-1 text-lg font-bold text-[#1D4ED8] dark:text-blue-400" },
              "Founder and CEO",
            ),
            h(
              "div",
              { className: "mt-8 grid gap-3" },
              founderBadges.map(function (b) {
                const Icon = b.icon;
                return h(
                  "div",
                  {
                    key: b.text,
                    className:
                      "flex items-center gap-3 rounded-2xl border border-blue-100 bg-white px-4 py-3 dark:border-white/10 dark:bg-white/5 transition-all dark:hover:border-blue-500/30 dark:hover:bg-white/10",
                  },
                  h(Icon, { className: "h-5 w-5 text-[#1D4ED8] dark:text-blue-400" }),
                  h("span", { className: "font-bold text-slate-800 dark:text-white" }, b.text),
                );
              }),
            ),
          ),
          h(
            motion.article,
            {
              variants: fade,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              className:
                "rounded-[28px] border border-slate-100 bg-white p-8 shadow-xl md:p-10 dark:border-white/10 dark:bg-white/5 dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm",
            },
            h(
              "h2",
              {
                className:
                  "text-3xl font-extrabold tracking-tight text-[#0F172A] dark:text-white md:text-5xl",
              },
              "Enterprise Engineering Leadership for Property Technology",
            ),
            h(
              "div",
              { className: "mt-6 grid gap-5 leading-8 text-slate-700 dark:text-slate-350" },
              h(
                "p",
                null,
                "Sambhaji has spent his career leading enterprise transformations and engineering organizations across highly regulated industries, including Fortune 100 financial services.",
              ),
              h(
                "p",
                null,
                "He has modernized mission-critical platforms, led cloud transformation initiatives, and delivered AI, machine learning, and RPA programs that improved efficiency and reduced cost.",
              ),
              h(
                "p",
                null,
                "He founded SpaceTech Consulting to bring engineering discipline, platform ownership, and an automation-first mindset to property technology.",
              ),
            ),
            h(
              "div",
              {
                className:
                  "mt-8 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2 dark:border-white/10",
              },
              timeline.map(function (t) {
                return h(
                  "div",
                  {
                    key: t,
                    className:
                      "flex gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-800 dark:bg-white/5 dark:text-slate-200 border border-transparent dark:border-white/5",
                  },
                  h(CheckCircle2, {
                    className: "h-5 w-5 shrink-0 text-[#1D4ED8] dark:text-blue-400",
                  }),
                  t,
                );
              }),
            ),
          ),
        ),
      ),

      /* ── YTEAM SECTION ── */
      h(
        "section",
        { className: "relative px-6 py-16 md:py-20" },
        h("div", {
          className: "absolute inset-0 bg-transparent dark:opacity-100",
          style: {
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(37,99,235,0.12) 0%, transparent 60%)",
          },
        }),
        h(
          "div",
          { className: "relative mx-auto max-w-7xl" },
          h(Intro, {
            eyebrow: "Meet the YTeam",
            title: "Specialists Working as One Team",
            text: "SpaceTech brings together functional consultants, technical specialists, reporting experts, and platform administrators who work collaboratively as an extension of client business and technology teams.",
          }),
          h(
            "p",
            {
              className:
                "mx-auto mt-5 max-w-4xl text-center text-lg leading-8 text-slate-700 dark:text-slate-400",
            },
            "Rather than operating through isolated support queues, the YTeam combines platform knowledge, operational visibility, governance, and continuous improvement practices to help clients achieve better business outcomes from their Yardi investment.",
          ),
          h(
            motion.div,
            {
              variants: group,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              className:
                "mx-auto mt-12 max-w-6xl rounded-[30px] border border-blue-100 bg-white p-6 shadow-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-sm",
            },
            h(
              "div",
              {
                className:
                  "mx-auto flex w-48 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#0F172A] to-[#1D4ED8] px-6 py-4 text-lg font-extrabold text-white dark:from-blue-700 dark:to-blue-500 shadow-lg dark:shadow-[0_0_30px_rgba(37,99,235,0.5)]",
              },
              h(Network, { className: "h-5 w-5" }),
              "YTEAM",
            ),
            h("div", { className: "mx-auto h-10 w-px bg-blue-200 dark:bg-blue-500/40" }),
            h(
              "div",
              { className: "grid gap-4 md:grid-cols-4" },
              yteam.map(function (item) {
                const Icon = item.icon;
                return h(
                  motion.div,
                  {
                    key: item.title,
                    variants: fade,
                    whileHover: { y: -8 },
                    className:
                      "rounded-[22px] border border-slate-100 bg-gradient-to-b from-white to-slate-50 p-5 text-center shadow-lg dark:border-white/10 dark:bg-white/5 backdrop-blur-sm transition-all dark:hover:border-blue-500/30 dark:hover:bg-white/10",
                  },
                  h(Icon, { className: "mx-auto h-8 w-8 text-[#1D4ED8] dark:text-blue-400" }),
                  h(
                    "h3",
                    { className: "mt-4 text-lg font-extrabold text-[#0F172A] dark:text-white" },
                    item.title,
                  ),
                  h(
                    "p",
                    { className: "mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400" },
                    item.text,
                  ),
                );
              }),
            ),
            h("div", { className: "mx-auto h-10 w-px bg-blue-200 dark:bg-blue-500/40" }),
            h(
              "div",
              {
                className:
                  "mx-auto flex w-64 items-center justify-center gap-3 rounded-2xl border border-cyan-100 bg-cyan-50 px-6 py-4 text-lg font-extrabold text-[#0891B2] dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-300",
              },
              h(Handshake, { className: "h-5 w-5 text-[#0891B2] dark:text-cyan-400" }),
              "Client Success",
            ),
          ),
          h(
            "div",
            { className: "mt-10 grid gap-6 lg:grid-cols-2" },
            h(
              "div",
              {
                className:
                  "rounded-[28px] bg-gradient-to-br from-[#0F172A] via-[#1D4ED8] to-[#0891B2] p-8 text-white shadow-xl dark:from-blue-700 dark:via-blue-600 dark:to-cyan-600 dark:shadow-[0_0_40px_rgba(37,99,235,0.4)]",
              },
              h(
                "h3",
                { className: "text-3xl font-extrabold text-white" },
                "One Team. Shared Ownership.",
              ),
              h(
                "p",
                { className: "mt-5 leading-8 text-blue-50 dark:text-blue-100" },
                "Functional, technical, reporting, and platform specialists work together to provide continuity, accountability, and long-term platform success.",
              ),
            ),
            h(
              "div",
              {
                className:
                  "rounded-[28px] border border-slate-100 bg-white p-8 shadow-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_20px_55px_rgba(0,0,0,0.35)] backdrop-blur-sm",
              },
              h(
                "p",
                { className: "leading-8 text-slate-700 dark:text-slate-300" },
                "This approach helps clients move beyond reactive support toward a proactive operating model focused on governance, visibility, reliability, and continuous improvement.",
              ),
            ),
          ),
          h(
            "div",
            {
              className:
                "mt-10 rounded-[28px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 p-px shadow-xl dark:from-blue-600 dark:via-cyan-500 dark:to-blue-600 dark:shadow-[0_0_40px_rgba(37,99,235,0.35)]",
            },
            h(
              "div",
              {
                className:
                  "rounded-[27px] bg-white p-8 md:p-10 dark:bg-[#080F20] dark:border-white/10",
              },
              h(Quote, { className: "h-12 w-12 text-[#1D4ED8] dark:text-blue-400" }),
              h(
                "blockquote",
                {
                  className:
                    "mt-5 text-2xl font-extrabold text-[#0F172A] dark:text-white md:text-4xl",
                },
                "Great platform outcomes come from combining deep product expertise with disciplined operational execution.",
              ),
              h(
                "p",
                { className: "mt-5 text-lg font-semibold text-slate-600 dark:text-blue-300" },
                "The YTeam is designed to bring both together.",
              ),
            ),
          ),
        ),
      ),

      /* ── MISSION & VISION ── */
      h(
        "section",
        { className: "relative px-6 py-16 md:py-20" },
        h("div", {
          className: "absolute inset-0 bg-transparent dark:opacity-100",
          style: {
            background:
              "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(8,145,178,0.10) 0%, transparent 60%)",
          },
        }),
        h(
          "div",
          { className: "relative mx-auto max-w-7xl" },
          h(Intro, {
            eyebrow: "Mission and Vision",
            title: "Built for Long-Term Platform Outcomes",
            text: "SpaceTech brings advisory, engineering, reporting, support, and governance into one delivery model.",
          }),
          h(
            "div",
            { className: "mt-10 grid gap-6 lg:grid-cols-2" },
            h(Card, {
              item: {
                icon: Sparkles,
                title: "Mission",
                text: "We empower real estate organizations with technology solutions that drive operational excellence, unlock data insights, and accelerate business growth.",
              },
            }),
            h(Card, {
              item: {
                icon: Network,
                title: "Vision",
                text: "To become the trusted global Yardi partner for organizations that want stronger governance, better visibility, and reliable platform performance.",
              },
            }),
          ),
        ),
      ),

      /* ── WHY CLIENTS CHOOSE SPACETECH ── */
      h(
        "section",
        { className: "relative px-6 py-16 md:py-20" },
        /* Light background gradient */
        h("div", {
          className:
            "absolute inset-0 bg-gradient-to-b from-[#F8FBFF] to-white dark:opacity-0 transition-opacity duration-300",
        }),
        /* Dark background gradient */
        h("div", {
          className: "absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-300",
          style: {
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(37,99,235,0.12) 0%, transparent 60%), linear-gradient(180deg, #060D1F 0%, #0A1830 50%, #060D1F 100%)",
          },
        }),
        h(
          "div",
          { className: "relative mx-auto max-w-7xl" },
          h(Intro, {
            eyebrow: "Why Clients Choose SpaceTech",
            title: "Enterprise Delivery Without Enterprise Drag",
            text: "Focused Yardi capability, disciplined execution, and a partnership model designed for operational continuity.",
          }),
          h(
            motion.div,
            {
              variants: group,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              className: "mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
            },
            why.map(function (item) {
              return h(Card, { key: item.title, item: item });
            }),
          ),
        ),
      ),

      /* ── EXPERIENCE & EXPERTISE ── */
      h(
        "section",
        { className: "relative px-6 py-16 md:py-20" },
        h("div", {
          className: "absolute inset-0 bg-transparent dark:opacity-100",
          style: {
            background:
              "radial-gradient(ellipse 60% 50% at 80% 30%, rgba(37,99,235,0.10) 0%, transparent 50%)",
          },
        }),
        h(
          "div",
          { className: "relative mx-auto max-w-7xl" },
          h(Intro, {
            eyebrow: "Experience and Expertise",
            title: "Execution Strength Across the Yardi Operating Model",
            text: "Experience, support volume, global coverage, and platform ownership combine into a delivery model built for scale.",
          }),
          h("div", { className: "mt-10" }, h(Stats)),
          h(
            "div",
            { className: "mt-8 grid gap-3 md:grid-cols-3" },
            [
              "Managed services and support",
              "Backlog reduction and governance",
              "Reporting and executive visibility",
              "Integrations and automation",
              "Platform administration",
              "Continuous improvement",
            ].map(function (c) {
              return h(
                "div",
                {
                  key: c,
                  className:
                    "rounded-2xl border border-slate-100 bg-white p-4 font-bold text-slate-800 shadow-sm backdrop-blur-sm transition-all dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-blue-500/30 dark:hover:bg-white/10",
                },
                c,
              );
            }),
          ),
        ),
      ),

      /* ── GLOBAL PRESENCE ── */
      h(
        "section",
        {
          className: "relative overflow-hidden px-6 py-16 md:py-24",
        },
        h("div", {
          className:
            "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(37,99,235,0.14),transparent_38%),linear-gradient(180deg,#FFFFFF_0%,#F8FAFF_54%,#FFFFFF_100%)] dark:opacity-0",
        }),
        h("div", {
          className:
            "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_50%_at_80%_85%,rgba(14,165,233,0.1),transparent_52%)] dark:opacity-0",
        }),
        h(
          "div",
          { className: "relative mx-auto max-w-7xl" },
          h(Intro, {
            eyebrow: "Global Presence",
            title: "Three Regions. One Team.",
            text:
              "Our follow-the-sun model connects regional leadership, " +
              "offshore delivery strength, and continuous platform coverage.",
          }),
          h(
            motion.div,
            {
              variants: group,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              className:
                "mt-12 grid min-w-0 gap-6 lg:grid-cols-[1.2fr_0.78fr] lg:items-stretch",
            },
            h(
              motion.article,
              {
                variants: fade,
                className:
                  "relative overflow-hidden rounded-[30px] border border-slate-200 bg-white/85 p-6 shadow-[0_28px_80px_rgba(15,23,42,0.12)] backdrop-blur-3xl transition-all hover:translate-y-[-2px] sm:p-8",
                whileHover: { y: -3 },
              },
              h(
                "div",
                {
                  className:
                    "absolute -right-24 -top-24 h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,_rgba(37,99,235,0.26),_transparent_70%)] blur-sm",
                },
              ),
              h(
                "div",
                {
                  className:
                    "absolute -left-20 -bottom-20 h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.2),_transparent_72%)] blur-sm",
                },
              ),
              h(
                "div",
                {
                  className:
                    "absolute right-6 top-6 z-10 flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/95 px-4 py-2 text-[11px] font-extrabold tracking-wide text-[#0F172A] shadow-[0_12px_30px_rgba(15,23,42,0.14)]",
                },
                h(
                  "span",
                  {
                    className:
                      "relative h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500 before:absolute before:-inset-1 before:rounded-full before:bg-emerald-500 before:opacity-40 before:animate-ping",
                  },
                ),
                "24/7 Global Coverage",
              ),
              h(
                "div",
                { className: "relative z-20 mx-auto w-full max-w-[620px]" },
                h(
                  "p",
                  {
                    className:
                      "text-sm font-extrabold uppercase tracking-[0.22em] text-[#1D4ED8]",
                  },
                  "Global operations dashboard",
                ),
                h(
                  "h3",
                  {
                    className:
                      "mt-2 text-[clamp(1.6rem,3vw,2.6rem)] font-extrabold leading-tight tracking-tight text-[#0F172A]",
                  },
                  "Follow-the-sun support for operating continuity.",
                ),
                h(
                  "div",
                    {
                        className:
                          "relative mt-7 overflow-hidden rounded-[24px] border border-slate-200 bg-gradient-to-br from-[#0B1220]/6 via-[#EEF2FF] to-[#F8FAFF] p-2 aspect-[760/395]",
                      },
                  h(
                    "div",
                    {
                      className:
                        "absolute inset-0 rounded-[22px] border border-blue-100/70 bg-[radial-gradient(circle_at_20%_35%,rgba(37,99,235,0.20),transparent_42%),radial-gradient(circle_at_80%_70%,rgba(14,165,233,0.18),transparent_56%)]",
                    },
                  ),
                  h(
                    "svg",
                    {
                      className: "relative z-10 h-full w-full",
                      viewBox: "0 0 760 395",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      preserveAspectRatio: "xMidYMid meet",
                    },
                    h("defs", null,
                      h(
                        "linearGradient",
                        {
                          id: "routeGlow",
                          x1: "170",
                          y1: "220",
                          x2: "660",
                          y2: "360",
                          gradientUnits: "userSpaceOnUse",
                        },
                        h("stop", { key: "route-start", stopColor: "#2563EB", stopOpacity: "0" }),
                        h("stop", { key: "route-mid", offset: "0.2", stopColor: "#2563EB" }),
                        h("stop", { key: "route-end", offset: "1", stopColor: "#06B6D4" }),
                      ),
                    ),
                    h("g", { opacity: "0.82" },
                      h("path", {
                        d: "M130 205 C190 135 260 105 340 125 C445 148 498 205 575 235 C640 260 705 265 745 225",
                        stroke: "#CBD5E1",
                        strokeWidth: "1.8",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      h("path", {
                        d: "M76 276 C146 245 196 250 240 290 C296 336 356 326 418 318 C475 311 534 286 592 244 C650 206 730 176 755 176",
                        stroke: "#CBD5E1",
                        strokeWidth: "1.4",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      h("path", {
                        d: "M72 255 C120 250 170 258 220 265 C286 275 358 279 430 278 C500 277 572 271 650 270 C715 269 744 266 744 266",
                        stroke: "#E2E8F0",
                        strokeWidth: "0.9",
                        strokeDasharray: "6 10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                    ),
                    h(
                      "g",
                      {
                        fill: "none",
                        stroke: "url(#routeGlow)",
                        strokeWidth: "3.2",
                        strokeDasharray: "8 10",
                      },
                      dashboardRoute.map(function (route) {
                        return h(motion.path, {
                          key: route.d,
                          d: route.d,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          initial: { strokeDashoffset: 130 },
                          animate: { strokeDashoffset: [130, 0] },
                          transition: {
                            duration: 2.4,
                            repeat: Infinity,
                            ease: "linear",
                            delay: route.delay,
                          },
                        });
                      }),
                    ),
                    h(
                      "g",
                      null,
                      dashboardNodes.map(function (node) {
                        return h("g", { key: node.key },
                          h("circle", {
                            cx: node.cx,
                            cy: node.cy,
                            r: 19,
                            fill: "rgba(15,23,42,0.08)",
                          }),
                          h("circle", {
                            cx: node.cx,
                            cy: node.cy,
                            r: 8,
                            fill: node.core,
                            stroke: "white",
                            strokeWidth: "3",
                          }),
                          h("circle", { key: "pin-dot", cx: node.cx, cy: node.cy - 2, r: "3.2", fill: "white" }),
                          h(
                            "text",
                            {
                              x: node.cx,
                              y: node.cy + 28,
                              textAnchor: "middle",
                              fill: "#0F172A",
                              fontSize: "10",
                              fontWeight: "700",
                              letterSpacing: "0.06em",
                            },
                            node.label,
                          ),
                          h("circle", {
                            cx: node.cx,
                            cy: node.cy,
                            r: "11.8",
                            fill: "none",
                            stroke: node.glow,
                            strokeWidth: "1.5",
                            className: node.active ? "animate-pulse" : "",
                          }),
                        );
                      }),
                    ),
                  ),
                  h("div", { className: "hidden" }, [
                    dashboardNodes.map(function (node) {
                      return h(
                        "div",
                        {
                          key: `node-label-${node.key}`,
                          className:
                            "rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-sm backdrop-blur-sm",
                        },
                        h(
                          "p",
                          { className: "text-xs font-black uppercase tracking-[0.18em] text-[#1D4ED8]" },
                          node.title,
                        ),
                        h(
                          "p",
                          {
                            className:
                              "mt-1.5 text-[13px] font-semibold leading-5 text-slate-700",
                          },
                          node.subtitle,
                        ),
                      );
                    }),
                  ]),
                  h(
                    "div",
                    { className: "relative z-10 mt-6 grid gap-4 md:grid-cols-3" },
                    dashboardMetrics.map(function (metric) {
                      const Icon = metric.icon;
                      return h(
                        motion.div,
                        {
                          key: metric.title,
                          whileHover: { y: -6 },
                          className:
                            "inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-blue-200 bg-white px-6 py-3 shadow-[0_10px_26px_rgba(37,99,235,0.08)] backdrop-blur-sm transition-all hover:border-[#2563EB]/45 hover:bg-white hover:shadow-[0_16px_34px_rgba(37,99,235,0.14)]",
                        },
                        h(
                          "div",
                          {
                            className:
                              "inline-flex h-6 w-6 items-center justify-center text-[#1D4ED8]",
                          },
                          h(Icon, { className: "h-4 w-4" }),
                        ),
                        h(
                          "p",
                          { className: "text-base font-extrabold text-[#1D4ED8]" },
                          metric.title,
                        ),
                        null,
                      );
                    }),
                  ),
                ),
              ),
            ),
            h(
              motion.div,
              { variants: group, className: "grid gap-6" },
              regions.map(function (region, index) {
                const skylineOffset = index * 4;
                return h(
                  motion.article,
                  {
                    key: region.name,
                    variants: fade,
                    whileHover: { y: -8 },
                    className:
                      "relative min-h-[206px] overflow-hidden rounded-[30px] border border-slate-200 bg-white p-0 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-all hover:border-blue-200 hover:shadow-[0_34px_90px_rgba(37,99,235,0.18)]",
                  },
                  h(
                    "div",
                    {
                      className:
                        "relative flex min-h-[118px] items-start gap-6 overflow-hidden border-b-0 bg-white p-7 text-[#0F172A] sm:p-8",
                      style: {
                        backgroundImage:
                          "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,251,255,0.92))",
                      },
                    },
                    h(
                      "div",
                      { className: "hidden" },
                      h(
                        "svg",
                        {
                          viewBox: "0 0 280 72",
                          fill: "none",
                          className:
                            "absolute inset-x-0 bottom-0 h-full w-full",
                          preserveAspectRatio: "xMidYMax meet",
                        },
                        miniCityBars.map(function (bar, barIndex) {
                          return h("rect", {
                            key: barIndex,
                            x: barIndex * 19,
                            y: 68 - (miniCityBars[(barIndex + skylineOffset) % miniCityBars.length] / 1.2),
                            width: 12,
                            height: miniCityBars[(barIndex + skylineOffset) % miniCityBars.length] / 1.2 + 4,
                            rx: 6,
                            fill: "rgba(255,255,255,0.2)",
                          });
                        }),
                      ),
                    ),
                    h(
                      "span",
                      {
                        className:
                          "relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-[22px] bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-3xl font-black tracking-tight text-white shadow-[0_18px_36px_rgba(37,99,235,0.34)]",
                      },
                      region.name === "Australia"
                        ? "AUS"
                        : region.name === "India"
                          ? "IND"
                          : "USA",
                    ),
                    h(
                      "h3",
                      { className: "relative z-10 mt-2 text-4xl font-black tracking-tight text-[#0F172A]" },
                      region.name,
                    ),
                    h(
                      "p",
                      { className: "absolute left-[132px] top-[74px] z-10 inline-flex rounded-full bg-blue-50 px-5 py-2 text-base font-extrabold normal-case tracking-normal text-[#1D4ED8]" },
                      region.name,
                    ),
                    h(
                      "div",
                      {
                        className:
                          "absolute right-8 top-8 flex h-16 w-16 items-center justify-center rounded-full border border-blue-100 bg-blue-50/80 p-0 text-[#1D4ED8] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]",
                      },
                      h(
                        "p",
                        { className: "hidden" },
                        region.visual,
                      ),
                      h(
                        "svg",
                        {
                          viewBox: "0 0 120 60",
                          fill: "none",
                          className: "h-8 w-8 text-[#1D4ED8]",
                        },
                        h("path", {
                          d: "M4 44 C24 24 45 31 68 26 C80 23 96 18 112 25",
                          stroke: "rgba(255,255,255,0.85)",
                          strokeWidth: "1.2",
                          strokeLinecap: "round",
                        }),
                        h("path", {
                          d: "M8 48 C20 42 32 40 42 44 C56 49 72 50 86 45",
                          stroke: "rgba(255,255,255,0.5)",
                          strokeWidth: "1",
                          strokeDasharray: "2 3",
                          strokeLinecap: "round",
                        }),
                        h("circle", { cx: "22", cy: "28", r: "2", fill: "rgba(255,255,255,0.9)" }),
                        h("circle", { cx: "70", cy: "27", r: "2", fill: "rgba(255,255,255,0.9)" }),
                        h("circle", { cx: "110", cy: "38", r: "2", fill: "rgba(255,255,255,0.9)" }),
                      ),
                    ),
                  ),
                  h(
                    "div",
                    { className: "px-8 pb-8 pt-3" },
                    h("p", { className: "text-xl leading-8 text-slate-600" }, region.text),
                    h(
                      "div",
                      { className: "hidden" },
                      region.features.map(function (feature) {
                        return h(
                          "span",
                          {
                            key: feature,
                            className:
                              "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700",
                          },
                          h(CheckCircle2, { className: "h-3.5 w-3.5 text-emerald-500" }),
                          feature,
                        );
                      }),
                    ),
                  ),
                );
              }),
            ),
          ),
        ),
      ),

      /* ── YARDI SPECIALIZATION ── */
      h(
        "section",
        { className: "relative px-6 py-16 md:py-20" },
        h("div", {
          className: "absolute inset-0 bg-transparent dark:opacity-100",
          style: {
            background:
              "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(37,99,235,0.10) 0%, transparent 60%)",
          },
        }),
        h(
          "div",
          { className: "relative mx-auto max-w-7xl" },
          h(Intro, {
            eyebrow: "Yardi Specialization",
            title: "Focused Capability Across the Yardi Platform",
            text: "SpaceTech supports the applications, workflows, reporting layers, and operating disciplines property teams rely on every day.",
          }),
          h(
            motion.div,
            {
              variants: group,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              className: "mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4",
            },
            products.map(function (item) {
              return h(Card, { key: item.title, item: item });
            }),
          ),
        ),
      ),

      /* ── CTA SECTION ── */
      h(
        "section",
        { className: "relative px-6 pb-16 md:pb-20" },
        h(
          "div",
          {
            className:
              "relative mx-auto max-w-7xl rounded-[30px] bg-gradient-to-r from-[#0F172A] via-[#1D4ED8] to-[#0891B2] p-8 text-white shadow-xl md:p-12 dark:from-blue-800 dark:via-blue-600 dark:to-cyan-600 dark:shadow-[0_0_60px_rgba(37,99,235,0.5)]",
          },
          h(
            "div",
            { className: "grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center" },
            h(
              "div",
              null,
              h(
                "p",
                { className: "text-sm font-extrabold uppercase tracking-[0.24em] text-cyan-200" },
                "Platform confidence starts here",
              ),
              h(
                "h2",
                { className: "mt-4 text-3xl font-extrabold text-white md:text-5xl" },
                "Ready to Strengthen Your Yardi Platform?",
              ),
              h(
                "p",
                { className: "mt-5 max-w-2xl text-lg leading-8 text-blue-100" },
                "Partner with a team built for Yardi expertise, global delivery, governance, and long-term operational excellence.",
              ),
            ),
            h(
              "div",
              { className: "flex flex-col gap-3 sm:flex-row" },
              h(
                Link,
                {
                  to: "/contact",
                  className:
                    "inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-extrabold text-[#0F172A] shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl",
                },
                "Book a Strategy Call",
                h(ArrowRight, { className: "h-4 w-4" }),
              ),
              h(
                Link,
                {
                  to: "/contact",
                  className:
                    "inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-6 py-4 text-sm font-extrabold text-white backdrop-blur transition-all hover:bg-white/20",
                },
                "Contact Our Team",
              ),
            ),
          ),
        ),
      ),
    ),
  );
}
