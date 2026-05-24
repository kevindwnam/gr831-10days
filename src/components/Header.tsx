import Link from "next/link";

export default function Header() {
  return (
    <header className="py-6">
      <div className="mx-auto max-w-lg px-5 text-center">
        <Link href="/" className="inline-block">
          <div className="font-serif text-4xl tracking-tight">
            <span className="font-black text-brand-red">十日</span>
            <span className="font-bold text-brand-black">전략</span>
          </div>
        </Link>
        <p className="mt-2 text-sm tracking-wider text-brand-gray">
          약술형논술 합격 시스템
        </p>
      </div>
    </header>
  );
}
