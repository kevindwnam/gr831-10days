import Link from "next/link";

export default function Header() {
  return (
    <header className="py-4">
      <Link href="/" className="flex justify-center">
        <span className="text-sm font-bold text-brand-black">십일전략</span>
      </Link>
    </header>
  );
}
