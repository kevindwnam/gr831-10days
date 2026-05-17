import Link from "next/link";
import CountUp from "@/components/CountUp";
import HonorContent from "./HonorContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "명예의 전당 | 26학년도 135명 합격생",
  description:
    "GR831약술형논술연구소 2026학년도 가천대 135명, 보건간호계열 34명 합격생 명단.",
};

export default function HonorPage() {
  return (
    <div className="mx-auto max-w-lg px-5 py-6">
      {/* 상단 헤더 */}
      <div className="flex items-center">
        <Link href="/" className="text-sm text-brand-gray">
          &larr; 홈
        </Link>
      </div>
      <div className="mt-3 text-center">
        <h1 className="font-serif text-xl font-black">명예의 전당</h1>
        <p className="mt-1 text-sm text-brand-gray">
          26학년도 135명 합격생
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {/* 카드 1: 핵심 숫자 */}
        <div className="overflow-hidden rounded-2xl border-t-4 border-brand-red bg-white p-6">
          <p className="text-center text-xs tracking-widest text-brand-gray">
            2026학년도 합격 실적
          </p>
          <div className="mt-3 grid grid-cols-2 divide-x divide-brand-border">
            <div className="py-3 text-center">
              <p className="font-serif text-5xl font-black text-brand-red">
                <CountUp target={135} />
              </p>
              <p className="mt-1 text-xs text-brand-gray">가천대학교 합격</p>
            </div>
            <div className="py-3 text-center">
              <p className="font-serif text-5xl font-black text-brand-red">
                <CountUp target={34} />
              </p>
              <p className="mt-1 text-xs text-brand-gray">
                보건간호계열 합격
              </p>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-brand-gray">
            GR831약술형논술연구소 2026학년도 합격생
          </p>
        </div>

        {/* 카드 2: 탭 + 합격생 리스트 (Client Component) */}
        <HonorContent />

        {/* 카드 3: 합격생 후기 placeholder */}
        <div className="rounded-2xl bg-white p-6">
          <h2 className="font-serif text-lg font-bold">합격생 후기</h2>
          <p className="mt-2 text-sm text-brand-gray">곧 공개됩니다</p>
          {/* TODO: 합격생 사진 + 한줄후기 받으면 교체 */}
          <div className="mt-4 rounded-xl bg-gray-50 p-6 text-center">
            <p className="text-3xl text-brand-gray">💬</p>
            <p className="mt-2 text-xs text-brand-gray">
              합격생들의 생생한 후기를 준비 중입니다
            </p>
          </div>
        </div>

        {/* 카드 4: 동기부여 + CTA */}
        <div className="rounded-2xl bg-brand-dark p-6 text-center text-white">
          <p className="font-serif text-2xl font-black">
            다음 합격, 당신입니다.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-300">
            GR831약술형논술연구소가 6년간 만들어온 합격의 길, 십일전략과 함께
            이어가세요.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href="#"
              className="flex-1 rounded-full bg-brand-red py-3 text-center text-sm font-bold text-white"
            >
              카카오톡 상담 &rarr;
            </a>
            <Link
              href="/curriculum"
              className="flex-1 rounded-full border border-white py-3 text-center text-sm font-bold text-white"
            >
              커리큘럼 보기
            </Link>
          </div>
        </div>
      </div>

      <div className="pb-12" />
    </div>
  );
}
