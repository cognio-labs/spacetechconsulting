import { Link } from "@tanstack/react-router";
import { Cloud, Building2, Linkedin, MessageCircle, Calendar, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#0F172A] text-slate-300 overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none"
           style={{ background: "radial-gradient(circle at 20% 0%, rgba(37,99,235,0.3), transparent 50%), radial-gradient(circle at 80% 100%, rgba(6,182,212,0.2), transparent 50%)" }} />
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="relative w-10 h-10 rounded-xl bg-white/10 backdrop-blur grid place-items-center">
              <Cloud className="w-5 h-5 text-white absolute -top-0.5" strokeWidth={2.5} />
              <Building2 className="w-4 h-4 text-white mt-2" strokeWidth={2.5} />
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-lg text-white">SpaceTech</div>
              <div className="text-[10px] tracking-[0.2em] text-cyan-400 font-semibold -mt-1">CONSULTING</div>
            </div>
          </div>
          <p className="text-sm text-slate-400 max-w-xs">
            Enterprise Yardi Consulting Partner. Bringing out the best in Yardi.
          </p>
          <div className="flex gap-2 mt-5">
            {["Australia", "India", "USA"].map((r) => (
              <span key={r} className="px-3 py-1 text-xs rounded-full bg-white/10 text-cyan-300 font-medium">{r}</span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {["Yardi Consulting","Reporting & BI","System Integrations","Automation","Managed Support","Data Migration"].map(s => (
              <li key={s}><Link to="/services" className="hover:text-cyan-400 transition-colors">{s}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-cyan-400">About Us</Link></li>
            <li><Link to="/who-we-serve" className="hover:text-cyan-400">Who We Serve</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-cyan-400" /> +1 (415) 870-8418</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-cyan-400" /> +61 468040481</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-cyan-400" /> India office: phone coming soon</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-cyan-400" /> info@spacetechconsulting.com</li>
          </ul>
          <div className="flex gap-2 mt-5">
            {[Linkedin, MessageCircle, Calendar].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#2563EB] grid place-items-center transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <span>(c) 2026 SpaceTech Consulting. All rights reserved.</span>
          <span>Enterprise Yardi Consulting Partner</span>
        </div>
      </div>
    </footer>
  );
}
