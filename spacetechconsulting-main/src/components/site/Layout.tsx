import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
      <path d="M12.04 2a9.86 9.86 0 0 0-8.48 14.9L2.5 22l5.22-1.03A9.88 9.88 0 1 0 12.04 2zm0 2a7.88 7.88 0 0 1 6.66 12.08 7.88 7.88 0 0 1-9.98 2.9l-.35-.17-3.23.64.66-3.15-.2-.36A7.88 7.88 0 0 1 12.04 4zm-3.1 4.18c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.26s.98 2.63 1.12 2.81c.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.56.57.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.12-.25-.18-.52-.32-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.6-1.5-1.87-.16-.27-.02-.42.12-.55.13-.13.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52z" />
    </svg>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-[#F8FAFC] dark:bg-slate-950">
      <Nav />
      <main className="flex-1 pt-[72px] lg:pt-[90px]">{children}</main>
      <Footer />
      <a
        href="https://wa.me/14158708418"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-[999] h-[52px] w-[52px] sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-2xl hover:scale-110 transition-transform"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}
