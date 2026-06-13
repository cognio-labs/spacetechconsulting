import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

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
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("spacetech-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const enabled = stored ? stored === "dark" : prefersDark;
    setDark(enabled);
    document.documentElement.classList.toggle("dark", enabled);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("spacetech-theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] border-b backdrop-blur-[18px] transition-all duration-300 ${
        dark
          ? scrolled
            ? "border-white/10 bg-[rgba(2,6,23,0.94)] shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
            : "border-white/10 bg-[rgba(10,18,35,0.9)] shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
          : scrolled
            ? "border-slate-200 bg-white/95 shadow-[0_12px_30px_rgba(15,23,42,0.12)]"
            : "border-slate-200 bg-white/92 shadow-[0_8px_28px_rgba(15,23,42,0.08)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[90px] py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-3 group">
          <img src={dark ? "/space-tech-logo-white.png" : "/space-tech-logo-mark.png"} alt="SpaceTech Consulting logo" className="h-[62px] w-[116px] object-contain sm:h-[70px] sm:w-[132px]" />
          <div className="leading-tight hidden min-[420px]:block">
            <div className={`font-extrabold text-base sm:text-lg ${dark ? "text-white" : "text-[#0F172A]"}`}>SpaceTech</div>
            <div className="text-[8px] sm:text-[9px] tracking-[0.24em] text-[#22C55E] font-bold -mt-0.5">CONSULTING</div>
          </div>
        </Link>

        <nav className={`hidden lg:flex items-center gap-1 rounded-full border px-2 py-1.5 shadow-sm backdrop-blur ${dark ? "border-white/10 bg-white/8" : "border-slate-200 bg-slate-50/90"}`}>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 xl:px-4 py-2 text-sm font-semibold rounded-full transition-colors ${dark ? "text-slate-200 hover:text-white" : "text-slate-700 hover:text-[#2563EB]"}`}
              activeProps={{ className: `px-3 xl:px-4 py-2 text-sm font-semibold rounded-full ${dark ? "text-white bg-[rgba(37,99,235,0.28)]" : "text-[#2563EB] bg-[rgba(37,99,235,0.1)]"}` }}
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
          <button
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className={`grid h-[46px] w-[46px] place-items-center rounded-full border shadow-sm transition-colors ${dark ? "border-white/10 bg-white/8 text-white hover:bg-white/14" : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-[#2563EB]"}`}
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button onClick={() => setOpen(!open)} className={`lg:hidden p-2 rounded-lg ${dark ? "text-white hover:bg-white/10" : "text-slate-800 hover:bg-slate-100"}`} aria-label="Toggle navigation">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className={`lg:hidden border-t shadow-elegant backdrop-blur-[18px] ${dark ? "border-white/10 bg-[rgba(2,6,23,0.96)]" : "border-slate-200 bg-white/98"}`}>
          <nav className="flex flex-col p-4 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 text-sm font-semibold rounded-lg ${dark ? "text-slate-100 hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"}`}
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
