import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "커리큘럼 | 십일전략",
  description:
    "모의고사 정규반, 개념반, 11월 파이널 10일까지 연간 학습 흐름을 안내합니다.",
};

export default function CurriculumPage() {
  return (
    <div className="mx-auto max-w-lg px-5 py-6">
      {/* 상단 헤더 영역 */}
      <div className="flex items-center">
        <Link href="/" className="text-sm text-brand-gray">
          &larr; 홈
        </Link>
      </div>
      <div className="mt-3 text-center">
        <h1 className="font-serif text-xl font-black">커리큘럼</h1>
        <p className="mt-1 text-sm text-brand-gray">
          연간 과정 · 시기별 목표
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {/* 카드 1: 인트로 */}
        <div className="overflow-hidden rounded-2xl border-t-4 border-brand-red bg-white p-6">
          <h2 className="font-serif text-lg font-bold">연간 학습 흐름</h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-black">
            십일전략은 5월부터 11월까지 약술형논술 실전 합격을 위한 체계적인
            커리큘럼을 운영합니다. 모의고사 정규반을 중심으로, 수학 개념이
            부족한 학생을 위한 개념반, 그리고 수능 직전 11월 파이널 10일
            집중반까지 — 시기별 목표에 맞춰 학습을 완성합니다.
          </p>
        </div>

        {/* 카드 2: 모의고사 정규반 */}
        <div className="overflow-hidden rounded-2xl border-t-4 border-brand-red bg-white p-6">
          <p className="text-xs font-bold tracking-widest text-brand-red">
            메인 트랙
          </p>
          <h2 className="mt-1 font-serif text-2xl font-black">
            모의고사 정규반
          </h2>
          <p className="mt-1 text-sm text-brand-gray">
            약술형논술 합격을 위한 실전 훈련
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-4">
            <div>
              <p className="text-xs text-brand-gray">운영 기간</p>
              <p className="text-sm font-bold">5월 ~ 10월</p>
            </div>
            <div>
              <p className="text-xs text-brand-gray">수업 일정</p>
              <p className="text-sm font-bold">매주 토요일 18:00 ~ 22:00</p>
            </div>
          </div>

          <p className="mt-5 text-base font-bold">타임 테이블</p>
          <div className="mt-2 overflow-hidden rounded-lg border border-brand-border">
            <div className="grid grid-cols-[1fr_1.2fr] bg-brand-dark text-xs text-white">
              <span className="px-3 py-2">시간</span>
              <span className="px-3 py-2">내용</span>
            </div>
            {[
              ["18:00 ~ 18:15 (15분)", "100점 만들기"],
              ["18:20 ~ 19:25 (65분)", "실전 모의고사 응시"],
              ["19:30 ~ 20:20 (50분)", "국어 해설강의"],
              ["20:20 ~ 22:00 (100분)", "수학 해설강의"],
            ].map(([time, content], i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_1.2fr] border-b border-brand-border text-sm last:border-b-0"
              >
                <span className="px-3 py-2 text-brand-gray">{time}</span>
                <span className="px-3 py-2 text-brand-black">{content}</span>
              </div>
            ))}
          </div>

          <p className="mt-5 text-base font-bold">수업 방식 미리보기</p>
          <div className="mt-2 flex flex-col gap-2">
            {[
              "실전감각 UP! 철저한 감독 하에 진행되는 모의고사",
              "일방적 인강 NO! 묻고 답하며 이해하는 국/수 라이브 해설",
              "취약점 진단! 매 회차 정밀 분석표가 포함된 맞춤 성적표 제공",
              "궁금증 즉시 해결! 매주 수요일 밤 10시30분, 심야 온라인 질문 클래스",
            ].map((text) => (
              <div key={text} className="flex items-start">
                <span className="font-bold text-brand-red">✓</span>
                <span className="ml-2 text-sm text-brand-black">{text}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-lg bg-red-50 p-3 text-xs text-brand-black">
            📌 정확한 개강일은 카카오톡 채널을 통해 안내드립니다.
          </div>
        </div>

        {/* 카드 3: 개념반 */}
        <div className="rounded-2xl bg-white p-6">
          <p className="text-xs font-bold tracking-widest text-brand-red">
            수학 개념 보강
          </p>
          <h2 className="mt-1 font-serif text-2xl font-black">개념반</h2>
          <p className="mt-1 text-sm text-brand-gray">
            모의고사 전에, 수학 개념부터 바로잡습니다
          </p>

          <div className="mt-4 rounded-xl bg-gray-50 p-4">
            <p className="text-sm font-bold text-brand-red">
              이런 학생들 주목!
            </p>
            <div className="mt-2 flex flex-col gap-1 text-sm text-brand-black">
              <p>· 모의고사 4등급 이하 학생</p>
              <p>· 실전 문제 풀이가 부담스럽고 어려운 학생</p>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2 rounded-xl bg-gray-50 p-4">
            {[
              ["수업 방식", "100% 양방향 소통 온라인 라이브 수업"],
              ["수업 일정", "매주 화(수Ⅰ) · 목(수Ⅱ) 22:30 ~ 23:30"],
              ["수업 목표", "주말 모의고사 대비 필수 개념 탑재"],
              ["수업 특징", "주말 모의고사 사전 예습 시스템"],
            ].map(([label, value]) => (
              <div key={label} className="flex items-start">
                <span className="w-20 shrink-0 text-xs text-brand-gray">
                  {label}
                </span>
                <span className="flex-1 text-sm font-bold">{value}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl bg-brand-dark p-4 text-center">
            <p className="text-sm font-bold text-white">
              모의고사 성적은 개념에서 시작됩니다.
            </p>
          </div>
        </div>

        {/* 카드 4: 11월 파이널 10일 */}
        <div className="relative rounded-2xl bg-brand-dark p-6 text-white">
          <span className="absolute right-4 top-4 rounded-full bg-brand-red px-2 py-1 text-xs text-white">
            Coming Soon
          </span>
          <p className="text-xs font-bold tracking-widest text-brand-red">
            수능 직전 마무리
          </p>
          <h2 className="mt-1 font-serif text-2xl font-black">
            11월 파이널 10일
          </h2>
          <p className="mt-1 text-sm text-gray-300">
            10일 집중 프로그램으로 약술형논술 마지막 승부
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-200">
            11월 한 달, 10일간의 집중 프로그램으로 그동안의 학습을 점검하고
            실전에 마지막으로 대비합니다. 가천대학교 약술형논술 출제 패턴에
            최적화된 모의고사와 해설, 그리고 1:1 케어로 마무리합니다.
          </p>
          <div className="mt-5 rounded-lg bg-white/10 p-3 text-xs">
            📌 정확한 일정과 신청 안내는 추후 공개됩니다.
          </div>
        </div>

        {/* 카드 5: 하단 CTA */}
        <div className="rounded-2xl bg-white p-6 text-center">
          <p className="text-base font-bold">더 궁금한 점이 있다면?</p>
          <p className="mt-2 text-sm text-brand-gray">
            카카오톡 채널에서 상세 안내를 받아보세요
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
