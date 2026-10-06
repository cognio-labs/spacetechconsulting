import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const THEME_STORAGE_KEY = "spacetech-theme";

function getInitialTheme() {
  if (typeof window === "undefined") return false;

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === "dark") return true;
  if (savedTheme === "light") return false;

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

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
  const [dark, setDark] = useState(getInitialTheme);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const theme = dark ? "dark" : "light";
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
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
          <picture>
            <source srcSet="/optimized/nav-logo-400.avif 400w, /optimized/nav-logo-600.avif 600w" type="image/avif" />
            <source srcSet="/optimized/nav-logo-400.webp 400w, /optimized/nav-logo-600.webp 600w" type="image/webp" />
            <img
              src="/optimized/nav-logo-600.webp"
              srcSet="/optimized/nav-logo-400.webp 400w, /optimized/nav-logo-600.webp 600w"
              sizes="(min-width: 1280px) 212px, (min-width: 1024px) 198px, (min-width: 640px) 168px, 148px"
              alt="SpaceTech Consulting logo"
              width={220}
              height={58}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-auto w-[148px] max-w-none shrink-0 object-left drop-shadow-[0_2px_3px_rgba(15,23,42,0.1)] [image-rendering:auto] sm:w-[168px] lg:w-[198px] xl:w-[212px]"
            />
          </picture>
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
            type="button"
            onClick={() => setDark((d) => !d)}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={dark}
            title={dark ? "Use light theme" : "Use dark theme"}
            data-theme-toggle
            className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 shadow-sm transition-[background-color,border-color,color,box-shadow,transform] duration-200 hover:border-slate-300 hover:bg-white hover:text-slate-900 hover:shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:border-slate-600/80 dark:bg-slate-800 dark:text-cyan-200 dark:hover:border-cyan-400/50 dark:hover:bg-slate-700 dark:hover:text-cyan-100 dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-slate-950 select-none"
          >
            <span
              className="absolute inset-0 grid place-items-center transition-all duration-300"
              style={{ opacity: dark ? 0 : 1, transform: dark ? "rotate(90deg) scale(0.5)" : "rotate(0deg) scale(1)" }}
            >
              <Moon className="h-[17px] w-[17px]" />
            </span>
            <span
              className="absolute inset-0 grid place-items-center transition-all duration-300"
              style={{ opacity: dark ? 1 : 0, transform: dark ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.5)" }}
            >
              <Sun className="h-[17px] w-[17px]" />
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
            type="button"
            onClick={() => setOpen(!open)}
            className="lg:hidden grid h-10 w-10 shrink-0 place-items-center rounded-xl text-slate-800 hover:bg-slate-100 active:scale-95 transition-all dark:text-slate-200 dark:hover:bg-slate-800"
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
