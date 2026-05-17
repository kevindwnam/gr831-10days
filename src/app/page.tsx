import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/CountUp";

export default function Home() {
  return (
    <>
      {/* 섹션 1: Hero */}
      <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 py-20 animate-[fadeIn_1s_ease-in]">
        <Image
          src="/images/logo-light.jpg"
          alt="십일전략"
          width={320}
          height={160}
          className="h-[120px] w-auto md:h-[160px]"
          priority
        />
        <p className="mt-4 text-sm text-brand-gray">
          GR831약술형논술연구소 온라인 브랜드
        </p>
        <h1 className="mt-8 text-center font-serif text-4xl font-black leading-tight md:text-5xl">
          2026학년도 135명 합격
        </h1>
        <p className="mt-4 font-serif text-3xl">따로, 또 같이.</p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#"
            className="rounded-full bg-brand-red px-8 py-3 text-base font-medium text-white"
          >
            카카오톡 상담하기
          </a>
          <Link
            href="/curriculum"
            className="rounded-full border border-brand-black px-8 py-3 text-base font-medium text-brand-black"
          >
            커리큘럼 보기
          </Link>
        </div>
      </section>

      {/* 섹션 2: 핵심 합격 실적 */}
      <section className="px-6 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm font-medium text-brand-gray">
            2026학년도 합격 실적
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-10 md:flex-row md:gap-16">
            <div className="text-center">
              <p className="font-serif text-7xl font-black text-brand-red md:text-8xl">
                <CountUp target={135} />
              </p>
              <p className="mt-2 text-lg font-medium">명</p>
              <p className="text-sm text-brand-gray">전체 합격</p>
            </div>
            <div className="hidden h-24 w-px bg-brand-border md:block" />
            <div className="block h-px w-24 bg-brand-border md:hidden" />
            <div className="text-center">
              <p className="font-serif text-7xl font-black text-brand-red md:text-8xl">
                <CountUp target={34} />
              </p>
              <p className="mt-2 text-lg font-medium">명</p>
              <p className="text-sm text-brand-gray">보건간호계열 합격</p>
            </div>
          </div>
          <p className="mt-12 text-center leading-relaxed text-brand-gray">
            GR831약술형논술연구소의 6년 누적 노하우, 십일전략이 그대로
            이어받습니다.
          </p>
          <div className="mt-4 text-right">
            <Link
              href="/admissions"
              className="text-sm font-medium text-brand-black hover:text-brand-red"
            >
              전체 합격 실적 보기 &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 섹션 3: GR831과의 관계 */}
      <section className="bg-gray-50 px-6 py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl">
              GR831이 만든
              <br />
              공식 온라인 브랜드
            </h2>
            <p className="mt-6 leading-relaxed text-brand-gray">
              십일전략은 신생 브랜드가 아닙니다. 2026학년도 135명 합격을
              만들어낸 GR831약술형논술연구소가 직접 운영하는 공식 온라인
              브랜드입니다. 동일한 커리큘럼, 동일한 강사진, 단지 무대만
              온라인일 뿐입니다.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block text-sm font-medium text-brand-black hover:text-brand-red"
            >
              자세히 보기 &rarr;
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6">
            <Image
              src="/images/logo-light.jpg"
              alt="십일전략"
              width={140}
              height={60}
              className="h-14 w-auto"
            />
            <span className="text-2xl font-light text-brand-gray">&times;</span>
            <span className="font-serif text-2xl font-bold">GR831</span>
          </div>
        </div>
      </section>

      {/* 섹션 4: 4대 시스템 미리보기 */}
      <section className="px-6 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-serif text-3xl font-bold md:text-4xl">
            빈틈없는 합격 시스템
          </h2>
          <p className="mt-3 text-center text-brand-gray">
            온라인이지만 케어는 오프라인 이상
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                emoji: "\uD83D\uDCDD",
                title: "감독형 온라인 모의고사",
                desc: "실제 고사장 같은 긴장감",
              },
              {
                emoji: "\uD83D\uDCAC",
                title: "양방향 라이브 해설",
                desc: "강사와 실시간으로 소통",
              },
              {
                emoji: "\uD83D\uDCCA",
                title: "초정밀 성적 분석표",
                desc: "1:1 맞춤형 성적표",
              },
              {
                emoji: "\uD83C\uDF19",
                title: "수요일 밤 Q&A",
                desc: "심야 밀착 케어",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-brand-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-5xl">{item.emoji}</p>
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/content"
              className="text-sm font-medium text-brand-black hover:text-brand-red"
            >
              더 자세히 보기 &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 섹션 5: 커리큘럼 미리보기 */}
      <section className="bg-gray-50 px-6 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-serif text-3xl font-bold md:text-4xl">
            두 가지 트랙
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* 정규반 - 강조 */}
            <div className="relative rounded-xl border-2 border-brand-red bg-white p-6">
              <h3 className="text-xl font-bold">모의고사 정규반</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-brand-gray">
                <li>5월~10월</li>
                <li>매주 토요일 18:00~22:00</li>
                <li className="font-medium text-brand-black">
                  약술형논술 실전 훈련의 정석
                </li>
              </ul>
              <Link
                href="/curriculum"
                className="mt-6 inline-block text-sm font-medium text-brand-black hover:text-brand-red"
              >
                자세히 &rarr;
              </Link>
            </div>

            {/* 개념반 */}
            <div className="rounded-xl border border-brand-border bg-white p-6">
              <h3 className="text-xl font-bold">개념반</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-brand-gray">
                <li>매주 화/목요일</li>
                <li>밤 22:30~23:30</li>
                <li className="font-medium text-brand-black">
                  수학 4등급 이하 필수 수강
                </li>
              </ul>
              <Link
                href="/curriculum"
                className="mt-6 inline-block text-sm font-medium text-brand-black hover:text-brand-red"
              >
                자세히 &rarr;
              </Link>
            </div>

            {/* 파이널 */}
            <div className="relative rounded-xl border border-brand-border bg-white p-6">
              <span className="absolute right-4 top-4 rounded-full bg-brand-red px-3 py-1 text-xs font-medium text-white">
                Coming Soon
              </span>
              <h3 className="text-xl font-bold">11월 파이널 10일</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-brand-gray">
                <li>11월 집중반</li>
                <li>수능 직전 마무리</li>
              </ul>
              <Link
                href="/curriculum"
                className="mt-6 inline-block text-sm font-medium text-brand-black hover:text-brand-red"
              >
                자세히 &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
