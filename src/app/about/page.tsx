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

        {/* 카드 4: 강사진 */}
        <div className="rounded-2xl bg-white p-6">
          <div className="flex flex-col gap-3">
            {[
              { slug: "hwang", subject: "수학", name: "황규훈 선생님", phrase: "완벽한, 완전한 약술 수학", youtube: "y-eem4vKBXI" },
              { slug: "kim", subject: "수학", name: "김후엽 선생님", phrase: "정확한 개념, 명확한 설명", youtube: null },
              { slug: "go", subject: "국어", name: "고원빈 선생님", phrase: "차이를 만드는 약술 국어", youtube: "x8tBXqu0Ot0" },
            ].map((t) => (
              <div
                key={t.slug}
                className="overflow-hidden rounded-xl bg-gray-50"
              >
                <div className="flex items-center p-4">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-brand-red bg-gray-200">
                    <Image
                      src={`/images/instructors/${t.slug}.png`}
                      alt={`${t.name} ${t.subject}`}
                      width={160}
                      height={160}
                      className="h-full w-full object-cover object-right-top"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="text-[11px] font-semibold tracking-wider text-brand-red">
                      {t.subject}
                    </p>
                    <p className="mt-0.5 text-base font-bold text-brand-black">
                      {t.name}
                    </p>
                    <p className="mt-0.5 text-[13px] text-brand-gray">
                      {t.phrase}
                    </p>
                  </div>
                </div>
                <details className="group border-t border-brand-border">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-medium text-brand-black transition hover:bg-white [&::-webkit-details-marker]:hidden">
                    약력 &amp; 영상 보기
                    <span className="text-xs text-brand-gray transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <div className="space-y-4 px-4 pb-4">
                    <Image
                      src={`/images/instructors/${t.slug}-bio.png`}
                      alt={`${t.name} 약력`}
                      width={600}
                      height={900}
                      className="w-full rounded-lg"
                    />
                    {t.youtube && (
                      <>
                        <p className="text-xs font-bold tracking-widest text-brand-red">
                          강의 영상
                        </p>
                        <div className="aspect-video overflow-hidden rounded-lg">
                          <iframe
                            src={`https://www.youtube.com/embed/${t.youtube}`}
                            width="100%"
                            height="100%"
                            allowFullScreen
                            loading="lazy"
                            title={`${t.name} 강의 영상`}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>

        {/* 카드 5: 슬로건 */}
        <div className="rounded-2xl bg-white p-8 text-center">
          <p className="font-serif text-3xl font-black text-brand-red">
            따로, 또 같이.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-brand-black">
            전국 어디서나 같은 수업, 케어는 오프라인 이상으로.
            <br />
            십일전략은 온라인이라는 새 무대에서 GR831의 합격 노하우를 그대로
            이어갑니다.
          </p>
        </div>

        {/* 카드 6: 하단 CTA */}
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
