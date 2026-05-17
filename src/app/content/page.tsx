import Link from "next/link";

export default function ContentPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-5 text-center">
      <h1 className="font-serif text-2xl font-bold">콘텐츠 & 학습</h1>
      <p className="mt-3 text-sm text-brand-gray">이 페이지는 곧 공개됩니다</p>
      <Link href="/" className="mt-6 text-sm font-medium text-brand-red">
        &larr; 홈으로 돌아가기
      </Link>
    </div>
  );
}
