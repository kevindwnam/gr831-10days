import Image from "next/image";
import Link from "next/link";

const sitemapItems = [
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

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3">
        {/* Logo & Descriptor */}
        <div className="flex flex-col gap-3">
          <Image
            src="/images/logo-dark.png"
            alt="십일전략"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
          <span className="text-xs text-brand-gray">
            GR831약술형논술연구소 온라인 브랜드
          </span>
        </div>

        {/* Sitemap */}
        <nav className="grid grid-cols-3 gap-2">
          {sitemapItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-gray-300 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Kakao & Copyright */}
        <div className="flex flex-col gap-3 md:items-end">
          <a
            href="#"
            className="inline-block rounded-full bg-brand-red px-4 py-2 text-sm font-medium text-white"
          >
            카카오톡 채널
          </a>
          <p className="text-xs text-brand-gray">
            &copy; 2026 GR831약술형논술연구소 / 십일전략
          </p>
        </div>
      </div>
    </footer>
  );
}
