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
import { worldMapShapes, worldMapConfig } from "@/data/worldMap";

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
    hubCode: "AUS",
    hubTitle: "LOGISTICS OPERATIONS HUB",
    hubText: "Supply chain management, warehousing optimization, and local delivery coordination for Australia.",
    hubIcon: "logistics",
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
    hubCode: "IND",
    hubTitle: "TECH DEVELOPMENT CENTER",
    hubText: "Software engineering, data analytics, and cloud infrastructure management for India.",
    hubIcon: "technology",
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
    hubCode: "USA",
    hubTitle: "CLIENT SUPPORT PORTAL",
    hubText: "Multi-channel client communications, personalized outreach, and strategic partnership management for the USA.",
    hubIcon: "support",
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

const renderForkliftIcon = () =>
  h(
    "svg",
    {
      viewBox: "0 0 24 24",
      className: "h-6 w-6",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    h("path", { d: "M16 2v17" }),
    h("path", { d: "M16 16h5v2h-5" }),
    h("path", { d: "M2 18h12v-5H8l-3 3H2z" }),
    h("path", { d: "M7 13V8h5v5" }),
    h("circle", { cx: "5", cy: "18", r: "2" }),
    h("circle", { cx: "11", cy: "18", r: "2" }),
  );

const renderCircuitIcon = () =>
  h(
    "svg",
    {
      viewBox: "0 0 24 24",
      className: "h-6 w-6",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    h("rect", { x: "4", y: "14", width: "16", height: "6", rx: "1" }),
    h("path", { d: "M8 17h.01M12 17h.01" }),
    h("path", { d: "M17.5 14a4 4 0 0 0-1.8-7.6 5 5 0 0 0-9.4 1 4 4 0 0 0-.8 6.6" }),
    h("path", { d: "M12 7.5V11" }),
  );

const renderSupportIcon = () =>
  h(
    "svg",
    {
      viewBox: "0 0 24 24",
      className: "h-6 w-6",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    h("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
    h("circle", { cx: "9", cy: "7", r: "4" }),
    h("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
    h("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" }),
    h("path", { d: "M18 10l2 2 4-4", stroke: "#10B981", strokeWidth: "2" }),
  );

function renderFlag(country: string, cx: number, cy: number) {
  const fy = cy - 46;
  const fx = cx + 1.5;
  const fw = 32;
  const fh = 20;

  if (country === "USA") {
    return h(
      "g",
      { key: "usa-flag" },
      h("rect", { x: fx, y: fy, width: fw, height: fh, fill: "#ffffff", rx: 1.5 }),
      [0, 2, 4, 6, 8, 10, 12].map((i) =>
        h("rect", {
          key: i,
          x: fx,
          y: fy + (i * fh) / 13,
          width: fw,
          height: fh / 13,
          fill: "#b22234",
        })
      ),
      h("rect", { x: fx, y: fy, width: fw * 0.45, height: fh * (7 / 13), fill: "#3c3b6e" }),
      h("circle", { cx: fx + 4, cy: fy + 3, r: 0.6, fill: "#ffffff" }),
      h("circle", { cx: fx + 10, cy: fy + 3, r: 0.6, fill: "#ffffff" }),
      h("circle", { cx: fx + 7, cy: fy + 5, r: 0.6, fill: "#ffffff" }),
      h("circle", { cx: fx + 4, cy: fy + 7, r: 0.6, fill: "#ffffff" }),
      h("circle", { cx: fx + 10, cy: fy + 7, r: 0.6, fill: "#ffffff" }),
      h("rect", { x: fx, y: fy, width: fw, height: fh, fill: "none", stroke: "#e2e8f0", strokeWidth: "0.5", rx: 1.5 })
    );
  } else if (country === "India") {
    return h(
      "g",
      { key: "india-flag" },
      h("rect", { x: fx, y: fy, width: fw, height: fh, fill: "#ffffff", rx: 1.5 }),
      h("rect", { x: fx, y: fy, width: fw, height: fh / 3, fill: "#ff9933" }),
      h("rect", { x: fx, y: fy + (2 * fh) / 3, width: fw, height: fh / 3, fill: "#138808" }),
      h("circle", {
        cx: fx + fw / 2,
        cy: fy + fh / 2,
        r: fh / 6,
        fill: "none",
        stroke: "#000080",
        strokeWidth: "1",
      }),
      h("rect", { x: fx, y: fy, width: fw, height: fh, fill: "none", stroke: "#e2e8f0", strokeWidth: "0.5", rx: 1.5 })
    );
  } else if (country === "Australia") {
    return h(
      "g",
      { key: "australia-flag" },
      h("rect", { x: fx, y: fy, width: fw, height: fh, fill: "#00008B", rx: 1.5 }),
      h("path", {
        d: `M ${fx} ${fy} L ${fx + fw * 0.45} ${fy + fh * 0.5} M ${fx} ${fy + fh * 0.5} L ${fx + fw * 0.45} ${fy}`,
        stroke: "#ffffff",
        strokeWidth: "1.5",
      }),
      h("path", {
        d: `M ${fx + (fw * 0.45) / 2} ${fy} L ${fx + (fw * 0.45) / 2} ${fy + fh * 0.5} M ${fx} ${fy + fh * 0.25} L ${fx + fw * 0.45} ${fy + fh * 0.25}`,
        stroke: "#ffffff",
        strokeWidth: "2",
      }),
      h("path", {
        d: `M ${fx + (fw * 0.45) / 2} ${fy} L ${fx + (fw * 0.45) / 2} ${fy + fh * 0.5} M ${fx} ${fy + fh * 0.25} L ${fx + fw * 0.45} ${fy + fh * 0.25}`,
        stroke: "#ff0000",
        strokeWidth: "0.8",
      }),
      h("circle", { cx: fx + fw * 0.75, cy: fy + fh * 0.25, r: 1, fill: "#ffffff" }),
      h("circle", { cx: fx + fw * 0.85, cy: fy + fh * 0.45, r: 1, fill: "#ffffff" }),
      h("circle", { cx: fx + fw * 0.75, cy: fy + fh * 0.75, r: 1.2, fill: "#ffffff" }),
      h("circle", { cx: fx + fw * 0.65, cy: fy + fh * 0.55, r: 1, fill: "#ffffff" }),
      h("circle", { cx: fx + fw * 0.8, cy: fy + fh * 0.6, r: 0.7, fill: "#ffffff" }),
      h("rect", { x: fx, y: fy, width: fw, height: fh, fill: "none", stroke: "#e2e8f0", strokeWidth: "0.5", rx: 1.5 })
    );
  }
  return null;
}

function renderPodium(cx: number, cy: number, country: string, label: string) {
  return h(
    "g",
    { key: country, className: "podium-group" },
    h("ellipse", { cx: cx, cy: cy + 14, rx: 38, ry: 13, fill: "rgba(0,0,0,0.12)", filter: "url(#dropShadow)" }),
    h("path", {
      d: `M ${cx - 35} ${cy + 8} A 35 12 0 0 0 ${cx + 35} ${cy + 8} L ${cx + 35} ${cy + 15} A 35 12 0 0 1 ${cx - 35} ${cy + 15} Z`,
      className: "fill-slate-300 dark:fill-slate-700",
    }),
    h("ellipse", {
      cx: cx,
      cy: cy + 8,
      rx: 35,
      ry: 12,
      className: "fill-slate-200 dark:fill-slate-600",
    }),
    h("path", {
      d: `M ${cx - 25} ${cy} A 25 9 0 0 0 ${cx + 25} ${cy} L ${cx + 25} ${cy + 8} A 25 9 0 0 1 ${cx - 25} ${cy + 8} Z`,
      className: "fill-slate-400 dark:fill-slate-600",
    }),
    h("ellipse", {
      cx: cx,
      cy: cy,
      rx: 25,
      ry: 9,
      className: "fill-slate-100 dark:fill-slate-500",
    }),
    h("ellipse", {
      cx: cx,
      cy: cy,
      rx: 22,
      ry: 8,
      fill: "none",
      stroke: "#60a5fa",
      strokeWidth: "2",
      className: "animate-pulse",
    }),
    h("line", {
      x1: cx,
      y1: cy,
      x2: cx,
      y2: cy - 50,
      stroke: "#94a3b8",
      strokeWidth: "3",
      strokeLinecap: "round",
    }),
    h("circle", { cx: cx, cy: cy - 50, r: "4.5", fill: "#fbbf24" }),
    renderFlag(country, cx, cy),
    h("g", null,
      h("rect", {
        x: cx - 40,
        y: cy + 24,
        width: 80,
        height: 22,
        rx: 11,
        className: "fill-slate-900/90 dark:fill-slate-950/90 stroke-white/10",
        strokeWidth: "1",
      }),
      h("text", {
        x: cx,
        y: cy + 39,
        textAnchor: "middle",
        fill: "#ffffff",
        fontSize: "10",
        fontWeight: "800",
        letterSpacing: "0.08em",
      }, label)
    )
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
                src: "/optimized/about-section-768.webp",
                srcSet: "/optimized/about-section-480.webp 480w, /optimized/about-section-768.webp 768w, /optimized/about-section-1024.webp 1024w",
                sizes: "(min-width: 1024px) 45vw, 100vw",
                alt: "Enterprise consulting team",
                width: 1024,
                height: 768,
                loading: "eager",
                fetchPriority: "high",
                decoding: "async",
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
                "mt-12 grid min-w-0 gap-6 rounded-[36px] border border-white/40 dark:border-white/10 bg-white/30 dark:bg-slate-950/20 p-5 shadow-[0_28px_90px_rgba(15,23,42,0.12)] dark:shadow-[0_28px_90px_rgba(0,0,0,0.5)] backdrop-blur-2xl lg:grid-cols-[1.26fr_0.74fr] lg:items-stretch",
              style: {
                backgroundImage: "linear-gradient(to right, rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.08) 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }
            },
            h(
              motion.article,
              {
                variants: fade,
                className:
                  "relative overflow-hidden rounded-[30px] border border-white/40 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 p-6 shadow-xl backdrop-blur-lg sm:p-8 transition-all duration-300",
              },
              h(
                "div",
                {
                  className:
                    "absolute -right-24 -top-24 h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,_rgba(37,99,235,0.26),_transparent_70%)] blur-sm pointer-events-none",
                },
              ),
              h(
                "div",
                {
                  className:
                    "absolute -left-20 -bottom-20 h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.2),_transparent_72%)] blur-sm pointer-events-none",
                },
              ),
              h(
                "div",
                {
                  className:
                    "absolute right-6 top-6 z-10 flex items-center gap-2 rounded-full border border-emerald-250/30 dark:border-emerald-500/20 bg-white/90 dark:bg-slate-800/90 px-4 py-2 text-[11px] font-extrabold tracking-wide text-slate-800 dark:text-emerald-350 shadow-[0_12px_30px_rgba(15,23,42,0.08)] dark:shadow-[0_12px_30px_rgba(0,0,0,0.3)]",
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
                { className: "relative z-20 mx-auto w-full" },
                h(
                  "p",
                  {
                    className:
                      "text-xs font-black uppercase tracking-[0.22em] text-[#1D4ED8] dark:text-blue-400",
                  },
                  "GLOBAL OPERATIONS DASHBOARD",
                ),
                h(
                  "h3",
                  {
                    className:
                      "mt-2 text-[clamp(1.6rem,3vw,2.6rem)] font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white",
                  },
                  "Follow-the-sun support for operating continuity.",
                ),
                h(
                  "div",
                  {
                    className:
                      "relative mt-7 overflow-hidden rounded-[24px] border border-slate-200/50 dark:border-slate-800/40 bg-gradient-to-br from-slate-100/50 via-slate-50/30 to-slate-100/50 dark:from-slate-950/50 dark:via-slate-900/30 dark:to-slate-950/50 p-2 aspect-[2000/1001] w-full shadow-inner",
                  },
                  h(
                    "svg",
                    {
                      className: "relative z-10 h-full w-full select-none",
                      viewBox: worldMapConfig.viewBox,
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      preserveAspectRatio: "xMidYMid meet",
                    },
                    h("defs", null,
                      h(
                        "radialGradient",
                        { id: "mapGlow", cx: "50%", cy: "50%", r: "50%" },
                        h("stop", { offset: "0%", stopColor: "#3b82f6", stopOpacity: "0.15" }),
                        h("stop", { offset: "100%", stopColor: "#3b82f6", stopOpacity: "0" })
                      ),
                      h(
                        "linearGradient",
                        {
                          id: "activeRoute",
                          x1: "0%",
                          y1: "0%",
                          x2: "100%",
                          y2: "100%",
                        },
                        h("stop", { stopColor: "#2563EB", stopOpacity: "0.2" }),
                        h("stop", { offset: "0.5", stopColor: "#3b82f6", stopOpacity: "1" }),
                        h("stop", { offset: "1", stopColor: "#0ea5e9", stopOpacity: "0.2" }),
                      ),
                      h(
                        "filter",
                        { id: "dropShadow", x: "-20%", y: "-20%", width: "140%", height: "140%" },
                        h("feDropShadow", { dx: "0", dy: "4", stdDeviation: "3", floodOpacity: "0.15" })
                      ),
                      h(
                        "filter",
                        { id: "flagShadow", x: "-10%", y: "-10%", width: "120%", height: "120%" },
                        h("feDropShadow", { dx: "0", dy: "2", stdDeviation: "1.5", floodOpacity: "0.1" })
                      )
                    ),
                    h("rect", { width: "2000", height: "1001", fill: "url(#mapGlow)" }),
                    h(
                      "g",
                      { className: "countries" },
                      worldMapShapes.map(function (shape) {
                        return h("path", {
                          key: shape.id,
                          d: shape.d,
                          className:
                            "fill-slate-200/60 dark:fill-slate-800/40 stroke-slate-350/40 dark:stroke-slate-750/30 transition-colors duration-500 hover:fill-blue-500/10 dark:hover:fill-blue-400/10",
                          strokeWidth: "0.8",
                        });
                      })
                    ),
                    h("path", {
                      d: "M 380 380 Q 904 150 1428 434",
                      fill: "none",
                      stroke: "#94a3b8",
                      strokeWidth: "2",
                      strokeDasharray: "6 8",
                      opacity: "0.4",
                    }),
                    h("path", {
                      d: "M 1428 434 Q 1600 520 1700 745",
                      fill: "none",
                      stroke: "#94a3b8",
                      strokeWidth: "2",
                      strokeDasharray: "6 8",
                      opacity: "0.4",
                    }),
                    h(motion.path, {
                      d: "M 380 380 Q 904 150 1428 434",
                      fill: "none",
                      stroke: "url(#activeRoute)",
                      strokeWidth: "3.5",
                      strokeDasharray: "10 15",
                      strokeLinecap: "round",
                      initial: { strokeDashoffset: 200 },
                      animate: { strokeDashoffset: [200, 0] },
                      transition: {
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }),
                    h(
                      motion.g,
                      {
                        style: {
                          offsetPath: "path('M 380 380 Q 904 150 1428 434')",
                        },
                        animate: {
                          offsetDistance: ["0%", "100%"],
                        },
                        transition: {
                          duration: 12,
                          repeat: Infinity,
                          ease: "linear",
                        },
                      },
                      h("circle", { cx: 0, cy: 0, r: 16, fill: "#fbbf24", opacity: "0.2" }),
                      h("circle", { cx: 0, cy: 0, r: 8, fill: "#fbbf24", filter: "url(#dropShadow)" }),
                      h(motion.circle, {
                        cx: 0,
                        cy: 0,
                        r: 11,
                        fill: "none",
                        stroke: "#d97706",
                        strokeWidth: "2",
                        strokeDasharray: "3 3",
                        animate: { rotate: 360 },
                        transition: { repeat: Infinity, duration: 20, ease: "linear" }
                      })
                    ),
                    h(
                      motion.g,
                      {
                        style: {
                          offsetPath: "path('M 1428 434 Q 1600 520 1700 745')",
                        },
                        animate: {
                          offsetDistance: ["0%", "100%"],
                        },
                        transition: {
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                          delay: 2,
                        },
                      },
                      h("circle", { cx: 0, cy: 0, r: 10, fill: "#3b82f6", opacity: "0.2" }),
                      h("circle", { cx: 0, cy: 0, r: 5, fill: "#3b82f6", filter: "url(#dropShadow)" }),
                      h("circle", { cx: 0, cy: 0, r: 8, fill: "none", stroke: "#2563eb", strokeWidth: "1.5", className: "animate-ping" })
                    ),
                    renderPodium(380, 380, "USA", "USA"),
                    renderPodium(1428, 434, "India", "IND"),
                    renderPodium(1700, 745, "Australia", "AUS")
                  ),
                ),
                h(
                  "div",
                  { className: "relative z-10 mt-6 grid gap-4 md:grid-cols-3" },
                  dashboardMetrics.map(function (metric) {
                    const Icon = metric.icon;
                    return h(
                      motion.div,
                      {
                        key: metric.title,
                        whileHover: { y: -3 },
                        className:
                          "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-2xl border border-white/40 dark:border-white/10 bg-white/60 dark:bg-slate-800/40 px-5 py-2.5 shadow-md backdrop-blur-md transition-all hover:border-blue-400/40 hover:bg-white/80 dark:hover:bg-slate-800/60 text-blue-600 dark:text-blue-400 font-extrabold text-sm hover:shadow-lg hover:translate-y-[-2px]",
                      },
                      h(
                        "div",
                        {
                          className:
                            "inline-flex h-6 w-6 items-center justify-center text-[#1D4ED8] dark:text-blue-400",
                        },
                        h(Icon, { className: "h-4 w-4" }),
                      ),
                      h(
                        "p",
                        { className: "text-sm font-extrabold text-slate-800 dark:text-slate-200" },
                        metric.title,
                      ),
                    );
                  }),
                ),
              ),
            ),
            h(
              motion.div,
              {
                variants: group,
                className:
                  "grid gap-4 rounded-[36px] border border-white/30 dark:border-white/5 bg-white/20 dark:bg-slate-950/10 p-4 shadow-lg backdrop-blur-xl",
              },
              h(
                "p",
                { className: "px-2 pt-1 text-xs font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400" },
                "GLOBAL HUB SPECIFICS",
              ),
              regions.map(function (region, index) {
                const HubIcon = region.hubIcon === "logistics" ? renderForkliftIcon : region.hubIcon === "technology" ? renderCircuitIcon : renderSupportIcon;
                return h(
                  motion.article,
                  {
                    key: region.name,
                    variants: fade,
                    whileHover: { y: -5, scale: 1.01 },
                    className:
                      "relative overflow-hidden rounded-[28px] backdrop-blur-lg bg-white/70 dark:bg-slate-900/60 border border-white/40 dark:border-white/10 shadow-lg p-6 transition-all hover:shadow-xl hover:border-blue-400/40 dark:hover:border-blue-500/30",
                  },
                  h(
                    "div",
                    { className: "flex items-start justify-between gap-4" },
                    h(
                      "div",
                      { className: "flex items-start gap-4" },
                      h(
                        "span",
                        {
                          className:
                            "flex h-12 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-extrabold text-sm shadow-md",
                        },
                        region.hubCode,
                      ),
                      h(
                        "div",
                        null,
                        h(
                          "h4",
                          { className: "text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400" },
                          region.name
                        ),
                        h(
                          "h3",
                          { className: "text-lg font-extrabold leading-tight text-slate-900 dark:text-white mt-0.5" },
                          region.hubTitle,
                        ),
                      )
                    ),
                    h(
                      "div",
                      {
                        className:
                          "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 dark:bg-slate-800/80 text-blue-600 dark:text-blue-400 border border-blue-100/50 dark:border-slate-700/50 shadow-inner",
                      },
                      h(HubIcon, null)
                    )
                  ),
                  h(
                    "p",
                    { className: "mt-4 text-sm leading-relaxed text-slate-650 dark:text-slate-350" },
                    region.hubText
                  )
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

