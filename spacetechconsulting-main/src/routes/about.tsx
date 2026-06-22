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
  MapPin,
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

export const Route = createFileRoute("/about")({ component: About });

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
    x: "82%",
    y: "80%",
    text: "Client delivery, regional operations, and local continuity.",
  },
  {
    name: "India",
    x: "64%",
    y: "68%",
    text: "Engineering, reporting, automation, managed support, and extended coverage.",
  },
  {
    name: "USA",
    x: "24%",
    y: "72%",
    text: "Advisory, program coordination, partnership coverage, and client success.",
  },
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
        "rounded-[22px] border border-blue-100 bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)]",
    },
    h(
      "div",
      {
        className:
          "mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1D4ED8] to-[#06B6D4] text-white",
      },
      h(Icon, { className: "h-5 w-5" }),
    ),
    h(
      "div",
      { className: "text-3xl font-extrabold text-[#0F172A]" },
      value.toLocaleString(),
      stat.suffix,
    ),
    h("p", { className: "mt-2 text-sm font-semibold text-slate-600" }, stat.label),
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
        "rounded-[24px] border border-slate-100 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.07)]",
    },
    h(
      "span",
      {
        className:
          "flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#1D4ED8]",
      },
      h(Icon, { className: "h-6 w-6" }),
    ),
    h("h3", { className: "mt-5 text-xl font-extrabold text-[#0F172A]" }, props.item.title),
    h("p", { className: "mt-3 leading-7 text-slate-600" }, props.item.text),
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
          "inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.22em] text-[#1D4ED8]",
      },
      props.eyebrow,
    ),
    h(
      "h2",
      { className: "mt-5 text-3xl font-extrabold tracking-tight text-[#0F172A] md:text-5xl" },
      props.title,
    ),
    props.text ? h("p", { className: "mt-5 text-lg leading-8 text-slate-700" }, props.text) : null,
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
      { className: "bg-white text-[#0F172A]" },
      h(
        "section",
        { className: "relative overflow-hidden px-6 pb-12 pt-16" },
        h("div", {
          className:
            "absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(37,99,235,0.15),transparent_34%),linear-gradient(180deg,#F8FBFF_0%,#FFFFFF_76%)]",
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
                  "rounded-full border border-blue-100 bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.24em] text-[#1D4ED8]",
              },
              "About SpaceTech",
            ),
            h(
              "h1",
              {
                className: "mt-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl",
              },
              "Your Strategic Yardi Partner",
            ),
            h(
              "p",
              { className: "mt-6 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl" },
              "SpaceTech Consulting helps property organizations strengthen Yardi performance through platform ownership, enterprise engineering discipline, operational governance, and global delivery capability.",
            ),
            h(
              "p",
              { className: "mt-4 max-w-2xl text-base leading-8 text-slate-600 md:text-lg" },
              "We combine functional consulting, technical delivery, reporting expertise, and 24/7 support coverage so clients can move faster and create more reliable outcomes from their Yardi investment.",
            ),
            h(
              "div",
              { className: "mt-8 flex flex-col gap-3 sm:flex-row" },
              h(
                Link,
                {
                  to: "/contact",
                  className:
                    "inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0F172A] via-[#1D4ED8] to-[#0891B2] px-6 py-4 text-sm font-extrabold text-white shadow-lg",
                },
                "Book a Strategy Call",
                h(ArrowRight, { className: "h-4 w-4" }),
              ),
              h(
                Link,
                {
                  to: "/contact",
                  className:
                    "inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-extrabold",
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
                "absolute -inset-5 rounded-[32px] bg-gradient-to-br from-blue-200 via-cyan-100 to-white blur-2xl",
            }),
            h(
              "div",
              {
                className:
                  "relative overflow-hidden rounded-[28px] border border-white bg-white shadow-[0_30px_90px_rgba(15,23,42,0.18)]",
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
                    "absolute inset-x-0 bottom-0 grid gap-3 bg-gradient-to-t from-[#0F172A]/90 to-transparent p-6 text-white sm:grid-cols-2",
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
                        "rounded-2xl border border-white/20 bg-white/15 px-4 py-3 text-sm font-bold backdrop-blur",
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
      h(
        "section",
        { className: "px-6 py-16 md:py-20" },
        h(
          "div",
          { className: "mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr]" },
          h(
            motion.div,
            {
              variants: fade,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              className:
                "rounded-[28px] border border-blue-100 bg-gradient-to-b from-white to-blue-50 p-8 shadow-xl",
            },
            h(
              "span",
              {
                className:
                  "rounded-full bg-blue-100 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.22em] text-[#1D4ED8]",
              },
              "Meet Our Founder",
            ),
            h("h2", { className: "mt-8 text-4xl font-extrabold" }, "Sambhaji"),
            h("p", { className: "mt-1 text-lg font-bold text-[#1D4ED8]" }, "Founder and CEO"),
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
                      "flex items-center gap-3 rounded-2xl border border-blue-100 bg-white px-4 py-3",
                  },
                  h(Icon, { className: "h-5 w-5 text-[#1D4ED8]" }),
                  h("span", { className: "font-bold" }, b.text),
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
              className: "rounded-[28px] border border-slate-100 bg-white p-8 shadow-xl md:p-10",
            },
            h(
              "h2",
              { className: "text-3xl font-extrabold tracking-tight md:text-5xl" },
              "Enterprise Engineering Leadership for Property Technology",
            ),
            h(
              "div",
              { className: "mt-6 grid gap-5 leading-8 text-slate-700" },
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
              { className: "mt-8 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2" },
              timeline.map(function (t) {
                return h(
                  "div",
                  {
                    key: t,
                    className: "flex gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-semibold",
                  },
                  h(CheckCircle2, { className: "h-5 w-5 shrink-0 text-[#1D4ED8]" }),
                  t,
                );
              }),
            ),
          ),
        ),
      ),
      h(
        "section",
        { className: "bg-gradient-to-b from-[#F8FBFF] to-white px-6 py-16 md:py-20" },
        h(
          "div",
          { className: "mx-auto max-w-7xl" },
          h(Intro, {
            eyebrow: "Meet the YTeam",
            title: "Specialists Working as One Team",
            text: "SpaceTech brings together functional consultants, technical specialists, reporting experts, and platform administrators who work collaboratively as an extension of client business and technology teams.",
          }),
          h(
            "p",
            { className: "mx-auto mt-5 max-w-4xl text-center text-lg leading-8 text-slate-700" },
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
                "mx-auto mt-12 max-w-6xl rounded-[30px] border border-blue-100 bg-white p-6 shadow-xl",
            },
            h(
              "div",
              {
                className:
                  "mx-auto flex w-48 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#0F172A] to-[#1D4ED8] px-6 py-4 text-lg font-extrabold text-white",
              },
              h(Network, { className: "h-5 w-5" }),
              "YTEAM",
            ),
            h("div", { className: "mx-auto h-10 w-px bg-blue-200" }),
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
                      "rounded-[22px] border border-slate-100 bg-gradient-to-b from-white to-slate-50 p-5 text-center shadow-lg",
                  },
                  h(Icon, { className: "mx-auto h-8 w-8 text-[#1D4ED8]" }),
                  h("h3", { className: "mt-4 text-lg font-extrabold" }, item.title),
                  h("p", { className: "mt-3 text-sm leading-6 text-slate-600" }, item.text),
                );
              }),
            ),
            h("div", { className: "mx-auto h-10 w-px bg-blue-200" }),
            h(
              "div",
              {
                className:
                  "mx-auto flex w-64 items-center justify-center gap-3 rounded-2xl border border-cyan-100 bg-cyan-50 px-6 py-4 text-lg font-extrabold",
              },
              h(Handshake, { className: "h-5 w-5 text-[#0891B2]" }),
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
                  "rounded-[28px] bg-gradient-to-br from-[#0F172A] via-[#1D4ED8] to-[#0891B2] p-8 text-white shadow-xl",
              },
              h("h3", { className: "text-3xl font-extrabold" }, "One Team. Shared Ownership."),
              h(
                "p",
                { className: "mt-5 leading-8 text-blue-50" },
                "Functional, technical, reporting, and platform specialists work together to provide continuity, accountability, and long-term platform success.",
              ),
            ),
            h(
              "div",
              { className: "rounded-[28px] border border-slate-100 bg-white p-8 shadow-xl" },
              h(
                "p",
                { className: "leading-8 text-slate-700" },
                "This approach helps clients move beyond reactive support toward a proactive operating model focused on governance, visibility, reliability, and continuous improvement.",
              ),
            ),
          ),
          h(
            "div",
            {
              className:
                "mt-10 rounded-[28px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 p-px shadow-xl",
            },
            h(
              "div",
              { className: "rounded-[27px] bg-white p-8 md:p-10" },
              h(Quote, { className: "h-12 w-12 text-[#1D4ED8]" }),
              h(
                "blockquote",
                { className: "mt-5 text-2xl font-extrabold md:text-4xl" },
                "Great platform outcomes come from combining deep product expertise with disciplined operational execution.",
              ),
              h(
                "p",
                { className: "mt-5 text-lg font-semibold text-slate-600" },
                "The YTeam is designed to bring both together.",
              ),
            ),
          ),
        ),
      ),
      h(
        "section",
        { className: "px-6 py-16 md:py-20" },
        h(
          "div",
          { className: "mx-auto max-w-7xl" },
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
      h(
        "section",
        { className: "bg-[#F8FBFF] px-6 py-16 md:py-20" },
        h(
          "div",
          { className: "mx-auto max-w-7xl" },
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
      h(
        "section",
        { className: "px-6 py-16 md:py-20" },
        h(
          "div",
          { className: "mx-auto max-w-7xl" },
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
                  className: "rounded-2xl border border-slate-100 bg-white p-4 font-bold shadow-sm",
                },
                c,
              );
            }),
          ),
        ),
      ),

      h(
        "section",
        {
          className: "relative overflow-hidden bg-[radial-gradient(circle_at_18%_8%,rgba(37,99,235,0.10),transparent_34%),linear-gradient(180deg,#FFFFFF_0%,#F7FAFF_100%)] px-6 py-16 md:py-24",
        },
        h(
          "div",
          { className: "mx-auto max-w-7xl" },
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
              className: "mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch",
            },
            h(
              motion.div,
              {
                variants: fade,
                className:
                  "relative min-h-[560px] overflow-hidden rounded-[34px] border border-blue-100/80 bg-white p-0 shadow-[0_30px_90px_rgba(15,23,42,0.12)]",
              },
              h("div", {
                className:
                  "absolute inset-0 bg-[radial-gradient(circle_at_18%_26%,rgba(37,99,235,0.16),transparent_28%),radial-gradient(circle_at_72%_52%,rgba(79,70,229,0.14),transparent_30%)]",
              }),
              h("div", {
                className:
                  "absolute inset-5 rounded-[28px] border border-blue-100/70 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40",
              }),
              h(
                "div",
                {
                  className:
                    "absolute right-7 top-7 z-30 flex items-center gap-3 rounded-full border border-emerald-100 bg-white/90 px-4 py-2.5 text-xs font-extrabold text-[#0F172A] shadow-[0_14px_35px_rgba(16,185,129,0.18)] backdrop-blur",
                },
                h(
                  "span",
                  { className: "relative flex h-3 w-3" },
                  h("span", {
                    className:
                      "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75",
                  }),
                  h("span", {
                    className: "relative inline-flex h-3 w-3 rounded-full bg-emerald-500",
                  }),
                ),
                "24/7 Global Coverage",
              ),
              h(
                "div",
                { className: "absolute bottom-7 left-7 right-7 z-30 flex flex-wrap gap-2" },
                ["3 Regions", "Follow-the-Sun Support", "Continuous Coverage"].map(function (chip) {
                  return h(
                    "span",
                    {
                      key: chip,
                      className:
                        "rounded-full border border-blue-100 bg-white/90 px-3.5 py-2 text-xs font-extrabold text-[#1D4ED8] shadow-sm backdrop-blur",
                    },
                    chip,
                  );
                }),
              ),
              h(
                "svg",
                {
                  className: "absolute inset-0 z-10 h-full w-full",
                  viewBox: "0 0 760 430",
                  fill: "none",
                  preserveAspectRatio: "none",
                },
                h("path", {
                  d: "M165 310 C305 235 430 242 520 310",
                  stroke: "url(#globalPath)",
                  strokeWidth: "2",
                  strokeDasharray: "8 10",
                  className: "animate-pulse",
                }),
                h("path", {
                  d: "M520 310 C584 335 632 368 674 404",
                  stroke: "url(#globalPath)",
                  strokeWidth: "2",
                  strokeDasharray: "8 10",
                  className: "animate-pulse",
                }),
                h(
                  "defs",
                  null,
                  h(
                    "linearGradient",
                    {
                      id: "globalPath",
                      x1: "120",
                      y1: "120",
                      x2: "650",
                      y2: "330",
                      gradientUnits: "userSpaceOnUse",
                    },
                    h("stop", { stopColor: "#2563EB" }),
                    h("stop", { offset: "1", stopColor: "#4F46E5" }),
                  ),
                ),
              ),
              regions.map(function (r) {
                return h(
                  motion.div,
                  {
                    key: r.name,
                    whileHover: { y: -6, scale: 1.03 },
                    className: "absolute z-20",
                    style: { left: r.x, top: r.y },
                  },
                  h("span", {
                    className:
                      "absolute -left-5 -top-5 h-10 w-10 animate-ping rounded-full bg-blue-400/20",
                  }),
                  h(
                    "span",
                    {
                      className:
                        "relative flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-white text-[#1D4ED8] shadow-[0_0_38px_rgba(37,99,235,0.28)]",
                    },
                    h(MapPin, { className: "h-6 w-6" }),
                  ),
                  h(
                    "div",
                    {
                      className:
                        "mt-1 w-32 -translate-x-1/2 rounded-2xl border border-blue-100 bg-white/85 px-3 py-2 text-center text-xs font-extrabold text-[#0F172A] shadow-lg backdrop-blur",
                    },
                    r.name,
                  ),
                );
              }),
              h(
                "div",
                {
                  className:
                    "absolute left-7 top-7 z-20 max-w-[430px] rounded-3xl border border-blue-100 bg-white/92 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.10)] backdrop-blur",
                },
                h(
                  "p",
                  {
                    className: "text-sm font-extrabold uppercase tracking-[0.24em] text-[#1D4ED8]",
                  },
                  "Global operations dashboard",
                ),
                h(
                  "h3",
                  {
                    className:
                      "mt-3 text-[28px] font-extrabold leading-[1.08] tracking-tight text-[#0F172A] md:text-4xl",
                  },
                  "Follow-the-sun support for operating continuity.",
                ),
              ),
            ),
            h(
              motion.div,
              { variants: group, className: "grid gap-5" },
              regions.map(function (r) {
                const flag = r.name === "Australia" ? "AUS" : r.name === "India" ? "IND" : "USA";
                const Icon =
                  r.name === "Australia" ? Handshake : r.name === "India" ? Workflow : Globe2;
                return h(
                  motion.article,
                  {
                    key: r.name,
                    variants: fade,
                    whileHover: { y: -8 },
                    className:
                      "rounded-[24px] bg-gradient-to-br from-blue-200/70 via-white to-indigo-200/70 p-px shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition-shadow hover:shadow-[0_26px_70px_rgba(37,99,235,0.16)]",
                  },
                  h(
                    "div",
                    {
                      className:
                        "h-full rounded-[23px] border border-white/80 bg-white/90 p-6 backdrop-blur-xl",
                    },
                    h(
                      "div",
                      { className: "flex items-start justify-between gap-4" },
                      h(
                        "div",
                        null,
                        h(
                          "div",
                          {
                            className:
                              "grid h-11 w-16 place-items-center rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#2563EB] text-xs font-extrabold tracking-[0.16em] text-white shadow-[0_12px_28px_rgba(37,99,235,0.22)]",
                          },
                          flag,
                        ),
                        h(
                          "h3",
                          { className: "mt-3 text-2xl font-extrabold text-[#0F172A]" },
                          r.name,
                        ),
                        h(
                          "p",
                          {
                            className:
                              "mt-1 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-extrabold text-[#1D4ED8]",
                          },
                          r.name,
                        ),
                      ),
                      h(
                        "span",
                        {
                          className:
                            "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-[#1D4ED8]",
                        },
                        h(Icon, { className: "h-6 w-6" }),
                      ),
                    ),
                    h("p", { className: "mt-5 text-base leading-7 text-slate-700" }, r.text),
                  ),
                );
              }),
            ),
          ),
        ),
      ),
      h(
        "section",
        { className: "px-6 py-16 md:py-20" },
        h(
          "div",
          { className: "mx-auto max-w-7xl" },
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
      h(
        "section",
        { className: "px-6 pb-16 md:pb-20" },
        h(
          "div",
          {
            className:
              "mx-auto max-w-7xl rounded-[30px] bg-gradient-to-r from-[#0F172A] via-[#1D4ED8] to-[#0891B2] p-8 text-white shadow-xl md:p-12",
          },
          h(
            "div",
            { className: "grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center" },
            h(
              "div",
              null,
              h(
                "p",
                { className: "text-sm font-extrabold uppercase tracking-[0.24em] text-cyan-100" },
                "Platform confidence starts here",
              ),
              h(
                "h2",
                { className: "mt-4 text-3xl font-extrabold md:text-5xl" },
                "Ready to Strengthen Your Yardi Platform?",
              ),
              h(
                "p",
                { className: "mt-5 max-w-2xl text-lg leading-8 text-blue-50" },
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
                    "inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-extrabold text-[#0F172A]",
                },
                "Book a Strategy Call",
                h(ArrowRight, { className: "h-4 w-4" }),
              ),
              h(
                Link,
                {
                  to: "/contact",
                  className:
                    "inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-6 py-4 text-sm font-extrabold text-white",
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
