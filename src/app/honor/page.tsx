"use client";

import { useState } from "react";
import Link from "next/link";
import CountUp from "@/components/CountUp";

const departments = [
  { dept: "금융빅데이터학부", names: ["고O은", "김O준", "김O민", "장O우", "정O준"], medical: false },
  { dept: "인공지능학과", names: ["고O남", "김O찬", "김O휘", "박O제", "박O민", "송O승", "이O우", "이O훈", "이O서", "장O웅", "조O형", "황O빈"], medical: false },
  { dept: "심리학과", names: ["남O웅", "유O은", "이O양"], medical: false },
  { dept: "기계공학부", names: ["김O윤", "양O우", "이O진", "이O빈", "이O호", "최O"], medical: false },
  { dept: "전기공학과", names: ["양O성", "유O우", "임O주"], medical: false },
  { dept: "간호학과", names: ["고O원", "김O원", "김O림", "남O림", "방O연", "서O준", "심O린", "윤O원", "한O민"], medical: true },
  { dept: "화공생명배터리공학부", names: ["김O석", "김O훈", "남O후", "박O율", "손O기", "이O서", "정O성", "조O송", "최O은"], medical: false },
  { dept: "도시계획조경학부", names: ["김O서"], medical: false },
  { dept: "건설환경공학과", names: ["김O수", "김O희", "정O원"], medical: false },
  { dept: "생명과학과", names: ["김O종", "박O우", "정O민"], medical: false },
  { dept: "건축공학과", names: ["강O은", "김O혁"], medical: false },
  { dept: "AI인문대학", names: ["강O지", "강O민", "김O연", "김O지", "김O연", "김O진", "문O원", "손O지", "양O훈", "양O웅", "유O연", "윤O진", "이O경", "이O형", "이O아", "이O솔", "임O호", "전O연", "조O호", "조O준", "지O우", "최O진", "황O은"], medical: false },
  { dept: "컴퓨터공학과", names: ["신O우", "심O서", "임O현", "한O희"], medical: false },
  { dept: "반도체대학", names: ["강O구", "김O진", "김O완", "백O진", "안O겸", "이O주", "이O우", "최O혁"], medical: false },
  { dept: "시스템반도체학과", names: ["김O민", "문O호", "조O우"], medical: false },
  { dept: "반도체물리학과", names: ["박O정", "이O찬"], medical: false },
  { dept: "스마트시티학과", names: ["노O찬", "박O준"], medical: false },
  { dept: "스마트팩토리학과", names: ["김O서", "이O경"], medical: false },
  { dept: "응급구조학과", names: ["김O은"], medical: true },
  { dept: "운동재활학과", names: ["백O재", "유O진", "서O빈", "신O숭", "오O영", "이O영"], medical: true },
  { dept: "유아교육학과", names: ["문O현", "이O준"], medical: false },
  { dept: "회계세무학과", names: ["박O형"], medical: false },
  { dept: "법과대학", names: ["나O원", "오O빈", "이O규", "조O희"], medical: false },
  { dept: "경영학과", names: ["심O민", "정O찬"], medical: false },
  { dept: "경제학과", names: ["문O원", "유O진", "정O혁", "한O준"], medical: false },
  { dept: "관광경영학과", names: ["권O민", "박O", "박O현", "박O찬"], medical: false },
  { dept: "건축학과", names: ["류O진"], medical: false },
  { dept: "치위생학과", names: ["김O린"], medical: true },
  { dept: "패션산업학과", names: ["김O배"], medical: false },
  { dept: "미디어커뮤니케이션학과", names: ["정O안", "최O민"], medical: false },
  { dept: "바이오나노학과", names: ["곽O서"], medical: false },
  { dept: "방사선학과", names: ["박O희", "정O준"], medical: true },
  { dept: "화학과", names: ["이O모"], medical: false },
  { dept: "신소재공학과", names: ["육O빈"], medical: false },
  { dept: "식품생명공학과", names: ["조O익"], medical: false },
];

export default function HonorPage() {
  const [tab, setTab] = useState<"all" | "medical">("all");

  const filtered =
    tab === "medical"
      ? departments.filter((d) => d.medical)
      : departments;

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

        {/* 카드 2: 탭 + 합격생 리스트 */}
        <div className="rounded-2xl bg-white p-6">
          <h2 className="font-serif text-lg font-bold">합격생 명단</h2>
          <p className="mt-2 text-sm text-brand-gray">
            학과별로 정리된 합격생
          </p>

          {/* 탭 */}
          <div className="mt-4 grid grid-cols-2 gap-2">
            <button
              onClick={() => setTab("all")}
              className={`rounded-xl py-3 text-sm font-bold transition ${
                tab === "all"
                  ? "bg-brand-red text-white"
                  : "bg-gray-50 text-brand-gray"
              }`}
            >
              전체 합격
            </button>
            <button
              onClick={() => setTab("medical")}
              className={`rounded-xl py-3 text-sm font-bold transition ${
                tab === "medical"
                  ? "bg-brand-red text-white"
                  : "bg-gray-50 text-brand-gray"
              }`}
            >
              보건간호계열
            </button>
          </div>

          {/* 리스트 */}
          <div className="mt-4">
            {filtered.map((d) => (
              <div
                key={d.dept}
                className="mb-3 rounded-xl bg-gray-50 p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-brand-black">
                    {d.dept}
                  </span>
                  <span className="text-xs text-brand-gray">
                    {d.names.length}명
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {d.names.map((name, i) => (
                    <span
                      key={i}
                      className="rounded-md bg-white px-2 py-1 text-xs text-brand-black"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-lg bg-gray-50 p-3 text-center text-xs text-brand-gray">
            * 합격생 명단은 본인 동의 하에 게재되었습니다
          </div>
        </div>

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
