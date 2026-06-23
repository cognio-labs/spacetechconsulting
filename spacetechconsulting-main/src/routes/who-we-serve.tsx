import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import { ArrowRight } from "lucide-react";
import { visiblePropertyTypes } from "@/data/propertyTypes";

export const Route = createFileRoute("/who-we-serve")({
  head: () => ({
    meta: [
      { title: "Who We Serve — Yardi Expertise Across Property Types | SpaceTech" },
      { name: "description", content: "Yardi expertise across Commercial, Residential, and Mixed Portfolio property types." },
      { name: "author", content: "SpaceTech Consulting" },
      { property: "og:title", content: "Who We Serve — Yardi Expertise Across Property Types" },
      { property: "og:description", content: "Hands-on Yardi knowledge across every major real estate asset type." },
      { property: "og:image", content: "https://www.spacetechconsulting.com/social-preview.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "SpaceTech Consulting enterprise Yardi platform partner social preview" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.spacetechconsulting.com/who-we-serve" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Who We Serve — Yardi Expertise Across Property Types" },
      { name: "twitter:description", content: "Hands-on Yardi knowledge across every major real estate asset type." },
      { name: "twitter:image", content: "https://www.spacetechconsulting.com/social-preview.jpg" },
      { name: "twitter:image:alt", content: "SpaceTech Consulting enterprise Yardi platform partner social preview" },
    ],
  }),
  component: WhoWeServe,
});

function WhoWeServe() {
  return (
    <Layout>
      <section className="relative py-16 md:py-20 px-6 bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-50"
          style={{ background: "radial-gradient(circle at 30% 40%, rgba(37,99,235,0.4), transparent 50%), radial-gradient(circle at 70% 60%, rgba(6,182,212,0.3), transparent 50%)" }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-cyan-300 text-xs font-bold tracking-widest uppercase">Who We Serve</span>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05]">Yardi Expertise Across <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Property Types</span></h1>
          <p className="mt-6 text-lg text-slate-300">
            Every property type runs Yardi differently. We've operated inside these environments at enterprise scale, and we bring that hands-on knowledge to every engagement.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visiblePropertyTypes.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="group relative rounded-3xl overflow-hidden shadow-elegant card-lift bg-white">
              <Link to="/who-we-serve/$slug" params={{ slug: p.slug }} className="block h-full">
              <div className="relative h-60 overflow-hidden">
                <img src={p.image} srcSet={p.imageSrcSet} sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" alt={p.title} loading="lazy" decoding="async" width={1024} height={768}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl glass-dark grid place-items-center">
                    <p.icon className="w-5 h-5 text-cyan-300" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white drop-shadow-lg">{p.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-slate-600 leading-relaxed">{p.body}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#2563EB]">
                  View service detail <ArrowRight className="w-4 h-4" />
                </span>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl gradient-primary text-white font-bold shadow-glow hover:scale-105 transition-transform">
            See How We Help <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
