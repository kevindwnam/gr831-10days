import Image from "next/image";
import Link from "next/link";
import ReportDemo from "@/components/ReportDemo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "콘텐츠 & 학습 | 십일전략",
  description:
    "47회 모의고사, 학습 자료, 매일국어 1컷, 스마트 학습웹, 성적표, Q&A — 6대 핵심 시스템 안내.",
};

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
          47회 모의고사 · 학습 자료 · 매일국어 · 학습웹 · 성적표 · Q&amp;A
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {/* 인트로 */}
        <div className="overflow-hidden rounded-2xl border-t-4 border-brand-red bg-white p-6">
          <h2 className="font-serif text-lg font-bold">
            빈틈없는 약술논술 합격 시스템
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-black">
            한 해 <strong>47회 모의고사</strong>를 중심으로, 정밀하게 설계된 학습
            자료, <strong>매일국어 1컷</strong>,{" "}
            <strong>QR 출석으로 자동 오픈되는 스마트 학습웹</strong>, 그리고 매주
            발송되는 <strong>정밀 성적 분석표</strong>까지 — 십일전략이 학생에게
            직접 제공하는 모든 학습 콘텐츠를 안내합니다.
          </p>
        </div>

        {/* SYSTEM 01: 47회 모의고사 시스템 */}
        <div className="rounded-2xl bg-white p-6">
          <div className="flex items-start justify-between">
            <span className="font-serif text-5xl font-black leading-none text-brand-red">
              01
            </span>
            <span className="pt-3 text-xs tracking-widest text-brand-gray">
              SYSTEM
            </span>
          </div>
          <p className="mt-3 text-sm font-bold text-brand-red">
            한 해 동안 받는
          </p>
          <h3 className="mt-1 font-serif text-xl font-bold text-brand-black">
            47회 모의고사 시스템
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-brand-black">
            한 해 47회의 모의고사로 약술형논술을 완성합니다. 정규 27회 + 파이널
            20회로 시기별 목표에 맞춰 단계적 학습이 진행됩니다.
          </p>

          {/* 정규 / 파이널 2박스 */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-gray-50 p-4 text-center">
              <p className="text-xs font-bold tracking-widest text-brand-red">
                REGULAR
              </p>
              <p className="mt-2 font-serif text-3xl font-black">27회</p>
              <p className="mt-1 text-xs font-bold">정규 모의고사</p>
              <p className="mt-0.5 text-[10px] text-brand-gray">5월~10월</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-4 text-center">
              <p className="text-xs font-bold tracking-widest text-brand-red">
                FINAL
              </p>
              <p className="mt-2 font-serif text-3xl font-black">20회</p>
              <p className="mt-1 text-xs font-bold">파이널 모의고사</p>
              <p className="mt-0.5 text-[10px] text-brand-gray">
                11월 (10일의 기적)
              </p>
            </div>
          </div>

          {/* 시기별 학습 단계 */}
          <div className="mt-5">
            <p className="mb-3 text-xs font-bold tracking-widest text-brand-red">
              시기별 학습 단계
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                ["S1 · 5월", "기본 확립 (감점 없는 답안 습관)"],
                ["S2 · 6월", "연계 학습 (수능특강 유형 정복)"],
                ["S3 · 7월", "심화 학습 (수능완성 복합 유형)"],
                ["S4 · 8월", "실전 강화 (시간 실수 관리)"],
                ["S5 · 9월", "전략 수립 (학생별 맞춤 전략)"],
                ["S6 · 10월", "파이널 전략 (실전 환경 연습)"],
              ].map(([stage, desc]) => (
                <div key={stage} className="rounded-lg bg-gray-50 p-3">
                  <p className="text-xs font-bold text-brand-red">{stage}</p>
                  <p className="mt-1 text-xs text-brand-black">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

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

        {/* SYSTEM 02: 4가지 학습 자료 */}
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
            모의고사와 함께 받는
          </p>
          <h3 className="mt-1 font-serif text-xl font-bold text-brand-black">
            4가지 학습 자료
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-brand-black">
            모의고사 1회분과 함께 제공되는 4가지 학습 자료로 단순한 시험을 넘어
            깊이 있는 복습과 반복 학습이 가능합니다.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-3">
            {[
              {
                icon: "📖",
                title: "해설지",
                desc: "가천대 OMR 답안지 양식 그대로 · 즉시 자가 채점 가능",
              },
              {
                icon: "📑",
                title: "강의노트",
                desc: "개념 정리 + 출제 패턴 · 시즌별 압축 가이드",
              },
              {
                icon: "📘",
                title: "워크북",
                desc: "매주 2배수 복습 · 손이 먼저 기억하는 풀이",
              },
              {
                icon: "✏️",
                title: "모범답안",
                desc: "채점 기준 + 부분 점수 명시 · 답안 작성 노하우",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-xl bg-gray-50 p-4"
              >
                <span className="text-xl">{item.icon}</span>
                <div>
                  <p className="text-sm font-bold">{item.title}</p>
                  <p className="mt-1 text-xs text-brand-gray">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SYSTEM 03: 스마트 학습웹 */}
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

        {/* SYSTEM 04: 매일국어 1컷 */}
        <div className="rounded-2xl bg-white p-6">
          <div className="flex items-start justify-between">
            <span className="font-serif text-5xl font-black leading-none text-brand-red">
              04
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

        {/* SYSTEM 05: 초정밀 성적 분석표 */}
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

        {/* SYSTEM 06: 수요일 밤 Q&A */}
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
            심야의 밀착 케어
          </p>
          <h3 className="mt-1 font-serif text-xl font-bold text-brand-black">
            수요일 밤 10시 30분 Q&amp;A
          </h3>
          <div className="mt-4 overflow-hidden rounded-xl">
            <Image
              src="/images/system/system-04-qna.png"
              alt="수요일 밤 10시 30분 Q&A"
              width={600}
              height={400}
              className="h-auto w-full object-cover"
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-brand-black">
            공부하다 막히는 부분, 혼자 고민하지 마세요. 매주 수요일 밤 10시 30분,
            여러분의 모든 질문을 속 시원하게 해결해주는 온라인 질문 클래스가
            열립니다.
          </p>
        </div>

        {/* 수업 방식 요약 */}
        <div className="rounded-2xl bg-white p-6">
          <h2 className="font-serif text-lg font-bold">수업 방식 요약</h2>
          <div className="mt-4 flex flex-col gap-3">
            {[
              "한 해 47회 모의고사! 정규 27회 + 파이널 20회로 단계적 완성",
              "검증된 적중률! 26학년도 수학 90% · 국어 80% 적중",
              "4가지 학습 자료! 해설지·강의노트·워크북·모범답안 즉시 제공",
              "스마트 학습! QR 출석으로 자동 오픈되는 개인 학습웹 + 해설영상 32개",
              "매일의 약속! 아침 8시 카톡으로 도착하는 매일국어 1컷",
              "매주 발송! 금요일 저녁 7시 정밀 분석표 + 수요일 밤 Q&A",
            ].map((text) => (
              <div key={text} className="flex items-start">
                <span className="font-bold text-brand-red">✓</span>
                <span className="ml-2 text-sm text-brand-black">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pb-12" />
    </div>
  );
}
