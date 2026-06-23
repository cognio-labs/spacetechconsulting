import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { getPropertyType } from "@/data/propertyTypes";

export const Route = createFileRoute("/who-we-serve_/$slug")({
  loader: ({ params }) => {
    const property = getPropertyType(params.slug);
    if (!property) throw notFound();
    return { property };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.property.title} Yardi Consulting | SpaceTech Consulting` },
      { name: "description", content: loaderData?.property.overview },
      { name: "author", content: "SpaceTech Consulting" },
      { property: "og:title", content: `${loaderData?.property.title} Yardi Consulting | SpaceTech Consulting` },
      { property: "og:description", content: loaderData?.property.overview },
      { property: "og:image", content: "https://www.spacetechconsulting.com/social-preview.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "SpaceTech Consulting enterprise Yardi platform partner social preview" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://www.spacetechconsulting.com/who-we-serve/${loaderData?.property.slug}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${loaderData?.property.title} Yardi Consulting | SpaceTech Consulting` },
      { name: "twitter:description", content: loaderData?.property.overview },
      { name: "twitter:image", content: "https://www.spacetechconsulting.com/social-preview.jpg" },
      { name: "twitter:image:alt", content: "SpaceTech Consulting enterprise Yardi platform partner social preview" },
    ],
  }),
  component: PropertyTypeDetail,
});

function PropertyTypeDetail() {
  const { property } = Route.useLoaderData();
  const Icon = property.icon;

  return (
    <Layout>
      <section className="relative min-h-[60vh] overflow-hidden px-6 py-16 md:py-20 text-white">
        <img src={property.image} srcSet={property.imageSrcSet} sizes="100vw" alt={property.title} width={1024} height={768} decoding="async" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/78 to-[#0F172A]/35" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 72% 25%, rgba(6,182,212,0.28), transparent 38%)" }} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-200 backdrop-blur">
              <Icon className="h-4 w-4" /> {property.eyebrow}
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] md:text-6xl">{property.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">{property.overview}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-bold text-[#0F172A] shadow-glow transition-transform hover:scale-105">
                Discuss This Portfolio <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/who-we-serve" className="inline-flex items-center gap-2 rounded-2xl glass-dark px-7 py-4 font-bold text-white">
                All Property Types
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="hidden lg:block">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
              <img src={property.image} srcSet={property.imageSrcSet} sizes="45vw" alt="" loading="lazy" decoding="async" width={1024} height={768} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              <Sparkles className="h-3.5 w-3.5" /> Service Overview
            </span>
            <h2 className="mt-5 text-3xl font-extrabold text-[#0F172A] md:text-5xl">Built for the way your portfolio operates</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">{property.body}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {property.features.map((feature) => (
              <div key={feature.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-elegant card-lift">
                <CheckCircle2 className="h-5 w-5 text-[#2563EB]" />
                <h3 className="mt-4 font-extrabold text-[#0F172A]">{feature.title}</h3>
                <div className="mt-4 space-y-2">
                  {feature.items.map((item) => (
                    <p key={item} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-cyan-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-700">Benefits</span>
            <h2 className="mt-5 text-3xl font-extrabold text-[#0F172A] md:text-5xl">Operational gains your teams can feel</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {property.benefits.map((benefit) => (
              <div key={benefit} className="rounded-3xl border border-slate-100 bg-white p-7 shadow-elegant card-lift">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl gradient-primary text-lg font-extrabold text-white shadow-glow">{benefit[0]}</div>
                <p className="font-bold text-[#0F172A]">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#2563EB]">Process Timeline</span>
            <h2 className="mt-5 text-3xl font-extrabold text-[#0F172A] md:text-5xl">Practical consulting, clear ownership</h2>
          </div>
          <div className="space-y-4">
            {property.process.map((step, index) => (
              <div key={step} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-elegant">
                <div className="text-sm font-extrabold text-[#2563EB]">Step {index + 1}</div>
                <p className="mt-2 text-lg text-slate-600">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#0F172A] p-10 text-center text-white shadow-2xl md:p-16">
          <h2 className="text-4xl font-extrabold">Let's Optimize Your Yardi Platform</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">Ready to transform your Yardi ecosystem? Let's discuss how we can help you.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-bold text-[#0F172A] transition-transform hover:scale-105">
            Start the Conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
