import Link from "next/link";

interface MenuCardProps {
  icon: string;
  title: string;
  subtitle: string;
  href: string;
}

export default function MenuCard({ icon, title, subtitle, href }: MenuCardProps) {
  return (
    <Link
      href={href}
      className="flex items-center rounded-2xl border border-brand-border bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-3xl">
        {icon}
      </div>
      <div className="ml-4 flex-1">
        <p className="text-lg font-bold text-brand-black">{title}</p>
        <p className="mt-1 text-sm text-brand-gray">{subtitle}</p>
      </div>
      <span className="text-brand-gray">&gt;</span>
    </Link>
  );
}
