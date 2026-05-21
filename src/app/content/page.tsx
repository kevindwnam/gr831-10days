import Image from "next/image";
import Link from "next/link";
import ReportDemo from "@/components/ReportDemo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "콘텐츠 & 학습 | 십일전략",
  description:
    "감독형 모의고사, 양방향 라이브 해설, 초정밀 성적표, 수요일 Q&A — 4대 핵심 시스템 안내.",
};

const systemsBefore = [
  {
    num: "01",
    sub: "실전보다 더 실전 같은",
    title: "감독형 온라인 모의고사",
    image: "/images/system/system-01-exam.png",
    body: "집에서 응시해도 긴장감은 최고조! 철저한 감독 하에 진행되어 실제 고사장과 동일한 환경에서 실전 감각을 극대화합니다.",
  },
  {
    num: "02",
    sub: "소통하며 만들어가는",
    title: "양방향 라이브 해설",
    image: "/images/system/system-02-live.png",
    body: "일방적인 인강은 그만! 강사진과 실시간으로 소통하며 헷갈렸던 문제와 개념을 그 자리에서 명쾌하게 해결합니다.",
  },
];

const systemsAfter = [
  {
    num: "04",
    sub: "심야의 밀착 케어",
    title: "수요일 밤 10시 30분 Q&A",
    image: "/images/system/system-04-qna.png",
    body: "공부하다 막히는 부분, 혼자 고민하지 마세요. 매주 수요일 밤 10시 30분, 여러분의 모든 질문을 속 시원하게 해결해주는 온라인 질문 클래스가 열립니다.",
  },
];

export default function ContentPage() {
  return (
    <div className="mx-auto max-w-lg px-5 py-6">
      {/* 상단 헤더 */}
      <div className="flex items-center">
        <Link href="/" className="text-sm text-brand-gray">
          &larr; 홈
        </Link>
      </div>
      <div className="mt-3 text-center">
        <h1 className="font-serif text-xl font-black">콘텐츠 &amp; 학습</h1>
        <p className="mt-1 text-sm text-brand-gray">
          모의고사 · 라이브해설 · 성적표 · Q&amp;A
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {/* 카드 1: 인트로 */}
        <div className="overflow-hidden rounded-2xl border-t-4 border-brand-red bg-white p-6">
          <h2 className="font-serif text-lg font-bold">
            빈틈없는 약술논술 합격 시스템
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-black">
            십일전략은 단순한 온라인 수업이 아닙니다. 실전 모의고사, 양방향
            라이브 해설, 1:1 맞춤 성적표, 심야 Q&amp;A까지 — 오프라인 이상의
            케어를 제공하는 4가지 핵심 시스템으로 합격을 뒷받침합니다.
          </p>
        </div>

        {/* SYSTEM 01, 02 */}
        {systemsBefore.map((s) => (
          <div key={s.num} className="rounded-2xl bg-white p-6">
            <div className="flex items-start justify-between">
              <span className="font-serif text-5xl font-black leading-none text-brand-red">
                {s.num}
              </span>
              <span className="pt-3 text-xs tracking-widest text-brand-gray">
                SYSTEM
              </span>
            </div>
            <p className="mt-3 text-sm font-bold text-brand-red">{s.sub}</p>
            <h3 className="mt-1 font-serif text-xl font-bold text-brand-black">
              {s.title}
            </h3>
            <div className="mt-4 overflow-hidden rounded-xl">
              <Image
                src={s.image}
                alt={s.title}
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-brand-black">
              {s.body}
            </p>
          </div>
        ))}

        {/* SYSTEM 03: 초정밀 성적 분석표 — 커스텀 2장 이미지 */}
        <div className="rounded-2xl bg-white p-6">
          <div className="flex items-start justify-between">
            <span className="font-serif text-5xl font-black leading-none text-brand-red">
              03
            </span>
            <span className="pt-3 text-xs tracking-widest text-brand-gray">
              SYSTEM
            </span>
          </div>
          <p className="mt-3 text-sm font-bold text-brand-red">
            내 약점을 꿰뚫어보는
          </p>
          <h3 className="mt-1 font-serif text-xl font-bold text-brand-black">
            초정밀 성적 분석표
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-brand-black">
            단순한 점수 확인을 넘어섭니다. 매 시험마다 문항별 분석과 취약점 진단이
            포함된 1:1 맞춤형 성적표를 제공하여, 확실한 성적 향상의 길을
            제시합니다.
          </p>

          {/* 인터랙티브 성적표 데모 */}
          <div className="mt-5">
            <ReportDemo />
          </div>
          <p className="mt-3 text-center text-xs text-brand-gray">
            학습 현황 · 성취도 · 문항별 분석까지 한눈에
          </p>
        </div>

        {/* SYSTEM 04 */}
        {systemsAfter.map((s) => (
          <div key={s.num} className="rounded-2xl bg-white p-6">
            <div className="flex items-start justify-between">
              <span className="font-serif text-5xl font-black leading-none text-brand-red">
                {s.num}
              </span>
              <span className="pt-3 text-xs tracking-widest text-brand-gray">
                SYSTEM
              </span>
            </div>
            <p className="mt-3 text-sm font-bold text-brand-red">{s.sub}</p>
            <h3 className="mt-1 font-serif text-xl font-bold text-brand-black">
              {s.title}
            </h3>
            <div className="mt-4 overflow-hidden rounded-xl">
              <Image
                src={s.image}
                alt={s.title}
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-brand-black">
              {s.body}
            </p>
          </div>
        ))}

        {/* 카드 6: 수업 방식 요약 */}
        <div className="rounded-2xl bg-white p-6">
          <h2 className="font-serif text-lg font-bold">수업 방식 요약</h2>
          <div className="mt-4 flex flex-col gap-3">
            {[
              "실전 감각 UP! 철저한 감독 하에 진행되는 실전 모의고사",
              "일방적 인강 NO! 묻고 답하며 이해하는 국/수 라이브 해설",
              "취약점 완벽 진단! 매 회차 정밀 분석표가 포함된 맞춤 성적표 제공",
              "궁금증 즉시 해결! 매주 수요일 밤 10시 30분 심야 온라인 Q&A",
            ].map((text) => (
              <div key={text} className="flex items-start">
                <span className="font-bold text-brand-red">✓</span>
                <span className="ml-2 text-sm text-brand-black">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 카드 7: 하단 CTA */}
        <div className="rounded-2xl bg-white p-6 text-center">
          <p className="text-base font-bold">수업이 더 궁금하신가요?</p>
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
