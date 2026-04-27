"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { navGroups, site } from "@/lib/site";

const NAV_OFFSET = 92;

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const isSubPage = pathname !== "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToHash(href: string) {
    const element = document.querySelector(href);
    if (!element) return;
    const top = element.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  }

  function handleHomeHash(event: MouseEvent<HTMLAnchorElement>, href: string) {
    setMenuOpen(false);
    if (!href.startsWith("#")) return;

    if (isSubPage) {
      event.preventDefault();
      router.push(`/${href}`);
      return;
    }

    event.preventDefault();
    scrollToHash(href);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled || isSubPage
          ? "border-b border-white/10 bg-ink/96 shadow-xl backdrop-blur"
          : "bg-[linear-gradient(180deg,rgba(20,32,51,0.58),rgba(20,32,51,0))]"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={(event) => handleHomeHash(event, "#home")}
          className="focus-ring flex items-center gap-3 rounded-lg"
          aria-label={site.name}
        >
          <Image
            src="/bbbc/red-logo.png"
            alt=""
            width={48}
            height={48}
            className="size-12"
          />
          <div className="hidden sm:block">
            <p className="display-serif text-2xl leading-none text-white">
              {site.shortName}
            </p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gold-light">
              Bellingham Bible Baptist Church
            </p>
          </div>
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {navGroups.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="focus-ring rounded-lg px-3 py-2 text-sm font-bold text-white drop-shadow-sm transition hover:bg-white/12"
                style={{ color: "white" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="#plan-your-visit"
              onClick={(event) => handleHomeHash(event, "#plan-your-visit")}
              className="focus-ring ml-2 rounded-lg bg-gold px-5 py-3 text-sm font-extrabold text-ink transition hover:bg-gold-light"
            >
              Plan Your Visit
            </a>
          </li>
        </ul>

        <div className="ml-auto flex items-center gap-2 xl:hidden">
          <Link
            href="/events"
            className="focus-ring rounded-lg border border-white/24 bg-white/10 px-4 py-3 text-xs font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-white/18"
            style={{ color: "white" }}
          >
            Events
          </Link>
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="focus-ring rounded-lg border border-white/18 p-3"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span className="block h-0.5 w-6 bg-white" />
            <span className="mt-1.5 block h-0.5 w-6 bg-white" />
            <span className="mt-1.5 block h-0.5 w-6 bg-white" />
          </button>
        </div>

        <div
          className={`fixed top-[72px] right-4 left-4 border border-white/12 bg-ink p-4 shadow-2xl transition xl:hidden ${
            menuOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
          }`}
        >
          <div className="grid gap-2 sm:grid-cols-2">
            {navGroups.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="focus-ring rounded-lg px-4 py-3 font-semibold text-white transition hover:bg-white/10"
                style={{ color: "white" }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#plan-your-visit"
              onClick={(event) => handleHomeHash(event, "#plan-your-visit")}
              className="focus-ring rounded-lg bg-gold px-4 py-3 text-center font-extrabold text-ink"
            >
              Plan Your Visit
            </a>
            <Link
              href="/live"
              onClick={() => setMenuOpen(false)}
              className="focus-ring rounded-lg border border-white/14 px-4 py-3 text-center font-semibold text-white"
              style={{ color: "white" }}
            >
              Attend Online
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
