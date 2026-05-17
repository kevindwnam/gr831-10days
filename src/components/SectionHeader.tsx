interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="flex items-center">
      <div className="h-5 w-1 rounded bg-brand-red" />
      <span className="ml-2 text-lg font-bold text-brand-black">{title}</span>
      <div className="mx-3 flex-1 border-t border-brand-border" />
      <span className="text-sm text-brand-gray">{subtitle}</span>
    </div>
  );
}
