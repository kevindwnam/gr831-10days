import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-6">
      <Link href="/" className="flex flex-col items-center">
        <Image
          src="/images/logo-light.jpg"
          alt="십일전략"
          width={120}
          height={36}
          className="h-9 w-auto"
          priority
        />
        <span className="mt-1 text-xs text-brand-gray">
          GR831약술형논술연구소 온라인 브랜드
        </span>
      </Link>
    </header>
  );
}
