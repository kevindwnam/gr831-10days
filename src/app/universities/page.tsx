import Link from "next/link";
import { universities } from "@/data/universities";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "약술형논술 운영 대학 15개교 | 십일전략",
  description:
    "2027학년도 약술형논술 전형 운영 대학 15개교의 모집인원, 전형방법, 수능최저, 평가방법, 출제범위 안내.",
};

export default function UniversitiesPage() {
  return (
    <div className="mx-auto max-w-lg md:max-w-2xl lg:max-w-4xl px-5 py-6">
      {/* 상단 헤더 */}
      <div className="flex items-center">
        <Link href="/" className="text-sm text-brand-gray">
          &larr; 홈
        </Link>
      </div>
      <div className="mt-3 text-center">
        <h1 className="font-serif text-xl md:text-2xl font-black">대상 대학 안내</h1>
        <p className="mt-1 text-sm text-brand-gray">
          약술형논술 전형 운영 대학
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {/* 카드 1: 인트로 */}
        <div className="overflow-hidden rounded-2xl border-t-4 border-brand-red bg-white p-6">
          <h2 className="font-serif text-lg font-bold">
            약술형논술 전형 운영 대학
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-black">
            2027학년도 기준 총 15개 대학에서 약술형논술 전형을 운영합니다. 각
            대학별 입시 정보를 확인하세요.
          </p>
          <div className="mt-4 rounded-lg bg-red-50 p-3 text-xs text-brand-black">
            📌 메인 대학(MAIN) 및 보건간호계열 운영 대학은 별도 표시됩니다.
          </div>
        </div>

        {/* 카드 2: 대학 리스트 */}
        <div className="rounded-2xl bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-lg font-bold">전체 대학</h2>
            <span className="text-sm font-bold text-brand-red">
              총 {universities.length}개교
            </span>
          </div>
          <div className="mt-4 flex flex-col md:grid md:grid-cols-2 gap-2">
            {universities.map((u) => (
              <Link
                key={u.slug}
                href={`/universities/${u.slug}`}
                className={`relative flex items-center justify-between overflow-hidden rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                  u.main
                    ? "border-t-4 border-brand-red bg-red-50"
                    : u.healthcare
                      ? "border-l-4 border-brand-red bg-gray-50"
                      : "bg-gray-50"
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-base font-bold">{u.name}</p>
                    {u.main && (
                      <span className="rounded-full bg-brand-red px-2 py-0.5 text-xs font-bold text-white">
                        MAIN
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-xs text-brand-gray">
                    {u.transferType} · {u.recruit} · {u.method.split(" + ")[0]}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {u.healthcare && (
                    <span className="shrink-0 rounded-full bg-brand-red px-2 py-0.5 text-xs font-bold text-white">
                      보건간호
                    </span>
                  )}
                  <span className="text-brand-gray">&gt;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 카드 3: 합격 실적 */}
        <div className="rounded-2xl bg-white p-6">
          <p className="text-center text-xs tracking-widest text-brand-gray">
            2026학년도 합격 실적
          </p>
          <div className="mt-3 grid grid-cols-2 divide-x divide-brand-border">
            <div className="py-3 text-center">
              <p className="font-serif text-4xl font-black text-brand-red">
                135
              </p>
              <p className="mt-1 text-xs text-brand-gray">가천대학교 합격</p>
            </div>
            <div className="py-3 text-center">
              <p className="font-serif text-4xl font-black text-brand-red">
                34
              </p>
              <p className="mt-1 text-xs text-brand-gray">
                보건간호계열 합격
              </p>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-brand-gray">
            GR831약술형논술연구소 2026학년도 실적
          </p>
        </div>

        {/* 카드 4: CTA */}
        <div className="rounded-2xl bg-white p-6 text-center">
          <p className="text-base font-bold">
            지원 가능한 대학이 더 궁금하신가요?
          </p>
          <p className="mt-2 text-sm text-brand-gray">
            카카오톡 채널에서 상세히 안내드립니다
          </p>
          <a
            href="http://pf.kakao.com/_kpsxfn" target="_blank" rel="noopener noreferrer"
            className="mt-4 inline-block rounded-full bg-brand-red px-6 py-3 font-bold text-white"
          >
            카카오톡 상담하기 &rarr;
          </a>
        </div>
      </div>

      <div className="pb-12" />
    </div>
  );
}
