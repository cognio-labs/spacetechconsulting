import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import navLogo from "@/assets/nav-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/who-we-serve", label: "Who We Serve" },
  { to: "/mission-vision-values", label: "Mission & Values" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("spacetech-theme") === "dark";
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("spacetech-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("spacetech-theme", "light");
    }
  }, [dark]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] border-b backdrop-blur-[18px] transition-all duration-300 ${
        scrolled
          ? "border-slate-200/80 bg-white/96 shadow-[0_1px_2px_rgba(15,23,42,0.02),0_4px_16px_rgba(15,23,42,0.05),0_12px_32px_rgba(15,23,42,0.04)] dark:border-slate-700/70 dark:bg-[#0B1120]/97 dark:shadow-[0_1px_2px_rgba(0,0,0,0.3),0_4px_16px_rgba(0,0,0,0.2)]"
          : "border-slate-200/50 bg-white/92 shadow-[0_1px_2px_rgba(15,23,42,0.01),0_2px_8px_rgba(15,23,42,0.03)] dark:border-slate-700/40 dark:bg-[#0B1120]/92 dark:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_2px_8px_rgba(0,0,0,0.1)]"
      }`}
    >
      <div className="mx-auto flex h-[58px] max-w-[90rem] items-center justify-between gap-3 px-4 sm:h-[64px] sm:px-6 lg:h-[72px] xl:gap-5">
        <Link
          to="/"
          className="group flex h-[42px] w-[152px] max-w-[calc(100vw-92px)] items-center transition-opacity active:opacity-90 sm:h-[46px] sm:w-[174px] lg:h-[50px] lg:w-[204px] xl:w-[218px]"
        >
          <img
            src={navLogo}
            alt="SpaceTech Consulting logo"
            className="h-auto w-[148px] max-w-none shrink-0 object-left drop-shadow-[0_2px_3px_rgba(15,23,42,0.1)] [image-rendering:auto] sm:w-[168px] lg:w-[198px] xl:w-[212px]"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-slate-50/90 px-2 py-1.5 shadow-sm backdrop-blur select-none dark:border-slate-700/60 dark:bg-slate-800/60">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3.5 py-2 text-sm font-semibold antialiased rounded-full transition-colors text-slate-700 hover:text-[#2563EB] active:scale-95 duration-200 xl:px-4 dark:text-slate-300 dark:hover:text-cyan-400"
              activeProps={{ className: "px-3.5 py-2 text-sm font-semibold antialiased rounded-full text-[#2563EB] bg-[rgba(37,99,235,0.08)] shadow-[inset_0_1px_2px_rgba(37,99,235,0.05)] xl:px-4 dark:text-cyan-400 dark:bg-cyan-400/10 dark:shadow-[inset_0_1px_2px_rgba(34,211,238,0.08)]" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={() => setDark((d) => !d)}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50 text-slate-500 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-white hover:text-slate-800 active:scale-95 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:bg-slate-700 dark:hover:text-cyan-300 select-none"
          >
            <span
              className="absolute inset-0 grid place-items-center transition-all duration-300"
              style={{ opacity: dark ? 0 : 1, transform: dark ? "rotate(90deg) scale(0.5)" : "rotate(0deg) scale(1)" }}
            >
              <Moon className="h-[15px] w-[15px]" />
            </span>
            <span
              className="absolute inset-0 grid place-items-center transition-all duration-300"
              style={{ opacity: dark ? 1 : 0, transform: dark ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.5)" }}
            >
              <Sun className="h-[15px] w-[15px]" />
            </span>
          </button>

          <a
            href="https://cal.com/spacetech/30min"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,#1E40AF,#2563EB)] px-5 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(37,99,235,0.22)] ring-1 ring-blue-400/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(37,99,235,0.28)] active:scale-[0.98] select-none dark:shadow-[0_8px_22px_rgba(37,99,235,0.18)]"
          >
            Book a Call
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden grid h-9 w-9 shrink-0 place-items-center rounded-xl text-slate-800 hover:bg-slate-100 active:scale-95 transition-all dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Toggle navigation"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-[18px] shadow-lg dark:border-slate-700 dark:bg-[#0F172A]/98">
          <nav className="flex flex-col p-4 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm font-semibold rounded-lg text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
              <a
                href="https://cal.com/spacetech/30min"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#1E40AF,#2563EB)] px-4 text-sm font-semibold text-white shadow-md"
              >
                Book a Call
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
