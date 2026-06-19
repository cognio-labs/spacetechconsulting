import { Link } from "@tanstack/react-router";
import { Calendar, Phone, Mail, MapPin } from "lucide-react";
import { contactDetails } from "@/data/contactDetails";

const linkedInUrl = "https://www.linkedin.com/company/spacetech-consulting/";

const footerServices = [
  { label: "Yardi Consulting", href: "/services#yardi-consulting" },
  { label: "Reporting & BI", href: "/services#reporting-bi" },
  { label: "System Integrations", href: "/services#system-integrations" },
  { label: "Automation", href: "/services#automation" },
  { label: "Managed Support", href: "/services#managed-support" },
  { label: "Data Migration", href: "/services#data-migration" },
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.32 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.1 20.45H3.54V9H7.1v11.45z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M12.04 2a9.86 9.86 0 0 0-8.48 14.9L2.5 22l5.22-1.03A9.88 9.88 0 1 0 12.04 2zm0 2a7.88 7.88 0 0 1 6.66 12.08 7.88 7.88 0 0 1-9.98 2.9l-.35-.17-3.23.64.66-3.15-.2-.36A7.88 7.88 0 0 1 12.04 4zm-3.1 4.18c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.26s.98 2.63 1.12 2.81c.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.56.57.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.12-.25-.18-.52-.32-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.6-1.5-1.87-.16-.27-.02-.42.12-.55.13-.13.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-[#0F172A] text-slate-300 overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none"
           style={{ background: "radial-gradient(circle at 20% 0%, rgba(37,99,235,0.3), transparent 50%), radial-gradient(circle at 80% 100%, rgba(6,182,212,0.2), transparent 50%)" }} />
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="mb-3 flex -translate-y-2 items-center gap-3">
            <img src="/footer-logo-mark.png" alt="SpaceTech Consulting logo" className="h-24 w-40 shrink-0 object-contain object-left drop-shadow-[0_10px_22px_rgba(6,182,212,0.22)]" />
            <div className="min-w-0 leading-none">
              <div className="text-lg font-extrabold tracking-tight text-white">SpaceTech</div>
              <div className="mt-1 text-base font-extrabold tracking-tight text-[#22C55E]">Consulting</div>
            </div>
          </div>
          <p className="max-w-xs text-xs leading-5 text-slate-400">
            Enterprise Yardi Consulting Partner. Bringing out the best in Yardi.
          </p>
          <div className="flex gap-2 mt-5">
            {contactDetails.regions.map((r) => (
              <span key={r} className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-cyan-300">{r}</span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-base font-bold text-white">Services</h4>
          <ul className="space-y-2 text-sm">
            {footerServices.map((service) => (
              <li key={service.label}><a href={service.href} className="hover:text-cyan-400 transition-colors">{service.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-base font-bold text-white">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-cyan-400">About Us</Link></li>
            <li><Link to="/who-we-serve" className="hover:text-cyan-400">Who We Serve</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-base font-bold text-white">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-cyan-400" />
              <a href={contactDetails.phoneUsa.href} className="hover:text-cyan-400">{contactDetails.phoneUsa.label}</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-cyan-400" />
              <a href={contactDetails.phoneAustralia.href} className="hover:text-cyan-400">{contactDetails.phoneAustralia.label}</a>
            </li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan-400" /> {contactDetails.phoneIndia.label}</li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-cyan-400" />
              <a href={contactDetails.email.href} className="hover:text-cyan-400">{contactDetails.email.label}</a>
            </li>
          </ul>
          <div className="flex gap-2 mt-5">
            <a href={linkedInUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 transition-colors hover:bg-[#0A66C2]">
              <LinkedInIcon />
            </a>
            <a href={contactDetails.phoneAustralia.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid h-8 w-8 place-items-center rounded-lg bg-[#25D366] text-white transition-colors hover:bg-[#1EBE5D]">
              <WhatsAppIcon />
            </a>
            <a href="https://cal.com/spacetech/30min" target="_blank" rel="noreferrer" aria-label="Book a call" className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 transition-colors hover:bg-[#2563EB]">
              <Calendar className="w-4 h-4" />
              </a>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-[11px] text-slate-500">
          <span>(c) 2026 SpaceTech Consulting. All rights reserved.</span>
          <span>Enterprise Yardi Consulting Partner</span>
        </div>
      </div>
    </footer>
  );
}
