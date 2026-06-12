import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Cloud, Building2 } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/who-we-serve", label: "Who We Serve" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-elegant" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-18 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 rounded-xl gradient-primary grid place-items-center shadow-glow">
            <Cloud className="w-5 h-5 text-white absolute -top-0.5" strokeWidth={2.5} />
            <Building2 className="w-4 h-4 text-white mt-2" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <div className="font-extrabold text-lg text-[#0F172A]">SpaceTech</div>
            <div className="text-[10px] tracking-[0.2em] text-[#2563EB] font-semibold -mt-1">CONSULTING</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-[#2563EB] rounded-lg transition-colors"
              activeProps={{ className: "px-4 py-2 text-sm font-semibold text-[#2563EB] rounded-lg" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://cal.com/spacetech/30min"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-primary text-white text-sm font-semibold shadow-glow hover:scale-105 transition-transform"
          >
            Book a Call
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-lg hover:bg-slate-100">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-white/40">
          <nav className="flex flex-col p-4 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm font-semibold rounded-lg hover:bg-white/60"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
