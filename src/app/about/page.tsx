import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "십일전략 소개 | GR831이 만든 공식 온라인 브랜드",
  description:
    "2026학년도 135명 합격을 만든 GR831약술형논술연구소의 공식 온라인 브랜드, 십일전략을 소개합니다.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-lg px-5 py-6">
      {/* 상단 헤더 영역 */}
      <div className="flex items-center">
        <Link href="/" className="text-sm text-brand-gray">
          &larr; 홈
        </Link>
      </div>
      <div className="mt-3 text-center">
        <h1 className="font-serif text-xl font-black">십일전략 소개</h1>
        <p className="mt-1 text-sm text-brand-gray">
          GR831이 만든 공식 온라인 브랜드
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {/* 카드 1: GR831 관계 */}
        <div className="overflow-hidden rounded-2xl border-t-4 border-brand-red bg-white p-6">
          <h2 className="font-serif text-lg font-bold">
            십일전략은 GR831의 온라인 브랜드입니다
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-black">
            십일전략은 신생 브랜드가 아닙니다. 2026학년도 가천대학교 135명
            합격을 만들어낸 GR831약술형논술연구소가 직접 운영하는 공식 온라인
            브랜드입니다.
          </p>
          <div className="mt-4 flex items-center justify-center">
            <Image
              src="/images/logo-transparent.png"
              alt="십일전략"
              width={140}
              height={48}
              className="h-12 w-auto"
            />
            <span className="mx-3 text-2xl text-brand-gray">&times;</span>
            <Image
              src="/images/logo-gr831.png"
              alt="GR831 약술형논술 연구소"
              width={180}
              height={60}
              className="h-[60px] w-auto"
            />
          </div>
        </div>

        {/* 카드 2: 3가지 검증 */}
        <div className="rounded-2xl bg-white p-6">
          <h2 className="font-serif text-lg font-bold">
            검증된 시스템, 그대로.
          </h2>
          <div className="mt-4 flex flex-col gap-4">
            {[
              {
                num: "1",
                title: "검증된 콘텐츠",
                desc: "GR831이 6년간 축적한 약술형논술 커리큘럼을 그대로 사용합니다.",
              },
              {
                num: "2",
                title: "검증된 강사진",
                desc: "가천대학교 약술형논술 자문위원 출신, GR831의 전문 강사진이 직접 진행합니다.",
              },
              {
                num: "3",
                title: "검증된 합격 노하우",
                desc: "2026학년도 135명 합격을 만든 시스템을 온라인으로 그대로 옮겼습니다.",
              },
            ].map((item) => (
              <div key={item.num} className="flex items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red font-bold text-white">
                  {item.num}
                </div>
                <div className="ml-4">
                  <p className="text-base font-bold">{item.title}</p>
                  <p className="mt-1 text-sm text-brand-gray">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 카드 3: 합격 실적 강조 */}
        <div className="rounded-2xl bg-white p-6">
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
              <p className="mt-1 text-xs text-brand-gray">보건간호계열 합격</p>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-brand-gray">
            * GR831약술형논술연구소 2026학년도 합격 실적
          </p>
        </div>

        {/* 인강 vs 십일전략 비교 카드 */}
        <div className="rounded-2xl bg-white p-6">
          <p className="text-xs font-bold tracking-widest text-brand-red">
            WHY 십일전략
          </p>
          <h2 className="mt-1 font-serif text-lg font-bold">
            왜 인강이 아니라 라이브 수업인가
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-black">
            십일전략은 단순한 인강이 아닙니다. 실시간으로 강사진과 소통하며 학습
            데이터까지 분석되는 양방향 참여형 수업입니다.
          </p>

          <div className="mt-5 overflow-hidden rounded-xl border border-brand-border">
            <div className="grid grid-cols-3 gap-2 bg-gray-50 p-3 text-xs font-bold">
              <span className="text-brand-gray">구분</span>
              <span className="text-center text-brand-gray">기존 인강</span>
              <span className="text-center text-brand-red">십일전략</span>
            </div>
            <div className="divide-y divide-brand-border">
              {[
                ["소통", "일방적", "양방향 실시간"],
                ["몰입도", "낮음", "최고"],
                ["피드백", "거의 없음", "실시간 가능"],
                ["학습 데이터", "없음", "패턴 분석"],
                ["반복 학습", "녹화만", "라이브+녹화"],
              ].map(([label, old, strategy]) => (
                <div
                  key={label}
                  className="grid grid-cols-3 items-center gap-2 p-3 text-xs"
                >
                  <span className="font-bold">{label}</span>
                  <span className="text-center text-brand-gray">{old}</span>
                  <span className="text-center font-bold">{strategy}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 강사진 안내 카드 */}
        <div className="rounded-2xl bg-white p-6">
          <p className="text-xs font-bold tracking-widest text-brand-red">
            강사진
          </p>
          <h2 className="mt-1 font-serif text-lg font-bold">
            가천대 약술형논술 자문위원 출신
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-black">
            GR831의 강사진은 가천대학교 약술형논술 자문위원 출신을 비롯한 6년차
            전문가들로 구성되어 있습니다.
          </p>
          <Link
            href="/faculty"
            className="mt-4 flex items-center justify-between rounded-lg bg-gray-50 p-3"
          >
            <span className="text-sm font-bold">강사진 자세히 보기</span>
            <span className="text-brand-gray">&rarr;</span>
          </Link>
        </div>

        {/* 하단 CTA */}
        <div className="rounded-2xl bg-brand-dark p-6 text-center text-white">
          <p className="text-base font-bold">
            지금 카카오톡으로 상담받아보세요
          </p>
          <a
            href="http://pf.kakao.com/_kpsxfn" target="_blank" rel="noopener noreferrer"
            className="mt-3 inline-block rounded-full bg-brand-red px-6 py-3 font-bold text-white"
          >
            카카오톡 상담하기 &rarr;
          </a>
        </div>
      </div>

      <div className="pb-12" />
    </div>
  );
}
