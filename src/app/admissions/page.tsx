import Link from "next/link";
import CountUp from "@/components/CountUp";

// TODO: 추후 합격 대학 데이터 받아서 교체
const universityPlaceholders = Array.from({ length: 15 }, (_, i) => i + 1);

export default function AdmissionsPage() {
  return (
    <>
      {/* 섹션 1: Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center bg-brand-dark px-6 py-16 text-white">
        <p className="text-sm font-medium tracking-widest text-brand-red">
          2026학년도 합격 실적
        </p>
        <h1 className="mt-6 text-center font-serif text-5xl font-black leading-tight md:text-7xl">
          GR831이 만든 합격,
          <br />
          십일전략이 잇습니다
        </h1>
        <div className="mt-16 flex flex-col items-center gap-12 md:flex-row md:gap-20">
          <div className="text-center">
            <p className="font-serif text-[10rem] font-black leading-none text-brand-red md:text-[14rem]">
              <CountUp target={135} />
            </p>
            <p className="mt-4 text-xl font-medium">명</p>
            <p className="text-sm text-gray-400">전체 합격</p>
          </div>
          <div className="hidden h-40 w-px bg-gray-700 md:block" />
          <div className="block h-px w-40 bg-gray-700 md:hidden" />
          <div className="text-center">
            <p className="font-serif text-[10rem] font-black leading-none text-brand-red md:text-[14rem]">
              <CountUp target={34} />
            </p>
            <p className="mt-4 text-xl font-medium">명</p>
            <p className="text-sm text-gray-400">보건간호계열 합격</p>
          </div>
        </div>
        <p className="mt-16 text-center text-sm text-brand-gray">
          GR831약술형논술연구소�� 6년 누적 노하���, 십일전략이 그대로
          이어받습니다.
        </p>
        <div className="mt-12 animate-bounce">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-gray-400"
          >
            <path
              d="M12 4v16m0 0l-6-6m6 6l6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* 섹션 2: 보건간호계열 별도 강조 */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div className="text-center md:text-left">
            <p className="font-serif text-9xl font-black text-brand-red">34</p>
            <p className="mt-2 text-2xl font-bold">명</p>
            <p className="text-lg text-brand-gray">보건간호계열 합격</p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-bold leading-tight">
              보건간호계열, 늘어나는 관심
            </h2>
            <p className="mt-6 leading-relaxed text-brand-gray">
              약술형논술 전형으로 진학하는 보건간호계열의 수요가 빠르게 늘어나고
              있습니다. 십일전략은 가천대를 비롯한 보건간호계열 지원 학생들에게도
              최적화된 커리큘럼을 ��공합니다.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-brand-gray">
              ※ 보���간호계열 합격생 34��은 별도 집계된 수치이며, 상단 135명과
              함께 십일전략(GR831)의 합격 실적을 구성합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 섹션 3: 합격 대학 */}
      <section className="bg-gray-50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-serif text-4xl font-bold">
            합격 대학
          </h2>
          <p className="mt-3 text-center text-brand-gray">
            GR831약술형논술연구소 2026학년도 합격생 진학 대학
          </p>
          <div className="mt-12 grid grid-cols-3 gap-4 md:grid-cols-5">
            {universityPlaceholders.map((n) => (
              <div
                key={n}
                className="flex aspect-square items-center justify-center rounded-lg border border-brand-border bg-white text-sm text-brand-gray"
              >
                [대학 로고]
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-brand-gray">
            * 정확한 합격 대학 ��스트는 추후 업데이트됩니다.
          </p>
        </div>
      </section>

      {/* 섹션 4: GR831 6년 누적 신��도 */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-serif text-4xl font-bold">
            6년의 노하우, 그대로.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-brand-gray">
            GR831약술형논���연구소는 6년 동안 약술형논술 전형 하나에만 집중해온
            전문기관입니다. 그 6년의 데이터, 커리큘럼, 강사진이 십일전략에
            그대로 담겨 있습니다.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              { num: "6년차", label: "전문기관" },
              { num: "135명", label: "2026학년도 합격" },
              { num: "34명", label: "보건���호계열 합격" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-brand-border p-6"
              >
                <p className="font-serif text-3xl font-black text-brand-red md:text-4xl">
                  {item.num}
                </p>
                <p className="mt-2 text-sm text-brand-gray">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 섹션 5: CTA */}
      <section className="bg-brand-red px-6 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">
            당신도 십일전략��� 다음 합격생입니다
          </h2>
          <p className="mt-4 text-lg opacity-90">
            지금 카카오톡 채널에서 상담받아보세요
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="rounded-full bg-white px-8 py-3 text-base font-medium text-brand-red"
            >
              카카오톡 상담하기
            </a>
            <Link
              href="/honor"
              className="rounded-full border border-white px-8 py-3 text-base font-medium text-white"
            >
              명예의 ���당 보기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
