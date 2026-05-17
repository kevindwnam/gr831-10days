"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "소개", href: "/about" },
  { label: "약술형논술", href: "/yaksul" },
  { label: "대상대학", href: "/universities" },
  { label: "커리큘럼", href: "/curriculum" },
  { label: "콘텐츠&학습", href: "/content" },
  { label: "강사진", href: "/instructors" },
  { label: "합격실적", href: "/admissions" },
  { label: "명예의전당", href: "/honor" },
  { label: "FAQ", href: "/faq" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <Image
            src="/images/logo-light.jpg"
            alt="십일전략"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
          <span className="text-xs text-brand-gray">
            GR831약술형논술연구소 온라인 브랜드
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-black hover:text-brand-red"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#"
            className="rounded-full bg-brand-red px-4 py-2 text-sm font-medium text-white"
          >
            카카오톡 상담
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
        >
          <span
            className={`block h-0.5 w-6 bg-brand-black transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-brand-black transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-brand-black transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="border-t border-brand-border bg-white px-4 pb-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-sm font-medium text-brand-black"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#"
            className="mt-2 block rounded-full bg-brand-red px-4 py-2 text-center text-sm font-medium text-white"
          >
            카카오톡 상담
          </a>
        </nav>
      )}
    </header>
  );
}
