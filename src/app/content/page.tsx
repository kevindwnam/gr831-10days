import Image from "next/image";
import Link from "next/link";
import ReportDemo from "@/components/ReportDemo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "콘텐츠 & 학습 | 십일전략",
  description:
    "감독형 모의고사, 양방향 라이브 해설, 초정밀 성적표, 수요일 Q&A, 매일국어 1컷, 스마트 학습웹 — 6대 핵심 시스템 안내.",
};

const systemsBefore = [
  {
    num: "01",
    sub: "실전보다 더 실전 같은",
    title: "감독형 온라인 모의고사",
    image: "/images/system/system-01-exam.png",
    body: "집에서 응시해도 긴장감은 최고조! 철저한 감독 하에 진행되어 실제 고사장과 동일한 환경에서 실전 감각을 극대화합니다.",
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
          모의고사 · 라이브해설 · 성적표 · Q&amp;A · 매일국어 · 학습웹
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {/* 카드 1: 인트로 */}
        <div className="overflow-hidden rounded-2xl border-t-4 border-brand-red bg-white p-6">
          <h2 className="font-serif text-lg font-bold">
            빈틈없는 약술논술 합격 시스템
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-black">
            십일전략은 단순한 온라인 수업이 아닙니다. 실전 모의고사부터{" "}
            <strong>매일국어 1컷</strong>, 양방향 라이브 해설,{" "}
            <strong>QR 출석으로 자동 오픈되는 스마트 학습웹</strong>까지 —
            오프라인 이상의 케어를 제공하는{" "}
            <strong className="text-brand-red">6가지 핵심 시스템</strong>으로
            합격을 뒷받침합니다.
          </p>
        </div>

        {/* SYSTEM 01: 감독형 온라인 모의고사 */}
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

        {/* 출제 적중률 카드 (다크) */}
        <div className="relative rounded-2xl bg-brand-dark p-6 text-white">
          <span className="absolute right-4 top-4 rounded-full bg-brand-red px-3 py-1 text-xs font-bold text-white">
            26학년도
          </span>
          <p className="text-xs font-bold tracking-widest text-brand-red">
            HIT RATE · 출제 적중률
          </p>
          <h3 className="mt-1 font-serif text-2xl font-black">
            숫자가 증명하는 적중률
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-300">
            26학년도 가천대 시험과 GR831 파이널 모의고사를 비교한 실제 출제 문항
            매핑 분석 결과입니다.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-white/10 p-4 text-center">
              <p className="text-xs font-bold tracking-widest text-brand-red">
                MATH
              </p>
              <p className="mt-2 font-serif text-5xl font-black">
                90<span className="text-2xl">%</span>
              </p>
              <p className="mt-2 text-xs text-gray-300">수학 과목 적중</p>
              <p className="mt-1 text-[10px] text-gray-400">
                EBS 기반 유형·변형
              </p>
            </div>
            <div className="rounded-lg bg-white/10 p-4 text-center">
              <p className="text-xs font-bold tracking-widest text-brand-red">
                KOREAN
              </p>
              <p className="mt-2 font-serif text-5xl font-black">
                80<span className="text-2xl">%</span>
              </p>
              <p className="mt-2 text-xs text-gray-300">국어 과목 적중</p>
              <p className="mt-1 text-[10px] text-gray-400">지문 형태·요소</p>
            </div>
          </div>
          <p className="mt-4 text-center text-[10px] leading-relaxed text-gray-400">
            * 지문 자체는 EBS 연계 출제 특성상 100% 적중되며,
            <br />위 수치는{" "}
            <strong className="text-white">실제 시험 출제 문항 기준</strong>의
            적중률입니다.
          </p>
          <div className="mt-4 rounded-lg bg-white/10 p-3 text-center">
            <p className="text-xs font-bold text-brand-red">
              시험에서 마주친 문제, 학원에서 이미 풀어본 문제
            </p>
          </div>
        </div>

        {/* SYSTEM 02: 양방향 라이브 해설 + ClassIn 5기능 */}
        <div className="rounded-2xl bg-white p-6">
          <div className="flex items-start justify-between">
            <span className="font-serif text-5xl font-black leading-none text-brand-red">
              02
            </span>
            <span className="pt-3 text-xs tracking-widest text-brand-gray">
              SYSTEM
            </span>
          </div>
          <p className="mt-3 text-sm font-bold text-brand-red">
            소통하며 만들어가는
          </p>
          <h3 className="mt-1 font-serif text-xl font-bold text-brand-black">
            양방향 라이브 해설
          </h3>
          <div className="mt-4 overflow-hidden rounded-xl">
            <Image
              src="/images/system/system-02-live.png"
              alt="양방향 라이브 해설"
              width={600}
              height={400}
              className="h-auto w-full object-cover"
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-brand-black">
            일방적인 인강은 그만! 강사진과 실시간으로 소통하며 헷갈렸던 문제와
            개념을 그 자리에서 명쾌하게 해결합니다.
          </p>

          {/* ClassIn 5가지 기능 */}
          <div className="mt-5 rounded-xl bg-gray-50 p-4">
            <p className="mb-3 text-xs font-bold tracking-widest text-brand-red">
              CLASSIN · 5가지 기능
            </p>
            <div className="flex flex-col gap-2 text-xs">
              <div className="flex items-start gap-2">
                <span>📹</span>
                <span>
                  <strong>실시간 화상 강의</strong> · 강사·조교·학생 전원 캠 ON
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span>✏️</span>
                <span>
                  <strong>디지털 칠판 + 화판</strong> · 강사 칠판과 학생 필기
                  동기화
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span>📊</span>
                <span>
                  <strong>LMS 통합 관리</strong> · 과제 제출·채점·코멘트
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span>🎬</span>
                <span>
                  <strong>수업 녹화본 저장</strong> · 복습 시청 가능
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span>🎯</span>
                <span>
                  <strong>시험 감독 기능</strong> · 백색소음·타이머·캠 모니터링
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* SYSTEM 03: 초정밀 성적 분석표 */}
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
            포함된 1:1 맞춤형 성적표를{" "}
            <strong className="text-brand-red">
              매주 금요일 저녁 7시 카카오톡 채널
            </strong>
            로 자동 발송하여, 확실한 성적 향상의 길을 제시합니다.
          </p>

          {/* 인터랙티브 성적표 데모 */}
          <div className="mt-5">
            <ReportDemo />
          </div>
          <p className="mt-3 text-center text-xs text-brand-gray">
            학습 현황 · 성취도 · 문항별 분석까지 한눈에
          </p>
        </div>

        {/* SYSTEM 04: 수요일 밤 Q&A */}
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

        {/* SYSTEM 05: 매일국어 1컷 */}
        <div className="rounded-2xl bg-white p-6">
          <div className="flex items-start justify-between">
            <span className="font-serif text-5xl font-black leading-none text-brand-red">
              05
            </span>
            <span className="pt-3 text-xs tracking-widest text-brand-gray">
              SYSTEM
            </span>
          </div>
          <p className="mt-3 text-sm font-bold text-brand-red">
            매일 아침 8시, 15분의 약속
          </p>
          <h3 className="mt-1 font-serif text-xl font-bold text-brand-black">
            매일국어 1컷
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-brand-black">
            매일 아침 <strong>8시 카카오톡</strong>으로 도착하는{" "}
            <strong>9단계 카드뉴스</strong>. 15분이면 완주하는 분산학습으로 핵심
            지문이 머리에 자연스럽게 자리잡습니다.
          </p>

          {/* 9단계 학습 사이클 */}
          <div className="mt-5">
            <p className="mb-3 text-xs font-bold tracking-widest text-brand-red">
              9단계 학습 사이클
            </p>
            <div className="grid grid-cols-4 gap-2">
              <div className="rounded-lg bg-gray-50 p-3 text-center">
                <p className="text-xs font-bold">정독</p>
                <p className="mt-1 text-[10px] text-brand-gray">4단계</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-3 text-center">
                <p className="text-xs font-bold">재이해</p>
                <p className="mt-1 text-[10px] text-brand-gray">1단계</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-3 text-center">
                <p className="text-xs font-bold">정리</p>
                <p className="mt-1 text-[10px] text-brand-gray">2단계</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-3 text-center">
                <p className="text-xs font-bold">적용</p>
                <p className="mt-1 text-[10px] text-brand-gray">1단계</p>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-brand-gray">
              정독 → 재이해 → 정리 → 적용 사이클을 단{" "}
              <strong className="text-brand-black">15분</strong>에 완성
            </p>
          </div>

          {/* 누적 효과 강조 */}
          <div className="mt-5 rounded-xl bg-red-50 p-4 text-center">
            <p className="text-xs text-brand-gray">월~금 · 5~10월 누적</p>
            <p className="mt-1 text-base font-bold">
              핵심 지문{" "}
              <span className="font-serif text-3xl text-brand-red">130편</span>{" "}
              정복
            </p>
          </div>

          {/* 학생 인용 */}
          <div className="mt-4 rounded-lg border-l-4 border-brand-red bg-gray-50 p-3">
            <p className="text-xs italic text-brand-gray">
              &ldquo;꾸준히 반복이 답&rdquo;이라는 매일의 한 컷
            </p>
          </div>
        </div>

        {/* SYSTEM 06: 스마트 학습웹 */}
        <div className="rounded-2xl bg-white p-6">
          <div className="flex items-start justify-between">
            <span className="font-serif text-5xl font-black leading-none text-brand-red">
              06
            </span>
            <span className="pt-3 text-xs tracking-widest text-brand-gray">
              SYSTEM
            </span>
          </div>
          <p className="mt-3 text-sm font-bold text-brand-red">
            출석 한 번으로 시작되는
          </p>
          <h3 className="mt-1 font-serif text-xl font-bold text-brand-black">
            스마트 학습웹
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-brand-black">
            시험지 <strong>두 번째 페이지의 QR 코드</strong>로 출석 체크 한
            번이면, 수업이 끝나는 동시에{" "}
            <strong>학생 개인 학습 콘텐츠가 자동으로 열립니다</strong>. 시간 제약
            없이 무한 반복 학습이 가능합니다.
          </p>

          {/* 3단계 흐름 */}
          <div className="mt-5 space-y-3">
            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs font-bold tracking-widest text-brand-red">
                STEP 1
              </p>
              <p className="mt-1 text-sm font-bold">QR 출석 체크</p>
              <p className="mt-1 text-xs text-brand-gray">
                시험지 두 번째 페이지의 QR 코드로 출석
              </p>
              <div className="mt-2 space-y-0.5 border-t border-brand-border pt-2 text-xs text-brand-gray">
                <p>→ 학생 휴대폰으로 직접 체크</p>
                <p>→ 또는 학원에서 수기 체크</p>
              </div>
            </div>
            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs font-bold tracking-widest text-brand-red">
                STEP 2
              </p>
              <p className="mt-1 text-sm font-bold">학습 콘텐츠 자동 오픈</p>
              <p className="mt-1 text-xs text-brand-gray">
                수업 종료와 동시에 학생 개인별로 십일전략 자체 웹에서 자동 활성화
              </p>
            </div>
            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs font-bold tracking-widest text-brand-red">
                STEP 3
              </p>
              <p className="mt-1 text-sm font-bold">무한 반복 학습</p>
              <p className="mt-1 text-xs text-brand-gray">
                시간·횟수 제약 없이 원하는 만큼 반복 학습
              </p>
            </div>
          </div>

          {/* 5종 콘텐츠 */}
          <div className="mt-5">
            <p className="mb-3 text-xs font-bold tracking-widest text-brand-red">
              자동 오픈되는 학습 콘텐츠
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-gray-50 p-3 text-center text-xs font-bold">
                📖 해설지
              </div>
              <div className="rounded-lg bg-gray-50 p-3 text-center text-xs font-bold">
                ✏️ 모범답안
              </div>
              <div className="rounded-lg bg-gray-50 p-3 text-center text-xs font-bold">
                📑 강의노트
              </div>
              <div className="rounded-lg bg-gray-50 p-3 text-center text-xs font-bold">
                🎬 해설영상
              </div>
              <div className="col-span-2 rounded-lg bg-gray-50 p-3 text-center text-xs font-bold">
                💡 개념영상
              </div>
            </div>
          </div>

          {/* 강조 박스 */}
          <div className="mt-5 rounded-xl bg-red-50 p-4 text-center">
            <p className="text-sm font-bold text-brand-red">
              시간·공간 제약 없는 학습
            </p>
            <p className="mt-1 text-xs text-brand-gray">
              집에서도, 학원에서도, 언제든 다시 펼쳐보세요
            </p>
          </div>
        </div>

        {/* 수업 방식 요약 */}
        <div className="rounded-2xl bg-white p-6">
          <h2 className="font-serif text-lg font-bold">수업 방식 요약</h2>
          <div className="mt-4 flex flex-col gap-3">
            {[
              "실전 감각 UP! 철저한 감독 하에 진행되는 실전 모의고사",
              "검증된 적중률! 26학년도 수학 90%·국어 80% 적중",
              "일방적 인강 NO! 묻고 답하며 이해하는 국/수 라이브 해설",
              "취약점 완벽 진단! 매주 금요일 저녁 7시 정밀 분석표 발송",
              "매일의 약속! 아침 8시 카톡으로 도착하는 매일국어 1컷",
              "스마트 학습! QR 출석으로 자동 오픈되는 개인 학습웹",
            ].map((text) => (
              <div key={text} className="flex items-start">
                <span className="font-bold text-brand-red">✓</span>
                <span className="ml-2 text-sm text-brand-black">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 하단 CTA */}
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
