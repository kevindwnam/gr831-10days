"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Review } from "@/data/reviews";

const PAGE_SIZE = 5;

function getInitial(school: string): string {
  return school.charAt(0);
}

export default function ReviewsContent({ reviews }: { reviews: Review[] }) {
  const [activeSchool, setActiveSchool] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());

  const schoolCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const r of reviews) {
      counts[r.school] = (counts[r.school] || 0) + 1;
    }
    return counts;
  }, [reviews]);

  const schoolTabs = useMemo(() => {
    const sorted = Object.entries(schoolCounts).sort((a, b) => b[1] - a[1]);
    return [{ name: "전체", key: "all", count: reviews.length }, ...sorted.map(([name, count]) => ({ name, key: name, count }))];
  }, [schoolCounts, reviews.length]);

  const filtered = useMemo(
    () => (activeSchool === "all" ? reviews : reviews.filter((r) => r.school === activeSchool)),
    [activeSchool, reviews]
  );

  const displayed = filtered.slice(0, currentPage * PAGE_SIZE);
  const hasMore = displayed.length < filtered.length;
  const remaining = filtered.length - displayed.length;

  function handleSchoolChange(key: string) {
    setActiveSchool(key);
    setCurrentPage(1);
  }

  function toggleExpand(id: number) {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="mx-auto max-w-lg px-5 py-6">
      {/* 상단 헤더 */}
      <div className="flex items-center">
        <Link href="/" className="text-sm text-brand-gray">
          &larr; 홈
        </Link>
      </div>
      <div className="mt-3 text-center">
        <h1 className="font-serif text-xl font-black">합격 수기</h1>
        <p className="mt-1 text-sm text-brand-gray">
          26학년도 {reviews.length}명의 합격생 이야기
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {/* 카드 1: 인트로 */}
        <div className="overflow-hidden rounded-2xl border-t-4 border-brand-red bg-white p-6">
          <h2 className="font-serif text-lg font-bold">
            GR831 콘텐츠로 합격한 학생들의 이야기
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-black">
            2026학년도 가천대학교 135명을 비롯한 합격생들이 직접 작성한{" "}
            {reviews.length}개의 합격 수기를 모았습니다. GR831약술형논술연구소의
            콘텐츠가 어떻게 합격으로 이어졌는지, 실제 합격생들의 목소리를 통해
            확인하세요.
          </p>
          <div className="mt-4 rounded-lg bg-gray-50 p-3 text-xs text-brand-gray">
            * 모든 수기는 본인 동의 하에 게재되었습니다.
          </div>
        </div>

        {/* 카드 2: 학교별 필터 */}
        <div className="rounded-2xl bg-white p-4">
          <p className="mb-3 px-2 text-xs font-bold tracking-widest text-brand-gray">
            학교별로 보기
          </p>
          <div className="flex gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {schoolTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleSchoolChange(tab.key)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition ${
                  activeSchool === tab.key
                    ? "bg-brand-red text-white"
                    : "bg-gray-100 text-brand-gray"
                }`}
              >
                {tab.name} ({tab.count})
              </button>
            ))}
          </div>
        </div>

        {/* 후기 카드들 */}
        {filtered.length === 0 ? (
          <div className="py-12 text-center text-sm text-brand-gray">
            해당 학교의 후기가 없습니다
          </div>
        ) : (
          <>
            {displayed.map((r) => {
              const isExpanded = expandedIds.has(r.id);
              const isLong = r.testimony.length > 200;
              const text =
                isLong && !isExpanded
                  ? r.testimony.slice(0, 200) + "..."
                  : r.testimony;

              return (
                <div
                  key={r.id}
                  className="rounded-2xl border border-brand-border bg-white p-6"
                >
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red text-sm font-bold text-white">
                      {getInitial(r.school)}
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-bold text-brand-black">
                        {r.name}
                      </p>
                      <p className="mt-0.5 text-xs text-brand-gray">
                        {r.fullSchoolDept}
                      </p>
                    </div>
                  </div>
                  <div className="my-3 border-t border-brand-border" />
                  <p className="whitespace-pre-line text-sm leading-relaxed text-brand-black">
                    {text}
                  </p>
                  {isLong && (
                    <button
                      onClick={() => toggleExpand(r.id)}
                      className="mt-2 text-xs font-bold text-brand-red"
                    >
                      {isExpanded ? "접기" : "더보기"}
                    </button>
                  )}
                </div>
              );
            })}

            {hasMore && (
              <button
                onClick={() => setCurrentPage((p) => p + 1)}
                className="mx-auto rounded-full border-2 border-brand-red px-8 py-3 font-bold text-brand-red"
              >
                다음 {Math.min(PAGE_SIZE, remaining)}개 보기 (남은 {remaining}
                개)
              </button>
            )}
          </>
        )}

        {/* CTA */}
        <div className="rounded-2xl bg-brand-dark p-6 text-center text-white">
          <p className="font-serif text-2xl font-bold">
            다음 합격 수기의 주인공
          </p>
          <p className="mt-2 text-sm text-gray-300">
            당신의 이야기가 될 수 있습니다
          </p>
          <a
            href="http://pf.kakao.com/_kpsxfn"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-full bg-brand-red px-6 py-3 font-bold text-white"
          >
            카카오톡 상담하기 &rarr;
          </a>
        </div>
      </div>

      <div className="pb-12" />
    </div>
  );
}
