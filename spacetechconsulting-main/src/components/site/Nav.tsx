import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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

  useEffect(() => {
    localStorage.setItem("spacetech-theme", "light");
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] border-b backdrop-blur-[18px] transition-all duration-300 ${
        scrolled
          ? "border-slate-200 bg-white/95 shadow-[0_12px_30px_rgba(15,23,42,0.12)]"
          : "border-slate-200 bg-white/92 shadow-[0_8px_28px_rgba(15,23,42,0.08)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[90px] py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-1.5 group">
          <img
            src="/space-tech-logo-mark.png"
            alt="SpaceTech Consulting logo"
            className="h-[70px] w-[132px] object-contain sm:h-[78px] sm:w-[148px]"
          />
          <div className="leading-tight hidden min-[420px]:block">
            <div className="font-extrabold text-base text-[#0F172A] sm:text-lg">SpaceTech</div>
            <div className="text-[8px] sm:text-[9px] tracking-[0.24em] text-[#22C55E] font-bold -mt-0.5">CONSULTING</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50/90 px-2 py-1.5 shadow-sm backdrop-blur">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 xl:px-4 py-2 text-sm font-semibold rounded-full transition-colors text-slate-700 hover:text-[#2563EB]"
              activeProps={{ className: "px-3 xl:px-4 py-2 text-sm font-semibold rounded-full text-[#2563EB] bg-[rgba(37,99,235,0.1)]" }}
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
            className="hidden sm:inline-flex items-center gap-2 rounded-[14px] bg-[linear-gradient(135deg,#1E40AF,#2563EB)] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.25)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            Book a Call
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-lg text-slate-800 hover:bg-slate-100" aria-label="Toggle navigation">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white/98 shadow-elegant backdrop-blur-[18px]">
          <nav className="flex flex-col p-4 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm font-semibold rounded-lg text-slate-700 hover:bg-slate-100"
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
