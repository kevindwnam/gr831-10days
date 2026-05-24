import MenuCard from "@/components/MenuCard";
import SectionHeader from "@/components/SectionHeader";

export default function Home() {
  return (
    <div className="mx-auto max-w-lg px-5 py-6">
      {/* Hero 카드 */}
      <div className="overflow-hidden rounded-2xl border-t-4 border-brand-red bg-white p-6 shadow-sm">
        <p className="text-xs font-bold tracking-widest text-brand-red">
          ABBREVIATED ESSAY · 약술형논술 전문
        </p>

        <h1 className="mt-4 font-serif text-2xl font-black leading-tight">
          약술형논술로 만든
          <br />
          <span className="text-brand-red">합격의 공식</span>
        </h1>

        <p className="mt-4 text-sm leading-relaxed text-brand-gray">
          <strong className="text-brand-black">십일전략</strong>은 2026학년도{" "}
          <strong className="text-brand-black">가천대 135명 합격</strong>을 만든{" "}
          <strong className="text-brand-black">
            약술형논술 전문 라이브 학습 브랜드
          </strong>
          입니다. 참여형 온라인 수업과 정밀하게 설계된 학습 콘텐츠로 합격까지
          책임집니다.
        </p>

        {/* 핵심 가치 4줄 */}
        <div className="mt-5 space-y-2.5">
          {[
            "검증된 합격 실적 · 3개년 누적 353명",
            "참여형 라이브 수업 · ClassIn 양방향 소통",
            "매일 받는 학습 콘텐츠 · 매일국어 1컷 + 47회 모의고사",
            "데이터로 입증된 출제 적중률 · 수학 90% / 국어 80%",
          ].map((text) => (
            <div key={text} className="flex items-start gap-3">
              <span className="shrink-0 font-bold text-brand-red">✓</span>
              <span className="text-sm">{text}</span>
            </div>
          ))}
        </div>

        {/* 합격 실적 박스 */}
        <div className="mt-6 border-t border-brand-border pt-6">
          <p className="mb-3 text-center text-xs tracking-widest text-brand-gray">
            가천대학교 합격생 추이
          </p>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <p className="font-serif text-2xl font-black">98</p>
              <p className="text-[10px] text-brand-gray">24학년도</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-2xl font-black">120</p>
              <p className="text-[10px] text-brand-gray">25학년도</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl font-black text-brand-red">
                135
              </p>
              <p className="text-[10px] font-bold text-brand-red">26학년도</p>
            </div>
          </div>
          <p className="mt-3 text-center text-[10px] text-brand-gray">
            십일전략 · 약술형논술 전국 최다 합격률
          </p>
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
            icon="👨‍🏫"
            title="강사진"
            subtitle="약술형논술 온라인 전문 강사진"
            href="/faculty"
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
            icon="💬"
            title="합격 수기"
            subtitle="26학년도 76명의 합격생 이야기"
            href="/reviews"
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
