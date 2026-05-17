import Image from "next/image";
import MenuCard from "@/components/MenuCard";
import SectionHeader from "@/components/SectionHeader";

export default function Home() {
  return (
    <div className="mx-auto max-w-lg px-5 py-6">
      {/* Hero 카드 */}
      <div className="overflow-hidden rounded-2xl border-t-4 border-brand-red bg-white p-6 shadow-sm">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/logo-light.jpg"
            alt="십일전략"
            width={200}
            height={60}
            className="h-[60px] w-auto"
          />

          <h1 className="mt-4 font-serif text-2xl font-black leading-tight text-brand-black">
            약술형논술,
            <br />
            십일전략이 답입니다
          </h1>

          <p className="mt-5 font-serif text-3xl font-black text-brand-red">
            26학년도 가천대학교 135명 합격
          </p>
          <p className="mt-1 text-sm text-brand-gray">
            가천대 약술형논술 · 전국 합격률 1위
          </p>

          <p className="mt-4 flex items-center gap-1 text-lg font-bold text-brand-red">
            <span className="text-xs">※</span>
            34명 보건간호계열 합격
          </p>

          <div className="mt-5 w-full border-t border-brand-border" />

          <p className="mt-4 text-base font-bold text-brand-black">
            GR831 자문위원 출신 강사진
          </p>
          <p className="mt-1 text-sm text-brand-gray">
            출제 의도를 가장 잘 아는 팀
          </p>

          <p className="mt-5 text-xs text-brand-gray">
            ── 합격 역사 ──
          </p>
          <div className="mt-2 grid w-full grid-cols-2 gap-2">
            <div className="rounded-lg bg-brand-dark px-3 py-2 text-center text-white">
              <span className="text-xs">24학년도</span>
              <br />
              <span className="text-sm font-bold">98명 합격</span>
            </div>
            <div className="rounded-lg bg-brand-dark px-3 py-2 text-center text-white">
              <span className="text-xs">25학년도</span>
              <br />
              <span className="text-sm font-bold">120명 합격</span>
            </div>
          </div>
        </div>
      </div>

      {/* 섹션 1: 약술형 논술 가이드 */}
      <div className="mt-8">
        <SectionHeader title="약술형 논술 가이드" subtitle="전반적인 궁금증 해소" />
        <div className="mt-3 flex flex-col gap-3">
          <MenuCard
            icon="🏆"
            title="십일전략 소개"
            subtitle="브랜드 · GR831 관계 · 실적"
            href="/about"
          />
          <MenuCard
            icon="📖"
            title="약술형논술이란?"
            subtitle="정의 · 특징 · 출제 범위 · 전략"
            href="/yaksul"
          />
          <MenuCard
            icon="🎓"
            title="대상 대학 안내"
            subtitle="15개 대학 전형 정보"
            href="/universities"
          />
          <MenuCard
            icon="💬"
            title="자주 묻는 질문"
            subtitle="핵심 Q&A 7선"
            href="/faq"
          />
        </div>
      </div>

      {/* 섹션 2: 십일전략 바로 알기 */}
      <div className="mt-8">
        <SectionHeader title="십일전략 바로 알기" subtitle="수업 · 콘텐츠 · 합격생" />
        <div className="mt-3 flex flex-col gap-3">
          <MenuCard
            icon="📅"
            title="커리큘럼"
            subtitle="정규반 · 개념반 · 11월 파이널"
            href="/curriculum"
          />
          <MenuCard
            icon="📚"
            title="콘텐츠 & 학습"
            subtitle="모의고사 · 라이브해설 · 성적표 · Q&A"
            href="/content"
          />
          <MenuCard
            icon="🏅"
            title="명예의 전당"
            subtitle="26학년도 135명 합격생"
            href="/honor"
          />
        </div>
      </div>

      <div className="pb-12" />
    </div>
  );
}
