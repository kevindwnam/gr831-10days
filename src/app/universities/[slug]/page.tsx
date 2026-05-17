import Link from "next/link";
import { notFound } from "next/navigation";
import { universities, getUniversityBySlug } from "@/data/universities";
import type { Metadata } from "next";

export function generateStaticParams() {
  return universities.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const u = getUniversityBySlug(slug);
  if (!u) return {};
  return {
    title: `${u.name} ${u.transferType} | 십일전략`,
    description: `${u.name} ${u.transferType} 2027학년도 입시 정보 - 모집인원, 전형방법, 수능최저, 평가방법, 출제범위, 논술 특징 안내.`,
  };
}

export default async function UniversityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const u = getUniversityBySlug(slug);
  if (!u) notFound();

  return (
    <div className="mx-auto max-w-lg px-5 py-6">
      {/* 상단 헤더 */}
      <div className="flex items-center">
        <Link href="/universities" className="text-sm text-brand-gray">
          &larr; 대상 대학 안내
        </Link>
      </div>
      <div className="mt-3 text-center">
        {u.campus && (
          <p className="text-xs font-medium text-brand-gray">
            {u.campus}캠퍼스
          </p>
        )}
        <h1 className="font-serif text-2xl font-black">{u.name}</h1>
        <p className="mt-1 text-sm text-brand-gray">{u.transferType}</p>
        <div className="mt-2 flex items-center justify-center gap-2">
          {u.main && (
            <span className="rounded-full bg-brand-red px-3 py-1 text-xs font-bold text-white">
              MAIN
            </span>
          )}
          {u.healthcare && (
            <span className="rounded-full bg-brand-red px-3 py-1 text-xs font-bold text-white">
              보건간호
            </span>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {/* 카드 1: 핵심 정보 */}
        <div className="overflow-hidden rounded-2xl border-t-4 border-brand-red bg-white p-6">
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-xl bg-gray-50 p-3 text-center">
              <p className="text-xs text-brand-gray">모집인원</p>
              <p className="mt-1 text-sm font-bold">{u.recruit}</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-3 text-center">
              <p className="text-xs text-brand-gray">전형방법</p>
              <p className="mt-1 text-sm font-bold">{u.method}</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-3 text-center">
              <p className="text-xs text-brand-gray">수능최저</p>
              <p
                className={`mt-1 text-sm font-bold ${u.csat ? "text-brand-red" : ""}`}
              >
                {u.csat ? "있음" : "없음"}
              </p>
            </div>
          </div>
        </div>

        {/* 카드 2: 수능최저 상세 */}
        {u.csat && u.csatRequirements.length > 0 && (
          <div className="rounded-2xl bg-white p-6">
            <h2 className="font-serif text-lg font-bold">
              수능최저학력기준 상세
            </h2>
            <p className="mt-1 text-xs text-brand-gray">
              모집단위별로 상이할 수 있습니다
            </p>
            <div className="mt-4 flex flex-col gap-2">
              {u.csatRequirements.map((req, i) => (
                <div key={i} className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm font-bold text-brand-red">
                    {req.category}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-brand-black">
                    {req.requirement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 카드 3: 평가방법 */}
        <div className="rounded-2xl bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-lg font-bold">평가방법</h2>
            <span className="text-xs text-brand-gray">
              {u.examYearBasis}
            </span>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            {u.examItems.map((item, i) => (
              <div key={i} className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-bold text-brand-red">
                  {item.category}
                </p>
                <p className="mt-1 text-base font-bold">{item.questions}</p>
                {item.perScore && (
                  <p className="mt-1 text-sm text-brand-gray">
                    {item.perScore}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl bg-brand-dark p-3 text-center">
            <p className="text-sm font-bold text-white">
              시험시간 {u.examTime}
            </p>
          </div>
          {u.examFormat && (
            <p className="mt-2 text-center text-xs text-brand-gray">
              * {u.examFormat}
            </p>
          )}
          {u.examNote && (
            <p className="mt-2 text-xs leading-relaxed text-brand-gray">
              * {u.examNote}
            </p>
          )}
        </div>

        {/* 카드 4: 출제범위 */}
        <div className="rounded-2xl bg-white p-6">
          <h2 className="font-serif text-lg font-bold">출제범위</h2>
          <div className="mt-4 flex flex-col gap-3">
            {u.scopes.map((s, i) => (
              <div key={i}>
                <div className="flex items-start">
                  <span className="inline-block rounded bg-brand-red px-2 py-1 text-xs font-bold text-white">
                    {s.subject}
                  </span>
                  <span className="ml-2 text-sm text-brand-black">
                    {s.detail}
                  </span>
                </div>
                {s.forCategory && (
                  <p className="mt-1 block text-xs text-brand-gray">
                    ({s.forCategory})
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 카드 5: 평가기준 */}
        {u.evaluationCriteria && u.evaluationCriteria.length > 0 && (
          <div className="rounded-2xl bg-white p-6">
            <h2 className="font-serif text-lg font-bold">평가기준</h2>
            <p className="mt-1 text-xs text-brand-gray">
              각 과목별 답안 작성 시 주의 사항
            </p>
            <div className="mt-4 flex flex-col gap-2">
              {u.evaluationCriteria.map((ec, i) => (
                <div key={i} className="rounded-xl bg-gray-50 p-4">
                  <p className="font-serif text-base font-bold text-brand-red">
                    {ec.subject}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed">
                    {ec.criteria}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 카드 6: 논술 특징 */}
        <div className="rounded-2xl bg-brand-dark p-6 text-white">
          <h2 className="font-serif text-lg font-bold">
            {u.shortName} 논술 특징
          </h2>
          <p className="mt-4 text-sm leading-relaxed">{u.feature}</p>
        </div>

        {/* 카드 7: 보건간호계열 */}
        {u.healthcare && u.healthcareDepts && u.healthcareDepts.length > 0 && (
          <div className="rounded-2xl bg-white p-6">
            <p className="text-xs font-bold tracking-widest text-brand-red">
              보건간호계열 운영
            </p>
            <h2 className="mt-1 font-serif text-lg font-bold">
              {u.shortName} 보건간호 학과
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {u.healthcareDepts.map((dept) => (
                <span
                  key={dept}
                  className="rounded-full bg-red-50 px-3 py-1 text-sm font-bold text-brand-red"
                >
                  {dept}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 카드 8: 다른 대학 */}
        <div className="rounded-2xl bg-white p-6 text-center">
          <p className="text-base font-bold">
            다른 대학 정보도 확인하세요
          </p>
          <p className="mt-1 text-sm text-brand-gray">
            15개 대학 전체 리스트
          </p>
          <Link
            href="/universities"
            className="mt-4 inline-block rounded-full bg-brand-red px-6 py-3 font-bold text-white"
          >
            전체 대학 보기 &rarr;
          </Link>
        </div>

        {/* 카드 9: CTA */}
        <div className="rounded-2xl bg-white p-6 text-center">
          <p className="text-base font-bold">이 대학 입시가 궁금하신가요?</p>
          <p className="mt-2 text-sm text-brand-gray">
            카카오톡 채널에서 상세 안내드립니다
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
